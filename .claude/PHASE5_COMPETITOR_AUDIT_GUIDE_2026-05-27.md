# Phase 5 Week 1: Competitor Audit Execution Guide
**May 27-28, 2026**

Complete analysis of 12-15 competitor pages to identify content gaps and ranking opportunities.

---

## 📋 Overview

**Objective:** Extract competitor content metrics and compare against myCHEF pages

**Timeline:**
- **May 27 (4 hours):** Audit first 4-5 competitor pages
- **May 28 (3 hours):** Complete remaining 7-10 pages

**Output:** `PHASE5_COMPETITOR_AUDIT_2026-05-28.csv` (filled with 12-15 rows)

---

## 🔍 How to Audit Each Competitor Page

### Step 1: Page Setup (2 minutes)

1. **Open competitor URL in browser**
   - Example: https://gisellebali.com/fine-dining (or competitor page)
   
2. **Open DevTools (F12 or Cmd+Shift+I)**
   - You'll use this to extract header structure and link counts

3. **Open Page Source (Cmd+U or Ctrl+U)**
   - Needed for schema markup detection

### Step 2: Content Length Analysis (3 minutes)

**Method 1: Simple Word Count (Best)**
1. Triple-click to select all visible body text (main content area)
2. Paste into a word counter: https://wordcounter.net/ or https://wordcounttools.com/
3. Record the number (exclude headers, footers, sidebars)

**Method 2: Shell Command (Advanced)**
- If you have the HTML:
```bash
curl -s https://competitor-url.com | grep -oE '>([^<]+)<' | wc -w
```

**What to record:**
- Competitor word count: **______ words**
- Example: 2,400 words (includes intro + all H2 sections)

---

### Step 3: Header Structure Analysis (3 minutes)

**Using DevTools:**

1. **Open DevTools Console** (F12 → Console tab)
2. **Count H1 tags:**
   - Run: `document.querySelectorAll('h1').length`
   - This shows the number of `<h1>` elements
   - **Expected:** Usually 1 (single title per page)

3. **Count H2 tags:**
   - Run: `document.querySelectorAll('h2').length`
   - This shows the number of `<h2>` elements
   - **Expected:** 4-8 H2s for content-rich pages

4. **List H2 text** (optional, for content understanding):
   - Run: `Array.from(document.querySelectorAll('h2')).map(h => h.textContent)`
   - Shows what each H2 section covers

**What to record:**
- H1 count: **____** (usually 1)
- H2 count: **____** (typically 4-8)

---

### Step 4: Internal Link Analysis (2 minutes)

**Using DevTools:**

1. **Count internal links (same domain):**
   - Open DevTools Console
   - Get the domain: `window.location.hostname` → e.g., "gisellebali.com"
   - Run: `document.querySelectorAll('a[href*="' + window.location.hostname + '"]').length`
   - This counts all links to the same domain

2. **Count external links:**
   - Run: `document.querySelectorAll('a[href^="http"]').length - [result from step 1]`
   - Or just visually count "external links" in navigation

**What to record:**
- Internal links (same domain): **____**
- External links: **____**
- **Total links:** ______ (combine both)

---

### Step 5: Image Count Analysis (2 minutes)

**Method: Visual Inspection + DevTools**

1. **Open DevTools → Elements tab**
2. **Search for images:** Cmd+F, type `<img` or `<picture>`
3. **Count visible images** (hero image + section images)
   - Hero: 1 image (large banner at top)
   - Section images: 2-5 per major section
   - Exclude: tiny icons, logos, repeat images

**Quick alternative:**
- Run in Console: `document.querySelectorAll('img').length`
- Record result: **______ images**

**What to record:**
- Total images on page: **____**

---

### Step 6: Schema Markup Detection (2 minutes)

**Using Page Source (Cmd+U):**

1. **Open Page Source (right-click → View Page Source)**
2. **Search for schema:** Cmd+F, type `"@type"`
3. **Find all schema blocks** (look for these patterns):
   ```json
   "@type": "FAQPage"    ← FAQ schema
   "@type": "Service"    ← Service schema
   "@type": "LocalBusiness"
   "@type": "BreadcrumbList"
   "@type": "Article"
   "@type": "HowTo"
   "@type": "VideoObject"
   ```

4. **List all schema types found** on this page

**What to record:**
- Schema types detected: ________________
- Example: "FAQPage, BreadcrumbList, LocalBusiness"

---

### Step 7: Metadata & Update Frequency (2 minutes)

**Meta Description (from page source):**
1. Open Page Source (Cmd+U)
2. Search: Cmd+F, type `<meta name="description"`
3. Copy the entire content attribute
4. Example: `<meta name="description" content="Fine dining in Bali with private chefs...">`

**Update Frequency (estimated):**
- Look for "Last Updated" text in footer (most pages have this)
- If visible: "Updated May 2026" → **Monthly** or **Weekly**
- If no visible date: **Static** (rarely updated)
- If very new content: **Weekly** or **Recently Published**

**What to record:**
- Meta description: "________________"
- Update frequency: **Weekly / Monthly / Static**

---

## 📊 Recording Template (CSV Row Format)

For each competitor page, fill in one row of the CSV:

```
Pillar Page | Target Keyword | Competitor Domain | URL | Position | Content Length (words) | H1 Count | H2 Count | Internal Links | Images | Schema Types | Meta Description | Update Frequency | myCHEF Length | Content Gap | H2 Gap | Link Gap | Image Gap | Priority
/fine-dining | fine dining bali | gisellebali.com | https://... | 2 | 2400 | 1 | 6 | 18 | 8 | FAQPage, LocalBusiness | "Fine dining experience..." | Monthly | 1800 | -600 | +2 | -8 | -2 | TIER 1
```

---

## ✅ Checklist per Competitor Page

For each page you audit, verify:

- [ ] **Content length captured** (word count)
- [ ] **H1 count recorded** (usually 1)
- [ ] **H2 count recorded** (4-8 typical)
- [ ] **Internal link count captured**
- [ ] **Image count captured** (hero + section images)
- [ ] **Schema types listed** (FAQPage, Service, etc.)
- [ ] **Meta description copied**
- [ ] **Update frequency estimated**
- [ ] **Row added to CSV** with all fields filled
- [ ] **Gap calculations filled in** (if using automated formula)

---

## 🔢 Gap Calculations (After Audit Complete)

Once you have competitor data and myCHEF data, calculate:

```
Content Gap = myCHEF word count - Competitor word count
H2 Gap = myCHEF H2 count - Competitor H2 count
Link Gap = myCHEF internal links - Competitor internal links
Image Gap = myCHEF image count - Competitor image count
```

**Interpretation:**
- **Negative gap:** myCHEF is behind (opportunity to improve)
- **Positive gap:** myCHEF already ahead (don't worry)

### Priority Rules
- **Content gap > 500 words:** Tier 1 or Tier 2 (depending on position)
- **H2 gap > 3:** Tier 1 (structure improvement needed)
- **Schema missing:** Tier 1 (easy schema add)
- **Multiple gaps combined:** Highest priority

---

## 📝 Example: Competitor Audit (Fine Dining)

### Competitor Page: gisellebali.com/fine-dining

**Your findings:**
- Word count: 2,400
- H1 count: 1
- H2 count: 6 (sections: "About", "Menu", "Pricing", "Reservations", "Chef Profile", "Reviews")
- Internal links: 18
- Images: 8 (hero + 7 section images)
- Schema: FAQPage, LocalBusiness, BreadcrumbList
- Meta description: "Giselle Fine Dining in Bali - Michelin-inspired cuisine, private dining room, wine pairings."
- Update frequency: Monthly (footer shows "Updated May 2026")

**myCHEF fine-dining page comparison:**
- Word count: 1,800
- H1 count: 1
- H2 count: 4 (sections: "What is Fine Dining", "Menu", "Pricing", "Book")
- Internal links: 12
- Images: 6
- Schema: LocalBusiness, BreadcrumbList (missing: FAQPage)
- Meta description: "Fine dining experiences in Bali"
- Update frequency: Static

**Gap analysis:**
- Content gap: 1,800 - 2,400 = **-600 words** (myCHEF behind)
- H2 gap: 4 - 6 = **-2 H2s** (missing structure)
- Link gap: 12 - 18 = **-6 links** (fewer internal links)
- Image gap: 6 - 8 = **-2 images**
- Schema gap: Missing FAQPage (myCHEF needs this)

**Priority:** **TIER 1** (multiple gaps, quick wins)

---

## 🛠️ Tools Recommended

| Task | Tool | Link |
|------|------|------|
| Word count | WordCounter | https://wordcounter.net/ |
| Word count | WordCountTools | https://wordcounttools.com/ |
| Page source | Browser (Cmd+U) | Built-in |
| DevTools | Browser (F12) | Built-in |
| CSV Editor | Excel/Google Sheets | Built-in or https://airtable.com |
| Schema checker | Google Rich Results Test | https://search.google.com/test/rich-results |

---

## ⏱️ Timing Estimates

Per competitor page:
- **Step 1 (Setup):** 2 min
- **Step 2 (Content):** 3 min
- **Step 3 (Headers):** 3 min
- **Step 4 (Links):** 2 min
- **Step 5 (Images):** 2 min
- **Step 6 (Schema):** 2 min
- **Step 7 (Metadata):** 2 min
- **Step 8 (Recording):** 2 min

**Total per page: ~20-25 minutes**

**For 12-15 pages: 4-6.5 hours** (splits across May 27-28)

---

## 🎯 Success Metrics

By end of May 28, you should have:

- [ ] **12-15 competitor pages audited**
- [ ] **CSV file with all rows filled in**
- [ ] **No blank cells in core columns** (word count, H1, H2, links, images)
- [ ] **All gap calculations completed**
- [ ] **3-5 schema differences identified** (FAQPage, VideoObject, etc.)
- [ ] **Content gaps identified** (8-10 pages with >400 word gaps)

---

## 🚀 Next Steps (May 29-31)

Once audit complete:
1. Identify top opportunities by combining audit + keyword baseline
2. Rank by impact (position improvement potential)
3. Create PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md
4. Prioritize Tier 1 keywords for June publication

---

**Status:** Ready for May 27 execution  
**Template:** PHASE5_COMPETITOR_AUDIT_2026-05-28_TEMPLATE.csv  
**Output:** PHASE5_COMPETITOR_AUDIT_2026-05-28.csv (complete)
