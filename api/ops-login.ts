import type { VercelRequest, VercelResponse } from '@vercel/node'
import { clearOpsSessionCookie, credentialsMatch, opsSessionCookie, signOpsSession } from '../lib/ops-auth.js'

const LOGIN_WINDOW_MS = 60_000
const LOGIN_MAX_ATTEMPTS = 5
const loginAttempts = new Map<string, { count: number; resetAt: number }>()

function clientKey(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for']
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded
  return value?.split(',')[0]?.trim() || 'unknown'
}

function attemptState(key: string) {
  const now = Date.now()
  const current = loginAttempts.get(key)
  if (!current || current.resetAt <= now) {
    const fresh = { count: 0, resetAt: now + LOGIN_WINDOW_MS }
    loginAttempts.set(key, fresh)
    return fresh
  }
  return current
}

function recordFailure(key: string) {
  const state = attemptState(key)
  state.count += 1
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', clearOpsSessionCookie())
    return res.status(200).json({ ok: true })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const key = clientKey(req)
  const state = attemptState(key)
  if (state.count >= LOGIN_MAX_ATTEMPTS) {
    const retrySeconds = Math.max(1, Math.ceil((state.resetAt - Date.now()) / 1000))
    res.setHeader('Retry-After', String(retrySeconds))
    return res.status(429).json({ error: 'Too many login attempts. Try again shortly.' })
  }

  let body: { username?: string; password?: string } | undefined
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as typeof body
  } catch {
    return res.status(400).json({ error: 'Invalid request body' })
  }
  const username = body?.username?.trim() || ''
  const password = body?.password || ''
  try {
    if (!credentialsMatch(username, password)) {
      recordFailure(key)
      await new Promise((resolve) => setTimeout(resolve, 500))
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    loginAttempts.delete(key)
    res.setHeader('Set-Cookie', opsSessionCookie(signOpsSession(username)))
    return res.status(200).json({ ok: true, user: username })
  } catch (error) {
    console.error('ops-login configuration failed:', error)
    return res.status(503).json({ error: 'Command Center authentication is not configured' })
  }
}
