# Week 2 Monitoring Baseline (May 17-23, 2026)

## Launch Date: May 16, 2026
## Baseline Collection: May 17-23
## Analysis & Reporting: May 24

---

## Monitoring Objectives

Establish post-launch performance baseline across organic search, user engagement, and technical health to inform optimization priorities for Weeks 3-4.

---

## Key Metrics to Track

### Organic Search Performance (Google Search Console)
- **Impressions**: Total search visibility
- **Clicks**: Traffic from organic search
- **CTR**: Click-through rate from search results
- **Avg Position**: Average ranking position
- **Top Performing Pages**: Pages driving most traffic
- **Top Queries**: Search terms driving impressions
- **Indexation Status**: Pages indexed vs submitted

### Website Performance (Core Web Vitals)
- **LCP** (Largest Contentful Paint): < 2.5s target
- **INP** (Interaction to Next Paint): < 200ms target
- **CLS** (Cumulative Layout Shift): < 0.1 target
- **Field Data vs Lab Data**: CrUX metrics

### User Engagement (Google Analytics 4)
- **Sessions**: Total active users
- **Pageviews**: Content consumption
- **Bounce Rate**: Exit rate by page
- **Avg Session Duration**: Engagement depth
- **Pages per Session**: Content depth
- **Conversion Events**: Form submissions, bookings

### Technical Health
- **Crawl Errors**: GSC crawl stats
- **Mobile Usability**: Errors and warnings
- **Mobile-Friendly Test**: Passing/failing
- **Security Issues**: GSC security alerts

### Content Performance
- **Pages by Traffic**: Rank by session count
- **Pages by Bounce Rate**: Identify weak content
- **Exit Pages**: Where users leave
- **Landing Pages**: Top entry points

---

## Data Sources & Collection Method

| Metric | Source | Frequency | Owner |
|--------|--------|-----------|-------|
| GSC Organic | Google Search Console API | Daily | Claude / Analytics |
| CWV Data | Google CrUX API | Daily | Claude / Performance |
| GA4 Data | Google Analytics 4 API | Daily | Claude / Analytics |
| Hero Photo | Vercel Logs + Monitoring | Continuous | Claude / Infra |
| Build Status | Vercel Dashboard | Per deploy | Claude / Build |

---

## Critical Alerts Setup

### Real-Time Alerts
1. **Hero Photo Load Failure**
   - Monitor: `vercel logs --level error --since 1h`
   - Trigger: Any image load error on `/`
   - Action: Verify critical assets present, check Vercel build logs

2. **Build Failure**
   - Monitor: Asset validation script in prebuild
   - Trigger: Missing critical image, validation exits with code 1
   - Action: Restore from git, run `git checkout HEAD -- public/generated/`

3. **Core Web Vitals Regression**
   - Monitor: Field data from CrUX
   - Trigger: INP > 300ms or LCP > 4s
   - Action: Profile with Chrome DevTools, identify bottleneck

### Daily Health Check
- GSC indexation status (no errors)
- Vercel deployment status (no failures)
- GA4 traffic flow (no drop-offs)
- Hero photo visibility on homepage

---

## Week 2 Baseline Snapshot (May 23)

**To be completed May 24:**

```
## Organic Search (GSC - May 17-23)
- Total Impressions: [PENDING]
- Total Clicks: [PENDING]
- Avg CTR: [PENDING]
- Avg Position: [PENDING]
- Top 5 Pages:
  1. [PENDING]
  2. [PENDING]
  3. [PENDING]
  4. [PENDING]
  5. [PENDING]
- Top 5 Queries:
  1. [PENDING]
  2. [PENDING]
  3. [PENDING]
  4. [PENDING]
  5. [PENDING]

## Performance (Core Web Vitals)
- LCP: [PENDING]
- INP: [PENDING]
- CLS: [PENDING]
- Field Data Availability: [PENDING]

## User Engagement (GA4)
- Total Sessions: [PENDING]
- Total Users: [PENDING]
- Avg Session Duration: [PENDING]
- Bounce Rate: [PENDING]
- Top Landing Pages:
  1. [PENDING]
  2. [PENDING]
  3. [PENDING]

## Technical Health
- Pages Indexed: [PENDING]
- Mobile Usability Issues: [PENDING]
- Security Alerts: [PENDING]
- Crawl Errors: [PENDING]
```

---

## Optimization Priorities (From SEO Audit)

**Pending SEO audit results - will populate May 23**

### Critical Issues (Fix this week)
- [ ] [From audit: Critical #1]
- [ ] [From audit: Critical #2]
- [ ] [From audit: Critical #3]

### High Priority (Fix by May 31)
- [ ] [From audit: High #1]
- [ ] [From audit: High #2]
- [ ] [From audit: High #3]
- [ ] [From audit: High #4]
- [ ] [From audit: High #5]

### Medium Priority (Backlog for Week 4)
- [ ] [From audit: Medium #1]
- [ ] [From audit: Medium #2]
- [ ] [From audit: Medium #3]

---

## Success Criteria

### Week 2 Baseline Complete When:
- ✓ GSC data collected (7+ days)
- ✓ GA4 baseline established
- ✓ CWV field data captured
- ✓ SEO audit completed with prioritized action plan
- ✓ Critical issues identified for Week 3

### Hero Photo Protection Verified:
- ✓ Build validation working (confirmed in Vercel logs)
- ✓ Image displaying correctly (homepage screenshot)
- ✓ No load errors in console
- ✓ CSS fallback functional (if image fails)

---

## Timeline

| Date | Task | Owner | Status |
|------|------|-------|--------|
| May 16 | Launch + Deploy Hero Protection | Claude | ✓ Done |
| May 17-23 | Collect Week 2 Baseline Data | Claude | In Progress |
| May 23 | Complete SEO Audit | Claude | In Progress |
| May 24 | Analyze Results & Report | Claude | Pending |
| May 25-31 | Implement Critical Issues | Claude | Pending |
| Jun 1-4 | Test & Verify Improvements | Claude | Pending |

---

## Notes

- Hero photo protection is live and validated on production
- SEO audit will identify both quick wins and structural improvements
- Focus Week 3 on critical issues that block indexing or cause penalties
- Week 4 will address high-impact optimizations and monitor effectiveness
- All metrics collected from authenticated Google APIs (GSC, GA4, CrUX)
