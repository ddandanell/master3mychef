# Phase 4: Production Deployment Checklist

**Status:** ✅ CODE READY FOR DEPLOYMENT  
**Build:** Verified passing (4.76s, 61 files injected with meta tags)  
**Date:** 2026-05-17  
**Branch:** `auto-improve/core-web-vitals-phase4`  
**PR:** #2 (Phase 4 - Core Web Vitals Optimization)

---

## ✅ Completed Work

### Code Quality
- [x] TypeScript compilation clean (no errors)
- [x] Production build passes (dist/ ready)
- [x] All assets properly bundled
- [x] Meta tags injected into 61 files
- [x] SEO schema markup complete (LocalBusiness, Service, AggregateRating, FAQ, Breadcrumb)
- [x] Type safety fixes in ServicePage.tsx and sitemap.ts
- [x] 51 canonical URLs defined (92 total with redirects)
- [x] 72 redirect rules configured for URL migration

### Infrastructure
- [x] Netlify configuration (netlify.toml)
- [x] SPA routing fallback configured
- [x] Sitemap generation automated in build pipeline
- [x] Redirect generation automated in build pipeline
- [x] robots.txt configured for all crawlers (Google, Bing, AI)
- [x] Critical assets validation in prebuild

### SEO Setup
- [x] JSON-LD schema for 8 pillar pages
- [x] Breadcrumb schema on all content pages
- [x] FAQ schema on service pages
- [x] AggregateRating schema (4.9/5 with 560 reviews)
- [x] Open Graph and Twitter Card meta tags
- [x] Unique title and description for each page
- [x] Internal linking strategy defined
- [x] GSC submission checklist prepared

### Documentation
- [x] GSC_SUBMISSION_CHECKLIST.md (comprehensive indexing plan)
- [x] SEO-PAGES-PLAN.md (content strategy)
- [x] SEO-REDIRECT-STRATEGY.md (URL migration plan)

---

## 📋 Next Steps (Manual Deployment)

### Phase 4a: Netlify Deployment (TODAY)

**⚠️ MANUAL:** This requires browser interaction at netlify.com

1. **Connect GitHub to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select "GitHub" → authorize
   - Choose repository: `master3mychef`
   - Select branch: `auto-improve/core-web-vitals-phase4`

2. **Configure Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Environment variables:
     - `VITE_GA_ID`: (get from Google Analytics)
     - `VITE_GTM_ID`: (get from Google Tag Manager)

3. **Add Custom Domain**
   - Domain Management → Add custom domain → `mychef.id`
   - Confirm domain ownership via Netlify-provided CNAME/A records
   - Update DNS at registrar (typically CNAME to `mychef-id.netlify.app`)
   - Wait for DNS propagation (~10-15 minutes)

4. **Verify Deployment**
   - Check build log (should show ✓ built in ~4.8s)
   - Visit https://mychef.id (after DNS propagates)
   - Test key routes:
     - `/` (homepage)
     - `/fine-dining` (service page)
     - `/catering` (another service)
     - `/locations/seminyak` (area page)
     - `/old-url-example` (should redirect to new URL)

**Build Log Should Show:**
```
> my-app@0.0.0 prebuild
  ✓ Wrote 51 canonical URLs to sitemap.xml
  ✓ Wrote 72 redirects to _redirects

> my-app@0.0.0 build
  ✓ tsc -b
  ✓ vite build in 4.76s

> my-app@0.0.0 postbuild
  ✓ Injected meta tags: 61 files
```

---

### Phase 4b: Post-Deployment Verification (SAME DAY)

**⚠️ MANUAL:** Browser verification only

1. **Check Site Accessibility**
   ```bash
   # From terminal (local machine)
   curl -I https://mychef.id
   # Should return 200 OK
   ```

2. **Test Route Accessibility**
   - Homepage loads under 2.5s (LCP target)
   - All service pages load: /services/fine-dining, /services/catering, etc.
   - All area pages load: /seminyak, /canggu, /ubud
   - Redirects work: Test 2-3 old URLs from _redirects

3. **Verify SEO Elements**
   - Meta tags present in page source
   - Schema markup visible in page source (search for `@context`)
   - Robots.txt accessible: https://mychef.id/robots.txt
   - Sitemap accessible: https://mychef.id/sitemap.xml

4. **Check Core Web Vitals**
   - Use PageSpeed Insights: https://pagespeed.web.dev
   - Input: https://mychef.id
   - Target scores:
     - LCP: < 2.5s ✅
     - INP: < 200ms ✅
     - CLS: < 0.1 ✅
     - FCP: < 1.5s ✅

---

### Phase 4c: Search Engine Submission (24-48h AFTER DEPLOYMENT)

Follow **GSC_SUBMISSION_CHECKLIST.md** in this repo:

1. **Set Up Google Search Console**
   - Go to https://search.google.com/search-console
   - Add property: `https://mychef.id`
   - Verify ownership (HTML file method fastest)

2. **Submit Sitemap**
   - Navigate to Sitemaps section
   - Submit: `sitemap.xml`
   - Confirm green checkmark (accepted)

3. **Request Indexing for 8 Pillar Pages** (from GSC_SUBMISSION_CHECKLIST.md)
   - Homepage `/`
   - `/fine-dining`
   - `/catering`
   - `/events`
   - `/locations`
   - `/staffing`
   - `/partner-platform`
   - `/journal`

4. **Set Up Monitoring**
   - Bookmark Coverage report (https://search.google.com/search-console → Coverage)
   - Daily check for first week
   - Expected: "Valid" count grows from 0 → 92 pages

5. **(Optional) Submit to Bing Webmaster Tools**
   - Go to https://www.bing.com/webmasters
   - Add site: `https://mychef.id`
   - Submit sitemap

---

## 📊 Monitoring (Weeks 1-4)

### Week 1: Indexing
- [ ] Sitemap processed in GSC (green checkmark)
- [ ] Coverage shows "Valid" pages increasing
- [ ] 8 pillar pages indexed within 48h
- [ ] No unexpected 404 errors in Coverage report

### Week 2: Traffic Baseline
- [ ] Organic search traffic visible in GA4
- [ ] Keyword rankings tracked (use Google Ads keyword planner or SEMrush)
- [ ] Compare pre/post migration organic traffic (target: 90%+ retention)
- [ ] Core Web Vitals stable (check PageSpeed Insights weekly)

### Week 3-4: Content Optimization
- [ ] Identify pages with ranking drops >10 positions
- [ ] Optimize meta descriptions (under 155 chars)
- [ ] Enhance content depth on low-ranking pages
- [ ] Add internal links from high-authority pages to new content
- [ ] Monitor click-through rate (CTR) in GSC (target: >3% for primary keywords)

---

## 🔗 Environment Variables Required

Before deploying to Netlify, gather these:

| Variable | Source | Example | Where to Find |
|----------|--------|---------|---------------|
| `VITE_GA_ID` | Google Analytics | `G-XXXXXXXXXX` | Google Analytics → Admin → Property Details |
| `VITE_GTM_ID` | Google Tag Manager | `GTM-XXXXXXX` | Google Tag Manager → Admin → Container ID |

Add these in Netlify site settings → Environment variables before deployment.

---

## 🚨 Rollback Plan

If deployment has issues:

1. **Netlify Rollback** (instant)
   - Netlify Dashboard → Deploys → Select previous successful deploy
   - Click "Publish" to revert

2. **Git Rollback** (if issues in build config)
   - Local: `git revert -n HEAD`
   - Push to branch: `git push origin auto-improve/core-web-vitals-phase4`
   - Netlify automatically rebuilds

3. **DNS Rollback** (if domain issues)
   - Revert DNS records at registrar
   - Point back to old hosting provider
   - Takes ~10-15 minutes to propagate

---

## ✨ Success Criteria

Phase 4 is complete when:

- ✅ Site deployed to Netlify (https://mychef.id)
- ✅ All routes accessible with 200 status
- ✅ Meta tags injected correctly (inspect page source)
- ✅ Sitemap submitted to GSC
- ✅ Pillar pages indexed in Google (within 48h)
- ✅ Core Web Vitals passing (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- ✅ Organic traffic maintained (90%+ retention)
- ✅ Zero 404 errors in GSC Coverage report

---

## 📝 Commit History

| Commit | Date | Work |
|--------|------|------|
| `7ef1d4f` | 2026-05-17 | chore: add Netlify deployment configuration |
| `b864d6f` | 2026-05-16 | feat: Phase 3c Batch 2 - standardize 26 remaining images |
| `9ef6745` | 2026-05-16 | feat: Phase 3b - rename 30 medium-priority images |

---

## 🎯 Final Status

**Ready for Production:** ✅ YES

All code, infrastructure, and SEO setup complete. Awaiting manual Netlify deployment and GSC submission.

