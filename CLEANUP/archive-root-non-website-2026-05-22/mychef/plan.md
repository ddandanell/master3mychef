# myCHEF Master Blueprint

**Location:** `/Users/openclaw/Downloads/MYCHEF . MASTER/mychef/plan.md`  
**Purpose:** Single operating blueprint for strategy, tone, execution, ownership, and progress.  
**Rule:** Every major task starts here first.

---

## 1) Mission Control Summary

myCHEF has already completed the large technical and structural rebuild from the original audits.  
The system is now in **execution mode**, where success depends on:

1. finishing owner-side blockers,
2. enforcing one consistent tone system across pages,
3. running a repeatable growth machine (content + conversion + measurement).

---

## 2) Vision, Mission, Positioning

### Vision
Be Bali's most trusted villa hospitality brand for private chef dining, catering, events, and staffing.

### Mission
Turn villas into fully managed hospitality experiences with premium food, reliable operations, and frictionless booking.

### Positioning
**Not a chef marketplace.**  
myCHEF is a premium hospitality operator: "Your Villa. Our Kitchen."

---

## 3) What We Have Done vs Not Done

## Done (Execution Tracker + Audit Corpus)
- Core 4-phase implementation delivered (40/40 primary tasks completed).
- Service architecture built across key routes (fine dining, events, in-villa, staffing, menus, chefs, about, blog).
- Major UX/SEO/CRO/Schema/build fixes completed.
- Fine-dining sub-page expansion completed.
- **Technical Transformation**: Raw JS bundle reduced by 30% (~560kB); 31 unused packages and 47 redundant UI files removed.
- **Visual Trust**: 100% Hero standardization to "Dark Standard" (25+ pages); 11+ high-end photography assets generated via BFL API.
- **Growth Engine**: Global Search Overlay implemented; Jakarta expansion and Planning Guides surfaced in navigation.
- **Concierge**: AI Concierge upgraded with persona-switching, context-triggers, and personalized avatars.
- **SEO Expansion**: Delivery of the "Revenue-Ready Landing Page Plan" and registration of Tier 1 high-intent routes.
- **WhatsApp AI**: Knightbot-MD logic refined with P0-P3 lead scoring and Bali/Jakarta contextual awareness.
- Technical quality gates stabilized (TypeScript/build/audit workflow in place).
- **Tone Hardening**: Final perfection sweep completed. 'Luxury' adjective removed across 31 pages (2026-05-16).

## Not Done (Current Blockers)
| ID | Blocker | Owner | Status | Why It Matters |
|---|---|---|---|---|
| B1 | Replace placeholder/generated visuals with real photo/video assets | Owner | Blocked | Trust + premium perception + conversion |
| B2 | Final GA4 property + GTM container activation | Owner + Copilot | Blocked | Cannot run full KPI loop without measurement |
| B3 | Live chat widget (Tawk.to) final activation | Owner | Blocked | Faster lead capture and qualification |
| B4 | CRM automation setup for follow-up templates | Owner | Blocked | Lost leads without structured follow-up |
| B5 | **Phase 3 Transition (Scheduled: 2026-05-23)** | Gemini | Pending | Transition to Content & Growth engine |

---

## 4) Tone & Brand Operating System (Authoritative)

This section merges insights from `concept-simplification.md`, copywriting audits, persona feedback, and positioning audits.

### Core Tone Rules
1. Short sentences. Concrete words. Active voice.
2. Show luxury through specifics, not adjectives.
3. Lead with guest outcome ("you"), not process ("we").
4. Warm + confident + Bali-villa-aware.
5. No vague luxury cliches ("curated journey", "elevated", "immerse yourself").

### Tone by Service Line
| Service | Tone | What to Emphasize | What to Avoid |
|---|---|---|---|
| Fine Dining | Intimate, cinematic, refined | craft, intimacy, menu detail, memory value | generic chef-marketplace language |
| Catering | Clear, practical, stress-free | convenience, value clarity, family/group fit | intimidating luxury-only framing |
| Events | Confident, full-service, operational | "we handle everything", reliability, scale | thin copy, missing package clarity |
| In-Villa Service / Staffing | Professional, trust-heavy B2B | vetting, roles, process, reliability | redirect-like thin pages or vague promises |

### Trust Rules
- Use verifiable claims only.
- Prioritize proof: named people, real photos, concrete stats, real testimonials.
- Remove or qualify unverifiable awards/claims.

---

## 5) Strategic North Star + KPI Stack

### North Star
Qualified booking conversations per week (WhatsApp + form leads).

### KPI Stack
| KPI | Baseline | Target | Owner | Status |
|---|---:|---:|---|---|
| Qualified booking conversations/week | TBD | +30% vs baseline | Owner + Copilot | In Progress |
| Visit → inquiry conversion rate | TBD | +20% vs baseline | Owner + Copilot | In Progress |
| Avg first-response time | TBD | <10 min | Owner | Pending |
| Organic sessions to service/location pages | TBD | +25% vs baseline | Owner + Kimi | In Progress |
| Mobile performance (key pages) | TBD | 85+ | Copilot | In Progress |
| Branded trust perception (qualitative review) | TBD | Upward monthly trend | Owner + Copilot | Pending |

---

## 6) The Execution Machine (How We Run Work)

## Stage A — Intake
1. Start in this file.
2. Map request to one of 5 workstreams.
3. Define measurable success and owner before implementation.

## Stage B — Build
1. Implement page/content/technical change.
2. Keep service separation clear (fine dining vs catering vs events vs staffing).
3. Apply tone system from Section 4.

## Stage C — Quality Gate
1. TypeScript check.
2. Security/audit check.
3. Production build check.

## Stage D — Launch
1. Publish.
2. Log result in execution tracker.
3. Update this blueprint backlog/status.

## Stage E — Learn
1. Review KPI movement.
2. Decide keep/improve/rollback.
3. Push next iteration to backlog.

---

## 7) Workstreams + Owners

| Workstream | Scope | Primary Owner | Supporting |
|---|---|---|---|
| Growth Engine | SEO, content velocity, internal linking, CRO | Copilot | Kimi + Owner |
| Trust & Brand | messaging clarity, proof architecture, visual trust | Owner + Copilot | Kimi |
| Technical Quality | performance, accessibility, schema, routing integrity | Copilot | — |
| Operations Enablement | analytics, chat, CRM, lead handling | Owner | Copilot |
| Asset Quality | photo/video authenticity and consistency | Owner | Copilot |

---

## 8) Live Priority Backlog

| ID | Priority | Task | Owner | Status | Done When |
|---|---|---|---|---|---|
| P0-1 | Critical | Replace all placeholder/generated visuals with real approved assets | Owner | Blocked | All primary service/event pages use real media only |
| P0-2 | Critical | Complete GA4 + GTM production setup and verify event flow | Owner + Copilot | Blocked | Key events visible and stable in GA4 |
| P1-1 | High | Activate live chat (Tawk.to) with production widget | Owner | Blocked | Chat visible and receiving test message |
| P1-2 | High | Load follow-up templates into CRM with trigger logic | Owner | Blocked | Automated follow-up sequence active |
| P1-3 | High | Cross-site tone consistency pass on top conversion pages | Copilot | Done | Fine dining, catering, and wedding conversion pages now use clearer planning-first language instead of weaker luxury/premium phrasing |
| P1-4 | High | Persona-gap content sprint (corporate, retreat, family, multicultural proof) | Copilot + Kimi | Done | Inquiry/navigation friction reduced across family, wedding, corporate, and retreat pages with planning-first content replacing weaker proof-style surfaces |
| P2-1 | Medium | Monthly KPI review and optimization sprint rhythm | Owner + Copilot | Pending | Monthly operating cadence active |
| P3-1 | High | **Phase 3: Content & Growth Engine** | Gemini | **Scheduled** | Launch on May 23. Blog, location pages, authority building. |

---

## 8A) Active Execution Checklist

- [x] Expose built service subpages in the main navigation
- [x] Harden inquiry flows on contact, events, wedding, retreat, corporate, and catering surfaces
- [x] Add family budgeting and partial-coverage guidance on villa catering
- [x] Add multi-cultural and multi-day planning clarity on weddings
- [x] Add corporate proposal/capabilities clarity without relying on unverifiable logos or claims
- [x] Add retreat safety, sample-menu, and multi-day planning clarity without relying on unverifiable testimonials
- [x] Finish the remaining cross-page tone consistency pass on top conversion pages (Standardized)
- [x] Final Perfection Sweep: Eliminate 'luxury' adjective across all 91 canonical URLs (Gemini 2026-05-16)
- [x] **Next Operational Milestone**: WhatsApp AI Agent (Knightbot-MD) setup & lead qualification logic.
- [ ] **Scheduled Transition**: Automatically move to Phase 3 (Content & Growth) on May 23.

---

## 9) Source-of-Truth Map (MD Corpus)

| Document Group | Primary Files | Role in Machine |
|---|---|---|
| Master audits | `mychef_full_audit.agent.final.md`, `mychef_audit_sec*.md` | Root diagnosis, roadmap logic, scoring |
| Strategy frameworks | `ux-strategy.md`, `visual-design-strategy.md`, `copywriting-strategy.md`, `psychology-strategy.md` | Detailed execution patterns |
| Brand/tone | `concept-simplification.md`, `myCHEF_Copywriting_Audit.md`, `mychef_brand_positioning_audit.md` | Voice, positioning, trust rules |
| Persona evidence | `persona-feedback-*.md`, `persona-feedback-summary.md` | Real friction + demand signals |
| SEO structure | `mychef/seo-expansion-plan.md`, `mychef-seo-audit.md` | IA, keyword and content expansion |
| Live execution log | `app/.kimi/execution-tracker.md` | What was actually shipped and pending |

---

## 10) Standard Workflow for Every New Major Task

1. Open this blueprint and select the workstream.
2. Add or update the task in Section 8 before starting.
3. Assign owner + support.
4. Execute.
5. Pass quality gate.
6. Update execution tracker.
7. Update Section 3 and Section 8 status.
8. Log key decision in Section 11.

---

## 11) Decision Log

| Date | Decision | Reason | Owner |
|---|---|---|---|
| 2026-05-16 | Standardize all high-intent hero sections to "Dark Standard" | Ensure WCAG AA readability and premium cinematic consistency | Claude |
| 2026-05-16 | Adopt `mychef/plan.md` as master planning source | One source of truth for all major work | Owner + Copilot |
| 2026-05-16 | Upgrade plan into full blueprint with done/not-done state + tone operating system | Align all MD strategy into one execution machine | Owner + Copilot |
| 2026-05-16 | Expose built service subpages in the main navigation | Reduce page-discovery friction | Copilot |
| 2026-05-16 | Prioritize persona-gap improvements before claim-heavy proof | Improve conversion without unverifiable evidence | Copilot |
| 2026-05-16 | Finish top-page tone pass with concrete package naming | Consistency with no-cliche voice system | Copilot |
| 2026-05-17 | Deliver SEO Expansion Plan & WhatsApp AI Logic | Map 30+ revenue pages and refine Knightbot-MD scoring | Claude |

---

## 12) Operating Note

Use English for all updates in this file.  
No major task starts outside this blueprint.
