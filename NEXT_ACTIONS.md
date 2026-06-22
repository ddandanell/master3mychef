# NEXT ACTIONS

_Prioritized. Each action names the skill to run. No new website features until structure is clean._

## Highest impact (next 5)
1. **Manual GTM/GA4 verification (the only remaining tracking unknown)** — repo evidence is now exhausted; this MUST be checked by a human in the Google tools:
   - **GTM Preview (Tag Assistant):** load mychef.id, open one page, click a WhatsApp CTA. Confirm: (a) exactly ONE GA4 `page_view` per navigation; (b) exactly ONE `generate_lead` per WhatsApp click after the Vector-1 fix; (c) whether a GA4 **Event tag** in the container is triggered by the custom `dataLayer` events from `trackEvent` (`generate_lead`, `form_complete`, etc.). 
   - **GA4 DebugView:** confirm the same events appear once, not twice.
   - **If** GTM has a GA4 Event tag firing on these custom events AND `gtag()` also forwards them → remove ONE channel in `src/lib/analytics.ts` `trackEvent` (keep dataLayer if GTM owns GA4; drop the `window.gtag(...)` line). Do not change blindly — decision depends on what GTM Preview shows.
   - Page_view single-fire and the Vector-1 `generate_lead` fix are already done in code (this sprint).
2. **Decide & execute `app/` + `Mychef Live/` archival** (Skill 01/15): owner approves; then remove or move out of the repo so no one edits a dead tree. Biggest source of wasted work.
3. **Sitemap integrity pass** (Skill 05): verify all 151 `<loc>` are 200 and self-canonical; remove any redirected/404 URL; confirm 0 chains.
4. **Resolve the two cost-guide pages** (Skill 03/09): confirm intent; canonicalize the secondary to the primary if they overlap; ensure the live one is linked from `/journal` + pricing.
5. **Collapse vestigial `/blog` surface** (Skill 04): as a deliberate decision, remove `/blog` from `prerender.mjs` + `inject-meta.ts` and retire `BlogIndexPage.tsx` (everything 301s to `/journal`).

## Then (only after the above)
- Internal-linking sweep for orphaned money pages (Skill 09).
- Conversion-flow mobile pass on top commercial pages (Skill 11).
- Low-profile trust/updates content on `/journal` only if genuinely useful (per founder guidance) — routed correctly, no noisy widgets.

_Rule: pick from the top; run the named skill; verify; commit; update `CHANGELOG_CONTROL.md` and this file._
