# CHANGELOG (Control)

_One line per shipped change. Newest first. SHA = production commit on `main`._

## 2026-06-23
- `<consent audit>` — **Consent Mode + GA4 collection audit (no changes made).** Verified consent is unset/implicit (effectively granted), no CMP/banner, no denial; GA4 collecting healthy real traffic incl. Indonesia (7-day: page_view 207, whatsapp_contact 208); this browser doesn't block GA. Found an "Internal Traffic" data filter (Exclude, Testing) → explains the earlier 0-Realtime as test-environment, not a tracking failure. No cookie banner needed for Indonesia; region-aware Consent Mode recommended only if meaningful EEA/UK/CH traffic. No GTM/GA4/code changes.
- `<GA4 fix>` — **Direct GTM/GA4 account verification + conversion fix.** Verified container `GTM-KCBNZBL9` (2 tags, 1 trigger) via Tag Assistant: one WhatsApp click fires `whatsapp_click` exactly once — no double-count. Found WhatsApp conversion wasn't counting (GA4 modification renamed `whatsapp_click`→`whatsapp_contact`, a non-key-event). Owner-approved fix: changed the GA4 event-modification "Map WhatsApp Click to Conversion" New Value → **`generate_lead`** (existing key event). GA4-only change (no code/index.html/GTM-tag edit), reversible. Phone tracking still missing; live server-side confirmation pending owner (Realtime didn't register this browser's session).
- `<tracking verify>` — **P0 tracking closeout (no code change).** Live in-browser test on mychef.id: `window.gtag` undefined → `trackEvent` gtag path is inert (dual-send double-fire DISPROVEN); one WhatsApp click = one `generate_lead` dataLayer push. GA4 `/collect` beacons not observable from page → GTM server-side hit count marked **P0 - needs external Google verification** with owner DebugView/GTM-Preview protocol (NEXT_ACTIONS #1). `index.html`/`analytics.ts` not changed.
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
