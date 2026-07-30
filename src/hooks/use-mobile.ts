import * as React from "react"

const MOBILE_BREAKPOINT = 768

const QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribe(onStoreChange: () => void): () => void {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener("change", onStoreChange)
  return () => mql.removeEventListener("change", onStoreChange)
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches
}

function getServerSnapshot(): boolean {
  return false
}

/**
 * True when the viewport is narrower than the mobile breakpoint.
 *
 * Implemented with useSyncExternalStore rather than useState plus an effect that
 * calls setState in its body. The previous version tripped
 * react-hooks/set-state-in-effect: it seeded the initial value by calling
 * setIsMobile synchronously inside a useLayoutEffect, which forces an extra
 * render pass on mount and is exactly the pattern useSyncExternalStore exists
 * to replace.
 *
 * Two behavioural notes:
 *  - The old version reported `false` on the very first render (state started as
 *    undefined) and corrected itself immediately after. This version returns the
 *    real value on the first render, so no mobile-layout flash.
 *  - It now reads matchMedia().matches rather than window.innerWidth, so the
 *    value always agrees with the media query being subscribed to.
 *
 * getServerSnapshot returns false so the Playwright prerender
 * (scripts/prerender.ts) resolves deterministically to the desktop layout
 * instead of touching `window`.
 */
export function useIsMobile(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
