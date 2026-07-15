import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { FAMILY_LABEL, formatIdr, TIER_LABEL } from '@/data/menus'
import type { Menu, MenuFamily } from '@/data/menus'
import MenuCard from './MenuCard'

export interface MenuOverviewProps {
  menus: Menu[]
  /** Group rows under family headers (order of first appearance) when the list spans multiple families. */
  grouped?: boolean
  /** Tracking source passed through to each expanded MenuCard CTA, e.g. 'luna-menus'. */
  dataSource: string
  /** 'gold' (#C5A028) is the default; 'warm' (#E8985E) matches the kids' page. */
  accent?: 'gold' | 'warm'
}

interface AccentStyles {
  /** Accent text colour (family eyebrows, price line). */
  text: string
  /** Tier badge pill. */
  badge: string
}

// Class strings are written out in full so Tailwind's JIT picks them up.
const ACCENTS: Record<'gold' | 'warm', AccentStyles> = {
  gold: {
    text: 'text-[#C5A028]',
    badge: 'bg-[#C5A028] text-[#1A1A1A]',
  },
  warm: {
    text: 'text-[#E8985E]',
    badge: 'bg-[#E8985E] text-[#1A1A1A]',
  },
}

/**
 * Scannable accordion overview: one compact row per menu with the full
 * MenuCard expanding inline below it. Every MenuCard stays mounted from
 * first render (toggled with `hidden`, never unmounted) so the prerendered
 * HTML keeps all courses and dish descriptions for search engines.
 */
export default function MenuOverview({ menus, grouped = false, dataSource, accent = 'gold' }: MenuOverviewProps) {
  const [openCode, setOpenCode] = useState<string | null>(null)
  const styles = ACCENTS[accent]

  // Group by family in order of first appearance (catalogue arrays are pre-ordered).
  const familiesInOrder: MenuFamily[] = []
  for (const menu of menus) {
    if (!familiesInOrder.includes(menu.family)) familiesInOrder.push(menu.family)
  }
  const showGroupHeaders = grouped && familiesInOrder.length > 1

  const renderRow = (menu: Menu) => {
    const open = openCode === menu.code
    return (
      <div key={menu.code}>
        <button
          type="button"
          data-menu-code={menu.code}
          aria-expanded={open}
          onClick={() => setOpenCode(open ? null : menu.code)}
          className="block min-h-[48px] w-full border-b border-white/10 px-4 py-4 text-left transition hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-white md:grid md:grid-cols-[minmax(0,2fr)_auto_auto_auto_2rem] md:items-center md:gap-6"
        >
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="font-playfair text-lg text-white">{menu.name}</span>
            <span className="text-sm text-white/50">· {menu.theme}</span>
          </div>
          <div className="mt-2.5 flex items-center justify-between gap-3 md:contents">
            {menu.tier ? (
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${styles.badge}`}
              >
                {TIER_LABEL[menu.tier]}
              </span>
            ) : (
              <span aria-hidden="true" className="hidden md:block" />
            )}
            <span className="whitespace-nowrap">
              <span className={`text-sm font-semibold ${styles.text}`}>{formatIdr(menu.priceIdr)}</span>
              <span className="text-sm text-white/50"> / {menu.guestNoun === 'child' ? 'child' : 'guest'}</span>
            </span>
            <span className="whitespace-nowrap text-sm text-white/50">Min {menu.minGuests}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-white/50 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            />
          </div>
        </button>
        {/* Never conditionally unmounted — SEO: full menu details stay in the prerendered DOM. */}
        <div className={open ? 'block' : 'hidden'}>
          <div className="px-0 py-6 md:px-4">
            <div className="mx-auto max-w-4xl">
              <MenuCard menu={menu} dataSource={dataSource} accent={accent} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <p className="mb-6 text-center text-sm text-white/[45%]">
        Select a menu to view the full courses, dietary options and add-ons.
      </p>
      {showGroupHeaders
        ? familiesInOrder.map((family) => {
            const familyMenus = menus.filter((menu) => menu.family === family)
            return (
              <section key={family} className="mb-10 last:mb-0">
                <div className="flex items-baseline gap-3 border-b border-white/10 px-4 pb-3">
                  <p className={`font-cormorant text-xs font-semibold uppercase tracking-[0.3em] ${styles.text}`}>
                    {FAMILY_LABEL[family].toUpperCase()}
                  </p>
                  <span className="text-xs text-white/40">· {familyMenus.length} menus</span>
                </div>
                {familyMenus.map(renderRow)}
              </section>
            )
          })
        : menus.map(renderRow)}
    </div>
  )
}
