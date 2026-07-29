# SEO Decision Log — myCHEF.id

Every material decision is recorded here: what was decided, on what evidence, by whom, and what happened. Conflicts between sources are logged rather than silently resolved.

| ID | Date | Decision | Rationale / evidence | Alternatives considered | Decided by | Reversible? | Outcome / review date |
|---|---|---|---|---|---|---|---|
| D-001 | 2026-07-28 | Establish AI SEO department under `seo-department/` | Client brief; needed persistent structure across sessions | Ad-hoc per-session working | Management | Yes | Review 2026-08-28 |
| D-002 | 2026-07-28 | Do NOT classify the 61 area pages as doorway pages | Inspected `privateChefAreas.ts`: unique intro, villa density, guest profile, landmarks, coordinates, FAQs per area (3,236 lines). Fails the doorway definition | Recommend mass consolidation | 01 (verified) | Yes | Revisit after GSC cannibalisation data |
| D-003 | 2026-07-28 | Block all baseline reporting until data access granted | Cannot report performance without GSC/GA4/GBP. Reporting estimates as results would breach the department's own reporting rule | Estimate a baseline from third-party tools | 01 / 18 | Yes | On access grant |
| D-004 | 2026-07-28 | Consolidation-and-measurement before new content | 248 URLs already live with unmeasured performance; adding volume compounds an unmeasured problem | Begin publishing new pages immediately | 01 / 09 | Yes | Review at day 30 |
| D-005 | 2026-07-28 | Escalate service-area coverage as a business question, not an SEO one | Whether myCHEF serves Munduk or Nusa Penida is an operations fact the department cannot invent | Quietly unpublish remote areas | 01 / 24 | Yes | Awaiting management |
| D-006 | 2026-07-29 | Harden `scripts/publish-content.py` against silent data loss | Dry run proved the parser failed on the current `articleContent.ts` (`};` terminator) and a real run would have written 21 of 161 entries — deleting 140 article bodies. Added tolerant regex, fail-fast on parse failure, and a guard refusing to write fewer entries than exist | Leave script as-is and rely on git recovery | 06 / 23 | Yes | Verified by dry run 2026-07-29: 161→161, zero drops |
| D-007 | 2026-07-29 | Backport all 2026-07-28 shipped content fixes to `mychef-seo/content/` markdown | 13 upstream files still carried pre-fix wording (50% deposit claims, "8+ years" vs "since 2019", tax phrasing, salary quoting, 2 `[BUSINESS CONFIRMATION REQUIRED]` markers); next publish run would have reverted 12 live routes | Freeze the publish script instead | 10 / 11 | Yes | Dry run divergence: NONE |
| D-008 | 2026-07-29 | General guest minimum is 5 for dining formats (catering, fine dining, three-course/family style, grazing, retreat, plated) | Owner decision in commit c825330f, scope re-confirmed by owner 2026-07-29: applies to dining formats, NOT events (own numbers) and NOT kids parties (6 children stays). Babi guling 6 (whole-pig) and buffet 30 retained as operational. Chef's Table "seats six" is capacity, untouched. 39 replacements across 22 files (site + upstream md + articleContent) | Catering-only scope; site-wide including kids | Management (owner) | Yes | Residual 6-references audited: all intentional |
| D-009 | 2026-07-29 | Remove stale IDR 5M minimum-spend claim from plated FAQ (site + upstream md) | c825330f abolished the 5M minimum spend but the FAQ on `/catering/plated-catering` still cited it — a live price-claim contradiction | Leave until next content pass | 11 / 24 | Yes | Fixed both sources 2026-07-29 |

## Open conflicts requiring resolution
| ID | Conflict | Sources | Status |
|---|---|---|---|
| CF-001 | Pricing appears across `/pricing`, `/blog/private-chef-cost-bali`, `/journal/bali-private-chef-cost-guide-2026`, `/michelin-private-chef-bali-prices` and per-area `priceFrom` values | Four+ site locations | **Unresolved — requires single approved price source from management** |
| CF-002 | "Michelin-trained" and "560+ villas" claims used in metadata | `page-meta.ts` vs no evidence document on file | **Unresolved — evidence required** |
