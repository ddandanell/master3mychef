import { test, expect } from '@playwright/test';

const GA_ID = 'G-W0PQH8ZKTF';

async function waitForDataLayer(page: import('@playwright/test').Page) {
  await page.waitForFunction(() => Array.isArray((window as any).dataLayer));
}

test.describe('Google Analytics 4 Tracking', () => {
  test('gtag bootstrap script with GA ID exists in DOM', async ({ page }) => {
    await page.goto('/');

    const gtagScript = page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`);
    await expect(gtagScript).toHaveCount(1);
  });

  test('gtag and dataLayer are initialized', async ({ page }) => {
    await page.goto('/');
    await waitForDataLayer(page);

    const state = await page.evaluate(() => ({
      hasGtag: typeof (window as any).gtag === 'function',
      hasDataLayer: Array.isArray((window as any).dataLayer),
    }));

    expect(state.hasGtag).toBe(true);
    expect(state.hasDataLayer).toBe(true);
  });

  test('gtag config call for GA ID is pushed to dataLayer', async ({ page }) => {
    await page.goto('/');
    await waitForDataLayer(page);

    await page.waitForFunction(
      (id) => {
        const dl = ((window as any).dataLayer || []) as any[];
        return dl.some((entry) => {
          if (!entry || typeof entry !== 'object') return false;
          const first = (entry as any)[0];
          const second = (entry as any)[1];
          return first === 'config' && second === id;
        });
      },
      GA_ID
    );

    const hasConfig = await page.evaluate((id) => {
      const dl = ((window as any).dataLayer || []) as any[];
      return dl.some((entry) => {
        if (!entry || typeof entry !== 'object') return false;
        const first = (entry as any)[0];
        const second = (entry as any)[1];
        return first === 'config' && second === id;
      });
    }, GA_ID);

    expect(hasConfig).toBe(true);
  });

  test('SPA navigation pushes page_view event to dataLayer', async ({ page }) => {
    await page.goto('/');
    await waitForDataLayer(page);

    await page.evaluate(() => {
      const dl = (window as any).dataLayer as any[];
      const originalPush = dl.push.bind(dl);
      (window as any).__trackedEvents = [];
      dl.push = (...args: any[]) => {
        (window as any).__trackedEvents.push(...args);
        return originalPush(...args);
      };
    });

    const navLink = page.locator('a[href="/fine-dining"]').first();
    await navLink.click();

    await page.waitForFunction(() => {
      const events = ((window as any).__trackedEvents || []) as any[];
      return events.some((entry) => entry && typeof entry === 'object' && entry.event === 'page_view');
    });

    const hasPageView = await page.evaluate(() => {
      const events = ((window as any).__trackedEvents || []) as any[];
      return events.some((entry) => entry && typeof entry === 'object' && entry.event === 'page_view');
    });

    expect(hasPageView).toBe(true);
  });

  test('conversion click pushes generate_lead event', async ({ page }) => {
    await page.goto('/');
    await waitForDataLayer(page);

    await page.evaluate(() => {
      const dl = (window as any).dataLayer as any[];
      const originalPush = dl.push.bind(dl);
      (window as any).__trackedEvents = [];
      dl.push = (...args: any[]) => {
        (window as any).__trackedEvents.push(...args);
        return originalPush(...args);
      };
    });

    const waLink = page.locator('a[href*="wa.me"]').first();
    await waLink.click({ force: true });

    await page.waitForFunction(() => {
      const events = ((window as any).__trackedEvents || []) as any[];
      return events.some((entry) => entry && typeof entry === 'object' && entry.event === 'generate_lead');
    });

    const hasLeadEvent = await page.evaluate(() => {
      const events = ((window as any).__trackedEvents || []) as any[];
      return events.some((entry) => entry && typeof entry === 'object' && entry.event === 'generate_lead');
    });

    expect(hasLeadEvent).toBe(true);
  });
});
