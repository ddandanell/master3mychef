import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ingestCollectEvent, parseCollectBody, requestContextFromHeaders } from '../lib/ingest.js'

const ALLOWED_ORIGINS = [
  'https://mychef.id',
  'https://www.mychef.id',
  'http://localhost:5173',
  'http://localhost:4173',
  'http://localhost:3210',
  'http://localhost:3000',
  'http://127.0.0.1:3210',
]

const MAX_BODY_CHARS = 16_384

function getCorsHeaders(origin: string) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

function rawLength(body: unknown): number {
  if (typeof body === 'string') return body.length
  if (Buffer.isBuffer(body)) return body.length
  try {
    return JSON.stringify(body ?? '').length
  } catch {
    return MAX_BODY_CHARS + 1
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || ''
  const corsHeaders = getCorsHeaders(origin)
  Object.entries(corsHeaders).forEach(([key, value]) => {
    res.setHeader(key, value)
  })

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(204).end()
  }

  try {
    if (rawLength(req.body) > MAX_BODY_CHARS) {
      return res.status(204).end()
    }
    const payload = parseCollectBody(req.body)
    if (!payload) {
      return res.status(204).end()
    }
    await ingestCollectEvent(payload, requestContextFromHeaders(req.headers as Record<string, string | string[] | undefined>))
  } catch (error) {
    console.error('Failed to ingest collect event:', error)
  }

  return res.status(204).end()
}
