# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ga4-tracking.spec.ts >> Google Analytics 4 Tracking >> dataLayer is initialized
- Location: tests/e2e/ga4-tracking.spec.ts:30:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Google Analytics 4 Tracking', () => {
  4   |   test('gtag script is loaded on homepage', async ({ page }) => {
  5   |     await page.goto('/');
  6   | 
  7   |     // Check gtag script exists in DOM
  8   |     const gtagScript = page.locator('script[src*="googletagmanager.com/gtag"]');
  9   |     await expect(gtagScript).toBeVisible();
  10  |   });
  11  | 
  12  |   test('gtag global function is available', async ({ page }) => {
  13  |     await page.goto('/');
  14  | 
  15  |     // Verify gtag is available in window
  16  |     const gtagAvailable = await page.evaluate(() => {
  17  |       return typeof (window as any).gtag === 'function';
  18  |     });
  19  |     expect(gtagAvailable).toBe(true);
  20  |   });
  21  | 
  22  |   test('GA4 measurement ID is configured correctly', async ({ page }) => {
  23  |     await page.goto('/');
  24  | 
  25  |     // Verify measurement ID G-W0PQH8ZKTF is in the gtag.js script
  26  |     const scriptContent = await page.locator('script[src*="googletagmanager.com/gtag"]').getAttribute('src');
  27  |     expect(scriptContent).toContain('G-W0PQH8ZKTF');
  28  |   });
  29  | 
  30  |   test('dataLayer is initialized', async ({ page }) => {
  31  |     await page.goto('/');
  32  | 
  33  |     // Verify dataLayer array exists
  34  |     const dataLayerExists = await page.evaluate(() => {
  35  |       return Array.isArray((window as any).dataLayer);
  36  |     });
> 37  |     expect(dataLayerExists).toBe(true);
      |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  38  |   });
  39  | 
  40  |   test('gtag config is called with correct measurement ID', async ({ page }) => {
  41  |     const gtdataPushCalls: any[] = [];
  42  | 
  43  |     // Intercept gtag calls
  44  |     await page.evaluate(() => {
  45  |       const originalPush = (window as any).dataLayer.push;
  46  |       (window as any).dataLayer.push = function(...args: any[]) {
  47  |         (window as any).__gtag_calls = (window as any).__gtag_calls || [];
  48  |         (window as any).__gtag_calls.push(args);
  49  |         return originalPush.apply(this, args);
  50  |       };
  51  |     });
  52  | 
  53  |     await page.goto('/');
  54  | 
  55  |     // Check that config was called
  56  |     const configCalled = await page.evaluate(() => {
  57  |       const calls = (window as any).__gtag_calls || [];
  58  |       return calls.some((call: any[]) => {
  59  |         const firstArg = call[0];
  60  |         return Array.isArray(firstArg) && firstArg[0] === 'config' && firstArg[1] === 'G-W0PQH8ZKTF';
  61  |       });
  62  |     });
  63  | 
  64  |     expect(configCalled).toBe(true);
  65  |   });
  66  | 
  67  |   test('page views are tracked on navigation', async ({ page }) => {
  68  |     // Listen for network requests to Google Analytics
  69  |     const gaTracks: string[] = [];
  70  |     page.on('request', request => {
  71  |       if (request.url().includes('google-analytics') || request.url().includes('googletagmanager')) {
  72  |         gaTracks.push(request.url());
  73  |       }
  74  |     });
  75  | 
  76  |     await page.goto('/');
  77  |     await page.waitForTimeout(500);
  78  | 
  79  |     // Navigate to another page
  80  |     await page.goto('/fine-dining');
  81  |     await page.waitForTimeout(500);
  82  | 
  83  |     // GA request should have been made
  84  |     expect(gaTracks.length).toBeGreaterThan(0);
  85  |   });
  86  | 
  87  |   test('GA4 tracking works across multiple pages', async ({ page }) => {
  88  |     const gaTracks: { url: string, timestamp: number }[] = [];
  89  | 
  90  |     page.on('request', request => {
  91  |       if (request.url().includes('collect')) {
  92  |         gaTracks.push({
  93  |           url: request.url(),
  94  |           timestamp: Date.now()
  95  |         });
  96  |       }
  97  |     });
  98  | 
  99  |     // Visit multiple pages
  100 |     const pages = ['/', '/fine-dining', '/catering', '/events'];
  101 | 
  102 |     for (const pagePath of pages) {
  103 |       await page.goto(pagePath);
  104 |       await page.waitForTimeout(300);
  105 |     }
  106 | 
  107 |     // Should have tracking requests
  108 |     expect(gaTracks.length).toBeGreaterThan(0);
  109 |   });
  110 | });
  111 | 
```