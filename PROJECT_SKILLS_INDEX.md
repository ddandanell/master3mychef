# PROJECT SKILLS INDEX

_The operating system for MyChef sprints. Skills live in `/project-skills`. Sub-agents in `/project-skills/agents` (copy to `.claude/agents/` to activate)._

## Always run first (every sprint)
- **01 Production Source of Truth** — confirm root `/src` deploys; never edit `app/` or `Mychef Live/`.
- **02 Git History Audit** — what changed/shipped/reverted in the window; never repeat reverts.

## Before creating or editing
- **03 Duplicate File Control** — search before creating; reuse existing pages/routes/data/images.
- **04 Dead Code Detection** — prove imported+routed+not-redirected+live before editing/deleting.
- **10 Content Reuse System** — reuse shells (`PremiumPage`), schema helpers (`SeoHead`), `EmailCaptureBar`, images.
- **15 Do-Not-Touch Guard** — stop on protected paths/systems.

## SEO & indexing
- **05 Routing & Sitemap Audit** — routes vs sitemap; no redirected/404 URLs in sitemap; no chains.
- **07 Search Console Error Triage** — classify GSC issues P1–P6 by business impact.
- **08 Schema Audit** — valid, single-entity JSON-LD; no fake/duplicate reviews; no legal-page review markup.
- **09 Internal Linking Audit** — money pages linked ≥2× from LIVE pages; no orphans; right hubs.

## Tracking & conversion
- **06 Google Tracking Audit** — GA4/GTM/gtag inventory; double-fire check; CSP; GSC token. No blind changes.
- **11 Conversion Flow Audit** — WhatsApp CTA, mobile sticky, clear next action on every commercial page.

## Ship discipline
- **12 Build & TypeScript Verification** — `tsc -b` exit 0; no untracked-needed files; Vercel READY.
- **13 Commit & Deploy Discipline** — stage specific files; via osascript Terminal; capture SHA; confirm deploy.
- **14 Sprint Reporting** — honest end-of-sprint report + changelog line; never claim fixed without evidence.

## Sub-agents (parallel helpers)
| Agent | Use for | Skills it runs |
|---|---|---|
| **mychef-production-auditor** | Start-of-sprint source/git/duplicate/dead-code audit | 01,02,03,04,15 |
| **mychef-seo-auditor** | Routing, sitemap, schema, internal linking, GSC triage | 05,07,08,09 |
| **mychef-tracking-auditor** | GA4/GTM/CSP/GSC + conversion flow | 06,11 |
| **mychef-ship-verifier** | Build, commit, deploy, report | 12,13,14 |

## Control files
- `PROJECT_CONTROL_STATUS.md` — source-of-truth facts (re-verify each sprint).
- `DO_NOT_TOUCH.md` — protected list.
- `KNOWN_ISSUES.md` — open items.
- `NEXT_ACTIONS.md` — prioritized queue.
- `CHANGELOG_CONTROL.md` — shipped-change log.

## Standard sprint order
01 → 02 → (03/04/10/15 as needed) → do the work → 05–11 audits as relevant → 12 → 13 → 14.
