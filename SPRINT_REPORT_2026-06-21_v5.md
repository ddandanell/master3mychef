# Blue Book Sprint — COMPLETED (2026-06-21, run 5)

**Outcome: Fixed the canonical → 404 SEO defect on the Weddings page (the bug flagged for "next run" by run 4).**
Commit `3f88534` → Vercel `dpl_8NW4piV69PNQ9q3DAzP9PPLLC9Au` (READY, aliased to mychef.id). `tsc -b` clean, verified live in-browser.

## Starting state (verified, not assumed)
- `HEAD == origin/main == 537ba1c`, build source = root `src/` (confirmed, not `app/`).
- 4 files had **uncommitted** edits left by a prior session: `PricingPage.tsx`, `ServiceBartendersPage.tsx`,
  `ServiceHostPage.tsx`, `ServiceWaitersPage.tsx`. Inspected the diffs: they are a coherent, deliberate
  **pricing migration** (per-shift tiers → single net hourly rate, e.g. Host IDR 300k/hr 3-hr min; removal of
  "++ 11% tax + 10% service" notes). This is a business/pricing decision I cannot verify against a source of
  truth, so I deliberately **did NOT commit or revert them** — left untouched for the owner to confirm.
  My commit added only the 2 bug-fix files (see below); the pricing files remain uncommitted in the tree.

## What shipped
The Weddings page renders at route `/events/weddings`, but its `SeoHead` declared everything under
`/events/weddings-bali` — a path with **no route and no redirect** (verified: not in `App.tsx`, not in
`vercel.json` redirects), so it resolves to the SPA 404 component. A canonical pointing at a 404 is a real
SEO defect (Google may drop/ignore the page).

Fix — replaced all 8 `/events/weddings-bali` references with the live `/events/weddings`:
- `src/pages/EventsWeddingsPage.tsx` (7): `canonical`, `detailedServiceSchema` url, `eventSchema` url,
  3× `offerSchema` url, `breadcrumbSchema` url.
- `src/data/related-services.ts` (1): the related-services card link (was a broken internal link → 404).

## Verification (all green)
- `npx tsc -b` → exit 0 (root build source). `grep weddings-bali src/` → 0 matches.
- Committed only the 2 intended files (`git add <file1> <file2>`, NOT `git add -A`) → `3f88534`, 8 ins / 8 del.
- Vercel `3f88534` → READY, aliased to mychef.id / www.mychef.id.
- Live in-browser (JS-rendered) on https://mychef.id/events/weddings:
  - `link[rel=canonical]` = `https://mychef.id/events/weddings` ✓
  - JSON-LD contains zero `weddings-bali`; all event/offer/breadcrumb `url`s = `/events/weddings` ✓
  - Old `/events/weddings-bali` still returns **404** (confirms the defect was real) ✓
  - H1 + page render intact (schema/meta-only change, no layout/visual impact) ✓

## Notes for next run
- **Pricing migration (4 files) is still uncommitted** and needs an owner decision before it can ship.
  If the new net-hourly pricing (Host/Bartenders/Waiters @ IDR 300k–350k/hr, 3-hr min; Pricing page staffing
  min 4→3 hrs) is approved, commit those 4 files; otherwise `git checkout` them. They build clean.
- `generate-sitemap.ts` still not in the Vercel build — re-run `npx tsx scripts/generate-sitemap.ts` and
  commit `public/sitemap.xml` whenever pages are added to the `SITEMAP` array.
- Sandbox git writes remain blocked (stale `.git/index.lock`); commit/push via real-Mac Terminal (osascript).
