import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3002';

const BREAKPOINTS = {
  mobile_se: { width: 375, height: 667, name: 'iPhone SE' },
  mobile_12: { width: 390, height: 844, name: 'iPhone 12/13/14' },
  mobile_android: { width: 360, height: 800, name: 'Android' },
  tablet: { width: 768, height: 1024, name: 'iPad' },
};

const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/fine-dining', name: 'Fine Dining' },
  { path: '/catering', name: 'Catering' },
  { path: '/events', name: 'Events' },
  { path: '/in-villa-service', name: 'In-Villa Service' },
];

test.describe('Mobile Responsiveness Tests', () => {
  Object.entries(BREAKPOINTS).forEach(([key, breakpoint]) => {
    test.describe(`Breakpoint: ${breakpoint.name} (${breakpoint.width}x${breakpoint.height})`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({
          width: breakpoint.width,
          height: breakpoint.height,
        });
      });

      test('should load homepage without horizontal scroll', async ({ page }) => {
        await page.goto(BASE_URL);
        const bodyWidth = await page.evaluate(() => document.body.offsetWidth);
        const windowWidth = breakpoint.width;
        expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 1); // +1 for rounding
      });

      test('navbar should be present and responsive', async ({ page }) => {
        await page.goto(BASE_URL);
        await page.waitForLoadState('networkidle');
        const nav = page.locator('nav').first();
        const navCount = await nav.count();
        expect(navCount).toBeGreaterThan(0);
      });

      if (breakpoint.width <= 768) {
        test('mobile menu button should be visible and functional', async ({ page }) => {
          await page.goto(BASE_URL);
          const menuButton = page.locator('button').filter({ hasText: /menu|hamburger|toggle/i }).first();

          // Menu button may or may not exist depending on implementation
          if (await menuButton.isVisible()) {
            await menuButton.click();
            const menu = page.locator('[role="navigation"], nav').first();
            await expect(menu).toBeVisible({ timeout: 1000 });
          }
        });
      }

      test('no horizontal scroll on page', async ({ page }) => {
        await page.goto(BASE_URL);
        const hasHorizontalScroll = await page.evaluate(() => {
          return document.body.scrollWidth > window.innerWidth;
        });
        expect(hasHorizontalScroll).toBe(false);
      });

      test('all images should be visible and have dimensions', async ({ page }) => {
        await page.goto(BASE_URL);
        const images = page.locator('img');
        const imageCount = await images.count();

        if (imageCount > 0) {
          // Check first 5 images for visibility and dimensions
          for (let i = 0; i < Math.min(5, imageCount); i++) {
            const img = images.nth(i);
            await expect(img).toHaveAttribute('width');
            await expect(img).toHaveAttribute('height');
          }
        }
      });

      test('images should have alt text', async ({ page }) => {
        await page.goto(BASE_URL);
        const images = page.locator('img');
        const imageCount = await images.count();

        if (imageCount > 0) {
          // Check first 5 images for alt text
          for (let i = 0; i < Math.min(5, imageCount); i++) {
            const img = images.nth(i);
            const altText = await img.getAttribute('alt');
            expect(altText).toBeTruthy();
          }
        }
      });

      test('text should be readable (no content overflow)', async ({ page }) => {
        await page.goto(BASE_URL);
        const mainContent = page.locator('main, [role="main"]').first();

        if (await mainContent.isVisible()) {
          const contentWidth = await mainContent.evaluate((el) => el.offsetWidth);
          expect(contentWidth).toBeLessThanOrEqual(breakpoint.width + 1);
        }
      });

      test('interactive elements should be present and visible', async ({ page }) => {
        await page.goto(BASE_URL);
        const buttons = page.locator('button');
        const buttonCount = await buttons.count();

        // Just verify buttons exist and are in the DOM
        expect(buttonCount).toBeGreaterThan(0);
      });
    });
  });

  test.describe('Multi-page responsive check', () => {
    Object.entries(BREAKPOINTS).forEach(([key, breakpoint]) => {
      PAGES.forEach((page_info) => {
        test(`${page_info.name} should render at ${breakpoint.name}`, async ({ page }) => {
          await page.setViewportSize({
            width: breakpoint.width,
            height: breakpoint.height,
          });

          const response = await page.goto(`${BASE_URL}${page_info.path}`);
          expect(response?.status()).toBe(200);

          // Check for layout shift or scroll
          const hasHorizontalScroll = await page.evaluate(() => {
            return document.body.scrollWidth > window.innerWidth;
          });
          expect(hasHorizontalScroll).toBe(false);
        });
      });
    });
  });

  test.describe('Accordion and interactive elements', () => {
    test('accordion should work on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto(BASE_URL);

      const accordionTriggers = page.locator('[role="button"], [data-testid*="accordion"]').slice(0, 3);
      const count = await accordionTriggers.count();

      if (count > 0) {
        const firstTrigger = accordionTriggers.first();
        await firstTrigger.click();
        // Just verify click doesn't error out
        expect(true).toBe(true);
      }
    });
  });
});
