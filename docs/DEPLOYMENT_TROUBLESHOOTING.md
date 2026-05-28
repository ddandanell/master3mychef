# Deployment Troubleshooting Guide

**Purpose:** Emergency response guide for production deployment issues  
**Audience:** Tech Lead, whoever is deploying  
**Reference:** Use alongside DEPLOYMENT_QUICK_REFERENCE.md

---

## 🔴 CRITICAL ISSUES (Block Launch)

### Issue: Netlify Build Fails (Red X on Build Log)

**Symptoms:**
- Netlify deploy status shows ❌ error
- Build log ends with error message
- Temporary .netlify.app URL not generated

**Diagnosis:**

Check build log for these patterns:

```bash
# Step 1: Check build output in Netlify dashboard
Netlify → Deploys → (failed deploy) → View deployment log

# Look for these common errors:
"Error: ENOENT: no such file" → Missing file
"Cannot find module" → Dependency issue
"Permission denied" → File access issue
"VITE_GA_ID is not defined" → Missing env var
```

**Solutions (in order of likelihood):**

| Error Pattern | Cause | Fix |
|---------------|-------|-----|
| `VITE_GA_ID is not defined` | Missing environment variable | Add to Netlify Site settings → Environment variables |
| `Cannot find module 'xyz'` | Node version mismatch | Usually Node 20 LTS works; check netlify.toml Node version |
| `dist folder not found` | Publish directory wrong | Check netlify.toml has `publish = "dist"` |
| `pnpm not found` | Package manager issue | netlify.toml should have `command = "pnpm build"` |
| `TypeScript compilation failed` | Type error in code | Unlikely (pre-verified), but check local build: `pnpm build` |

**Nuclear Option (Rollback):**
```
Netlify → Deploys → (select previous successful deploy) → Publish
(reverts to last working version in ~2 minutes)
```

---

### Issue: Domain Won't Connect (Status: Pending)

**Symptoms:**
- Netlify shows "Awaiting external DNS" (yellow status)
- Status doesn't change to "Connected" after 30 minutes
- CNAME record shows in registrar but Netlify still pending

**Root Causes:**

1. **CNAME not propagated yet** (most common, 80%)
2. **CNAME value incorrect** (registrar entry wrong)
3. **Registrar cache issue** (less common)
4. **DNS propagation is just slow** (can take 30-60 min)

**Diagnosis:**

```bash
# Check if DNS has propagated globally
nslookup mychef.id
# Should show Netlify nameservers like:
# Address: 75.2.60.5
# Address: 99.83.180.238

# Check specific CNAME record
nslookup mychef.mychef.id
# Should point to: mychef-id.netlify.app

# Verbose DNS check
dig mychef.id CNAME
# Should show: mychef.id. IN CNAME mychef-id.netlify.app.
```

**Solutions (in order):**

1. **Wait 5-10 minutes** - DNS propagation can take time
2. **Verify registrar entry:**
   - Go to registrar (GoDaddy, Namecheap, etc.)
   - Check: Name = `mychef` (or `@` for apex)
   - Check: Value = `mychef-id.netlify.app` (exactly as Netlify shows)
   - Check: TTL = 3600 (or default)
   - **Save** if you made changes
3. **Clear local DNS cache:**
   ```bash
   # macOS
   sudo dscacheutil -flushcache
   
   # Windows
   ipconfig /flushdns
   
   # Linux
   sudo systemctl restart systemd-resolved
   ```
4. **Try alternate DNS:**
   - Wait a full 30 minutes before assuming failure
   - Some registrars are slow to propagate
   - Check with: https://dnschecker.org (use their tool)
5. **Contact registrar support** if still pending after 1 hour

**Nuclear Option (Use A Records Instead):**

If CNAME isn't working after 1 hour, try A records:

```
1. In Netlify → check "Connect with A records" option
2. Netlify provides two A record IPs (e.g., 75.2.60.5, 99.83.180.238)
3. In registrar, add two A records:
   - Name: @ (for apex domain)
   - Value: [first IP from Netlify]
   - Add another A record with second IP
4. Save and wait 15-30 minutes
```

---

### Issue: Pages Return 404 (After Domain Connected)

**Symptoms:**
- https://mychef.id loads fine
- https://mychef.id/fine-dining → 404 error
- Only homepage works, all other routes fail

**Root Cause:**
SPA (Single Page Application) routing not configured. Netlify needs to know to redirect all non-existent routes to `/index.html` for React Router to handle them.

**Diagnosis:**

```bash
# Check if netlify.toml was deployed
curl https://mychef.id/.netlify/functions/  # or check Netlify UI

# Check if SPA redirect rule exists
# Should see something like:
# [[redirects]]
# from = "/*"
# to = "/index.html"
# status = 200
```

**Solution:**

1. **Verify netlify.toml is in git:**
   ```bash
   git ls-files | grep netlify.toml  # should exist
   ```

2. **If missing, add it manually in Netlify UI:**
   - Netlify → Site settings → Redirects
   - Add custom redirect:
     - From: `/*`
     - To: `/index.html`
     - Status: 200 (rewrite, not redirect)
   - Save

3. **Or redeploy from git** (usually fixes it)

4. **Verify it worked:**
   ```bash
   curl -I https://mychef.id/fine-dining
   # Should return: HTTP/2 200 (not 404)
   ```

---

## 🟡 MAJOR ISSUES (Significantly Impactful)

### Issue: Meta Tags Not Visible in Page Source

**Symptoms:**
- Open browser DevTools: Right-click → View Page Source
- Search for `@context` or `og:title` → not found
- SEO looks broken

**Diagnosis:**

```bash
# Step 1: Check if build injected tags locally
cd /Users/openclaw/Downloads/MYCHEF\ .\ MASTER/app
pnpm build
cat dist/index.html | grep "@context" | head -1
# Should show something like: <script>{"@context":"https://schema.org"...

# Step 2: Check if deployed version has it
curl https://mychef.id | grep "@context" | head -1
# Should match the local version
```

**Solutions:**

1. **If present locally but not deployed:**
   - Redeploy to Netlify (push new commit or click "Publish" on previous build)
   - Netlify may have cached old version

2. **If not present locally:**
   - Check `scripts/inject-meta.ts` exists
   - Run `pnpm build` locally and check `dist/index.html`
   - If still missing: contact development team (build script issue)

3. **Verify the build:**
   ```bash
   # Check that meta injection ran
   npm run prebuild  # should output: "✓ Injected meta tags: 61 files"
   ```

---

### Issue: Core Web Vitals Way Off (LCP > 5s on Day 1)

**Symptoms:**
- PageSpeed Insights shows LCP 5-10 seconds (acceptable Day 1: < 2.75s)
- Site feels slow to load
- Images take forever to appear

**Possible Causes (in order of likelihood):**

1. **Netlify cold start** (just deployed, normal) → wait 1-2 hours
2. **Hero image too large** → check image size vs. optimizations
3. **Too much JavaScript** → check bundle size
4. **Network latency** → test from different location
5. **Actual performance issue** → needs optimization

**Diagnosis:**

```bash
# Check image sizes
ls -lah src/assets/images/hero*

# Check bundle size
npm run build
du -sh dist/

# Measure with curl
time curl https://mychef.id > /dev/null
# Total time including transfer

# Test with alternative tool
# Visit: https://www.webpagetest.org
# Input: https://mychef.id
# Run test from different regions
```

**Day 1 Reality:**
- First deployment may be 20-30% slower than final state
- Netlify warms up after 1-2 hours of traffic
- Browser caches kick in on subsequent visits
- **Action:** Don't panic on Day 1; monitor on Day 2

**If Still Slow After 24 Hours:**
- Check Netlify deployment size (should be < 500MB)
- Review PageSpeed Insights recommendations
- Check for blocking third-party scripts
- Profile with Chrome DevTools

---

### Issue: GA4 / GTM Tags Not Firing

**Symptoms:**
- PageView events not appearing in GA4
- gtag.js errors in browser console
- Real-time users shows 0 even when you're on site

**Diagnosis:**

```bash
# Step 1: Check if GA ID in page source
curl https://mychef.id | grep "GA-"
# Should show: GA-XXXXXXXXXX

# Step 2: Open site in Chrome → DevTools → Console
# Look for: "gtag is not defined" or similar

# Step 3: Check Netlify env vars
# Netlify → Site settings → Environment variables
# Should have: VITE_GA_ID, VITE_GTM_ID
```

**Solutions:**

1. **If env var missing:**
   - Netlify → Site settings → Environment variables
   - Add: `VITE_GA_ID=G-XXXXXXXXXX` (from GA4)
   - Add: `VITE_GTM_ID=GTM-XXXXXXX` (from GTM)
   - Redeploy

2. **If env var set but still not firing:**
   - Clear browser cache and cookies
   - Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
   - Wait 1-2 minutes for data to appear in GA4

3. **If still failing:**
   - Check GTM Container ID format (should be GTM-XXXXXXX)
   - Verify GA4 property ID is correct (GA-XXXXXXXXXX, not UA-XXXXXXX)

---

## 🟠 MODERATE ISSUES (Noticeable But Not Critical)

### Issue: Slow Sitemap Indexing (Coverage Report Stuck at Low Numbers)

**Symptoms:**
- Day 3-4: Coverage report still shows 1-5 "Valid" pages
- Expected to see 30-50 by Day 3
- Indexation rate much slower than expected

**Root Causes:**
1. **Sitemap not submitted** (most common)
2. **Sitemap has errors** (malformed XML)
3. **Google crawler hasn't fully crawled yet** (patience needed)

**Diagnosis:**

```bash
# Step 1: Verify sitemap exists and is valid
curl https://mychef.id/sitemap.xml | head -20
# Should show: <urlset xmlns="...

# Step 2: Check URL count
curl https://mychef.id/sitemap.xml | grep "<url>" | wc -l
# Should show: 51

# Step 3: Check GSC sitemap status
# GSC → Sitemaps → look for sitemap.xml
# Status should be "Processed" (not "Pending")
```

**Solutions:**

1. **If sitemap not submitted:**
   - GSC → Sitemaps → Add/test sitemap
   - Enter: `sitemap.xml`
   - Click "Submit"

2. **If says "Pending"** (< 24 hours):
   - Wait up to 48 hours
   - Google takes time to process

3. **If says "Error":**
   - Check sitemap XML validity: `curl https://mychef.id/sitemap.xml | xmllint -`
   - Fix any XML issues in code
   - Redeploy

4. **To speed up indexing:**
   - Manually request indexing for 8 pillar pages (see GSC_SUBMISSION_CHECKLIST.md)
   - Create internal links between pages to help crawler find them
   - Wait (Google's crawl rate on new sites is slow, 5-10 URLs per day)

---

### Issue: Some Pages Show 404 Error in GSC Coverage (But Page Works in Browser)

**Symptoms:**
- https://mychef.id/fine-dining works fine in browser
- GSC Coverage report shows it as "404"
- Mismatch between what's live and what GSC sees

**Root Causes:**
1. **Page wasn't live when Google crawled** (timing issue)
2. **Redirect misconfiguration** (page redirects instead of returns 200)
3. **robots.txt blocking it** (very unlikely)

**Diagnosis:**

```bash
# Check actual status
curl -I https://mychef.id/fine-dining
# Should return: HTTP/2 200

# Check if page is in sitemap
curl https://mychef.id/sitemap.xml | grep "fine-dining"
# Should find it
```

**Solutions:**

1. **Request re-indexing in GSC:**
   - GSC → URL Inspection → paste URL → "Request indexing"
   - Google will re-crawl and fix the status

2. **Wait 2-3 days:**
   - New sites take time for Google to re-crawl
   - Statuses often correct themselves automatically

3. **If persists after 5 days:**
   - Check for redirect issues: `curl -L -I https://mychef.id/fine-dining`
   - Check robots.txt: `curl https://mychef.id/robots.txt`

---

## 🟢 MINOR ISSUES (Cosmetic)

### Issue: Old URLs Don't Redirect (Broken Redirect)

**Symptoms:**
- Redirect rule exists in _redirects file
- But visiting old URL shows 404 instead of redirecting

**Diagnosis:**

```bash
# Check if redirect rules exist
curl https://mychef.id/_redirects | head -10
# Should show redirect rules

# Test a specific redirect
curl -I -L https://mychef.id/old-page
# -I = headers only, -L = follow redirects
```

**Solutions:**

1. **Verify _redirects file in git:**
   ```bash
   git ls-files | grep _redirects  # should exist in public/
   ```

2. **Check redirect syntax** (common mistakes):
   - Missing trailing space before status code
   - Wrong URL format
   - Redirect loop (old → new → old)

3. **Redeploy if file exists but not deployed:**
   - Push code change (even trivial) to trigger rebuild
   - Or click "Publish" on previous successful deploy

---

### Issue: SSL Certificate Shows as Self-Signed or Invalid

**Symptoms:**
- Browser shows warning about untrusted certificate
- HTTPS icon shows warning/error
- Padlock not fully filled

**Diagnosis:**

```bash
# Check certificate
curl -I https://mychef.id
# Should succeed with no warnings
# Or use: echo | openssl s_client -servername mychef.id -connect mychef.id:443 2>/dev/null | grep -E "subject|issuer"
```

**Solution:**
- **Wait 5-10 minutes** after domain becomes "Connected" in Netlify
- Netlify auto-generates Let's Encrypt certificate
- Usually takes 1-5 minutes after DNS propagation
- If still showing after 30 minutes:
  - Try hard refresh (Cmd+Shift+R)
  - Clear browser cache
  - Try different browser

---

## 📞 ESCALATION PATH

| Problem | Wait Time | Next Step | Contact |
|---------|-----------|-----------|---------|
| Build fails | Immediate | Check logs, fix, redeploy | Tech Lead |
| Domain won't connect | 30 min | Check DNS, try A records | Tech Lead + Registrar |
| Pages 404 after domain connects | 5 min | Add SPA routing rule | Tech Lead |
| Meta tags missing | 10 min | Rebuild locally, check dist/ | Development team |
| Analytics not firing | 5 min | Check env vars, redeploy | Tech Lead |
| Slow indexing | 48h | Request indexing manually | SEO Lead |
| Certificate warning | 15 min | Wait and hard refresh | (automatic) |

---

## 🆘 WHEN TO ROLLBACK

**Rollback if:**
- ❌ Build doesn't complete (can't fix in <10 min)
- ❌ Site returns 500 errors consistently
- ❌ Critical functionality broken (checkout, contact forms, etc.)
- ❌ Site slower by >50% than pre-deployment

**Don't rollback for:**
- ✅ Minor 404 errors (fixable)
- ✅ Slow DNS propagation (wait)
- ✅ Analytics not firing yet (needs env var)
- ✅ Meta tags missing (rebuild)
- ✅ Slow Core Web Vitals on Day 1 (expected)

**Rollback procedure:**

```
Netlify → Deploys → (select previous successful deploy) → Publish
Time to revert: ~2 minutes
```

---

## 🔍 POST-MORTEM CHECKLIST

After resolving any issue:

- [ ] Document what went wrong
- [ ] Document what fixed it
- [ ] Update this guide if issue could happen again
- [ ] Check if other deployments might have same issue
- [ ] Add automated check to prevent in future (if possible)

---

**Last Updated:** 2026-05-17  
**Created by:** Claude Code  
**Version:** 1.0 (Production Ready)
