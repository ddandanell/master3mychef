# Phase 5: GA4 Dashboard Setup Guide
**May 17, 2026 — Ready for implementation before Week 5 monitoring begins (June 22)**

This guide provides step-by-step GA4 configuration to support Phase 5 tracking from Week 5+ (June 22 onwards). All three dashboard layers are specified with exact events, dimensions, metrics, and filters.

---

## 📊 GA4 Dashboard Architecture

Three monitoring layers, each optimized for specific Phase 5 decisions:

| Layer | Purpose | Primary Metric | Audience |
|-------|---------|---|---|
| **Layer 1: Blog Performance** | Which blogs drive traffic & engagement | Sessions, bounce rate, avg session duration | Content optimization |
| **Layer 2: Organic Search by Keyword** | Which keywords bring traffic, conversion | Sessions by keyword, avg position, CTR | SEO optimization |
| **Layer 3: Page Performance** | Which pages perform best, bottlenecks | Page sessions, scroll depth, engagement rate | Technical/UX optimization |

---

## 🔧 Setup Prerequisites (Before June 22)

### Required GA4 Setup (Verify by June 1)
- [ ] GA4 property created for mychef.id
- [ ] Web stream configured
- [ ] Google Search Console linked to GA4
- [ ] Google Ads linked (if applicable)
- [ ] Conversion tracking configured (CTA clicks)
- [ ] Session timeout: 30 minutes (default is fine)

### Required Events (Create by June 15)
1. **cta_click** — Triggered when user clicks "Book Chef", "Contact", "Browse Chefs" buttons
2. **blog_read** — Triggered when user scrolls >50% on blog posts
3. **page_scroll** — Triggered when user scrolls >75% on any page
4. **inquiry_submit** — Triggered when contact form submitted

### Required Custom Dimensions (Create by June 15)
1. **blog_name** — Custom dimension: Which blog (e.g., "how-to-hire", "cost-breakdown")
2. **page_type** — Custom dimension: Page category (blog, service, homepage)
3. **keyword_target** — Custom dimension: Primary keyword target for page

---

## 📈 Layer 1: Blog Performance Dashboard

### Purpose
Track which blogs drive traffic, engagement, and conversions. Decision: Which blog content works best?

### Configuration

**Dashboard name:** "Phase 5 - Blog Performance"

**Card 1: Blog Sessions Over Time**
- Chart type: Line chart
- Time period: Daily
- Dimension: Date
- Metrics: Sessions
- Filter: Page path contains "/blog"
- Comparison: Week-over-week
- Purpose: See blog traffic growth trajectory

**Card 2: Top Blogs by Sessions**
- Chart type: Table
- Dimension: Page title (or custom dimension blog_name)
- Metrics: Sessions, Users, Avg session duration, Bounce rate
- Filter: Page path contains "/blog"
- Limit: Top 5
- Purpose: Quick ranking of which blogs perform best

**Card 3: Blog Engagement Metrics**
- Chart type: Scorecard (4 cards)
- Metrics:
  - Total blog sessions (snapshot)
  - Avg bounce rate on blogs
  - Avg session duration on blogs (target: >3 min)
  - Blog read events (custom event)
- Filter: Page path contains "/blog"
- Purpose: Health check on engagement

**Card 4: Blog-to-CTA Conversion Funnel**
- Chart type: Table
- Dimensions: Page title, Event name
- Metrics: Event count
- Filters: Page contains "/blog" AND (cta_click OR inquiry_submit)
- Purpose: See which blogs drive actual CTAs

**Card 5: Blog Traffic by Source**
- Chart type: Pie/donut
- Dimension: Session source (organic, direct, referral, social)
- Metrics: Sessions
- Filter: Page path contains "/blog"
- Purpose: Understand where blog traffic comes from

**Card 6: Individual Blog Performance Table**
- Chart type: Table
- Dimension: Page title
- Metrics: Users, Sessions, Avg session duration, Bounce rate, Event count (blog_read)
- Filter: Page contains "/blog"
- Sort: By sessions descending
- Purpose: Deep dive into each blog's performance

### Interpretation Guide

**Green flag metrics:**
- Avg session duration >3 min on blogs (shows content engagement)
- Bounce rate <50% on blogs (shows content relevance)
- 10-15% of blog sessions generate CTA clicks

**Red flags:**
- Bounce rate >60% (content not matching search intent)
- Avg session duration <1 min (content too thin or loads slow)
- 0% CTA conversion from blogs (weak CTAs or wrong audience)

---

## 🔍 Layer 2: Organic Search by Keyword Dashboard

**Purpose**
Track which keywords bring traffic and drive conversions. Decision: Which keywords are working? Which need optimization?

### Configuration

**Dashboard name:** "Phase 5 - Organic Search Keywords"

**Card 1: Organic Sessions Over Time**
- Chart type: Line chart
- Time period: Daily
- Dimension: Date
- Metrics: Sessions
- Filter: Default Channel Group = Organic Search
- Purpose: Overall organic traffic trend

**Card 2: Top Keywords by Sessions**
- Chart type: Table
- Dimension: Full page URL (alternative: Create custom dimension "primary_keyword")
- Metrics: Sessions, Users, Conversion rate (cta_click events)
- Filter: Default Channel Group = Organic Search
- Limit: Top 20
- Sort: Sessions descending
- Purpose: Quick view of performing keywords

**Card 3: Keyword Performance Scorecard**
- Chart type: Scorecard (4 cards)
- Metrics:
  - Organic sessions (current month)
  - YoY growth (vs May, will be <10 initially)
  - Conversion rate from organic (%, target >2%)
  - Avg session duration from organic (target >2 min 30 sec)
- Filter: Default Channel Group = Organic Search
- Purpose: Quick health check

**Card 4: New Keywords Emerging (Week 5+)**
- Chart type: Table
- Dimension: Full page URL
- Metrics: Sessions
- Filter: Date range = Last 7 days AND Sessions >5 AND Default Channel Group = Organic Search
- Sort: Sessions descending, Limit: 10
- Purpose: Identify newly-ranking keywords (replicate success)

**Card 5: Low-Performing Keywords (Optimization Targets)**
- Chart type: Table
- Dimension: Full page URL
- Metrics: Sessions, Bounce rate, Avg session duration
- Filter: Default Channel Group = Organic AND Sessions 5-20 (mid-range visibility)
- Sort: Bounce rate descending
- Purpose: Find optimization opportunities (high bounce = content mismatch)

**Card 6: Organic Conversion Funnel**
- Chart type: Funnel
- Steps:
  1. Organic session (entry)
  2. Pages >2 (engagement)
  3. CTA click (action)
- Filter: Default Channel Group = Organic Search
- Purpose: See drop-off points in organic journey

### Interpretation Guide

**Green flags:**
- New keywords appearing in Week 5-8 (ranking improving)
- Bounce rate <55% on organic keywords (content relevance)
- Conversion rate >2% from organic (quality traffic)
- 15-30 organic sessions/day by Week 8 (traction)

**Red flags:**
- No new keywords in first 3 weeks (indexation delayed)
- Bounce rate >65% (content not matching intent)
- Conversion rate <1% (wrong audience or weak CTA)
- Decreasing organic sessions Week-to-week (technical issue)

---

## 🔌 Layer 3: Page Performance Dashboard

**Purpose**
Track which pages keep users engaged, scroll depth, and technical issues. Decision: Which pages need optimization? Are there technical bottlenecks?

### Configuration

**Dashboard name:** "Phase 5 - Page Performance"

**Card 1: Top Pages by Sessions**
- Chart type: Table
- Dimension: Page title
- Metrics: Sessions, Users, Avg session duration, Bounce rate, Engagement rate
- Limit: Top 10
- Sort: Sessions descending
- Purpose: Quick ranking of page performance

**Card 2: Engagement Rate by Page Type**
- Chart type: Column chart
- Dimension: Page title (or custom dimension page_type)
- Metrics: Engagement rate (%)
- Target: >50% engagement rate
- Purpose: See which content types engage users best

**Card 3: Scroll Depth Analysis**
- Chart type: Table
- Dimension: Page title
- Metrics: Event count (page_scroll events)
- Filter: event_name = page_scroll
- Purpose: See which pages users scroll through completely

**Card 4: Page Load Impact (If CWV data connected)**
- Chart type: Scatter/correlation
- Dimensions: Page title, Page load time (or LCP if available)
- Metrics: Bounce rate, Avg session duration
- Purpose: Correlate slow pages with engagement drop

**Card 5: CTA Performance by Page**
- Chart type: Table
- Dimension: Page title
- Metrics: Cta_click event count, Event count rate (%)
- Filter: event_name = cta_click
- Sort: Event count descending
- Purpose: Which pages drive actual conversions

**Card 6: Page Performance Trend**
- Chart type: Line chart
- Time period: Daily
- Dimension: Date
- Metrics: Sessions, Engagement rate
- Filter: Specific key page (e.g., homepage, top blog)
- Purpose: Track performance of critical pages over time

### Interpretation Guide

**Green flags:**
- Engagement rate >50% (users interacting with content)
- Avg session duration >2 minutes (compelling content)
- Scroll depth >75% (users reading most of page)
- 5-10% of page sessions trigger CTAs

**Red flags:**
- Engagement rate <30% (content not compelling or technical issue)
- Bounce rate >60% (wrong audience or poor UX)
- Session duration <1 minute (thin content or slow load)
- 0% CTAs on high-traffic pages (weak conversion path)

---

## 🛠️ Implementation Timeline

| Date | Task | Effort |
|------|------|--------|
| **By June 1** | Verify GA4 property, streams, and GSC linkage | 1 hour |
| **By June 15** | Create 4 custom events (cta_click, blog_read, page_scroll, inquiry_submit) | 2 hours |
| **By June 15** | Create 3 custom dimensions (blog_name, page_type, keyword_target) | 1 hour |
| **By June 20** | Create Layer 1 dashboard (Blog Performance) | 2 hours |
| **By June 20** | Create Layer 2 dashboard (Organic Keywords) | 2 hours |
| **By June 20** | Create Layer 3 dashboard (Page Performance) | 2 hours |
| **June 22** | Begin weekly monitoring (Week 5) | - |

**Total setup effort:** ~10 hours (spread across June 1-20)

---

## 📋 GA4 Events Configuration (Code-Ready)

### Event 1: cta_click
**Trigger:** User clicks button with class "cta-button" or id containing "cta"

```javascript
// Example GTM Tag Configuration
gtag('event', 'cta_click', {
  'cta_type': 'book_chef',  // or 'contact', 'browse_chefs'
  'cta_location': 'blog_footer',  // or 'hero', 'sidebar', 'inline'
  'page_path': window.location.pathname,
  'page_title': document.title
});
```

### Event 2: blog_read
**Trigger:** User scrolls to 50% depth on pages with /blog in path

```javascript
gtag('event', 'blog_read', {
  'blog_name': 'how-to-hire-private-chef',
  'scroll_depth': 50,
  'page_path': window.location.pathname,
  'time_on_page': Math.round(performance.now() / 1000)
});
```

### Event 3: page_scroll
**Trigger:** User scrolls to 75% depth on any page

```javascript
gtag('event', 'page_scroll', {
  'scroll_depth': 75,
  'page_type': 'blog',  // or 'service', 'homepage'
  'page_path': window.location.pathname
});
```

### Event 4: inquiry_submit
**Trigger:** Contact form submitted successfully

```javascript
gtag('event', 'inquiry_submit', {
  'form_name': 'contact_form',
  'form_type': 'general',  // or 'booking', 'event_inquiry'
  'page_path': window.location.pathname
});
```

---

## 🎯 Weekly Monitoring Checklist (Weeks 5-12)

### Every Monday (Start of week)
- [ ] Open Layer 1 dashboard (Blog Performance)
- [ ] Check blog sessions vs previous week (trend)
- [ ] Note any new blogs appearing in top 5
- [ ] Check bounce rate on each blog (<50% target)

### Every Tuesday (Mid-week organic check)
- [ ] Open Layer 2 dashboard (Organic Keywords)
- [ ] Count keywords now visible (aim: 15+ by W5, 40+ by W8)
- [ ] Check for new keywords emerging
- [ ] Identify low-performers with high bounce (>60%)

### Every Wednesday (Page health check)
- [ ] Open Layer 3 dashboard (Page Performance)
- [ ] Check top pages haven't dropped
- [ ] Verify engagement rate >50% on key pages
- [ ] Check CTA conversion rates by page

### Every Friday (Weekly summary)
- [ ] Export all three dashboards as PDF for documentation
- [ ] Compare week-over-week metrics
- [ ] Document insights in PHASE5_WEEKLY_REPORT_TEMPLATE.md
- [ ] Identify optimization opportunities for following week

---

## 🚨 Troubleshooting

### "No data appearing in dashboards"
**Cause:** GA4 takes 24-48 hours to process initial data  
**Solution:** Check back after 48 hours; verify events are firing in Google Tag Manager realtime view

### "Events not firing"
**Cause:** Event configuration incorrect or page elements not matching trigger  
**Solution:** Check GTM realtime view; verify CSS selectors match actual page elements

### "Organic keywords showing 0 sessions"
**Cause:** GSC linkage not complete or delay in data sync  
**Solution:** Verify GSC property linked in GA4 admin; wait 24-48 hours for sync

### "High bounce rate on all blogs"
**Cause:** Could be CWV issue (slow load), wrong audience, or content mismatch  
**Solution:** Check Lighthouse scores; compare content quality vs top competitors

---

## 📞 Dashboard Sharing

### For Weekly Stakeholder Updates
- Export each dashboard as PDF every Friday
- Include 1-2 key insights per dashboard
- Highlight red flags and green flags
- Reference PHASE5_WEEKLY_REPORT_TEMPLATE.md

### For Monthly Reviews
- Compare all metrics month-over-month (May baseline → June)
- Track progress toward Week 12 targets (500+ visits)
- Identify which content types and pages drive highest engagement
- Adjust strategy based on data (Weeks 9-10 optimization input)

---

**Status:** GA4 setup configuration complete. Ready to implement by June 20.  
**Next step:** Coordinate GA4 implementation with IT/analytics team by June 1.
