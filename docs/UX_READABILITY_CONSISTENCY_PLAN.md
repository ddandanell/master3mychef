# UX & Readability Consistency Plan (Mode 2 Analyst)

Date: 2026-05-22

Execution standard (locked)
- Keep structure/design system consistent across all pages; optimize inside the system, not by style drift.
- Tracking-first for every optimization batch: validate GA/GTM behavior and conversion events before/after major edits.
- Every completion pass requires triple-check:
  1) image integrity (broken path check + visual check)
  2) page re-check after edits (content, CTA, readability)
  3) post-preview check before close-out
Source inputs:
- deepseek Mode 2 read-only analyst run (proc_8cfb4e1072a6)
- local code scan across high-traffic files

Scope (first wave)
- src/pages/LunaPage.tsx
- src/pages/CateringMainPage.tsx
- src/pages/EventsMainPage.tsx
- src/pages/HubPage.tsx
- src/components/PillarSubPage.tsx
- src/components/ui/button.tsx

Observed consistency risks (evidence)
- Inline typography style usage is uneven across pages (fontFamily inline usage present across all major pages).
- Hardcoded hex colors are widespread in page code and overlap with Button variant hardcoding.
- Heavy inline style blocks in large pages raise drift risk and readability regression risk.
- CTA implementation mixed (Button wrappers + raw anchors), risking inconsistent hover/focus/state behavior.
- Hero/section structure differs by page family (spacing and visual rhythm drift risk).

Prioritized fix plan

P0 — Token and readability baseline (lowest risk, highest impact)
1) Introduce/confirm shared text + color utility conventions in one reference doc and apply to first-wave pages only.
2) Replace repeated inline fontFamily patterns with reusable utility classes where possible.
3) Normalize body copy readability defaults on key pages:
   - body line-height target consistent
   - secondary text opacity/contrast consistent
4) Keep existing design language; no content or route changes.

P1 — CTA system consistency
1) Standardize primary/secondary/whatsapp CTA placement pattern for hero + footer CTA blocks.
2) Migrate raw anchor CTA styling to Button variants where safe.
3) Ensure all conversion CTAs include stable data-source attributes.
4) Enforce 44px+ touch target for click/tap controls.

P2 — Section rhythm and hero consistency
1) Normalize section vertical rhythm on first-wave pages (same spacing scale for section starts/ends).
2) Align FAQ + cross-pillar closing sections to one repeatable pattern.
3) Consolidate repeated decorative inline style snippets into reusable classes/components.

P3 — Hardening and governance
1) Add a lightweight consistency audit script/report for:
   - inline fontFamily count
n   - hardcoded hex count in target files
   - raw anchor CTA count in page files
2) Add checklist gate to PR workflow notes (non-blocking first, then tightening).

Verification checklist
- Functional
  - npm run build passes
  - localhost probe returns HTTP 200 after each batch
- Consistency (first-wave pages)
  - Inline fontFamily occurrences reduced
  - Hardcoded hex occurrences reduced or centralized
  - Raw anchor CTAs reduced where Button variant is appropriate
  - CTA labels/order follow agreed pattern (hero + final CTA)
- UX/readability
  - No text contrast regressions on dark and light sections
  - Mobile tap targets preserved (>=44px)
  - FAQ and cross-pillar sections visually coherent across page families

Safety gates
- No deletions, no route slug changes, no metadata rewrites in this pass.
- No commit/push/deploy without explicit approval.
- Changes must be reversible file-level edits.
