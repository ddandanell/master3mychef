# NEXT ACTIONS

_Prioritized. Each action names the skill to run. No new website features until structure is clean._

## Highest impact (next 5)
1. **Confirm GA4 double-count** (Skill 06): run GA4 DebugView + GTM Preview. If GTM fires GA4, remove the hardcoded gtag (or vice-versa) so page_view fires once. Evidence-first; no blind edit.
2. **Decide & execute `app/` + `Mychef Live/` archival** (Skill 01/15): owner approves; then remove or move out of the repo so no one edits a dead tree. Biggest source of wasted work.
3. **Sitemap integrity pass** (Skill 05): verify all 151 `<loc>` are 200 and self-canonical; remove any redirected/404 URL; confirm 0 chains.
4. **Resolve the two cost-guide pages** (Skill 03/09): confirm intent; canonicalize the secondary to the primary if they overlap; ensure the live one is linked from `/journal` + pricing.
5. **Collapse vestigial `/blog` surface** (Skill 04): as a deliberate decision, remove `/blog` from `prerender.mjs` + `inject-meta.ts` and retire `BlogIndexPage.tsx` (everything 301s to `/journal`).

## Then (only after the above)
- Internal-linking sweep for orphaned money pages (Skill 09).
- Conversion-flow mobile pass on top commercial pages (Skill 11).
- Low-profile trust/updates content on `/journal` only if genuinely useful (per founder guidance) — routed correctly, no noisy widgets.

_Rule: pick from the top; run the named skill; verify; commit; update `CHANGELOG_CONTROL.md` and this file._
