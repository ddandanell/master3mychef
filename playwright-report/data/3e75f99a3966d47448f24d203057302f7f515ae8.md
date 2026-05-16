# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile-responsiveness.spec.ts >> Mobile Responsiveness Tests >> Multi-page responsive check >> Catering should render at iPad
- Location: tests/e2e/mobile-responsiveness.spec.ts:121:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 500
```

# Test source

```ts
  28  |       });
  29  | 
  30  |       test('should load homepage without horizontal scroll', async ({ page }) => {
  31  |         await page.goto(BASE_URL);
  32  |         const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
  33  |         const windowWidth = breakpoint.width;
  34  |         expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 1); // +1 for rounding
  35  |       });
  36  | 
  37  |       test('navbar should be present and responsive', async ({ page }) => {
  38  |         await page.goto(BASE_URL);
  39  |         await page.waitForLoadState('networkidle');
  40  |         const nav = page.locator('nav').first();
  41  |         const navCount = await nav.count();
  42  |         expect(navCount).toBeGreaterThan(0);
  43  |       });
  44  | 
  45  |       if (breakpoint.width <= 768) {
  46  |         test('mobile menu button should be visible and functional', async ({ page }) => {
  47  |           await page.goto(BASE_URL);
  48  |           const menuButton = page.locator('button').filter({ hasText: /menu|hamburger|toggle/i }).first();
  49  | 
  50  |           // Menu button may or may not exist depending on implementation
  51  |           if (await menuButton.isVisible()) {
  52  |             await menuButton.click();
  53  |             const menu = page.locator('[role="navigation"], nav').first();
  54  |             await expect(menu).toBeVisible({ timeout: 1000 });
  55  |           }
  56  |         });
  57  |       }
  58  | 
  59  |       test('no horizontal scroll on page', async ({ page }) => {
  60  |         await page.goto(BASE_URL);
  61  |         const hasHorizontalScroll = await page.evaluate(() => {
  62  |           return document.body.scrollWidth > window.innerWidth;
  63  |         });
  64  |         expect(hasHorizontalScroll).toBe(false);
  65  |       });
  66  | 
  67  |       test('all images should be visible and have dimensions', async ({ page }) => {
  68  |         await page.goto(BASE_URL);
  69  |         const images = page.locator('img');
  70  |         const imageCount = await images.count();
  71  | 
  72  |         if (imageCount > 0) {
  73  |           // Check first 5 images for visibility and dimensions
  74  |           for (let i = 0; i < Math.min(5, imageCount); i++) {
  75  |             const img = images.nth(i);
  76  |             await expect(img).toHaveAttribute('width');
  77  |             await expect(img).toHaveAttribute('height');
  78  |           }
  79  |         }
  80  |       });
  81  | 
  82  |       test('images should have alt text', async ({ page }) => {
  83  |         await page.goto(BASE_URL);
  84  |         const images = page.locator('img');
  85  |         const imageCount = await images.count();
  86  | 
  87  |         if (imageCount > 0) {
  88  |           // Check first 5 images for alt text
  89  |           for (let i = 0; i < Math.min(5, imageCount); i++) {
  90  |             const img = images.nth(i);
  91  |             const altText = await img.getAttribute('alt');
  92  |             expect(altText).toBeTruthy();
  93  |           }
  94  |         }
  95  |       });
  96  | 
  97  |       test('text should be readable (no content overflow)', async ({ page }) => {
  98  |         await page.goto(BASE_URL);
  99  |         const mainContent = page.locator('main, [role="main"]').first();
  100 | 
  101 |         if (await mainContent.isVisible()) {
  102 |           const contentWidth = await mainContent.evaluate((el) => el.offsetWidth);
  103 |           expect(contentWidth).toBeLessThanOrEqual(breakpoint.width + 1);
  104 |         }
  105 |       });
  106 | 
  107 |       test('interactive elements should be present and visible', async ({ page }) => {
  108 |         await page.goto(BASE_URL);
  109 |         const buttons = page.locator('button');
  110 |         const buttonCount = await buttons.count();
  111 | 
  112 |         // Just verify buttons exist and are in the DOM
  113 |         expect(buttonCount).toBeGreaterThan(0);
  114 |       });
  115 |     });
  116 |   });
  117 | 
  118 |   test.describe('Multi-page responsive check', () => {
  119 |     Object.entries(BREAKPOINTS).forEach(([key, breakpoint]) => {
  120 |       PAGES.forEach((page_info) => {
  121 |         test(`${page_info.name} should render at ${breakpoint.name}`, async ({ page }) => {
  122 |           await page.setViewportSize({
  123 |             width: breakpoint.width,
  124 |             height: breakpoint.height,
  125 |           });
  126 | 
  127 |           const response = await page.goto(`${BASE_URL}${page_info.path}`);
> 128 |           expect(response?.status()).toBe(200);
      |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  129 | 
  130 |           // Check for layout shift or scroll
  131 |           const hasHorizontalScroll = await page.evaluate(() => {
  132 |             return document.body.scrollWidth > window.innerWidth;
  133 |           });
  134 |           expect(hasHorizontalScroll).toBe(false);
  135 |         });
  136 |       });
  137 |     });
  138 |   });
  139 | 
  140 |   test.describe('Accordion and interactive elements', () => {
  141 |     test('accordion should work on mobile', async ({ page }) => {
  142 |       await page.setViewportSize({ width: 375, height: 667 });
  143 |       await page.goto(BASE_URL);
  144 | 
  145 |       const accordionTriggers = page.locator('[role="button"], [data-testid*="accordion"]').slice(0, 3);
  146 |       const count = await accordionTriggers.count();
  147 | 
  148 |       if (count > 0) {
  149 |         const firstTrigger = accordionTriggers.first();
  150 |         await firstTrigger.click();
  151 |         // Just verify click doesn't error out
  152 |         expect(true).toBe(true);
  153 |       }
  154 |     });
  155 |   });
  156 | });
  157 | 
```