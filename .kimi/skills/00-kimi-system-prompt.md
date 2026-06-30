# Kimi System Prompt — MyChef Website Project

You are working on the **MyChef website** (`mychef.id`), a React/Vite SPA deployed on Vercel.

## Before doing ANYTHING, read these files in order
1. `project-skills/01-production-source-of-truth.md` — confirms which tree deploys
2. `project-skills/02-git-history-audit.md` — what changed recently
3. `project-skills/03-duplicate-file-control.md` — check before creating anything
4. `project-skills/15-do-not-touch-guard.md` — protected files/systems

## Critical facts

**Production tree:**
- ALL edits go in root `/src`, `/public`, root `index.html`, or root `vercel.json`
- `app/` does NOT deploy — it is a stale duplicate. NEVER edit it.
- `Mychef Live/` is a separate Next.js repo. NEVER edit it.

**Build command:**
```
npx playwright install chromium && tsc -b && vite build
```
Postbuild: `validate-critical-assets.ts` → `inject-meta.ts` → prerender

**Deploy:**
- Push to `github.com/ddandanell/master3mychef` `main` branch → Vercel auto-deploys
- Vercel project: `master3mychef` (`prj_VkMbGIUciFBk2VE0EUy2SikfWOgK`)
- Team: `team_WumSlShMHjkfsJtedvxDTaDd`

**Live URL:** `mychef.id`

**Routing:** `src/App.tsx` (react-router, ~174 routes)

**Redirects source of truth:** `src/data/redirects.ts` — generates `vercel.json` and `public/_redirects` at prebuild. NEVER hand-edit `vercel.json` directly.

**Sitemap source of truth:** `src/data/sitemap.ts` (SITEMAP array) — drives both `public/sitemap.xml` and static HTML generation via `inject-meta.ts`.

**WhatsApp (single conversion action):** `wa.me/628113803488` (display: `+62 811-3803-488`)

**Deposit standard:** 25% deposit (NOT 50%)

**Images:** Service staff must look Indonesian/Balinese. Guests/clients can be anyone. WebP, quality ~82, hero min 1200px, max 300KB.

**Pricing currency:** IDR unless specified otherwise.

## Skills index

| File | Purpose | When to use |
|------|---------|-------------|
| `GIT-DANGER-RULES.md` | CRITICAL git safety rules | Before ANY git command |
| `01-production-source-of-truth.md` | Confirm correct deploy tree | FIRST — every sprint |
| `02-git-history-audit.md` | What changed recently | Start of sprint |
| `03-duplicate-file-control.md` | Check before creating | Before any new file |
| `04-dead-code-detection.md` | Is this file live? | Before editing/deleting |
| `05-routing-and-sitemap-audit.md` | Routes + sitemap health | After page changes |
| `06-google-tracking-audit.md` | GA4/GTM inventory | Before tracking changes |
| `07-search-console-error-triage.md` | GSC error classification | During SEO sprints |
| `08-schema-audit.md` | JSON-LD validation | Before schema changes |
| `09-internal-linking-audit.md` | Money page link coverage | SEO sprints |
| `10-content-reuse-system.md` | Reuse shells/components | Before writing new pages |
| `11-conversion-flow-audit.md` | CTA/WhatsApp health | Commercial page sprints |
| `12-build-and-typescript-verification.md` | tsc -b before commit | BEFORE EVERY COMMIT |
| `13-commit-and-deploy-discipline.md` | Commit/push/verify | EVERY ship |
| `14-sprint-reporting.md` | End-of-sprint report | After completing work |
| `15-do-not-touch-guard.md` | Protected files list | Before editing anything |

## Standard sprint order
01 → 02 → GIT-DANGER-RULES → (03/04/10/15 as needed) → do the work → 05–11 audits → 12 → 13 → 14
