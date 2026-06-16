# Cat / Dog / Fox Classifier

## Project structure
```
project/
├── train.py
├── app.py
├── requirements.txt
├── model.pth          ← created by train.py
├── model_meta.json    ← created by train.py
├── templates/
│   └── index.html
└── dataset/
    ├── train/
    │   ├── cat/   (≈400 images)
    │   ├── dog/   (≈400 images)
    │   └── fox/   (≈400 images)
    └── val/
        ├── cat/   (≈100 images)
        ├── dog/   (≈100 images)
        └── fox/   (≈100 images)
```

## 1 — Organise your dataset
Split your 500 images per class into 80% train / 20% val:
```bash
# Quick split script (run once)
python - <<'EOF'
import shutil, random
from pathlib import Path

src_root = Path("your_raw_images")   # change this
dst_root = Path("dataset")
classes  = ["cat", "dog", "fox"]
split    = 0.8

for cls in classes:
    imgs = sorted((src_root / cls).glob("*"))
    random.shuffle(imgs)
    cut  = int(len(imgs) * split)
    for phase, chunk in [("train", imgs[:cut]), ("val", imgs[cut:])]:
        out = dst_root / phase / cls
        out.mkdir(parents=True, exist_ok=True)
        for img in chunk:
            shutil.copy(img, out / img.name)
print("Done")
EOF
```

## 2 — Install dependencies
```bash
pip install -r requirements.txt
```

## 3 — Train
```bash
python train.py
```
Output: `model.pth` and `model_meta.json`

## 4 — Run the web app
```bash
python app.py
```
Open **http://localhost:5000** in your browser (or replace `localhost` with your LAN IP).

## Why the old model always predicted "cat"
| Problem | Fix applied |
|---|---|
| Sorted `ImageFolder` mapped "cat"=0 and loss converged to always predict 0 | `WeightedRandomSampler` + `CrossEntropyLoss(weight=…)` |
| Model collapsed to majority-class shortcut | Label smoothing + balanced sampling |
| Overfitting to colour/texture | Aggressive augmentation (jitter, erasing, rotation) |
| Shallow custom CNN with random weights | MobileNetV2 pre-trained on ImageNet |
| Single learning rate for all layers | Separate LRs for backbone (×0.1) vs head |
