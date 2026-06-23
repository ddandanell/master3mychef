# Skill 05 — Routing & Sitemap Audit

**Purpose:** Every important page must be routed, indexable, in the sitemap, and internally linked. Catch orphans, 404s from sitemap, and redirect chains.

**When to use:** After adding/removing/renaming any page; during any SEO sprint.

## ⚠️ CRITICAL — Vercel production route-generation path (learned 2026-06-23)

**`scripts/prerender.ts` is NOT the production source of truth for static route files on Vercel.** It needs Playwright/Chromium, which is **absent on the Vercel builder**, so it logs `"Playwright chromium not available, skipping prerender … runs locally instead"` and writes **zero** files in production.

The actual deployed route-generation path is:

```
src/data/sitemap.ts  (SITEMAP array)
   → scripts/inject-meta.ts  (postbuild: loops SITEMAP, writes dist/<route>/index.html)
      → Vercel serves dist/<route>/index.html as a 200 on direct access
```

**Rule for direct-access route fixes on Vercel:** to make a route return 200 on direct access / crawl, **the route MUST be present in `src/data/sitemap.ts` (`SITEMAP`)** — that is what `inject-meta.ts` reads to generate the deployed static HTML. Adding it to `scripts/prerender.ts` alone has **no effect on Vercel** (only matters for a local Playwright prerender run). The generated artifact is `dist/<route>/index.html` (nested), not `dist/<route>.html` (the flat name only comes from the skipped Chromium prerender).

Legacy alias routes (e.g. `/terms-of-service` → `/terms`) are handled separately by a 301/308 redirect in `vercel.json` — they do NOT belong in `SITEMAP`.

## Checklist
1. Routes: `grep -c "<Route " src/App.tsx` (currently ~174).
2. Sitemap: `grep -c "<loc>" public/sitemap.xml`. Both `public/sitemap.xml` AND the deployed static route files are driven by `src/data/sitemap.ts` (`SITEMAP`) via `inject-meta.ts` — see the CRITICAL section above.
3. **No redirected URL in sitemap:** for each `<loc>`, confirm it is NOT a source in `vercel.json`/`_redirects`/`redirects.ts`. A 301'd URL must never be in the sitemap.
4. **No 404 in sitemap:** every `<loc>` must resolve to a routed page or static file. If a routed page 404s on direct access, the fix is almost always **"add it to `src/data/sitemap.ts`"** (so inject-meta emits `dist/<route>/index.html`) — NOT a prerender.ts edit and NOT an SPA fallback.
5. **No chains:** redirect target must itself be a 200 (not another redirect).
6. Orphans: high-value pages must be linked from a hub (see Skill 09).

## Verification
- Spot-check 5 sitemap URLs live → all 200, no redirect.
- `robots.txt` references the sitemap; sitemap lastmod is current.

## Output
Table: total routes, total sitemap URLs, # redirected-in-sitemap (must be 0), # 404-in-sitemap (must be 0), # chains (must be 0), list of orphan pages.
