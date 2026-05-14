import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from './SeoHead'
import { LOCATIONS } from '../data/siteArchitecture'

const SITE = 'https://mychef.id'

export default function LocationsHubPage() {
  const canonical = `${SITE}/locations`
  const locations = Object.values(LOCATIONS)

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Locations Bali | Seminyak, Canggu, Ubud, Uluwatu — myCHEF"
        description="Hire a private chef across Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran and Sanur. Villa dining, catering and events in every region."
        canonical={canonical}
        jsonLd={[localBusinessSchema, breadcrumbSchema('Locations', canonical)]}
      />

      <section className="px-6 pt-32 pb-16 max-w-[1100px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
        <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-6">
          Private Chef Across Bali
        </h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-12">
          From Seminyak’s beachfront villas to Ubud’s jungle retreats — myCHEF serves every major
          region in Bali with local knowledge, vetted chefs and same-day confirmation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[#E8E6E3] bg-white p-6 hover:border-[#C5A028] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-[#C5A028]">
                  <MapPin className="w-5 h-5" />
                  <span className="font-playfair text-xl">{loc.label}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C5A028] transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-sm text-[#4A4745] leading-relaxed">{loc.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
