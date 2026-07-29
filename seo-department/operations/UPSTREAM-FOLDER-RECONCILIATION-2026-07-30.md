# Upstream folder reconciliation — 2026-07-30

**Decision:** `D-013`. Canonical upstream is `/Users/openclaw/Movies/LIve website/mychef-seo`. The Downloads copy is archived.

---

## What was believed

That `Movies/LIve website/mychef-seo` and `Downloads/mychef-seo` were the same folder — an alias, a symlink, or two names for one directory.

## What is actually true

They were two separate directories on the same volume, both live, both being edited.

| | Movies copy | Downloads copy |
| --- | --- | --- |
| inode | 203762451 | 205078325 |
| symlink? | no | no |
| files | identical file list — 0 files unique to either side | |
| files with differing content | **113** | |
| newer copy | **110 files** | 3 files |
| referenced by publish scripts | **all 9** | none |

Verified by `stat` inode comparison and a full recursive `cmp` of every file. Not inferred.

## Why it mattered

Nine scripts hardcode the Movies path:

```
scripts/publish-content.py                      scripts/deploy-metadata.py
scripts/publish-hub-content.py                  scripts/deploy-metadata.ts
scripts/publish-remaining-content.py            scripts/audit-live-metadata.py
scripts/publish-pillar-bar-content.py           scripts/soften-staffing-prices.py
scripts/publish-location-private-chef-content.py
scripts/seo-content/map-content-to-components.ts
```

Nothing reads Downloads. **Every edit made in the Downloads copy was invisible to the site.** It was not a risk of being undone later — it had already never taken effect.

## The one real casualty

Three files were newer in Downloads. They are exactly the three from commit `fb103e05` ("5-guest minimum on 3 missed fine-dining pages"):

| File | Movies (before) | Downloads |
| --- | --- | --- |
| `content/fine-dining_private-chef-bali.md` | 2026-07-26 | 2026-07-29 |
| `content/fine-dining_tasting-menu.md` | 2026-07-25 | 2026-07-29 |
| `content/private-tasting-menu-bali.md` | 2026-07-25 | 2026-07-29 |

In each, the substantive change was one line: `Minimum 4 guests` → `Minimum 5 guests`.

**Ported to the canonical folder on 2026-07-30.** `Minimum 4 guests` now returns zero hits across `content/`.

## What was deliberately NOT ported

**The JSON-LD scaffolding.** 97 Downloads files carry `## 3. SUGGESTED STRUCTURED DATA (JSON-LD)` sections; only 29 Movies files do. This is why Downloads was larger in 99 of 113 cases. The canonical folder dropped these on purpose once schema moved into code — pulling them back would have resurrected retired markup.

Note the scaffolding was also **internally stale**: the Downloads JSON-LD for `fine-dining_private-chef-bali.md` still answered *"Four guests for signature menus"* even after the headline was fixed to 5. The Downloads fix was itself incomplete.

**Crawl snapshots.** `crawl/` and `Update 2/crawl2/` still contain `Minimum 4 guests`. Left untouched by design — they are dated records of what the live site said at crawl time. Editing them would destroy the audit trail.

**`content/_locations_jakarta.md`** — 13,293 b in Downloads, 820 b in Movies. The gutting is intentional (Bali-only cleanup). Movies is correct.

---

## Open item for owner review — not changed

`content/catering_drop-off-catering.md:41` reads **`Min. 4 guests`**.

D-008 scopes the 5-guest minimum to dining formats *including catering*. Drop-off catering plausibly falls inside that scope, which would make this a fourth missed page. It was **not** changed here, because D-008 lists formats explicitly and drop-off is not among them, and inventing scope is how the original inconsistency happened.

Two other 4-guest references were reviewed and judged **intentional**:

- `content/catering_floating-breakfast.md` — "couple packages start at two guests; the group brunch has a minimum of four guests." Floating breakfast is not a D-008 dining format and the two-guest couple package is explicit.
- Chef's Table "seats six" — capacity, not a minimum. Already noted under D-008.

---

## Actions taken

1. Full backup: `Movies/LIve website/mychef-seo-BACKUP-2026-07-30` (`ditto`, taken before any write).
2. 5-guest fix ported to the 3 canonical files.
3. `Downloads/mychef-seo` renamed to `Downloads/mychef-seo-ARCHIVED-2026-07-30-DO-NOT-EDIT`, with a `README-ARCHIVED.md` explaining why.
4. Repaired the `.worktrees/seo-harvest` git pointers, which had a dead sandbox path (`/sessions/peaceful-clever-noether/...`) baked in and were broken on the Mac.

## Standing rule

There is one upstream content folder. It is `Movies/LIve website/mychef-seo`. Before editing upstream markdown, confirm the path matches the one in `scripts/publish-content.py`. A folder that no script reads is not upstream — it is a copy.

---

*Recorded under D-013. Backup retained until the next successful publish run is verified.*
