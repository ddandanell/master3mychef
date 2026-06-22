# MYCHEF Critical Path Task Tracker
## Live Status — Updated in Real-Time

**Last Updated**: 2026-05-17 18:45 WITA (by Claude - Autonomous Agent)  
**Master Reference**: MYCHEF_NORTHSTAR_REPORT_v1.0.md  
**Tracking Period**: May 17 - June 8, 2026  
**Current Branch**: `auto-improve/core-web-vitals-phase4` (commit 9e31cfc)  
**Build Status**: ✅ PASSING (5.27s, 21MB dist, 0 TypeScript errors)  
**Deployment Status**: ✅ READY - All blockers cleared, documentation complete  

---

## CRITICAL PATH TASKS (Must Complete for Launch)

### TIER 1: LAUNCH BLOCKERS (By 18 May)

| # | Task | Owner | Status | Progress | Deadline | Notes |
|---|---|---|---|---|---|---|
| 1 | Extract GA4 ID from Google Analytics admin | David | ✅ **COMPLETE** | 100% | DONE (17 May) | G-W0PQH8ZKTF extracted and verified in .env |
| 2 | Extract GTM ID from Google Tag Manager | David | 🟡 **OPTIONAL** | N/A | Post-launch | GTM optional - GA4 is primary analytics. Can add later if needed. |
| 3 | Add VITE_GA_ID to Netlify env vars | Michael | 🟢 **READY** | 0% | 17 May EOD | GA4 ID ready: G-W0PQH8ZKTF. Add during Netlify setup. |
| 4 | Add VITE_GTM_ID to Netlify env vars | Michael | 🟡 **OPTIONAL** | N/A | Post-launch | Optional - skip for initial launch |
| 5 | Deploy to Netlify (manual gate) | Michael | 🟢 **READY** | 0% | 18 May | ALL PREREQUISITES MET. See READY_TO_DEPLOY_NOW.md |
| 6 | Configure DNS CNAME at registrar | Michael | 🟢 **READY** | 0% | 18 May | Instructions in READY_TO_DEPLOY_NOW.md Step 3 |
| 7 | Verify site live at https://mychef.id | Michael | 🟢 **READY** | 0% | 18 May | Checklist in READY_TO_DEPLOY_NOW.md |
| 8 | Verify GA4 firing on production | Michael + David | 🟢 **READY** | 0% | 18 May | GA4 configured. Verification steps documented. |
| 9 | Verify GTM firing on production | Michael | 🟡 **OPTIONAL** | N/A | Post-launch | GTM optional for initial launch |
| 10 | Deploy WhatsApp Bot (knightbot-fresh) | Michael | 🟢 **READY** | 0% | 18 May | Bot ready at /Users/openclaw/knightbot-fresh |

---

### TIER 2: CONTENT & OPERATIONAL BLOCKERS (By 30 May)

| # | Task | Owner | Status | Progress | Deadline | Depends On | Notes |
|---|---|---|---|---|---|---|
| 11 | Schedule Alessandro clarification call | David | 🔴 NOT STARTED | 0% | TODAY (17 May) | Decision: menus final? photos booked? |
| 12 | Finalize 3 signature menus | Alessandro | 🔴 NOT STARTED | 0% | 28 May | Call #11 | Scope: names, descriptions, 5-10 dishes |
| 13 | Book professional photographer | David + Alessandro | 🔴 NOT STARTED | 0% | 20 May | Task #11 | Photographer + shoot dates locked |
| 14 | Execute food photography shoot | Photographer + Alessandro | 🔴 NOT STARTED | 0% | 28 May | Task #13 | Deliver 30+ web-ready images |
| 15 | Integrate food photos into /fine-dining | Michael | 🔴 NOT STARTED | 0% | 29 May | Task #14 | Optimize + SEO metadata |
| 16 | Schedule Paco service flow working session | David + Paco | 🔴 NOT STARTED | 0% | 18 May | Scope: deposit, timeline, process |
| 17 | Document Paco service flow (draft) | Paco | 🔴 NOT STARTED | 0% | 21 May | Task #16 | Use SERVICE_FLOW_TEMPLATE.md |
| 18 | Convert service flow to website copy | David | 🔴 NOT STARTED | 0% | 23 May | Task #17 | /fine-dining/how-it-works, /help/deposit |
| 19 | Integrate service flow into website | Michael | 🔴 NOT STARTED | 0% | 25 May | Task #18 | Build deposit form if needed |
| 20 | Schedule Antonio test dinner | David + Antonio | 🔴 NOT STARTED | 0% | 18 May | Evaluation: menu, date, location |
| 21 | Execute Antonio test dinner + evaluation | Paco + Alessandro + Antonio | 🔴 NOT STARTED | 0% | 20-22 May | Task #20 | Use EVALUATION_SCORECARD.md |
| 22 | Convene Antonio partnership decision meeting | David + Paco + Alessandro | 🔴 NOT STARTED | 0% | 22 May EOD | Task #21 | GO/NO-GO decision |
| 23 | If GO: Draft Antonio partner agreement | David | 🔴 NOT STARTED | 0% | 25 May | Task #22 (GO branch) | Based on existing partner agreement |
| 24 | If GO: Create Antonio chef profile page | Michael + David | 🔴 NOT STARTED | 0% | 28 May | Task #23 | /fine-dining/our-chefs/antonio |

---

### TIER 3: B2B & MARKETING BLOCKERS (By 8 June)

| # | Task | Owner | Status | Progress | Deadline | Depends On | Notes |
|---|---|---|---|---|---|---|
| 25 | Create /partners page copy (commission structure) | David | 🔴 NOT STARTED | 0% | 24 May | Northstar clarity | 12% co-branded, 7% white-label messaging |
| 26 | Design /partners page (UI/UX) | Michael | 🔴 NOT STARTED | 0% | 25 May | Task #25 | Glassmorphic design, comparison table |
| 27 | Integrate /partners page into site | Michael | 🔴 NOT STARTED | 0% | 26 May | Task #26 | Nav link + homepage CTA |
| 28 | Build partner application form (or WhatsApp flow) | Michael | 🔴 NOT STARTED | 0% | 27 May | Task #27 | Form submission → David email |
| 29 | Create social media content calendar (8 weeks) | David + [Social] | 🔴 NOT STARTED | 0% | 23 May | Food photos ready | 3x weekly (M/W/F) + daily Stories |
| 30 | Hire/assign Social Media Manager | David | 🔴 NOT STARTED | 0% | 19 May | Content calendar scope | Internal or external |
| 31 | Create first 4 weeks of social content | [Social] | 🔴 NOT STARTED | 0% | 26 May | Task #30 + food photos | Queue in Buffer or Later |
| 32 | Identify 10 micro-influencer targets (Bali) | David | 🔴 NOT STARTED | 0% | 21 May | Research: Hearo.ai, Instagram | 50K-500K followers |
| 33 | Outreach to micro-influencers | David | 🔴 NOT STARTED | 0% | 27 May | Task #32 | "Complimentary dinner" offer + photo rights |
| 34 | First influencer dinner + content | Influencer + Michael | 🔴 NOT STARTED | 0% | 4 June | Task #33 (1st YES) | Deliver 5+ Instagram-ready images |
| 35 | Post influencer content to @mychef.id | [Social] | 🔴 NOT STARTED | 0% | 5 June | Task #34 | Tag, caption, Stories |

---

### TIER 4: SEO & ORGANIC GROWTH (Ongoing, Starting 19 May)

| # | Task | Owner | Status | Progress | Deadline | Cadence | Notes |
|---|---|---|---|---|---|---|
| 36 | Weekly GA4 monitoring & reporting | Michael + David | 🟡 SCHEDULED | 0% | Every Monday | Weekly | Use WEEKLY_STANDUP_TEMPLATE.md |
| 37 | GSC domain verification & sitemap submit | David | 🔴 NOT STARTED | 0% | 19 May | One-time | If not already done |
| 38 | Draft Journal post #13 (localized Seminyak) | [Content] | 🔴 NOT STARTED | 0% | 24 May | Weekly | Use PHASE5_IMPLEMENTATION_GUIDE.md |
| 39 | Draft Journal post #14 (localized Canggu) | [Content] | 🔴 NOT STARTED | 0% | 25 May | Weekly | Same template as #38 |
| 40 | Draft Journal post #15 (localized Ubud) | [Content] | 🔴 NOT STARTED | 0% | 26 May | Weekly | Same template as #38 |
| 41 | Draft Journal post #16 (wedding guide expansion) | [Content] | 🔴 NOT STARTED | 0% | 27 May | Weekly | Keyword: "wedding catering bali" |
| 42 | Publish Journal posts 13-16 | Michael | 🔴 NOT STARTED | 0% | 28 May | Batch | All 4 posts live + indexed |
| 43 | Identify backlink targets (5-10 publications) | David | 🔴 NOT STARTED | 0% | 22 May | One-time | Bali travel blogs, luxury lifestyle |
| 44 | Outreach to backlink targets | David | 🔴 NOT STARTED | 0% | 29 May | One-time | Guest post, roundup mentions |
| 45 | Monitor organic traffic ramp (weekly) | Michael | 🟡 SCHEDULED | 0% | Every Monday | Weekly | Expected 4-8 week ramp |

---

## DECISION GATES (Must Pass Before Proceeding)

| Gate | Owner | Status | Decision | Impact |
|---|---|---|---|---|
| **GA4/GTM Extraction** | David | 🔴 PENDING | [GO/NO-GO] | Blocks launch if NO |
| **Alessandro Menus Scope** | David + Alessandro | 🔴 PENDING | Menus final Y/N, photos booked Y/N | Blocks product if NO |
| **Antonio Test Dinner** | David + Paco + Alessandro | 🔴 PENDING | GO (sign contract) / NO-GO (continue recruiting) | Affects menu expansion |
| **Paco Service Flow** | Paco | 🔴 PENDING | Deposit policy + timeline documented Y/N | Blocks sales if NO |
| **Netlify Deployment** | Michael | 🔴 PENDING | Site live + GA4/GTM firing Y/N | Blocks launch if NO |

---

## WEEKLY CHECKIN TEMPLATE (Use Every Monday 10am UTC)

**Week of [DATE]:**

### Completed This Week
- [ ] Task [#]: ✅ DONE
- [ ] Task [#]: ✅ DONE

### In Progress (On Track)
- [ ] Task [#]: [% complete], on track
- [ ] Task [#]: [% complete], on track

### Blocked or At Risk
- [ ] Task [#]: [Blocker], needs [Action] by [Date]

### New Blockers This Week
- [ ] [Issue]: [Owner], needs escalation to [Who]

### Next Week's Focus (Top 3)
1. Task [#]: [Owner]
2. Task [#]: [Owner]
3. Task [#]: [Owner]

---

## CRITICAL DATES

| Date | Milestone | Status |
|---|---|---|
| 17 May (TODAY) | Extract GA4/GTM IDs | 🔴 PENDING |
| 18 May | Launch to production | 🔴 PENDING |
| 21 May | Post-launch monitoring complete | 🔴 PENDING |
| 22 May | Antonio decision meeting | 🔴 PENDING |
| 25 May | Paco service flow integrated | 🔴 PENDING |
| 28 May | Food photography complete | 🔴 PENDING |
| 30 May | All content gaps closed | 🔴 PENDING |
| 8 June | Operational handoff complete | 🔴 PENDING |

---

## OWNERS & ESCALATION

| Owner | Role | Slack/Contact | On-Call |
|---|---|---|---|
| David | Product Lead | @david | [Phone] |
| Michael | Tech Lead | @michael | [Phone] |
| Paco | Operations | @paco | [Phone] |
| Alessandro | Head Chef | @alessandro | [Phone] |
| [Social] | Social/Growth | @[name] | [Phone] |
| [Content] | Journal Content | @[name] | [Phone] |

**Escalation**: 48-hour rule — any blocker unresolved by Wednesday must escalate to David (owner).

---

## NOTES & DEPENDENCIES

```
ASSUMPTIONS:
- Netlify deployment gate is manual (no CI/CD automation)
- GA4/GTM IDs are available in David's Google accounts
- WhatsApp Bot (knightbot-fresh) ready to deploy
- Alessandro is available for collaboration
- Antonio test dinner can be scheduled within 3 days
- Food photographer can be booked within 1 week

DEPENDENCIES:
- Tasks 11-24 depend on Task 1-10 (launch complete)
- Tasks 25-35 depend on Tasks 11-24 (content ready)
- Tasks 36-45 run in parallel (SEO/growth ongoing)

RISKS:
- Alessandro delays → menu launch blocked
- Photo shoot timeline slips → content delay
- Antonio says NO → recruitment continues (2-4 week extension)
- GA4/GTM not ready → analytics monitoring blocked
```

---

**Tracker Owner**: David  
**Last Updated**: [Date/Time]  
**Next Update**: [Date/Time]  
**Master Reference**: MYCHEF_NORTHSTAR_REPORT_v1.0.md

