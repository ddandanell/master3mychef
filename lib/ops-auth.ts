import { timingSafeEqual } from 'crypto'
import type { VercelRequest } from '@vercel/node'

export function opsKeyConfigured(): string | undefined {
  const key = process.env.OPS_DASHBOARD_KEY?.trim()
  return key || undefined
}

function readCookie(header: string | string[] | undefined, name: string): string | undefined {
  const raw = Array.isArray(header) ? header.join(';') : header
  if (!raw) return undefined
  for (const part of raw.split(';')) {
    const [k, ...rest] = part.trim().split('=')
    if (k === name) return decodeURIComponent(rest.join('='))
  }
  return undefined
}

export function providedOpsKey(req: VercelRequest): string | undefined {
  const header = req.headers['x-ops-key']
  if (typeof header === 'string' && header.trim()) return header.trim()
  const q = req.query.key
  if (typeof q === 'string' && q.trim()) return q.trim()
  const body = req.body as { key?: string } | undefined
  if (body && typeof body.key === 'string' && body.key.trim()) return body.key.trim()
  return readCookie(req.headers.cookie, 'ops_key')
}

export function opsKeyMatches(provided: string | undefined, expected: string): boolean {
  if (!provided) return false
  const a = Buffer.from(provided)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}
