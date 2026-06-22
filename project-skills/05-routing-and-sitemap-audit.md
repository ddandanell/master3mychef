# Skill 05 — Routing & Sitemap Audit

**Purpose:** Every important page must be routed, indexable, in the sitemap, and internally linked. Catch orphans, 404s from sitemap, and redirect chains.

**When to use:** After adding/removing/renaming any page; during any SEO sprint.

## Checklist
1. Routes: `grep -c "<Route " src/App.tsx` (currently ~174).
2. Sitemap: `grep -c "<loc>" public/sitemap.xml` (currently 151). Sitemap is generated from `src/data/sitemap.ts`.
3. **No redirected URL in sitemap:** for each `<loc>`, confirm it is NOT a source in `vercel.json`/`_redirects`/`redirects.ts`. A 301'd URL must never be in the sitemap.
4. **No 404 in sitemap:** every `<loc>` must resolve to a routed page or prerendered file.
5. **No chains:** redirect target must itself be a 200 (not another redirect).
6. Orphans: high-value pages must be linked from a hub (see Skill 09).

## Verification
- Spot-check 5 sitemap URLs live → all 200, no redirect.
- `robots.txt` references the sitemap; sitemap lastmod is current.

## Output
Table: total routes, total sitemap URLs, # redirected-in-sitemap (must be 0), # 404-in-sitemap (must be 0), # chains (must be 0), list of orphan pages.
