# Sunday May 19, 0800 UTC — Monitoring Execution Script

**Duration:** 50 minutes  
**Date:** May 19, 2026  
**Time:** 0800 UTC  
**Prepared:** May 17, 2026

---

## ⏱️ Timeline & Checklist

### PART 1: GSC Review (0:00–15:00) — 15 minutes

**Dashboard:** https://search.google.com/search-console/index?resource_id=sc-domain%3Amychef.id

| Task | Expected | Action | ✓ |
|------|----------|--------|---|
| Open GSC Coverage tab | Shows indexed pages | Check current count vs baseline (18) | |
| Check crawl errors | Should be 0 | If any: investigate 404s | |
| Review Pages tab | Shows all pages crawled | Sort by "More than others" | |
| Document findings | Indexed count, new pages | Write count & top 5 crawled | |

**Data to Capture:**
```
GSC Findings (May 19):
- Total Indexed: _____ (baseline: 18, target: 20+)
- Crawl Errors: _____ (target: 0)
- New Pages Indexed: _____ (since May 17)
- Top 3 Pages Crawled:
  1. _____
  2. _____
  3. _____
```

---

### PART 2: GA4 Review (15:00–35:00) — 20 minutes

**Dashboard:** https://analytics.google.com/analytics/web/#/a372747303p510246176/reports/realtime

#### Step 1: Real-time Check (2 min)
- [ ] Open Real-time tab
- [ ] Note any current users on site
- [ ] Check traffic sources

#### Step 2: Organic Traffic (8 min)
- [ ] Go to: Acquisition → Organic Search
- [ ] Set date range: May 15–21 (week view)
- [ ] Capture metrics:

```
Organic Traffic Summary (May 15–21):
- Sessions: _____
- New Users: _____
- Bounce Rate: _____%
- Pages/Session: _____
- Avg Session Duration: _____
- Top Landing Page: _____
- Top Source (usually Google): _____
```

#### Step 3: Conversions (5 min)
- [ ] Go to: Engagement → Events
- [ ] Filter for "whatsapp_click" events
- [ ] Capture:

```
Conversion Events (May 15–21):
- WhatsApp Clicks: _____
- Click Rate: _____%
- Top Pages Driving Clicks:
  1. _____ (_____%)
  2. _____ (_____%)
  3. _____ (_____%)
```

#### Step 4: Audience (5 min)
- [ ] Go to: Audience → Demographics
- [ ] Check location breakdown:

```
Audience Breakdown:
- Top Country: _____ (_____%)
- Top Cities (if available): _____, _____, _____
- Mobile vs Desktop: Mobile _____%, Desktop _____% 
```

---

### PART 3: Core Web Vitals (35:00–45:00) — 10 minutes

**Tool:** https://pagespeed.web.dev/

#### Test 3 Key Pages:
1. **Homepage** (https://mychef.id/)
2. **Top Pillar** (from GA4 data above)
3. **Top Organic Landing** (from GA4 data above)

**For each page:**
- [ ] Enter URL in PageSpeed Insights
- [ ] Wait for mobile + desktop scores
- [ ] Capture metrics:

```
Page: _____
Mobile LCP: _____ (target: <2.5s, baseline: ~1.2s)
Mobile INP: _____ (target: <200ms)
Mobile CLS: _____ (target: <0.1)
Desktop LCP: _____
Desktop INP: _____
Desktop CLS: _____
Performance Score: _____ (mobile), _____ (desktop)
```

**Compare to baseline LCP from May 17: ~1.2s**
- If improved: ✓ Phase 2 optimization working
- If same: ✓ No regression
- If worse: ⚠️ Investigate cause

---

### PART 4: Production Health (45:00–50:00) — 5 minutes

#### Manual Checks:
```bash
# Run this in terminal:
curl -sS -w "HTTP %{http_code} in %{time_total}s\n" https://mychef.id/
```

Expected: `HTTP 200 in ~1.0-1.2s`

- [ ] HTTP 200 ✓
- [ ] Load time < 2s ✓
- [ ] Open site in browser
- [ ] Check visual rendering
- [ ] Test WhatsApp button
- [ ] Verify mobile responsiveness

**Checklist:**
- [ ] No broken images (console no 404s)
- [ ] WhatsApp button visible (mobile & desktop)
- [ ] Navigation working
- [ ] Mobile layout responsive
- [ ] No JavaScript errors in console

---

## 📝 Report Template

After 50 minutes, use this template to generate the report:

```markdown
# myCHEF Weekly Monitoring Report — Week 2 (May 19, 2026)

## Executive Summary
- GSC indexed: _____ pages (was 18, target 20+)
- GA4 organic sessions: _____ (baseline: ~0)
- Core Web Vitals: ✓ Stable / ⚠️ Regression
- Production: ✓ HTTP 200, _____ s load time

## GSC Findings
**Coverage:**
- Indexed: _____ 
- Crawled but not indexed: _____
- Errors: _____

**New Pages Indexed:** (since May 17)
- [List new pages if any]

**Top Crawled Pages:**
1. _____ 
2. _____
3. _____

## GA4 Findings
**Organic Traffic (May 15–21):**
- Sessions: _____
- New Users: _____
- Bounce Rate: _____%
- Top Page: _____

**Conversions:**
- WhatsApp Clicks: _____
- Top Converting Page: _____

## Core Web Vitals
**Homepage LCP:** _____ (baseline: 1.2s, target: <2.5s)
- Status: ✓ Good / ⚠️ Monitor / ✗ Regression

**Phase 3 Impact:** No regression detected post-image standardization ✓

## Production Health
- Status: ✓ HTTP 200 in _____ s
- No broken images: ✓
- WhatsApp button: ✓ Functional
- Mobile responsiveness: ✓

## Next Steps
- [ ] Phase 3 impact: Standardized naming caused no regressions
- [ ] Continue organic traffic monitoring (4–8 week ramp expected)
- [ ] If indexed < 18: Investigate for crawl issues
- [ ] Schedule: Weekly review every Sunday 0800 UTC
- [ ] Plan Phase 3.5 cleanup or Phase 4 next actions

---

**Monitoring Date:** May 19, 2026  
**Session Duration:** 50 minutes  
**Prepared By:** myCHEF Monitoring Team
```

---

## 🎯 Success Criteria

- [ ] GSC shows indexed pages (≥18)
- [ ] GA4 shows traffic or zero (not errors)
- [ ] Core Web Vitals stable (LCP ~1.2s, no regression)
- [ ] Production: HTTP 200, <2s load time
- [ ] No Phase 3-related issues (images loading fine)
- [ ] Report generated with Week 2 findings

---

## 📊 Files to Reference During Session

- `.claude/MYCHEF_PROJECT_STATUS_2026-05-17.md` — Week 1 baseline metrics
- `.claude/PHASE3_COMPLETION_SUMMARY.md` — Image standardization details
- `.claude/SUNDAY_MAY19_MONITORING_CHECKLIST.md` — Detailed review template

---

## 🚀 Post-Session Actions

1. **Save Report:** `reports/myCHEF_WEEKLY_MONITORING_REPORT_2026-05-19.md`
2. **Commit:** 
   ```bash
   git add reports/
   git commit -m "docs: week 2 monitoring report (May 19 comprehensive review)"
   git push origin auto-improve/core-web-vitals-phase4
   ```
3. **Schedule Next:** May 26, 0800 UTC (repeat process)

---

**Status:** Ready for Execution  
**Last Updated:** May 17, 2026, 02:23 UTC  
**Next Milestone:** Sunday May 19, 0800 UTC
