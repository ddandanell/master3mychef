import './init/whatsapp-tracker'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.tsx'
import { beforeSend, syncAnalyticsOptOut } from './lib/analytics-privacy'
import { initPostHog } from './lib/posthog'
import { captureAttribution } from './lib/attribution'
import { installWhatsAppAttribution } from './lib/whatsapp'

// Honour ?va-disable=1 / ?va-disable=0 before the trackers mount.
// Must run before initPostHog(), which reads the resulting opt-out state.
syncAnalyticsOptOut()

// Campaign attribution. Must run AFTER syncAnalyticsOptOut() — captureAttribution
// checks the opt-out state, so running it first would store click IDs for a
// browser that had just asked not to be tracked.
//
// Landing-time capture only is enough for Google Ads: the click ID is present on
// the very first URL of the visit, and SPA route changes cannot introduce a new
// one. Re-capturing per route would only ever re-read the same query string.
captureAttribution()

// Stamps the reference code onto WhatsApp links at click time. Deliberately not
// done during render — the prerenderer would bake a single shared ref into the
// static HTML. See the comment block in lib/whatsapp.ts.
installWhatsAppAttribution()

// PostHog: session replay, autocapture, error tracking. Initialised before
// render so the first $pageview of the visit is not lost.
initPostHog()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Analytics beforeSend={beforeSend} />
    <SpeedInsights beforeSend={beforeSend} />
  </BrowserRouter>,
)
