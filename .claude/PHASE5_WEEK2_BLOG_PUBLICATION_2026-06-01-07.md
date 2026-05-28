# Phase 5 Week 2: Blog Publication & Homepage Optimization
**June 1-7, 2026**

Publish Blog #1 and optimize homepage with internal linking to new content.

---

## 📅 Week 2 Daily Breakdown

| Day | Task | Duration | Key Action | Success = |
|-----|------|----------|-----------|-----------|
| **SUN 6/1** | Blog #1 Outline + Publish | 4h | Finalize "How to Hire Private Chef" + publish to /blog | Blog live, indexed by GSC |
| **MON 6/2** | Homepage Optimization P1 | 3h | Add CTAs + internal links to Blog #1 | 4-6 new internal links |
| **TUE 6/3** | Fine-Dining Pillar Update | 3h | Add +600 words + 2 H2s + schema | Page ready for crawl |
| **WED 6/4** | Blog #1 Link Amplification | 2h | Internal links from other pages to Blog #1 | 8-10 total internal links |
| **THU 6/5** | Catering Pillar Update | 3h | +400 words + 2 H2s + VideoObject schema | Page ready for crawl |
| **FRI 6/6** | Cross-Linking & Indexing | 2h | Verify all pages linked, submit to GSC | All pages in crawl queue |
| **SAT 6/7** | Monitoring & Adjustments | 2h | Monitor crawl status, fix any issues | Ready for Week 3 |

**Total: 19 hours (3h/day average)**

---

## 🎯 Blog #1: "How to Hire Private Chef" — Detailed Outline

**File:** `/Users/openclaw/Downloads/MYCHEF . MASTER/app/src/app/blog/how-to-hire-private-chef/page.tsx`

**Metadata:**
- Title: "How to Hire a Private Chef in Bali: Complete Guide 2026"
- Meta Description: "Step-by-step guide to hiring a private chef in Bali. Budget breakdown, qualifications, contract templates, and local vendor comparison."
- Target Keyword: "how to hire private chef" (Position 62 → Target 45, Tier 2)
- Word Count Target: 3,500-4,000 words
- H1: "How to Hire a Private Chef in Bali"
- H2 Sections: 8-10 (see below)
- Internal Links: 12-15 (to /fine-dining, /catering, /staffing, /locations)
- Images: 6-8 (chef at work, kitchen setup, consultation, contract signing, happy clients)
- Schema: FAQPage (10-12 common questions), HowTo, Article, BreadcrumbList

### H2 Outline & Word Targets

```
H1: How to Hire a Private Chef in Bali (title)
  ↓
H2: Why Hire a Private Chef? (300 words)
  - Benefits over restaurants
  - Customization & dietary needs
  - Cost efficiency for groups
  
H2: What Qualifications Should a Chef Have? (400 words)
  - Culinary training & certifications
  - Experience with dietary requirements
  - Language skills (English recommended)
  - References & portfolio
  
H2: How Much Does a Private Chef Cost in Bali? (450 words)
  - Daily rates (Rp 2-5M range)
  - Monthly retainer options
  - Special event premiums
  - Hidden costs to watch for
  - Cost breakdown comparison table
  
H2: Step-by-Step Hiring Process (500 words)
  - Define your needs & budget
  - Research local chefs & agencies
  - Interview & consultation calls
  - Trial meal or tasting menu
  - Contract & agreement terms
  - Onboarding & kitchen orientation
  
H2: Questions to Ask During Interview (350 words)
  - Culinary background & specialties
  - Availability & scheduling
  - Dietary expertise (vegan, allergies, etc.)
  - Kitchen equipment familiarity
  - Contingency plans (illness, vacation)
  
H2: Common Mistakes to Avoid (300 words)
  - Hiring based on price alone
  - No trial meal before committing
  - Unclear contract terms
  - Assuming English proficiency
  - No backup plan
  
H2: myCHEF Private Chef Service (250 words)
  - Our vetting process
  - Chef profiles & specialties
  - Consultation & customization
  - Flexible scheduling
  - Client testimonials
  [CTA: "Book Your Private Chef Today"]
  
H2: FAQ (500 words, auto-generated from FAQPage schema)
  Q1: How far in advance should I book?
  Q2: Can the chef cook dietary-restricted meals?
  Q3: What if I don't like the first chef?
  Q4: Do I provide ingredients or the chef?
  Q5: Can the chef meal-plan for a week?
  Q6: Are there additional fees?
  Q7: How do I know the chef is trustworthy?
  Q8: Can the chef cater events?
  Q9: What languages do your chefs speak?
  Q10: How do you handle cancellations?
  
H2: Next Steps: Hire Your Private Chef (200 words)
  - Contact form
  - Free consultation offer
  - Timeline expectations
  [CTA: "Get Started"]

Total: ~3,700 words
```

---

## 🔗 Internal Linking Strategy for Blog #1

**From Blog #1 → Pillar Pages:**
- "fine dining" → /fine-dining (3 mentions, 2 links)
- "private chef" → /fine-dining, /catering (3 mentions, 3 links)
- "events" → /events (2 mentions, 2 links)
- "staffing" → /staffing (1 mention, 1 link)
- "locations" → /locations (1 mention, 1 link)

**To Blog #1 ← Pillar Pages:**
- /fine-dining: Add "Read our guide on hiring chefs" link (above fold)
- /catering: Add "Learn hiring tips" link (in staffing section)
- /events: Add "Private chef vs catering comparison" link (in service selection)
- /staffing: Add "How to evaluate chef qualifications" link
- /locations: Add "Villa-based chef hiring" link (bottom of page)

**From Homepage:**
- Add "Browse our guides" section with Blog #1 as featured post
- Add blog category link in navbar: /blog

**Total Internal Links Created:** ~15 links

---

## 📊 Homepage Optimization (June 2-3)

### Current Homepage Structure
- Hero section
- Services overview
- Testimonials
- FAQ
- CTA to booking

### Additions
**Add "Resources" Section (before FAQ):**
```html
<section id="resources">
  <h2>Expert Guides & Resources</h2>
  <div class="guide-cards">
    <a href="/blog/how-to-hire-private-chef" class="card">
      <h3>How to Hire a Private Chef</h3>
      <p>Complete guide to hiring in Bali...</p>
      <img src="/images/chef-hiring-guide.webp" />
    </a>
    [Blog #2-#5 cards will be added in Weeks 3-4]
  </div>
</section>
```

**Update Meta Tags:**
- Add schema.org Organization with Blog link
- Update homepage H1 to emphasize "Private Chef & Catering Bali"
- Add internal link anchors to pillar pages (fine-dining, catering, events)

---

## 🔧 Pillar Page Updates (June 3 & 5)

### Fine-Dining Page Optimization (June 3, 3 hours)

**Current State:**
- 1,800 words
- 4 H2s
- 12 internal links
- 6 images

**Target State:**
- 2,400 words (+600)
- 6 H2s (+2)
- 18 internal links (+6)
- 8 images (+2)
- FAQPage + LocalBusiness + VideoObject schema

**Changes:**

1. **Add 2 New H2 Sections (200 words total):**
   - "Wine Pairings & Sommelier Services" (100 words)
   - "Meet Our Head Chef Marco" (100 words with image)

2. **Expand 2 Existing H2s (200 words total):**
   - "What is Fine Dining" (80 → 150 words)
   - "Our Menu" (200 → 300 words)

3. **Add 6 Internal Links:**
   - "Private chef hiring" → /blog/how-to-hire-private-chef
   - "Staffing options" → /staffing (2x)
   - "Villa locations" → /locations (2x)
   - "Event planning" → /events (1x)

4. **Add 2 Images:**
   - Wine pairing close-up
   - Chef Marco portrait (high-quality)

5. **Add Schema Markup:**
   - FAQPage: "What wines pair with our menu?" etc. (5-6 questions)
   - VideoObject: Embed 30-60s video of chef preparing signature dish
   - LocalBusiness: Update with expanded hours/contact

**Effort:** 3 hours (writing + linking + schema)

---

### Catering Page Optimization (June 5, 3 hours)

**Current State:**
- 1,600 words
- 4 H2s
- 10 internal links
- 5 images

**Target State:**
- 2,000 words (+400)
- 6 H2s (+2)
- 16 internal links (+6)
- 7 images (+2)
- FAQPage + Service schema

**Changes:**

1. **Add 2 New H2 Sections (150 words total):**
   - "Catering Menu Customization" (75 words)
   - "Client Testimonials & Case Studies" (75 words)

2. **Expand 2 Existing H2s (150 words total):**
   - "What's Included" (150 → 200 words)
   - "Catering Packages" (200 → 250 words)

3. **Add 6 Internal Links:**
   - "Hire our chefs" → /blog/how-to-hire-private-chef (2x)
   - "Event planning" → /events (2x)
   - "Villa venues" → /locations (2x)

4. **Add 2 Images:**
   - Catered event setup
   - Plated dishes close-up

5. **Add Schema:**
   - Service: Schema for "Catering Service" with pricing/description
   - FAQPage: Common catering questions

**Effort:** 3 hours

---

## 📋 Daily Checklists

### SUNDAY, JUNE 1 — Blog #1 Publish

**Morning (2h):**
- [ ] Finalize Blog #1 content (3,500-4,000 words)
- [ ] Verify all H2 sections complete
- [ ] Add all internal links (to fine-dining, catering, events, staffing, locations)
- [ ] Compress and optimize 6-8 images
- [ ] Add alt text to all images

**Afternoon (2h):**
- [ ] Create FAQPage schema (10-12 questions)
- [ ] Create HowTo schema (step-by-step structure)
- [ ] Create Article schema (author, date, keywords)
- [ ] Deploy to production
- [ ] Verify page loads (http://localhost:3000/blog/how-to-hire-private-chef)
- [ ] Submit to GSC for indexing

**Success:**
- [ ] Blog published and accessible
- [ ] All schema markup in place
- [ ] GSC submission queued
- [ ] No 404 errors in related pages

---

### MONDAY, JUNE 2 — Homepage Optimization P1

**Morning (1.5h):**
- [ ] Add "Resources" section to homepage
- [ ] Create Blog #1 feature card with image
- [ ] Add blog category link to navbar
- [ ] Verify layout on mobile (320px, 768px, 1440px)

**Afternoon (1.5h):**
- [ ] Add internal links from homepage to Blog #1
- [ ] Update homepage H1 and meta description
- [ ] Verify all links working
- [ ] Test homepage load time (<2.5s target)

**Success:**
- [ ] Homepage updated with blog resources section
- [ ] 4-6 new internal links added
- [ ] Mobile layout verified
- [ ] No layout shifts (CLS < 0.1)

---

### TUESDAY, JUNE 3 — Fine-Dining Pillar Update

**Morning (1.5h):**
- [ ] Write 2 new H2 sections (wine pairings, chef background)
- [ ] Expand 2 existing H2 sections with additional content
- [ ] Add word count tracking (target: 2,400 words)

**Afternoon (1.5h):**
- [ ] Add 6 new internal links (blog, staffing, locations, events)
- [ ] Add 2 new images (wine, chef portrait) with alt text
- [ ] Create FAQPage schema markup (5-6 questions)
- [ ] Create VideoObject schema for chef video (or add placeholder link)

**Evening:**
- [ ] Deploy to production
- [ ] Verify page structure in DevTools: H1 (should be 1), H2 (should be 6)
- [ ] Submit updated page to GSC
- [ ] Verify no crawl errors

**Success:**
- [ ] Fine-dining page: 2,400 words, 6 H2s, 18 links
- [ ] All schema markup present
- [ ] All images optimized and linked

---

### WEDNESDAY, JUNE 4 — Blog #1 Link Amplification

**All Day (2h):**
- [ ] Review internal link opportunities across all pages
- [ ] Add Blog #1 links from:
  - [ ] Homepage (1-2 links)
  - [ ] /fine-dining (2-3 links, already started)
  - [ ] /catering (1-2 links)
  - [ ] /events (1-2 links)
  - [ ] /staffing (1 link)
  - [ ] Blog index page (/blog, featured section)

**Verification:**
- [ ] Verify 8-10+ total internal links to Blog #1
- [ ] Verify all links use descriptive anchor text
- [ ] Verify no anchor text repetition

**Success:**
- [ ] Blog #1 has strong internal linking from all pillar pages
- [ ] Link equity distributed across pages

---

### THURSDAY, JUNE 5 — Catering Pillar Update

**Morning (1.5h):**
- [ ] Write 2 new H2 sections (menu customization, testimonials)
- [ ] Expand 2 existing H2 sections with additional content
- [ ] Add word count tracking (target: 2,000 words)

**Afternoon (1.5h):**
- [ ] Add 6 new internal links (blog, events, locations)
- [ ] Add 2 new images (event setup, dishes) with alt text
- [ ] Create Service schema markup (catering service details)
- [ ] Create FAQPage schema (5-6 common catering questions)

**Evening:**
- [ ] Deploy to production
- [ ] Verify page structure: H1 (1), H2 (6)
- [ ] Submit to GSC
- [ ] Verify no crawl errors

**Success:**
- [ ] Catering page: 2,000 words, 6 H2s, 16 links
- [ ] All schema present
- [ ] All images optimized

---

### FRIDAY, JUNE 6 — Cross-Linking & Indexing

**Morning (1h):**
- [ ] Run internal link audit across all pages
- [ ] Verify every pillar page links to Blog #1
- [ ] Verify Blog #1 links to all pillar pages
- [ ] Check for orphaned pages (no internal links)

**Afternoon (1h):**
- [ ] Submit all updated pages to GSC (fine-dining, catering, blog #1, homepage)
- [ ] Verify all pages in crawl queue
- [ ] Check for any crawl errors or warnings
- [ ] Monitor indexing status (target: indexed within 48 hours)

**Success:**
- [ ] All pages properly cross-linked
- [ ] All updated pages submitted to GSC
- [ ] No crawl errors reported
- [ ] Crawl queue populated

---

### SATURDAY, JUNE 7 — Monitoring & Adjustments

**Morning (1h):**
- [ ] Check GSC crawl status for all pages
- [ ] Monitor page indexing progress
- [ ] Check for any indexation issues
- [ ] Review any GSC warnings or errors

**Afternoon (1h):**
- [ ] Run Lighthouse audit on Blog #1 (target: >90 overall)
- [ ] Check mobile rendering (no layout shifts)
- [ ] Verify all internal links working
- [ ] Fix any issues found

**Success:**
- [ ] All pages indexed or in crawl queue
- [ ] No outstanding errors
- [ ] Ready for Week 3 (Blog #2-3 publication)

---

## 🎯 Success Metrics — Week 2

By June 7 EOD:

- [ ] **Blog #1 Published** (3,500-4,000 words, 8-10 H2s, 12-15 internal links)
- [ ] **Homepage Updated** (4-6 new internal links to Blog #1)
- [ ] **Fine-Dining Optimized** (+600 words, +2 H2s, +6 links, FAQPage schema)
- [ ] **Catering Optimized** (+400 words, +2 H2s, +6 links, Service schema)
- [ ] **All Pages Linked** (Blog #1 linked from all pillars, pillars linked to Blog #1)
- [ ] **GSC Submission Complete** (all pages queued for crawl)
- [ ] **No Crawl Errors** (clean GSC status)
- [ ] **Lighthouse Score >90** (Blog #1 performance verified)

---

## ⚠️ Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Page not indexed after 48h | Check GSC crawl status; request crawl manually |
| Internal links broken | Run link audit script; verify all URLs in DevTools |
| Images slow page down | Run WebP conversion; compress with TinyPNG |
| Schema validation errors | Use Google Rich Results Test; fix markup |
| Layout shifts during load | Check image dimensions; add container sizes |

---

**Status:** Week 2 ready to execute  
**Timeline:** June 1-7, 2026 (7 days)  
**Handoff:** June 8 (Week 3: Blog #2-3 publication begins)
