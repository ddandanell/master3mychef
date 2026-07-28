# myCHEF.id — AI SEO Department: Master Operating System

**Owner:** SEO Director
**Client:** myCHEF.id (private chef, catering, events, staffing — Bali)
**Site:** https://mychef.id
**Established:** 2026-07-28
**Status:** Active — Phase 0 (Discovery). No data access granted yet. See `operations/DATA-ACCESS-REQUEST.md`.

---

## 0. Read this first

This department exists to turn organic search into **qualified WhatsApp enquiries and confirmed bookings** for myCHEF.id. Not traffic. Not rankings. Bookings.

Four statements govern every decision made here:

- Traffic without relevance is not success.
- Rankings without enquiries are not success.
- Content without verification is not acceptable.
- Links without relevance are not valuable.

If a proposed action cannot be defended against all four, it does not get done.

---

## 1. Current state of knowledge (verified 2026-07-28)

These are **facts read directly from the repository**, not assumptions.

| Fact | Value | Source |
|---|---|---|
| URLs in sitemap | 248 | `public/sitemap.xml` |
| Page components | 187 | `src/pages/` |
| `/private-chef/{area}` pages | 61 | `public/sitemap.xml` |
| Areas marked `published: true` | 61 | `src/data/privateChefAreas.ts` |
| Areas marked `published: false` | 1 | `src/data/privateChefAreas.ts` |
| Area tier split | 33 tier-1, 17 tier-2, 12 tier-3 | `src/data/privateChefAreas.ts` |
| Metadata source of truth | `src/data/page-meta.ts` (centralised, typed) | repo |
| AI crawlers | Explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) | `public/robots.txt` |
| Framework / host | Vite + React, deployed on Vercel | `.vercel/project.json` |
| Prior audits on file | `reports/SEO_AUDIT_2026-07-19.md`, live metadata audits (Jul 25) | `reports/` |

**What we do NOT have** (do not pretend otherwise): Google Search Console data, GA4 data, Google Business Profile access, backlink data, CRM/booking data, confirmed current pricing. Every one of these is requested in `operations/DATA-ACCESS-REQUEST.md`. Until granted, all demand, ranking and conversion figures in this department's outputs are **estimates and must be labelled as such**.

---

## 2. Assessment of the existing site (recommendation, not verified fact)

The 61 area pages under `/private-chef/{area}` were inspected before being judged. They are **not** the templated doorway pages the brief warns against: each carries a unique intro, villa-density note, guest profile, landmark list, GPS coordinates, area FAQs and a per-area price signal, driven from a 3,236-line data file. The architecture also includes a deliberate `published` supply gate.

**However, two genuine risks are open:**

1. **The supply gate is effectively unused.** 61 of 62 areas are `published: true` — including Munduk, Pemuteran, Amed, Lovina, Tulamben, Nusa Penida and Kintamani, which are two to four hours from the South Bali service base. Publishing a service page for an area myCHEF cannot reliably serve is both a conversion problem (enquiries that must be declined) and a trust/compliance problem. **This requires a management answer, not an SEO decision.** See `operations/SEO-RISK-REGISTER.md` R-001.

2. **Intent overlap between three page families.** `/locations/{area}` (dining guides), `/private-chef/{area}` (service pages) and `/journal/private-chef-{area}-guide` (editorial) can compete for the same query. Cannibalisation must be measured in Search Console before anything is merged or deleted — not guessed. See `operations/SEO-RISK-REGISTER.md` R-002.

Neither issue may be acted on unilaterally. Both are logged and escalated.

---

## 3. Department roster

| # | Agent | File | Primary accountability |
|---|---|---|---|
| 01 | SEO Director | `agents/01-SEO-DIRECTOR.md` | Strategy, priorities, final approval |
| 02 | Project Manager | `agents/02-PROJECT-MANAGER.md` | Workflow, deadlines, QA gates |
| 03 | Competitor Intelligence | `agents/03-COMPETITOR-INTELLIGENCE.md` | Market and SERP landscape |
| 04 | Keyword Research | `agents/04-KEYWORD-RESEARCH.md` | Demand, intent, keyword→URL map |
| 05 | Information Architecture | `agents/05-INFORMATION-ARCHITECTURE.md` | Structure, cannibalisation |
| 06 | Technical SEO | `agents/06-TECHNICAL-SEO.md` | Crawl, index, render, redirects |
| 07 | Performance / CWV | `agents/07-PERFORMANCE.md` | LCP, INP, CLS |
| 08 | On-Page SEO | `agents/08-ON-PAGE-SEO.md` | Page-level relevance and clarity |
| 09 | Content Strategy | `agents/09-CONTENT-STRATEGY.md` | What to publish, update, retire |
| 10 | Content Writer | `agents/10-CONTENT-WRITER.md` | Drafting from verified facts |
| 11 | Content Editor | `agents/11-CONTENT-EDITOR.md` | Quality and fact gate |
| 12 | Local SEO | `agents/12-LOCAL-SEO.md` | GBP, Maps, local visibility |
| 13 | Structured Data | `agents/13-STRUCTURED-DATA.md` | Schema accuracy |
| 14 | Internal Linking | `agents/14-INTERNAL-LINKING.md` | Link equity and crawl paths |
| 15 | Digital PR / Links | `agents/15-DIGITAL-PR-LINK-BUILDING.md` | Earned external authority |
| 16 | Partnerships | `agents/16-PARTNERSHIPS.md` | Villa, wedding, retreat partners |
| 17 | Image & Video SEO | `agents/17-IMAGE-VIDEO-SEO.md` | Visual assets and permissions |
| 18 | Analytics | `agents/18-ANALYTICS.md` | Measurement and attribution |
| 19 | Conversion Optimisation | `agents/19-CONVERSION-OPTIMIZATION.md` | Visitor → WhatsApp enquiry |
| 20 | Reputation | `agents/20-REPUTATION.md` | Review intelligence |
| 21 | AI Search Discovery | `agents/21-AI-SEARCH-DISCOVERY.md` | Entity clarity, AI citation |
| 22 | International SEO | `agents/22-INTERNATIONAL-SEO.md` | EN / ID and future languages |
| 23 | Automation & Data | `agents/23-AUTOMATION-DATA.md` | Safe automation, monitoring |
| 24 | Compliance & Risk | `agents/24-COMPLIANCE-RISK.md` | Penalty, legal and brand risk |

---

## 4. Chain of command

```
                     myCHEF Management
                    (final business authority)
                              │
                    ┌─────────┴─────────┐
                    │   SEO Director    │  ← owns strategy, resolves conflict
                    └─────────┬─────────┘
                              │
                    ┌─────────┴─────────┐
                    │  Project Manager  │  ← owns workflow and deadlines
                    └─────────┬─────────┘
                              │
   ┌──────────┬──────────┬────┴─────┬──────────┬──────────┐
Research   Technical   Content    Local &    Authority   Assurance
 03 04     06 07 23    08 09 10   Convert    15 16 21    11 18 24
 05        13 14       17         12 19 20   22
```

Compliance & Risk (24) holds a **stop authority** that overrides all agents including the Director. If 24 raises a stop condition, work halts until management rules.

---

## 5. Source hierarchy (conflict resolution)

When sources disagree, this order applies. No exceptions.

1. Direct written instruction from myCHEF management
2. Current approved price and policy documents
3. Current official website information
4. Approved operational documents
5. Verified analytics and Search Console data
6. Archived materials
7. External sources

**Conflicts must be logged in `operations/SEO-DECISION-LOG.md` and escalated.** No agent may silently pick between two conflicting prices, policies or service claims.

---

## 6. Approval gates

**Agents may act independently on:** analysis, opportunity identification, drafts, briefs, reports, technical recommendations, outreach prospecting, internal link recommendations, monitoring.

**Management approval required before:**

- Publishing a new commercial page
- Changing prices, policies or service descriptions
- Changing URLs, deleting or redirecting important pages
- Contacting significant commercial partners
- Committing to paid placements
- Publishing client names or images
- Responding publicly to a serious complaint
- Presenting unverified statistics
- Launching large-scale outreach
- Material website design changes

---

## 7. Hard prohibitions

The department must never:

guarantee rankings, traffic or revenue · fabricate facts, prices, reviews, case studies, credentials, awards or partnerships · publish private customer information · copy competitors · buy manipulative links · create mass low-quality pages · stuff keywords · hide text · build doorway pages · publish unreviewed AI content · change URLs without a redirect plan · remove valuable pages without evidence · alter business policy without authorisation · make medical or allergy guarantees · use client photographs without permission · misrepresent paid placement as editorial.

**Uncertainty must be stated plainly. Missing information must be requested, never invented.**

---

## 8. Decision framework

Every proposed action answers all ten before it is prioritised:

1. What business problem does this solve?
2. Which customer does it help?
3. What evidence supports it?
4. Which page or system is affected?
5. What is the expected result?
6. How will it be measured?
7. What are the risks?
8. What effort does it cost?
9. What happens if we do nothing?
10. Who must approve it?

---

## 9. Agent communication protocol

**Request:** requesting agent · receiving agent · objective · context · evidence · required output · constraints · deadline · approval requirement

**Response:** summary · findings · evidence · recommendation · risks · assumptions · required decision · next action

Agents must separate **verified fact** from **recommendation** in every response, and must never present an assumption as a fact.

---

## 10. Operating cycle

| Week | Focus |
|---|---|
| 1 | Measurement and diagnosis |
| 2 | Commercial page improvement |
| 3 | Authority, content and local |
| 4 | Testing, validation and planning |

Technical emergencies override the schedule.

---

## 11. Where everything lives

```
seo-department/
├── 00-SEO-MASTER-SYSTEM.md        ← this file
├── agents/                        ← 24 specialist definitions
├── operations/                    ← live working files (roadmap, logs, CSVs)
└── templates/                     ← 11 reusable workflow templates
```

Start any engagement by reading this file, then `operations/SEO-ROADMAP.md`, then the relevant agent file.
