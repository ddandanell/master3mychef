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
  - link "Skip to main content" [ref=e4] [cursor=pointer]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e5]:
    - generic [ref=e6]:
      - link "myCHEF" [ref=e7] [cursor=pointer]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e11]: myCHEF
      - generic [ref=e12]:
        - link "Fine Dining" [ref=e14] [cursor=pointer]:
          - /url: /fine-dining
          - text: Fine Dining
        - link "Catering" [ref=e16] [cursor=pointer]:
          - /url: /catering
          - text: Catering
        - link "Events" [ref=e18] [cursor=pointer]:
          - /url: /events
          - text: Events
        - link "In-Villa" [ref=e20] [cursor=pointer]:
          - /url: /in-villa-service
          - text: In-Villa
        - link "Staffing" [ref=e22] [cursor=pointer]:
          - /url: /staffing
          - text: Staffing
        - link "Locations" [ref=e24] [cursor=pointer]:
          - /url: /locations
          - text: Locations
        - link "About" [ref=e26] [cursor=pointer]:
          - /url: /about
          - text: About
        - link "Contact" [ref=e28] [cursor=pointer]:
          - /url: /contact
          - text: Contact
      - generic [ref=e29]:
        - link "Pricing" [ref=e30] [cursor=pointer]:
          - /url: /pricing
        - link "Book" [ref=e31] [cursor=pointer]:
          - /url: /book
  - main [ref=e32]
  - generic [ref=e36]: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
  - contentinfo [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39]:
        - generic [ref=e40]:
          - heading "myCHEF" [level=3] [ref=e41]
          - paragraph [ref=e42]: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
        - generic [ref=e43]:
          - link "+62 822-3756-5997" [ref=e44] [cursor=pointer]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
            - img [ref=e45]
            - text: +62 822-3756-5997
          - link "indonesia@mychef.id" [ref=e47] [cursor=pointer]:
            - /url: mailto:indonesia@mychef.id
      - generic [ref=e48]:
        - generic [ref=e49]:
          - heading "Fine Dining" [level=4] [ref=e50]
          - list [ref=e51]:
            - listitem [ref=e52]:
              - link "Overview" [ref=e53] [cursor=pointer]:
                - /url: /fine-dining
            - listitem [ref=e54]:
              - link "Private Chef in Bali" [ref=e55] [cursor=pointer]:
                - /url: /fine-dining/private-chef-bali
            - listitem [ref=e56]:
              - link "Tasting Menu" [ref=e57] [cursor=pointer]:
                - /url: /fine-dining/tasting-menu
            - listitem [ref=e58]:
              - link "Romantic Dinner" [ref=e59] [cursor=pointer]:
                - /url: /fine-dining/romantic-dinner
            - listitem [ref=e60]:
              - link "Chef’s Table" [ref=e61] [cursor=pointer]:
                - /url: /fine-dining/chefs-table
            - listitem [ref=e62]:
              - link "Our Menus" [ref=e63] [cursor=pointer]:
                - /url: /fine-dining/menus
            - listitem [ref=e64]:
              - link "Our Chefs" [ref=e65] [cursor=pointer]:
                - /url: /fine-dining/our-chefs
        - generic [ref=e66]:
          - heading "Catering" [level=4] [ref=e67]
          - list [ref=e68]:
            - listitem [ref=e69]:
              - link "Overview" [ref=e70] [cursor=pointer]:
                - /url: /catering
            - listitem [ref=e71]:
              - link "BBQ Catering" [ref=e72] [cursor=pointer]:
                - /url: /catering/bbq-catering
            - listitem [ref=e73]:
              - link "Buffet Catering" [ref=e74] [cursor=pointer]:
                - /url: /catering/buffet
            - listitem [ref=e75]:
              - link "Plated Set Menu" [ref=e76] [cursor=pointer]:
                - /url: /catering/plated-catering
            - listitem [ref=e77]:
              - link "Drop-Off Catering" [ref=e78] [cursor=pointer]:
                - /url: /catering/drop-off-catering
            - listitem [ref=e79]:
              - link "Babi Guling" [ref=e80] [cursor=pointer]:
                - /url: /catering/babi-guling
            - listitem [ref=e81]:
              - link "Grazing Tables" [ref=e82] [cursor=pointer]:
                - /url: /catering/grazing-tables
            - listitem [ref=e83]:
              - link "Floating Breakfast" [ref=e84] [cursor=pointer]:
                - /url: /catering/floating-breakfast
            - listitem [ref=e85]:
              - link "Corporate Catering" [ref=e86] [cursor=pointer]:
                - /url: /catering/corporate-catering
            - listitem [ref=e87]:
              - link "Retreat Catering" [ref=e88] [cursor=pointer]:
                - /url: /catering/retreat-catering
        - generic [ref=e89]:
          - heading "Events" [level=4] [ref=e90]
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Overview" [ref=e93] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e94]:
              - link "Weddings" [ref=e95] [cursor=pointer]:
                - /url: /events/weddings
            - listitem [ref=e96]:
              - link "Birthdays" [ref=e97] [cursor=pointer]:
                - /url: /events/birthdays
            - listitem [ref=e98]:
              - link "Anniversaries" [ref=e99] [cursor=pointer]:
                - /url: /events/anniversaries
            - listitem [ref=e100]:
              - link "Corporate Events" [ref=e101] [cursor=pointer]:
                - /url: /events/corporate-events
            - listitem [ref=e102]:
              - link "Retreats" [ref=e103] [cursor=pointer]:
                - /url: /events/retreats
            - listitem [ref=e104]:
              - link "Villa Parties" [ref=e105] [cursor=pointer]:
                - /url: /events/villa-parties
            - listitem [ref=e106]:
              - link "Baby Showers" [ref=e107] [cursor=pointer]:
                - /url: /events/baby-showers
        - generic [ref=e108]:
          - heading "In-Villa Service" [level=4] [ref=e109]
          - list [ref=e110]:
            - listitem [ref=e111]:
              - link "Overview" [ref=e112] [cursor=pointer]:
                - /url: /in-villa-service
            - listitem [ref=e113]:
              - link "Waiters" [ref=e114] [cursor=pointer]:
                - /url: /in-villa-service/waiters
            - listitem [ref=e115]:
              - link "Butlers" [ref=e116] [cursor=pointer]:
                - /url: /in-villa-service/butlers
            - listitem [ref=e117]:
              - link "Bartenders" [ref=e118] [cursor=pointer]:
                - /url: /in-villa-service/bartenders
            - listitem [ref=e119]:
              - link "Mixology" [ref=e120] [cursor=pointer]:
                - /url: /in-villa-service/mixology
            - listitem [ref=e121]:
              - link "Sommelier" [ref=e122] [cursor=pointer]:
                - /url: /in-villa-service/sommelier
            - listitem [ref=e123]:
              - link "Host & Hostess" [ref=e124] [cursor=pointer]:
                - /url: /in-villa-service/host-hostess
        - generic [ref=e125]:
          - heading "Staffing" [level=4] [ref=e126]
          - list [ref=e127]:
            - listitem [ref=e128]:
              - link "Overview" [ref=e129] [cursor=pointer]:
                - /url: /staffing
            - listitem [ref=e130]:
              - link "Private Chef Placement" [ref=e131] [cursor=pointer]:
                - /url: /staffing/private-chef-placement
            - listitem [ref=e132]:
              - link "Live-In Chef" [ref=e133] [cursor=pointer]:
                - /url: /staffing/live-in-chef
            - listitem [ref=e134]:
              - link "Villa Staff" [ref=e135] [cursor=pointer]:
                - /url: /staffing/villa-staff
            - listitem [ref=e136]:
              - link "Household Staff" [ref=e137] [cursor=pointer]:
                - /url: /staffing/household-staff
            - listitem [ref=e138]:
              - link "For Villa Managers" [ref=e139] [cursor=pointer]:
                - /url: /staffing/for-villa-managers
            - listitem [ref=e140]:
              - link "For Hotels & Restaurants" [ref=e141] [cursor=pointer]:
                - /url: /staffing/for-hotels-restaurants
        - generic [ref=e142]:
          - heading "Locations" [level=4] [ref=e143]
          - list [ref=e144]:
            - listitem [ref=e145]:
              - link "All Locations" [ref=e146] [cursor=pointer]:
                - /url: /locations
            - listitem [ref=e147]:
              - link "Seminyak" [ref=e148] [cursor=pointer]:
                - /url: /locations/seminyak
            - listitem [ref=e149]:
              - link "Canggu" [ref=e150] [cursor=pointer]:
                - /url: /locations/canggu
            - listitem [ref=e151]:
              - link "Uluwatu" [ref=e152] [cursor=pointer]:
                - /url: /locations/uluwatu
            - listitem [ref=e153]:
              - link "Ubud" [ref=e154] [cursor=pointer]:
                - /url: /locations/ubud
            - listitem [ref=e155]:
              - link "Nusa Dua" [ref=e156] [cursor=pointer]:
                - /url: /locations/nusa-dua
            - listitem [ref=e157]:
              - link "Jimbaran" [ref=e158] [cursor=pointer]:
                - /url: /locations/jimbaran
            - listitem [ref=e159]:
              - link "Sanur" [ref=e160] [cursor=pointer]:
                - /url: /locations/sanur
            - listitem [ref=e161]:
              - link "Berawa" [ref=e162] [cursor=pointer]:
                - /url: /locations/berawa
            - listitem [ref=e163]:
              - link "Pererenan" [ref=e164] [cursor=pointer]:
                - /url: /locations/pererenan
            - listitem [ref=e165]:
              - link "Bukit Peninsula" [ref=e166] [cursor=pointer]:
                - /url: /locations/bukit
      - generic [ref=e167]:
        - link "Catering" [ref=e168] [cursor=pointer]:
          - /url: /catering
        - link "Locations" [ref=e169] [cursor=pointer]:
          - /url: /locations
        - link "About" [ref=e170] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e171] [cursor=pointer]:
          - /url: /contact
        - link "Services" [ref=e172] [cursor=pointer]:
          - /url: /services
        - link "Pricing" [ref=e173] [cursor=pointer]:
          - /url: /pricing
        - link "Price Calculator" [ref=e174] [cursor=pointer]:
          - /url: /calculator
        - link "FAQ" [ref=e175] [cursor=pointer]:
          - /url: /faq
        - link "Reviews" [ref=e176] [cursor=pointer]:
          - /url: /reviews
        - link "Why myCHEF" [ref=e177] [cursor=pointer]:
          - /url: /why-mychef
        - link "Press" [ref=e178] [cursor=pointer]:
          - /url: /press
        - link "Join the Team" [ref=e179] [cursor=pointer]:
          - /url: /join-our-team
        - link "Partner Platform" [ref=e180] [cursor=pointer]:
          - /url: /partner-platform
        - link "Journal" [ref=e181] [cursor=pointer]:
          - /url: /journal
        - link "Blog & Guides" [ref=e182] [cursor=pointer]:
          - /url: /blog
        - link "Book" [ref=e183] [cursor=pointer]:
          - /url: /book
      - generic [ref=e184]:
        - link "+62 822-3756-5997" [ref=e185] [cursor=pointer]:
          - /url: tel:+6282237565997
          - img [ref=e186]
          - text: +62 822-3756-5997
        - link "indonesia@mychef.id" [ref=e188] [cursor=pointer]:
          - /url: mailto:indonesia@mychef.id
          - img [ref=e189]
          - text: indonesia@mychef.id
        - generic [ref=e192]:
          - img [ref=e193]
          - text: Bali, Indonesia
        - link "Instagram" [ref=e196] [cursor=pointer]:
          - /url: https://instagram.com/mychef.id
          - img [ref=e197]
          - text: Instagram
        - link "WhatsApp" [ref=e200] [cursor=pointer]:
          - /url: https://wa.me/6282237565997
          - img [ref=e201]
          - text: WhatsApp
      - generic [ref=e203]:
        - link "Staff Login" [ref=e204] [cursor=pointer]:
          - /url: /partner-platform
          - img [ref=e205]
          - text: Staff Login
        - generic [ref=e208]:
          - link "Terms" [ref=e209] [cursor=pointer]:
            - /url: /terms
          - link "Privacy" [ref=e210] [cursor=pointer]:
            - /url: /privacy
          - link "Cancellation" [ref=e211] [cursor=pointer]:
            - /url: /cancellation
      - paragraph [ref=e212]: © 2026 myCHEF.id. All rights reserved.
  - generic [ref=e214]:
    - generic: Chat with us on WhatsApp
    - link "Chat with us on WhatsApp" [ref=e215] [cursor=pointer]:
      - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
      - img [ref=e216]
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