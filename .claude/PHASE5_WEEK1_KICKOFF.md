# Phase 5 Week 1-2: Content Gap Analysis Kickoff
**Date:** May 17, 2026  
**Phase Start:** May 25, 2026  
**Owner:** SEO Lead + Content Lead

---

## Overview

Week 1-2 focuses on identifying 20-30 keyword ranking opportunities in the 40-70 position range (quick wins) that can be moved to 20-30 with targeted optimization.

**Success Metric:** Complete competitor analysis + ranked opportunity list by May 31

---

## Task 1: Baseline Keyword Tracking Setup

**Owner:** SEO Lead  
**Timeline:** May 25-26 (Day 1-2)  
**Tools:** Google Search Console + local spreadsheet

### Step 1a: Capture GSC Performance Data

1. Go to: https://search.google.com/search-console/performance?resource_id=sc-domain%3Amychef.id
2. Set date range: **May 1-24, 2026** (establishment baseline)
3. Export data for these columns:
   - **Query** (keyword)
   - **Impressions** (how often your pages appear in search results)
   - **Avg Position** (average ranking position)
   - **CTR** (percentage of impressions that get clicks)
   - **Clicks** (actual clicks from search)

### Step 1b: Create Baseline Spreadsheet

**File:** `PHASE5_KEYWORD_BASELINE_2026-05-17.csv`

| Keyword | Page | Impressions | Avg Position | CTR | Clicks | Category |
|---------|------|-------------|--------------|-----|--------|----------|
| fine dining bali | /fine-dining | [from GSC] | [from GSC] | [from GSC] | [from GSC] | Pillar |
| private chef bali | / | [from GSC] | [from GSC] | [from GSC] | [from GSC] | Brand |
| villa catering bali | /catering | [from GSC] | [from GSC] | [from GSC] | [from GSC] | Pillar |

**Filter Logic:**
- Include keywords with **≥5 impressions** (proven demand)
- Sort by **Avg Position descending** (easiest wins first)
- Target range: **30-100 position** (achievable improvements)

---

## Task 2: Competitor Content Analysis

**Owner:** SEO Lead  
**Timeline:** May 27-28 (Day 3-4)  
**Tools:** Browser + local spreadsheet

### Step 2a: Identify Top 3 Competitors

For each pillar page, find competitors ranking #1-5:

**For `/fine-dining`:**
1. Search: "fine dining bali" in Google
2. Identify top 3 ranking sites (likely hospitality/chef services)
3. Document domain + page URL

**For `/catering`:**
1. Search: "bali villa catering" in Google
2. Find top 3 ranking pages

**For `/events`:**
1. Search: "wedding catering bali" in Google
2. Find top 3 competing event pages

### Step 2b: Competitor Content Audit

**File:** `PHASE5_COMPETITOR_AUDIT_2026-05-28.csv`

For each competitor page, analyze:

| Aspect | Competitor A | Competitor B | myCHEF Current | Gap/Opportunity |
|--------|--------------|--------------|---|---|
| Content Length (words) | [measure] | [measure] | [measure] | +400-800 words? |
| H1 + H2 Count | [count] | [count] | [count] | +2-3 subheadings? |
| Internal Links | [count] | [count] | [count] | +3-5 links? |
| Images | [count] | [count] | [count] | +2-4 images? |
| Schema Markup | [list types] | [list types] | [list types] | Missing FAQPage? |
| Meta Description | [copy] | [copy] | [copy] | Over 155 chars? |
| Update Frequency | [estimate] | [estimate] | [estimate] | Stale content? |

### Step 2c: Data Capture Method

For each competitor page:
1. **Content Length:** Select all text (Cmd+A), paste to word counter
2. **Headers:** Browser DevTools → Search for `<h1>`, `<h2>`, `<h3>`
3. **Internal Links:** Inspect page HTML for `<a>` tags to same domain
4. **Images:** Right-click → Open image in new tab, check dimensions
5. **Schema:** Page source (Cmd+U) search for `schema.org` or `json-ld`
6. **Meta:** Browser DevTools → Inspect `<meta name="description">`

---

## Task 3: Gap Identification & Ranking

**Owner:** SEO Lead  
**Timeline:** May 29-31 (Day 5-7)  
**Deliverable:** Ranked opportunity list (20-30 items)

### Priority Tiers

**TIER 1: Quick Wins (Target: 8-10 opportunities)**
- Current position: **40-55**
- Competitor gap: **<500 words or <3 H2s**
- Estimated effort: **4-6 hours per page**
- Impact: **Move to position 20-30 in 2-4 weeks**

Example:
```
Keyword: "bali private chef hire"
Current Position: 48
Target Position: 15
Gap: +800 words, +2 H2s, +3 internal links, add FAQPage schema
Effort: 5 hours
```

**TIER 2: Medium Priority (Target: 8-12 opportunities)**
- Current position: **55-75**
- Competitor gap: **500-1200 words**
- Estimated effort: **6-10 hours per page**
- Impact: **Move to position 25-35 in 4-8 weeks**

**TIER 3: Long-term (Target: 4-8 opportunities)**
- Current position: **75+**
- Competitor gap: **>1200 words + major restructuring**
- Estimated effort: **10+ hours per page**
- Impact: **Slow organic growth, monitor for market shifts**

### Final Deliverable: PHASE5_OPPORTUNITIES_RANKED.md

```markdown
# Phase 5 Ranked Opportunities (May 31, 2026)

## TIER 1 — Quick Wins (Week 2-3)

### 1. "fine dining experience bali" (Position 52 → Target 20)
- Current page: /fine-dining
- Competitor leader: [domain] (Position 2, 2,400 words)
- Gap: +600 words, +2 H2s (Dining Philosophy, Wine Pairing), add FAQPage schema
- Effort: 5 hours
- Expected timeline: 2-3 weeks post-publish

### 2. "private chef menu planning" (Position 48 → Target 15)
- Current page: /fine-dining
- Competitor leader: [domain] (Position 1, 1,800 words)
- Gap: +500 words, +1 H2 (Sample Menus), +4 internal links
- Effort: 4 hours
- Expected timeline: 1-2 weeks post-publish

... [continue for 8-10 quick wins]

## TIER 2 — Medium Priority (Week 4-6)

### 11. "bali event catering pricing" (Position 63 → Target 30)
[same format]

... [continue for 8-12 medium items]

## TIER 3 — Long-term Tracking (Month 2-3)

### 23. "bali corporate retreat chef" (Position 88 → Target 50)
[same format]

---

## Summary
- **Total opportunities identified:** 28
- **Tier 1 (quick wins):** 10
- **Tier 2 (medium):** 12
- **Tier 3 (long-term):** 6
- **Expected 4-week traffic impact:** 40-60+ organic sessions/week
```

---

## Timeline Summary

| Date | Task | Owner | Deliverable |
|------|------|-------|-------------|
| May 25 | GSC baseline capture | SEO | PHASE5_KEYWORD_BASELINE_2026-05-17.csv |
| May 27-28 | Competitor analysis | SEO | PHASE5_COMPETITOR_AUDIT_2026-05-28.csv |
| May 29-31 | Gap ranking + prioritization | SEO | PHASE5_OPPORTUNITIES_RANKED.md |
| Jun 1 | Hand-off to Content Lead | SEO | 28-opportunity priority list + effort estimates |

---

## Success Criteria

- [ ] Baseline keywords tracked (min 15 keywords with impressions)
- [ ] 3+ competitor sites analyzed per pillar page
- [ ] Gaps documented (word count, H2s, links, schema)
- [ ] 20-30 opportunities ranked by priority tier
- [ ] Effort estimates calculated for each opportunity
- [ ] Quick wins (Tier 1) ready for Week 2-3 content optimization

---

## Notes

- **GSC delay:** If GSC doesn't show 15+ impressions by May 24, use Week 1 data (May 25 onward) as baseline
- **Competitor access:** If competitor uses JavaScript rendering, check via Google Cache or Wayback Machine
- **Schema audit:** Use https://schema.org/docs/schemas.html to validate which schemas competitors use
- **Effort estimates:** If first 2-3 pages take longer than estimated, adjust remaining estimates upward

---

**Status:** Ready for May 25 kickoff  
**Created:** May 17, 2026  
**Owner:** myCHEF SEO Team
