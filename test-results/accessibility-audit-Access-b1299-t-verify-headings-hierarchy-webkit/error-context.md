# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility-audit.spec.ts >> Accessibility & Visual Audit >> verify headings hierarchy
- Location: tests/e2e/accessibility-audit.spec.ts:116:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "Skip to main content" [ref=e4]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e5]:
    - generic [ref=e6]:
      - link "myCHEF" [ref=e7]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e11]: myCHEF
      - generic [ref=e12]:
        - link "Book" [ref=e13]:
          - /url: /book
        - button "Open menu" [ref=e14] [cursor=pointer]:
          - img [ref=e15]
  - main [ref=e16]
  - generic [ref=e20]: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
  - contentinfo [ref=e21]:
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - heading "myCHEF" [level=3] [ref=e25]
          - paragraph [ref=e26]: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
        - generic [ref=e27]:
          - link "+62 822-3756-5997" [ref=e28]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
            - img [ref=e29]
            - text: +62 822-3756-5997
          - link "indonesia@mychef.id" [ref=e31]:
            - /url: mailto:indonesia@mychef.id
      - generic [ref=e32]:
        - generic [ref=e33]:
          - heading "Fine Dining" [level=4] [ref=e34]
          - list [ref=e35]:
            - listitem [ref=e36]:
              - link "Overview" [ref=e37]:
                - /url: /fine-dining
            - listitem [ref=e38]:
              - link "Private Chef in Bali" [ref=e39]:
                - /url: /fine-dining/private-chef-bali
            - listitem [ref=e40]:
              - link "Tasting Menu" [ref=e41]:
                - /url: /fine-dining/tasting-menu
            - listitem [ref=e42]:
              - link "Romantic Dinner" [ref=e43]:
                - /url: /fine-dining/romantic-dinner
            - listitem [ref=e44]:
              - link "Chef’s Table" [ref=e45]:
                - /url: /fine-dining/chefs-table
            - listitem [ref=e46]:
              - link "Our Menus" [ref=e47]:
                - /url: /fine-dining/menus
            - listitem [ref=e48]:
              - link "Our Chefs" [ref=e49]:
                - /url: /fine-dining/our-chefs
        - generic [ref=e50]:
          - heading "Catering" [level=4] [ref=e51]
          - list [ref=e52]:
            - listitem [ref=e53]:
              - link "Overview" [ref=e54]:
                - /url: /catering
            - listitem [ref=e55]:
              - link "BBQ Catering" [ref=e56]:
                - /url: /catering/bbq-catering
            - listitem [ref=e57]:
              - link "Buffet Catering" [ref=e58]:
                - /url: /catering/buffet
            - listitem [ref=e59]:
              - link "Plated Set Menu" [ref=e60]:
                - /url: /catering/plated-catering
            - listitem [ref=e61]:
              - link "Drop-Off Catering" [ref=e62]:
                - /url: /catering/drop-off-catering
            - listitem [ref=e63]:
              - link "Babi Guling" [ref=e64]:
                - /url: /catering/babi-guling
            - listitem [ref=e65]:
              - link "Grazing Tables" [ref=e66]:
                - /url: /catering/grazing-tables
            - listitem [ref=e67]:
              - link "Floating Breakfast" [ref=e68]:
                - /url: /catering/floating-breakfast
            - listitem [ref=e69]:
              - link "Corporate Catering" [ref=e70]:
                - /url: /catering/corporate-catering
            - listitem [ref=e71]:
              - link "Retreat Catering" [ref=e72]:
                - /url: /catering/retreat-catering
        - generic [ref=e73]:
          - heading "Events" [level=4] [ref=e74]
          - list [ref=e75]:
            - listitem [ref=e76]:
              - link "Overview" [ref=e77]:
                - /url: /events
            - listitem [ref=e78]:
              - link "Weddings" [ref=e79]:
                - /url: /events/weddings
            - listitem [ref=e80]:
              - link "Birthdays" [ref=e81]:
                - /url: /events/birthdays
            - listitem [ref=e82]:
              - link "Anniversaries" [ref=e83]:
                - /url: /events/anniversaries
            - listitem [ref=e84]:
              - link "Corporate Events" [ref=e85]:
                - /url: /events/corporate-events
            - listitem [ref=e86]:
              - link "Retreats" [ref=e87]:
                - /url: /events/retreats
            - listitem [ref=e88]:
              - link "Villa Parties" [ref=e89]:
                - /url: /events/villa-parties
            - listitem [ref=e90]:
              - link "Baby Showers" [ref=e91]:
                - /url: /events/baby-showers
        - generic [ref=e92]:
          - heading "In-Villa Service" [level=4] [ref=e93]
          - list [ref=e94]:
            - listitem [ref=e95]:
              - link "Overview" [ref=e96]:
                - /url: /in-villa-service
            - listitem [ref=e97]:
              - link "Waiters" [ref=e98]:
                - /url: /in-villa-service/waiters
            - listitem [ref=e99]:
              - link "Butlers" [ref=e100]:
                - /url: /in-villa-service/butlers
            - listitem [ref=e101]:
              - link "Bartenders" [ref=e102]:
                - /url: /in-villa-service/bartenders
            - listitem [ref=e103]:
              - link "Mixology" [ref=e104]:
                - /url: /in-villa-service/mixology
            - listitem [ref=e105]:
              - link "Sommelier" [ref=e106]:
                - /url: /in-villa-service/sommelier
            - listitem [ref=e107]:
              - link "Host & Hostess" [ref=e108]:
                - /url: /in-villa-service/host-hostess
        - generic [ref=e109]:
          - heading "Staffing" [level=4] [ref=e110]
          - list [ref=e111]:
            - listitem [ref=e112]:
              - link "Overview" [ref=e113]:
                - /url: /staffing
            - listitem [ref=e114]:
              - link "Private Chef Placement" [ref=e115]:
                - /url: /staffing/private-chef-placement
            - listitem [ref=e116]:
              - link "Live-In Chef" [ref=e117]:
                - /url: /staffing/live-in-chef
            - listitem [ref=e118]:
              - link "Villa Staff" [ref=e119]:
                - /url: /staffing/villa-staff
            - listitem [ref=e120]:
              - link "Household Staff" [ref=e121]:
                - /url: /staffing/household-staff
            - listitem [ref=e122]:
              - link "For Villa Managers" [ref=e123]:
                - /url: /staffing/for-villa-managers
            - listitem [ref=e124]:
              - link "For Hotels & Restaurants" [ref=e125]:
                - /url: /staffing/for-hotels-restaurants
        - generic [ref=e126]:
          - heading "Locations" [level=4] [ref=e127]
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "All Locations" [ref=e130]:
                - /url: /locations
            - listitem [ref=e131]:
              - link "Seminyak" [ref=e132]:
                - /url: /locations/seminyak
            - listitem [ref=e133]:
              - link "Canggu" [ref=e134]:
                - /url: /locations/canggu
            - listitem [ref=e135]:
              - link "Uluwatu" [ref=e136]:
                - /url: /locations/uluwatu
            - listitem [ref=e137]:
              - link "Ubud" [ref=e138]:
                - /url: /locations/ubud
            - listitem [ref=e139]:
              - link "Nusa Dua" [ref=e140]:
                - /url: /locations/nusa-dua
            - listitem [ref=e141]:
              - link "Jimbaran" [ref=e142]:
                - /url: /locations/jimbaran
            - listitem [ref=e143]:
              - link "Sanur" [ref=e144]:
                - /url: /locations/sanur
            - listitem [ref=e145]:
              - link "Berawa" [ref=e146]:
                - /url: /locations/berawa
            - listitem [ref=e147]:
              - link "Pererenan" [ref=e148]:
                - /url: /locations/pererenan
            - listitem [ref=e149]:
              - link "Bukit Peninsula" [ref=e150]:
                - /url: /locations/bukit
      - generic [ref=e151]:
        - link "Catering" [ref=e152]:
          - /url: /catering
        - link "Locations" [ref=e153]:
          - /url: /locations
        - link "About" [ref=e154]:
          - /url: /about
        - link "Contact" [ref=e155]:
          - /url: /contact
        - link "Services" [ref=e156]:
          - /url: /services
        - link "Pricing" [ref=e157]:
          - /url: /pricing
        - link "Price Calculator" [ref=e158]:
          - /url: /calculator
        - link "FAQ" [ref=e159]:
          - /url: /faq
        - link "Reviews" [ref=e160]:
          - /url: /reviews
        - link "Why myCHEF" [ref=e161]:
          - /url: /why-mychef
        - link "Press" [ref=e162]:
          - /url: /press
        - link "Join the Team" [ref=e163]:
          - /url: /join-our-team
        - link "Partner Platform" [ref=e164]:
          - /url: /partner-platform
        - link "Journal" [ref=e165]:
          - /url: /journal
        - link "Blog & Guides" [ref=e166]:
          - /url: /blog
        - link "Book" [ref=e167]:
          - /url: /book
      - generic [ref=e168]:
        - link "+62 822-3756-5997" [ref=e169]:
          - /url: tel:+6282237565997
          - img [ref=e170]
          - text: +62 822-3756-5997
        - link "indonesia@mychef.id" [ref=e172]:
          - /url: mailto:indonesia@mychef.id
          - img [ref=e173]
          - text: indonesia@mychef.id
        - generic [ref=e176]:
          - img [ref=e177]
          - text: Bali, Indonesia
        - link "Instagram" [ref=e180]:
          - /url: https://instagram.com/mychef.id
          - img [ref=e181]
          - text: Instagram
        - link "WhatsApp" [ref=e184]:
          - /url: https://wa.me/6282237565997
          - img [ref=e185]
          - text: WhatsApp
      - generic [ref=e187]:
        - link "Staff Login" [ref=e188]:
          - /url: /partner-platform
          - img [ref=e189]
          - text: Staff Login
        - generic [ref=e192]:
          - link "Terms" [ref=e193]:
            - /url: /terms
          - link "Privacy" [ref=e194]:
            - /url: /privacy
          - link "Cancellation" [ref=e195]:
            - /url: /cancellation
      - paragraph [ref=e196]: © 2026 myCHEF.id. All rights reserved.
  - generic [ref=e198]:
    - generic: Chat with us on WhatsApp
    - link "Chat with us on WhatsApp" [ref=e199]:
      - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
      - img [ref=e200]
```

# Test source

```ts
  23  |       const isVisible = await element.isVisible();
  24  |       if (!isVisible) continue;
  25  | 
  26  |       const style = await element.evaluate(el => {
  27  |         const computed = window.getComputedStyle(el);
  28  |         return {
  29  |           color: computed.color,
  30  |           backgroundColor: computed.backgroundColor,
  31  |           tagName: el.tagName,
  32  |           textContent: el.textContent?.substring(0, 50) || ''
  33  |         };
  34  |       });
  35  | 
  36  |       // Check for black/very dark text on black/very dark backgrounds
  37  |       const isBlackOrDarkText = isColorDark(style.color);
  38  |       const isBlackOrDarkBg = isColorDark(style.backgroundColor);
  39  | 
  40  |       if (isBlackOrDarkText && isBlackOrDarkBg && style.textContent.trim().length > 0) {
  41  |         issues.push({
  42  |           element: style.tagName,
  43  |           bg: style.backgroundColor,
  44  |           color: style.color,
  45  |           content: style.textContent
  46  |         });
  47  |       }
  48  |     }
  49  | 
  50  |     if (issues.length > 0) {
  51  |       console.log('Found potential contrast issues:');
  52  |       issues.forEach(issue => {
  53  |         console.log(`  Element: ${issue.element}, Text: "${issue.content}", BG: ${issue.bg}, Color: ${issue.color}`);
  54  |       });
  55  |     }
  56  | 
  57  |     expect(issues.length).toBe(0);
  58  |   });
  59  | 
  60  |   test('fine-dining page has no accessibility violations', async ({ page }) => {
  61  |     await page.goto('/fine-dining');
  62  |     await injectAxe(page);
  63  |     await checkA11y(page, null, {
  64  |       detailedReport: true
  65  |     });
  66  |   });
  67  | 
  68  |   test('fine-dining/our-chefs page loads correctly', async ({ page }) => {
  69  |     await page.goto('/fine-dining/our-chefs');
  70  | 
  71  |     // Check page title and heading
  72  |     const heading = page.locator('h1, h2').first();
  73  |     await expect(heading).toBeVisible();
  74  | 
  75  |     // Check for content
  76  |     const content = page.locator('body');
  77  |     const text = await content.textContent();
  78  |     expect(text).toBeTruthy();
  79  |     expect(text?.length).toBeGreaterThan(0);
  80  |   });
  81  | 
  82  |   test('check all major pages for contrast issues', async ({ page }) => {
  83  |     const pages = ['/', '/fine-dining', '/catering', '/events', '/in-villa-service', '/staffing', '/locations'];
  84  | 
  85  |     for (const pagePath of pages) {
  86  |       await page.goto(pagePath);
  87  | 
  88  |       // Simple contrast check
  89  |       const lowContrastElements: string[] = [];
  90  | 
  91  |       const elements = await page.locator('[style*="color"]').all();
  92  |       for (const element of elements.slice(0, 20)) { // Check first 20 for performance
  93  |         const isVisible = await element.isVisible().catch(() => false);
  94  |         if (!isVisible) continue;
  95  | 
  96  |         const hasLowContrast = await element.evaluate(el => {
  97  |           const style = window.getComputedStyle(el);
  98  |           const color = style.color;
  99  |           const bgColor = style.backgroundColor;
  100 | 
  101 |           return isColorDark(color) && isColorDark(bgColor);
  102 |         }).catch(() => false);
  103 | 
  104 |         if (hasLowContrast) {
  105 |           const text = await element.textContent();
  106 |           lowContrastElements.push(`${pagePath}: "${text?.substring(0, 30)}"`);
  107 |         }
  108 |       }
  109 | 
  110 |       if (lowContrastElements.length > 0) {
  111 |         console.warn(`Page ${pagePath} has potential contrast issues:`, lowContrastElements);
  112 |       }
  113 |     }
  114 |   });
  115 | 
  116 |   test('verify headings hierarchy', async ({ page }) => {
  117 |     await page.goto('/');
  118 | 
  119 |     const h1Count = await page.locator('h1').count();
  120 |     const h2Count = await page.locator('h2').count();
  121 | 
  122 |     // Should have proper heading hierarchy
> 123 |     expect(h1Count).toBeGreaterThan(0);
      |                     ^ Error: expect(received).toBeGreaterThan(expected)
  124 |     expect(h2Count).toBeGreaterThan(0);
  125 |   });
  126 | 
  127 |   test('check image alt text', async ({ page }) => {
  128 |     await page.goto('/');
  129 | 
  130 |     const images = await page.locator('img').all();
  131 |     const missingAltText: string[] = [];
  132 | 
  133 |     for (const image of images) {
  134 |       const alt = await image.getAttribute('alt');
  135 |       const src = await image.getAttribute('src');
  136 | 
  137 |       if (!alt || alt.trim() === '') {
  138 |         missingAltText.push(src || 'unknown');
  139 |       }
  140 |     }
  141 | 
  142 |     console.log(`Total images: ${images.length}, Missing alt text: ${missingAltText.length}`);
  143 |     if (missingAltText.length > 0) {
  144 |       console.warn('Images missing alt text:', missingAltText.slice(0, 5));
  145 |     }
  146 |   });
  147 | 
  148 |   test('verify links are keyboard accessible', async ({ page }) => {
  149 |     await page.goto('/');
  150 | 
  151 |     // Tab through links
  152 |     const links = await page.locator('a').all();
  153 |     expect(links.length).toBeGreaterThan(0);
  154 | 
  155 |     // First link should be focusable
  156 |     const firstLink = page.locator('a').first();
  157 |     await firstLink.focus();
  158 | 
  159 |     const isFocused = await firstLink.evaluate(el => {
  160 |       return document.activeElement === el;
  161 |     });
  162 | 
  163 |     expect(isFocused).toBe(true);
  164 |   });
  165 | });
  166 | 
  167 | function isColorDark(rgbColor: string): boolean {
  168 |   if (!rgbColor || rgbColor === 'rgba(0, 0, 0, 0)' || rgbColor === 'transparent') {
  169 |     return false; // Transparent/no color
  170 |   }
  171 | 
  172 |   // Parse rgb/rgba
  173 |   const matches = rgbColor.match(/\d+/g);
  174 |   if (!matches || matches.length < 3) return false;
  175 | 
  176 |   const r = parseInt(matches[0]);
  177 |   const g = parseInt(matches[1]);
  178 |   const b = parseInt(matches[2]);
  179 | 
  180 |   // Calculate luminance
  181 |   const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  182 |   return luminance < 0.5; // Dark if luminance < 50%
  183 | }
  184 | 
```