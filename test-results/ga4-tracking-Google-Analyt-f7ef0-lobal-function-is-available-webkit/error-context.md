# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ga4-tracking.spec.ts >> Google Analytics 4 Tracking >> gtag global function is available
- Location: tests/e2e/ga4-tracking.spec.ts:12:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
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
> 19  |     expect(gtagAvailable).toBe(true);
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
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
  37  |     expect(dataLayerExists).toBe(true);
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