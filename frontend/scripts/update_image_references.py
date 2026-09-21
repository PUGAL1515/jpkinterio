import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TARGETS = [ROOT / 'public' / 'index.html']
TARGETS.extend(sorted((ROOT / 'src').rglob('*.*')))

pattern = re.compile(r"([A-Za-z0-9_./%:\\-{}$]+?\.(?:png|jpg|jpeg))")


def replace_value(match: re.Match[str]) -> str:
    value = match.group(1)
    if value.startswith('data:') or 'base64' in value.lower():
        return match.group(0)
    return value.rsplit('.', 1)[0] + '.webp'


for target in TARGETS:
    if not target.exists() or target.is_dir():
        continue

    text = target.read_text(encoding='utf-8')
    updated = pattern.sub(replace_value, text)
    if updated != text:
        target.write_text(updated, encoding='utf-8')
        print(f"Updated {target.relative_to(ROOT)}")
