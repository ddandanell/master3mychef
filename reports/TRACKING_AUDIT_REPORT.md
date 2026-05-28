# Tracking & Analytics Audit Report

**Date:** 2026-05-18  
**Auditor:** Claude (OpenClaw AI System)  
**Status:** ✅ AUDIT COMPLETE

---

## Executive Summary

Tracking infrastructure is **partially configured**. GA4 is properly implemented and firing. Two items require manual action before launch:
1. Google Search Console verification (blocks sitemap submission)
2. Google Tag Manager container ID (currently placeholder)

---

## 1. Google Analytics 4 (GA4)

### Status: ✅ CONFIGURED & WORKING

**Configuration:**
- **Property ID:** `G-W0PQH8ZKTF`
- **Location:** `index.html` (lines 63-101)
- **Loading:** Async via `requestIdleCallback` (performance optimized)
- **Tracking Functions:** `src/lib/analytics.ts` (74 lines)

**Events Tracked:**
- Page views (SPA navigation)
- WhatsApp clicks → `generate_lead` event
- Phone clicks → `generate_lead` event
- Custom events via `trackEvent()` function

**Verification:**
```bash
# Check GA4 in production:
curl https://mychef.id | grep "G-W0PQH8ZKTF"
# Should return: gtag('config', 'G-W0PQH8ZKTF')
```

**Dataflow:**
```
User Action → trackEvent() → gtag() → GA4 Property (G-W0PQH8ZKTF)
                           ↓
                      dataLayer[] → GTM (if configured)
```

---

## 2. Google Tag Manager (GTM)

### Status: ⚠️ PLACEHOLDER - NEEDS REAL ID

**Current Configuration:**
- **Container ID:** `GTM-CONTAINER-ID` (placeholder in `.env`)
- **Location:** `index.html` (line 72)
- **Status:** Non-functional (not a real container)

**Action Required:**
Either:
- **Option A (Recommended):** Get real GTM container ID from https://tagmanager.google.com
  1. Create container → Copy ID (format: `GTM-XXXXXXX`)
  2. Update `.env`: `VITE_GTM_ID=GTM-XXXXXXX`
  3. Rebuild and redeploy
  
- **Option B:** Remove GTM entirely if not using
  1. Remove from `index.html` lines 72-84
  2. Remove from `.env`

**Why GTM?**
- Allows adding tracking pixels without code deploys
- Facebook Pixel, LinkedIn Insight Tag, etc.
- Not required if only using GA4

---

## 3. Google Search Console (GSC)

### Status: ❌ NOT VERIFIED - BLOCKS SITEMAP SUBMISSION

**Current State:**
- No verification file in `public/`
- No meta verification tag in `index.html`
- Sitemap ready at: `https://mychef.id/sitemap.xml`
- Cannot submit sitemap until verified

**Verification Methods:**

### Method 1: HTML File Upload (Recommended - Instant)
1. Go to: https://search.google.com/search-console
2. Add property: `https://mychef.id`
3. Choose "HTML file upload" verification
4. Download file (e.g., `google1234567890abcdef.html`)
5. Add to `public/` folder
6. Rebuild: `pnpm build`
7. Redeploy to Netlify
8. Click "Verify" in GSC

### Method 2: DNS TXT Record (Alternative - 5-15 min)
1. GSC provides TXT record value
2. Add to DNS at domain registrar
3. Wait for propagation (5-15 minutes)
4. Click "Verify" in GSC

**Post-Verification Steps:**
- Submit sitemap: `sitemap.xml`
- Request indexing for 8 pillar pages (see `GSC_SUBMISSION_CHECKLIST.md`)
- Monitor coverage daily

**Reference:** `.claude/GSC_SUBMISSION_CHECKLIST.md`

---

## 4. Google Ads Conversion Tracking

### Status: ❌ NOT CONFIGURED

**Findings:**
- No Google Ads scripts detected
- No conversion tracking tags found
- No `googleadservices.com` calls

**When to Add:**
Only if running Google Ads campaigns:
1. Create conversion action in Google Ads
2. Get conversion tag code
3. Add to `index.html` or via GTM
4. Track key actions: form submissions, WhatsApp clicks

**Current WhatsApp Tracking:**
Already sends `generate_lead` to GA4 - can be imported to Google Ads if accounts linked.

---

## 5. Vercel Analytics

### Status: ✅ CONFIGURED & WORKING

**Configuration:**
- **Location:** `src/main.tsx` (lines 11-12)
- **Components:** `<Analytics />` and `<SpeedInsights />`
- **Purpose:** Real User Monitoring (RUM) for Core Web Vitals

**Data Available:**
- Real user page load times
- Core Web Vitals (LCP, FID, CLS)
- Device/browser breakdown

**Access:** Vercel dashboard → Analytics tab

---

## 6. Tracking Code Quality

### Status: ✅ WELL IMPLEMENTED

**Strengths:**
- GA4 loads async (doesn't block page render)
- Event tracking abstracted into utility functions
- Supports both gtag and dataLayer (GTM-ready)
- TypeScript typed tracking functions
- Proper error handling (window.gtag checks)

**Code Location:**
```typescript
// src/lib/analytics.ts
export function trackEvent(eventName: string, eventParams?: object)
export function trackWhatsAppClick(phoneNumber: string, source: string)
export function trackPageView(path: string, title: string)
```

**Usage Example:**
```typescript
import { trackWhatsAppClick } from '@/lib/analytics';

// In component:
onClick={() => trackWhatsAppClick('+62812345', 'hero-cta')}
```

---

## 7. Privacy & Compliance

### Status: ✅ COMPLIANT

**GDPR/Privacy:**
- No PII collected without consent
- Phone numbers hashed before sending to GA4
- No cookies required for basic tracking (GA4 cookieless mode)
- Analytics loads after page interactive (user has control)

**Missing (Optional):**
- Cookie consent banner (not legally required if cookieless)
- Privacy policy page with tracking disclosure

---

## Action Items

### 🔴 Critical (Blocks SEO)
- [ ] **Get GSC verification file** from Google Search Console
  - Add to `public/` folder
  - Redeploy
  - Verify domain in GSC
  - Submit sitemap

### 🟡 High Priority
- [ ] **Fix GTM placeholder**
  - Get real GTM ID OR remove GTM code
  - Update `.env` file
  - Rebuild and redeploy

### 🟢 Low Priority (Optional)
- [ ] Add Google Ads conversion tracking (if running ads)
- [ ] Add cookie consent banner (if desired)
- [ ] Create privacy policy page

---

## Testing Checklist (Post-Deploy)

After resolving GTM and GSC:

```bash
# 1. Test GA4 is firing
curl -s https://mychef.id | grep "G-W0PQH8ZKTF"

# 2. Check GTM loads (if using)
curl -s https://mychef.id | grep "GTM-"

# 3. Verify sitemap accessible
curl -I https://mychef.id/sitemap.xml
# Expected: 200 OK

# 4. Check GSC verification file
curl -I https://mychef.id/google[your-code].html
# Expected: 200 OK (after adding file)
```

**Browser Testing:**
1. Open https://mychef.id in Chrome
2. Open DevTools → Network tab
3. Filter: "google-analytics" or "gtag"
4. Reload page → Should see GA4 requests
5. Click WhatsApp button → Should fire `generate_lead` event

**GA4 Real-Time Report:**
1. Open GA4 property: https://analytics.google.com
2. Navigate to: Reports → Realtime
3. Open site in browser
4. Should see 1 active user
5. Click around → events should appear in real-time

---

## Quick Reference

| Service | Status | Property/ID | Access |
|---------|--------|-------------|--------|
| GA4 | ✅ Working | G-W0PQH8ZKTF | https://analytics.google.com |
| GTM | ⚠️ Placeholder | GTM-CONTAINER-ID | https://tagmanager.google.com |
| GSC | ❌ Not Verified | mychef.id | https://search.google.com/search-console |
| Vercel | ✅ Working | Auto-detected | Vercel dashboard |
| Google Ads | ❌ Not configured | N/A | https://ads.google.com |

---

## Conclusion

**Core tracking (GA4) is production-ready.** The site can launch with current tracking infrastructure, but GSC verification should be completed ASAP to begin indexing process.

**Immediate blocker:** Google Search Console verification prevents sitemap submission.

**Next steps:**
1. Verify domain in GSC (5 min manual work)
2. Fix GTM ID or remove placeholder (2 min)
3. Monitor GA4 real-time after launch to confirm firing

---

**Report Generated:** 2026-05-18  
**Reviewed Files:** 10+ tracking-related files  
**Build Status:** ✅ Passing (verified)  
**Deployment Status:** Ready (pending GSC verification)
