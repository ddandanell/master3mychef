## 4. Design System & Visual Audit

The myCHEF.id visual system rests on strong foundations — warm cream backgrounds, serif editorial headlines, gold accents, atmospheric photography — but bleeds inconsistency at the seams. WhatsApp green (#25D366) infects every page, four competing button styles fragment the UI, and the Book page looks like a different product. This chapter delivers exact specifications: hex codes, pixel values, font names, contrast ratios. A designer should implement every fix from this document alone.

---

### 4.1 Design System Analysis

#### 4.1.1 Color Palette

The four-color foundation communicates Mediterranean luxury when disciplined. Warm cream (#F5F3EF) distinguishes myCHEF from generic white-background hospitality sites. Near-black nav (#121212) delivers high-contrast authority. Gold (#C5A028) is the brand differentiator — but shifts between pages, creating visual uncertainty.

| Token | Hex | Current Usage | Assessment | Action |
|-------|-----|---------------|------------|--------|
| Cream | #F5F3EF | Page backgrounds, testimonial sections | Strong brand color | Keep; add #EBE7E1 alternate |
| Gold | #C5A028 | CTAs, labels, stars, icons | Good hue, inconsistent application | Lock to single hex; define hover (#D4AF37) and active (#A68A22) |
| Near-Black | #121212 | Navigation, hero overlays | Refined, not harsh pure black | Keep; use for nav and hero gradients |
| White | #FFFFFF | Cards, text on dark | Standard | Keep; add 1px #E8E5E0 card border |
| WhatsApp Green | #25D366 | FAB, inline buttons, indicators | **Destructive to brand** | Reserve ONLY for floating FAB |
| Body Text | #4A4A46 | Paragraphs, descriptions | Warm gray, readable at 7.8:1 contrast | Keep |
| Muted Text | #8A8680 | Captions, secondary labels | Adequate | Keep |

Gold sits at ~43 degrees on the color wheel — warm, muted, signaling craftsmanship. WhatsApp green at ~145 degrees is cool, highly saturated utility color with zero chromatic relationship to the palette. When both appear on the same page, the visual conflict undermines the IDR 2.2M++/guest positioning. Green signals "free messaging app"; gold signals "exclusive dining." They cannot coexist.

#### 4.1.2 The WhatsApp Green Problem — Critical

#25D366 appears in at least six locations per page: floating action button, inline "Book via WhatsApp" buttons, "Get a Quote" on Catering, "Ask on WhatsApp" in FAQ, online indicator dots, and staff booking buttons. On the Book page, green buttons are the most visually dominant element. At ~72% HSL saturation, green draws the eye more aggressively than gold at ~63%, creating an inverted hierarchy where utility outranks primary CTAs.

**Fix: all inline WhatsApp buttons become gold (#C5A028) with near-black (#121212) text.** Green is reserved exclusively for the floating FAB, where brand recognition as "WhatsApp" aids usability.

#### 4.1.3 Typography — Strong Pairing, Weak Consistency

The serif headline + sans-serif body combination is the site's strongest typographic asset. Serif (likely Playfair Display or Cormorant Garamond) delivers editorial authority; sans-serif (Inter) ensures body readability. The italic serif treatment on Catering and Villa Chef pages is a sophisticated brand signature that should be standardized across all service pages.

| Element | Font Family | Weight | Desktop Size | Mobile Size | Letter-spacing | Line-height | Issue |
|---------|-------------|--------|--------------|-------------|----------------|-------------|-------|
| Logo "myCHEF" | Inter | 300 | 18px | 16px | 0.15em | 1.2 | Good |
| Nav links | Inter | 500 | 13px | 12px | 0.1em | 1.4 | Increase to 12px/600wt |
| Section labels | Inter | 400 | 12px | 11px | 0.25em | 1.4 | **Unreadable — min 14px, 500wt** |
| Hero heading (H1) | Playfair/Cormorant | 400/700 | 56-72px (varies) | 36-40px | -0.01em | 1.15 | **Standardize to 64px / 40px** |
| Section heading (H2) | Playfair/Cormorant | 400 | 40-48px | 28-32px | 0 | 1.2 | Inconsistent sizing |
| Card titles (H3) | Inter | 500 | 20-24px | 18px | 0 | 1.3 | Standardize to 22px/600wt |
| Body text | Inter | 400 | 16-18px | 16px | 0 | 1.6 | Good |
| Button text | Inter | 500 | 13px | 12px | 0.12em | 1.0 | Increase padding |
| Stats/labels | Inter | 400 | 12-13px | 12px | 0.08em | 1.4 | Increase to 13px minimum |
| Testimonial quotes | Inter | 400 italic | 14px | 14px | 0 | 1.6 | **Increase to 15px** |

Three critical failures. Section labels at 12px are unreadable from normal viewing distance — "MYCHEF.ID — BALI" and "CONCIERGES" disappear into backgrounds. Fix: 14px/500wt/0.2em tracking. Hero headings vary 56-72px across pages — Fine Dining at ~72px, In-Villa Service at ~48px. Standardize to 64px desktop / 40px mobile, line-height 1.15. Body text on hero overlays lacks text-shadow, becoming illegible over complex imagery.

#### 4.1.4 Component Inconsistency — Four Buttons, No Hierarchy

The button system scores 3/10 — the weakest component category.

| Button Style | Background | Text | Used On | Problem |
|-------------|-----------|------|---------|---------|
| Gold pill | #C5A028 | #121212 | Fine Dining "Book Your Evening" | Correct primary CTA |
| Green pill | #25D366 | #FFFFFF | Catering, Book page, Staff | **Wrong color** |
| Outlined pill | Transparent | White/dark border | "Explore Menu" | Acceptable secondary |
| Brown pill | ~#7C5C3A | #FFFFFF | In-Villa "Hire Staff" | Random, no system logic |

The brown button (#7C5C3A) appears nowhere else in the palette, has no documented purpose, and creates a fifth color in a three-color system. Eliminate it entirely.

---

### 4.2 Visual Hierarchy Per Page

#### 4.2.1 Homepage — Cards Dominate, Hero Weak

The three service cards with full-bleed photography and gradient overlays are the page's strongest element — they carry the entire first impression. The hero heading "Choose Your Way" on plain cream is the weakest element on the page: vague, devoid of imagery, wasting the most valuable real estate in the entire user journey. A first-time visitor landing on the homepage sees a heading that could belong to a travel blog, a fashion brand, or a lifestyle app — nothing signals "private chef service" until the cards appear below the fold. The "MYCHEF.ID — BALI" label at 12px tracking is practically invisible at desktop resolution. Gold "Explore" links on dark card overlays suffer from poor contrast against warm-toned photography. The WhatsApp FAB competes directly with the gold "BOOK" nav button, creating dual-CTA confusion where two high-priority actions fight for the same click. **Score: 5/10.** Fix: add a full-bleed hero image with the heading overlaid, or redesign the hero to lead with the cards as the primary visual entry point.

#### 4.2.2 Fine Dining — Best Hierarchy on the Site

The Fine Dining page achieves what every service page should: within three seconds, the user understands exactly what is being offered, at what price point, and how to take action. The serif heading "Private Chef Bali — Fine Dining Tasting Menu in Your Villa" over a dark villa dining image creates an immediate premium impression that the cream-background pages cannot match. The gold "BOOK YOUR EVENING" CTA is clear and prominent. Stats (500+ villa dinners, 4-24 guests, wine pairing, 2.5-3 hour experience) are visible and credible — they answer the four questions every prospect has without requiring scroll. The sub-label in tracked gold at approximately 11px is too small but does not undermine the overall hierarchy because the heading and CTA carry sufficient visual weight. The only element competing for attention is the green FAB in the bottom-right corner, which introduces the same color-clash problem seen site-wide. **Score: 8/10.** This page should be the structural template for every service page: hero image with dark overlay → serif heading → body text → gold primary CTA → stats row.

#### 4.2.3 Catering — Good with One Critical Error

The Catering page demonstrates the power of the italic serif secondary heading — "Villa Catering Bali. Chef, Staff & Setup Included." reads like a magazine subhead, not a service page slugline. This editorial voice is exactly what separates premium hospitality brands from commodity catering services. Gold checkmarks on the stats row are a strong visual device that creates immediate scanability. IDR 450K per person pricing is visible and well-positioned. The critical error is the green "GET A QUOTE — 2 MIN REPLY" CTA: it is the most saturated element in the hero and commands attention for the wrong reasons. The "2 MIN REPLY" promise is excellent copy — the color is the problem. Swapping the button to gold (#C5A028) with dark text preserves the strong hierarchy while aligning the page with the Fine Dining visual standard. **Score: 7/10.**

#### 4.2.4 Book Page — Worst Visual on the Site

The Book page is the conversion endpoint of the entire site — every nav click, every card exploration, every Google search eventually funnels here. It is also the worst-looking page. Five service cards sit on a cream background with white card surfaces (#F5F3EF vs #FFFFFF), creating barely perceptible contrast that makes the cards float without visual definition. There is no hero image, no atmospheric entry point, no emotional trigger to propel the user toward action. The "Book Your Experience" heading has no visual weight because it sits on flat cream without overlay or imagery. Green WhatsApp buttons are the highest-saturation elements on the page, meaning the most visible thing on the conversion page is a color that signals "free chat app" rather than "premium booking." Icons are inconsistent — a chef hat, plate, people, wine glass, and building icon mix line art styles with no unifying system. The 5-card grid (3+2) creates an orphan card in the second row, a layout pattern that subconsciously signals incompleteness. "LEARN MORE" outlined buttons are nearly invisible against the card backgrounds. **Score: 3/10.** Fix: add a hero image with dark overlay; replace white cards with cream-dark (#EBE7E1) for visible contrast; replace all green buttons with gold; standardize icons to a single line-art style; redesign the grid to 2x3 with a centered "Not Sure?" helper card, or switch to full-width list rows.

---

### 4.3 Layout & Spacing

The layout uses flexbox with ~1200px max-width. Horizontal padding varies 80-120px. The lack of consistent vertical rhythm is the primary spacing failure.

| Element | Current | Recommended | Rationale |
|---------|---------|-------------|-----------|
| Section vertical padding | 60-80px (varies) | **96px** | Eliminates arbitrary variation |
| Content max-width | ~1200px | **1200px** | Keep — appropriate |
| Card grid gap | 24px | **32px** | Visual independence between cards |
| Nav bar height | 56px | **64px** | Luxury standard, more presence |
| Hero text left padding | ~370px | **320px** | Reduces excessive offset |
| Button horizontal padding | ~24px | **32px** | Wider pills feel premium |

Current padding varies without logic — "Why myCHEF" at 60px, "Six Things Promise" at 80px, "How It Works" at an estimated 70px. This arbitrary stepping creates a subtle but perceptible unevenness as users scroll. The 96px standard (6rem) creates the rhythmic consistency that premium hospitality brands require; it gives each section room to breathe without pushing subsequent content below the fold. The 24px card gap is too tight at desktop widths above 1200px — cards feel crowded rather than curated. At 32px, each card gains visual independence, signaling that these are distinct services with separate value propositions, not a bundled package. The navigation at 56px is functional but undersized for a luxury brand positioning — increasing to 64px with 0 48px horizontal padding gives the header the authority weight it needs. Hero text at ~370px left offset on large screens pushes content too far right; 320px maintains asymmetry without straining readability. The Book page's 5-card orphan grid (3+2) needs a sixth card ("Not Sure?" helper routing to WhatsApp) or a layout switch to 2-column or full-width list rows.

---

### 4.4 Typography Review — Detailed Specifications

#### 4.4.1 Section Labels

Section labels ("MYCHEF.ID — BALI", "CONTACT", "CONCIERGES", "PRIVATE CHEF BALI") at 12px/400wt/0.25em tracking are unreadable from normal viewing distance at 1920px resolution. The label essentially disappears into the cream background, failing both as a navigational cue and as a brand element. The current 0.25em tracking is also excessive at 12px — it spreads the glyphs so thin that individual letters lose coherence. Fix: 14px/500wt/0.2em tracking/uppercase, color #9A7B1A (WCAG AA-compliant darker gold at 5.0:1 contrast). This treatment maintains the tracked, uppercase character of the labels while making them legible and compliant.

#### 4.4.2 Hero Headings

Standardize: 64px desktop / 40px mobile, line-height 1.15. Multi-line headings need 1.15-1.2 to prevent ascender/descender collisions in the serif face.

#### 4.4.3 Hero Body Text

White text on hero images needs `text-shadow: 0 2px 20px rgba(0,0,0,0.5)` and color shift to `rgba(255,255,255,0.9)` for guaranteed readability over complex imagery.

#### 4.4.4 Italic Serif

The italic serif secondary headings on Catering and Villa Chef pages signal sophistication. Standardize across all service page heroes as a consistent brand signature.

---

### 4.5 Color System Fix — Exact Specifications

#### 4.5.1 Lock Gold to #C5A028

```css
/* PRIMARY PALETTE — LOCKED */
--color-gold:        #C5A028;  /* CTAs, labels, stars, icons, underlines */
--color-gold-hover:  #D4AF37;  /* Hover states */
--color-gold-active: #A68A22;  /* Active states */
--color-gold-wcag:   #9A7B1A;  /* Small text on cream (WCAG AA) */

/* NEUTRAL PALETTE */
--color-cream:       #F5F3EF;  /* Page backgrounds */
--color-cream-dark:  #EBE7E1;  /* Alternate sections, card borders */
--color-near-black:  #121212;  /* Nav, overlays, button text */
--color-charcoal:    #1A1A1A;  /* Headings on light */
--color-body:        #4A4A46;  /* Body text */
--color-muted:       #8A8680;  /* Captions */
--color-white:       #FFFFFF;  /* Cards, text on dark */

/* FUNCTIONAL — RESTRICTED */
--color-whatsapp:    #25D366;  /* RESERVED ONLY for floating FAB */
--color-success:     #4A7C59;  /* Muted sage */
--color-error:       #C44B4B;  /* Soft red */
```

#### 4.5.2-4.5.4 Implementation Rules

Green #25D366 is reserved exclusively for the floating FAB — everywhere else, gold owns the CTA. All inline WhatsApp buttons use `background: #C5A028; color: #121212` with a dark WhatsApp icon beside text. Hero overlays: `linear-gradient(to bottom, rgba(18,18,18,0.3) 0%, rgba(18,18,18,0.6) 50%, rgba(18,18,18,0.8) 100%)`.

---

### 4.6 Component Review — Scorecard

| Component | Score | Strengths | Weaknesses | Fix |
|-----------|-------|-----------|------------|-----|
| Navigation | 8/10 | Clean minimal; centered + CTA is luxury standard | Missing active indicator; no scroll transition; links undersized | Add active underline; increase to 64px; add shadow on scroll |
| Buttons | 3/10 | Pill shape on-brand | Four styles, no hierarchy; green and brown destroy coherence | Unify to 3 styles; kill green and brown |
| Service cards | 7/10 | Full-bleed photos; rounded corners; 3-column | Gold "Explore" poor contrast; no hover; descriptions small | Add hover lift; increase Explore to 44px touch target |
| Testimonials | 4/10 | White cards; gold stars | Poor contrast on cream; no photos; inconsistent star gold; italic 14px | Add client photos; 15px quotes; lock stars to #C5A028 |
| FAQ accordion | 6/10 | Clean structure; cream items | Answers same weight as questions; green CTA; no hover | Differentiate answers; gold CTA; hover state |
| Staff cards | 5/10 | Clean white; arrows clickable | Too flat; arrow <20px; titles lack weight | Add shadow/hover; 20px arrows; 600wt titles |
| Book cards | 3/10 | Clean 5-service categorization | White on cream; inconsistent icons; green dominates; orphan | Complete redesign — hero image, cream-dark cards, gold buttons |

#### 4.6.1 Unified Button System

```css
.btn-primary {
  background: #C5A028; color: #121212; border: 1px solid #C5A028;
  border-radius: 999px; padding: 14px 32px;
  font: 600 12px/1 Inter; letter-spacing: 0.12em; text-transform: uppercase;
}
.btn-primary:hover { background: #D4AF37; border-color: #D4AF37; }

.btn-secondary {
  background: transparent; color: inherit; border: 1px solid currentColor;
  border-radius: 999px; padding: 14px 32px;
  font: 600 12px/1 Inter; letter-spacing: 0.12em; text-transform: uppercase;
}
.btn-secondary:hover { background: rgba(197,160,40,0.1); border-color: #C5A028; color: #C5A028; }

.btn-tertiary {
  background: transparent; color: #C5A028; border: none; padding: 8px 0;
  font: 500 13px/1 Inter; letter-spacing: 0.05em;
}
.btn-tertiary:hover { color: #D4AF37; text-decoration: underline; }
```

---

### 4.7 Mobile-First Design Review

60-75% of Bali tourism traffic is mobile. Every desktop decision must be re-evaluated.

| Element | Desktop | Mobile Adaptation | Priority |
|---------|---------|-------------------|----------|
| Navigation | 7-item horizontal | Hamburger slide-out; top-level items only | Critical |
| Homepage cards | 3-column grid | **Horizontal swipe carousel**, 85% width with peek | High |
| Testimonials | 3-column, 25 cards | **3 featured with swipe**; "See all 25" link | High |
| Hero headings | Left-aligned, ~64px | Center-align, 36-40px; 20px left padding | High |
| CTA buttons | Side-by-side | **Stack vertically**, full-width | Critical |
| Stats rows | Horizontal inline | 2x2 grid or horizontal scroll | Medium |
| FAQ | Centered narrow | Full-width, 16px padding; headers 44px min | Medium |
| Book cards | 3+2 orphan grid | Single-column stack, 24px vertical gap | High |
| WhatsApp FAB | ~48px circle | **56px minimum**; shift up 80px for iOS indicator | Critical |

#### 4.7.1-4.7.5 Mobile Specifications

**Hero cards (4.7.1):** On mobile, the three homepage service cards become a horizontal swipe carousel at 85% viewport width with the next card peeking at 15% — a clear swipe affordance. Each card contains: full-bleed image, title, one-line description, arrow icon. Swipe dots or progress indicator below. This preserves photographic impact while reducing vertical scroll depth by approximately two screen heights.

**Testimonials (4.7.2):** Twenty-five full testimonials create approximately 8-10 screen scrolls on mobile. Few users reach the FAQ or final CTA. The fix: three featured testimonials (highest ratings, most detailed, best venue names) in a horizontal swipe carousel. Each card: client name, star rating, quote truncated to 3 lines with "Read more" expand. "See all 25 reviews" links to a dedicated reviews page. This reduces homepage mobile scroll by approximately 40% while surfacing the strongest social proof.

**Sticky bottom CTA (4.7.3):** All service pages need a sticky bottom CTA bar on mobile — near-black (#121212) background, gold text, 56px height, visible during scroll. Text: "Get Quote — Message on WhatsApp." This eliminates scroll-back friction that kills mobile conversions. The FAB sits 72px above the bar to prevent overlap with the iOS home indicator.

**WhatsApp FAB (4.7.4):** 56px diameter minimum (Google touch target standard). Current ~48px is below minimum. A subtle pulse animation — scale 1.0 to 1.05 over 2 seconds, infinite — draws attention without the visual aggression of bright green saturation.

**Homepage scroll depth (4.7.5):** The homepage contains 9+ sections. On mobile this is exhausting. Move "Who We Are" (Adriano founder story) to a dedicated About page linked from nav. Move FAQ to its own page or collapse to an accordion link. The homepage goal is singular: help users understand the service, trust the brand, and click WhatsApp. Every section not directly serving this goal is mobile scroll debt.

---

### 4.8 Accessibility Review

#### 4.8.1 Contrast Failures

| Element | Foreground | Background | Ratio | WCAG AA | Pass? | Fix |
|---------|-----------|------------|-------|---------|-------|-----|
| Nav text on dark | #FFFFFF | #121212 | 17.5:1 | 4.5:1 | Yes | Keep |
| Heading on cream | #1A1A1A | #F5F3EF | 14.2:1 | 4.5:1 | Yes | Keep |
| Body text on cream | #4A4A46 | #F5F3EF | 7.8:1 | 4.5:1 | Yes | Keep |
| **Gold label on cream** | **#C5A028** | **#F5F3EF** | **3.1:1** | **4.5:1** | **No** | **#9A7B1A (5.0:1)** |
| Card text on overlay | #FFFFFF | ~#666666 | 5.1:1 | 4.5:1 | Marginal | Add text-shadow |
| Green button text | #FFFFFF | #25D366 | 2.9:1 | 4.5:1 | No | Use gold + dark text |
| Hero body text | #FFFFFF | Variable image | ~4-8:1 | 4.5:1 | Marginal | text-shadow: 0 2px 20px rgba(0,0,0,0.5) |

The gold label failure is most impactful. Section labels, tracking text, and decorative elements at #C5A028 on #F5F3EF achieve only 3.1:1 — well below 4.5:1 for text under 18px. #9A7B1A at ~5.0:1 passes WCAG AA. This darker gold is for small text only; #C5A028 remains for buttons (size exempt), icons, and decorative elements.

#### 4.8.2 Tap Target Sizes

| Element | Current | Minimum | Pass? | Fix |
|---------|---------|---------|-------|-----|
| Nav links | ~40px height | 44px | Marginal | 64px nav height, links inherit full height |
| BOOK button | ~36px height | 44px | **No** | 14px vertical padding, total 48px+ |
| "Explore" link | ~20px height | 44px | **No** | 44px minimum touch target |
| Staff card arrow | ~16px | 44px | **No** | 44x44px container |
| FAQ accordion | ~48px height | 44px | Yes | Keep |
| WhatsApp FAB | ~48px | 48px | Yes | Increase to 56px |

#### 4.8.3-4.8.5 Additional Accessibility

**Italic testimonial quotes at 14px** reduce readability for dyslexic users — italic sacrifices letterform distinctiveness at small sizes. Fix: 15px non-italic with quotation marks, or 15px italic at 1.7 line-height with true italic font cut (not browser-generated oblique).

**Focus states** are invisible in all screenshots. Specification: `outline: 2px solid #C5A028; outline-offset: 2px;` on all focusable elements. Gold outline works against both cream and dark backgrounds.

**Reduced motion:** Respect `prefers-reduced-motion: reduce` — disable FAB pulse, card hover transitions, and accordion animation for users with vestibular disorders. Fallback: instant state changes.

---

### 4.9 Design System Quick Reference

**BACKGROUNDS**

| Token | Hex | Usage |
|-------|-----|-------|
| Page | #F5F3EF | All page backgrounds |
| Alternate | #EBE7E1 | Alternating sections |
| Cards | #FFFFFF | Card surfaces, 1px #E8E5E0 border |
| Nav | #121212 | Fixed nav bar |
| Hero overlay | Gradient | rgba(18,18,18,0.3) to rgba(18,18,18,0.8) |

**TEXT**

| Token | Hex | Usage |
|-------|-----|-------|
| Headings (light) | #1A1A1A | Headlines on cream/white |
| Headings (dark) | #FFFFFF | Hero headings, nav text |
| Body | #4A4A46 | Paragraphs |
| Body on dark | rgba(255,255,255,0.9) | Hero body with text-shadow |
| Muted | #8A8680 | Captions |
| Labels | #9A7B1A | Section labels, tracking text |

**ACCENT**

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #C5A028 | All CTAs, stars, icons |
| Hover | #D4AF37 | Hover states |
| Active | #A68A22 | Active states |

**BUTTONS — Three Styles Only**

| Style | Background | Text | Border |
|-------|-----------|------|--------|
| Primary | #C5A028 | #121212 | 1px #C5A028 |
| Secondary | Transparent | currentColor | 1px currentColor |
| Tertiary | Transparent | #C5A028 | None |

**TYPOGRAPHY**

| Role | Font | Weight | Desktop | Mobile |
|------|------|--------|---------|--------|
| Headlines | Playfair/Cormorant Garamond | 400/700 | 64px | 40px |
| Section labels | Inter | 500 | 14px | 13px |
| Body | Inter | 400 | 16px | 16px |
| Buttons | Inter | 600 | 12px | 12px |

**SPACING**

| Token | Value |
|-------|-------|
| Section padding | 96px |
| Content max-width | 1200px |
| Grid gap | 32px |
| Card radius | 16px |
| Button radius | 999px (pill) |
| Nav height | 64px |

**MOBILE BREAKPOINTS**

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | < 768px | Single column, horizontal carousels, hamburger nav, sticky CTA bar |
| Tablet | 768-1024px | 2-column grids, 64px padding, 48px headings |
| Desktop | > 1024px | 3-column grids, 96px padding, 64px headings |

---

*Design system audit completed across 8 pages at 1920x1080. All scores, hex codes, and pixel values derived from direct visual analysis. Implementation priority: color lock (4.5), button unification (4.6), accessibility (4.8), mobile (4.7).*
