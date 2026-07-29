import re, csv, json, itertools

with open('/tmp/page_meta_parsed.json') as f:
    entries = json.load(f)

# dedupe by path (keep first)
seen = set()
uniq = []
for e in entries:
    if e['path'] in seen:
        continue
    seen.add(e['path'])
    uniq.append(e)
entries = uniq
print("unique pages:", len(entries))

STOP = set("""a an the of in on for at to with and or your our my bali villa chef private
by is are be – | : , . & 's from""".split())

def tokens(title):
    t = title.lower()
    t = re.sub(r'[|:,\-–—&]', ' ', t)
    words = re.findall(r"[a-z0-9']+", t)
    return set(w for w in words if w not in STOP and len(w) > 2)

def jaccard_overlap(a, b):
    if not a or not b:
        return 0.0
    inter = a & b
    # overlap % relative to smaller set (subset containment) matches typical "keyword overlap" scans
    smaller = min(len(a), len(b))
    return len(inter) / smaller if smaller else 0.0

for e in entries:
    e['tok'] = tokens(e['title'])

pairs = []
for a, b in itertools.combinations(entries, 2):
    ov = jaccard_overlap(a['tok'], b['tok'])
    if ov >= 0.66 and len(a['tok']) > 0 and len(b['tok']) > 0:
        pairs.append((ov, a, b))

pairs.sort(key=lambda x: -x[0])
print("pairs >=66%:", len(pairs))

# load Pages.csv
pages = {}
with open('seo-department/data/gsc-2026-07-28/Pages.csv') as f:
    r = csv.DictReader(f)
    for row in r:
        url = row['Top pages']
        path = url.replace('https://mychef.id', '') or '/'
        pages[path] = {
            'clicks': int(row['Clicks']),
            'impressions': int(row['Impressions']),
            'ctr': row['CTR'],
            'position': float(row['Position']),
        }

results = []
for ov, a, b in pairs:
    pa = pages.get(a['path'])
    pb = pages.get(b['path'])
    imp_a = pa['impressions'] if pa else 0
    imp_b = pb['impressions'] if pb else 0
    clk_a = pa['clicks'] if pa else 0
    clk_b = pb['clicks'] if pb else 0
    pos_a = pa['position'] if pa else None
    pos_b = pb['position'] if pb else None
    results.append({
        'overlap': round(ov*100,1),
        'a_path': a['path'], 'a_title': a['title'], 'a_h1': a['h1'],
        'b_path': b['path'], 'b_title': b['title'], 'b_h1': b['h1'],
        'imp_a': imp_a, 'clk_a': clk_a, 'pos_a': pos_a,
        'imp_b': imp_b, 'clk_b': clk_b, 'pos_b': pos_b,
        'total_imp': imp_a + imp_b,
    })

results.sort(key=lambda r: -r['total_imp'])

with open('/tmp/overlap_results.json', 'w') as f:
    json.dump(results, f, indent=2)

# print top 40 with impressions >0 first
print("\n=== TOP by total impressions at stake ===")
for r in results[:60]:
    print(f"{r['total_imp']:5d} imp | A[{r['imp_a']:4d}/{r['clk_a']:2d} pos{r['pos_a']}] {r['a_path']:45s} <-> B[{r['imp_b']:4d}/{r['clk_b']:2d} pos{r['pos_b']}] {r['b_path']:45s} ov={r['overlap']}%")
