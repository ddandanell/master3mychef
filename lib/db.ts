import { neon } from '@neondatabase/serverless'

export function databaseUrl(): string | undefined {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL
}

export function getSql() {
  const url = databaseUrl()
  if (!url) {
    throw new Error('DATABASE_URL is not set')
  }
  return neon(url)
}
