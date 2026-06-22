# NETLIFY DEPLOYMENT SCRIPT
## myCHEF Production Launch
## 2026-05-17

# STEP 1: Verify Environment
echo "=== NETLIFY DEPLOYMENT - myCHEF ==="
echo "Branch: auto-improve/core-web-vitals-phase4"
echo "Build Command: pnpm build"
echo "Publish Directory: dist"
echo ""

# STEP 2: Environment Variables Required
echo "=== ENVIRONMENT VARIABLES ==="
echo "VITE_GA_ID=G-W0PQH8ZKTF"
echo "VITE_GTM_ID=[OPTIONAL - add if available]"
echo ""

# STEP 3: Netlify Site Configuration
echo "=== NETLIFY CONFIGURATION ==="
echo "1. Go to https://app.netlify.com"
echo "2. Click 'Add new site' → 'Import an existing project'"
echo "3. Select GitHub → ddandanell/mychef-website"
echo "4. Branch: auto-improve/core-web-vitals-phase4"
echo "5. Build command: pnpm build"
echo "6. Publish directory: dist"
echo "7. Add environment variables (above)"
echo "8. Click 'Deploy site'"
echo ""

# STEP 4: DNS Configuration
echo "=== DNS SETUP ==="
echo "1. In Netlify: Site settings → Domain management"
echo "2. Add custom domain: mychef.id"
echo "3. Copy CNAME value (e.g., mychef-id.netlify.app)"
echo "4. Go to domain registrar (GoDaddy/Namecheap)"
echo "5. Add DNS record:"
echo "   - Type: CNAME"
echo "   - Name: @"
echo "   - Value: [paste CNAME from step 3]"
echo "   - TTL: Auto or 3600"
echo "6. Wait 5-15 minutes for propagation"
echo ""

# STEP 5: Verification
echo "=== VERIFICATION CHECKLIST ==="
echo "[ ] Build completed successfully (green checkmark)"
echo "[ ] Site preview loads (Netlify preview URL)"
echo "[ ] DNS propagated (CNAME shows 'Connected')"
echo "[ ] https://mychef.id loads in browser"
echo "[ ] All routes work: /fine-dining, /catering, /events"
echo "[ ] Sitemap accessible: https://mychef.id/sitemap.xml"
echo "[ ] GA4 firing (DevTools → Network → 'analytics')"
echo "[ ] No 404 or 502 errors"
echo "[ ] Meta tags present (View Source → search '@context')"
echo ""

# STEP 6: Post-Deploy
echo "=== POST-DEPLOYMENT ==="
echo "1. Test WhatsApp links (should open chat)"
echo "2. Submit sitemap to Google Search Console"
echo "3. Verify robots.txt: https://mychef.id/robots.txt"
echo "4. Run Lighthouse audit (target: LCP < 2.5s)"
echo "5. Monitor GA4 dashboard for first 24h"
echo ""

echo "=== DEPLOYMENT READY ==="
echo "Execute steps 1-6 above to deploy to production."
echo "Estimated time: 50 minutes"
echo ""
echo "For assistance, see: DEPLOYMENT_QUICK_REFERENCE.md"
