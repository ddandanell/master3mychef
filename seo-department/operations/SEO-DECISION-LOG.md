# SEO Decision Log — myCHEF.id

Every material decision is recorded here: what was decided, on what evidence, by whom, and what happened. Conflicts between sources are logged rather than silently resolved.

| ID | Date | Decision | Rationale / evidence | Alternatives considered | Decided by | Reversible? | Outcome / review date |
|---|---|---|---|---|---|---|---|
| D-001 | 2026-07-28 | Establish AI SEO department under `seo-department/` | Client brief; needed persistent structure across sessions | Ad-hoc per-session working | Management | Yes | Review 2026-08-28 |
| D-002 | 2026-07-28 | Do NOT classify the 61 area pages as doorway pages | Inspected `privateChefAreas.ts`: unique intro, villa density, guest profile, landmarks, coordinates, FAQs per area (3,236 lines). Fails the doorway definition | Recommend mass consolidation | 01 (verified) | Yes | Revisit after GSC cannibalisation data |
| D-003 | 2026-07-28 | Block all baseline reporting until data access granted | Cannot report performance without GSC/GA4/GBP. Reporting estimates as results would breach the department's own reporting rule | Estimate a baseline from third-party tools | 01 / 18 | Yes | On access grant |
| D-004 | 2026-07-28 | Consolidation-and-measurement before new content | 248 URLs already live with unmeasured performance; adding volume compounds an unmeasured problem | Begin publishing new pages immediately | 01 / 09 | Yes | Review at day 30 |
| D-005 | 2026-07-28 | Escalate service-area coverage as a business question, not an SEO one | Whether myCHEF serves Munduk or Nusa Penida is an operations fact the department cannot invent | Quietly unpublish remote areas | 01 / 24 | Yes | Awaiting management |

## Open conflicts requiring resolution
| ID | Conflict | Sources | Status |
|---|---|---|---|
| CF-001 | Pricing appears across `/pricing`, `/blog/private-chef-cost-bali`, `/journal/bali-private-chef-cost-guide-2026`, `/michelin-private-chef-bali-prices` and per-area `priceFrom` values | Four+ site locations | **Unresolved — requires single approved price source from management** |
| CF-002 | "Michelin-trained" and "560+ villas" claims used in metadata | `page-meta.ts` vs no evidence document on file | **Unresolved — evidence required** |
