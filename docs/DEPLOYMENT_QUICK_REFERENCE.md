# Deployment Quick Reference Card

**Launch Date:** 2026-05-17  
**Deploy Window:** ~50 minutes (T+0 to T+50)  
**Post-Deploy Wait:** 10-15 min for DNS propagation

---

## 📍 QUICK LINKS

| What | Where |
|------|-------|
| Netlify Dashboard | https://app.netlify.com |
| Repository | https://github.com/ddandanell/master3mychef |
| Branch to Deploy | `auto-improve/core-web-vitals-phase4` |
| Live Site (target) | https://mychef.id |
| Verification Script | `pnpm verify` (expect: 7/7 PASS) |

---

## ⚡ DEPLOYMENT SEQUENCE (Copy & Paste Order)

### PHASE 1: Netlify Connection (15 min)

```
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Select GitHub (authorize if needed)
4. Choose: ddandanell/master3mychef
5. Select branch: auto-improve/core-web-vitals-phase4
6. Build command: pnpm build
7. Publish dir: dist
8. Add env vars:
   - VITE_GA_ID: [from Google Analytics]
   - VITE_GTM_ID: [from Google Tag Manager]
9. Click "Deploy site"
10. Wait for build ✓ (should be ~5 min)
```

### PHASE 2: DNS Setup (15 min)

```
1. In Netlify: Site settings → Domain management → Add custom domain
2. Enter: mychef.id
3. Copy CNAME record (e.g., mychef-id.netlify.app)
4. Go to registrar (GoDaddy/Namecheap/etc)
5. Add DNS record:
   - Type: CNAME
   - Name: mychef
   - Value: [paste from step 3]
6. Save DNS record
7. Return to Netlify, wait for "Connected" status (5-15 min)
```

### PHASE 3: Verify Live (10 min)

```
✓ Test in browser: https://mychef.id
✓ Check routing: /fine-dining, /catering, /events
✓ Check meta tags: Right-click → View Source → search @context
✓ Terminal test:
  curl -I https://mychef.id  # expect 200
  curl https://mychef.id/sitemap.xml | wc -l  # expect 51 URLs
```

---

## 🚨 CRITICAL ENV VARS (Don't Forget!)

```
VITE_GA_ID=G-XXXXXXXXXX        (find: Google Analytics → Admin)
VITE_GTM_ID=GTM-XXXXXXX         (find: Google Tag Manager → Admin)
```

**Must add BEFORE clicking "Deploy site"** or redeploy after adding.

---

## ✅ SUCCESS CHECKLIST

- [ ] Netlify build shows ✓ (green checkmark)
- [ ] DNS propagated (Netlify shows "Connected")
- [ ] https://mychef.id loads in browser
- [ ] All service pages load (fine-dining, catering, events)
- [ ] Meta tags in page source (search for `@context`)
- [ ] Sitemap accessible: https://mychef.id/sitemap.xml
- [ ] No 404 or 502 errors
- [ ] PageSpeed: LCP < 2.75s (Day 1 acceptable: +10%)

---

## 🆘 QUICK FIXES

| Problem | Solution |
|---------|----------|
| Build fails | Check Netlify logs → add missing env var → redeploy |
| Domain won't connect | Wait 15 min for DNS → verify registrar has CNAME |
| Pages show 404 | netlify.toml SPA rule missing → redeploy |
| Meta tags missing | Run local `pnpm build` → check dist/ folder |
| Slow load times (Day 1) | Normal on first deploy, monitor on Day 2+ |

---

## 📍 CHECKPOINTS

| Time | What | Expected |
|------|------|----------|
| T+0 | Netlify connect started | Site → New project |
| T+10 | Build in progress | Netlify logs show "Building..." |
| T+15 | Build complete | ✓ deployed, temporary URL shown |
| T+20 | DNS configured | Registrar has CNAME record |
| T+30 | DNS propagating | Netlify → pending → connected |
| T+50 | Live site ready | https://mychef.id → 200 OK |

---

## 📱 POST-DEPLOYMENT (Same day, T+2h+)

1. **Google Search Console**
   - Add property: https://mychef.id
   - Verify via HTML file
   - Submit sitemap.xml
   - Request indexing for 8 pillar pages (see GSC_SUBMISSION_CHECKLIST.md)

2. **Day 1 Monitoring** (see DAY1_LAUNCH_MONITORING.md)
   - Core Web Vitals baseline
   - Analytics firing check
   - Cross-browser test

---

## 📞 ROLLBACK (If things go wrong)

**Instant rollback:**
```
Netlify → Deploys → click previous successful deploy → Publish
(takes ~2 minutes)
```

**DNS rollback:**
```
Registrar → remove/update CNAME → point to old host
(propagates in 15-30 min)
```

---

**Prepared by:** Claude Code  
**Ready:** 2026-05-17  
**Status:** Production-ready for deployment
