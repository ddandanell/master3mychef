# Phase 5: Pre-Launch Verification Script
**Date:** May 17, 2026  
**Purpose:** Final verification checklist (May 23–24) before May 25, 0800 UTC execution  
**Timeline:** 90 minutes total  
**Owner:** User (with Claude support for technical checks)

---

## ⏱️ Quick Timeline

| Task | Time | Owner |
|------|------|-------|
| Build verification | 15 min | User |
| Documentation audit | 15 min | Claude |
| Blog infrastructure check | 15 min | Claude |
| GA4 compatibility check | 15 min | Claude |
| Manual verification tasks | 20 min | User |
| Blocker review | 10 min | Both |
| **Total** | **90 min** | — |

---

## 1️⃣ Build Verification (15 min)

**Task:** Confirm production build still passes

### Step 1: Run Build
```bash
cd /Users/openclaw/Downloads/MYCHEF\ .\ MASTER/app
pnpm build
```

**Expected output:**
```
✓ Compiled successfully
✓ All assets built
✓ Build time: ~2m 24s
✓ Exit code: 0
✓ Meta tags injected into 137 files
```

**If build fails:**
- [ ] Note error message
- [ ] Flag as blocker (see Blocker Review section)
- [ ] Do NOT proceed to launch

**If build succeeds:**
- [ ] Record build time
- [ ] Verify exit code is 0
- [ ] Confirm no TypeScript errors
- [ ] ✅ Mark complete

---

## 2️⃣ Documentation Audit (15 min)

**Task:** Verify all 43 Phase 5 files exist and are accessible

### Checklist by Category

**Core Documentation (7 files):**
- [ ] PHASE5_PRE_LAUNCH_AUDIT_REPORT.md
- [ ] PHASE5_WEEK1_AUTOMATION_PACKAGE.md
- [ ] PHASE5_GA4_IMPLEMENTATION_TOOLKIT.md
- [ ] PHASE5_BLOG1_IMPLEMENTATION_TOOLKIT.md
- [ ] PHASE5_PRELAUNCH_VERIFICATION_SCRIPT.md (this file)
- [ ] PHASE5_MAY25_LAUNCH_READINESS.md
- [ ] PHASE5_WEEK1_EXECUTION_CHECKLIST.md

**Content Specifications (5 files):**
- [ ] PHASE5_BLOG_IMPLEMENTATION_READY_2026.md
- [ ] PHASE5_SERVICE_PAGE_IMPLEMENTATION_READY_2026.md
- [ ] PHASE5_SEO_PREPUBLISH_CHECKLIST.md
- [ ] PHASE5_COMPETITIVE_POSITIONING_STRATEGY.md
- [ ] PHASE5_PAGE_OPTIMIZATION_TEMPLATES.md

**Keyword & Competition (3 files):**
- [ ] PHASE5_KEYWORD_STRATEGY_COMPREHENSIVE.md
- [ ] PHASE5_COMPETITOR_AUDIT_2026-05-25.md
- [ ] PHASE5_KEYWORD_QWS_RANKING_2026-05-25.md

**Implementation Guides (4 files):**
- [ ] PHASE5_IMPLEMENTATION_MASTER_GUIDE.md
- [ ] PHASE5_EXPANDED_BLOG_ROADMAP.md
- [ ] PHASE5_WEEK1_QUICK_REFERENCE_2026-05-25.md
- [ ] PHASE5_MOBILE_DEVICE_TESTING_GUIDE.md

**Planning & Strategy (5 files):**
- [ ] PHASE5_COMPETITIVE_POSITIONING_STRATEGY.md
- [ ] PHASE5_KEYWORD_STRATEGY_COMPREHENSIVE.md
- [ ] PHASE5_IMPLEMENTATION_MASTER_GUIDE.md
- [ ] (Covered above; no additional strategy files)

**Support Documentation (3 files):**
- [ ] PHASE5_CONTINGENCY_TROUBLESHOOTING_2026.md
- [ ] GA4 setup guide (referenced in toolkit)
- [ ] Content quality guidelines (embedded in toolkits)

**Blog Outlines (5 files):**
- [ ] BLOG_01_HOW_TO_HIRE_PRIVATE_CHEF_OUTLINE.md
- [ ] BLOG_02_PRIVATE_CHEF_COST_BREAKDOWN_OUTLINE.md
- [ ] BLOG_03_CHEF_QUALIFICATIONS_OUTLINE.md
- [ ] BLOG_04_ROLE_BREAKDOWN_OUTLINE.md
- [ ] (Blog 5 outline referenced; verify in PHASE5_EXPANDED_BLOG_ROADMAP.md)

**Other Phase 5 Files (6+ files):**
- [ ] Any additional Phase 5 supporting documents
- [ ] Team coordination docs (if applicable)
- [ ] Vendor communication templates (if applicable)

### Verification Command
```bash
cd /Users/openclaw/Downloads/MYCHEF\ .\ MASTER/app/.claude
ls -la PHASE5*.md | wc -l
# Expected output: count ≥ 43
```

**If files missing:**
- [ ] Identify which file(s) are missing
- [ ] Determine if critical or optional
- [ ] Flag as blocker if critical
- [ ] Create missing file if possible (within 5 min)

**If all files present:**
- [ ] ✅ Mark complete
- [ ] All documentation verified

---

## 3️⃣ Blog Infrastructure Check (15 min)

**Task:** Verify blog components, routing, and utilities are in place

### Step 1: Check Blog Routes
**File:** `src/App.tsx`

**Verify:**
- [ ] Route `/blog` exists (BlogIndexPage)
- [ ] Route `/blog/:slug` exists (BlogPage)
- [ ] Routes properly configured
- [ ] No syntax errors

```bash
grep -n "/blog" src/App.tsx | head -10
# Expected: Routes for /blog and /blog/:slug visible
```

### Step 2: Check Blog Components
**Files:** `src/pages/BlogPage.tsx`, `src/pages/BlogIndexPage.tsx`

**Verify:**
- [ ] BlogPage.tsx exists and exports component
- [ ] BlogIndexPage.tsx exists and exports component
- [ ] BLOG_POSTS array defined in BlogPage.tsx
- [ ] Sample blog data structure correct (id, title, excerpt, date, href, image, category, keywords)

```bash
grep -n "BLOG_POSTS\|export default" src/pages/BlogPage.tsx | head -5
# Expected: BLOG_POSTS array visible, export statement
```

### Step 3: Check Blog Utilities
**File:** `src/lib/blog.ts`

**Verify the following functions exist:**
- [ ] `extractHeadings(content)`
- [ ] `injectContentEnhancements(content, headings)`
- [ ] `inferTopics(entry)`
- [ ] `getRelatedPosts(posts, currentPost, limit)`
- [ ] `enrichPost(entry, kind)`
- [ ] `formatBlogDate(iso)`
- [ ] `getReadTimeMinutes(entry)`
- [ ] `sortPostsByDate(posts)`

```bash
grep -n "export function\|export const" src/lib/blog.ts
# Expected: All 8+ functions listed
```

### Step 4: Check Interfaces
**File:** `src/lib/blog.ts`

**Verify:**
- [ ] `ContentEntry` interface defined
- [ ] `EnrichedPost` interface defined
- [ ] `PostHeading` interface defined
- [ ] `PostKind` type defined

```bash
grep -n "interface\|type" src/lib/blog.ts | head -10
# Expected: Interfaces and types visible
```

### Step 5: Sample Data Check
**File:** `src/pages/BlogPage.tsx`

**Verify:**
- [ ] BLOG_POSTS array has at least 1 sample post
- [ ] Each post has required fields (id, title, excerpt, date, href, image, category, keywords)
- [ ] Sample post structure matches ContentEntry interface

**If any component missing:**
- [ ] Flag as blocker (cannot publish blogs without these)
- [ ] Stop and fix before proceeding

**If all components present:**
- [ ] ✅ Mark complete
- [ ] Blog infrastructure ready

---

## 4️⃣ GA4 Compatibility Check (15 min)

**Task:** Verify GA4 code can be integrated without breaking build

### Step 1: Check Layout Structure
**File:** `src/app/layout.tsx` or root layout

**Verify:**
- [ ] Root layout file exists
- [ ] Head component is properly structured
- [ ] No syntax errors in existing scripts

```bash
head -50 src/app/layout.tsx | grep -E "layout|Script|Head"
# Expected: Layout and Script/Head imports visible
```

### Step 2: Verify Next.js Script Component Available
**Dependency:** `next/script`

```bash
grep -r "from 'next/script'" src/
# Expected: At least one usage visible (or confirmed it can be imported)
```

### Step 3: Type Check Build
**Command:**
```bash
pnpm tsc --noEmit
# Expected: No TypeScript errors
```

**If TypeScript errors:**
- [ ] Review errors (type conflicts, missing types)
- [ ] Flag if GA4 integration would cause new errors
- [ ] Note for June 1 setup

**If no errors:**
- [ ] ✅ Mark complete
- [ ] GA4 code can integrate cleanly

---

## 5️⃣ Manual Verification Tasks (20 min)

**Task:** User verification of external systems (cannot automate)

### Task A: Google Search Console Access (10 min)

**Step 1:** Access GSC
1. Go to **Google Search Console** → https://search.google.com/search-console
2. Select property **mychef.id**

**Step 2:** Verify Property Status
- [ ] Property shows as verified (green checkmark)
- [ ] Ownership method: DNS, Google Analytics, or HTML tag (any method OK)

**Step 3:** Check Indexed Pages
1. Go to **Coverage** tab
2. Note the indexed page count

**Expected:** 10–20 indexed pages (minimum)

- [ ] Page count visible and > 0
- [ ] No critical errors (allow a few warnings)
- [ ] Sitemap submitted (check "Sitemaps" tab)

**Step 4:** Capture Baseline (May 1–24 data)
1. Go to **Performance** tab
2. Set date range: **May 1–24, 2026**
3. Screenshot the performance overview (clicks, impressions, position)

- [ ] Baseline data visible (non-zero values, OK if small)
- [ ] Screenshot saved for reference

**If GSC is not accessible:**
- [ ] Flag as blocker (cannot execute Week 1 without GSC access)
- [ ] Verify property ownership
- [ ] Contact Google Support if needed

**If GSC is accessible:**
- [ ] ✅ Mark complete
- [ ] GSC ready for May 25 baseline capture

---

### Task B: Competitor Domains Verification (5 min)

**Purpose:** Confirm top 12 competitor domains are live and accessible

**Competitors to check** (identified in earlier phases):

1. [ ] competitor-a.com — Status: Live/Down
2. [ ] competitor-b.id — Status: Live/Down
3. [ ] competitor-c.com — Status: Live/Down
4. [ ] competitor-d.id — Status: Live/Down
5. [ ] competitor-e.com — Status: Live/Down
6. [ ] competitor-f.com — Status: Live/Down
7. [ ] competitor-g.id — Status: Live/Down
8. [ ] competitor-h.com — Status: Live/Down
9. [ ] competitor-i.com — Status: Live/Down
10. [ ] competitor-j.id — Status: Live/Down
11. [ ] competitor-k.com — Status: Live/Down
12. [ ] competitor-l.com — Status: Live/Down

**Quick Check:** Open each in browser or use online tool (e.g., DownDetector, host check)

**Expected:** All 12 domains live and accessible

- [ ] 12/12 competitors confirmed live
- [ ] No major changes (domain sold, pivoted, etc.)

**If any domain is down:**
- [ ] Note which domain(s) are down
- [ ] Decide: replace with backup competitor or note in report
- [ ] Not a blocker, but log in Week 1 report

**If all live:**
- [ ] ✅ Mark complete
- [ ] Competitor landscape confirmed stable

---

### Task C: DNS Configuration for mychef.id (5 min)

**Purpose:** Verify domain DNS is active and pointing correctly

**Step 1:** Check DNS Resolution
```bash
# Command line check (macOS/Linux)
nslookup mychef.id

# Or use online tool: https://dnschecker.org/
```

**Expected output:**
```
Server: 8.8.8.8 (or your ISP's DNS)
Address: 8.8.8.8#53

Non-authoritative answer:
Name:   mychef.id
Address: XXX.XXX.XXX.XXX (IP address)
```

- [ ] DNS resolves successfully
- [ ] IP address points to production server
- [ ] No NXDOMAIN or timeout errors

**Step 2:** Verify Site Loads
1. Open **https://mychef.id** in browser
2. Confirm homepage loads (200 status, no errors)

- [ ] Site loads without errors
- [ ] No SSL/certificate warnings
- [ ] Content renders correctly (not blank or error page)

**If DNS fails or site doesn't load:**
- [ ] Flag as critical blocker (cannot launch without accessible domain)
- [ ] Contact hosting/DNS provider
- [ ] Verify domain registration is active and not expired

**If DNS works and site loads:**
- [ ] ✅ Mark complete
- [ ] Domain ready for execution

---

## 6️⃣ Blocker Review (10 min)

**Task:** Identify and resolve any blocking issues found above

### Blocker Categories

| Severity | Meaning | Examples | Action |
|----------|---------|----------|--------|
| CRITICAL | Prevents May 25 launch | Build fails, GSC inaccessible, domain down | Must fix before 0800 UTC May 25 |
| HIGH | Impacts Week 1 execution | Missing documentation, blog component broken | Fix by May 25, 1700 UTC |
| MEDIUM | Risk to Week 2+ | Optional documentation missing, minor compatibility issue | Fix before June 1 |
| LOW | Minor concern | Typo in doc, non-critical comment | Can wait; fix in Phase 6 |

### Checklist: Known Risks to Verify

- [ ] **Build passes:** Confirmed in Step 1 (if failed, CRITICAL blocker)
- [ ] **Docs complete:** Confirmed in Step 2 (if missing, HIGH blocker)
- [ ] **Blog infrastructure ready:** Confirmed in Step 3 (if broken, CRITICAL blocker)
- [ ] **GA4 compatible:** Confirmed in Step 4 (if incompatible, HIGH blocker)
- [ ] **GSC accessible:** Confirmed in Step 5A (if not, CRITICAL blocker)
- [ ] **Competitors live:** Confirmed in Step 5B (if all down, MEDIUM blocker)
- [ ] **Domain resolves:** Confirmed in Step 5C (if not, CRITICAL blocker)

### Blocker Tracking Template

```markdown
## Blockers Identified (as of May 23, 2026)

### CRITICAL Blockers (Must fix by May 25, 0800 UTC)
- [ ] [Issue name]: [Description] — [Owner] — [Status: Open/In Progress/Fixed]

### HIGH Blockers (Fix by May 25, 1700 UTC)
- [ ] [Issue name]: [Description] — [Owner] — [Status]

### MEDIUM Blockers (Fix before June 1)
- [ ] [Issue name]: [Description] — [Owner] — [Status]

### LOW Blockers (Fix after Phase 5 launches)
- [ ] [Issue name]: [Description] — [Owner] — [Status]
```

### Resolution Steps
1. For each blocker, assign owner (user or Claude)
2. Estimate fix time
3. Prioritize CRITICAL first
4. Confirm fix is verified before marking resolved
5. Re-run affected verification step to confirm fix

---

## ✅ Final Verification Summary

### Pre-Launch Checklist (Must be 100% complete by May 25, 0800 UTC)

**Build & Infrastructure:**
- [ ] Production build passes (exit code 0)
- [ ] No TypeScript errors
- [ ] All 137 meta tags injected correctly
- [ ] Build time consistent with baseline (~2m 24s)

**Documentation:**
- [ ] All 43 Phase 5 files exist and accessible
- [ ] No critical documentation gaps
- [ ] Cross-references between files validated
- [ ] Implementation toolkits ready for Week 2+

**Blog System:**
- [ ] Routes configured (/blog, /blog/:slug)
- [ ] Components ready (BlogPage, BlogIndexPage)
- [ ] Utilities available (extraction, enrichment, topic inference)
- [ ] Sample data structure defined and testable

**External Systems:**
- [ ] GSC property verified and accessible
- [ ] Baseline data (May 1–24) captured
- [ ] All 12 competitor domains live
- [ ] Domain DNS resolves and site loads

**Blockers:**
- [ ] Zero CRITICAL blockers
- [ ] Zero HIGH blockers (or documented workaround)
- [ ] All MEDIUM/LOW blockers logged for post-launch fix

---

## 📋 Verification Report Template

**Use this to document results:**

```markdown
# Phase 5 Pre-Launch Verification Report
**Date:** May 23–24, 2026
**Status:** [READY / READY WITH CONDITIONS / BLOCKED]

## 1. Build Verification
✅ PASSED
- Build time: 2m 24s
- Exit code: 0
- Files processed: 137
- Errors: 0

## 2. Documentation Audit
✅ PASSED
- Files verified: 43/43
- Missing files: 0
- Broken cross-references: 0

## 3. Blog Infrastructure
✅ PASSED
- Routes configured: ✓
- Components ready: ✓
- Utilities available: ✓
- Sample data: ✓

## 4. GA4 Compatibility
✅ PASSED
- Script component available: ✓
- Layout compatible: ✓
- No type errors: ✓

## 5. Manual Verifications
✅ PASSED
- GSC accessible: ✓
- Baseline data captured: ✓
- Competitors live: 12/12
- Domain resolves: ✓

## Blockers
None identified.

## Conclusion
✅ **STATUS: READY FOR EXECUTION**

All systems verified. Zero blockers identified. Ready for May 25, 0800 UTC launch.

**Verified by:** [User name]
**Date:** [Date]
```

---

## 🚀 Ready for Launch?

If all sections pass and blocker count is zero:

✅ **You are ready to proceed with May 25, 0800 UTC execution.**

Next steps:
1. Archive this verification report
2. Proceed to Week 1 execution (May 25)
3. Follow PHASE5_WEEK1_EXECUTION_CHECKLIST.md

If any CRITICAL or HIGH blockers exist:

❌ **Do not proceed with launch.** 

Fix blockers first, then re-run verification to confirm all issues resolved.

---

**Verification Template Status:** Complete, ready for May 23–24 execution.

