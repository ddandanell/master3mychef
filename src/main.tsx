import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.tsx'
import { beforeSend, syncAnalyticsOptOut } from './lib/analytics-privacy'
import { initPostHog } from './lib/posthog'

// Honour ?va-disable=1 / ?va-disable=0 before the trackers mount.
// Must run before initPostHog(), which reads the resulting opt-out state.
syncAnalyticsOptOut()

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
