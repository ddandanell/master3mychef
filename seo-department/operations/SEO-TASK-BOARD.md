# SEO Task Board — myCHEF.id

**Owner:** Project Manager (02) · **Updated:** 2026-07-29

Every task carries all mandatory fields. A task without acceptance criteria is rejected.

## Legend
Priority: P0 (blocking) · P1 (this sprint) · P2 (next) · P3 (backlog)
Status: BLOCKED · READY · IN PROGRESS · IN REVIEW · AWAITING APPROVAL · DONE

---

### P0 — Blocking

**TASK-001 · Verify server-render parity**
- Business objective: confirm search engines and AI crawlers can actually read the site
- Target: 10 priority commercial URLs · Intent: n/a (technical)
- Owner: 06 · Inputs: live site access · Output: rendering parity report
- Acceptance: raw HTML vs rendered DOM compared for all 10; any gap logged as CRITICAL
- Deadline: Day 3 · Dependencies: none · Approver: 01 · Status: READY

**TASK-002 · Audit WhatsApp conversion tracking**
- Business objective: make the primary conversion measurable
- Target: sitewide · Owner: 18 · Inputs: GA4 + GTM access
- Acceptance: every WhatsApp entry point fires a verified event; documented in the tracking spec
- Deadline: Day 7 · Dependencies: analytics access · Approver: 01 · Status: **BLOCKED — access**

**TASK-003 · Confirm genuine service coverage per area**
- Business objective: stop advertising areas the business cannot serve (R-001)
- Target: 62 area records · Owner: Management · Inputs: operations knowledge
- Acceptance: each area marked serve / serve-with-surcharge / do-not-serve; page state updated to match
- Deadline: Day 10 · Dependencies: management input · Approver: Management · Status: **BLOCKED — business decision**

---

### P1 — Current sprint

**TASK-004 · Wedding cluster cannibalisation review**
- Business objective: protect the highest-value booking category (C-004)
- Target: `/events/weddings`, `/bali-wedding-catering-packages`, `/wedding-catering-indonesia`, `/journal/bali-wedding-catering-complete-guide`
- Owner: 05 + 04 · Inputs: GSC query-per-URL
- Acceptance: one primary URL per intent agreed; consolidation plan with redirects if required
- Deadline: Day 20 · Dependencies: GSC · Approver: 01 + Management · Status: BLOCKED — GSC

**TASK-005 · Establish single approved pricing source (CF-001)**
- Business objective: eliminate contradictory prices across 4+ URLs
- Owner: Management + 11 · Acceptance: one document declared authoritative; all pages reconciled
- Deadline: Day 14 · Approver: Management · Status: BLOCKED — business input

**TASK-006 · Substantiate or remove trust claims (R-003)**
- Owner: 24 + Management · Acceptance: every quantitative claim either evidenced or removed sitewide
- Deadline: Day 14 · Approver: Management · Status: BLOCKED — evidence

**TASK-007 · Full technical crawl of 248 URLs**
- Owner: 06 · Acceptance: `TECHNICAL-ISSUES.csv` populated with severity-rated findings
- Deadline: Day 10 · Status: READY

**TASK-008 · Complete content inventory decisions**
- Owner: 09 · Inputs: `CONTENT-INVENTORY.csv` (248 rows seeded) + GSC
- Acceptance: every row assigned keep / improve / expand / consolidate / redirect / noindex / delete with rationale
- Deadline: Day 25 · Status: BLOCKED — GSC

---

### P2 — Next
GBP audit and NAP verification (12) · competitor set and SERP landscape (03) · backlink baseline (15) · image path verification (17) · dietary language audit (24)

### P3 — Backlog
Indonesian language business case (22) · partner surface audit (16) · internal link build-out (14) · schema audit (13)

---

### Done

**TASK-009 · Sync upstream markdown + harden publish pipeline (correction doc #5) — DONE 2026-07-29**
- Found and fixed a silent-data-loss defect in `publish-content.py` (would have dropped 140 of 161 article bodies); backported 13 upstream md files; dry-run divergence now zero. Decisions D-006, D-007.

**TASK-010 · 6-guest minimum sweep (correction doc #4) — DONE 2026-07-29**
- Owner confirmed scope: dining formats → 5 guests; events and kids parties excluded; babi guling 6 / buffet 30 retained; capacity wording untouched. 39 replacements across 22 files (pages, articleContent, upstream md); stale IDR 5M plated minimum-spend FAQ also cleared. Decisions D-008, D-009. Follow-up commit 4bf1c2a9 fixed the numeric `minGuests` field in `src/data/menus/` (32 menus) the string sweep could not catch. **Deployed and promoted 2026-07-29 (dpl_CHZY2XBe…); live `/fine-dining` verified — all 28 minimum statements now read 5 guests.**
