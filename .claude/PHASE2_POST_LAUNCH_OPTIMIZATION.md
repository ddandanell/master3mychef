# Phase 2: Post-Launch Optimization & Analysis
**Start Date:** 2026-05-23  
**Status:** Planning (Week 1 monitoring concludes 2026-05-22)  
**Focus:** Traffic validation, ranking analysis, performance optimization

---

## Week 2: Organic Traffic Baseline Comparison (May 23-29)

### Day 8 (Monday, May 23) — GA4 Analysis
**Objective:** Establish organic traffic baseline post-migration
- [ ] Open GA4 → **Acquisition** → **Organic Search**
- [ ] Set date range: Last 7 days
- [ ] Document key metrics:
  - Total organic sessions
  - Organic users
  - Traffic by landing page
  - Top performing pages
- [ ] Compare to pre-migration baseline (if available)
- [ ] Screenshot: Organic Search report + top 10 landing pages table

**Success Criteria:**
- Organic traffic within ±10% of pre-migration baseline
- New pages (fine-dining, events, catering) receiving traffic

---

### Day 10 (Wednesday, May 25) — GSC Performance Report
**Objective:** Identify ranking performance & click patterns
- [ ] GSC → **Performance** (set date range: last 7 days)
- [ ] Sort by **Clicks** (descending)
- [ ] Document:
  - Top queries driving clicks
  - Which pages are ranking for each query
  - Average position of ranking pages
  - CTR by page type
- [ ] Red flags to monitor:
  - Sudden click drops from pre-migration queries
  - Old URLs still appearing in search results
  - CTR below 2% (title/description issues)

**Success Criteria:**
- ✅ No old URLs in top search results
- ✅ CTR > 2% for branded queries
- ✅ New pages receiving impressions in GSC

---

## Week 3: Ranking Drop Analysis (May 30 - June 5)

### Day 15 (Monday, May 30) — Identify Dropped Pages
**Objective:** Find pages with significant ranking drops
- [ ] GSC → **Performance** → filter for queries with >10 position drop
- [ ] Document affected pages:
  - Current position vs. pre-migration position
  - Query keyword
  - Search intent (informational/transactional/navigational)
  - Current title/description quality

**Optimization Priority:**
```
Priority 1 (fix immediately):
- Dropped >20 positions
- High commercial intent
- Currently page 2+ (position 21+)

Priority 2 (optimize soon):
- Dropped 10-20 positions
- Medium intent
- Pages 2-3 (positions 11-30)

Priority 3 (monitor):
- Dropped <10 positions
- Low traffic
- Informational intent
```

---

### Day 17 (Wednesday, June 1) — Core Web Vitals Check
**Objective:** Verify performance hasn't regressed
- [ ] PageSpeed Insights → https://mychef.id/
- [ ] Check Core Web Vitals:
  - Largest Contentful Paint (LCP): Target <2.5s
  - Interaction to Next Paint (INP): Target <200ms
  - Cumulative Layout Shift (CLS): Target <0.1
- [ ] If any metric poor:
  - Check Lighthouse recommendations
  - Optimize images (if LCP issue)
  - Reduce JavaScript (if INP issue)
  - Fix dynamic content (if CLS issue)

---

## Week 4: Content Gap & Ranking Opportunity Analysis (June 6-12)

### Day 22 (Monday, June 9) — Discover Query Opportunities
**Objective:** Find new keywords we can rank for
- [ ] GSC → **Performance** → filter for "Discover" traffic
- [ ] Sort by **Impressions** (descending)
- [ ] For top 10 opportunities:
  - Note the keyword
  - Check current position (usually >page 10)
  - Identify which page is ranking
  - Analyze if page content matches query intent

**What "Discover" means:**
- Google is showing your pages for new queries
- You're getting impressions but low/no clicks yet
- Opportunity to optimize for these keywords

---

### Day 24 (Wednesday, June 11) — Build Optimization Roadmap
**Objective:** Prioritize which pages to optimize next
- [ ] Create prioritized optimization list:

| Page | Keyword | Current Position | Target | Action |
|------|---------|-----------------|--------|--------|
| /fine-dining | fine dining bali | 8 | 3 | Improve meta tags |
| /catering | bali event catering | 15 | 5 | Add FAQ schema |
| /events | wedding catering bali | 12 | 5 | Expand content |
| / | private chef bali | 3 | 1 | Monitor (good position) |

---

## Daily Monitoring (Weeks 2-4)

### Daily (5 minutes)
```bash
# Check site availability
curl -sI https://mychef.id/ | grep HTTP

# Monitor error logs
# Check Vercel deployment status
```

### Weekly (Mondays)
- [ ] Review GSC Performance report
- [ ] Check GA4 organic traffic
- [ ] Screenshot key metrics
- [ ] Note any anomalies

### Bi-weekly (Mid-week)
- [ ] Check Core Web Vitals
- [ ] Verify redirects still working
- [ ] Spot-check 5 old URLs

---

## Success Metrics for Weeks 2-4

✅ Organic traffic within ±10% of baseline  
✅ No pages dropped >10 positions permanently  
✅ New pages showing in search results  
✅ Core Web Vitals: All green (or yellow acceptable)  
✅ Click-through rate: >2% for branded queries  
✅ Indexation: 90%+ of canonical pages indexed  

---

## Common Issues & Solutions

### Issue: Traffic dropped >15%
**Likely causes:**
- Redirects broken (test: `curl -L https://mychef.id/old-url`)
- Robots.txt blocking (check: https://mychef.id/robots.txt)
- Duplicate content penalties (check canonical tags)

**Fix timeline:** 24-48 hours for impact

---

### Issue: Pages not indexed despite submission
**Likely causes:**
- Page has no backlinks yet
- New page isn't linked from other pages
- Page removed from sitemap
- Robots.txt blocking

**Fix:**
1. Link new pages from homepage/nav
2. Request indexing again in GSC
3. Verify page content is unique

---

### Issue: CTR dropped for branded queries
**Likely causes:**
- Title/description less compelling than before
- Search result preview truncated
- Competitor snippet ranking instead

**Fix:**
1. A/B test new titles/descriptions
2. Add FAQ schema for featured snippet
3. Monitor for competitor changes

---

## Documentation to Keep

Save these for post-launch reference:
- [ ] Pre-migration GA4 baseline (screenshot)
- [ ] Pre-migration GSC Performance (screenshot)
- [ ] Week 1 Coverage report baseline
- [ ] Week 2-4 monitoring snapshots
- [ ] Any optimization changes made

This becomes your "before & after" evidence for the migration's success.

---

## Status Tracking

| Milestone | Target Date | Status | Notes |
|-----------|------------|--------|-------|
| Week 1 monitoring complete | 2026-05-22 | IN PROGRESS | Daily checks running |
| Week 2 GA4 baseline | 2026-05-23 | Pending | Starts next phase |
| Week 2 GSC analysis | 2026-05-25 | Pending | Traffic validation |
| Week 3 ranking analysis | 2026-05-30 | Pending | Drop identification |
| Week 3 Core Web Vitals | 2026-06-01 | Pending | Performance check |
| Week 4 content gaps | 2026-06-09 | Pending | Opportunity analysis |
| Week 4 optimization roadmap | 2026-06-11 | Pending | Build priority list |
| Phase 2 complete | 2026-06-12 | Pending | Ready for Phase 3 |
