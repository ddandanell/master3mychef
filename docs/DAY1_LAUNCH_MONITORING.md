# Day 1 Launch Monitoring Checklist

**Launch Date:** 2026-05-17  
**Monitoring Window:** T+0 to T+24h (2026-05-17 through 2026-05-18)  
**Owner:** Technical Lead + SEO Lead  
**Purpose:** Verify production stability and begin SEO indexing process

---

## 🚀 PRE-LAUNCH (T-30 minutes)

### Final Verification
- [ ] Run `pnpm verify` locally (expect: 7/7 PASS)
- [ ] Verify current branch: `git branch` (should be: `auto-improve/core-web-vitals-phase4`)
- [ ] Check git log: last commit should be deployment-ready
- [ ] Clear browser cache and cookies
- [ ] Have PR #2 open in browser for reference

### Environment Check
- [ ] Netlify account logged in (https://app.netlify.com)
- [ ] Domain registrar account logged in (GoDaddy, Namecheap, etc.)
- [ ] Google Analytics account ready
- [ ] Google Tag Manager account ready
- [ ] Google Search Console account ready
- [ ] Terminal ready with test tools (curl, jq if available)

---

## 📡 DEPLOYMENT PHASE (T+0 to T+50 minutes)

**Follow:** DEPLOYMENT_HANDOFF.md exactly (do not deviate)

- [ ] T+0:00 - Netlify connection started
- [ ] T+15:00 - DNS configuration started
- [ ] T+30:00 - Live site testing started
- [ ] T+50:00 - All tests passing, site live at https://mychef.id

---

## 🔍 IMMEDIATE LIVE SITE TESTS (T+50 to T+70 minutes)

### Core Functionality
- [ ] Homepage loads in browser (https://mychef.id)
- [ ] Load time < 3 seconds (acceptable on Day 1)
- [ ] All nav links present and clickable
- [ ] Hero image displays
- [ ] CTA buttons are visible and functional

### Route Testing (Sample 5 Key Routes)
- [ ] `/` (homepage) → 200 status, loads <3s
- [ ] `/fine-dining` → 200 status
- [ ] `/catering` → 200 status
- [ ] `/locations` → 200 status
- [ ] `/journal` → 200 status

### Redirect Testing (Sample 3 Old URLs)
- [ ] Visit an old URL from _redirects file
- [ ] Browser redirects without 404 error
- [ ] Final URL is correct new page
- [ ] Content loads properly on new URL

### SEO Element Verification
- [ ] Right-click → View Page Source
- [ ] Search for: `<meta property="og:title"` → found ✓
- [ ] Search for: `@context` → found (schema markup) ✓
- [ ] Search for: `<title>` → page-specific title present ✓

### Terminal Tests
```bash
# Test 1: HTTP Status
curl -I https://mychef.id
# Expected: HTTP/2 200 (NOT 404, 502, 503)

# Test 2: Robots.txt
curl https://mychef.id/robots.txt | head -5
# Expected: "User-agent", "Disallow", "Allow" present

# Test 3: Sitemap
curl https://mychef.id/sitemap.xml | grep "<url>" | wc -l
# Expected: Output should be ~51 (51 URLs)

# Test 4: DNS Resolution
nslookup mychef.id
# Expected: Should resolve to Netlify nameservers
```

- [ ] curl -I returns 200 status
- [ ] robots.txt accessible and contains rules
- [ ] sitemap.xml returns XML with 51 URLs
- [ ] DNS resolves correctly

---

## ⚡ CORE WEB VITALS CHECK (T+70 to T+90 minutes)

1. Go to: https://pagespeed.web.dev/?url=https%3A%2F%2Fmychef.id
2. Wait for analysis (takes ~30 seconds)
3. Record scores:

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | _____ | ☐ Pass / ☐ Warn |
| INP (Interaction to Next Paint) | < 200ms | _____ | ☐ Pass / ☐ Warn |
| CLS (Cumulative Layout Shift) | < 0.1 | _____ | ☐ Pass / ☐ Warn |
| FCP (First Contentful Paint) | < 1.5s | _____ | ☐ Pass / ☐ Warn |

**Acceptable Day 1 Variance:** ±10% above targets (LCP < 2.75s, INP < 220ms)

If any metric is >20% above target:
- Document in notes
- Check Netlify build logs for issues
- Do NOT block launch, but flag for Day 2 investigation

---

## 📊 ANALYTICS SETUP (T+90 to T+120 minutes)

### Google Analytics 4
- [ ] Log in: https://analytics.google.com
- [ ] Navigate to Admin → Properties
- [ ] Verify property ID matches `VITE_GA_ID` in Netlify
- [ ] Check: Real-time → Active users (should show 1-2 if you're on the site)
- [ ] Verify: gtag.js script loading (check Page Source for `ga-GA-XXXXXXXXX`)

### Google Tag Manager
- [ ] Log in: https://tagmanager.google.com
- [ ] Verify container ID matches `VITE_GTM_ID` in Netlify
- [ ] Check: Preview mode shows tag firing
- [ ] Publish any pending changes

---

## 🔗 GOOGLE SEARCH CONSOLE SETUP (T+2h, can do in parallel)

**Note:** GSC may take 1-2 minutes to respond; do not rush

1. Go to: https://search.google.com/search-console
2. Click "Add property"
3. Select: URL prefix (https://mychef.id)
4. Choose verification method: HTML file
5. Download file to: `/tmp/google-verifyXXXX.html`
6. Deploy to Netlify:
   ```bash
   # Copy file to public/ folder (or ask Netlify support for file upload)
   cp /tmp/google-verifyXXXX.html public/
   # Redeploy (or it will deploy with next code push)
   ```
7. Verify in GSC (wait for green checkmark)

- [ ] Property added to GSC
- [ ] Domain verification in progress
- [ ] Domain verified ✓ (green checkmark)

**Next (after verification):**
- [ ] Navigate to Sitemaps section
- [ ] Click "Add/test sitemap"
- [ ] Enter: `sitemap.xml`
- [ ] Confirm submission (look for green checkmark)

---

## 🚨 EMERGENCY RESPONSE TABLE

If any of these occur in first 24h:

| Symptom | Cause | Fix | Owner |
|---------|-------|-----|-------|
| Site returns 404 | SPA routing not configured | Check netlify.toml, re-deploy | Tech Lead |
| Pages 404 but sitemap has URLs | _redirects not read | Manually add SPA rule in Netlify UI | Tech Lead |
| Meta tags missing from source | Build didn't inject tags | Run local `pnpm build`, check dist/ | Tech Lead |
| Domain doesn't resolve | DNS propagation delay | Wait 15 min, check registrar settings | Tech Lead |
| Domain shows "pending" in Netlify | CNAME not propagated | Verify registrar has correct CNAME | Tech Lead |
| 502 Bad Gateway errors | Netlify build failed | Check Netlify → Deploys → build log | Tech Lead |
| Google Search Console won't verify | Verification file not accessible | Upload file to public/, redeploy | Tech Lead |
| GA4 shows 0 users | Tag not firing | Check gtag in Page Source, verify VITE_GA_ID | Tech Lead |

---

## 📋 HOURLY CHECK (First 4 hours: T+50m to T+5h)

| Time | Task | Check |
|------|------|-------|
| T+50m | Site live verification | ✓ All routes 200 OK |
| T+1h | Core Web Vitals baseline | ✓ LCP < 2.75s |
| T+2h | Analytics firing check | ✓ GA4 shows users |
| T+3h | GSC verification started | ✓ Domain in review queue |
| T+4h | Monitor Netlify logs | ✓ No errors, builds stable |

---

## 📱 CROSS-BROWSER SPOT CHECK (T+5h to T+6h)

Test on:
- [ ] Chrome (desktop) - homepage, one service page
- [ ] Safari (desktop) - homepage, one service page
- [ ] Firefox (desktop) - homepage, one service page
- [ ] Mobile Safari (iOS) - homepage, test touch interactions
- [ ] Chrome Mobile (Android) - homepage, test touch interactions

For each:
- [ ] Page loads without errors
- [ ] Images render correctly
- [ ] Text is readable
- [ ] CTA buttons work
- [ ] No console errors

---

## 🌙 END-OF-DAY REPORT (T+24h, 2026-05-18 morning)

Create a brief summary:

```
LAUNCH DAY SUMMARY - 2026-05-17

✅ Deployment Status: LIVE
✅ Site Stability: STABLE (no 5xx errors)
✅ Analytics: Firing correctly (X users recorded)
✅ Core Web Vitals: Within targets (LCP X.Xs, INP Xms, CLS X.XX)
✅ GSC Status: Verification [in-progress / complete]

⚠️ Issues: [none / list any alerts]

📊 Metrics Captured:
- LCP: ___ s
- INP: ___ ms
- CLS: ___ 
- GA4 Users: ___
- Pageviews: ___

Next: Begin GSC sitemap submission + request indexing for 8 pillar pages (2026-05-18)
```

---

## 📞 ESCALATION CONTACTS

| Issue | Contact | Action |
|-------|---------|--------|
| Netlify build/deploy fails | Check build logs first, then Netlify support | Check logs, verify env vars |
| DNS issues | Domain registrar support | Verify CNAME/A records |
| SEO/indexing questions | See GSC_SUBMISSION_CHECKLIST.md | Follow GSC workflow |
| Performance concerns | Check PageSpeed Insights, then web.dev docs | Profile and optimize |

---

## ✅ Sign-Off

- [ ] All Day 1 monitoring completed
- [ ] Baseline metrics recorded
- [ ] No blocking issues found
- [ ] Ready to begin Phase 2: GSC submission and pillar page indexing

**Monitored By:** ________________________  
**Date Completed:** ________________________  
**Notes:** ________________________________________________________________

---

**Next Phase:** GSC_SUBMISSION_CHECKLIST.md (2026-05-18 onwards)
