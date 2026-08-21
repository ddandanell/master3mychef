import assert from 'node:assert/strict'
import test from 'node:test'
import { parseAnalyticsRange } from './ops-analytics-range.js'

const NOW = new Date('2026-08-22T02:00:00.000Z')

test('defaults to the latest 30 calendar days and matching prior period', () => {
  const range = parseAnalyticsRange({}, NOW)

  assert.equal(range.from, '2026-07-24')
  assert.equal(range.to, '2026-08-22')
  assert.equal(range.endExclusive, '2026-08-23')
  assert.equal(range.compareFrom, '2026-06-24')
  assert.equal(range.compareTo, '2026-07-23')
  assert.equal(range.days, 30)
  assert.equal(range.bucket, 'day')
})

test('builds an immediately preceding comparison with equal length', () => {
  const range = parseAnalyticsRange({ from: '2026-08-01', to: '2026-08-07' }, NOW)

  assert.equal(range.compareFrom, '2026-07-25')
  assert.equal(range.compareTo, '2026-07-31')
  assert.equal(range.days, 7)
})

test('selects readable automatic buckets for longer periods', () => {
  assert.equal(parseAnalyticsRange({ from: '2026-01-01', to: '2026-04-30' }, NOW).bucket, 'week')
  assert.equal(parseAnalyticsRange({ from: '2024-09-01', to: '2026-08-22' }, NOW).bucket, 'month')
})

test('accepts an explicit supported bucket', () => {
  assert.equal(parseAnalyticsRange({ from: '2026-08-01', to: '2026-08-22', bucket: 'week' }, NOW).bucket, 'week')
})

test('rejects invalid, reversed, future, and oversized ranges', () => {
  assert.throws(() => parseAnalyticsRange({ from: 'not-a-date', to: '2026-08-22' }, NOW), /valid dates/)
  assert.throws(() => parseAnalyticsRange({ from: '2026-08-22', to: '2026-08-01' }, NOW), /before or equal/)
  assert.throws(() => parseAnalyticsRange({ from: '2026-08-01', to: '2026-08-23' }, NOW), /future/)
  assert.throws(() => parseAnalyticsRange({ from: '2024-08-01', to: '2026-08-22' }, NOW), /730 days/)
})

test('rejects unsupported buckets', () => {
  assert.throws(
    () => parseAnalyticsRange({ from: '2026-08-01', to: '2026-08-22', bucket: 'hour' }, NOW),
    /bucket/
  )
})
