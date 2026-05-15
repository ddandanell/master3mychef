import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema } from './SeoHead'
import { LOCATIONS } from '../data/siteArchitecture'

const SITE = 'https://mychef.id'

const LOCATION_DETAILS = [
  {
    slug: 'seminyak',
    highlights: ['Beachfront villas', 'Luxury estates', 'Sunset dining'],
    image: '/generated/city-seminyak.webp',
  },
  {
    slug: 'canggu',
    highlights: ['Surf villas', 'Rice field views', 'Bohemian luxury'],
    image: '/generated/city-canggu.webp',
  },
  {
    slug: 'ubud',
    highlights: ['Jungle retreats', 'Wellness focus', 'Rice terrace views'],
    image: '/generated/city-ubud.webp',
  },
  {
    slug: 'uluwatu',
    highlights: ['Cliffside estates', 'Ocean views', 'Wedding venues'],
    image: '/generated/city-uluwatu.webp',
  },
  {
    slug: 'nusa-dua',
    highlights: ['Resort villas', 'Family-friendly', 'Calm beaches'],
    image: '/generated/city-nusa-dua.webp',
  },
  {
    slug: 'jimbaran',
    highlights: ['Seafood tradition', 'Beach clubs', 'Sunset dinners'],
    image: '/generated/city-jimbaran.webp',
  },
  {
    slug: 'sanur',
    highlights: ['Quiet beaches', 'Family villas', 'Relaxed pace'],
    image: '/generated/city-sanur.webp',
  },
  {
    slug: 'berawa',
    highlights: ['Modern villas', 'Beach club culture', 'Group events'],
    image: '/generated/city-berawa.webp',
  },
  {
    slug: 'pererenan',
    highlights: ['Design villas', 'Quiet atmosphere', 'Chef-friendly kitchens'],
    image: '/generated/city-pererenan.webp',
  },
  {
    slug: 'bukit',
    highlights: ['Clifftop premium', 'Surf villas', 'Ocean horizon'],
    image: '/generated/city-bukit.webp',
  },
]

export default function LocationsHubPage() {
  const canonical = `${SITE}/locations`
  const locations = Object.values(LOCATIONS)

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Locations in Bali — myCHEF"
        description="Hire a private chef across Bali — Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran and Sanur. Villa dining, catering and events in every region."
        ogImage="/og-image.webp"
        canonical={canonical}
        jsonLd={[localBusinessSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema('Locations', canonical)]}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/locations-hero.webp"
            alt="Bali locations"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24 pt-32">
          <div className="max-w-[900px]">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF</p>
            <h1 className="font-playfair text-4xl md:text-6xl text-white leading-[1.1] mb-6">
              Private Chef Across Bali
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-[600px] mb-8">
              From Seminyak's beachfront villas to Ubud's jungle retreats — myCHEF serves every major region in Bali with local knowledge, vetted chefs and same-day confirmation.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Berawa', 'Pererenan', 'Bukit'].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A028]" /> {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#0A0A0A] py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: Star, text: '4.9 Rating (500+ Reviews)' },
            { icon: Users, text: '50+ Chefs Across Bali' },
            { icon: Shield, text: 'Local Market Knowledge' },
            { icon: Clock, text: 'Same-Day Response' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
              <Icon className="w-4 h-4 text-[#C5A028]" /> {text}
            </div>
          ))}
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">Where We Serve</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">Every Region of Bali</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => {
              const details = LOCATION_DETAILS.find((d) => d.slug === loc.slug)
              return (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white hover:shadow-lg transition-all"
                >
                  {details?.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={details.image}
                        alt={loc.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#C5A028]" />
                        <h3 className="font-playfair text-xl">{loc.label}</h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#C5A028] transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-[#4A4745] leading-relaxed mb-3">{loc.intro}</p>
                    {details?.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {details.highlights.map((h) => (
                          <span key={h} className="text-xs bg-[#C5A028]/10 text-[#C5A028] px-3 py-1 rounded-full">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-2xl border border-black/5 bg-white px-6 py-6">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-3">Popular Areas</p>
            <div className="flex flex-wrap gap-3">
              {['seminyak', 'canggu', 'ubud', 'uluwatu', 'nusa-dua'].map((slug) => {
                const location = LOCATIONS[slug as keyof typeof LOCATIONS]
                return (
                  <Link
                    key={slug}
                    to={`/locations/${slug}`}
                    className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm text-[#1A1A1A] transition-colors hover:border-[#C5A028] hover:text-[#C5A028]"
                  >
                    {location.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">Simple Process</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-12">How It Works in Any Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Message Us', desc: 'Tell us your villa location and dates. We have chefs based across Bali.' },
              { step: '02', title: 'We Match', desc: 'We assign the best chef for your location, menu, and occasion.' },
              { step: '03', title: 'We Arrive', desc: 'Our team arrives with fresh ingredients and all necessary equipment.' },
              { step: '04', title: 'You Enjoy', desc: 'Sit back and enjoy. We handle everything from cooking to cleanup.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-4xl font-playfair text-[#C5A028]/30 mb-4">{s.step}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-[#4A4745]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl mb-4">Wherever Your Villa Is</h2>
          <p className="text-white/60 mb-8">We have chefs across Bali. Message us with your location and we will confirm availability within the hour.</p>
          <a
            href={`https://wa.me/6282237565997?text=${encodeURIComponent('Hi myCHEF, I would like to book a private chef. My villa is in: ')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MapPin className="w-4 h-4" /> Book for Your Location
          </a>
        </div>
      </section>
    </main>
  )
}
