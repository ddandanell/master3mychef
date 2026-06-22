# Sprint Report — 2026-06-23 (Blue Book Optimizer)

**Commit:** `6104777` · **Deploy:** `dpl_B9fTJzdhJwqYXzSjRc6GhoKsau53` → READY on mychef.id · **tsc -b:** exit 0

## What was shipped
Removed a **duplicate, self-contradicting `AggregateRating` JSON-LD node** from 7 location pages:
Seminyak, Ubud, Canggu, Uluwatu, Jimbaran, Nusa Dua, Kuta.

Each of these pages emitted **two** `AggregateRating` blocks for the same business (`@id #business`) with **different review counts** — e.g. Seminyak `640` (embedded in LocalBusiness) vs `312` (standalone node). Conflicting rating counts for one entity are a structured-data integrity issue and a manual-action risk (the team already removed invalid rating markup from legal pages for the same reason, commit `7adfc18`). The redundant standalone node was removed; the single rating embedded in each page's `LocalBusiness` schema was kept. Net: each page went from 3 rating signals to a consistent set.

## Verified
- `npx tsc -b` exit 0 (strict mode, no unused-var failures).
- Vercel production deploy READY, aliased to mychef.id.
- Live JSON-LD on /locations/seminyak re-parsed in browser: the standalone `312` node is gone.
- Desktop render healthy (nav, hero, lead-magnet popup all OK). Change is JSON-LD-only — no layout surface.

## ⚠️ Root-cause finding — needs a dedicated sprint + owner decision (DO NOT auto-fix blind)
The deeper conflict is **not** resolved by the above and should be the next priority:

1. **Global vs per-page rating clash.** `index.html` (line ~138) hardcodes a global `LocalBusiness` (`@id https://mychef.id/#business`) with `reviewCount: 500`, injected on **every** page. Each location page *also* injects its own `LocalBusiness` (same `@id`) with a *different* count (Seminyak 640, Ubud 490, Canggu 620, …). Google sees **one entity with two contradictory ratings** site-wide. After today's fix, /locations/seminyak still reports both `500` and `640`.
2. **Scale:** `aggregateRating` appears in ~91 source files. A blind find-replace is risky.
3. **Data authenticity (flag for founder):** the review counts (global 500; per-location 340–640; popup "560+ villa hosts") are inconsistent and unverifiable from the codebase. Google penalizes fabricated/aggregate review markup not backed by on-page reviews. **Before adding *more* rating schema (a Blue Book task item), the real, authoritative review count and source must be confirmed.** I deliberately did NOT add new AggregateRating schema this sprint — doing so would compound a likely-fabricated-data problem.

**Recommended fix (next sprint):** make `#business` carry exactly ONE `aggregateRating` (the global one in `index.html`), and strip `aggregateRating` from page-level `LocalBusiness` objects — OR give each location a distinct `@id` (`#business-seminyak`) if per-location ratings are genuinely sourced. Requires owner confirmation of the true number first.

## State of the Blue Book HIGH-priority list (mostly already done in prior sprints)
- Blog cost guide `/blog/private-chef-cost-bali` — EXISTS
- Per-chef profile pages `/chefs/{slug}` (8) — EXIST, in sitemap, internally linked
- Lead magnets — ExitIntentPopup + EmailCaptureBar live (price-guide popup verified rendering)
- Corporate case studies page, Reviews page — EXIST
- BreadcrumbList on all 12 location pages — ALREADY PRESENT
- `loading="lazy"`: 158 imgs already lazy; remaining raw `<img>` are heroes with `fetchPriority="high"` (correctly eager — must NOT be lazied). Alt text: no missing/empty alts found.

Conclusion: the site is mature; most list items are complete. Highest remaining value is the schema-integrity reconciliation above, not net-new pages.
