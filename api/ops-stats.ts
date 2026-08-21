import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getOpsSnapshot } from '../lib/ops-stats.js'
import { opsKeyConfigured, opsKeyMatches, providedOpsKey } from '../lib/ops-auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const expected = opsKeyConfigured()
  if (!expected) {
    return res.status(404).json({ error: 'Not found' })
  }
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  if (!opsKeyMatches(providedOpsKey(req), expected)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  try {
    const snapshot = await getOpsSnapshot()
    res.setHeader('Cache-Control', 'no-store')
    return res.status(200).json(snapshot)
  } catch (error) {
    console.error('ops-stats failed:', error)
    return res.status(500).json({ error: 'Failed to load stats' })
  }
}
