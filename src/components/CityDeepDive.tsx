import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { CITY_CONTENT } from '@/data/cityContent'

interface CityDeepDiveProps {
  /** city slug, key into CITY_CONTENT (e.g. "seminyak") */
  slug: string
  /** display name (e.g. "Seminyak") */
  cityName: string
}

const SERVICES: { name: string; href: string; img: string; desc: (c: string) => string }[] = [
  { name: 'Private Chef', href: '/', img: '/generated/mychef-experience-bali-aura-tablescape.webp', desc: (c) => `A dedicated chef cooking fresh in your ${c} villa — one dinner or your whole stay.` },
  { name: 'Fine Dining', href: '/fine-dining', img: '/generated/mychef-finedining-bali-luna-plating.webp', desc: () => `Multi-course tasting menus and wine pairings, plated to restaurant standard.` },
  { name: 'Catering', href: '/catering', img: '/generated/mychef-catering-bali-hero-buffet-catering.webp', desc: () => `Villa, buffet, plated, grazing, drop-off, babi guling and floating breakfast.` },
  { name: 'BBQ', href: '/catering/bbq-catering', img: '/generated/mychef-catering-bali-bbq-grill-satay.webp', desc: () => `Live grill stations — seafood, premium meats and Balinese favourites, poolside.` },
  { name: 'Events', href: '/events', img: '/generated/mychef-events-bali-wedding-reception.webp', desc: (c) => `Weddings, birthdays, villa parties, corporate dinners and retreats in ${c}.` },
  { name: 'In-Villa Staff', href: '/in-villa-service', img: '/generated/mychef-staffing-bali-staffing-hero.webp', desc: () => `Professional waiters, bartenders, butlers, hosts and sommeliers.` },
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
                className="group block overflow-hidden rounded-2xl border border-[#E8E6E3] hover:border-[#C5A028] transition-colors"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={`${svc.name} in ${cityName}, Bali by myCHEF`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))' }} />
                  <h3 className="absolute bottom-3 left-4 font-playfair text-xl text-white">{svc.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-[#4A4745] text-sm leading-relaxed mb-3">{svc.desc(cityName)}</p>
                  <span className="inline-flex items-center gap-1 text-[#C5A028] text-xs font-semibold uppercase tracking-wider">
                    Explore {svc.name} <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
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
