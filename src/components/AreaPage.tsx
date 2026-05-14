import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle, Check, Utensils, Flame, Sparkles, Building2 } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from './SeoHead'
import { AREAS, MICRO_AREAS } from '@/data/sitemap'
import { TOP_CITIES } from '@/data/topCities'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

// Single template that powers every city / neighbourhood URL.
//
// For the 10 top cities (TOP_CITIES) the page has full 3-service selling
// content — Catering, Events, Fine Dining — plus a partner-villa CTA and
// internal links to all nine sibling cities (city-hub silo for SEO).
//
// For the long-tail areas not in TOP_CITIES we still render a valid SEO page
// with H1 / meta / cross-links, but no per-section selling copy.
export default function AreaPage({ kind = 'area' }: { kind?: 'area' | 'micro-area' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '').replace(/^locations\//, '')
  const source = kind === 'area' ? AREAS : MICRO_AREAS
  const entry = source.find((a) => a.slug === slug)
  if (!entry) return <Navigate to="/404" replace />

  const top = TOP_CITIES.find((c) => c.slug === slug)
  const title = `Private Chef in ${entry.name}, Bali`
  const description = top
    ? `Private chef, villa catering, and full-service events in ${entry.name}. ${top.hook} Background-checked chefs, transparent pricing, same-day response.`
    : `Private chef services in ${entry.name}, Bali — villa dinners, weekly meal prep, events, and weddings. Background-checked chefs, transparent pricing, same-day response.`
  const canonical = `${SITE}/${slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like a private chef in ${entry.name}, Bali.`)}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private Chef',
    areaServed: { '@type': 'Place', name: `${entry.name}, Bali` },
    provider: { '@id': `${SITE}/#business` },
    url: canonical,
  }

  const localBusiness = {
    ...localBusinessSchema,
    areaServed: { '@type': 'Place', name: `${entry.name}, Bali` },
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={`${title} | myCHEF`}
        description={description}
        canonical={canonical}
        ogImage={top ? `${SITE}${top.hero}` : undefined}
        jsonLd={[localBusiness, serviceSchema, breadcrumbSchema(entry.name, canonical)]}
      />

      {/* Hero — full-bleed image for top cities, simple eyebrow hero for long-tail areas */}
      {top ? (
        <section className="relative w-full min-h-[72vh] flex items-end overflow-hidden">
          <img
            src={top.hero}
            alt={`Luxury villa in ${entry.name}, Bali, with private dining at golden hour`}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(5,5,5,0.30) 0%, rgba(5,5,5,0.15) 35%, rgba(5,5,5,0.85) 100%)' }}
          />
          <div className="relative z-10 px-8 pb-12 md:pb-20 pt-24 md:pt-32 max-w-[1100px] mx-auto w-full text-white">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Private chef</p>
            <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-5 max-w-[820px]">{title}</h1>
            <p className="text-base md:text-lg text-white/85 max-w-[640px] mb-3">{top.blurb}</p>
            <p className="text-sm text-white/55 italic mb-8">{top.signature}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#1ea855] transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Private Chef</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">{title}</h1>
          <p className="text-lg text-[#4A4745] max-w-[640px] mb-8">
            Wake up to chef-prepared breakfasts. Host a candlelit dinner under the stars. Plan a wedding for 80 guests.
            myCHEF brings background-checked chefs to villas across {entry.name} — for single dinners, recurring stays, and full-service events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#1ea855] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </section>
      )}

      {/* Three-service selling sections — only on the 10 top cities */}
      {top && (
        <section className="px-8 py-16 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-center font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Three ways we cook in {entry.name}</p>
            <h2 className="text-center font-playfair text-3xl md:text-4xl mb-12">Catering · Events · Fine Dining</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Catering */}
              <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col">
                <Utensils className="w-6 h-6 text-[#6B8E5A] mb-3" />
                <h3 className="font-playfair text-2xl mb-3">Catering in {entry.name}</h3>
                <p className="text-sm text-[#4A4745] mb-5 flex-grow">
                  Daily villa chef for breakfast, lunch, and dinner. Weekly meal prep. We shop fresh each morning and bill groceries at cost — no markup.
                </p>
                <Link to="/catering" className="text-xs uppercase tracking-[2px] font-semibold text-[#6B8E5A] hover:text-[#1A1A1A]">
                  Explore Catering →
                </Link>
              </div>

              {/* Events */}
              <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col">
                <Sparkles className="w-6 h-6 text-[#2C5F7C] mb-3" />
                <h3 className="font-playfair text-2xl mb-3">Events in {entry.name}</h3>
                <p className="text-sm text-[#4A4745] mb-5 flex-grow">
                  Weddings, retreats, birthdays, corporate dinners. We handle catering, bar, décor, and on-site coordination from intimate dinners to 200-guest receptions.
                </p>
                <Link to="/events" className="text-xs uppercase tracking-[2px] font-semibold text-[#2C5F7C] hover:text-[#1A1A1A]">
                  Explore Events →
                </Link>
              </div>

              {/* Fine Dining */}
              <div className="bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 flex flex-col">
                <Flame className="w-6 h-6 text-[#C5A028] mb-3" />
                <h3 className="font-playfair text-2xl mb-3">Fine Dining in {entry.name}</h3>
                <p className="text-sm text-[#4A4745] mb-5 flex-grow">
                  Two curated Italian and Mediterranean tasting experiences in your villa. White-clad team, sommelier pairing, open-flame cooking — Michelin-trained execution.
                </p>
                <Link to="/fine-dining" className="text-xs uppercase tracking-[2px] font-semibold text-[#8B6F1A] hover:text-[#1A1A1A]">
                  Explore Fine Dining →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What's included strip — always shown */}
      <section className="px-8 py-16 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl mb-4">What we cook in {entry.name}</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {['Mediterranean tasting menus', 'Traditional Balinese cuisine', 'Modern Asian fusion', 'Plant-based and vegan menus', 'Halal-certified menus', 'Dietary customization at no extra cost'].map((it) => (
                <li key={it} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {it}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-3xl mb-4">What is included</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {['Private chef in your villa', 'Fresh-that-morning groceries (billed at cost)', 'Table service and presentation', 'Full kitchen cleanup', 'Wine pairing on request', 'Same-day WhatsApp confirmation'].map((it) => (
                <li key={it} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5A028] mt-1 flex-shrink-0" /> {it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Partner villas in this area */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-start gap-8">
          <Building2 className="w-10 h-10 text-[#2C5F7C] flex-shrink-0" />
          <div className="flex-grow">
            <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-2">Partner villas</p>
            <h2 className="font-playfair text-3xl mb-3">The villas we work with in {entry.name}</h2>
            <p className="text-[#4A4745] mb-5">
              We have an active partnership programme with 50+ luxury villas across Bali. If you own or manage a villa in {entry.name},
              partnering with myCHEF gives your guests on-demand fine dining without lifting a finger.
            </p>
            <Link to="/staffing/for-villa-managers" className="inline-flex items-center text-xs uppercase tracking-[2px] font-semibold text-[#2C5F7C] hover:text-[#1A1A1A]">
              See the partner programme →
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-city linking — all 10 top cities for the silo */}
      <section className="px-8 py-16 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-2">Everywhere in Bali</p>
          <h2 className="font-playfair text-3xl mb-6">We cook across every villa region</h2>
          <p className="text-[#4A4745] mb-6 max-w-[640px]">
            myCHEF serves the ten most-visited villa regions on the island. Browse the area closest to where you are staying —
            same team, same standards, same WhatsApp number.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {TOP_CITIES.filter((c) => c.slug !== slug).map((c) => (
              <Link
                key={c.slug}
                to={`/locations/${c.slug}`}
                className="text-sm font-medium bg-white border border-[#1A1A1A]/10 px-4 py-3 rounded-lg hover:border-[#C5A028] hover:text-[#C5A028] transition-all text-center"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-[#8A8785] mt-6">
            See <Link to="/guide/private-chef-bali" className="underline hover:text-[#C5A028]">our full Bali coverage map</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
