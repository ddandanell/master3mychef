# Blue Book Sprint — 2026-06-22 (run 8)

**Outcome: No net change shipped. Ran an independent audit, acted on a finding, caught that the finding was a false positive (incomplete audit), and reverted within minutes. Production is healthy and back to its prior correct state. This is a self-corrected no-op, documented honestly so the next run doesn't repeat the mistake.**

## What happened (chronological)
1. Verified baseline: sandbox/repo/`origin/main` all at `99b4a05`; latest prod deploy READY and aliased to mychef.id. `npx tsc -b` = exit 0.
2. Ran fresh audits (alt-text, lazy-loading, meta descriptions, internal-link integrity). Alt/lazy/meta were clean (prior multiline-grep "misses" confirmed false positives; `OptimizedImage` defaults `loading="lazy"`/`decoding="async"`).
3. Internal-link audit flagged 6 Footer "Top Experiences" links (`/villa-bbq-catering-bali`, `/bali-wedding-catering-packages`, `/michelin-private-chef-bali-prices`, `/private-tasting-menu-bali`, `/chef-table-experience-bali`, `/luxury-birthday-party-bali`) as not matching any `path="..."` in `App.tsx`, and not present in `vercel.json` redirects → concluded "site-wide 404s."
4. Repointed them to canonical service pages, built clean (tsc exit 0), committed `bfbb05e`, pushed, deploy started.
5. **Caught the error before trusting it:** commit history (`4d6401a` "de-orphan landing pages", `c2bf592` "…shadowed a real landing page") prompted a deeper check. These 6 slugs ARE real routes — registered in `App.tsx` (lines 329–330) via `LANDING_PAGE_SLUGS.map(... <Route path={`/${slug}`} element={<LandingPage/>} />)` from `data/route-slugs.ts`, and listed in `data/sitemap.ts` (indexed). They are live, indexed landing pages — **not** 404s.
6. My change would have **orphaned 6 indexed landing pages** (removed their only sitewide internal links) — the exact opposite of the deliberate de-orphaning in `4d6401a`. Reverted via `git revert --no-edit bfbb05e` → `be67488`, pushed.
7. Verified: revert deploy `dpl_8mKQD2TXnqMZhUU8HWMKFo3SUGD4` (`be67488`) reached **READY**, aliased to mychef.id. Footer slugs restored (grep count back to 6 originals). Net diff vs. start of sprint = zero.

## Root-cause of the false positive (fix for next run)
The internal-link audit only diffed against **static** `path="..."` literals in `App.tsx`. The app registers a large share of routes **dynamically** by mapping slug arrays from `data/route-slugs.ts`: `LANDING_PAGE_SLUGS`, `GUIDE_SLUGS`, `BLOG_POST_SLUGS`, `SERVICE_SLUGS`, `MENU_SLUGS`, `AREA_SLUGS`, `MICRO_AREA_SLUGS`, plus `CUSTOM_LOCATION_PAGE_SLUGS`. Any future link audit MUST resolve a link as valid if it matches a static route **OR** any slug in those arrays (with their path prefixes) **OR** a `vercel.json` redirect source. Treat `data/route-slugs.ts` + `data/sitemap.ts` as the route source of truth, not `App.tsx` alone.

## Repo-structure note for next run
Git tracks and Vercel builds the **root** tree (`/src`, `/App.tsx`, root `package.json`/`vite.config.ts`). The nested `app/` directory is a **stale duplicate** and is NOT tracked (`git ls-files app/src/components/Footer.tsx` → empty). Edit files under root `src/`, not `app/src/`. (This run also left harmless uncommitted edits in the untracked `app/src/components/Footer.tsx` copy; ignore or discard — it does not affect git or the build.)

## State at end of sprint
- `origin/main` HEAD = `be67488` (revert of `bfbb05e`); functionally identical to the pre-sprint `99b4a05` footer.
- Production = `be67488`, READY, aliased to mychef.id.
- No regressions outstanding. No genuine defect surfaced that warranted a code change — consistent with run 7's conclusion that the site is mature and in sync.

## Honest takeaway
The disciplined, data-driven move was to verify deeper before trusting an audit signal, and to revert immediately once the signal proved wrong — rather than leaving a plausible-looking but harmful change live. Net result is a no-op, which for a healthy indexed production site is an acceptable and correct outcome.
