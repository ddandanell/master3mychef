# Phase 5 Contingency Plans
**Risk Mitigation & Decision Trees for Common Failure Scenarios**

**Project:** myCHEF Phase 5 (May 25 – June 21, 2026)  
**Purpose:** If X happens, do Y. Prevents panic, keeps momentum.

---

## 🎯 Overview

Phase 5 is designed with **65-hour budget and 4-week timeline**. These plans address scenarios that could impact schedule, quality, or outcome.

**Use this document when:**
- Progress slips more than 2 hours/day
- CWV metrics degrade
- Blog posts don't index within expected timeframe
- Build breaks after content changes
- Unexpected competitor activity
- Keyword rankings drop unexpectedly

---

## 1️⃣ Phase 5 Falls Behind Schedule

### Scenario: Week 1 or 2 incomplete; timeline at risk

**Trigger:** By Friday EOD, >2 pages remain incomplete + <18 hours logged (target is 20h/week)

### Decision Tree

**STEP 1: Assess the Gap**
```
How many hours behind?
├─ <2 hours → MINOR SLIP (go to "Quick Catch-Up")
├─ 2–5 hours → MEDIUM SLIP (go to "Scope Reduction")
└─ 5+ hours → MAJOR SLIP (go to "Reset & Reprioritize")
```

### Quick Catch-Up (<2 hours)
**Action:** Add 1–1.5 hours to next week's schedule, compress non-critical section.

| Section | Standard | Compressed | What you lose |
|---------|----------|-----------|--------------|
| Content structure | 2h | 1.5h | Minor keyword variant density |
| Multimedia | 1h | 0.75h | 1 image removed; fewer alt variations |
| Schema markup | 0.5h | 0.25h | Still complete; less detailed |
| Testing | 0.5h | 0.25h | Quick test only (not comprehensive) |
| **TOTAL** | 5.5h | 4.5h | **Lose 1h without major quality loss** |

**When it works:** Slip is <2 hours, other pages on track, quality stays acceptable.

**When it fails:** Don't use this if CWV is already degraded or build is unstable.

---

### Scope Reduction (2–5 hours behind)

**Action:** Cut 1 page temporarily OR compress 2 pages moderately.

#### Option A: Skip 1 Week 2 Page
```
SKIP: /catering (least urgent of Week 2)
MOVE: Optimize /catering in Week 3 instead (stretch Week 3 to 25h)

Impact:
  • Week 2 output: 3 pages instead of 4
  • Week 3 becomes: /events + /catering + 3 blogs (5 pages, 25h instead of 20h)
  • Total Phase 5: Still 13 pages, just shifted schedule
  • Keywords affected: /catering pillar delayed 1 week (manageable)
  
Timeline:
  Jun 1–7: Homepage + /fine-dining + 1 blog (3 pages, 15h)
  Jun 8–14: /events + /catering + 3 blogs (5 pages, 25h)
  Jun 15–21: 4 pillars + 1 blog (5 pages, 25h)
  
Risk: Week 3 becomes tight (25h in 5 days = 5h/day average). Doable but intense.
```

#### Option B: Compress 2 Pages in Week 2
```
REDUCE: Homepage & /fine-dining each by 0.75h
NEW TIME: 4h per page instead of 5h

Impact:
  • Lose: 1–2 keyword variants per page, slightly fewer images (6 instead of 7–8)
  • Gain: Recover 1.5h this week
  • Quality: Still acceptable (core elements intact)
  
Pages: Still 4/week, slightly lighter optimization.
```

**Choose Option A if:** Week 1 is on track; Week 2 is just a bit tight.  
**Choose Option B if:** You're comfortable with slightly lighter optimization; don't want to shift timelines.

---

### Reset & Reprioritize (5+ hours behind)

**Action:** Stop, assess, and replan Week 3–4.

**STOP & DO THIS:**

1. **Assess actual velocity** (hours)
   ```
   Total Phase 5 hours available: 65h
   Hours used through Week 1–2: [X]h
   Hours remaining: [65 - X]h
   
   Can we finish 13 pages in remaining time?
   Remaining pages: 13 – [pages done]
   Hours per remaining page: [remaining hours] ÷ [remaining pages]
   Viable? YES / NO
   ```

2. **If NO (not viable):**
   - **Extend timeline:** Push Phase 5 to June 28 instead of June 21 (1 week slip)
   - **Reduce scope:** Optimize 11 pages (cut 2 lowest-priority pages)
   - **Increase effort:** Add hours Week 3–4 if available (parallel work possible?)
   
3. **If YES (still viable):**
   - **Implement quick catch-up or scope reduction above**
   - **Log real effort data** from Weeks 1–2 (are 5h pages actually taking 6–7h?)
   - **Adjust per-page estimate** for Weeks 3–4 based on actual velocity
   - **Add 1–2 contingency hours** to later weeks

**Documentation:**
```
VELOCITY REPORT (Week 2 Friday)
Actual hours/page: [6.2h avg instead of 5.5h target]
Root cause: [longer copywriting, more image optimization, etc.]
Plan adjustment: [add 0.5h to weeks 3–4, compress multimedia 10%]
New completion target: June 21 / June 28 / TBD
```

**Escalation threshold:**
- If you're >5 hours behind after Week 2, notify project lead **Friday EOD Week 2**
- Don't wait until Week 4 to escalate; decide early

---

## 2️⃣ Core Web Vitals Degrade

### Scenario: LCP >2.8s, INP >250ms, or CLS >0.15 detected

**Trigger:** PageSpeed Insights shows metric degradation >10% from baseline OR Friday CWV check shows warning

### Decision Tree

```
Which metric degraded?
├─ LCP (Largest Contentful Paint) → Rendering issue → go to "LCP Fix"
├─ INP (Interaction to Next Paint) → JavaScript issue → go to "INP Fix"
├─ CLS (Cumulative Layout Shift) → Layout issue → go to "CLS Fix"
└─ Multiple metrics → go to "Full Audit"
```

### LCP Fix (Page loads slowly)
**Likely cause:** Images, hero video, or large CSS files

**Quick diagnosis:**
```bash
# Open PageSpeed Insights: https://pagespeed.web.dev/
# Paste your page URL
# Check "Diagnostics" → "Largest Contentful Paint element"
# Usually it's: hero image, or large text block, or video
```

**Fixes (in order of effort):**

1. **Compress hero image** (5 min)
   - Run: `pnpm run optimize-images`
   - Reduce size to <200KB
   - Re-test with PageSpeed
   - Expected improvement: 0.3–0.5s LCP

2. **Lazy-load below-fold images** (10 min)
   - Add `loading="lazy"` to images below fold
   - Re-test
   - Expected improvement: 0.2–0.3s LCP

3. **Defer non-critical CSS** (15 min)
   - Identify unused CSS on this page
   - Move to deferred styles
   - Re-test
   - Expected improvement: 0.2–0.4s LCP

4. **Reduce web fonts** (10 min)
   - Check how many font weights/styles loaded
   - Keep only critical weight (e.g., 400, 700)
   - Re-test
   - Expected improvement: 0.1–0.2s LCP

**When to skip this page:**
If LCP is >3.5s and you can't identify the cause within 30 min, mark it as "CWV issue flagged" and move to next page. Don't spend >1 hour on CWV per page; that eats optimization time.

---

### INP Fix (Page feels slow to interact)
**Likely cause:** JavaScript event handlers, form submissions, or heavy React re-renders

**Quick diagnosis:**
```bash
# Open PageSpeed Insights
# Check "Diagnostics" → "Interaction to Next Paint"
# Usually: form submission, button click, or navigation
```

**Fixes:**

1. **Profile the interaction** (10 min)
   - Open Chrome DevTools → Performance tab
   - Reproduce the slow interaction
   - Look for long tasks (>50ms)
   - Identify the culprit (JavaScript, rendering, etc.)

2. **Defer JavaScript** (15 min)
   - Heavy JS that runs on page load but isn't needed immediately → defer or dynamic import
   - Example: Analytics, widgets, third-party scripts → `async` or `defer`

3. **Optimize form handling** (20 min)
   - If form is slow: reduce validation, debounce inputs, optimize onChange handlers
   - Test form submission latency

4. **Check React rendering** (15 min)
   - Use React DevTools Profiler to identify expensive re-renders
   - Memoize components if needed
   - Avoid inline function definitions in JSX

**When to skip:**
If you can't isolate the cause in 30 min, flag it and move on. INP issues often require deeper React optimization that's outside quick-fix scope.

---

### CLS Fix (Layout shifting)
**Likely cause:** Images/ads loading late, dynamic content insertion, or font swapping

**Quick diagnosis:**
```
Visual inspection:
• Does the page shift when images load? → Image sizing issue
• Does text jump when fonts load? → Font-display issue
• Does content jump when JavaScript runs? → Dynamic injection issue
```

**Fixes:**

1. **Set explicit image dimensions** (5 min)
   - Add `width` and `height` attributes to all images
   - Reserve space: `aspect-ratio: 16/9` or similar
   - Expected improvement: 0.05–0.1 CLS

2. **Use `font-display: swap`** (2 min)
   - Ensure all web fonts have `font-display: swap`
   - Prevents invisible text while font loads
   - Expected improvement: 0.02–0.05 CLS

3. **Reserve space for dynamic content** (10 min)
   - If content is injected by JavaScript, reserve space with skeleton or min-height
   - Expected improvement: 0.05–0.15 CLS

4. **Defer ads/widgets** (5 min)
   - Third-party ads or widgets → load after page interactive
   - Expected improvement: 0.02–0.1 CLS

**When to skip:**
CLS is usually the easiest to fix. If you fix the above and CLS is still >0.1, it's likely a deeper issue—flag it.

---

### Full Audit (Multiple metrics degraded)

**If 2+ metrics degraded significantly:**

1. **Revert last optimization** (5 min)
   - Last page changes causing issues?
   - Revert images, CSS, or JS changes from previous days
   - Test CWV again

2. **Check for added third-party scripts** (5 min)
   - New analytics? New widget? New chat tool?
   - Disable temporarily and test
   - If CWV improves, move script to deferred loading

3. **Run full PageSpeed audit** (15 min)
   - https://pagespeed.web.dev/
   - Check all diagnostics
   - Prioritize fixes by impact (usually LCP > CLS > INP)

4. **Document the issue & escalate** (10 min)
   ```
   ISSUE: LCP >3.0s + CLS >0.15 after [page name] optimization
   CAUSED BY: [image size / font loading / JS / other]
   FIX ATTEMPTED: [list fixes tried]
   RESULT: [improved to X or couldn't fix]
   ESCALATE TO: Performance lead
   ```

**When to skip this page:**
If you spend >1 hour on CWV issues and can't resolve, note it and move to next page. Don't let CWV perfection block content optimization; you can fix CWV issues post-launch.

---

## 3️⃣ Blog Posts Don't Index

### Scenario: Blog post published but not showing in GSC after 7–10 days

**Trigger:** Friday of publish week, check GSC → blog post still shows "Discovered - not indexed"

### Decision Tree

```
How long ago was it published?
├─ 0–3 days → Normal lag, check again in 3 days
├─ 3–7 days → Concerning, check indexability
└─ 7+ days → Problem, investigate + escalate
```

### Quick Checks (Day 7–8)

1. **Verify page is discoverable**
   ```bash
   # In GSC, find the blog post page
   # Click "Inspect URL"
   # Should show "URL is on Google"
   # Check "Coverage" tab → should NOT say "Excluded by noindex tag" or similar
   ```

2. **Check robots.txt**
   ```
   Open: https://mychef.id/robots.txt
   Verify: No disallow rule for /blog/
   Expected: Allow all crawling
   ```

3. **Check page quality**
   ```
   Does the page:
   • Have H1 tag? YES
   • Have body text >300 words? YES
   • Load properly (no 404, no redirect)? YES
   • Have internal links? YES
   ```
   If NO to any: Fix it, then request re-indexation in GSC.

### Escalation Actions (Day 8+)

**If all checks pass:**

1. **Request indexation in GSC**
   - GSC → URL Inspection → paste blog post URL
   - Click "Request indexing"
   - Wait 2–3 days
   - Check again

2. **Resubmit sitemap**
   ```bash
   # Ensure blog post is in sitemap.xml
   # GSC → Sitemaps → Resubmit current sitemap
   ```

3. **Check for content quality issues**
   - Is the post too thin? (<500 words)
   - Is it duplicate content? (check against competitors)
   - Does it have low E-E-A-T signals? (no byline, no credentials, no sources)
   - If yes: Improve the post, re-request indexation

### When to Move On

If blog post still not indexed after 14 days:
- It's likely a content quality issue or site-wide crawl issue
- Document it: `Indexation delay: [post name], published [date], not indexed [date]`
- Escalate to SEO lead
- **Do not hold up Phase 5** on one blog post; continue with next pages

**Expected indexation:** 50% of blog posts within 3 days, 90% within 7–10 days.  
**If <50% indexed by day 7:** Flag site-wide crawl issue, check GSC crawl stats and robots.txt.

---

## 4️⃣ Build Fails After Content Changes

### Scenario: After editing page content, `pnpm build` returns TypeScript or syntax errors

**Trigger:** Commit changes → CI pipeline fails OR local build breaks

### Quick Resolution (<10 min)

**Step 1: Identify the error** (1 min)
```bash
# Run locally:
pnpm build

# Copy the error message. Usually it's one of:
# • "Cannot find module 'X'"
# • "Type error on line Y"
# • "JSX element mismatch"
# • "Unexpected token Z"
```

**Step 2: Check what you changed** (2 min)
```
What did I edit?
• Markdown/text content only? → Rebuild (clean cache)
• Imported a new component? → Check import path
• Changed JSX structure? → Check syntax
• Edited a config file? → Revert and rebuild
```

**Step 3: Fix**

| Error | Cause | Fix | Time |
|-------|-------|-----|------|
| "Cannot find module" | Wrong import path | Check file exists, fix path | 2 min |
| "Type error" | TypeScript type mismatch | Check variable type, cast if needed | 3 min |
| "Unexpected token" | Syntax error (missing bracket, semicolon, etc.) | Fix syntax | 2 min |
| "JSX mismatch" | Component props mismatch | Check component signature vs usage | 3 min |

**Step 4: Verify**
```bash
pnpm build
# Should complete with "✓ Built successfully"
```

### When to Rollback

If you can't fix the error in 10 minutes:

1. **Revert your changes** (2 min)
   ```bash
   git checkout [file you edited]
   pnpm build
   # Should work again
   ```

2. **Start over carefully** (5 min)
   - Edit smaller chunk
   - Build after each small change
   - Identify exactly where the error is

3. **Ask for help** if still stuck

**Don't let build errors stop you:** A broken build is usually a quick fix. 10 min max.

---

## 5️⃣ Keyword Rankings Drop Unexpectedly

### Scenario: Friday GSC check shows keywords dropped >5 positions

**Trigger:** Keyword in top 30 drops to >35 position unexpectedly

### Assessment (Do This Friday EOD)

**Step 1: Check if it's real**
```
Is this a one-day fluctuation or a trend?
• Check GSC "Queries" → sort by position change
• Look at trend line (hover over data point)
• If trend shows recovery → likely normal fluctuation, don't panic
```

**Step 2: Identify affected pages**
```
Which page(s) rank for this keyword?
• GSC → Filter by keyword
• Check "Top pages" for that query
• Did you recently optimize this page? What changed?
```

**Step 3: Root cause**

| Possible Cause | Check | Fix |
|----------------|-------|-----|
| Recent optimization made page worse | Review the changes you made | Revert worst changes or improve |
| Competitor updated their page | Check competitor ranking | Monitor; if they stay ahead, improve our content |
| Site-wide issue (crawl, indexation) | Check GSC Coverage → errors increased? | Fix crawl errors |
| Algorithm update | Check Google Webmaster Blog | No quick fix; monitor recovery |
| Natural fluctuation | Check historical trend | Wait; likely recovers in 1–2 weeks |

### Escalation

**If keyword dropped >10 positions AND you know why:**
- Document: `[keyword] dropped [X] positions after [change]. Fix: [action taken].`
- Implement fix
- Monitor recovery next week

**If keyword dropped and you don't know why:**
- Document it
- Check if it's part of broader pattern (site-wide drop?)
- Report to SEO lead

**Don't panic over 1-week fluctuations.** Organic rankings fluctuate 2–5 positions regularly. Only worry if a keyword drops >10 positions AND stays down for 2+ weeks.

---

## 6️⃣ Competitor Unexpectedly Improves

### Scenario: During Phase 5, a competitor dramatically improves their page (new content, new links)

**Trigger:** Spot-checking competitor pages for comparison, notice significant changes

### Decision Tree

```
How much did they improve?
├─ Added 300–500 words, few internal links → MINOR (monitor)
├─ Major redesign, new schema, lots of new links → MAJOR (consider pivot)
└─ Uncertain → Check against saved competitor audit CSV
```

### Minor Update (Added content, minor improvements)

**Action:** Monitor, don't panic.

- Your Phase 5 optimization is still planned to move you ahead
- Competitor's improvement is noted for Phase 6 link strategy
- Likely doesn't change your roadmap

**Log it:**
```
Competitor: [domain]
Change observed: [what changed, e.g., "added FAQ, +400 words, new images"]
Impact on us: [neutral / slight concern / major concern]
Response: [monitor / adjust Phase 5 / plan extra links in Phase 6]
```

### Major Update (Significant redesign, new links, new strategy)

**Action:** Assess if you need to pivot Phase 5.

1. **Quick reanalysis** (15 min)
   - What did they do?
   - Does it change your keyword targeting?
   - Does it change your content strategy?

2. **Decide: Continue or Pivot?**
   ```
   CONTINUE if:
   • Your Phase 5 plan still addresses gaps they don't cover
   • You have time to implement (weeks remaining)
   • The change doesn't fundamentally undermine your strategy
   
   PIVOT if:
   • Their improvement makes your planned content redundant
   • You're >50% through Phase 5 (too late to change much)
   • Their strategy reveals a gap in your approach
   ```

3. **If pivoting:**
   - Document what changed and why
   - Adjust 1–2 pages in Weeks 3–4 if possible
   - Plan for Phase 6 link strategy to counter-position

4. **If continuing:**
   - Don't change course
   - Phase 6 backlinks will differentiate you
   - Focus on execution

**Remember:** Competitor changes happen. Your Phase 5 + Phase 6 strategy is designed to win regardless. One competitor's update doesn't reset the entire roadmap.

---

## 🎯 Decision-Making Framework (When in Doubt)

Ask these questions in this order:

1. **Can I fix it in <30 min?** → FIX IT
2. **Will fixing it block other work?** → DEFER to next week
3. **Does it affect content quality?** → ESCALATE to project lead
4. **Does it affect Phase 5 completion?** → ESCALATE + adjust timeline
5. **Is it a one-time thing or a pattern?** → If pattern, escalate; if one-time, move on

---

## 📞 Escalation Protocol

**Who to contact for each type of issue:**

| Issue | Escalate To | Timing | Info to provide |
|-------|-------------|--------|-----------------|
| Phase slipping >5 hours | Project lead | Friday EOD Week 2 | Actual hours logged, root cause, recovery plan |
| CWV can't be fixed | Performance lead | Day of issue | Metric affected, diagnosis, fixes attempted |
| Build broken >10 min | Build lead | Immediately | Error message, what changed, fix status |
| Blog not indexing 7+ days | SEO lead | Day 7 after publish | Blog URL, publish date, checks done |
| Keyword drop >10 positions | SEO lead | Friday of week | Keyword, page affected, suspected cause |
| Competitor major update | SEO lead | Day observed | Competitor domain, changes noted, impact assessment |

---

## ✅ Before Escalating

Always do this first:

- [ ] Documented the issue (what, when, why)
- [ ] Attempted 1–2 quick fixes (or identified why it can't be quick-fixed)
- [ ] Checked if it's blocking other work
- [ ] Have a proposed solution or question ready (not just "it's broken")

---

**Status:** 📋 CONTINGENCY PLANS READY  
**Created:** May 17, 2026  
**Use When:** Situations arise during Phase 5 execution (May 25 – June 21)  
**Last Updated:** May 17, 2026

---

**If none of these plans fit your situation: Document it and escalate immediately. Don't speculate.**
