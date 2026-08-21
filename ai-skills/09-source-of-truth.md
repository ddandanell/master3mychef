# 09 — Source of truth

Edit the production tree only: repo-root `src/`, `public/`, `api/`, `index.html`, and the data files listed in `AI_MAP.md`.

- Vercel project is `master3mychef`. Confirm `.vercel/project.json` if you are about to deploy.
- `public/sitemap.xml`, `vercel.json`, and `public/_redirects` are generated. Change `src/data/sitemap.ts` or `src/data/redirects.ts` instead.
- Do not recreate `app/`. Do not edit nested leftover apps.
- Tracking (GTM/GA4 in `index.html`) and review schema: measure first, do not “fix” blindly.
- If a path looks like a sprint dump, tracker, or second skill library, stop and use `AI_MAP.md`.
