# Launch Timeline: myCHEF.id Production Deployment

**Target Launch Date:** 2026-05-17 (TODAY)  
**Estimated Total Time:** 1-2 hours (deployment) + 48-72 hours (indexing)

---

## 🚀 PRE-LAUNCH CHECKLIST (30 minutes before deployment)

### Final Code Verification

```bash
# Run this command to verify everything is production-ready
pnpm verify

# Expected output: 7/7 checks PASSED ✅
```

### Code Review

- [x] All TypeScript errors resolved
- [x] Build passing locally
- [x] Meta tags injected correctly
- [x] Sitemap has 51 URLs
- [x] Redirects configured (72 rules)
- [x] netlify.toml committed
- [x] Environment variables documented

### Git Status

```bash
# Verify working tree is clean
git status

# Expected: nothing to commit, working tree clean
```

---

## 📅 DEPLOYMENT SEQUENCE

### PHASE 1: Netlify Connection (T+0 → T+15 min)

**Location:** https://app.netlify.com  
**Action:** Connect GitHub repository and trigger deployment

| Time | Action | Owner | Notes |
|------|--------|-------|-------|
| T+0:00 | Open Netlify dashboard | Tech Lead | Ensure logged in to correct account |
| T+0:02 | Click "New site from Git" | Tech Lead | Select GitHub authorization |
| T+0:05 | Select repository | Tech Lead | ddandanell/master3mychef |
| T+0:07 | Configure build settings | Tech Lead | Build: `pnpm build`, Publish: `dist` |
| T+0:10 | Add environment variables | Tech Lead | VITE_GA_ID, VITE_GTM_ID |
| T+0:12 | Trigger deployment | Tech Lead | Click "Deploy site" |
| T+0:15 | Monitor build log | Tech Lead | Should show ✓ built in ~5 minutes |

**Success Criteria:** Build completes with status "Published"

---

### PHASE 2: DNS Configuration (T+15 → T+30 min)

**Location:** Domain registrar + Netlify  
**Action:** Add custom domain and update DNS records

| Time | Action | Owner | Notes |
|------|--------|-------|-------|
| T+15:00 | Add custom domain in Netlify | Tech Lead | Enter: mychef.id |
| T+15:05 | Note CNAME/A records provided | Tech Lead | Save these values |
| T+15:10 | Log into domain registrar | Tech Lead | GoDaddy / Namecheap / Google Domains |
| T+15:15 | Add DNS record | Tech Lead | CNAME: mychef-id.netlify.app |
| T+15:20 | Save DNS changes | Tech Lead | Hit "Save" or equivalent |
| T+15:25 | Return to Netlify | Tech Lead | Check status in site settings |
| T+20:00 | Verify DNS propagation | Tech Lead | Status should change to "Connected" |
| T+25:00 | Verify SSL certificate | Tech Lead | Auto-generated, should be active |
| T+30:00 | Confirm domain ready | Tech Lead | Domain accessible over HTTPS |

**Success Criteria:** Status shows "Connected" with valid SSL certificate

---

### PHASE 3: Live Site Testing (T+30 → T+50 min)

**Location:** https://mychef.id  
**Action:** Comprehensive testing of live production environment

| Time | Action | Owner | Acceptance Criteria |
|------|--------|-------|-------------------|
| T+30:00 | Browser test: Home page | Tech Lead | Loads in < 2.5 seconds |
| T+31:00 | Browser test: Service pages | Tech Lead | `/fine-dining`, `/catering`, `/events` all load |
| T+32:00 | Browser test: Area pages | Tech Lead | `/seminyak`, `/canggu`, `/ubud` accessible |
| T+33:00 | Browser test: Redirects | Tech Lead | Old URLs redirect without error |
| T+35:00 | SEO verification | Tech Lead | Meta tags in page source |
| T+37:00 | Schema verification | Tech Lead | `@context` found in page source |
| T+40:00 | Terminal checks | Tech Lead | `curl -I https://mychef.id` → 200 OK |
| T+42:00 | sitemap.xml accessible | Tech Lead | https://mychef.id/sitemap.xml returns XML |
| T+44:00 | robots.txt accessible | Tech Lead | https://mychef.id/robots.txt readable |
| T+46:00 | PageSpeed Insights | Tech Lead | LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| T+50:00 | Final approval | Tech Lead | All checks pass, ready for SEO submission |

**Success Criteria:** 10/10 tests pass, site fully functional

---

## 🔍 POST-LAUNCH MONITORING (24-72 hours)

### Day 1: (T+24h → T+48h)

**Date:** 2026-05-18  
**Owner:** SEO Lead

| Hour | Task | Details |
|------|------|---------|
| 24h | Google Search Console setup | Go to https://search.google.com/search-console |
| 24h | Domain verification | Use HTML file method (fastest) |
| 24h | Sitemap submission | Navigate to Sitemaps → Add sitemap → `sitemap.xml` |
| 25h | Verify sitemap accepted | Check for green checkmark (✓ Submitted) |
| 26h | Request indexing - Pillar pages | Use URL inspection tool for 8 pages (see GSC_SUBMISSION_CHECKLIST.md) |
| 30h | Bing submission (optional) | https://www.bing.com/webmasters → add site |
| 36h | Check coverage report | Verify 0 404 errors, "Valid" count > 0 |
| 48h | GA4 check | Verify organic traffic starting to appear |

**Success Criteria:**
- [ ] GSC property verified and indexed
- [ ] Sitemap showing "Processed" status
- [ ] 8 pillar pages submitted for indexing
- [ ] 0 404 errors in Coverage report
- [ ] Bing submission complete (optional)

---

### Day 2-3: (T+48h → T+72h)

**Date:** 2026-05-19 to 2026-05-20  
**Owner:** SEO Lead

| Task | Frequency | Details |
|------|-----------|---------|
| Monitor Coverage Report | Daily | Watch "Valid" count grow toward 92 |
| Check for crawl errors | Daily | Alert if any 404s appear |
| Monitor organic traffic | Daily | GA4 → Acquisition → Organic Search |
| Keyword ranking | Daily | Note initial rankings (baseline) |
| Core Web Vitals | Daily | PageSpeed Insights → track metrics |
| Check indexation rate | Daily | Estimated 30-50 pages indexed by Day 3 |

---

## ⚡ RAPID RESPONSE: If Issues Occur

### Issue: Build fails on Netlify

**Timeline:** Immediately  
**Resolution:**

1. Check Netlify build log (red X shows error)
2. Common causes:
   - Missing env var → add to Netlify Site Settings
   - Node version → should default to v20 LTS
3. If urgent: Rollback
   - Netlify → Deploys → click previous successful deploy → "Publish"
   - Takes ~2 minutes to revert

### Issue: Domain doesn't resolve (CNAME not working)

**Timeline:** 15+ minutes from DNS update  
**Resolution:**

1. Verify DNS record was saved correctly at registrar
2. Wait up to 30 minutes (DNS propagation)
3. Check: `nslookup mychef.id` (should show Netlify IPs)
4. If still failing after 30 min: Rollback CNAME, try A records instead

### Issue: Pages not accessible after going live

**Timeline:** Immediately  
**Resolution:**

1. Check Netlify build logs (did it read `netlify.toml`?)
2. Verify SPA redirect rule is present
3. If missing: Add manually in Netlify UI or re-deploy

### Issue: Meta tags not showing in page source

**Timeline:** Immediately  
**Resolution:**

1. Verify local `pnpm build` still works
2. Check dist/ folder for injected meta tags
3. If missing locally: Something broke in build scripts
4. If present locally but not deployed: Redeploy

---

## 📊 SUCCESS METRICS (7-day tracking)

Track these metrics daily for one week:

| Metric | Day 1 | Day 2 | Day 3 | Day 7 |
|--------|-------|-------|-------|-------|
| Pages Indexed (GSC) | 1-5 | 10-20 | 30-50 | 70-92 |
| Organic Traffic (GA4) | $0 sessions | 0-2 | 2-5 | 10-20 |
| Average LCP (PageSpeed) | < 2.5s | < 2.5s | < 2.5s | < 2.5s |
| Average INP (PageSpeed) | < 200ms | < 200ms | < 200ms | < 200ms |
| 404 Errors (GSC Coverage) | 0 | 0 | 0 | 0 |
| Redirect Integrity | 100% | 100% | 100% | 100% |

---

## 🎯 NEXT PHASE (After 7-day baseline)

**Week 2 (2026-05-24):**
- Full indexation expected (92/92 pages)
- Organic traffic ramping up
- Keyword rankings appearing in GSC

**Week 3-4 (2026-05-31):**
- Content optimization based on ranking data
- Internal linking improvements
- Backlink outreach begins

**Phase 5 Launch (2026-06-01):**
- Merge `auto-improve/core-web-vitals-phase4` to main
- Begin organic growth initiatives
- Start content gap analysis

---

## 📞 Quick Reference

**Critical Links:**
- Live site: https://mychef.id
- Netlify dashboard: https://app.netlify.com
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/?url=https%3A%2F%2Fmychef.id

**Key Documents:**
- `DEPLOYMENT_HANDOFF.md` — Step-by-step deployment guide
- `GSC_SUBMISSION_CHECKLIST.md` — Google Search Console workflow
- `PHASE4_DEPLOYMENT_CHECKLIST.md` — Complete runbook

**Emergency Contacts:**
- Build issues: Check Netlify logs
- DNS issues: Contact domain registrar support
- SEO questions: Review GSC_SUBMISSION_CHECKLIST.md

---

**Status:** Ready to launch  
**Last Updated:** 2026-05-17  
**Created by:** Claude Code (Auto-improve Phase 4)
