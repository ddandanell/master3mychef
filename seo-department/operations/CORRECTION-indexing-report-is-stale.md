# CORRECTION — the Page Indexing report is stale. Read this before acting on it.

**Written:** 2026-07-28, end of session
**Supersedes:** the indexing conclusions in `STRATEGY-CONFIRMED.md`, `GROWTH-DECISION.md` and `NEXT-SESSION-BRIEF.md`

---

## What I got wrong

On 2026-07-28 I read the GSC **Page Indexing** report (193 not indexed / 140 indexed) and built strategy on it. I concluded:

- 57 of 61 `/private-chef/{area}` pages were unindexed
- The site was "roughly twice the page count its authority supports"
- Pruning URLs was the biggest available lever

**Live URL Inspection contradicts this.** Spot-checks of six pages the report listed as not indexed:

| Page | Report | Live inspection |
|---|---|---|
| `/private-chef/berawa` | Not indexed | **Indexed** |
| `/private-chef/pererenan` | Not indexed | **Indexed** |
| `/catering/grazing-tables` | Not indexed | **Indexed** |
| `/catering/corporate-catering` | Not indexed | **Indexed** |
| `/catering/babi-guling` | Not indexed | Confirmed not indexed |
| `/catering/drop-off-catering` | Not indexed | Confirmed not indexed |

**Four of six were already indexed.** If that ratio holds, the true figure is nearer 60–70 unindexed, not 193 — and much of that is bar-services and low-performing blog content that does not need indexing.

## The rule that follows

> **The Page Indexing report is a periodic snapshot. URL Inspection is live. Never act on the report without spot-checking against URL Inspection first.**

The drilldown for "Discovered – currently not indexed" showed *"Validation: Started 29/07/2026"*, meaning Google was actively re-checking while I read it. The data was in flux.

A second symptom of the same staleness: `/catering/babi-guling` reports *"Referring page: None detected"* while the live `/catering` hub links to it three times. That is Google's crawl record being out of date, not an actual orphan.

## What still stands

- **Bar-services withdrawn from the sitemap** — justified on its own merits (unproven line, no clients), not on the indexing panic.
- **`private chef bali` at position 18.4 while the homepage ranks 9.3** — measured in the Performance report, unaffected by this correction.
- **DR 23** — measured via Ahrefs. Authority remains the ceiling.
- Everything shipped today: calculators, price claims, allergy language, Michelin/founding-year facts, Jakarta redirects, homepage cannibalisation, article styling, the rebuilt calculator.

## What does NOT stand

- ~~The site is twice the size its authority supports~~ — unsupported by live data
- ~~57 area pages are invisible to Google~~ — at least some are indexed; sample says most
- ~~Pruning is the biggest lever~~ — it is not; **link building is**

**Do not prune further, and do not rebuild the sitemap again, without live-verifying a sample first.**

## Corrected priority order

1. **Link building.** DR 23 is the binding constraint on position, and nothing has been done here. This is the real work.
2. **Move `private chef bali` from 18.4.** Largest query on the site (749 impressions); homepage already ranks 9.3 for related terms.
3. **Request indexing** only for pages live-verified as not indexed. ~10–15/day quota. Submitted 2026-07-28: `/catering/babi-guling`, `/catering/drop-off-catering`.
4. Fix the ~39 files still stating a 6-guest minimum (separating genuine minimums from format capacities such as Chef's Table seating six).
5. Correct the upstream markdown at `mychef-seo/content/`, or the next `publish-content.py` run reverts several of today's content fixes.

## Method note for future sessions

I built a multi-hour strategy on a single unverified data source and had to retract it. The department's own rules require separating verified fact from inference — the report was inference about Google's state, not fact. **Cross-check any single source before it drives a strategic conclusion**, particularly when the conclusion argues for removing things.
