import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import App from './App.tsx'
import { beforeSend, syncAnalyticsOptOut } from './lib/analytics-privacy'

// Honour ?va-disable=1 / ?va-disable=0 before the trackers mount.
syncAnalyticsOptOut()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Analytics beforeSend={beforeSend} />
    <SpeedInsights beforeSend={beforeSend} />
  </BrowserRouter>,
)
