import os, sys, time, copy, json
from pathlib import Path

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, WeightedRandomSampler
from torchvision import datasets, transforms, models
import numpy as np
from sklearn.metrics import classification_report, confusion_matrix

# ─── CONFIG ────────────────────────────────────────────────────────────────────
DATA_DIR    = Path("dataset")          # layout: dataset/train/cat, dog, fox
                                       #         dataset/val/cat, dog, fox
MODEL_OUT   = Path("model.pth")
META_OUT    = Path("model_meta.json")
IMG_SIZE    = 224
BATCH_SIZE  = 32
EPOCHS      = 30
LR          = 1e-3
PATIENCE    = 7                        # early-stop patience (epochs)
DEVICE      = torch.device("cuda" if torch.cuda.is_available() else "cpu")
CLASSES     = ["cat", "dog", "fox"]   # alphabetical order expected by ImageFolder
# ───────────────────────────────────────────────────────────────────────────────


def verify_dataset(data_dir: Path):
    """Print dataset statistics and raise early if structure is wrong."""
    print("\n── Dataset verification ─────────────────────────────────────────────")
    for split in ("train", "val"):
        split_dir = data_dir / split
        if not split_dir.exists():
            sys.exit(f"[ERROR] Missing directory: {split_dir}\n"
                     f"Expected structure:\n"
                     f"  dataset/\n    train/\n      cat/  dog/  fox/\n"
                     f"    val/\n      cat/  dog/  fox/")
        for cls in CLASSES:
            cls_dir = split_dir / cls
            n = len(list(cls_dir.glob("*"))) if cls_dir.exists() else 0
            print(f"  {split}/{cls:4s}  →  {n:>5d} images")
    print("─────────────────────────────────────────────────────────────────────\n")


def get_transforms():
    """
    Training: aggressive augmentation to stop the model memorising colour/crop shortcuts.
    Validation: only resize + centre-crop + normalise (same as inference).
    """
    imagenet_mean = [0.485, 0.456, 0.406]
    imagenet_std  = [0.229, 0.224, 0.225]

    train_tf = transforms.Compose([
        transforms.RandomResizedCrop(IMG_SIZE, scale=(0.7, 1.0)),
        transforms.RandomHorizontalFlip(),
        transforms.RandomVerticalFlip(p=0.1),
        transforms.ColorJitter(brightness=0.3, contrast=0.3,
                               saturation=0.3, hue=0.05),
        transforms.RandomRotation(15),
        transforms.RandomGrayscale(p=0.05),
        transforms.ToTensor(),
        transforms.Normalize(imagenet_mean, imagenet_std),
        transforms.RandomErasing(p=0.2, scale=(0.02, 0.2)),   # hide patches → robust
    ])

    val_tf = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(IMG_SIZE),
        transforms.ToTensor(),
        transforms.Normalize(imagenet_mean, imagenet_std),
    ])

    return train_tf, val_tf


def make_weighted_sampler(dataset):
    """
    WeightedRandomSampler gives each class an equal chance per mini-batch.
    This is the #1 fix when the model collapses to predicting one class.
    """
    class_counts = np.bincount(dataset.targets)
    weight_per_class = 1.0 / class_counts.astype(float)
    sample_weights = torch.tensor(
        [weight_per_class[t] for t in dataset.targets], dtype=torch.float
    )
    return WeightedRandomSampler(sample_weights, num_samples=len(sample_weights),
                                 replacement=True)


def build_model(num_classes: int) -> nn.Module:
    """
    MobileNetV2 pre-trained on ImageNet, with a custom classifier head.
    Transfer learning gives us strong low-level features for free.
    We unfreeze the last 3 conv blocks + the classifier for fine-tuning.
    """
    model = models.mobilenet_v2(weights=models.MobileNet_V2_Weights.IMAGENET1K_V1)

    # Freeze everything first
    for p in model.parameters():
        p.requires_grad = False

    # Unfreeze last 3 feature blocks (indices 15-18) + classifier
    for layer in list(model.features.children())[15:]:
        for p in layer.parameters():
            p.requires_grad = True

    in_features = model.classifier[1].in_features
    model.classifier = nn.Sequential(
        nn.Dropout(0.4),
        nn.Linear(in_features, 256),
        nn.ReLU(),
        nn.Dropout(0.3),
        nn.Linear(256, num_classes),
    )

    return model.to(DEVICE)


def compute_class_weights(dataset):
    """
    Class weights for CrossEntropyLoss.
    Rarer classes get a higher weight so every mistake costs more.
    """
    counts = np.bincount(dataset.targets)
    total  = counts.sum()
    weights = torch.tensor(total / (len(counts) * counts), dtype=torch.float)
    return weights.to(DEVICE)


def train_one_epoch(model, loader, criterion, optimizer, scaler):
    model.train()
    running_loss, correct, total = 0.0, 0, 0

    for imgs, labels in loader:
        imgs, labels = imgs.to(DEVICE), labels.to(DEVICE)
        optimizer.zero_grad()

        with torch.cuda.amp.autocast(enabled=DEVICE.type == "cuda"):
            outputs = model(imgs)
            loss    = criterion(outputs, labels)

        scaler.scale(loss).backward()
        scaler.step(optimizer)
        scaler.update()

        running_loss += loss.item() * imgs.size(0)
        _, predicted  = outputs.max(1)
        correct  += predicted.eq(labels).sum().item()
        total    += labels.size(0)

    return running_loss / total, correct / total


@torch.no_grad()
def evaluate(model, loader, criterion):
    model.eval()
    running_loss, correct, total = 0.0, 0, 0
    all_preds, all_labels = [], []

    for imgs, labels in loader:
        imgs, labels = imgs.to(DEVICE), labels.to(DEVICE)
        outputs = model(imgs)
        loss    = criterion(outputs, labels)

        running_loss += loss.item() * imgs.size(0)
        _, predicted  = outputs.max(1)
        correct  += predicted.eq(labels).sum().item()
        total    += labels.size(0)
        all_preds.extend(predicted.cpu().numpy())
        all_labels.extend(labels.cpu().numpy())

    return running_loss / total, correct / total, all_preds, all_labels


def main():
    print(f"\n{'='*60}")
    print(f"  Cat / Dog / Fox Classifier — Training")
    print(f"  Device : {DEVICE}")
    print(f"  Epochs : {EPOCHS}  |  Batch : {BATCH_SIZE}  |  LR : {LR}")
    print(f"{'='*60}")

    verify_dataset(DATA_DIR)

    train_tf, val_tf = get_transforms()

    train_ds = datasets.ImageFolder(DATA_DIR / "train", transform=train_tf)
    val_ds   = datasets.ImageFolder(DATA_DIR / "val",   transform=val_tf)

    # Verify class order matches our CLASSES list
    assert train_ds.classes == sorted(CLASSES), (
        f"[ERROR] Dataset classes {train_ds.classes} ≠ expected {sorted(CLASSES)}.\n"
        f"Rename your folders to exactly: cat, dog, fox"
    )

    sampler = make_weighted_sampler(train_ds)

    train_loader = DataLoader(train_ds, batch_size=BATCH_SIZE,
                              sampler=sampler, num_workers=4, pin_memory=True)
    val_loader   = DataLoader(val_ds, batch_size=BATCH_SIZE,
                              shuffle=False, num_workers=4, pin_memory=True)

    model         = build_model(num_classes=len(CLASSES))
    class_weights = compute_class_weights(train_ds)
    criterion     = nn.CrossEntropyLoss(weight=class_weights, label_smoothing=0.1)

    # Two param groups: backbone (lower LR) + new head (higher LR)
    backbone_params    = [p for n, p in model.named_parameters()
                          if "classifier" not in n and p.requires_grad]
    classifier_params  = list(model.classifier.parameters())

    optimizer = optim.AdamW([
        {"params": backbone_params,   "lr": LR * 0.1},
        {"params": classifier_params, "lr": LR},
    ], weight_decay=1e-4)

    scheduler = optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=EPOCHS, eta_min=1e-6)
    scaler    = torch.cuda.amp.GradScaler(enabled=DEVICE.type == "cuda")

    best_val_acc  = 0.0
    best_weights  = None
    patience_ctr  = 0

    print(f"\n{'Epoch':>6} {'Train Loss':>11} {'Train Acc':>10} "
          f"{'Val Loss':>9} {'Val Acc':>9} {'LR':>10}")
    print("-" * 65)

    for epoch in range(1, EPOCHS + 1):
        t0 = time.time()

        train_loss, train_acc = train_one_epoch(model, train_loader, criterion,
                                                optimizer, scaler)
        val_loss, val_acc, val_preds, val_labels = evaluate(model, val_loader, criterion)
        scheduler.step()

        lr_now = optimizer.param_groups[1]["lr"]
        elapsed = time.time() - t0

        print(f"{epoch:>6}  {train_loss:>10.4f}  {train_acc:>9.4f}  "
              f"{val_loss:>8.4f}  {val_acc:>8.4f}  {lr_now:>10.2e}  "
              f"({elapsed:.1f}s)")

        if val_acc > best_val_acc:
            best_val_acc = val_acc
            best_weights = copy.deepcopy(model.state_dict())
            patience_ctr = 0
            torch.save(best_weights, MODEL_OUT)
            print(f"         ↳ ✓ New best val_acc = {best_val_acc:.4f}  (saved)")
        else:
            patience_ctr += 1
            if patience_ctr >= PATIENCE:
                print(f"\n[Early Stop] No improvement for {PATIENCE} epochs.")
                break

    # ── Final report ─────────────────────────────────────────────────────────
    print(f"\n{'='*60}")
    print(f"  Training complete.  Best val accuracy: {best_val_acc:.4f}")
    print(f"{'='*60}\n")

    model.load_state_dict(best_weights)
    _, _, val_preds, val_labels = evaluate(model, val_loader, criterion)

    print("Classification Report:")
    print(classification_report(val_labels, val_preds, target_names=sorted(CLASSES)))

    print("Confusion Matrix (rows=true, cols=predicted):")
    cm = confusion_matrix(val_labels, val_preds)
    print(f"         {' '.join(f'{c:>7}' for c in sorted(CLASSES))}")
    for i, row in enumerate(cm):
        print(f"  {sorted(CLASSES)[i]:>5}  {'  '.join(f'{v:>6}' for v in row)}")

    # Save metadata for app.py
    meta = {
        "classes":    sorted(CLASSES),
        "img_size":   IMG_SIZE,
        "model_path": str(MODEL_OUT),
        "imagenet_mean": [0.485, 0.456, 0.406],
        "imagenet_std":  [0.229, 0.224, 0.225],
    }
    META_OUT.write_text(json.dumps(meta, indent=2))
    print(f"\nModel  → {MODEL_OUT}")
    print(f"Meta   → {META_OUT}")
    print("Done ✓\n")


if __name__ == "__main__":
    main()