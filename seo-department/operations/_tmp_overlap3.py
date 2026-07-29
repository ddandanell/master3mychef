import json, re

with open('/tmp/overlap_results.json') as f:
    results = json.load(f)

def family(path):
    parts = path.strip('/').split('/')
    if len(parts) >= 2:
        return '/'.join(parts[:-1])  # e.g. locations, private-chef, catering, blog, events, etc.
    return path  # top-level single-segment path

interesting = []
same_family_diff_leaf = []
for r in results:
    fa, fb = family(r['a_path']), family(r['b_path'])
    leaf_a = r['a_path'].strip('/').split('/')[-1]
    leaf_b = r['b_path'].strip('/').split('/')[-1]
    if fa == fb and fa in ('locations','private-chef') and leaf_a != leaf_b:
        same_family_diff_leaf.append(r)
    else:
        interesting.append(r)

print("same-family-diff-area (auto-benign):", len(same_family_diff_leaf))
print("remaining interesting pairs:", len(interesting))
print()
for r in interesting:
    print(f"{r['total_imp']:5d} | ov={r['overlap']:5.1f}% | A[{r['imp_a']:4d}/{r['clk_a']:2d} p{r['pos_a']}] {r['a_path']:42s} :: {r['a_title']}")
    print(f"          |            | B[{r['imp_b']:4d}/{r['clk_b']:2d} p{r['pos_b']}] {r['b_path']:42s} :: {r['b_title']}")
    print()
