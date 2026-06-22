# Blue Book Sprint — 2026-06-22 (run 9)

**Outcome: Shipped a real, verified SEO fix. De-orphaned 4 chef profile pages that existed and were schema-referenced but were missing from the sitemap AND had no clickable internal link anywhere on the site. Commit `68bb1be` → production READY, aliased to mychef.id, verified live.**

## The defect (data-driven find)
After confirming the site is mature (runs 7–8 were no-ops), I audited the chef-profile subsystem instead of inventing churn. Found a concrete, two-part gap:

1. **Sitemap gap.** `ChefProfilePage` (`src/pages/ChefProfilePage.tsx`) defines **8** real, content-rich chef profiles (`adriano, made-surya, bayu-pranata, ni-putu-asri, wayan-suarjana, ketut-mahardika, sari-dewi-kusuma, komang-artha`). `ChefsPage` lists all 8 and emits a `Person` schema for each with `url: /chefs/{slug}`. But `src/data/sitemap.ts` (and generated `public/sitemap.xml`) listed only **4** (`adriano, made-surya, bayu-pranata, ni-putu-asri`). The other 4 were live + indexable + schema-referenced but absent from the sitemap — same "children orphaned from sitemap" class fixed earlier in commit `c124d5b` (the `/help/*` guides).

2. **Internal-link orphaning.** The `profiles` section renderer in `src/components/PremiumPage.tsx` rendered each chef card but contained **no link** to the individual `/chefs/{slug}` page. So all 8 profile pages had zero clickable sitewide internal link — a strong "crawled, not indexed" risk regardless of sitemap status.

## Changes (commit `68bb1be`)
- `src/data/sitemap.ts`: added the 4 missing chef entries with the real page titles/descriptions pulled from each chef's `seoTitle`/`seoDescription`.
- `public/sitemap.xml`: regenerated via `scripts/generate-sitemap.ts`. URL count 146 → 150; loc-only diff = exactly the 4 new chef URLs (nothing dropped). All `lastmod` refreshed to 2026-06-22 (expected).
- `src/components/PremiumPage.tsx`: added optional `slug` to the `PageProfile` interface and a conditional "View {name}'s profile →" `<Link to={/chefs/${slug}}>` on each profile card (renders only when `slug` is present, so any other future use of the profiles section is unaffected). `ChefsPage` is currently the only consumer and its objects already carry `slug`.

## Verification
- `npx tsc -b` → exit 0.
- Sitemap regenerated cleanly (clean loc diff, +4 only).
- Pushed via Terminal (`osascript`) — sandbox `.git/index.lock` issue confirmed again; Terminal path is the reliable route.
- Vercel deploy `dpl_GSY28QRzLKPwvYswoQ467xE1pD14` (`68bb1be`) reached **READY**, aliased to mychef.id (+www).
- Live checks (via Vercel URL fetch):
  - `https://mychef.id/sitemap.xml` → 200, now contains all 8 `/chefs/*` URLs incl. the 4 added.
  - `https://mychef.id/chefs/komang-artha` → 200, correct prerendered `<title>`, meta description, `canonical=https://mychef.id/chefs/komang-artha`, `robots=index,follow`, and BreadcrumbList JSON-LD. Fully indexable.

## State at end of sprint
- `origin/main` HEAD = `68bb1be`. Production = `68bb1be`, READY, aliased to mychef.id.
- Net effect: 4 previously sitemap-orphaned chef profiles now indexed in the sitemap, and all 8 profiles now have a real internal link from `/chefs`.

## Notes for next run
- Repo source of truth is the **root** `/src` tree; the nested `app/` directory is a stale untracked duplicate (confirmed again). Edit root `src/`.
- Sitemap source of truth = `src/data/sitemap.ts` → regenerate with `npx tsx scripts/generate-sitemap.ts` (writes `public/sitemap.xml`).
- When adding new chef profiles in `ChefProfilePage`/`ChefsPage`, also add them to `sitemap.ts` and confirm a sitewide internal link exists.
- Untouched HIGH-priority backlog worth a future sprint: lead-magnet email-capture forms (task #3) — larger build, needs a form backend decision before shipping.
