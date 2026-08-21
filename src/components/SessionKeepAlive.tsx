import { useEffect, useRef } from 'react'
import { collectFirstParty } from '@/lib/collect'
import { serviceAreaFromPath } from '@/lib/analytics'

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
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i)
      if (!key || !key.startsWith('form_started_')) continue
      const formId = key.slice('form_started_'.length)
      if (sessionStorage.getItem(`form_completed_${formId}`)) continue
      collectFirstParty('form_abandon', {
        source: formId,
        service_area: serviceAreaFromPath(window.location.pathname),
        metadata: { form_id: formId },
      })
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
      if (eventName === 'session_end') flushFormAbandons()
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
    document.addEventListener('visibilitychange', onHide)
    window.addEventListener('pagehide', () => ping('session_end'))

    return () => {
      window.clearInterval(beat)
      document.removeEventListener('visibilitychange', onHide)
      ping('session_end')
    }
  }, [])

  return null
}
