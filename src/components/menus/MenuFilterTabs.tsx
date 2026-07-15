export interface MenuFilterOption {
  value: string
  label: string
}

export interface MenuFilterTabsProps {
  options: MenuFilterOption[]
  active: string
  onChange: (value: string) => void
  /** 'gold' (#C5A028) is the default; 'warm' (#E8985E) is used on the kids' page. */
  accent?: 'gold' | 'warm'
}

// Class strings are written out in full so Tailwind's JIT picks them up.
const ACTIVE_CLASSES: Record<'gold' | 'warm', string> = {
  gold: 'bg-[#C5A028] text-[#1A1A1A]',
  warm: 'bg-[#E8985E] text-[#1A1A1A]',
}

/** Pure presentational pill filter row — the active value lives in the parent page. */
export default function MenuFilterTabs({ options, active, onChange, accent = 'gold' }: MenuFilterTabsProps) {
  return (
    <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
      {options.map((option) => {
        const isActive = option.value === active
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
              isActive
                ? ACTIVE_CLASSES[accent]
                : 'border border-white/15 bg-transparent text-white/[75%] hover:border-white/40 hover:text-white'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
