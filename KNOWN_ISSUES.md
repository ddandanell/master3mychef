# KNOWN ISSUES

_Open items found during the 2026-06-23 control audit. Status: OPEN unless noted. Do not claim fixed without evidence._

## Structural
1. **Triple repo / dual app tree.** Root (deploys) + `app/` (stale) + `Mychef Live/` (stale) each have a `.git`. Risk: edits land in a non-deploying tree. _Mitigation shipped:_ documented in `CLAUDE.md` + `PROJECT_CONTROL_STATUS.md`. _Real fix (pending owner):_ archive/delete `app/` and `Mychef Live/`.
2. **Vestigial `/blog` surface.** `/blog` 301→`/journal`, yet `BlogIndexPage.tsx` + a `/blog` entry in `scripts/prerender.mjs` + `scripts/inject-meta.ts` still exist (prerenders an unreachable page). Low risk; clean up as a deliberate decision.

## Tracking (verify before changing — Skill 06)
3. **Possible GA4 double-count.** Both GTM (`GTM-KCBNZBL9`) and hardcoded GA4 gtag (`G-W0PQH8ZKTF`) load in `index.html`. If GTM also contains a GA4 config tag, page_view fires twice. **Needs GA4 DebugView / GTM Preview to confirm.** No blind change.

## SEO / schema (verify)
4. **Sitemap vs redirects integrity.** 151 sitemap URLs; must confirm none are redirect sources or 404s (Skill 05). Two prior reverts touched sitemap/links — re-verify.
5. **Two cost-guide pages** (`/blog/private-chef-cost-bali` and `/blog/private-chef-bali-cost-breakdown-detailed-2026`). Confirm they don't compete/duplicate; pick a canonical if they overlap.
6. **Global vs per-page rating reconciliation** — resolved by removing all rating markup (`21390a7`). If reviews are ever added back, must be real + on-page (Skill 08).

## Internal linking
8. **`/private-chef-bali` appears underlinked** — only ~1 inbound internal link found in `src/` (vs `/pricing` 47, `/chefs` 26). It is a primary money keyword ("private chef bali"). Verify true inbound count (nav may link via a variable) and, if low, add contextual links from hubs (Skill 09). _Sitemap integrity verified clean: 0 of 151 sitemap URLs are redirect sources._

## Process
7. **History shows repeated rework** (add→revert pairs, USD→IDR sweeps across many commits, TS build breakages from untracked files). The skills system + agents created this sprint are the mitigation; enforce them.
