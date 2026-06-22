# CHANGELOG (Control)

_One line per shipped change. Newest first. SHA = production commit on `main`._

## 2026-06-23
- `<folder guard>` — **chore(control): neutralize stale folders.** Verified `app/` = stale duplicate w/ 106 uncommitted files (not safe to delete yet; added marker `app/_DO_NOT_USE_STALE_DUPLICATE.md`); `Mychef Live/` = SEPARATE Next.js app (not a duplicate, do not delete). Updated DO_NOT_TOUCH/KNOWN_ISSUES/NEXT_ACTIONS. No deletion performed (evidence shows unsafe).
- `<tracking fix>` — **fix(analytics): eliminate `generate_lead` double-fire.** Removed redundant per-component `trackWhatsAppClick` on 5 `wa.me` anchors (ServicePage, PillarSubPage, StickyMobileCTA, ExitIntentPopup, WhatsAppButton); Layout's global delegated listener is now the single source, attribution preserved via `data-source`. page_view confirmed single. `index.html` GTM/GA4 NOT touched. Remaining: `trackEvent` gtag+dataLayer dual-send needs GTM Preview (KNOWN_ISSUES #3). tsc exit 0.
- `<this sprint>` — **Project Control Sprint:** added `/project-skills` (15 skills + 4 sub-agents) and control files (PROJECT_CONTROL_STATUS, KNOWN_ISSUES, NEXT_ACTIONS, DO_NOT_TOUCH, PROJECT_SKILLS_INDEX, this file). Audited last 5 days. No website feature/code change. Docs only.
- `1bd1e65` — chore(cleanup): document root `/src` as canonical prod source in CLAUDE.md; remove dead unrouted `BlogPage.tsx`. Build READY.
- `dede4cc` — docs(sprint): 2026-06-23 v2 report (dual-repo + dead BlogPage findings).
- `2bf0196` — Revert `706cbea` (cost-guide card on BlogPage was a no-op; BlogPage is dead/redirected).
- `21390a7` — seo(schema): remove self-serving AggregateRating/Review markup site-wide.
- `0d507c8` / `4aadd1e` — analytics: migrate GA4→GTM (GTM-KCBNZBL9); unblock GTM/GA4 via CSP.
- `c8824dc` — WhatsApp/phone set to +62 811-3803-488 sitewide.

_(Earlier history: see `git log` and the `SPRINT_REPORT_*.md` files. This control log starts 2026-06-23.)_
