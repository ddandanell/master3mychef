# NEXT ACTIONS

_Prioritized. Each action names the skill to run. No new website features until structure is clean._

## Highest impact (next 5)
1. **Tracking P0 — DONE (verified directly in GTM + GA4, fix applied 2026-06-23).** No double-counting; WhatsApp-conversion mapping fixed to `generate_lead` (owner-approved). Remaining owner confirmations / follow-ups:
   - **Confirm live:** in GA4 DebugView/Realtime, click a WhatsApp CTA on mychef.id and confirm **one** `generate_lead` appears (I couldn't self-confirm — this browser's events didn't register in Realtime; likely consent-mode/cookieless or a blocker).
   - **Phone tracking gap:** `tel:` clicks have no GTM trigger/tag → not tracked. The site code already pushes `generate_lead` (method=Phone) via the global listener, but GTM doesn't consume it. To fix: add a GTM trigger for phone clicks (Link Click `tel:` OR Custom Event `generate_lead`) feeding a GA4 event. Small, additive.
   - **Consent/collection: AUDITED 2026-06-23 — GA4 collecting fine, no banner needed for Indonesia.** Consent is unset/implicit (granted), no CMP, no denial; `/collect` not blocked; 7-day real data healthy incl. Indonesia. The 0-Realtime was internal-traffic tagging + synthetic test (an "Internal Traffic" Exclude filter exists, state: Testing). No change made.
   - **EEA/UK/CH compliance (recommended, optional):** if meaningful EEA/UK/Switzerland traffic appears, add a region-aware Consent Mode v2 + minimal CMP (deny analytics/ad storage for those regions until consent; granted elsewhere incl. Indonesia). Do not apply globally. Smallest setup: a lightweight region-gated banner wired to GTM Consent Mode.
   - Optional cleanup: the dead `window.gtag?.()` line in `src/lib/analytics.ts` is inert (gtag undefined) — remove only if desired; not required.
2. **Archive `app/` safely (owner sign-off needed).** It is a stale duplicate with **106 uncommitted files** — do NOT delete blindly. Steps: (a) in `app/`, `git stash` or commit the 106 changes to a backup branch, or copy the folder to an external archive; (b) confirm nothing unique is needed; (c) then remove `app/` from the working tree. Physical marker already added (`app/_DO_NOT_USE_STALE_DUPLICATE.md`). **`Mychef Live/` is a separate Next.js app — do NOT delete; confirm with owner whether it's active.**
3. **Sitemap integrity pass** (Skill 05): verify all 151 `<loc>` are 200 and self-canonical; remove any redirected/404 URL; confirm 0 chains.
4. **Resolve the two cost-guide pages** (Skill 03/09): confirm intent; canonicalize the secondary to the primary if they overlap; ensure the live one is linked from `/journal` + pricing.
5. **Collapse vestigial `/blog` surface** (Skill 04): as a deliberate decision, remove `/blog` from `prerender.mjs` + `inject-meta.ts` and retire `BlogIndexPage.tsx` (everything 301s to `/journal`).

## Then (only after the above)
- Internal-linking sweep for orphaned money pages (Skill 09).
- Conversion-flow mobile pass on top commercial pages (Skill 11).
- Low-profile trust/updates content on `/journal` only if genuinely useful (per founder guidance) — routed correctly, no noisy widgets.

_Rule: pick from the top; run the named skill; verify; commit; update `CHANGELOG_CONTROL.md` and this file._
