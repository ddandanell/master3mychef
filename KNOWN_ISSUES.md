# KNOWN ISSUES

_Open items found during the 2026-06-23 control audit. Status: OPEN unless noted. Do not claim fixed without evidence._

## Structural
1. **Triple repo / dual app tree.** Root (deploys) + `app/` (stale) + `Mychef Live/` (stale) each have a `.git`. Risk: edits land in a non-deploying tree. _Mitigation shipped:_ documented in `CLAUDE.md` + `PROJECT_CONTROL_STATUS.md`. _Real fix (pending owner):_ archive/delete `app/` and `Mychef Live/`.
2. **Vestigial `/blog` surface.** `/blog` 301→`/journal`, yet `BlogIndexPage.tsx` + a `/blog` entry in `scripts/prerender.mjs` + `scripts/inject-meta.ts` still exist (prerenders an unreachable page). Low risk; clean up as a deliberate decision.

## Tracking (Skill 06) — re-audited 2026-06-23
3. **CORRECTED — index.html is GTM-only.** Earlier note ("hardcoded GA4 gtag in index.html") was wrong: `G-W0PQH8ZKTF` in `index.html` is only a *comment*. GTM (`GTM-KCBNZBL9`) is the sole loader; GA4 is configured inside GTM. `index.html` NOT changed.
   - **page_view: SINGLE (OK).** `trackPageView` has zero callers (manual SPA page_view removed in `0d507c8`); page views come from GA4 via GTM + Enhanced Measurement only.
   - **Conversion `generate_lead`: FIXED (Vector 1).** `Layout.tsx` global delegated listener fires on every `wa.me`/`tel:` click, AND 5 components (ServicePage, PillarSubPage, StickyMobileCTA, ExitIntentPopup, WhatsAppButton) also fired `trackWhatsAppClick` on the same anchors → double `generate_lead`. Removed the redundant component calls; preserved attribution via `data-source`. Global listener is now the single source. ConciergeWidget kept (uses `window.open`, not caught by the listener). Verified `tsc -b` exit 0.
   - **OPEN (Vector 2 — needs GTM Preview).** `trackEvent` (src/lib/analytics.ts) fires every event to BOTH `window.gtag(...)` AND `window.dataLayer.push(...)`. If the GTM container has a GA4 Event tag triggered by these custom events AND gtag also forwards to GA4, each custom event reaches GA4 twice. **Cannot be confirmed from repo — requires GTM Preview / GA4 DebugView** (see NEXT_ACTIONS). Do NOT change `trackEvent` channels blindly: removing the wrong one breaks tracking.

## SEO / schema (verify)
4. **Sitemap vs redirects integrity.** 151 sitemap URLs; must confirm none are redirect sources or 404s (Skill 05). Two prior reverts touched sitemap/links — re-verify.
5. **Two cost-guide pages** (`/blog/private-chef-cost-bali` and `/blog/private-chef-bali-cost-breakdown-detailed-2026`). Confirm they don't compete/duplicate; pick a canonical if they overlap.
6. **Global vs per-page rating reconciliation** — resolved by removing all rating markup (`21390a7`). If reviews are ever added back, must be real + on-page (Skill 08).

## Internal linking
8. **`/private-chef-bali` appears underlinked** — only ~1 inbound internal link found in `src/` (vs `/pricing` 47, `/chefs` 26). It is a primary money keyword ("private chef bali"). Verify true inbound count (nav may link via a variable) and, if low, add contextual links from hubs (Skill 09). _Sitemap integrity verified clean: 0 of 151 sitemap URLs are redirect sources._

## Process
7. **History shows repeated rework** (add→revert pairs, USD→IDR sweeps across many commits, TS build breakages from untracked files). The skills system + agents created this sprint are the mitigation; enforce them.
