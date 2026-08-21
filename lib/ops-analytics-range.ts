export const ANALYTICS_BUCKETS = ['day', 'week', 'month'] as const
export type AnalyticsBucket = (typeof ANALYTICS_BUCKETS)[number]

export type AnalyticsRangeInput = {
  from?: string
  to?: string
  bucket?: string
}

export type AnalyticsRange = {
  from: string
  to: string
  endExclusive: string
  compareFrom: string
  compareTo: string
  compareEndExclusive: string
  days: number
  bucket: AnalyticsBucket
}

const DAY_MS = 86_400_000
const MAX_DAYS = 730
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/

export class AnalyticsRangeError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AnalyticsRangeError'
  }
}

function startOfUtcDay(value: Date): Date {
  return new Date(Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate()))
}

function parseIsoDay(value: string): Date | null {
  if (!ISO_DAY.test(value)) return null
  const parsed = new Date(`${value}T00:00:00.000Z`)
  return Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value ? null : parsed
}

function addDays(value: Date, days: number): Date {
  return new Date(value.getTime() + days * DAY_MS)
}

function isoDay(value: Date): string {
  return value.toISOString().slice(0, 10)
}

function automaticBucket(days: number): AnalyticsBucket {
  if (days <= 62) return 'day'
  if (days <= 366) return 'week'
  return 'month'
}

export function parseAnalyticsRange(input: AnalyticsRangeInput, now = new Date()): AnalyticsRange {
  const today = startOfUtcDay(now)
  const defaultFrom = addDays(today, -29)
  const from = input.from ? parseIsoDay(input.from) : defaultFrom
  const to = input.to ? parseIsoDay(input.to) : today

  if (!from || !to) throw new AnalyticsRangeError('from and to must be valid dates in YYYY-MM-DD format')
  if (from > to) throw new AnalyticsRangeError('from must be before or equal to to')
  if (to > today) throw new AnalyticsRangeError('to cannot be in the future')

  const days = Math.round((to.getTime() - from.getTime()) / DAY_MS) + 1
  if (days > MAX_DAYS) throw new AnalyticsRangeError(`date range cannot exceed ${MAX_DAYS} days`)

  let bucket = automaticBucket(days)
  if (input.bucket) {
    if (!ANALYTICS_BUCKETS.includes(input.bucket as AnalyticsBucket)) {
      throw new AnalyticsRangeError(`bucket must be one of: ${ANALYTICS_BUCKETS.join(', ')}`)
    }
    bucket = input.bucket as AnalyticsBucket
  }

  const endExclusive = addDays(to, 1)
  const compareTo = addDays(from, -1)
  const compareFrom = addDays(compareTo, -(days - 1))

  return {
    from: isoDay(from),
    to: isoDay(to),
    endExclusive: isoDay(endExclusive),
    compareFrom: isoDay(compareFrom),
    compareTo: isoDay(compareTo),
    compareEndExclusive: isoDay(from),
    days,
    bucket,
  }
}
