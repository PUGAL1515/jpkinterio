import os
from PIL import Image

PUBLIC_IMAGES = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
EXTS = {'.png', '.jpg', '.jpeg'}


def convert_file(path: str) -> bool:
    root, ext = os.path.splitext(path)
    ext = ext.lower()
    if ext not in EXTS:
        return False

    webp_path = f"{root}.webp"
    if os.path.exists(webp_path):
        return False

    try:
        with Image.open(path) as img:
            rgb = img.convert('RGB')
            rgb.save(webp_path, 'WEBP', quality=85, method=6)
        os.remove(path)
        return True
    except Exception as exc:
        print(f"Failed: {path} -> {exc}")
        return False


if __name__ == '__main__':
    converted = 0
    skipped = 0
    for root, _, files in os.walk(PUBLIC_IMAGES):
        for file in files:
            path = os.path.join(root, file)
            if convert_file(path):
                converted += 1
            elif os.path.splitext(path)[1].lower() in EXTS:
                skipped += 1

    print(f"Converted: {converted}")
    print(f"Skipped: {skipped}")
