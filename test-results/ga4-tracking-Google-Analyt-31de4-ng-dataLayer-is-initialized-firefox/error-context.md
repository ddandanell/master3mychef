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
        - generic [ref=e12]: myCHEF
      - generic [ref=e13]:
        - link "Fine Dining" [ref=e15] [cursor=pointer]:
          - /url: /fine-dining
          - text: Fine Dining
        - link "Catering" [ref=e17] [cursor=pointer]:
          - /url: /catering
          - text: Catering
        - link "Events" [ref=e19] [cursor=pointer]:
          - /url: /events
          - text: Events
        - link "In-Villa" [ref=e21] [cursor=pointer]:
          - /url: /in-villa-service
          - text: In-Villa
        - link "Staffing" [ref=e23] [cursor=pointer]:
          - /url: /staffing
          - text: Staffing
        - link "Locations" [ref=e25] [cursor=pointer]:
          - /url: /locations
          - text: Locations
        - link "About" [ref=e27] [cursor=pointer]:
          - /url: /about
          - text: About
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: /contact
          - text: Contact
      - generic [ref=e30]:
        - link "Pricing" [ref=e31] [cursor=pointer]:
          - /url: /pricing
        - link "Book" [ref=e32] [cursor=pointer]:
          - /url: /book
  - main [ref=e33]
  - generic [ref=e37]: ⭐ 560+ villas served · 12,000+ happy guests · 500+ events · 5-star rated
  - contentinfo [ref=e38]:
    - generic [ref=e39]:
      - generic [ref=e40]:
        - generic [ref=e41]:
          - heading "myCHEF" [level=3] [ref=e42]
          - paragraph [ref=e43]: Private chef, villa catering, and full-service events across Bali. Same-day WhatsApp confirmation.
        - generic [ref=e44]:
          - link "+62 822-3756-5997" [ref=e45] [cursor=pointer]:
            - /url: https://wa.me/6282237565997?text=Hi%20myCHEF
            - img [ref=e46]
            - text: +62 822-3756-5997
          - link "indonesia@mychef.id" [ref=e48] [cursor=pointer]:
            - /url: mailto:indonesia@mychef.id
      - generic [ref=e49]:
        - generic [ref=e50]:
          - heading "Fine Dining" [level=4] [ref=e51]
          - list [ref=e52]:
            - listitem [ref=e53]:
              - link "Overview" [ref=e54] [cursor=pointer]:
                - /url: /fine-dining
            - listitem [ref=e55]:
              - link "Private Chef in Bali" [ref=e56] [cursor=pointer]:
                - /url: /fine-dining/private-chef-bali
            - listitem [ref=e57]:
              - link "Tasting Menu" [ref=e58] [cursor=pointer]:
                - /url: /fine-dining/tasting-menu
            - listitem [ref=e59]:
              - link "Romantic Dinner" [ref=e60] [cursor=pointer]:
                - /url: /fine-dining/romantic-dinner
            - listitem [ref=e61]:
              - link "Chef’s Table" [ref=e62] [cursor=pointer]:
                - /url: /fine-dining/chefs-table
            - listitem [ref=e63]:
              - link "Our Menus" [ref=e64] [cursor=pointer]:
                - /url: /fine-dining/menus
            - listitem [ref=e65]:
              - link "Our Chefs" [ref=e66] [cursor=pointer]:
                - /url: /fine-dining/our-chefs
        - generic [ref=e67]:
          - heading "Catering" [level=4] [ref=e68]
          - list [ref=e69]:
            - listitem [ref=e70]:
              - link "Overview" [ref=e71] [cursor=pointer]:
                - /url: /catering
            - listitem [ref=e72]:
              - link "BBQ Catering" [ref=e73] [cursor=pointer]:
                - /url: /catering/bbq-catering
            - listitem [ref=e74]:
              - link "Buffet Catering" [ref=e75] [cursor=pointer]:
                - /url: /catering/buffet
            - listitem [ref=e76]:
              - link "Plated Set Menu" [ref=e77] [cursor=pointer]:
                - /url: /catering/plated-catering
            - listitem [ref=e78]:
              - link "Drop-Off Catering" [ref=e79] [cursor=pointer]:
                - /url: /catering/drop-off-catering
            - listitem [ref=e80]:
              - link "Babi Guling" [ref=e81] [cursor=pointer]:
                - /url: /catering/babi-guling
            - listitem [ref=e82]:
              - link "Grazing Tables" [ref=e83] [cursor=pointer]:
                - /url: /catering/grazing-tables
            - listitem [ref=e84]:
              - link "Floating Breakfast" [ref=e85] [cursor=pointer]:
                - /url: /catering/floating-breakfast
            - listitem [ref=e86]:
              - link "Corporate Catering" [ref=e87] [cursor=pointer]:
                - /url: /catering/corporate-catering
            - listitem [ref=e88]:
              - link "Retreat Catering" [ref=e89] [cursor=pointer]:
                - /url: /catering/retreat-catering
        - generic [ref=e90]:
          - heading "Events" [level=4] [ref=e91]
          - list [ref=e92]:
            - listitem [ref=e93]:
              - link "Overview" [ref=e94] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e95]:
              - link "Weddings" [ref=e96] [cursor=pointer]:
                - /url: /events/weddings
            - listitem [ref=e97]:
              - link "Birthdays" [ref=e98] [cursor=pointer]:
                - /url: /events/birthdays
            - listitem [ref=e99]:
              - link "Anniversaries" [ref=e100] [cursor=pointer]:
                - /url: /events/anniversaries
            - listitem [ref=e101]:
              - link "Corporate Events" [ref=e102] [cursor=pointer]:
                - /url: /events/corporate-events
            - listitem [ref=e103]:
              - link "Retreats" [ref=e104] [cursor=pointer]:
                - /url: /events/retreats
            - listitem [ref=e105]:
              - link "Villa Parties" [ref=e106] [cursor=pointer]:
                - /url: /events/villa-parties
            - listitem [ref=e107]:
              - link "Baby Showers" [ref=e108] [cursor=pointer]:
                - /url: /events/baby-showers
        - generic [ref=e109]:
          - heading "In-Villa Service" [level=4] [ref=e110]
          - list [ref=e111]:
            - listitem [ref=e112]:
              - link "Overview" [ref=e113] [cursor=pointer]:
                - /url: /in-villa-service
            - listitem [ref=e114]:
              - link "Waiters" [ref=e115] [cursor=pointer]:
                - /url: /in-villa-service/waiters
            - listitem [ref=e116]:
              - link "Butlers" [ref=e117] [cursor=pointer]:
                - /url: /in-villa-service/butlers
            - listitem [ref=e118]:
              - link "Bartenders" [ref=e119] [cursor=pointer]:
                - /url: /in-villa-service/bartenders
            - listitem [ref=e120]:
              - link "Mixology" [ref=e121] [cursor=pointer]:
                - /url: /in-villa-service/mixology
            - listitem [ref=e122]:
              - link "Sommelier" [ref=e123] [cursor=pointer]:
                - /url: /in-villa-service/sommelier
            - listitem [ref=e124]:
              - link "Host & Hostess" [ref=e125] [cursor=pointer]:
                - /url: /in-villa-service/host-hostess
        - generic [ref=e126]:
          - heading "Staffing" [level=4] [ref=e127]
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "Overview" [ref=e130] [cursor=pointer]:
                - /url: /staffing
            - listitem [ref=e131]:
              - link "Private Chef Placement" [ref=e132] [cursor=pointer]:
                - /url: /staffing/private-chef-placement
            - listitem [ref=e133]:
              - link "Live-In Chef" [ref=e134] [cursor=pointer]:
                - /url: /staffing/live-in-chef
            - listitem [ref=e135]:
              - link "Villa Staff" [ref=e136] [cursor=pointer]:
                - /url: /staffing/villa-staff
            - listitem [ref=e137]:
              - link "Household Staff" [ref=e138] [cursor=pointer]:
                - /url: /staffing/household-staff
            - listitem [ref=e139]:
              - link "For Villa Managers" [ref=e140] [cursor=pointer]:
                - /url: /staffing/for-villa-managers
            - listitem [ref=e141]:
              - link "For Hotels & Restaurants" [ref=e142] [cursor=pointer]:
                - /url: /staffing/for-hotels-restaurants
        - generic [ref=e143]:
          - heading "Locations" [level=4] [ref=e144]
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "All Locations" [ref=e147] [cursor=pointer]:
                - /url: /locations
            - listitem [ref=e148]:
              - link "Seminyak" [ref=e149] [cursor=pointer]:
                - /url: /locations/seminyak
            - listitem [ref=e150]:
              - link "Canggu" [ref=e151] [cursor=pointer]:
                - /url: /locations/canggu
            - listitem [ref=e152]:
              - link "Uluwatu" [ref=e153] [cursor=pointer]:
                - /url: /locations/uluwatu
            - listitem [ref=e154]:
              - link "Ubud" [ref=e155] [cursor=pointer]:
                - /url: /locations/ubud
            - listitem [ref=e156]:
              - link "Nusa Dua" [ref=e157] [cursor=pointer]:
                - /url: /locations/nusa-dua
            - listitem [ref=e158]:
              - link "Jimbaran" [ref=e159] [cursor=pointer]:
                - /url: /locations/jimbaran
            - listitem [ref=e160]:
              - link "Sanur" [ref=e161] [cursor=pointer]:
                - /url: /locations/sanur
            - listitem [ref=e162]:
              - link "Berawa" [ref=e163] [cursor=pointer]:
                - /url: /locations/berawa
            - listitem [ref=e164]:
              - link "Pererenan" [ref=e165] [cursor=pointer]:
                - /url: /locations/pererenan
            - listitem [ref=e166]:
              - link "Bukit Peninsula" [ref=e167] [cursor=pointer]:
                - /url: /locations/bukit
      - generic [ref=e168]:
        - link "Catering" [ref=e169] [cursor=pointer]:
          - /url: /catering
        - link "Locations" [ref=e170] [cursor=pointer]:
          - /url: /locations
        - link "About" [ref=e171] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e172] [cursor=pointer]:
          - /url: /contact
        - link "Services" [ref=e173] [cursor=pointer]:
          - /url: /services
        - link "Pricing" [ref=e174] [cursor=pointer]:
          - /url: /pricing
        - link "Price Calculator" [ref=e175] [cursor=pointer]:
          - /url: /calculator
        - link "FAQ" [ref=e176] [cursor=pointer]:
          - /url: /faq
        - link "Reviews" [ref=e177] [cursor=pointer]:
          - /url: /reviews
        - link "Why myCHEF" [ref=e178] [cursor=pointer]:
          - /url: /why-mychef
        - link "Press" [ref=e179] [cursor=pointer]:
          - /url: /press
        - link "Join the Team" [ref=e180] [cursor=pointer]:
          - /url: /join-our-team
        - link "Partner Platform" [ref=e181] [cursor=pointer]:
          - /url: /partner-platform
        - link "Journal" [ref=e182] [cursor=pointer]:
          - /url: /journal
        - link "Blog & Guides" [ref=e183] [cursor=pointer]:
          - /url: /blog
        - link "Book" [ref=e184] [cursor=pointer]:
          - /url: /book
      - generic [ref=e185]:
        - link "+62 822-3756-5997" [ref=e186] [cursor=pointer]:
          - /url: tel:+6282237565997
          - img [ref=e187]
          - text: +62 822-3756-5997
        - link "indonesia@mychef.id" [ref=e189] [cursor=pointer]:
          - /url: mailto:indonesia@mychef.id
          - img [ref=e190]
          - text: indonesia@mychef.id
        - generic [ref=e193]:
          - img [ref=e194]
          - text: Bali, Indonesia
        - link "Instagram" [ref=e197] [cursor=pointer]:
          - /url: https://instagram.com/mychef.id
          - img [ref=e198]
          - text: Instagram
        - link "WhatsApp" [ref=e202] [cursor=pointer]:
          - /url: https://wa.me/6282237565997
          - img [ref=e203]
          - text: WhatsApp
      - generic [ref=e205]:
        - link "Staff Login" [ref=e206] [cursor=pointer]:
          - /url: /partner-platform
          - img [ref=e207]
          - text: Staff Login
        - generic [ref=e211]:
          - link "Terms" [ref=e212] [cursor=pointer]:
            - /url: /terms
          - link "Privacy" [ref=e213] [cursor=pointer]:
            - /url: /privacy
          - link "Cancellation" [ref=e214] [cursor=pointer]:
            - /url: /cancellation
      - paragraph [ref=e215]: © 2026 myCHEF.id. All rights reserved.
  - generic [ref=e217]:
    - generic: Chat with us on WhatsApp
    - link "Chat with us on WhatsApp" [ref=e218] [cursor=pointer]:
      - /url: https://wa.me/6282237565997?text=Hi%20myCHEF!%20I'd%20like%20to%20enquire%20about%20your%20services.
      - img [ref=e219]
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