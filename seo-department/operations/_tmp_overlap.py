import re, csv, json

with open('src/data/page-meta.ts', encoding='utf-8') as f:
    src = f.read()

# find all "path: '...'" positions and extract path value, then within following text upto next "path: '"
path_iter = list(re.finditer(r"path:\s*'([^']*)'", src))
print("path count", len(path_iter))

entries = []
for i, m in enumerate(path_iter):
    start = m.end()
    end = path_iter[i+1].start() if i+1 < len(path_iter) else len(src)
    block = src[start:end]
    tmatch = re.search(r"title:\s*'([^']*)'", block)
    h1match = re.search(r"h1:\s*'([^']*)'", block)
    title = tmatch.group(1) if tmatch else None
    h1 = h1match.group(1) if h1match else None
    entries.append({'path': m.group(1), 'title': title, 'h1': h1})

missing_title = [e for e in entries if e['title'] is None]
missing_h1 = [e for e in entries if e['h1'] is None]
print("missing title:", len(missing_title))
print("missing h1:", len(missing_h1))
for e in missing_title[:5]:
    print("MT", e)
for e in missing_h1[:5]:
    print("MH", e)

with open('/tmp/page_meta_parsed.json', 'w') as f:
    json.dump(entries, f, indent=2)
