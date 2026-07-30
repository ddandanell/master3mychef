import { useEffect, useRef } from 'react'
import { trackTimeOnPage } from '@/lib/analytics'

const MILESTONES = [30, 60, 120, 180]

/**
 * Tracks time-on-page milestones in seconds.
 * @param pageSource - identifier for GA4 page_source dimension
 */
export function useTimeOnPage(pageSource: string): void {
  const firedRef = useRef<Set<number>>(new Set())
  // Initialised to 0, not Date.now(). Calling Date.now() here would run on every
  // render and be discarded after the first (react-hooks/purity), and the value
  // was never used anyway — the effect below assigns the real start time before
  // the interval can read it.
  const startRef = useRef<number>(0)

  useEffect(() => {
    firedRef.current = new Set()
    startRef.current = Date.now()

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startRef.current) / 1000)

      for (const milestone of MILESTONES) {
        if (elapsed >= milestone && !firedRef.current.has(milestone)) {
          firedRef.current.add(milestone)
          trackTimeOnPage(milestone, pageSource)
        }
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [pageSource])
}
