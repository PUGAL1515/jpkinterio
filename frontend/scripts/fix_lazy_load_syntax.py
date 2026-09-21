from pathlib import Path

files = [p for p in Path('src').rglob('*') if p.is_file() and p.suffix.lower() in {'.js', '.jsx', '.ts', '.tsx', '.html'}]

replacements = [
    ('/ loading=lazy decoding=async>', ' loading="lazy" decoding="async" />'),
    (' loading=lazy decoding=async>', ' loading="lazy" decoding="async">'),
    ('onError={(e) = loading=lazy decoding=async> {', 'onError={(e) => {'),
    ('onError={(e) = loading=lazy decoding=async>', 'onError={(e) =>'),
    ('loading=lazy decoding=async>', 'loading="lazy" decoding="async">'),
    ('loading=lazy decoding=async', 'loading="lazy" decoding="async"'),
]

for path in files:
    try:
        text = path.read_text(encoding='utf-8')
    except Exception:
        continue
    original = text
    for old, new in replacements:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding='utf-8')
        print('fixed', path)
