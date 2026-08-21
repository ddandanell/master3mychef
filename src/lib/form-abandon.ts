export const FORM_STARTED_PREFIX = 'form_started_'
export const FORM_COMPLETED_PREFIX = 'form_completed_'

export function unfinishedFormIds(
  keys: Array<string | null>,
  getItem: (key: string) => string | null
): string[] {
  const ids: string[] = []
  for (const key of keys) {
    if (!key || !key.startsWith(FORM_STARTED_PREFIX)) continue
    const formId = key.slice(FORM_STARTED_PREFIX.length)
    if (!formId || getItem(`${FORM_COMPLETED_PREFIX}${formId}`)) continue
    ids.push(formId)
  }
  return ids
}

/** Abandon only on a real unload, not tab switches, bfcache, or React effect cleanup. */
export function shouldFlushFormAbandon(input: {
  reason: 'visibility' | 'pagehide' | 'cleanup'
  persisted?: boolean
}): boolean {
  return input.reason === 'pagehide' && input.persisted !== true
}
