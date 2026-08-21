import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getOpsSnapshot } from '../lib/ops-stats.js'
import { isOpsAuthorized } from '../lib/ops-auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  if (!isOpsAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  try {
    return res.status(200).json(await getOpsSnapshot())
  } catch (error) {
    console.error('ops-stats failed:', error)
    return res.status(500).json({ error: 'Failed to load stats' })
  }
}
