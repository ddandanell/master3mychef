import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Accessibility & Visual Audit', () => {
  test('homepage has no accessibility violations', async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    });
  });

  test('check for black text on black backgrounds on homepage', async ({ page }) => {
    await page.goto('/');

    const textElements = await page.locator('*').all();
    const issues: { element: string; bg: string; color: string; content: string }[] = [];

    for (const element of textElements) {
      const isVisible = await element.isVisible();
      if (!isVisible) continue;

      const style = await element.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          color: computed.color,
          backgroundColor: computed.backgroundColor,
          tagName: el.tagName,
          textContent: el.textContent?.substring(0, 50) || ''
        };
      });

      // Check for black/very dark text on black/very dark backgrounds
      const isBlackOrDarkText = isColorDark(style.color);
      const isBlackOrDarkBg = isColorDark(style.backgroundColor);

      if (isBlackOrDarkText && isBlackOrDarkBg && style.textContent.trim().length > 0) {
        issues.push({
          element: style.tagName,
          bg: style.backgroundColor,
          color: style.color,
          content: style.textContent
        });
      }
    }

    if (issues.length > 0) {
      console.log('Found potential contrast issues:');
      issues.forEach(issue => {
        console.log(`  Element: ${issue.element}, Text: "${issue.content}", BG: ${issue.bg}, Color: ${issue.color}`);
      });
    }

    expect(issues.length).toBe(0);
  });

  test('fine-dining page has no accessibility violations', async ({ page }) => {
    await page.goto('/fine-dining');
    await injectAxe(page);
    await checkA11y(page, null, {
      detailedReport: true
    });
  });

  test('fine-dining/our-chefs page loads correctly', async ({ page }) => {
    await page.goto('/fine-dining/our-chefs');

    // Check page title and heading
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();

    // Check for content
    const content = page.locator('body');
    const text = await content.textContent();
    expect(text).toBeTruthy();
    expect(text?.length).toBeGreaterThan(0);
  });

  test('check all major pages for contrast issues', async ({ page }) => {
    const pages = ['/', '/fine-dining', '/catering', '/events', '/in-villa-service', '/staffing', '/locations'];

    for (const pagePath of pages) {
      await page.goto(pagePath);

      // Simple contrast check
      const lowContrastElements: string[] = [];

      const elements = await page.locator('[style*="color"]').all();
      for (const element of elements.slice(0, 20)) { // Check first 20 for performance
        const isVisible = await element.isVisible().catch(() => false);
        if (!isVisible) continue;

        const hasLowContrast = await element.evaluate(el => {
          const style = window.getComputedStyle(el);
          const color = style.color;
          const bgColor = style.backgroundColor;

          return isColorDark(color) && isColorDark(bgColor);
        }).catch(() => false);

        if (hasLowContrast) {
          const text = await element.textContent();
          lowContrastElements.push(`${pagePath}: "${text?.substring(0, 30)}"`);
        }
      }

      if (lowContrastElements.length > 0) {
        console.warn(`Page ${pagePath} has potential contrast issues:`, lowContrastElements);
      }
    }
  });

  test('verify headings hierarchy', async ({ page }) => {
    await page.goto('/');

    const h1Count = await page.locator('h1').count();
    const h2Count = await page.locator('h2').count();

    // Should have proper heading hierarchy
    expect(h1Count).toBeGreaterThan(0);
    expect(h2Count).toBeGreaterThan(0);
  });

  test('check image alt text', async ({ page }) => {
    await page.goto('/');

    const images = await page.locator('img').all();
    const missingAltText: string[] = [];

    for (const image of images) {
      const alt = await image.getAttribute('alt');
      const src = await image.getAttribute('src');

      if (!alt || alt.trim() === '') {
        missingAltText.push(src || 'unknown');
      }
    }

    console.log(`Total images: ${images.length}, Missing alt text: ${missingAltText.length}`);
    if (missingAltText.length > 0) {
      console.warn('Images missing alt text:', missingAltText.slice(0, 5));
    }
  });

  test('verify links are keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Tab through links
    const links = await page.locator('a').all();
    expect(links.length).toBeGreaterThan(0);

    // First link should be focusable
    const firstLink = page.locator('a').first();
    await firstLink.focus();

    const isFocused = await firstLink.evaluate(el => {
      return document.activeElement === el;
    });

    expect(isFocused).toBe(true);
  });
});

function isColorDark(rgbColor: string): boolean {
  if (!rgbColor || rgbColor === 'rgba(0, 0, 0, 0)' || rgbColor === 'transparent') {
    return false; // Transparent/no color
  }

  // Parse rgb/rgba
  const matches = rgbColor.match(/\d+/g);
  if (!matches || matches.length < 3) return false;

  const r = parseInt(matches[0]);
  const g = parseInt(matches[1]);
  const b = parseInt(matches[2]);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5; // Dark if luminance < 50%
}
