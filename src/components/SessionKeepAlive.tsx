import { useEffect, useRef } from 'react'
import { collectFirstParty } from '@/lib/collect'
import { serviceAreaFromPath } from '@/lib/analytics'
import {
  FORM_STARTED_PREFIX,
  shouldFlushFormAbandon,
  unfinishedFormIds,
} from '@/lib/form-abandon'

const START_KEY = 'mychef-session-start'
const HEARTBEAT_MS = 15_000

function sessionStartMs(): number {
  try {
    const existing = Number(sessionStorage.getItem(START_KEY) || 0)
    if (existing > 0) return existing
    const now = Date.now()
    sessionStorage.setItem(START_KEY, String(now))
    return now
  } catch {
    return Date.now()
  }
}

function flushFormAbandons() {
  try {
    const keys: Array<string | null> = []
    for (let i = 0; i < sessionStorage.length; i++) keys.push(sessionStorage.key(i))
    const formIds = unfinishedFormIds(keys, (key) => sessionStorage.getItem(key))
    for (const formId of formIds) {
      collectFirstParty('form_abandon', {
        source: formId,
        service_area: serviceAreaFromPath(window.location.pathname),
        metadata: { form_id: formId },
      })
      sessionStorage.removeItem(`${FORM_STARTED_PREFIX}${formId}`)
    }
  } catch {
    /* private mode */
  }
}

/**
 * Writes page_heartbeat while the tab is visible and session_end on hide/leave
 * so bounce and duration live in Postgres, not only in GA4.
 */
export default function SessionKeepAlive(): null {
  const startRef = useRef(sessionStartMs())

  useEffect(() => {
    startRef.current = sessionStartMs()

    const ping = (eventName: 'page_heartbeat' | 'session_end') => {
      collectFirstParty(eventName, {
        service_area: serviceAreaFromPath(window.location.pathname),
        metadata: { elapsed_ms: Date.now() - startRef.current },
      })
    }

    const beat = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return
      ping('page_heartbeat')
    }, HEARTBEAT_MS)

    const onHide = () => {
      if (document.visibilityState === 'hidden') ping('session_end')
    }
    const onPageHide = (event: PageTransitionEvent) => {
      ping('session_end')
      if (shouldFlushFormAbandon({ reason: 'pagehide', persisted: event.persisted })) {
        flushFormAbandons()
      }
    }
    document.addEventListener('visibilitychange', onHide)
    window.addEventListener('pagehide', onPageHide)

    return () => {
      window.clearInterval(beat)
      document.removeEventListener('visibilitychange', onHide)
      window.removeEventListener('pagehide', onPageHide)
      ping('session_end')
    }
  }, [])

  return null
}
