# Next Session Brief — start here

> **⚠ CORRECTION (2026-07-28):** the indexing conclusions in this document were built on a stale GSC Page Indexing report and are partly wrong. Read `CORRECTION-indexing-report-is-stale.md` first.

**Written:** 2026-07-28 · **Priority order is deliberate. Work top-down.**

---

## Opening move

> **"Pull the full GSC query list and fix `bali wedding catering`."**

Search Console is accessible via the browser (the account is authenticated — no API key needed):
`https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Amychef.id&num_of_days=28`

Set **Rows per page → 500** on the Queries tab to page through all 608 queries, and repeat on the **Pages** tab. Export if the UI allows it.

---

## What Search Console showed (28 days to 2026-07-26)

| Metric | Value |
|---|---|
| Clicks | 423 |
| Impressions | 12,700 |
| CTR | 3.3% |
| Average position | **10.3** |

### Top 10 queries

| Query | Clicks | Impressions | CTR |
|---|---:|---:|---:|
| private chef bali | 14 | 382 | 3.7% |
| bali private chef | 5 | 100 | 5.0% |
| mychef (branded) | 5 | 19 | 26% |
| private chef canggu | 4 | 65 | 6.2% |
| chef bali | 3 | 54 | 5.6% |
| canggu private chef | 3 | 43 | 7.0% |
| private chef bali canggu | 3 | 34 | 8.8% |
| ubud private chef | 3 | 19 | 16% |
| bali butler service | 3 | 13 | 23% |
| **bali wedding catering** | **2** | **260** | **0.8%** |

---

## Three conclusions that override earlier assumptions

**1. Demand is "private chef", not "catering."** Nine of ten top queries are private-chef terms. The 11-page catering cluster appears once. The catering work done on 2026-07-28 was correct in its fixes but aimed at a secondary category. **Re-scope: private chef is the head category, catering is the supporting cluster.**

**2. `bali wedding catering` is the single biggest wasted opportunity on the site.** Second-highest impressions of any query (260) at a 0.8% CTR. Being shown to hundreds of people searching the highest-value service and earning almost no clicks. Four URLs compete for this intent (see `catering-cluster/03-DECANNIBALISATION-PLAN.md`), which is the most likely cause of a position too low to earn clicks.

**3. Average position 10.3 on 12.7k impressions = a ranking-position problem, not a visibility problem.** Moving average position from ~10 to ~6 would roughly triple clicks with zero new content. Prioritise position gains on existing ranking pages over publishing anything new.

**Correction to an earlier recommendation:** `/pricing` was prioritised because Vercel Analytics showed it as the #2 page (221 visitors/30d). GSC shows entry is via private-chef queries, so `/pricing` is a *post-landing* destination, not an entry point. Do not treat it as a search-entry priority.

---

## Task order for next session

1. **Pull all 608 queries + the Pages tab.** Build a query→URL map from real data, replacing the inferred map in `catering-cluster/02-KEYWORD-OWNERSHIP-MAP.md`.
2. **Fix `bali wedding catering`.** Identify which of the four competing URLs holds the impressions, consolidate intent onto it, rewrite title and meta description for CTR. Do not delete the others — re-target them.
3. **Identify every query where impressions are high and CTR is under ~1.5%.** Same pattern as wedding catering; each is a title/snippet fix with immediate upside.
4. **Re-scope the keyword strategy** around private chef as the head category.
5. Then return to the outstanding catering work.

---

## Still blocked on the owner

| # | Question | Blocks |
|---|---|---|
| 1 | Evidence for "Michelin-trained"? | Claims on 4+ pages |
| 2 | NPWP number for the file? | Corporate page claim |
| 3 | Evidence for "560+ villa hosts" / "500+ villa events"? | Homepage, popup, area pages (R-003) |
| 4 | Suppliers substantiating "organic" and "halal-certified"? | BBQ, retreat, villa pages |
| 5 | Corporate minimum — IDR 15,000,000 (live) or 50,000,000 (per `SEO_BLOCKER_DECISIONS.md` A3)? | Corporate pricing |
| 6 | Retreat minimum, in numbers? | Retreat page has none |
| 7 | Genuine service coverage across the 61 published areas? | R-001 |

---

## Environment notes (save time)

- **Deploys:** `vercel --prod` from the working tree; token in `.env.local`. **The production alias does not move automatically** — always follow with `vercel promote <url>`, then verify against the live site. Pushing to `main` alone deploys nothing.
- **Pre-commit hook** can't run in the Linux sandbox (macOS binaries in `node_modules`). Its three checks — required AI-skills files present, no secret patterns staged, not on `main` — must be run manually before using `--no-verify`.
- **`pnpm` cannot run here** (node_modules linked to the macOS pnpm store). Do not add dependencies; a lockfile mismatch will break the Vercel build. Solve with plain CSS or existing packages.
- **Three content sources per page:** `page-meta.ts` (what crawlers index), the JSX component, and `articleContent.ts` (prerendered static HTML). A copy change may need all three.
- **Ahrefs** is connected but the plan lacks API access ("Insufficient plan"). **Semrush** is connected but out of units. **SerpApi** key in `.env.local` is invalid. **DataForSEO** has no password.
