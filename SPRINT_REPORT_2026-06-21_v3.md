# Blue Book Sprint — COMPLETED (2026-06-21, run 3)

**Outcome: Fixed a stale/incomplete XML sitemap + added 4 real pages to the SEO source of truth.**
Commit `9ae7ca3` → Vercel `dpl_EcUqzm2N9b2fGUmH5T85B2XjahnE` (READY, aliased to mychef.id). Build clean, verified live.

## Root-cause finding (verified, not assumed)
The deployed `public/sitemap.xml` was **stale**: 135 URLs vs the 157 the live `SITEMAP`
source produces. Reason: `scripts/generate-sitemap.ts` is **not** part of the Vercel build/postbuild,
so the committed XML only updates when the script is run manually — and it hadn't been re-run after
~22 pages were added in prior sprints. Those live, indexable pages were therefore **absent from the
sitemap submitted to Google**, including:
- 10 blog articles (`/blog/private-chef-cost-bali`, `/blog/fine-dining-guide`, etc.)
- Core pillar pages (`/catering`, `/events`, `/fine-dining`, `/in-villa-service`, `/help`)
- `/chefs` + 4 individual chef profile pages
- `/corporate-case-studies` (added run 2), `/quote`

## Second finding: 4 real pages missing from SITEMAP entirely
`/services`, `/faq`, `/why-mychef`, `/calculator` are real, non-redirected pages with unique
SeoHead meta, but were **not in the `SITEMAP` array at all** — so they got neither sitemap
inclusion **nor** prerendered static meta (inject-meta only iterates SITEMAP). They were serving
the generic base `index.html` meta to crawlers. Confirmed via `redirects.ts` + `vercel.json` that
none are redirected. (Left `/reviews`, `/about`, `/menus` alone — they ARE intentional redirects.)

## What shipped
1. Added `/services` (priority 0.9), `/faq`, `/why-mychef` (0.7), `/calculator` (0.6) to
   `infoPages` in `src/data/sitemap.ts` with their real titles/descriptions pulled from the components.
2. Regenerated `public/sitemap.xml` → **161 URLs** (was 135 committed; +26 net), refreshed lastmod.

## Verification (all green)
- `npx tsc -b` → exit 0.
- XML well-formed (minidom parse OK), zero duplicate `<loc>`, zero URLs removed.
- Vercel deploy READY, aliased to mychef.id.
- Live `https://mychef.id/sitemap.xml` → 161 `<loc>`; all new + previously-missing pages present.
- `/services`, `/faq`, `/why-mychef`, `/calculator` → HTTP 200 with **correct unique prerendered
  `<title>` + meta description** (previously generic homepage meta).
- Homepage title intact (no regression from inject-meta regenerating all pages).

## Notes for next run
- **`generate-sitemap.ts` is NOT in the build.** Any time pages are added to `SITEMAP`, re-run
  `npx tsx scripts/generate-sitemap.ts` and commit `public/sitemap.xml`, or the XML drifts stale again.
  Consider adding it to the `postbuild` chain to make this automatic.
- Sandbox git writes still fail (`.git/index.lock`, Operation not permitted) — commit/push via the
  real-Mac Terminal (osascript `do shell script`), which works.
- Build source is root `src/`, NOT `app/`.
