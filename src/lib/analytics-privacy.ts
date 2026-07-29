/**
 * Collection-time filtering for Vercel Web Analytics and Speed Insights.
 *
 * Two categories of traffic are excluded, both by direct signal rather than
 * by guessing from geography or OS:
 *
 *   1. Opted-out devices — your own browsers. Visit any page with
 *      `?va-disable=1` once per browser to stop being counted; `?va-disable=0`
 *      re-enables. The choice is stored in localStorage and survives reloads.
 *
 *   2. Automated browsers — `navigator.webdriver` is set to true by every
 *      WebDriver/CDP-controlled browser. playwright.config.ts points its
 *      Chromium, Firefox and WebKit projects at https://mychef.id (production),
 *      so every E2E run was being recorded as real Linux visitors. That is the
 *      most likely explanation for the ~214 GNU/Linux visitors at 1.5 pages
 *      each in the 30 days to 30 Jul 2026.
 *
 * Both checks are deliberately signal-based. Nothing here filters on country,
 * OS or IP, so no genuine customer can be silently discarded.
 *
 * Note: this stops *new* events being recorded. It cannot retroactively clean
 * data already collected — use `scripts/vercel-analytics-report.mjs
 * --exclude-internal` for that.
 */

const OPT_OUT_KEY = 'va-disable';
const OPT_OUT_PARAM = 'va-disable';

/** localStorage throws in Safari private mode and some embedded webviews. */
function safeStorage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

/**
 * Reads `?va-disable=1` / `?va-disable=0` from the URL and persists the choice.
 * Call once at startup, before the Analytics components mount.
 */
export function syncAnalyticsOptOut(): void {
  const store = safeStorage();
  if (!store || typeof window === 'undefined') return;

  try {
    const value = new URLSearchParams(window.location.search).get(OPT_OUT_PARAM);
    if (value === null) return;

    if (value === '0' || value === 'false') {
      store.removeItem(OPT_OUT_KEY);
      console.info('[analytics] This browser is now COUNTED in Vercel Analytics.');
    } else {
      store.setItem(OPT_OUT_KEY, '1');
      console.info('[analytics] This browser is now EXCLUDED from Vercel Analytics.');
    }
  } catch {
    /* non-fatal — never let analytics config break the page */
  }
}

/** True when this browser has opted out via ?va-disable=1. */
export function hasOptedOut(): boolean {
  const store = safeStorage();
  if (!store) return false;
  try {
    return store.getItem(OPT_OUT_KEY) !== null;
  } catch {
    return false;
  }
}

/**
 * True for WebDriver/CDP-controlled browsers: Playwright, Puppeteer, Selenium.
 * Set by the automation protocol itself, so it is not spoofable by ordinary
 * visitors and produces no false positives on real traffic.
 */
export function isAutomatedBrowser(): boolean {
  try {
    return typeof navigator !== 'undefined' && navigator.webdriver === true;
  } catch {
    return false;
  }
}

/** True when this pageview should not be recorded. */
export function shouldExcludeFromAnalytics(): boolean {
  return hasOptedOut() || isAutomatedBrowser();
}

/**
 * `beforeSend` for <Analytics /> and <SpeedInsights />.
 * Returning null drops the event; nothing leaves the browser.
 *
 * Typed loosely on purpose: @vercel/analytics and @vercel/speed-insights
 * declare different event shapes, and this predicate inspects neither.
 */
export function beforeSend<T>(event: T): T | null {
  return shouldExcludeFromAnalytics() ? null : event;
}
