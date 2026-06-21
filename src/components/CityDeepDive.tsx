import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { CITY_CONTENT } from '@/data/cityContent'

interface CityDeepDiveProps {
  /** city slug, key into CITY_CONTENT (e.g. "seminyak") */
  slug: string
  /** display name (e.g. "Seminyak") */
  cityName: string
}

const SERVICES: { name: string; href: string; desc: (c: string) => string }[] = [
  { name: 'Private Chef', href: '/fine-dining/private-chef-bali', desc: (c) => `A dedicated chef cooking fresh in your ${c} villa — one dinner or your whole stay.` },
  { name: 'Fine Dining', href: '/fine-dining', desc: () => `Multi-course tasting menus and wine pairings, plated to restaurant standard.` },
  { name: 'Catering', href: '/catering', desc: () => `Villa, buffet, plated, grazing, drop-off, babi guling and floating breakfast.` },
  { name: 'BBQ', href: '/catering/bbq-catering', desc: () => `Live grill stations — seafood, premium meats and Balinese favourites, poolside.` },
  { name: 'Events', href: '/events', desc: (c) => `Weddings, birthdays, villa parties, corporate dinners and retreats in ${c}.` },
  { name: 'In-Villa Staff', href: '/in-villa-service', desc: () => `Professional waiters, bartenders, butlers, hosts and sommeliers.` },
]

/**
 * Shared deep-dive block for /locations city pages:
 *  - "Everything myCHEF offers in [city]" grid linking to every service
 *  - the unique, city-specific long-form guide from CITY_CONTENT
 * Brings each city page to 1,000+ words with full internal service linking.
 */
export default function CityDeepDive({ slug, cityName }: CityDeepDiveProps) {
  const content = CITY_CONTENT[slug]

  return (
    <>
      {/* Everything we do in [city] — links to all services */}
      <section className="py-20 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Everything in one place</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Everything myCHEF does in {cityName}</h2>
          <p className="text-[#4A4745] mb-10 max-w-2xl leading-relaxed">
            One company for every dining experience in {cityName} — private chefs, fine dining, full catering,
            events and in-villa staff. Choose any service below; we handle it end to end.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((svc) => (
              <Link
                key={svc.href}
                to={svc.href}
                className="group block border border-[#E8E6E3] rounded-2xl p-6 hover:border-[#C5A028] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-playfair text-xl">{svc.name}</h3>
                  <ChevronRight className="w-4 h-4 text-[#C5A028] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[#4A4745] text-sm leading-relaxed">{svc.desc(cityName)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unique city guide (long-form) */}
      {content?.guide?.length ? (
        <section className="py-20 px-6 bg-[#FAFAF8] border-t border-[#E8E6E3]">
          <div className="max-w-3xl mx-auto">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The Complete Guide</p>
            <h2 className="font-playfair text-3xl md:text-4xl mb-8">Private chef &amp; villa dining in {cityName}</h2>
            <div className="prose prose-lg text-[#4A4745] max-w-none">
              {content.guide.map((para, i) => (
                <p key={i} className="mb-5 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
