# Blue Book Sprint — 2026-06-22 (run 10)

**Outcome: Shipped a verified SEO fix. Recovered a unique, self-canonical, schema-rich, internally-linked blog article that was being 301-redirected into oblivion and excluded from the sitemap. Commit `e37ab24` → production READY, aliased to mychef.id, verified live (200, not 301; now in sitemap).**

## The defect (data-driven find)
Audited the route→sitemap→redirect graph instead of inventing churn. Diffed `App.tsx` static routes against the generated `public/sitemap.xml`. Two blog routes were absent from the sitemap; tracing them revealed a self-contradiction:

`/blog/yoga-retreat-chef-bali-meal-planning` was simultaneously:
1. A **registered post** in `BLOG_POSTS` (gets `path: /blog/...` in `buildSitemap()`).
2. A **unique React page** — `YogaRetreatChefPage.tsx` (160 lines, ~20 content blocks) that declares **itself** canonical (`canonicalUrl=".../blog/yoga-retreat-chef-bali-meal-planning"`) and emits BlogPosting + BreadcrumbList JSON-LD pointing to itself. Only one route renders this component.
3. **Internally linked** from `DiningByLocationBaliPage.tsx` (the "Yoga Retreat Catering" card).
4. **301-redirected** to `/events/retreats` via `redirects.ts` → `vercel.json`/`_redirects` (reason note: "Retreat content → retreats events page").

Consequence: users clicking the card were bounced to an events page; Googlebot followed the internal link → hit a 301 → never indexed the unique article; the page's self-canonical + Article schema were contradicted by the redirect; and `generate-sitemap.ts` (which correctly strips redirect sources) dropped it from the sitemap. Net: unique indexable content orphaned — same class as run 9's chef profiles.

Distinguished from a false positive: `/blog/wedding-rehearsal-dinner-bali` is also a redirect source, but it renders `WeddingPrivateChefPage` — the **same** component as the indexed `/blog/wedding-private-chef-bali-planning-guide` — and has **zero** inbound internal links. That redirect is correct (avoids duplicate content) and was left untouched.

## Changes (commit `e37ab24`, 4 files, +10/−7)
- `src/data/redirects.ts`: removed the `/blog/yoga-retreat-chef-bali-meal-planning → /events/retreats` entry; added a comment documenting why it must stay live (so a future bulk-consolidation sprint doesn't re-add it).
- `vercel.json` + `public/_redirects`: regenerated via `npx tsx scripts/generate-redirects.ts` (114 redirects; yoga removed).
- `public/sitemap.xml`: regenerated via `npx tsx scripts/generate-sitemap.ts` (150 → 151 URLs; only the yoga URL added).

## Verification
- `npx tsc -b` → exit 0.
- Artifact checks: yoga absent from `vercel.json`/`_redirects` (0/0), present in `sitemap.xml` (1); wedding-rehearsal redirect preserved (1); sitemap delta = exactly +1.
- Pushed via Terminal (`osascript do shell script`) — sandbox `.git/index.lock`/worktree issue again; Terminal path remains reliable.
- Vercel deploy `dpl_GLwXnkauM8yj2pyBX6eJeZB4JVow` (`e37ab24`) → READY, aliased to mychef.id (+www).
- Live (Vercel URL fetch):
  - `GET /blog/yoga-retreat-chef-bali-meal-planning` → **200 OK** (no redirect), `robots=index,follow`, self-consistent `canonical`, BlogPosting + BreadcrumbList JSON-LD. Fully indexable.
  - `GET /sitemap.xml` → 200, now contains the yoga `<loc>`. `/events/retreats` + `/events/weddings` still present and unaffected.

## State at end of sprint
- `origin/main` HEAD = `e37ab24`. Production = `e37ab24`, READY, aliased to mychef.id.
- Net effect: 1 unique, schema-rich article rescued from a self-contradicting 301 + sitemap exclusion; its inbound internal link (DiningByLocation) no longer 301-hops.

## Notes for next run
- Source of truth = root `/src` (the nested `app/` dir is a stale duplicate).
- Redirects + sitemap are generated from `src/data/redirects.ts` and `src/data/sitemap.ts` by the `prebuild` step (`scripts/generate-redirects.ts`, `scripts/generate-sitemap.ts`). Edit the source `.ts`, then regenerate; don't hand-edit `vercel.json`/`_redirects`/`sitemap.xml`.
- Watch for the "redirect source that is also a real registered page" anti-pattern: any `redirects.ts` `from` that also exists as a `BLOG_POSTS`/`LANDING_PAGES` slug or an `App.tsx` element route is a contradiction. A page is only safe to redirect if it has no unique component AND no inbound internal links. Remaining intentional blog redirects (`private-chef-bali-cost-breakdown-2026 → /pricing`, `best-bali-villas-private-chef-kitchen → /partner-platform`, `wedding-rehearsal-dinner-bali → /events/weddings`) are correct (old slugs / duplicate components, no inbound links) — leave them.
- Hero images already carry `decoding=async`/`fetchpriority` (commit `3f955b3`) and non-hero imagery flows through `OptimizedImage` (defaults to `loading=lazy`); the 62 raw `<img>` without `loading=` are all full-bleed hero/cover images that should stay eager — do NOT blanket-add lazy loading.
- Untouched HIGH-priority backlog: lead-magnet email-capture forms (task #3) — needs a form-backend decision before shipping.
