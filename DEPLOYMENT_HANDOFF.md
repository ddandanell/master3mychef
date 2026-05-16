# Deployment Handoff: Phase 4 → Production

**Status:** ✅ Ready for Netlify Deployment  
**Date:** 2026-05-17 @ 01:15 UTC  
**All automated work:** Complete  
**Manual work required:** Netlify UI setup + domain DNS

---

## What's Been Prepared

### ✅ Code
- Production build passes (175 KB gzip, optimized)
- TypeScript strict mode: clean
- Meta tags injected into 61 files
- All routes tested on dev server

### ✅ SEO Infrastructure
- Sitemap: 51 canonical URLs + 72 redirects
- robots.txt: Google, Bing, AI crawlers allowed
- Schema markup: LocalBusiness, Service, AggregateRating, FAQ, Breadcrumb
- Open Graph & Twitter Card tags on all pages

### ✅ Deployment Config
- `netlify.toml` committed (build command + SPA routing fallback)
- Environment variables documented (VITE_GA_ID, VITE_GTM_ID)
- Redirect rules configured (_redirects file auto-generated)

### ✅ Documentation
- `PHASE4_DEPLOYMENT_CHECKLIST.md` - Complete deployment runbook
- `GSC_SUBMISSION_CHECKLIST.md` - Google Search Console submission workflow
- `SEO-PAGES-PLAN.md` - Content strategy
- `SEO-REDIRECT-STRATEGY.md` - URL migration plan

### ✅ Git
- Branch: `auto-improve/core-web-vitals-phase4`
- PR #2 created (comprehensive Phase 4 summary)
- All commits pushed to GitHub

---

## What You Need To Do (Manual Steps)

### 🎯 Step 1: Deploy to Netlify

**Location:** https://app.netlify.com  
**Time required:** 10-15 minutes

1. **Connect GitHub repository**
   - Click "New site from Git"
   - Authorize GitHub (if not already)
   - Select: `ddandanell/master3mychef`
   - Branch: `auto-improve/core-web-vitals-phase4`

2. **Configure build settings**
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - (Netlify auto-detects from netlify.toml)

3. **Add environment variables** (before deploying)
   - `VITE_GA_ID`: _____________________ (get from Google Analytics)
   - `VITE_GTM_ID`: _____________________ (get from Google Tag Manager)
   - Add to: Site settings → Environment variables

4. **Trigger deploy**
   - Click "Deploy site"
   - Watch build log (should show ✓ in ~5 minutes)
   - After build: note the temporary `.netlify.app` URL

### 🎯 Step 2: Add Custom Domain

**Location:** Netlify Site Settings → Domain Management  
**Time required:** 5-10 minutes (+ 10-15 min for DNS propagation)

1. **Add custom domain**
   - Click "Add custom domain"
   - Enter: `mychef.id`
   - Netlify generates CNAME or A records

2. **Update DNS at registrar**
   - Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
   - Add CNAME record:
     - Name: `mychef` (or `@` for apex)
     - Value: `mychef-id.netlify.app`
   - OR add A records if provided
   - Save and wait for propagation (usually 10-15 minutes)

3. **Verify domain in Netlify**
   - Netlify checks DNS propagation
   - Status changes from "pending" → "connected"
   - SSL certificate auto-generated (1-2 minutes after connected)

### 🎯 Step 3: Test the Live Site

**Before submitting to Google:**

1. **Browser test**
   - Open https://mychef.id (after DNS propagates)
   - Verify home page loads under 2.5 seconds
   - Test navigation: `/fine-dining`, `/catering`, `/events`
   - Test area pages: `/seminyak`, `/canggu`, `/ubud`
   - Test redirects: visit any old URL from `_redirects`, should redirect without error

2. **SEO verification**
   - Right-click → "View page source"
   - Search for: `<meta property="og:title"` (should find Open Graph tags)
   - Search for: `@context` (should find schema markup)
   - Search for: `<title>` (should have page-specific title)

3. **Terminal check**
   ```bash
   curl -I https://mychef.id
   # Should return: HTTP/2 200 (NOT 404 or 502)
   
   curl https://mychef.id/robots.txt
   # Should return robot rules
   
   curl https://mychef.id/sitemap.xml
   # Should return XML sitemap with 51 URLs
   ```

4. **PageSpeed Insights**
   - Visit: https://pagespeed.web.dev
   - Input: `https://mychef.id`
   - Check scores:
     - LCP (Largest Contentful Paint): < 2.5s ✅
     - INP (Interaction to Next Paint): < 200ms ✅
     - CLS (Cumulative Layout Shift): < 0.1 ✅

---

## What Happens Next (48h After Live)

### 📋 Automatic Actions
- Google's crawler automatically discovers robots.txt
- Google begins crawling based on sitemap priority
- Bing crawler follows

### ⚙️ Manual Actions (from GSC_SUBMISSION_CHECKLIST.md)

1. **Google Search Console**
   - Go to: https://search.google.com/search-console
   - Add property: `https://mychef.id`
   - Verify ownership (HTML file method: instant)
   - Submit sitemap: `sitemap.xml`
   - Request indexing for 8 pillar pages

2. **Monitor indexing**
   - Daily check: Coverage report in GSC
   - Target: All 51 URLs indexed within 1 week
   - Watch for 404 errors (would indicate redirect issues)

3. **(Optional) Bing Webmaster Tools**
   - Go to: https://www.bing.com/webmasters
   - Add site, submit sitemap

---

## 🆘 If Things Go Wrong

### Build fails on Netlify
- Check build log in Netlify (red X usually shows error)
- Common issues:
  - Missing environment variable → add to Netlify
  - Node version → Netlify defaults to Node 20 LTS (should work)
  - Dependency issue → try `npm ci` instead of `npm install` in build command
- Rollback: Netlify → Deploys → click previous successful deploy → Publish

### Domain doesn't resolve
- Verify DNS records at registrar (give 15 minutes for propagation)
- Check: `nslookup mychef.id` (should show Netlify nameservers)
- Netlify DNS: Check site settings → Custom domain for status

### Pages not accessible after deploy
- Netlify SPA fallback issue (unlikely, netlify.toml has it configured)
- Check: Netlify builds → did it read `netlify.toml`?
- Fix: Redeploy or manually add redirect rule in Netlify UI

### Meta tags not showing
- Unlikely, but verify: local `pnpm build` passes first
- Check dist/ folder after build: meta tags injected
- If missing locally, something broke in `scripts/inject-meta.ts`

---

## 📊 Success Criteria

### Deployment: ✅ Complete when
- [ ] Site accessible at https://mychef.id
- [ ] All routes respond with 200 status
- [ ] Meta tags visible in page source
- [ ] Redirects work (old URLs → new pages)
- [ ] Core Web Vitals passing

### SEO: ✅ Complete when
- [ ] Sitemap submitted to GSC
- [ ] 8 pillar pages indexed in Google
- [ ] Coverage report shows 0 errors
- [ ] Organic traffic maintained (90%+ vs pre-launch)

---

## 📝 Documentation Map

| Document | Purpose | User |
|----------|---------|------|
| `PHASE4_DEPLOYMENT_CHECKLIST.md` | Complete deployment runbook | Technical lead |
| `GSC_SUBMISSION_CHECKLIST.md` | Google Search Console setup | SEO/content lead |
| `SEO-PAGES-PLAN.md` | Content strategy | Marketing |
| `SEO-REDIRECT-STRATEGY.md` | URL migration plan | Technical lead |
| `DEPLOYMENT_HANDOFF.md` ← **YOU ARE HERE** | Handoff instructions | Everyone |

---

## 🎯 Timeline

| When | What | Owner |
|------|------|-------|
| **NOW** | Deploy to Netlify + add domain | Technical lead |
| **+1h** | Verify live site (all routes, meta tags, Core Web Vitals) | Technical lead |
| **+24h** | Set up Google Search Console, submit sitemap | SEO lead |
| **+48h** | Request indexing for 8 pillar pages | SEO lead |
| **+1 week** | Monitor Coverage report, identify crawl errors | SEO lead |
| **+2 weeks** | Compare pre/post organic traffic in GA4 | Analytics lead |
| **+4 weeks** | Merge branch to main, prepare Phase 5 | Technical lead |

---

## ✨ Next Phase (After Merge)

Once live and indexed:

**Phase 5: Organic Growth**
- Content gap analysis (identify ranking opportunities)
- Internal linking optimization (cross-link high-authority pages)
- Content updates (enhance pages ranking 11-50)
- Backlink outreach (partner with Bali tourism sites, chef networks)
- Local SEO (Google Business Profile, review management)

---

**Prepared by:** Claude Code  
**Date:** 2026-05-17  
**Status:** Ready for deployment
