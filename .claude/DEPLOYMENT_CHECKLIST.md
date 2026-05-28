# myCHEF Deployment & Go-Live Checklist

## Phase 4 Complete ✅

### Code & Infrastructure
- [x] TypeScript errors fixed (SERVICES export, type annotations)
- [x] Sitemap generated (51 canonical URLs)
- [x] Redirects configured (72 routes for Vercel/Netlify)
- [x] robots.txt configured
- [x] Development server verified (24/27 routes passing)
- [x] Local production build successful (275 KB gzipped)
- [x] Git commit & PR created (#2)

### SEO Infrastructure
- [x] Sitemap: `public/sitemap.xml` (20 KB)
- [x] robots.txt: Configured for Googlebot, Bingbot, AI crawlers
- [x] Meta tags: 3 files with verification tags
- [x] Schema markup: LocalBusiness, Service, AggregateRating, FAQ, Breadcrumb

## Remaining Action Items

### Production Deployment (Tier 1 - Must Complete)
- [ ] **Fix Vercel build issue** - Debug TypeScript/Node version mismatch on Vercel
  - Workaround: Use Netlify or Cloudflare Pages instead
  - OR: Deploy pre-built dist/ folder
- [ ] **Domain Setup** - Configure DNS for mychef.id
  - Add Vercel NS records OR point CNAME to Vercel
  - Verify HTTPS certificate auto-issued

### Search Engine Integration (Tier 1 - Must Complete)
- [ ] **Google Search Console**
  1. Verify domain ownership (via DNS/HTML/GSC)
  2. Submit sitemap: mychef.id/sitemap.xml
  3. Request indexing for priority URLs
  4. Enable Email Alerts for coverage issues
- [ ] **Bing Webmaster Tools**
  1. Import site structure from Google
  2. Submit sitemap
  3. Configure crawl control settings

### Monitoring & Optimization (Tier 2 - Complete in Week 2)
- [ ] **Core Web Vitals**
  - [ ] Set up Google Analytics 4 (VITE_GA_ID configured)
  - [ ] Monitor LCP, INP, CLS daily
  - [ ] Set alerts for threshold breaches
  - [ ] Document baseline metrics
- [ ] **Performance Monitoring**
  - [ ] Enable Vercel Web Analytics
  - [ ] Set up error tracking
  - [ ] Monitor 404 rates on redirects
- [ ] **Traffic Analysis**
  - [ ] Track organic search traffic
  - [ ] Monitor conversion funnel (WhatsApp clicks)
  - [ ] Identify top-performing pages

## Deployment Timeline

**Today (2026-05-17):**
- [x] Phase 4 development complete
- [x] PR created & ready for merge
- [ ] Merge to main
- [ ] Fix Vercel OR switch to Netlify
- [ ] Deploy to production

**Week 1 (2026-05-17 to 2026-05-23):**
- [ ] Domain live on mychef.id
- [ ] GSC & Bing submission complete
- [ ] Core Web Vitals baseline recorded
- [ ] Monitor 404 redirect rates

**Week 2-4 (2026-05-24 to 2026-06-06):**
- [ ] SEO performance review
- [ ] Identify quick-win optimizations
- [ ] Plan Phase 5 improvements

## Rollback Plan

If production deployment fails:
1. Keep development branch active
2. Switch DNS back to previous host
3. Investigate Vercel errors in detail
4. Consider alternative: Netlify/Cloudflare Pages

## Contact & Support

- **Domain**: mychef.id (pending DNS configuration)
- **GitHub PR**: #2 (auto-improve → main)
- **Vercel Project**: prj_JKAV2YYEw5PoBqBxOc1hn2FpPqHB
- **Issue**: Build failing on Vercel (TS/Node mismatch?)
