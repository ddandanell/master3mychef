# Day 1: Google Search Console Submission & Indexing

**Date:** 2026-05-16  
**Status:** ⏳ READY FOR GSC SUBMISSION  
**Sitemap URL:** https://mychef.id/sitemap.xml  
**Pillar Pages:** 8 pages ready for priority indexing

---

## Critical: Pre-GSC Setup

Before submitting to GSC, verify **domain ownership** if this is your first time:

1. Go to https://search.google.com/search-console
2. Click **+ Create property**
3. Select **URL prefix** and enter `https://mychef.id`
4. Follow Google's domain ownership verification (DNS TXT record or HTML file)
   - **Recommended:** HTML file method (verify instantly)
   - **Alternative:** DNS TXT record (propagates in minutes)
5. Once verified, proceed below

---

## Task 1: Submit Sitemap to GSC

### Steps

1. **Log in to GSC:** https://search.google.com/search-console
2. **Select property:** mychef.id (if multiple properties)
3. **Navigate to Sitemaps:**
   - Left sidebar → **Sitemaps** (under "Index")
4. **Add new sitemap:**
   - Click **Add/test sitemap**
   - Enter: `sitemap.xml`
   - Click **Submit**
5. **Verify submission:**
   - Sitemap should appear in the list with status
   - Green checkmark = successfully submitted
   - "Processed" = Google has started parsing

### Expected Result

- Sitemap accepted and added to GSC
- 92 canonical URLs detected (exact match confirms correct structure)
- 65 redirected URLs correctly excluded from sitemap

---

## Task 2: Request Indexing for Pillar Pages

### 8 Critical Pages to Index (In Priority Order)

Request indexing for these pillar pages to accelerate ranking in GSC:

| Priority | URL | Content | Expected Rank Impact |
|----------|-----|---------|----------------------|
| 1 | `/` | Homepage - brand, services overview | Primary keyword "private chef Bali" |
| 2 | `/fine-dining` | Premium dining experiences | "luxury private chef" + "fine dining Bali" |
| 3 | `/catering` | Multi-person events, meal delivery | "catering Bali" + "private chef group" |
| 4 | `/events` | Wedding, corporate, birthday events | "wedding chef Bali" + "event catering" |
| 5 | `/locations` | Area/neighborhood service pages | "chef in [area]" queries |
| 6 | `/staffing` | Chef hiring & training | "hire chef Bali" |
| 7 | `/partner-platform` | Villa/property integration | "villa chef service" |
| 8 | `/journal` | Blog articles & guides | Long-tail content keywords |

### Steps to Request Indexing

1. **For each page above:**
   - Click the **URL inspection** tool (top of GSC page)
   - Copy the full URL (e.g., `https://mychef.id/fine-dining`)
   - Paste into the inspection field and hit Enter
   - Click **Request indexing** (blue button)
   - Confirm dialog: "Request index coverage"

2. **Alternative (Bulk):**
   - Left sidebar → **Sitemaps**
   - Check box next to submitted sitemap
   - **Note:** GSC will prioritize based on your sitemap markup

### Expected Result

- All 8 pages queued for indexing
- Google typically crawls within 24-48 hours
- Monitor "Coverage" report daily (see Task 3)

---

## Task 3: Set Up Daily Monitoring

### Daily Check: Coverage Report

1. **Navigate to Coverage:**
   - Left sidebar → **Coverage** (under "Index")

2. **Monitor these metrics:**
   - **Excluded:** Should show 65 (your redirected URLs)
   - **Valid:** Should grow from initial count toward 92
   - **Error (404s):** Should stay at 0
   - **Warnings:** Monitor for duplicate content or soft 404s

3. **What to look for:**
   - No unexpected 404 errors (would indicate missed redirects)
   - "Discovered but not indexed" decreasing over time
   - All valid pages trending toward "indexed"

4. **Action if issues appear:**
   - If 404s appear: Check `src/data/redirects.ts` for missing redirects
   - If soft 404s: Review redirect targets (ensure they're real pages)
   - If duplicates: Check canonical tags (auto-set by React Router)

### First Week Monitoring Schedule

| Day | Focus | Action |
|-----|-------|--------|
| **1 (Today)** | Submission + Indexing | Submit sitemap, request pillar pages |
| **2** | GSC Acceptance | Verify sitemap processed (green checkmark) |
| **3** | Coverage Baseline | Screenshot Coverage report (baseline for comparison) |
| **4** | Crawl Errors | Check for any 404s or warnings |
| **5-7** | Trend Monitoring | Watch "Valid" count grow toward 92 pages |

---

## Task 4: GA4 & Organic Traffic Baseline

### Before Deep Optimization

1. **Add GA4 event tag to GSC:**
   - In GSC, go to **Settings** → **Connected platforms**
   - Link to your GA4 property
   - This enables organic traffic insights

2. **Create baseline snapshot:**
   - Open GA4 → **Acquisition** → **Organic Search**
   - Take screenshot of traffic by page
   - Document current traffic volume (for post-migration comparison)

3. **What to compare later:**
   - Traffic retention: 90%+ of pre-migration organic traffic
   - Keyword ranking changes: Monitor for drops >10 positions
   - New landing page visibility: Track when new pages start ranking

---

## Verification Checklist

- [ ] GSC property created & domain verified
- [ ] Sitemap submitted to GSC (green checkmark)
- [ ] 8 pillar pages requested for indexing
- [ ] Coverage report set up for daily monitoring
- [ ] GA4 linked to GSC (if using GA4)
- [ ] Baseline screenshots taken

---

## Risk Mitigation

| Risk | Signal | Action |
|------|--------|--------|
| **Soft 404 penalties** | Redirects land on unrelated pages | Verify redirects in redirects.ts are semantically related |
| **Duplicate content** | Multiple pages with identical title/description | Check that each page has unique meta tags |
| **Crawl budget wasted** | Redirects to non-existent pages | Test all 72 redirects before launch |
| **Indexing delay** | Pages still "Discovered but not indexed" after 1 week | Submit sitemap again, request indexing manually |

---

## Next Steps (After Indexing Starts)

**Week 2:**
- Compare pre/post organic traffic in GA4
- Identify any pages with ranking drops
- Monitor Core Web Vitals in PageSpeed Insights

**Week 3-4:**
- Review pages that dropped >10 positions
- Optimize copy, schema, or backlinks for affected pages
- Plan content gap analysis based on SERP feedback

---

## Quick Reference Links

- **GSC:** https://search.google.com/search-console
- **Sitemap:** https://mychef.id/sitemap.xml
- **Robots.txt:** https://mychef.id/robots.txt
- **Live site:** https://mychef.id

---

**Status: ⏳ Waiting for manual GSC submission**

After submitting sitemap and requesting indexing, return here to track progress.
