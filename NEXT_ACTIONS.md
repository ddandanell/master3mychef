# NEXT ACTIONS

_Prioritized. Each action names the skill to run. No new website features until structure is clean._

## Highest impact (next 5)
1. **P0 — needs external Google verification (owner login required).** Repo + in-browser evidence is exhausted (see below). Only GA4 DebugView / GTM Preview can confirm the server-side hit count. **Already proven in-browser (no code change needed): `window.gtag` is undefined → the gtag path is inert; one WhatsApp click = one `generate_lead` dataLayer push.** The remaining question is purely GTM-container config.

   **Owner test protocol (≈5 min):**
   1. In GTM, open **Preview** (Tag Assistant) and connect to `https://mychef.id/`.
   2. Open **GA4 → Admin → DebugView** in parallel.
   3. Load the homepage → expect **one** `page_view`.
   4. Navigate to one service page → expect **one** `page_view` (no duplicate from SPA history).
   5. Click **one** WhatsApp CTA → expect **one** `generate_lead`. Note: the click pushes BOTH `generate_lead` (our event) and GTM's built-in `gtm.linkClick`. Verify the container does **not** fire the GA4 conversion on both, and that Enhanced Measurement "outbound click" isn't separately counted as a conversion.
   6. Click **one** phone (`tel:`) CTA if present → expect **one** lead event.
   7. Confirm each event carries the correct `data-source` (e.g. `service-…-cta`, `homepage-hero`).
   8. **Decide:** if any event shows **twice** in DebugView, identify the duplicated path (A direct gtag — already ruled out; B dataLayer custom-event tag; C GTM link-click tag; D Enhanced Measurement; E other) and disable the redundant **GTM tag/trigger** (container-side), OR if it is the `window.gtag` line, remove it from `src/lib/analytics.ts`. If every event shows **once**, mark this issue CLOSED in KNOWN_ISSUES.
   - Already done in code this/last sprint: page_view single-fire; Vector-1 `generate_lead` component double-fire removed; gtag path proven inert.
2. **Archive `app/` safely (owner sign-off needed).** It is a stale duplicate with **106 uncommitted files** — do NOT delete blindly. Steps: (a) in `app/`, `git stash` or commit the 106 changes to a backup branch, or copy the folder to an external archive; (b) confirm nothing unique is needed; (c) then remove `app/` from the working tree. Physical marker already added (`app/_DO_NOT_USE_STALE_DUPLICATE.md`). **`Mychef Live/` is a separate Next.js app — do NOT delete; confirm with owner whether it's active.**
3. **Sitemap integrity pass** (Skill 05): verify all 151 `<loc>` are 200 and self-canonical; remove any redirected/404 URL; confirm 0 chains.
4. **Resolve the two cost-guide pages** (Skill 03/09): confirm intent; canonicalize the secondary to the primary if they overlap; ensure the live one is linked from `/journal` + pricing.
5. **Collapse vestigial `/blog` surface** (Skill 04): as a deliberate decision, remove `/blog` from `prerender.mjs` + `inject-meta.ts` and retire `BlogIndexPage.tsx` (everything 301s to `/journal`).

## Then (only after the above)
- Internal-linking sweep for orphaned money pages (Skill 09).
- Conversion-flow mobile pass on top commercial pages (Skill 11).
- Low-profile trust/updates content on `/journal` only if genuinely useful (per founder guidance) — routed correctly, no noisy widgets.

_Rule: pick from the top; run the named skill; verify; commit; update `CHANGELOG_CONTROL.md` and this file._
