# Week 1: Website Go-Live Execution Checklist

## TASK 1: Verify Build is Production-Ready
**Status:** Ready to verify
**Time:** 5 minutes

### Action
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
ls -la dist/
# Expected: index.html, _redirects, 404.html, assets/, sitemap.xml, plus 82+ route folders
wc -l dist/index.html
# Expected: ~200+ lines
grep "G-W0PQH8ZKTF" dist/index.html
# Expected: Should find GA4 ID
```

### Success Criteria
- ✅ dist/ folder exists with all assets
- ✅ index.html contains GA4 ID (G-W0PQH8ZKTF)
- ✅ All route folders present (fine-dining, catering, etc.)

---

## TASK 2: Netlify Deployment (Manual Web Upload)
**Status:** Ready to execute
**Time:** 10 minutes

### Prerequisites
- [ ] Netlify account exists (free account OK for initial deploy)
- [ ] Login to https://app.netlify.com

### Steps

**Option A: Drag & Drop (Simplest)**

1. Open https://app.netlify.com in browser
2. Look for "Create site" or "Deploy new site" button
3. Drag `/Users/openclaw/Downloads/MYCHEF\ .\ MASTER/app/dist/` folder to the Netlify drop zone
4. Wait 5-10 seconds for upload
5. Netlify automatically generates preview URL (e.g., `https://mychef-abc123.netlify.app`)
6. Click "Visit site" to verify it loads

**Option B: ZIP Upload (If drag-drop fails)**

1. Create ZIP of dist folder:
```bash
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
zip -r mychef-dist.zip dist/
```

2. Upload mychef-dist.zip to Netlify via web interface
3. Netlify automatically extracts and deploys

### Success Criteria
- ✅ Netlify generates preview URL
- ✅ Preview URL loads without errors
- ✅ All routes accessible (test /fine-dining, /catering, /events-weddings)
- ✅ Home page displays correctly

**Capture Preview URL:** `https://[SITENAME].netlify.app`

---

## TASK 3: Verify GA4 is Firing
**Status:** Ready to test
**Time:** 5 minutes

### Steps

1. Visit your preview URL from Task 2
2. Open Chrome DevTools: `Cmd+Option+I` (Mac) or `Ctrl+Shift+I` (Windows)
3. Go to Network tab
4. Filter for "collect" in the search box
5. Reload page
6. Look for requests to `google-analytics.com` with `G-W0PQH8ZKTF` in the URL parameters

### Expected Result
You should see at least 2-3 network requests to Google Analytics with your GA4 ID visible in the URL parameters.

### Success Criteria
- ✅ GA4 requests visible in DevTools Network tab
- ✅ GA4 ID (G-W0PQH8ZKTF) appears in request parameters
- ✅ Page view events firing on load

---

## TASK 4: Wire mychef.id Domain to Netlify
**Status:** Requires registrar access
**Time:** 15 minutes + 24-48 hours DNS propagation

### Prerequisites
- [ ] You own/control mychef.id domain
- [ ] You have access to domain registrar (GoDaddy, Namecheap, etc.)
- [ ] You have the Netlify site name from Task 2 (e.g., "mychef-abc123")

### Steps in Netlify Dashboard

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter: `mychef.id`
4. Netlify will show you the DNS records to add:
   - **Option 1:** Netlify nameservers (simplest, takes 24 hours)
   - **Option 2:** CNAME record (faster, works with existing registrar)

### If Using Netlify Nameservers (Simplest)

1. Copy Netlify's 4 nameserver addresses
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Find DNS/Nameserver settings
4. Replace existing nameservers with Netlify's 4 nameservers
5. Save and wait 24-48 hours for propagation

### If Using CNAME Record (Faster, if you have other DNS records)

1. Go to your domain registrar DNS settings
2. Add new DNS record:
   - **Type:** CNAME
   - **Name:** `www`
   - **Value:** `[your-netlify-site-name].netlify.app`
   
3. Optional: Add A record for root domain (@)
   - **Type:** A
   - **Name:** `@`
   - **Value:** `75.2.60.5` (Netlify load balancer)
4. Save

### Verification (After Propagation)

```bash
# Check if domain is pointing to Netlify
dig mychef.id
# Should show Netlify IPs

# Check if HTTPS works
curl -I https://mychef.id
# Should return: HTTP/2 200
```

### Success Criteria
- ✅ DNS records created in registrar
- ✅ `https://mychef.id` returns HTTP 200
- ✅ Domain loads myCHEF website (not registrar placeholder)
- ✅ HTTPS certificate auto-installed (Netlify handles this)

---

## TASK 5: Google Search Console Setup
**Status:** Ready to execute
**Time:** 10 minutes

### Steps

1. Go to https://search.google.com/search-console
2. Click **+ Create property**
3. Select **URL prefix** option
4. Enter: `https://mychef.id`
5. Verify ownership (Netlify HTML file method):
   - Download HTML verification file from GSC
   - Place it in `/Users/openclaw/Downloads/MYCHEF\ .\ MASTER/app/public/`
   - Rebuild and redeploy to Netlify
   - Click "Verify" in GSC
6. Wait for verification (can take 5-60 minutes)

### After Verification

1. Go to **Sitemaps** in GSC left menu
2. Click **Add new sitemap**
3. Enter: `https://mychef.id/sitemap.xml`
4. Click **Submit**
5. GSC will crawl and index all URLs in sitemap

### Success Criteria
- ✅ Property verified in GSC
- ✅ Sitemap submitted and indexed
- ✅ Coverage report shows 82+ pages indexed
- ✅ "Sitemaps" section shows "Success" status

---

## TASK 6: Netlify _redirects Verification
**Status:** Verify already in place
**Time:** 5 minutes

### Steps

1. Verify `_redirects` file is in dist/:
```bash
cat "/Users/openclaw/Downloads/MYCHEF . MASTER/app/dist/_redirects"
# Should show:
# /*  /index.html  200
```

2. Test SPA routing (all non-existent routes should load home page):
```bash
curl -I https://mychef.id/nonexistent-route
# Should return: HTTP/2 200 (not 404)

curl -I https://mychef.id/fine-dining
# Should return: HTTP/2 200
```

### Success Criteria
- ✅ _redirects file exists in dist/
- ✅ SPA routing works (unknown routes → index.html)
- ✅ All known routes accessible

---

## TASK 7: Site Health Verification
**Status:** Ready to test
**Time:** 10 minutes

### Test All Key Routes

```bash
SITE="https://mychef.id"  # or your preview URL if not live yet

# Test main routes
curl -I $SITE
curl -I $SITE/fine-dining
curl -I $SITE/catering
curl -I $SITE/events-weddings
curl -I $SITE/about
curl -I $SITE/contact
curl -I $SITE/404

# Expected: HTTP/2 200 for all existing routes
# 404 route should return 200 (loaded as index.html, React handles 404)
```

### Check Load Time

```bash
# Check homepage load time
time curl -o /dev/null -s -w "%{time_total}\n" $SITE
# Target: < 3 seconds for first load
```

### Success Criteria
- ✅ All routes return HTTP 200
- ✅ Home page loads in < 3 seconds
- ✅ No console errors in DevTools
- ✅ Images loading properly

---

## TASK 8: WhatsApp Bot Verification
**Status:** Verify already live
**Time:** 2 minutes

### Steps

1. Message the myCHEF WhatsApp number from your phone
2. Expected: Bot responds with greeting within 10 seconds
3. Test inquiry: Type "How much does catering cost?"
4. Expected: Bot responds with helpful message or escalates to human

### Success Criteria
- ✅ WhatsApp bot responds within 10 seconds
- ✅ Initial greeting message sent automatically
- ✅ Able to send inquiry (captured in system)

---

## CRITICAL CHECKS (BEFORE DECLARING SUCCESS)

- [ ] Website accessible at `https://mychef.id` (or preview URL)
- [ ] GA4 firing in DevTools Network tab
- [ ] Sitemap visible in GSC (82+ pages indexed)
- [ ] All 5 main routes loading (home, fine-dining, catering, events, about)
- [ ] WhatsApp bot responding to inquiries
- [ ] No browser console errors
- [ ] HTTPS working (green lock icon in address bar)
- [ ] Homepage takes < 3 seconds to load

---

## IF SOMETHING FAILS

**Problem: Netlify deployment fails**
→ Try ZIP upload instead of drag-drop
→ Check that dist/ folder is not empty
→ Verify netlify.toml exists in app/ directory

**Problem: GA4 not firing**
→ Check GA4 ID in index.html (should be G-W0PQH8ZKTF)
→ Clear browser cache and reload
→ Check that gtag script loaded (inspect Network → filter "gtag")

**Problem: Routes not loading / 404 errors**
→ Verify _redirects file exists in dist/
→ Check SPA redirect rule: `/*  /index.html  200`
→ Rebuild and redeploy to Netlify

**Problem: Domain not resolving**
→ Wait 24 hours for DNS propagation
→ Verify DNS records created in registrar
→ Run `dig mychef.id` to check propagation status

**Problem: GSC not verifying**
→ Make sure HTML verification file is in public/ folder
→ Rebuild and redeploy after adding file
→ Try alternate verification method (DNS CNAME)

---

## WEEK 1 COMPLETION CHECKLIST

**By end of Week 1, you should have:**
- [ ] Website live at https://mychef.id (or preview URL)
- [ ] GA4 analytics firing and data flowing
- [ ] Sitemap submitted to Google Search Console
- [ ] Domain pointing to Netlify (or preview URL active)
- [ ] WhatsApp bot operational and capturing inquiries
- [ ] First customer inquiry received and tracked
- [ ] Founder Dashboard skeleton created (weekly KPIs in Sheets)

**Success Metric:** 
- 1-2 customers inquire via WhatsApp or contact form
- Website loads reliably with no errors
- GA4 tracking 20+ page views

---

## NEXT STEPS (Week 2 onwards)

Once Week 1 complete:
- Begin brand photography shoot (5-day sprint)
- Create customer segment mapping (7 segments → messaging)
- Start Tier 1 content creation (20 high-priority pages)
- Hire content editor/writer
- Design website visual identity refresh
- Begin AI sales agent training data prep
