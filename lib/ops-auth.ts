import { createHash, createHmac, timingSafeEqual } from 'crypto'
import type { VercelRequest } from '@vercel/node'

const SESSION_COOKIE = 'ops_session'
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000

function isProduction(): boolean {
  return process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'
}

function configuredSecret(name: 'OPS_DASHBOARD_PASSWORD' | 'OPS_DASHBOARD_KEY'): string | undefined {
  const value = process.env[name]?.trim()
  return value || undefined
}

export function opsCredentials() {
  const user = process.env.OPS_DASHBOARD_USER?.trim()
  const pass = configuredSecret('OPS_DASHBOARD_PASSWORD')
  if (isProduction() && (!user || !pass)) {
    throw new Error('OPS_DASHBOARD_USER and OPS_DASHBOARD_PASSWORD must be configured in production')
  }
  return {
    user: user || 'admin',
    pass: pass || 'admin',
  }
}

function sessionSecret(): string {
  const secret = configuredSecret('OPS_DASHBOARD_PASSWORD') || configuredSecret('OPS_DASHBOARD_KEY')
  if (isProduction() && !secret) {
    throw new Error('OPS_DASHBOARD_PASSWORD or OPS_DASHBOARD_KEY must be configured in production')
  }
  return secret || 'admin'
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

function equal(a: string, b: string): boolean {
  const left = createHash('sha256').update(a).digest()
  const right = createHash('sha256').update(b).digest()
  return timingSafeEqual(left, right)
}

export function signOpsSession(username: string): string {
  const payload = Buffer.from(JSON.stringify({ u: username, exp: Date.now() + SESSION_TTL_MS })).toString('base64url')
  const sig = createHmac('sha256', sessionSecret()).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function opsSessionCookie(token: string): string {
  const secure = isProduction() ? '; Secure' : ''
  return `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Strict${secure}; Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`
}

export function clearOpsSessionCookie(): string {
  const secure = isProduction() ? '; Secure' : ''
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict${secure}; Max-Age=0`
}

function sessionValid(token: string | undefined): boolean {
  if (!token || !token.includes('.')) return false
  const [payload, sig] = token.split('.')
  const expected = createHmac('sha256', sessionSecret()).update(payload).digest('base64url')
  if (!equal(sig, expected)) return false
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as { u?: string; exp?: number }
    return Boolean(data.u) && typeof data.exp === 'number' && data.exp > Date.now()
  } catch {
    return false
  }
}

export function opsKeyConfigured(): string | undefined {
  const key = process.env.OPS_DASHBOARD_KEY?.trim()
  return key || undefined
}

function providedOpsKey(req: VercelRequest): string | undefined {
  const header = req.headers['x-ops-key']
  if (typeof header === 'string' && header.trim()) return header.trim()
  return undefined
}

export function isOpsAuthorized(req: VercelRequest): boolean {
  if (sessionValid(readCookie(req.headers.cookie, SESSION_COOKIE))) return true
  const expectedKey = opsKeyConfigured()
  const provided = providedOpsKey(req)
  if (expectedKey && provided && equal(provided, expectedKey)) return true
  return false
}

export function credentialsMatch(username: string, password: string): boolean {
  const expected = opsCredentials()
  return equal(username, expected.user) && equal(password, expected.pass)
}
