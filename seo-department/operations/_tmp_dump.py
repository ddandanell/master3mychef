import json
with open('/tmp/page_meta_parsed.json') as f:
    entries = json.load(f)
seen=set(); uniq=[]
for e in entries:
    if e['path'] in seen: continue
    seen.add(e['path']); uniq.append(e)
entries = uniq
by_path = {e['path']: e for e in entries}

wanted = ['/', '/fine-dining/private-chef-bali', '/bali-wedding-catering-packages', '/events/weddings',
'/catering/bbq-catering', '/bbq-grill', '/private-dining-indonesia', '/fine-dining', '/fine-dining/menus',
'/locations/uluwatu', '/private-chef/uluwatu', '/fine-dining/chefs-table', '/dining-styles',
'/blog/fine-dining-guide', '/blog/fine-dining-at-home-bali', '/catering/drop-off-catering',
'/blog/drop-off-catering-bali', '/privacy', '/cancellation', '/catering', '/catering/buffet',
'/events/retreats', '/events/corporate-events', '/pricing', '/events', '/catering/corporate-catering']

for p in wanted:
    e = by_path.get(p)
    if e:
        print(f"PATH: {p}\n  TITLE: {e['title']}\n  H1: {e['h1']}\n  title_len: {len(e['title'])}\n")
    else:
        print(f"PATH: {p} NOT FOUND\n")
