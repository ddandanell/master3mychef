# Netlify Deployment Guide (Manual Drag-and-Drop)

## Step 1: Login to Netlify

1. Go to: **https://app.netlify.com**
2. Sign in with your email or GitHub account
3. Click **"Add new site"** → **"Deploy manually"**

## Step 2: Drag & Drop Build Folder

1. You'll see the drag-and-drop zone
2. **Drag the `dist/` folder** from:
   ```
   /Users/openclaw/Downloads/MYCHEF . MASTER/app/dist
   ```
   Into the Netlify drag-and-drop zone

3. Wait for deployment to complete (usually 30-60 seconds)

## Step 3: Copy Preview URL

Once deployed, Netlify shows a preview URL like:
```
https://mychef-randomid.netlify.app
```

**Copy this URL** — you'll need it for verification and domain setup.

## Step 4: Verify Site Loads

In a browser:
1. Open the preview URL above
2. Click through these routes to verify:
   - `/fine-dining`
   - `/catering/bbq-catering`
   - `/events/weddings`
   - `/locations/canggu`

3. All should load without 404 errors

## Step 5: Connect Custom Domain

Once verified:

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `mychef.id`
4. Netlify will show you DNS records to add at your registrar

### At Your Registrar (GoDaddy/Namecheap)

1. Login to domain registrar where `mychef.id` is hosted
2. Find DNS settings
3. **Option A (Easier)**: Use Netlify's nameservers
   - Copy nameservers from Netlify
   - Replace registrar's nameservers with Netlify's

   **Option B (CNAME)**: Add DNS records
   - Type: CNAME
   - Name: `@` (or blank for root)
   - Value: `[Netlify site name].netlify.app` (copy from Netlify dashboard)

4. Save changes

## Step 6: Wait for DNS Propagation

DNS can take 5-60 minutes to propagate. Test with:

```bash
dig mychef.id
curl -I https://mychef.id
```

When resolved, open in browser: **https://mychef.id**

---

## ✅ Success Checklist

- [ ] Site deployed to preview URL
- [ ] All routes load (fine-dining, catering, events, etc.)
- [ ] Custom domain `mychef.id` added to Netlify
- [ ] DNS records added at registrar
- [ ] `https://mychef.id` loads in browser
- [ ] GA4 events visible in DevTools → Network (filter "analytics")

---

**Questions?** Check Netlify status page or Discord community.
