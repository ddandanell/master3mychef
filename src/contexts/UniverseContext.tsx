import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export type Universe = 'hub' | 'luna' | 'sol' | 'aura'

interface UniverseContextType {
  universe: Universe
}

const UniverseContext = createContext<UniverseContextType>({ universe: 'hub' })

const PATH_TO_UNIVERSE: Record<string, Universe> = {
  '/': 'hub',
  '/fine-dining': 'luna',
  '/villa-chef': 'sol',
  '/events': 'aura',
}

export function UniverseProvider({ children }: { children: ReactNode }) {
  const location = useLocation()

  /**
   * The current universe is a pure function of the path, so it is derived during
   * render rather than held in state.
   *
   * It used to be useState seeded to 'hub' plus a useEffect that called
   * setUniverse(matched) whenever location.pathname changed — which tripped
   * react-hooks/set-state-in-effect and meant every navigation rendered twice:
   * once with the previous universe, then again once the effect corrected it.
   * On the first paint of a deep link that showed the wrong universe briefly.
   *
   * `setUniverse` was also removed from the context. It was exposed but no
   * consumer ever called it (checked across src/), and keeping a setter for
   * derived state invites exactly the bug above — a manual value that the next
   * navigation silently discards. Anything that genuinely needs to override the
   * universe should add that deliberately rather than inherit a dormant setter.
   */
  const universe = useMemo<Universe>(
    () => PATH_TO_UNIVERSE[location.pathname] || 'hub',
    [location.pathname],
  )

  // Syncing an external system (the DOM) from React state is what effects are
  // for, so this one stays.
  useEffect(() => {
    document.documentElement.setAttribute('data-universe', universe)
  }, [universe])

  const value = useMemo(() => ({ universe }), [universe])

  return <UniverseContext.Provider value={value}>{children}</UniverseContext.Provider>
}

export const useUniverse = () => useContext(UniverseContext)
