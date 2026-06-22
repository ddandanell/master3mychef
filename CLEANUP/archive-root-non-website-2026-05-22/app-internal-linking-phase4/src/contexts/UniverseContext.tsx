import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export type Universe = 'hub' | 'luna' | 'sol' | 'aura'

interface UniverseContextType {
  universe: Universe
  setUniverse: (u: Universe) => void
}

const UniverseContext = createContext<UniverseContextType>({
  universe: 'hub',
  setUniverse: () => {},
})

const PATH_TO_UNIVERSE: Record<string, Universe> = {
  '/': 'hub',
  '/fine-dining': 'luna',
  '/villa-chef': 'sol',
  '/events': 'aura',
}

export function UniverseProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [universe, setUniverse] = useState<Universe>('hub')

  useEffect(() => {
    const path = location.pathname
    const matched = PATH_TO_UNIVERSE[path] || 'hub'
    setUniverse(matched)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.setAttribute('data-universe', universe)
  }, [universe])

  return (
    <UniverseContext.Provider value={{ universe, setUniverse }}>
      {children}
    </UniverseContext.Provider>
  )
}

export const useUniverse = () => useContext(UniverseContext)
