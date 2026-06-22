# MYCHEF Monitoring Checklist — Launch Day (May 18)
## Critical Path: T+0 to T+24 Hours

**Target Launch Date**: 18 May 2026  
**Monitoring Owner**: Michael (Tech) + David (Product)  
**Reference**: DAY1_LAUNCH_MONITORING.md + DEPLOYMENT_READINESS.md  

---

## PRE-DEPLOYMENT CHECKS (T-2 hours)

### GA4 & GTM Setup (Complete by T-2h)
- [ ] **GA4 ID captured** (from Google Analytics admin)
  - Owner: David
  - Value format: `G-XXXXXXXXXX`
  - Status: [PENDING]
- [ ] **GTM ID captured** (from Google Tag Manager)
  - Owner: David
  - Value format: `GTM-XXXXXXX`
  - Status: [PENDING]
- [ ] **Netlify env vars configured**
  - Owner: Michael
  - Action: Settings → Environment Variables → Add VITE_GA_ID and VITE_GTM_ID
  - Status: [PENDING]
- [ ] **Verify env vars injected into build**
  - Owner: Michael
  - Command: Check `dist/index.html` for GA4 script tag
  - Status: [PENDING]

### Branch & Git Verification (Complete by T-2h)
- [ ] **Branch ready**: `auto-improve/core-web-vitals-phase4`
  - Owner: Michael
  - Check: `git status` (clean working tree)
  - Status: ✅ DONE
- [ ] **All commits pushed**: `git push origin`
  - Owner: Michael
  - Check: GitHub shows all commits
  - Status: ✅ DONE
- [ ] **Build command verified**: `pnpm build` (< 5s, no errors)
  - Owner: Michael
  - Status: ✅ DONE (4.47s recorded)

---

## T+0: DEPLOYMENT EXECUTION (T+0 to T+15)

### Netlify Deployment
- [ ] **GitHub connected to Netlify**
  - Owner: Michael
  - Action: app.netlify.com → "Add new site" → Connect GitHub
  - Time: ~5 min
  - Status: [PENDING]
- [ ] **Repository selected**: `ddandanell/master3mychef`
  - Owner: Michael
  - Branch: `auto-improve/core-web-vitals-phase4`
  - Status: [PENDING]
- [ ] **Build settings configured**
  - Owner: Michael
  - Build command: `pnpm build`
  - Publish dir: `dist`
  - Status: [PENDING]
- [ ] **Environment variables added**
  - Owner: Michael
  - Variables: VITE_GA_ID, VITE_GTM_ID (from above)
  - Status: [PENDING]
- [ ] **Deployment triggered**
  - Owner: Michael
  - Action: Click "Deploy site"
  - Monitor: Build logs in Netlify dashboard
  - Time to completion: ~5-10 min
  - Status: [PENDING]
- [ ] **Deployment successful**
  - Owner: Michael
  - Check: Netlify dashboard shows "Deploy successful"
  - Status: [PENDING]

**Estimated Time**: T+0 to T+15 (15 minutes)

---

## T+15: DNS CONFIGURATION (T+15 to T+30)

### Domain Setup
- [ ] **Domain registrar access**
  - Owner: Michael
  - Registrar: [GoDaddy / Namecheap / Other]
  - Login: [Credentials stored securely]
  - Status: [PENDING]
- [ ] **CNAME record copied from Netlify**
  - Owner: Michael
  - Value from Netlify dashboard: [Paste here: ________________]
  - Status: [PENDING]
- [ ] **CNAME record added at registrar**
  - Owner: Michael
  - Type: CNAME
  - Name: `mychef`
  - Value: [From Netlify]
  - TTL: 3600 (or default)
  - Save/Confirm
  - Status: [PENDING]
- [ ] **DNS propagation waiting**
  - Owner: Michael
  - Wait time: 5-15 minutes typical
  - Check: `nslookup mychef.id` (when propagated, shows Netlify IP)
  - Status: [PENDING]
- [ ] **Domain connected in Netlify**
  - Owner: Michael
  - Netlify dashboard: Shows "Connected" next to domain
  - Status: [PENDING]

**Estimated Time**: T+15 to T+30 (15 minutes + 5-15 min propagation)

---

## T+30: VERIFICATION (T+30 to T+50)

### Site Accessibility
- [ ] **Homepage loads**
  - Owner: Michael
  - URL: https://mychef.id
  - Expected: HTTP 200, visible content
  - Time to full page load: [Record: ___ seconds]
  - Status: [PENDING]
- [ ] **All main routes load**
  - Owner: Michael
  - Routes to test:
    - [ ] https://mychef.id/fine-dining → HTTP 200
    - [ ] https://mychef.id/catering → HTTP 200
    - [ ] https://mychef.id/events → HTTP 200
    - [ ] https://mychef.id/pricing → HTTP 200
    - [ ] https://mychef.id/locations → HTTP 200
  - Status: [PENDING]
- [ ] **Meta tags visible**
  - Owner: Michael
  - Action: Right-click homepage → View Page Source → search for `@context`
  - Expected: JSON-LD schema visible
  - Status: [PENDING]

### Performance Verification
- [ ] **Core Web Vitals baseline captured**
  - Owner: Michael
  - Tool: Google PageSpeed Insights (https://mychef.id)
  - Record metrics:
    - LCP: ___ seconds (target: < 2.5s)
    - INP: ___ milliseconds (target: < 200ms)
    - CLS: ___ (target: < 0.1)
  - Status: [PENDING]
- [ ] **Response time acceptable**
  - Owner: Michael
  - Command: `curl -w "@/tmp/curl_time_format.txt" https://mychef.id`
  - Expected: < 2 seconds total
  - Status: [PENDING]

### Analytics Verification
- [ ] **GA4 firing**
  - Owner: Michael
  - Action: Open https://mychef.id in Chrome → DevTools → Network tab → filter "analytics"
  - Expected: Request to `collect?v=2&tid=G-XXXXXXXXXX`
  - Status: [PENDING]
- [ ] **GA4 dashboard shows data**
  - Owner: David
  - URL: https://analytics.google.com
  - Property: myCHEF Bali
  - Check: "Active users right now" shows ≥ 1
  - Status: [PENDING]
- [ ] **GTM firing**
  - Owner: Michael
  - Action: Install Google Tag Manager Assistant browser extension
  - Check: Extension shows GTM container active
  - Status: [PENDING]

### Functional Verification
- [ ] **WhatsApp CTA works**
  - Owner: Michael
  - Action: Click "Book Now" → Should open WhatsApp with pre-filled message
  - Status: [PENDING]
- [ ] **Navigation menu functions**
  - Owner: Michael
  - Test: Click each main nav item (Fine Dining, Catering, Events, etc.)
  - Expected: Pages load, URL changes
  - Status: [PENDING]
- [ ] **Mobile responsive**
  - Owner: Michael
  - DevTools: Toggle device toolbar → test on iPhone 12, iPad, Android
  - Expected: Content readable, no layout breaks
  - Status: [PENDING]

**Estimated Time**: T+30 to T+50 (20 minutes)

---

## T+50: POST-DEPLOYMENT CHECKPOINT

### All Verifications Complete?
- [ ] **Site live at https://mychef.id** ✅
- [ ] **All routes accessible (HTTP 200)** ✅
- [ ] **GA4 firing and recording data** ✅
- [ ] **GTM active and triggering tags** ✅
- [ ] **Core Web Vitals baseline captured** ✅
- [ ] **Performance acceptable (LCP < 2.5s)** ✅
- [ ] **Mobile responsive tested** ✅
- [ ] **Functionality verified (CTAs, nav, etc.)** ✅

**Go/No-Go Decision**: 
- [ ] GO — Proceed with Day 1 monitoring
- [ ] NO-GO — Escalate issue to Michael, resolve before continuing

---

## HOURS T+1 TO T+24: MONITORING PROTOCOL

### Hourly Checks (Automated or Manual)
**T+1h, T+2h, T+4h, T+8h, T+12h, T+24h**

- [ ] **Site uptime**: curl -I https://mychef.id (expect HTTP 200)
- [ ] **GA4 traffic**: Check analytics dashboard (expect 1+ sessions)
- [ ] **Error logs**: Check Netlify deployment logs (expect no new errors)
- [ ] **Response time**: Record curl response time (trend upward? ❌)

### 4-Hour Detailed Check (T+4h)

- [ ] **GA4 data quality**
  - Real-time active users: [# users]
  - Sessions this period: [# sessions]
  - Top pages: [List top 3]
  - Bounce rate: [%]
- [ ] **GTM tag firing verification**
  - Google Analytics tag: ✅ / ❌
  - Custom event tracking: ✅ / ❌
- [ ] **Search Console status**
  - Crawl stats: [Last crawl time]
  - Errors: [# if any]
- [ ] **Sitemaps**
  - Robots.txt accessible: ✅ / ❌
  - Sitemap.xml accessible: ✅ / ❌

### 24-Hour Summary Report (T+24h)

**Created by**: David + Michael  
**Format**: Markdown in app/reports/DAY1_REPORT_2026-05-18.md

```
# Day 1 Launch Report — May 18, 2026

## KPIs
- Uptime: [%]
- GA4 Sessions: [#]
- Avg Page Load Time: [Xs]
- Core Web Vitals Status: All Pass / [Issue]

## Issues Logged
- [Issue 1]: [Severity], [Resolution]
- [Issue 2]: [Severity], [Resolution]

## Team Actions Completed
- [Action]: Completed ✅ / In Progress / Blocked
- [Action]: Completed ✅ / In Progress / Blocked

## Next Steps
- [Follow-up action 1]
- [Follow-up action 2]
```

---

## ESCALATION PROTOCOL

### If Issues Arise

| Issue | Owner | Response Time | Action |
|---|---|---|---|
| Site returns 500 error | Michael | IMMEDIATE | Restart Netlify build or rollback |
| GA4 not firing | Michael + David | 30 min | Check env vars, redeploy |
| DNS not propagating | Michael | 30 min | Check CNAME at registrar, verify TTL |
| Performance degraded (LCP > 3s) | Michael | 1 hour | Check Netlify logs, investigate bundle |
| High bounce rate (> 80%) | David | 2 hours | Review analytics, check content rendering |

### Escalation Contact
**Primary**: Michael (Tech)  
**Secondary**: David (Product)  
**Emergency**: [On-call phone/Slack]

---

## SIGN-OFF & HANDOFF

**Deployment Complete**: _____ (Date/Time)  
**All Checks Passed**: Yes / No  
**Issues Logged**: [#]  
**Critical Issues**: [#]  

**Signed by**:
- Michael (Tech Lead): _____ 
- David (Product Lead): _____

**Next Phase**: Transition to Phase 5 Weekly Monitoring (Mondays, 30-min cadence)

---

**Reference Documents**:
- DEPLOYMENT_READINESS.md
- DEPLOYMENT_QUICK_REFERENCE.md
- PHASE5_ORGANIC_GROWTH.md
- MYCHEF_NORTHSTAR_REPORT_v1.0.md

