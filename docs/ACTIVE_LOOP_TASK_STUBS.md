# Active Loop Task Stubs

Status: OPEN
Date: 2026-05-22

Execution rule:
- Keep long-horizon project plans active (multi-hour loops) and keep refining continuously.
- Tracking-first always: GA/GTM/GSC checks are mandatory in every loop.
- Repeat verification multiple times before finish:
  1) image integrity check (no broken/missing image refs)
  2) page-level re-check after edits
  3) post-preview visual check before marking complete

Priority queue
0) Tracking-first loop (always first)
- Scope: GA4 tag health, GTM state, page-view and conversion events, key conversion pages.
- Safe actions: tracking instrumentation hardening, event naming consistency, data-source normalization, non-destructive monitoring docs/scripts.
- Gate: no secret/key changes, no deploy/publish without explicit approval.
- Verifier: local GA checks + test/evidence refresh in reports/TRACKING_AUDIT_REPORT.md

1) Core Web Vitals pass on highest-traffic routes
- Scope: homepage, /fine-dining, /catering, /events, /locations
- Safe actions: component-level optimizations, lazy loading, image dimension hardening
- Gate: no route removals, no destructive rewrites
- Verifier: npm run build + Lighthouse snapshot workflow

2) Internal linking and conversion integrity sweep
- Scope: top navigation, footer, in-page cross-links, CTA paths
- Safe actions: additive links, anchor consistency, missing route fixes
- Gate: no URL slug changes without explicit approval
- Verifier: sitemap/redirect generation and 200-status route checks

3) UX/readability consistency pass (from Analyst)
- Scope: Luna, CateringMain, EventsMain, Hub, PillarSubPage, shared Button
- Safe actions: reduce inline font/style drift, unify CTA patterns, normalize section rhythm
- Gate: no content deletion, no route/meta rewrites
- Verifier: build + local probe + consistency checklist in docs/UX_READABILITY_CONSISTENCY_PLAN.md

4) Trust + FAQ consistency pass across pillars
- Scope: service pages and city pages
- Safe actions: normalize trust badges, readability, FAQ patterns
- Gate: no deletion of legal or policy content
- Verifier: typecheck/build + route smoke checks

5) Image and asset performance hygiene
- Scope: critical assets, hero images, preload strategy
- Safe actions: optimize formats and dimensions, remove dead imports only with proof
- Gate: no destructive file deletion without explicit approval
- Verifier: npm run audit:images + build

Safety gates
- No delete/move/archive/commit/push/deploy without explicit approval.
- No paid external API actions without explicit approval.
- Keep changes small and reversible.

Rollback protocol
- For each implementation step: revert by file-level git restore for touched files only.
- If runtime fails after a step: restore touched files, re-run build, then re-open task.
