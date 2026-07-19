import { Link, useLocation } from 'react-router-dom'
import { BAR_SERVICES } from '@/data/bar-services'

const GROUPS = [
  {
    label: 'Training & Menus',
    slugs: ['bar-staff-training', 'cocktail-menu-development', 'signature-cocktail-creation'],
  },
  {
    label: 'Staffing',
    slugs: ['temporary-bartender-staffing', 'permanent-bar-staff-recruitment'],
  },
  {
    label: 'Operations',
    slugs: [
      'new-bar-setup',
      'bar-audit-improvement',
      'bar-costing-inventory-control',
      'bar-equipment-supply-rental',
      'monthly-bar-management-support',
      'complete-bar-performance-programme',
    ],
  },
]

export function BarServiceSubNav() {
  const { pathname } = useLocation()

  const baseLinkClasses =
    'relative shrink-0 px-3 py-2 text-xs uppercase tracking-wider font-medium rounded transition-colors min-h-[44px] inline-flex items-center'

  return (
    <div className="sticky top-14 z-40 bg-[#0F0E0C]/95 border-b border-[#C5A028]/15 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav
          aria-label="Bar services"
          className="flex items-center gap-1 overflow-x-auto scroll-smooth no-scrollbar py-2"
        >
          <Link
            to="/bar-services/"
            className={`${baseLinkClasses} ${
              pathname === '/bar-services/'
                ? 'text-[#C5A028] bg-[#C5A028]/10'
                : 'text-white/70 hover:text-[#C5A028] hover:bg-white/5'
            }`}
          >
            Overview
            {pathname === '/bar-services/' && (
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#C5A028] rounded-full" />
            )}
          </Link>

          {GROUPS.map((group) => (
            <div
              key={group.label}
              className="flex items-center gap-1 border-l border-white/10 pl-2 ml-1 shrink-0"
            >
              <span className="hidden md:block text-[10px] uppercase tracking-wider text-[#C5A028]/60 whitespace-nowrap px-2">
                {group.label}
              </span>
              {group.slugs.map((slug) => {
                const service = BAR_SERVICES.find((s) => s.slug === slug)
                if (!service) return null
                const active = pathname === service.route
                return (
                  <Link
                    key={slug}
                    to={service.route}
                    className={`${baseLinkClasses} ${
                      active
                        ? 'text-[#C5A028] bg-[#C5A028]/10'
                        : 'text-white/70 hover:text-[#C5A028] hover:bg-white/5'
                    }`}
                  >
                    {service.eyebrow}
                    {active && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#C5A028] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
