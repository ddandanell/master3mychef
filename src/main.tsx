import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import './index.css'
import './App.css'
import App from './App.tsx'

// Keep Vercel telemetry active in production, but skip it during local preview
// so mobile/SEO audits don't record 404 console errors for the injected scripts.
const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    {!isLocalhost && <Analytics />}
    {!isLocalhost && <SpeedInsights />}
  </BrowserRouter>,
)
