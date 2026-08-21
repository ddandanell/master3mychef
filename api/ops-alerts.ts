import type { VercelRequest, VercelResponse } from '@vercel/node'
import { isOpsAuthorized } from '../lib/ops-auth.js'
import { refreshOpsAlerts, buildDiagnoseContext } from '../lib/ops-diagnose.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  if (!isOpsAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' })

  try {
    if (req.method === 'GET') {
      const ctx = await buildDiagnoseContext()
      return res.status(200).json(ctx)
    }
    const alerts = await refreshOpsAlerts()
    return res.status(200).json({ ok: true, alerts })
  } catch (error) {
    console.error('ops-alerts failed:', error)
    return res.status(500).json({ error: 'Failed to refresh alerts' })
  }
}
