import { test, expect } from '@playwright/test';

test.describe('Google Analytics 4 Tracking', () => {
  test('gtag script is loaded on homepage', async ({ page }) => {
    await page.goto('/');

    // Check gtag script exists in DOM
    const gtagScript = page.locator('script[src*="googletagmanager.com/gtag"]');
    await expect(gtagScript).toBeVisible();
  });

  test('gtag global function is available', async ({ page }) => {
    await page.goto('/');

    // Verify gtag is available in window
    const gtagAvailable = await page.evaluate(() => {
      return typeof (window as any).gtag === 'function';
    });
    expect(gtagAvailable).toBe(true);
  });

  test('GA4 measurement ID is configured correctly', async ({ page }) => {
    await page.goto('/');

    // Verify measurement ID G-W0PQH8ZKTF is in the gtag.js script
    const scriptContent = await page.locator('script[src*="googletagmanager.com/gtag"]').getAttribute('src');
    expect(scriptContent).toContain('G-W0PQH8ZKTF');
  });

  test('dataLayer is initialized', async ({ page }) => {
    await page.goto('/');

    // Verify dataLayer array exists
    const dataLayerExists = await page.evaluate(() => {
      return Array.isArray((window as any).dataLayer);
    });
    expect(dataLayerExists).toBe(true);
  });

  test('gtag config is called with correct measurement ID', async ({ page }) => {
    const gtdataPushCalls: any[] = [];

    // Intercept gtag calls
    await page.evaluate(() => {
      const originalPush = (window as any).dataLayer.push;
      (window as any).dataLayer.push = function(...args: any[]) {
        (window as any).__gtag_calls = (window as any).__gtag_calls || [];
        (window as any).__gtag_calls.push(args);
        return originalPush.apply(this, args);
      };
    });

    await page.goto('/');

    // Check that config was called
    const configCalled = await page.evaluate(() => {
      const calls = (window as any).__gtag_calls || [];
      return calls.some((call: any[]) => {
        const firstArg = call[0];
        return Array.isArray(firstArg) && firstArg[0] === 'config' && firstArg[1] === 'G-W0PQH8ZKTF';
      });
    });

    expect(configCalled).toBe(true);
  });

  test('page views are tracked on navigation', async ({ page }) => {
    // Listen for network requests to Google Analytics
    const gaTracks: string[] = [];
    page.on('request', request => {
      if (request.url().includes('google-analytics') || request.url().includes('googletagmanager')) {
        gaTracks.push(request.url());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(500);

    // Navigate to another page
    await page.goto('/fine-dining');
    await page.waitForTimeout(500);

    // GA request should have been made
    expect(gaTracks.length).toBeGreaterThan(0);
  });

  test('GA4 tracking works across multiple pages', async ({ page }) => {
    const gaTracks: { url: string, timestamp: number }[] = [];

    page.on('request', request => {
      if (request.url().includes('collect')) {
        gaTracks.push({
          url: request.url(),
          timestamp: Date.now()
        });
      }
    });

    // Visit multiple pages
    const pages = ['/', '/fine-dining', '/catering', '/events'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForTimeout(300);
    }

    // Should have tracking requests
    expect(gaTracks.length).toBeGreaterThan(0);
  });
});
