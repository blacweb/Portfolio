import io, json, sys
from pathlib import Path

import torch
import torch.nn as nn
from torchvision import transforms, models
from PIL import Image
from flask import Flask, request, jsonify, render_template, send_from_directory

# ─── Load metadata written by train.py ────────────────────────────────────────
META_PATH = Path("model_meta.json")
if not META_PATH.exists():
    sys.exit("[ERROR] model_meta.json not found. Run train.py first.")

meta        = json.loads(META_PATH.read_text())
CLASSES     = meta["classes"]           # ['cat', 'dog', 'fox']
IMG_SIZE    = meta["img_size"]          # 224
MODEL_PATH  = Path(meta["model_path"])  # model.pth
MEAN        = meta["imagenet_mean"]
STD         = meta["imagenet_std"]

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# ───────────────────────────────────────────────────────────────────────────────


def build_model(num_classes: int) -> nn.Module:
    """Rebuild the exact same architecture used in train.py."""
    model = models.mobilenet_v2(weights=None)
    in_features = model.classifier[1].in_features
    model.classifier = nn.Sequential(
        nn.Dropout(0.4),
        nn.Linear(in_features, 256),
        nn.ReLU(),
        nn.Dropout(0.3),
        nn.Linear(256, num_classes),
    )
    return model


def load_model() -> nn.Module:
    if not MODEL_PATH.exists():
        sys.exit(f"[ERROR] Model file '{MODEL_PATH}' not found. Run train.py first.")
    model = build_model(num_classes=len(CLASSES))
    state = torch.load(MODEL_PATH, map_location=DEVICE)
    model.load_state_dict(state)
    model.to(DEVICE)
    model.eval()
    print(f"[INFO] Model loaded from '{MODEL_PATH}' on {DEVICE}")
    return model


# Identical to the val/inference transform in train.py
inference_tf = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(IMG_SIZE),
    transforms.ToTensor(),
    transforms.Normalize(MEAN, STD),
])


@torch.no_grad()
def predict(model: nn.Module, image_bytes: bytes) -> dict:
    """Run inference and return class + confidence scores."""
    img    = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    tensor = inference_tf(img).unsqueeze(0).to(DEVICE)   # (1, 3, H, W)

    logits = model(tensor)                                # (1, num_classes)
    probs  = torch.softmax(logits, dim=1).squeeze()       # (num_classes,)

    top_idx   = int(probs.argmax())
    top_class = CLASSES[top_idx]
    top_conf  = float(probs[top_idx])

    all_scores = {cls: float(probs[i]) for i, cls in enumerate(CLASSES)}
    return {
        "prediction": top_class,
        "confidence": round(top_conf * 100, 2),
        "scores":     {k: round(v * 100, 2) for k, v in all_scores.items()},
    }


# ─── Flask app ─────────────────────────────────────────────────────────────────
app   = Flask(__name__, template_folder="templates", static_folder="static")
model = load_model()


@app.route("/")
def index():
    return render_template("index.html", classes=CLASSES)


@app.route("/predict", methods=["POST"])
def predict_route():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    f = request.files["file"]
    if f.filename == "":
        return jsonify({"error": "Empty filename"}), 400

    allowed = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif"}
    ext = Path(f.filename).suffix.lower()
    if ext not in allowed:
        return jsonify({"error": f"Unsupported format '{ext}'"}), 415

    try:
        result = predict(model, f.read())
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/health")
def health():
    return jsonify({"status": "ok", "device": str(DEVICE), "classes": CLASSES})


if __name__ == "__main__":
    print(f"\n{'='*55}")
    print(f"  Animal Classifier API")
    print(f"  Classes : {CLASSES}")
    print(f"  Device  : {DEVICE}")
    print(f"  Open    : http://0.0.0.0:5000")
    print(f"{'='*55}\n")
    app.run(host="0.0.0.0", port=5000, debug=False)
