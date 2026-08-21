import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getOpsAnalytics } from '../lib/ops-analytics.js'
import { AnalyticsRangeError } from '../lib/ops-analytics-range.js'
import { isOpsAuthorized } from '../lib/ops-auth.js'

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  try {
    if (!isOpsAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' })
    const analytics = await getOpsAnalytics({
      from: first(req.query.from),
      to: first(req.query.to),
      bucket: first(req.query.bucket),
    })
    return res.status(200).json(analytics)
  } catch (error) {
    if (error instanceof AnalyticsRangeError) return res.status(400).json({ error: error.message })
    console.error('ops-analytics failed:', error)
    if (error instanceof Error && error.message.includes('must be configured in production')) {
      return res.status(503).json({ error: 'Command Center authentication is not configured' })
    }
    return res.status(500).json({ error: 'Failed to load analytics' })
  }
}
