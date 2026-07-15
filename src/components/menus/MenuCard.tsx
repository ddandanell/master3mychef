import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { buildMenuQuoteUrl, formatIdr, FAMILY_LABEL, TIER_LABEL } from '@/data/menus'
import type { Menu, MenuFamily } from '@/data/menus'

export interface MenuCardProps {
  menu: Menu
  /** 'gold' (#C5A028) is the default; 'warm' (#E8985E) is used on the kids' page. */
  accent?: 'gold' | 'warm'
  /** Tracking source for the CTA, e.g. 'fine-dining-menus'. Sent as data-source + menu code. */
  dataSource: string
}

interface AccentStyles {
  /** Accent text colour (price line, course labels, check marks). */
  text: string
  /** Badge pills over the image. */
  badge: string
  /** Primary CTA button. */
  cta: string
}

// Class strings are written out in full so Tailwind's JIT picks them up.
const ACCENTS: Record<'gold' | 'warm', AccentStyles> = {
  gold: {
    text: 'text-[#C5A028]',
    badge: 'bg-[#C5A028] text-[#1A1A1A]',
    cta: 'bg-[#C5A028] text-[#1A1A1A] hover:bg-[#d0ab33]',
  },
  warm: {
    text: 'text-[#E8985E]',
    badge: 'bg-[#E8985E] text-[#1A1A1A]',
    cta: 'bg-[#E8985E] text-[#1A1A1A] hover:bg-[#f0a76f]',
  },
}

/** Collection page that lists all menus of a given family. */
const FAMILY_COLLECTION_HREF: Record<MenuFamily, string> = {
  vegetarian: '/fine-dining/menus',
  seafood: '/fine-dining/menus',
  'mixed-meats': '/fine-dining/menus',
  'single-meat': '/fine-dining/menus',
  'three-course': '/three-course',
  kids: '/kids-menus',
  'bbq-mixed': '/bbq-grill',
  'bbq-seafood': '/bbq-grill',
  'bbq-specialty': '/bbq-grill',
}

export default function MenuCard({ menu, accent = 'gold', dataSource }: MenuCardProps) {
  const styles = ACCENTS[accent]
  const pluralNoun = menu.guestNoun === 'child' ? 'children' : 'guests'

  const badges: string[] = []
  if (menu.tier) badges.push(TIER_LABEL[menu.tier])
  if (menu.interactive) badges.push('Interactive')
  if (menu.oysters === 'included') badges.push('Includes Oysters')
  if (menu.oysters === 'optional') badges.push('Oysters Optional')
  if (menu.family.startsWith('bbq')) badges.push('Live Grill')

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={menu.image}
          alt={menu.imageAlt}
          width={960}
          height={720}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {badges.length > 0 && (
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${styles.badge}`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="mb-2 font-playfair text-2xl text-white md:text-3xl">{menu.name}</h3>
        <p className={`mb-1 text-sm font-semibold uppercase tracking-[0.16em] ${styles.text}`}>
          From {formatIdr(menu.priceIdr)} per {menu.guestNoun}
        </p>
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/[55%]">
          Minimum {menu.minGuests} {pluralNoun}
        </p>
        <p className="mb-6 text-sm leading-relaxed text-white/[75%]">{menu.description}</p>

        <div className="mb-6 border-t border-white/10" />

        {menu.courses.length > 0 && (
          <div className="mb-6 space-y-5">
            {menu.courses.map((course) => (
              <div key={course.label}>
                <p
                  className={`mb-2 font-cormorant text-xs font-semibold uppercase tracking-[0.18em] ${styles.text}`}
                >
                  {course.label.toUpperCase()}
                </p>
                <ul className="space-y-3">
                  {course.dishes.map((dish) => (
                    <li key={dish.name}>
                      <p className="text-sm font-semibold text-white/[90%]">{dish.name}</p>
                      {dish.description && (
                        <p className="mt-0.5 text-sm leading-relaxed text-white/[60%]">{dish.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {menu.dietaryTags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {menu.dietaryTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/[75%]"
              >
                {tag} <span aria-hidden="true" className={`font-semibold ${styles.text}`}>✓</span>
              </span>
            ))}
          </div>
        )}

        {menu.allergenInfo && menu.allergenInfo.length > 0 && (
          <div className="mb-6 space-y-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            {menu.allergenInfo.map((line) => (
              <p key={line} className="text-xs leading-relaxed text-white/[55%]">
                {line}
              </p>
            ))}
          </div>
        )}

        {menu.specialFeatures && menu.specialFeatures.length > 0 && (
          <ul className="mb-6 space-y-2">
            {menu.specialFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-white/[75%]">
                <span aria-hidden="true" className={`font-semibold ${styles.text}`}>
                  •
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {menu.addOns.length > 0 && (
          <div className="mb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/[55%]">Optional add-ons</p>
            <ul className="space-y-1">
              {menu.addOns.map((addOn) => (
                <li key={addOn.name} className="text-sm text-white/[75%]">
                  + {addOn.name}{' '}
                  <span className="text-white/[55%]">
                    (+{formatIdr(addOn.priceIdr)}{addOn.perGuest ? '/guest' : ' flat'})
                  </span>
                  {addOn.note && <span className="text-white/[45%]"> — {addOn.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-2">
          <a
            href={buildMenuQuoteUrl(menu)}
            target="_blank"
            rel="noopener noreferrer"
            data-source={`${dataSource}-${menu.code}`}
            className={`inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors focus:outline-none focus:ring-2 focus:ring-white ${styles.cta}`}
          >
            <MessageCircle className="h-4 w-4" />
            Get Your Quote
          </a>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/[55%]">
            <Link
              to="/families"
              className="transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
            >
              All families →
            </Link>
            <Link
              to={FAMILY_COLLECTION_HREF[menu.family]}
              className="text-right transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
            >
              More {FAMILY_LABEL[menu.family]} menus →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
