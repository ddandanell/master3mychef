# KNOWN ISSUES

_Open items found during the 2026-06-23 control audit. Status: OPEN unless noted. Do not claim fixed without evidence._

## Structural
1. **Three nested git repos.** Root (deploys mychef.id) + `app/` + `Mychef Live/`. _Audited 2026-06-23:_
   - `app/` = **stale duplicate** of the marketing site, does not deploy, **106 uncommitted files** (1.2 GB). Risk: edits land in a dead tree. _Guards:_ documented in `CLAUDE.md`/`DO_NOT_TOUCH.md`/`PROJECT_CONTROL_STATUS.md` + physical marker `app/_DO_NOT_USE_STALE_DUPLICATE.md`. _Pending owner:_ back up the 106 uncommitted files, then archive/remove.
   - `Mychef Live/` = **a SEPARATE Next.js application** (auth/admin/chef-application platform, 1.3 GB, 0 uncommitted) — NOT a duplicate. Do not delete; confirm with owner whether it is active. Not part of the marketing-site repo's concerns.
2. **Vestigial `/blog` surface.** `/blog` 301→`/journal`, yet `BlogIndexPage.tsx` + a `/blog` entry in `scripts/prerender.mjs` + `scripts/inject-meta.ts` still exist (prerenders an unreachable page). Low risk; clean up as a deliberate decision.

## Tracking (Skill 06) — re-audited 2026-06-23
3. **CORRECTED — index.html is GTM-only.** Earlier note ("hardcoded GA4 gtag in index.html") was wrong: `G-W0PQH8ZKTF` in `index.html` is only a *comment*. GTM (`GTM-KCBNZBL9`) is the sole loader; GA4 is configured inside GTM. `index.html` NOT changed.
   - **page_view: SINGLE (OK).** `trackPageView` has zero callers (manual SPA page_view removed in `0d507c8`); page views come from GA4 via GTM + Enhanced Measurement only.
   - **Conversion `generate_lead`: FIXED (Vector 1).** `Layout.tsx` global delegated listener fires on every `wa.me`/`tel:` click, AND 5 components (ServicePage, PillarSubPage, StickyMobileCTA, ExitIntentPopup, WhatsAppButton) also fired `trackWhatsAppClick` on the same anchors → double `generate_lead`. Removed the redundant component calls; preserved attribution via `data-source`. Global listener is now the single source. ConciergeWidget kept (uses `window.open`, not caught by the listener). Verified `tsc -b` exit 0.
   - **Vector 2 (gtag + dataLayer dual-send) — RESOLVED via live runtime test 2026-06-23.** Measured on mychef.id in-browser: `window.gtag` is **`undefined`** in page scope, so `trackEvent`'s `window.gtag?.('event',…)` is an inert no-op. GA4 receives events ONLY through `dataLayer` → GTM. One WhatsApp click = exactly **one** `generate_lead` dataLayer push. **No double-send from the gtag path; no code change made** (per the rule "remove gtag only if duplication is proven" — it is not). The dead `window.gtag?.()` line is harmless; remove only if a future DebugView shows duplication.
   - **P0 — needs external Google verification (cannot be seen from the page).** GA4 `/g/collect` beacons are not observable via the browser tools (sent via sendBeacon; not in Resource Timing or the network reader). GTM + GA4 (`G-W0PQH8ZKTF`) are both loaded (`window.google_tag_manager` has both), no consent banner. **Open question only GA4 DebugView / GTM Preview can answer:** one WhatsApp click pushes BOTH `generate_lead` (our event) and `gtm.linkClick` (GTM built-in) to the dataLayer — does the container fire the GA4 conversion ONCE, or on both triggers (and does Enhanced Measurement "outbound click" also log it)? Owner test protocol in NEXT_ACTIONS #1.

## SEO / schema (verify)
4. **Sitemap vs redirects integrity.** 151 sitemap URLs; must confirm none are redirect sources or 404s (Skill 05). Two prior reverts touched sitemap/links — re-verify.
5. **Two cost-guide pages** (`/blog/private-chef-cost-bali` and `/blog/private-chef-bali-cost-breakdown-detailed-2026`). Confirm they don't compete/duplicate; pick a canonical if they overlap.
6. **Global vs per-page rating reconciliation** — resolved by removing all rating markup (`21390a7`). If reviews are ever added back, must be real + on-page (Skill 08).

## Internal linking
8. **`/private-chef-bali` appears underlinked** — only ~1 inbound internal link found in `src/` (vs `/pricing` 47, `/chefs` 26). It is a primary money keyword ("private chef bali"). Verify true inbound count (nav may link via a variable) and, if low, add contextual links from hubs (Skill 09). _Sitemap integrity verified clean: 0 of 151 sitemap URLs are redirect sources._

## Process
7. **History shows repeated rework** (add→revert pairs, USD→IDR sweeps across many commits, TS build breakages from untracked files). The skills system + agents created this sprint are the mitigation; enforce them.
