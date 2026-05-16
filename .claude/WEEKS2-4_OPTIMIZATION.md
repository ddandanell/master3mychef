# Weeks 2-4: Post-Launch Optimization & Analysis

**Timeline:** 2026-05-23 onwards  
**Focus:** Traffic validation, performance monitoring, ranking optimization  

---

## Week 2: Organic Traffic Baseline Comparison

### Monday (Day 8)
**GA4 Analysis:**
1. Open GA4 → **Acquisition** → **Organic Search**
2. Set date range: Last 7 days
3. Compare to same date range pre-migration (if available)

**Key metrics to capture:**
- Total organic sessions
- Organic users
- Traffic by landing page
- Top performing pages

**Screenshot baseline:**
- [ ] Save screenshot of Organic Search report
- [ ] Save top 10 landing pages table

### Questions to answer:
- Is organic traffic within ±10% of pre-migration baseline?
- Which pages are getting traffic?
- Are new pages (fine-dining, events, etc.) getting impressions?

---

### Wednesday (Day 10)
**GSC Performance Report:**
1. GSC → **Performance** (left sidebar)
2. Set date range: Last 7 days
3. Sort by **Clicks** (descending)

**Analyze top performers:**
- [ ] Which queries are driving clicks?
- [ ] Which pages are ranking?
- [ ] Average position of ranking pages?
- [ ] CTR by page type?

**Red flags to watch for:**
- ⚠️ Sudden drop in clicks from pre-migration queries
- ⚠️ Old URLs still appearing in search results (shouldn't happen)
- ⚠️ CTR below 2% (may indicate poor title/description)

---

## Week 3: Ranking Drop Analysis

### Monday (Day 15)
**Identify pages with significant drops:**
1. GSC → **Performance**
2. Filter for queries with **>10 position drop** from pre-migration
3. Document affected pages

**For each dropped page:**
- Current position vs. pre-migration
- Query keyword
- Search intent (informational/transactional/navigational)
- Current title/description quality

### Optimization priority:
```
Priority 1 (fix immediately):
- Dropped >20 positions
- High commercial intent
- Currently <page 2 (position 21+)

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

### Wednesday (Day 17)
**Core Web Vitals Check:**
1. PageSpeed Insights → https://mychef.id/
2. Check **Core Web Vitals** section

**Key metrics:**
- Largest Contentful Paint (LCP): Target <2.5s
- Interaction to Next Paint (INP): Target <200ms
- Cumulative Layout Shift (CLS): Target <0.1

**If any metric is poor:**
- Check Lighthouse recommendations
- Optimize images (if LCP issue)
- Reduce JavaScript (if INP issue)
- Fix dynamic content (if CLS issue)

---

## Week 4: Content Gap & Ranking Opportunity Analysis

### Monday (Day 22)
**Analyze "Discover" queries:**
1. GSC → **Performance**
2. Filter for **"Discover" traffic** (queries you weren't ranking for)
3. Sort by **Impressions** (descending)

**What this means:**
- Google is showing your pages for new queries
- You're getting impressions but low CTR (no clicks yet)
- Opportunity to optimize for these keywords

**For top 10 "Discover" opportunities:**
- [ ] Note the keyword
- [ ] Check current position (usually >page 10)
- [ ] Identify which page is ranking
- [ ] Analyze if page content matches query intent

---

### Wednesday (Day 24)
**Optimization Roadmap:**

Create a prioritized list of pages to optimize:

| Page | Keyword | Current Position | Target | Action |
|------|---------|-----------------|--------|--------|
| /fine-dining | fine dining bali | 8 | 3 | Improve meta tags |
| /catering | bali event catering | 15 | 5 | Add FAQ schema |
| /events | wedding catering bali | 12 | 5 | Expand content |
| / | private chef bali | 3 | 1 | Monitor (good position) |

---

## Ongoing Monitoring (Weeks 2-4)

### Daily (5 minutes)
```bash
# Check site availability
curl -sI https://mychef.id/ | grep HTTP

# Monitor error logs (if available)
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
