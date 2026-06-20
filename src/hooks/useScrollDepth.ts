import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

const MILESTONES = [25, 50, 75, 90]

/**
 * Tracks scroll depth milestones on the current page.
 * @param pageSource - identifier for GA4 page_source dimension
 */
export function useScrollDepth(pageSource: string): void {
  const firedRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    firedRef.current = new Set()

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const pct = Math.round((scrollTop / docHeight) * 100)

      for (const milestone of MILESTONES) {
        if (pct >= milestone && !firedRef.current.has(milestone)) {
          firedRef.current.add(milestone)
          trackScrollDepth(milestone, pageSource)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pageSource])
}
