# AI Handover — myCHEF.id Website

> **Start here when you scan this folder.** This document tells a future Claude CLI (or any AI agent) what this project is, what state it is in, what has recently been done, and how to continue safely.

---

## 1. Project Identity

- **Project name:** myCHEF.id
- **Live domain:** https://mychef.id
- **Repo:** `ddandanell/master3mychef` on GitHub
- **Vercel team/project:** `daviddandanell-9392s-projects` / `master3mychef`
- **Vercel Project ID (LOCKED):** `prj_VkMbGIUciFBk2VE0EUy2SikfWOgK`
- **Production domain:** https://mychef.id
- **Deploy lock doc:** `docs/VERCEL-PRODUCTION-LOCK.md` — agents MUST read before any `vercel deploy`
- **Safe deploy script:** `./scripts/deploy-prod.sh` (refuses wrong project)
- **Working directory:** `/Users/openclaw/Movies/LIve website/MYCHEF Live webste/`
- **Stack:** React 19 + Vite 7 + TypeScript + Tailwind CSS + react-router-dom v7 + pnpm
- **Current active branch:** `seo-safe-upgrade-mychef-2026-07-01`
- **Backup branch:** `backup-before-seo-upgrade-mychef-2026-06-29` (reset to `aa01af3`)
- **Production branch:** `main`

### Important: source-of-truth folders
- **`src/`** — the live website source code. This is what gets built and deployed.
- **`Mychef Live/`** — a separate Next.js app. **Do not touch** unless explicitly asked.
- **`app/`** — stale duplicate. **Do not use.** Archived/evidence-only.
- **`public/generated/`** — generated WebP images referenced by pages.
- **`public/sitemap.xml`** and **`vercel.json`** / **`public/_redirects`** — regenerated during `prebuild` from `src/data/sitemap.ts` and `src/data/redirects.ts`.

---

## 2. How the Site Builds & Deploys

1. `pnpm run build` runs:
   - `prebuild`: validates hero images, validates critical assets, generates `public/sitemap.xml`, generates `vercel.json` + `public/_redirects`.
   - `build`: installs Chromium (Playwright), runs `tsc -b`, then Vite production build into `dist/`.
   - `postbuild`: validates critical assets, runs `scripts/inject-meta.ts` to emit static HTML files, then runs `scripts/prerender.ts`.
2. **On Vercel**, the deployed static route files come from `scripts/inject-meta.ts` (which reads `src/data/sitemap.ts`). `scripts/prerender.ts` is skipped on Vercel because there is no Chromium.
3. **Local prerender crash:** `scripts/prerender.ts` crashes after ~130 pages due to Playwright browser context exhaustion. This is **pre-existing and non-blocking** — Vite build and `inject-meta.ts` are the real gates.

### Verification commands (run these before committing)
```bash
pnpm exec tsc -b          # must pass
pnpm run build            # Vite + inject-meta must succeed; prerender crash is expected locally
```

---

## 3. Current State (as of 2026-07-01)

### Active branch
`seo-safe-upgrade-mychef-2026-07-01` is pushed to origin and contains two commits ahead of `main`:

1. `f4e8da6` — `seo(safe-upgrade): collapse /blog hub, canonicalize cost guide, clean redirects, fix internal links`
2. `972cd63` — `seo(internal-links): add contextual links to quote, recommended-services, private-chef-bali`

### What has been shipped in this sprint
- Retired the vestigial `/blog` hub page (`BlogIndexPage.tsx` deleted, `/blog` route removed). `/blog` still redirects to `/journal`; all individual `/blog/*` posts remain live.
- Canonicalized duplicate cost guides: `/blog/private-chef-bali-cost-breakdown-detailed-2026` → `/blog/private-chef-cost-bali` via `redirects.ts`; deleted unused duplicate page component.
- Fixed `ServiceMixologyPage` balance wording from "after" to "before" your event.
- Removed 25 redundant explicit `<Navigate>` routes in `App.tsx`; redirects now handled entirely by `REDIRECTS.map`.
- Added `/recommended-services` links in `ServicesPage` and `Footer`.
- Added contextual internal links across homepage, `/services`, `/fine-dining`, `/catering`, `/events` for:
  - `/quote` (structured quote form)
  - `/recommended-services`
  - `/fine-dining/private-chef-bali`
  - `/blog/private-chef-cost-bali`
- Updated `CHANGELOG_CONTROL.md` and `NEXT_ACTIONS.md`.

### Build health
- `tsc -b`: ✅ passes
- Vite build: ✅ passes
- `inject-meta.ts`: ✅ emits 250 static files
- Local prerender: ❌ crashes after ~130 pages (pre-existing, non-blocking)
- ESLint: ~3,700+ pre-existing errors; 0 new errors introduced by recent changes

---

## 4. Key Control Documents

Read these in order when picking up work:

1. **`CHANGELOG_CONTROL.md`** — one-line history of every shipped change.
2. **`NEXT_ACTIONS.md`** — prioritized backlog. Pick from the top; do not add new website features until structure/conversion clean.
3. **`KNOWN_ISSUES.md`** — open bugs, risks, and pre-existing problems.
4. **`AGENTS.md`** — project-level agent instructions and conventions.
5. **`DO_NOT_TOUCH.md`** — files/folders that must not be modified.
6. **`MYCHEF-LEGAL-POLICIES.md`** — legal/policy pages source of truth.
7. **`CONVERSION_MEASUREMENT.md`** — how to verify conversion/tracking changes.

---

## 5. Safety Rules (non-negotiable)

- **Never change prices, deposits, contact phone numbers, WhatsApp numbers, URLs, or tracking IDs** unless explicitly asked.
- **Never delete `Mychef Live/` or `app/`** without owner confirmation.
- **Never commit secrets** (tokens, keys, `.env`).
- **Always create a backup branch** before large changes.
- **Always run `tsc -b` and `pnpm run build`** before committing.
- **Always update `CHANGELOG_CONTROL.md` and `NEXT_ACTIONS.md`** after shipping changes.
- **Do not run `git push --force`, `git reset`, or `git rebase`** unless explicitly asked.

---

## 6. How to Continue Working

When the user says **"scan this folder"** or **"work"** or **"keep going"**:

1. Read this file first.
2. Read `CHANGELOG_CONTROL.md`, `NEXT_ACTIONS.md`, `KNOWN_ISSUES.md`, and `AGENTS.md`.
3. Check the current git branch and status.
4. Pick the next open item from `NEXT_ACTIONS.md` (currently: conversion-flow mobile pass on top commercial pages, or remaining location-page internal links).
5. Make minimal, verified changes.
6. Update `CHANGELOG_CONTROL.md` and `NEXT_ACTIONS.md`.
7. Commit and push to the active working branch (currently `seo-safe-upgrade-mychef-2026-07-01`).

### Current recommended next tasks
1. **Conversion-flow mobile pass** on top commercial pages (`/services`, `/fine-dining`, `/catering`, `/events`, `/pricing`, `/quote`).
2. Optional: add remaining contextual internal links on Bali location pages (`/seminyak`, `/canggu`, `/ubud`, etc.) to `/fine-dining/private-chef-bali`, `/catering`, `/events`, `/blog/private-chef-cost-bali`.
3. Optional: low-profile trust/updates content on `/journal` only if genuinely useful.
4. Owner-required: rotate leaked GitHub PAT (see `KNOWN_ISSUES.md` #0 and `NEXT_ACTIONS.md` 1b).

---

## 7. Important Files & Their Roles

| File / Folder | Role |
|---------------|------|
| `src/App.tsx` | Route definitions. `REDIRECTS.map` handles redirects. |
| `src/data/sitemap.ts` | List of prerendered/static routes. Drives `inject-meta.ts` and `sitemap.xml`. |
| `src/data/redirects.ts` | 301/308 redirects. Drives `vercel.json` and `public/_redirects`. |
| `src/data/page-meta.ts` | Page-level title/description/OG/canonical meta. |
| `src/data/route-slugs.ts` | Route slugs for pages. |
| `scripts/inject-meta.ts` | Generates static HTML files for Vercel from `sitemap.ts`. |
| `scripts/generate-sitemap.ts` | Generates `public/sitemap.xml`. |
| `scripts/generate-redirects.ts` | Generates `vercel.json` and `public/_redirects`. |
| `src/lib/whatsapp.ts` | Builds qualified WhatsApp enquiry URLs (use this, don't hand-roll). |
| `src/components/SeoHead.tsx` | SEO head component with schemas. |
| `src/components/shared/StickyMobileCTA.tsx` | Mobile sticky CTA (pass `serviceName`/`intent`). |
| `src/components/Footer.tsx` | Footer links (includes pillar + pricing + recommended services). |

---

## 8. External Accounts & Observability

- **Vercel:** connected. Deployments go to `master3mychef`.
- **GitHub:** authenticated as `ddandanell`.
- **GA4 / GTM:** tracking is configured; WhatsApp + phone clicks map to `generate_lead`. Owner real-device confirmation pending.
- **GSC:** not directly connected here; submit sitemap manually if needed.

---

## 9. Quick Commands Reference

```bash
# Type check
pnpm exec tsc -b

# Full build (prerender crash is expected locally)
pnpm run build

# Lint (many pre-existing errors)
npm run lint

# Check git state
git status
git log --oneline -5

# Generate redirects/sitemap manually
npx tsx scripts/generate-sitemap.ts
npx tsx scripts/generate-redirects.ts
```

---

## 10. Notes for Future Agents

- This project has a **lot** of untracked files (reports, screenshots, scripts, docs). That is normal. Only commit files you actually modify.
- The owner likes small, verified, well-documented changes. **Minimal diff > big refactor.**
- When in doubt, read `KNOWN_ISSUES.md` and `NEXT_ACTIONS.md` before asking the user.
- If a previous working branch is checked out in a worktree, create a fresh dated branch instead of fighting the lock.
- The user's codeword for "continue autonomously" is often **"superpower"** or **"keep going"** — then you should pick the next task from `NEXT_ACTIONS.md` and execute it.

---

_Last updated: 2026-07-01 by Kimi Code CLI on branch `seo-safe-upgrade-mychef-2026-07-01`._
