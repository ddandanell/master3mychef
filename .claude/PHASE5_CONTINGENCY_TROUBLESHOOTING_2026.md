# Phase 5: Contingency Plans & Troubleshooting Guide
**May 17 - August 9, 2026**

Diagnosis and response procedures for common Phase 5 execution issues.

---

## 🚨 Critical Issues (Stop & Fix)

### Issue: GSC Access Fails (Before May 25)

**Symptom:** Cannot access mychef.id property in Google Search Console on May 19-20 verification

**Impact:** Cannot capture baseline on May 25 → Entire Week 1 blocked

**Diagnosis:**
1. Check if mychef.id domain is added to GSC (GSC Settings → Verification)
2. Verify you're logged into correct Google account
3. Check if verification badge shows "Verified" (green checkmark)
4. Check domain ownership in Google Search Console

**Response:**
- **If not verified:** Re-add domain in GSC (Settings → Add Property → Verify domain)
  - Choose DNS verification method
  - Add TXT record to domain registrar
  - Wait 24-48 hours for verification
  - **Action:** Complete by May 22 to allow buffer before May 25

- **If verified but no data:** Data may take 24-48 hours to populate
  - **Action:** Check again May 21-22
  - If still no data: Contact Google Search Console support

- **If access denied:** Wrong account or permission issue
  - **Action:** Confirm account has GSC access
  - Re-authenticate if needed
  - **Timeline:** Complete by May 23

**Workaround:** If GSC unavailable by May 25:
- Delay Week 1 execution to May 26-June 2 (1-week push)
- Use GA4 organic search data as interim source (less detailed but usable)
- Proceed with competitor audit while waiting for GSC

---

### Issue: Code Build Fails Before May 25

**Symptom:** `pnpm build` fails with errors on May 23 verification checklist

**Impact:** Cannot publish blogs on schedule starting June 1

**Diagnosis:**
1. Run `pnpm build` locally
2. Review error message (TypeScript, bundling, or asset issues)
3. Check if issue is in app code or configuration

**Response:**
- **TypeScript errors:** Run `pnpm tsc --noEmit --pretty false` to identify problems
  - Likely: Missing types, incorrect component imports
  - **Action:** Fix before May 25 (should not happen, build verified May 17)

- **Missing assets:** Check if hero images or critical assets deleted
  - Run `scripts/validate-critical-assets.ts`
  - **Action:** Restore missing images or update paths

- **Environment variables:** Check `.env.local` has required variables
  - **Action:** Ensure all env vars set (DATABASE_URL, etc.)

**Fallback:** If build cannot be fixed:
- Push deployment to June 2 (1-week delay)
- Use this time for additional competitor research
- Plan secondary optimizations in advance

---

### Issue: DNS Not Configured (Discovered June 1)

**Symptom:** Blog URLs not accessible at mychef.id (404 errors on /blog routes)

**Impact:** Cannot test blogs before publication; potential indexation issues

**Diagnosis:**
1. Check Vercel project settings (Domains)
2. Verify mychef.id points to Vercel nameservers
3. Test: curl https://mychef.id/blog (should return HTML, not 404)

**Response:**
- **If not pointing to Vercel:**
  - Add mychef.id to Vercel project domains
  - Update domain registrar nameservers to Vercel
  - Wait 24-48 hours for DNS propagation
  - **Timeline:** Must complete by June 2 to publish Blog #1 on schedule

- **If pointing to Vercel but 404:**
  - Verify blog routes exist in codebase (`/app/src/app/blog/...`)
  - Check Next.js routing is correct
  - **Action:** Deploy code changes if needed

**Workaround:** If DNS unavailable by June 2:
- Publish blogs under temporary subdomain (blog.mychef.id or beta.mychef.id)
- Set redirect rules for when primary domain is live
- Plan DNS migration for Week 3-4 (June 8-14)
- All SEO work transfers once primary domain active

---

## ⚠️ High-Priority Issues (Fix This Week)

### Issue: Competitor Audit Cannot Complete (May 27-28)

**Symptom:** One or more competitor domains down or blocked during audit

**Impact:** Incomplete benchmark data; gaps in gap analysis

**Example:** gisellebali.com returns 503 Service Unavailable

**Diagnosis:**
1. Check if domain is temporarily down (try again in 30 min)
2. Verify you're not rate-limited (CloudFlare blocking?)
3. Try from different network/VPN if blocked

**Response:**
- **If temporarily down:** Retry audit after 1 hour
  - **Timeline:** Audit due May 28 EOD; retry by May 28 afternoon

- **If domain offline (no TTL):** Replace with backup competitor
  - Use Google Search results for target keyword
  - Find 2nd-3rd ranked domain instead
  - Add to audit spreadsheet with note "Backup competitor"
  - **Requirement:** 12-15 domains total by May 28

- **If rate-limited:**
  - Wait 1-2 hours before retrying
  - Try with browser instead of automated tools
  - Use proxying if available

**Fallback:** Complete audit with 10-12 competitors instead of 15
- Reduce audit scope but maintain quality
- Focus on top 3-5 competitors per pillar
- Proceed with opportunity ranking using available data

---

### Issue: Blog #1 Takes Longer Than Estimated (June 1-3)

**Symptom:** Blog #1 content not ready to publish by June 1 2000 UTC

**Impact:** Week 2 timeline compressed; quality at risk

**Diagnosis:**
1. Check writing progress: % complete?
2. Identify bottleneck: research, writing, editing, images, schema?
3. Estimate time to completion

**Response:**
- **If 80%+ complete:** Finish by June 2 morning
  - Publish June 2 afternoon instead
  - Adjust homepage update to June 3
  - **Impact:** 1-day slip, manageable

- **If 50-80% complete:** Request content extension
  - Focus on core sections first
  - Add bonus content later
  - Publish by June 3 morning
  - **Impact:** 2-day slip; compress later weeks

- **If <50% complete:** Switch to Blog #2 first
  - Publish simpler blog (cost breakdown) instead
  - Return to Blog #1 in Week 3
  - Adjust linking strategy accordingly
  - **Impact:** Timing shift but content quality maintained

**Fallback:** Reduce blog word count target
- Blog #1: 3,500 words → 2,800 words (focus on essentials)
- Add bonus sections in Week 3-4 updates
- Maintain H1, H2 structure and schema markup

---

### Issue: Internal Links Create 404s (June 6-7)

**Symptom:** Week 2 QA identifies broken internal links (404 errors)

**Diagnosis:**
1. Run link audit script in DevTools
2. Identify which links return 404
3. Check if pages exist or URLs are misspelled

**Response:**
- **If pages don't exist:** Remove links or add TODO for future
  - Example: "/staffing" doesn't exist yet (created Week 3)
  - Use conditional links: `{staffing && <Link href="/staffing">...}` or just omit

- **If URL misspelled:** Fix route spelling
  - Example: "/catering" vs "/catering-services"
  - Update link to correct URL

- **If page exists but 404:** Check page is deployed
  - Rebuild and redeploy if needed
  - Verify route file is in correct directory

**Timeline:** Fix all 404s by June 7 EOD (Week 2 QA checkpoint)

---

## 📊 Medium-Priority Issues (Address This Week)

### Issue: Page Loads Slow (LCP >2.5s)

**Symptom:** Lighthouse audit shows LCP 3.0-4.0s on Blog #1 or pillar pages

**Impact:** CWV target missed; ranking penalty potential

**Diagnosis:**
1. Run Lighthouse on affected page
2. Check "Opportunities" section for largest contributors
3. Common causes: large images, unoptimized fonts, render-blocking JS

**Response:**
- **Large images:** Compress with TinyPNG or convert to WebP
  - **Action:** Reduce image file size <500KB each
  - Timeline: Complete by end of week containing issue

- **Render-blocking resources:** Defer non-critical JS
  - Move analytics scripts to async
  - Lazy-load below-fold content
  - **Action:** Audit <next-script> tags

- **Fonts:** Limit to 2 font families max
  - Use `font-display: swap`
  - Preload only critical font
  - **Action:** Update font loading strategy

**Target:** LCP <2.5s on all pages by end of current week

---

### Issue: Schema Markup Validation Error

**Symptom:** Google Rich Results Test shows schema validation errors

**Example:** "FAQPage schema invalid: question/answer format incorrect"

**Diagnosis:**
1. Go to Google Rich Results Test (search.google.com/test/rich-results)
2. Enter affected page URL
3. Review "Errors" tab for specific issue

**Response:**
- **Common error: Nested schema structure**
  - FAQPage should have `mainEntity: [ItemList with HowToStep]`
  - Verify JSON-LD structure follows schema.org spec

- **Common error: Missing required fields**
  - FAQPage requires: acceptedAnswer.text or acceptedAnswer.name
  - HowTo requires: step.text or step.name
  - Add missing fields

- **Common error: Type mismatch**
  - @type value incorrect (e.g., "faqpage" vs "FAQPage")
  - Fix capitalization

**Timeline:** Fix schema errors same day as discovery
- **Impact if unfixed:** Reduced rich snippet visibility

---

### Issue: Blog Index Page (/blog) Not Optimal

**Symptom:** Blog index page missing cards/summary sections for new blogs

**Impact:** Reduced internal discovery; poor internal linking

**Diagnosis:**
1. Check /blog page has featured blog cards
2. Verify all 5 blogs have links/cards on index
3. Check page structure: grid, carousel, or list?

**Response:**
- **If cards missing:** Add blog card components
  - Each card: title, excerpt, image, "Read More" link
  - Recommended: 3-6 cards per page
  - **Action:** Update by end of week with new blog

- **If only recent blog shows:** Update page template
  - Ensure all blogs visible
  - Add category/tag filtering if desired
  - **Action:** Fix during next blog publish

**Best practice:** Update /blog page every time new blog published

---

## 🔍 Monitoring-Phase Issues (Weeks 5-12)

### Issue: No Ranking Improvement After Week 4

**Symptom:** GSC shows keyword positions unchanged (or worse) by June 28

**Keywords:** fine dining bali still at position 48 (target: 35)

**Diagnosis:**
1. Check if pages are indexed (query `site:mychef.id` in Google)
2. Verify pages submitted to GSC crawl
3. Check for crawl errors in GSC (Coverage tab)
4. Review if content matches keyword intent

**Expected Timeline:**
- Week 1-2: Pages indexed (June 1-14)
- Week 2-3: Rankings shift visible (June 8-21)
- Week 4+: Significant improvement (June 22+)

**Response (if no improvement by June 28):**
- **Check indexation:** All pages indexed? Use `site:mychef.id` query
  - If not: Resubmit to GSC, check for crawl errors
  - If indexed: Proceed to step 2

- **Check content quality:** Does content match search intent?
  - Fine-dining page should address "what is fine dining" + local context
  - Blog #1 should comprehensively answer "how to hire"
  - **Action:** Compare competitor content; expand gaps

- **Check technical SEO:**
  - Page speed acceptable? (LCP <2.5s)
  - Mobile rendering good? (test on mobile)
  - Schema markup correct? (Rich Results Test)
  - **Action:** Fix any issues found

- **Secondary optimization:** Add more internal links
  - Increase blog references from pillar pages (2 → 3-4 links each)
  - Add contextual links within blog posts
  - **Action:** Add 10-20 new internal links per page

**Alternative:** Rankings not visible yet
- GSC may take 4-8 weeks to show initial ranking shifts
- Trust baseline capture; monitor trends over Weeks 5-8
- By Week 8 (July 19), clear trend should be visible

---

### Issue: High Bounce Rate on Blogs (>60%)

**Symptom:** GA4 shows blog pages with >60% bounce rate

**Impact:** Weak engagement signal; may slow ranking progress

**Diagnosis:**
1. Check average time-on-page: <1 min = quality issue
2. Verify page loads without errors
3. Check if CTA is visible above fold

**Response:**
- **Content too thin:** Expand sections with additional detail
  - Blog should have 2-3 min reading time (2,500+ words)
  - Add sections addressing common follow-up questions
  - **Action:** Expand thin blogs in Week 9-10

- **Page loads too slow:** Users leave before content loads
  - Check LCP >2.5s → optimize images/fonts
  - **Action:** Reduce load time to <2.5s LCP

- **Missing or weak CTA:** Users can't find next step
  - Add "Book Your Chef" CTA mid-page and end-of-page
  - Add related blog links (cross-promotion)
  - **Action:** Add 2-3 CTAs per blog

- **Unrelated traffic:** Non-buyers finding blog
  - Example: "how to hire private chef" attracts DIY searchers
  - This is acceptable; conversion rate more important than bounce rate
  - Monitor conversion rate instead of bounce rate

**Monitor:** Bounce rate trends over 2-4 weeks
- Initial dip normal as content settles
- By Week 8, should stabilize <55% (acceptable for blogs)

---

### Issue: Low Conversion Rate from Blog Traffic

**Symptom:** Blogs getting traffic but no booking inquiries

**Example:** 100 blog visits/week but 0 CTAs clicked

**Diagnosis:**
1. Check GA4 event tracking: Are CTA clicks being recorded?
2. Verify CTA buttons are clickable and functional
3. Check if conversion tracked correctly in analytics

**Response:**
- **CTA not visible:** Add above-the-fold CTA to every blog
  - Example: "Free Consultation" button near title
  - Make prominent: button color, 16px+ font

- **CTA not compelling:** Weak copy or unclear value
  - Change CTA text: "Contact Us" → "Get Your Quote"
  - Add benefit: "Free 30-min consultation"
  - Add trust signal: "Join 50+ satisfied clients"

- **Tracking not working:** GA4 event not firing
  - Verify event tracking code on CTA button
  - Test in DevTools: click CTA, check Network tab for event
  - **Action:** Fix tracking code if broken

- **Wrong audience:** Blog audience doesn't convert
  - Example: "How to hire DIY" attracts budget-conscious searchers
  - **Action:** Add premium positioning to CTAs
  - Or accept blog as brand-awareness play (OK for Phase 5)

**Baseline:** 2-5% conversion rate acceptable for blogs
- Monitor over 4-8 weeks before optimizing

---

## 🔧 Quick-Fix Checklist

When something breaks, run through this in order:

1. **Page not indexing?**
   - [ ] Is page live? (check URL in browser)
   - [ ] Is page linked internally? (check links from homepage/pillars)
   - [ ] Did you submit to GSC? (Indexing → Request Indexing)
   - [ ] Wait 3-7 days; recheck GSC

2. **Link returning 404?**
   - [ ] Does target page exist? (visit URL directly)
   - [ ] Is URL spelling correct? (copy from browser, not memory)
   - [ ] Is page deployed? (check git status, redeploy if needed)

3. **Content looks broken on mobile?**
   - [ ] Check on actual phone (not just browser resize)
   - [ ] Is image too wide? (verify max-width: 100%)
   - [ ] Is text readable? (font size ≥14px on mobile)

4. **Schema not validating?**
   - [ ] Copy exact error from Rich Results Test
   - [ ] Compare your JSON to schema.org spec
   - [ ] Check capitalization (@type: vs @Type:)

5. **Page speed slow?**
   - [ ] Run Lighthouse, note "Opportunities" section
   - [ ] Optimize biggest blocker first (usually images)
   - [ ] Retest after each optimization

---

## 📞 Escalation Path

| Issue Severity | Action | Timeline |
|---|---|---|
| **Critical** (blocks launch) | Stop execution; fix immediately | Same day |
| **High** (delays week) | Fix this week; adjust timeline | Same week |
| **Medium** (impacts metrics) | Fix within 2 weeks; plan workaround | 2 weeks |
| **Low** (nice-to-have) | Address in secondary optimization phase | Week 9-10 |

---

## 📋 Post-Execution Retrospective (Aug 9+)

**Lessons Learned Document:**
- What issues occurred?
- How were they diagnosed?
- What fixed them?
- How could they be prevented next time?

Create file: `PHASE5_RETROSPECTIVE_LESSONS_LEARNED_2026.md`

---

**Status:** Contingency guide ready  
**Use When:** Any issue arises during May 25 - Aug 9 execution  
**Update:** Add new contingencies as issues occur
