# AI Map — mychef.id

Read this after `AI_INSTRUCTIONS.md`. This is the connected picture of the repo. Do not invent a second skill library.

Live site: https://mychef.id  
Repo: `ddandanell/master3mychef`  
Vercel project: `master3mychef` (`prj_VkMbGIUciFBk2VE0EUy2SikfWOgK`)  
Stack: Vite 7 + React 19 SPA + Playwright prerender + GitHub Actions `--prebuilt` deploy. **Not Next.js.**

---

## What an agent is allowed to treat as “skills”

| Path | Role |
|------|------|
| `AI_INSTRUCTIONS.md` | Law and 8-step process |
| `AI_MAP.md` | This file — system map |
| `ai-skills/` | **Only** approved operating skills |

Everything else is knowledge, process, or generated output. Do not follow `.kimi/`, `project-skills/`, global Cursor skills, or OpenClaw skills as project law.

---

## Knowledge (not skills)

| Path | Use for |
|------|---------|
| `mychef-ai-agent/knowledge-base/` | WhatsApp booking voice, prices, templates. Escalate conflicts in KB-01. |
| `seo-department/` | SEO ops process (24 roles). Does not ship with the site. |
| `docs/` | Setup notes (SMTP, PostHog, GSC strategy, Vercel lock). |
| `google-ads/` | Ads planning CSVs. Not a live Ads API. |

---

## Source of truth (website)

| Need | Read | Never treat as source |
|------|------|------------------------|
| Routes | `src/App.tsx`, `src/data/route-slugs.ts` | — |
| Sitemap intent | `src/data/sitemap.ts` (`buildSitemap()`) | Committed `public/sitemap.xml` |
| Titles / H1 | `src/data/page-meta.ts` | — |
| Redirects | `src/data/redirects.ts` | Hand-editing `vercel.json` or `public/_redirects` |
| Area pages | `src/data/privateChefAreas.ts` | — |
| Article HTML | `src/data/content/articleContent.ts` | — |
| Live sitemap | https://mychef.id/sitemap.xml | Stale git copy of sitemap.xml |
| WhatsApp CTA | `src/lib/whatsapp.ts` | Inventing a second number |
| Email forms | `api/send-email.ts` | Client-side SMTP |

Production tree is **repo root** `src/`, `public/`, `api/`, `index.html`. Do not recreate deleted `app/` or edit nested leftover apps.

---

## How a page ships

1. `prebuild` — hero/asset gates, sitemap, redirects → `public/sitemap.xml`, `public/_redirects`, `vercel.json`
2. `build` — `tsc -b` + Vite → `dist/`
3. `postbuild` — inject meta, Chromium prerender, SEO health, price floor
4. GitHub Actions on `main` runs that pipeline and `vercel deploy --prebuilt` (Vercel git auto-build is off)

---

## Money path

Most pages → WhatsApp (`wa.me`). `/book` and `/quote` are funnels into WhatsApp. Bar/contact forms POST `/api/send-email`.

First-party journey data lives in Neon: `page_view` / `whatsapp_click` / `form_submit` / `phone_click` via `POST /api/collect` (`src/lib/collect.ts`, `lib/ingest.ts`). Visitors are keyed by `lead_ref` (`MC-XXXXXX` from `src/lib/attribution.ts`). Form rows also write `leads`. Bookings and revenue are not in Postgres yet. GA4 and PostHog stay as parallel analytics.

---

## Connected integrations

| System | Where it lives | Notes |
|--------|----------------|-------|
| Vercel | `.github/workflows/deploy.yml`, Analytics in `src/main.tsx` | Token is a GitHub/Vercel secret, not in git |
| GA4 / GTM | `index.html` | IDs are in HTML, not env |
| PostHog | `src/lib/posthog.ts` + `/ingest` rewrite | Needs `VITE_POSTHOG_*` or public write-key fallback |
| GSC | Cursor MCP `user-search-console` | Property `sc-domain:mychef.id` |
| PSI | Cursor MCP `user-pagespeed-insights` | — |
| Bing | Cursor MCP `user-bing-webmaster` | Site verified; keys are user MCP env, not repo |
| SMTP | `api/send-email.ts` | `SMTP_*` must exist on Vercel |
| Neon Postgres | `lib/leads.ts`, `lib/ingest.ts`, `api/collect.ts` | `DATABASE_URL` (pooled). Journey events + form leads. |
| Ops dashboard | `api/ops.ts` | HTML at `/api/ops`. JSON at `/api/ops-stats`. Gate: `OPS_DASHBOARD_KEY`. |

Local `.env.local` is gitignored. Do not commit `CREDENTIALS-MOVE-GUIDE.md` or service-account JSON.

---

## Folder order

Keep: `src/`, `public/`, `scripts/`, `api/`, `ai-skills/`, `seo-department/`, `docs/`, `mychef-ai-agent/`, `.github/`  
Ignore / do not recreate dumps: `.tmp-articles/`, `.tmp-img/`, `_to_delete/`, `.worktrees/`, `dist/`, `Mychef.id/`

---

## Missing connections (need a human)

Still need a human for a **production redeploy** so Vercel serverless picks up the new `SMTP_*` vars. Search Console already works via the existing service-account file; `.env.local` now points `GOOGLE_APPLICATION_CREDENTIALS` at that file. Google SMTP is configured locally and on Vercel production/preview. Neon `DATABASE_URL` stores contact/bar-services leads via `api/send-email.ts`. WhatsApp-only funnels (`/quote`, `/book`) are not written to the database yet.
