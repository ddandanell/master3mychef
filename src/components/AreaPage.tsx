import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle, Check } from 'lucide-react'
import SeoHead from './SeoHead'
import { AREAS, MICRO_AREAS } from '@/data/sitemap'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

// Used for /seminyak, /canggu, /ubud, etc. AND the narrower micro-area pages
// like /echo-beach-private-chef. Same component, different slug source.
export default function AreaPage({ kind = 'area' }: { kind?: 'area' | 'micro-area' }) {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  const source = kind === 'area' ? AREAS : MICRO_AREAS
  const entry = source.find((a) => a.slug === slug)

  if (!entry) {
    return <Navigate to="/404" replace />
  }

  const title = `Private Chef in ${entry.name}, Bali`
  const description = `Private chef services in ${entry.name}, Bali — villa dinners, weekly meal prep, events, and weddings. Background-checked chefs, transparent pricing, same-day response.`
  const canonical = `${SITE}/${slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like a private chef in ${entry.name}, Bali.`)}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Private Chef',
    areaServed: { '@type': 'Place', name: `${entry.name}, Bali` },
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE}/#business`,
      name: 'myCHEF Indonesia',
      telephone: '+62-822-3756-5997',
      url: SITE,
    },
    url: canonical,
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${title} | myCHEF`} description={description} canonical={canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            className="inline-flex items-center justify-center bg-[#D4AF37] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#E8C84B] transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-white">
        <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl mb-4">What we cook in {entry.name}</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {['Mediterranean tasting menus', 'Traditional Balinese cuisine', 'Modern Asian fusion', 'Plant-based and vegan menus', 'Halal-certified menus', 'Dietary customization at no extra cost'].map((it) => (
                <li key={it} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" /> {it}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-3xl mb-4">What is included</h2>
            <ul className="space-y-3 text-[#4A4745]">
              {['Private chef in your villa', 'Fresh-that-morning groceries (billed at cost)', 'Table service and presentation', 'Full kitchen cleanup', 'Wine pairing on request', 'Same-day WhatsApp confirmation'].map((it) => (
                <li key={it} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" /> {it}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-[960px] mx-auto">
        <h2 className="font-playfair text-3xl mb-6">Other Bali areas we serve</h2>
        <div className="flex flex-wrap gap-3">
          {AREAS.filter((a) => a.slug !== slug).slice(0, 12).map((a) => (
            <Link
              key={a.slug}
              to={`/${a.slug}`}
              className="text-sm border border-[#1A1A1A]/15 px-4 py-2 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            >
              {a.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
