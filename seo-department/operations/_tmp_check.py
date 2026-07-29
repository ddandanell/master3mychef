import json, re

with open('/tmp/page_meta_parsed.json') as f:
    entries = json.load(f)
seen=set(); uniq=[]
for e in entries:
    if e['path'] in seen: continue
    seen.add(e['path']); uniq.append(e)
entries = uniq

by_path = {e['path']: e for e in entries}

STOP = set("""a an the of in on for at to with and or your our my bali villa chef private
by is are be – | : , . & 's from""".split())
def tokens(title):
    t = title.lower()
    t = re.sub(r'[|:,\-–—&]', ' ', t)
    words = re.findall(r"[a-z0-9']+", t)
    return set(w for w in words if w not in STOP and len(w) > 2)

pairs_to_check = [
    ('/events/corporate-events', '/catering/corporate-catering'),
    ('/private-dining-indonesia', '/fine-dining'),
    ('/private-dining-indonesia', '/fine-dining/private-chef-bali'),
]
for a,b in pairs_to_check:
    ta = tokens(by_path[a]['title'])
    tb = tokens(by_path[b]['title'])
    inter = ta & tb
    ov = len(inter)/min(len(ta),len(tb)) if min(len(ta),len(tb)) else 0
    print(a, by_path[a]['title'])
    print(b, by_path[b]['title'])
    print('overlap', round(ov*100,1), 'shared:', inter)
    print()
