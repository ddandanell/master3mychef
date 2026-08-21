import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSql } from '../lib/db.js'
import { isOpsAuthorized } from '../lib/ops-auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (!isOpsAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' })

  const sql = getSql()

  if (req.method === 'GET') {
    try {
      const rows = await sql`
        SELECT id, created_at, flag_key, variants, hypothesis, started_at, ended_at, status, result_summary, owner
        FROM ops_experiments
        ORDER BY id DESC
        LIMIT 50
      `
      return res.status(200).json({ experiments: rows })
    } catch (error) {
      console.error('ops-experiments list failed:', error)
      return res.status(500).json({ error: 'Failed to list experiments' })
    }
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as {
    flag_key?: string
    variants?: unknown
    hypothesis?: string
    status?: string
    result_summary?: string
    owner?: string
    id?: number
    ended?: boolean
  }

  try {
    if (body.id && (body.result_summary || body.status || body.ended)) {
      const status = body.status || (body.ended ? 'completed' : undefined)
      await sql`
        UPDATE ops_experiments SET
          result_summary = COALESCE(${body.result_summary ?? null}, result_summary),
          status = COALESCE(${status ?? null}, status),
          ended_at = CASE WHEN ${Boolean(body.ended || status === 'completed')} THEN now() ELSE ended_at END
        WHERE id = ${Number(body.id)}
      `
      const rows = await sql`SELECT flag_key, hypothesis, result_summary FROM ops_experiments WHERE id = ${Number(body.id)} LIMIT 1`
      const exp = rows[0] as { flag_key: string; hypothesis: string; result_summary: string | null } | undefined
      if (exp) {
        await sql`
          INSERT INTO ops_changes (change_type, summary, actor)
          VALUES (
            'experiment',
            ${`Experiment ${exp.flag_key}: ${exp.result_summary || exp.hypothesis}`.slice(0, 500)},
            ${body.owner || 'command-center'}
          )
        `
      }
      return res.status(200).json({ ok: true, id: body.id })
    }

    const flagKey = body.flag_key?.trim()
    const hypothesis = body.hypothesis?.trim()
    if (!flagKey || !hypothesis) {
      return res.status(400).json({ error: 'flag_key and hypothesis required' })
    }

    const inserted = await sql`
      INSERT INTO ops_experiments (flag_key, variants, hypothesis, started_at, status, owner)
      VALUES (
        ${flagKey.slice(0, 120)},
        ${body.variants ?? null},
        ${hypothesis.slice(0, 1000)},
        now(),
        ${body.status || 'running'},
        ${body.owner?.slice(0, 80) ?? null}
      )
      RETURNING id
    `

    await sql`
      INSERT INTO ops_changes (change_type, summary, actor)
      VALUES (
        'experiment_start',
        ${`Started experiment ${flagKey}: ${hypothesis}`.slice(0, 500)},
        ${body.owner || 'command-center'}
      )
    `

    return res.status(200).json({ ok: true, id: inserted[0]?.id })
  } catch (error) {
    console.error('ops-experiments failed:', error)
    return res.status(500).json({ error: 'Failed to save experiment' })
  }
}
