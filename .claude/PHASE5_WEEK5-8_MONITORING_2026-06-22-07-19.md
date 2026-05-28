# Phase 5 Weeks 5-8: Monitoring & Early Ranking Tracking
**June 22 - July 19, 2026**

Weekly GSC baseline tracking, GA4 performance monitoring, and early optimization identification.

---

## 📅 Weeks 5-8 Overview

| Week | Dates | Focus | Duration | Deliverable |
|------|-------|-------|----------|-------------|
| **Week 5** | June 22-28 | GSC baseline + GA4 setup verification | 5h | Week 1 baseline metrics, initial traffic trends |
| **Week 6** | June 29-July 5 | First indexation check + traffic tracking | 5h | Indexed pages count, traffic spike analysis |
| **Week 7** | July 6-12 | Ranking shift identification + CWV monitoring | 5h | Keyword position changes, performance metrics |
| **Week 8** | July 13-19 | Trend analysis + secondary optimization planning | 6h | Ranking trends, optimization opportunities identified |

**Total: 21 hours (3-5h/week, self-paced)**

---

## 🎯 Monitoring Goals

By July 19, 2026:

- [ ] **Pages Indexed:** 8+ pages (5 blogs + 3 pillar pages) showing in Google
- [ ] **Organic Traffic:** 50-150 visits/week (steady ramp from near-zero)
- [ ] **Keyword Rankings:** 5-10 keywords in top 100, 2-3 keywords in top 50
- [ ] **Bounce Rate:** <55% (blog engagement acceptable)
- [ ] **Avg Session Duration:** 1.5-3 minutes (content-focused traffic)
- [ ] **CWV Status:** LCP <2.5s, INP <200ms, CLS <0.1 (no regressions)
- [ ] **Early Wins Identified:** 2-4 keywords trending upward for Week 9 focus

---

## 📊 Tracking Framework

### GSC Weekly Snapshot Spreadsheet

**Create file:** `/Users/openclaw/Downloads/MYCHEF . MASTER/app/.claude/GSC_WEEKLY_TRACKING_2026-06-22.xlsx` (or Google Sheet)

Track every Sunday (or same day weekly):

| Week | Date | Keyword | Impressions | Clicks | CTR | Avg Position | Change from Baseline | Notes |
|------|------|---------|-------------|--------|-----|--------------|----------------------|-------|
| 5 | 6/22 | fine dining bali | 12 | 1 | 8.3% | 48 | baseline | Initial indexation |
| 5 | 6/22 | bali villa catering | 8 | 0 | 0% | 45 | baseline | Baseline capture |
| 6 | 6/29 | fine dining bali | 18 | 2 | 11.1% | 46 | -2 | Rising visibility |
| 6 | 6/29 | bali villa catering | 14 | 1 | 7.1% | 42 | -3 | Steady improvement |
| 7 | 7/6 | fine dining bali | 24 | 3 | 12.5% | 44 | -4 | Continued climb |
| 7 | 7/6 | how to hire private chef | 6 | 0 | 0% | 62 | NEW | Blog #1 starting to show |
| 8 | 7/13 | fine dining bali | 32 | 5 | 15.6% | 40 | -8 | Major jump expected |
| 8 | 7/13 | bali villa catering | 28 | 3 | 10.7% | 38 | -7 | Significant progress |

**Key metrics to track:**
- Impressions (visibility)
- Clicks (actual traffic)
- CTR (relevance & rank quality)
- Average Position (ranking level)
- **Change from Baseline** (week-over-week movement)

---

## 📈 GA4 Monitoring Dashboard

### Dashboard 1: Blog Performance Weekly

Check every Monday:

```
Period: Last 7 days (update weekly)
Metrics:
├─ Blog Traffic (users by page)
│  ├─ Blog #1 (How to Hire): __ sessions, __ avg duration, __% bounce
│  ├─ Blog #2 (Cost Breakdown): __ sessions, __ avg duration, __% bounce
│  ├─ Blog #3 (Qualifications): __ sessions, __ avg duration, __% bounce
│  ├─ Blog #4 (Roles): __ sessions, __ avg duration, __% bounce
│  └─ Blog #5 (Villa Services): __ sessions, __ avg duration, __% bounce
├─ Traffic Source Breakdown
│  ├─ Organic search: __% (target: 80%+)
│  ├─ Direct: __% (return visitors)
│  ├─ Referral: __% (other blogs, pillars)
│  └─ Other: __% (campaign, email if any)
└─ Conversion Path
   ├─ Blog view → Booking form click: __% conversion
   ├─ Blog view → Pillar page click: __% click-through
   └─ Time-to-CTA click: __ min avg
```

**Data collection template:**
- Monday: Pull GA4 data for prior week
- Document in spreadsheet: `/Users/openclaw/Downloads/MYCHEF . MASTER/app/.claude/GA4_WEEKLY_BLOG_METRICS_2026.xlsx`
- Compare week-to-week trends

---

### Dashboard 2: Organic Search by Keyword

Check every Tuesday:

```
Period: Last 7 days
Grouped by: Search Query (first-click attribution)

Keyword | Sessions | Avg Duration | Bounce % | Conversions |
---------|----------|--------------|----------|------------|
fine dining bali | __ | __:__ | __% | __ |
bali villa catering | __ | __:__ | __% | __ |
how to hire private chef | __ | __:__ | __% | __ |
private chef cost bali | __ | __:__ | __% | __ |
chef qualifications bali | __ | __:__ | __% | __ |
[long-tail keywords] | __ | __:__ | __% | __ |
```

**Observation:**
- Which keywords drive most traffic?
- Which have best engagement (low bounce)?
- Which convert (booking page visits)?
- Identify rising keywords for Week 9 focus

---

### Dashboard 3: Page Performance

Check every Wednesday:

```
Page | Sessions | Users | Avg Duration | Bounce % | Conversions |
------|----------|-------|--------------|----------|------------|
/blog/how-to-hire-private-chef | __ | __ | __:__ | __% | __ |
/blog/private-chef-cost-breakdown | __ | __ | __:__ | __% | __ |
/blog/chef-qualifications | __ | __ | __:__ | __% | __ |
/fine-dining | __ | __ | __:__ | __% | __ |
/catering | __ | __ | __:__ | __% | __ |
/events | __ | __ | __:__ | __% | __ |
/staffing | __ | __ | __:__ | __% | __ |
```

**Target benchmarks by Week 8:**
- Blog sessions: 30+ per week (accumulated across 5 blogs)
- Avg duration: 2+ minutes (content-focused)
- Bounce rate: <55% (acceptable for blog content)
- Conversions: 1-3 per week from blogs

---

## 🔍 Weekly Checklist (Weeks 5-8)

### Every Sunday — GSC Baseline Check

- [ ] Open Google Search Console
- [ ] Export keyword list (Impressions, Clicks, CTR, Avg Position)
- [ ] Document in weekly tracking spreadsheet
- [ ] Identify top 5 keywords by impressions
- [ ] Note any new keywords entering top 100
- [ ] Mark keywords with position improvements >2

**Time: 30 minutes**

**Expected observations by Week 8:**
- Week 5: ~8-15 keywords visible (baseline + early indexation)
- Week 6: ~12-20 keywords visible (all blogs indexed)
- Week 7: ~18-30 keywords visible (long-tail accumulation)
- Week 8: ~25-40 keywords visible (significant expansion)

---

### Every Monday — GA4 Blog Metrics

- [ ] Open GA4 Dashboard: Blog Performance
- [ ] Record weekly sessions, bounce rate, avg duration for each blog
- [ ] Note which blog drives most traffic
- [ ] Check if engagement (duration/bounce) meets targets
- [ ] Document conversion path insights

**Time: 20 minutes**

**Expected observations by Week 8:**
- Week 5: 10-30 total blog sessions (early organic trickle)
- Week 6: 20-50 total blog sessions (second indexation wave)
- Week 7: 40-100 total blog sessions (accumulation)
- Week 8: 80-200+ total blog sessions (sustained traffic)

---

### Every Tuesday — Organic Keyword Performance

- [ ] Open GA4 Dashboard: Organic Search by Query
- [ ] Record keyword-level metrics (sessions, duration, bounce, conversions)
- [ ] Identify top 3 keywords by traffic
- [ ] Flag any keywords with high engagement (low bounce)
- [ ] Document which keywords convert

**Time: 15 minutes**

**Expected observations by Week 8:**
- Week 5: 1-3 keywords showing traffic (primary keywords only)
- Week 6: 3-8 keywords showing traffic (secondary keywords start)
- Week 7: 8-15 keywords showing traffic (long-tail expansion)
- Week 8: 15-25+ keywords showing traffic (healthy diversity)

---

### Every Wednesday — Page Performance Review

- [ ] Open GA4: All Pages report
- [ ] Filter to /blog/* and service pages
- [ ] Record sessions, duration, bounce rate for top pages
- [ ] Compare blog performance rankings (which blog is strongest?)
- [ ] Identify pillar pages with engagement drops

**Time: 15 minutes**

**Expected observations by Week 8:**
- Blog #1 ("How to Hire") should lead traffic (primary keyword)
- Service pages should see steady referral traffic from blogs
- Bounce rate on blogs should be <55%
- Pillar pages should hold steady (no regressions)

---

### Every Thursday — Core Web Vitals Check

- [ ] Open PageSpeed Insights for each blog
- [ ] Record LCP, INP, CLS (field data if available, lab data otherwise)
- [ ] Check for any regressions since Week 1
- [ ] Note: field data may be sparse early on (need min 28 days minimum data)

**Time: 20 minutes**

**Targets by Week 8:**
- LCP: <2.5s (no change from Week 1)
- INP: <200ms (no change)
- CLS: <0.1 (no change)
- Expected: Stable or improved from Week 1 baseline

---

### Every Friday — Crawl & Indexation Check

- [ ] Open GSC: Coverage tab
- [ ] Verify number of indexed pages
- [ ] Check for any new crawl errors
- [ ] Note: crawl rate, errors, warnings

**Time: 10 minutes**

**Expected progression:**
- Week 5: 8-10 pages indexed (blogs + updated pillars)
- Week 6: 10-12 pages indexed (all blogs indexed)
- Week 7: 12-15 pages indexed (supplementary pages)
- Week 8: 15+ pages indexed (healthy coverage)

---

### Every Saturday — Weekly Summary & Notes

- [ ] Consolidate all metrics from week (GSC, GA4, CWV, indexation)
- [ ] Document in master weekly log: `/Users/openclaw/Downloads/MYCHEF . MASTER/app/.claude/PHASE5_WEEKS5-8_WEEKLY_LOG.md`
- [ ] Identify 1-3 observations or trends
- [ ] Flag any issues for Week 9 secondary optimization
- [ ] Plan any urgent fixes needed

**Time: 30 minutes**

---

## 📋 Weekly Log Template

**File:** `/Users/openclaw/Downloads/MYCHEF . MASTER/app/.claude/PHASE5_WEEKS5-8_WEEKLY_LOG.md`

```markdown
# Week 5: June 22-28

## GSC Snapshot
- Top keyword by impressions: fine dining bali (12 impressions, pos 48)
- Keywords in top 50: 0 (baseline capture, no ranked yet)
- New keywords visible: 8-12
- Position changes: all baseline

## GA4 Summary
- Total blog sessions: 18 (organic: 14, direct: 3, referral: 1)
- Top blog: Blog #1 ("How to Hire") - 8 sessions
- Avg session duration: 1:45
- Bounce rate: 52% (acceptable)
- Conversions: 0 (expected at this stage)

## CWV Status
- LCP: 2.2s ✓
- INP: 150ms ✓
- CLS: 0.08 ✓

## Indexation
- Pages indexed: 10 (5 blogs, 3 pillars, homepage, blog index)
- Crawl errors: 0
- Coverage status: All green

## Observations
1. Early indexation happening as expected
2. Blog #1 driving most traffic (primary keyword focus)
3. Engagement metrics healthy (52% bounce acceptable for blogs)
4. No technical issues detected

## Trend
↗ Early positive indexation, waiting for ranking improvements in Week 6-7

---

# Week 6: June 29-July 5

## GSC Snapshot
- Top keyword: fine dining bali (18 impressions, pos 46, +2 position improvement)
- Keywords in top 50: 1-2 expected
- New keywords visible: 15-20
- Notable: "how to hire private chef" starting to show (Blog #1 ranking)

## GA4 Summary
- Total blog sessions: 45 (organic: 35, direct: 8, referral: 2)
- Top blog: Blog #1 - 25 sessions
- Top keywords: fine dining bali (12 sessions), bali villa catering (8 sessions)
- Avg session duration: 2:15 (improving)
- Bounce rate: 48% (better engagement)
- Conversions: 1 (first booking form interaction)

## CWV Status
- LCP: 2.1s ✓
- INP: 140ms ✓
- CLS: 0.07 ✓

## Indexation
- Pages indexed: 12 (blogs fully indexed)
- Crawl errors: 0
- All blogs now live and crawlable

## Observations
1. Significant jump in traffic week-over-week (18 → 45 sessions = 2.5x growth)
2. Blog #1 establishing dominance for primary keyword
3. Position improvements visible (fine dining: 48 → 46)
4. First conversion signal arriving

## Trend
↗ Ranking momentum building, expect steeper climb in Week 7-8

...continue for Weeks 7-8
```

---

## 🎯 Ranking Improvement Targets — Weeks 5-8

### Tier 1 Keywords (Target: pos 40-55 → 30-40 by Week 8)

| Keyword | Baseline (Week 1) | Week 5 | Week 6 | Week 7 | Week 8 Target |
|---------|-------------------|--------|--------|--------|---------------|
| fine dining bali | 48 | 48 | 46 | 42 | 35 |
| bali villa catering | 45 | 45 | 42 | 38 | 30 |
| wedding catering bali | 52 | 52 | 50 | 45 | 38 |
| private chef hire | 60 | 58 | 55 | 50 | 42 |

**Expected pattern:**
- Week 5: No movement (indexation lag)
- Week 6: 1-3 position movement as blogs rank
- Week 7: 3-8 position movement (pillar + blog authority building)
- Week 8: Cumulative 10-20 position improvement visible

---

### Tier 2 Keywords (Target: pos 55-75 → 40-50 by Week 8)

Expected: 5-8 keywords in this range by Week 8
- "how to hire private chef" (from Blog #1)
- "chef cost breakdown" (from Blog #2)
- "private chef qualifications" (from Blog #3)
- "catering team bali"
- "villa event services bali"
- "private chef vs personal chef"
- "bali catering companies"

---

## ⚠️ Week 5-8 Troubleshooting

### Issue: No Ranking Movement by Week 6

**Symptom:** GSC shows same positions as Week 1 baseline by June 29

**Diagnosis:**
1. Check pages indexed? (should see all 5 blogs indexed by Week 6)
2. Check internal linking complete? (should have 140+ links added)
3. Check schema valid? (run Google Rich Results Test)
4. Check page speed? (LCP <2.5s required)

**Response:**
- If pages not indexed: resubmit to GSC, check crawl errors
- If links not complete: verify all internal linking added in Weeks 2-4
- If schema invalid: fix markup via Google Rich Results Test feedback
- If speed slow: compress images, optimize fonts (see contingency guide)

---

### Issue: Bounce Rate >60% on Blogs

**Symptom:** GA4 shows blog bounce rate higher than 60%

**Diagnosis:**
1. Check avg session duration (<1 min = content quality issue)
2. Check page load speed (LCP >2.5s = too slow)
3. Check CTA visible above fold?

**Response:**
- If duration <1 min: content may be thin or unclear, expand sections
- If LCP >2.5s: optimize images/fonts per contingency guide
- If CTA missing: add "Get Your Quote" button mid-page and end-of-page

---

### Issue: Traffic Plateau (Stays <50 sessions/week)

**Symptom:** GA4 shows traffic stuck at 10-20 sessions/week by Week 7

**Diagnosis:**
1. Check how many keywords ranking (should be 10+ by Week 7)
2. Check GSC CTR (should be 5-15% for ranking keywords)
3. Check blog search intent match

**Response:**
- If <10 keywords ranking: blogs may not be indexed yet, check GSC coverage
- If CTR <5%: title/description may be weak, update meta tags
- If intent mismatch: content doesn't match search intent, expand scope or rewrite

---

## 📊 End-of-Week 8 Measurement

### By July 19, 2026 — Expected Metrics

**Ranking Performance:**
- [ ] Tier 1 keywords: 10-20 position improvement (target: 35-40)
- [ ] Tier 2 keywords: 5-15 position improvement (target: 40-50)
- [ ] Keywords in top 50: 5-10 keywords
- [ ] Keywords in top 100: 20-30 keywords

**Traffic Performance:**
- [ ] Weekly organic visits: 80-200+ (from near-zero)
- [ ] Monthly projected: 320-800+ organic visits (extrapolated)
- [ ] Blog traffic share: 60%+ of total organic
- [ ] Pillar page share: 30-40% of organic

**Engagement Metrics:**
- [ ] Avg session duration: 1.5-3 minutes
- [ ] Bounce rate: <55% (blogs), <60% (pillars)
- [ ] Pages per session: 1.2-1.8 (internal linking working)
- [ ] CTA conversion: 2-5% from blogs

**Technical Health:**
- [ ] Core Web Vitals: No regressions from Week 1
- [ ] Crawl errors: 0
- [ ] Pages indexed: 8+ (at minimum: 5 blogs + 3 pillars)
- [ ] Indexation coverage: >90% of published pages

---

## 🎯 Week 9 Planning (Weeks 5-8 Prep)

By end of Week 8, identify:

1. **High-Potential Keywords** (2-3 keywords trending upward)
   - Which keywords have 8-15 impressions but low CTR?
   - These need secondary optimization: title/description refresh, content expansion

2. **Underperforming Blogs** (if any)
   - Which blog has lowest engagement?
   - Plan content expansion or deep editing for Week 9

3. **Quick Wins** (keywords at pos 30-40)
   - Which keywords are close to top 20?
   - Minimal effort needed to break into top 20 (internal link boost, title refresh)

4. **Content Gaps** (keywords with 0 impressions but search volume)
   - Any keywords with 100+ monthly search volume but no mychef.id presence?
   - Plan new blog or pillar expansion for Week 10

---

**Status:** Week 5-8 monitoring framework ready  
**Timeline:** June 22 - July 19, 2026 (4 weeks, 21 hours)  
**Handoff:** July 20 (Week 9: Secondary Optimization Phase begins)
