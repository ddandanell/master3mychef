import {
  COCKTAIL_CHOOSE_FOUR_NOTE,
  COCKTAIL_MENU_GROUPS,
} from '@/data/cocktailServicePackages'

interface CocktailMenuBoardProps {
  title?: string
  subtitle?: string
  dark?: boolean
  className?: string
}

export default function CocktailMenuBoard({
  title = 'Choose four cocktails',
  subtitle = COCKTAIL_CHOOSE_FOUR_NOTE,
  dark = false,
  className = '',
}: CocktailMenuBoardProps) {
  const heading = dark ? 'text-white' : 'text-[#1A1A1A]'
  const muted = dark ? 'text-white/70' : 'text-[#4A4745]'
  const card = dark
    ? 'bg-white/[0.04] border-white/10'
    : 'bg-white border-[#E8E6E3]'

  return (
    <div className={className} id="cocktail-menu">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className={`font-playfair text-3xl md:text-4xl mb-3 ${heading}`}>{title}</h2>
        <p className={`text-base md:text-lg leading-relaxed ${muted}`}>{subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {COCKTAIL_MENU_GROUPS.map((group) => (
          <div key={group.id} className={`rounded-2xl border p-5 ${card}`}>
            <h3 className={`font-semibold text-lg mb-1 ${heading}`}>{group.name}</h3>
            <p className={`text-xs uppercase tracking-wider mb-3 ${muted}`}>{group.role}</p>
            <ul className={`text-sm space-y-1 ${muted}`}>
              {group.examples.map((drink) => (
                <li key={drink}>· {drink}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
