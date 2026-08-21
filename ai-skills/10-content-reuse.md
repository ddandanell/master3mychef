# 10 — Content reuse

Before writing a new page, copy the closest existing shell (`LandingPage`, `AreaPage`, `PrivateChefAreaPage`, catering/event templates). Reuse `SeoHead` schema helpers, existing CTAs, and `public/generated/` images.

Register every new URL in `src/data/route-slugs.ts` (if mapped), `src/App.tsx`, `src/data/page-meta.ts`, and `src/data/sitemap.ts`. Do not hand-roll JSON-LD or a second WhatsApp number.
