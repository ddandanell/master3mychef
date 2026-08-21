import assert from 'node:assert/strict'
import test from 'node:test'
import { shouldFlushFormAbandon, unfinishedFormIds } from './form-abandon.ts'

test('unfinishedFormIds skips completed forms and returns started ids', () => {
  const store: Record<string, string> = {
    form_started_contact: '1',
    form_started_quote: '1',
    form_completed_quote: '1',
    other: '1',
  }
  assert.deepEqual(
    unfinishedFormIds(Object.keys(store), (key) => store[key] ?? null),
    ['contact']
  )
})

test('shouldFlushFormAbandon only on real pagehide, and clears are the caller’s job', () => {
  assert.equal(shouldFlushFormAbandon({ reason: 'visibility' }), false)
  assert.equal(shouldFlushFormAbandon({ reason: 'cleanup' }), false)
  assert.equal(shouldFlushFormAbandon({ reason: 'pagehide', persisted: true }), false)
  assert.equal(shouldFlushFormAbandon({ reason: 'pagehide', persisted: false }), true)
  assert.equal(shouldFlushFormAbandon({ reason: 'pagehide' }), true)
})
