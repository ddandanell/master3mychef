import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import { LOCATIONS } from '../data/siteArchitecture'
import Breadcrumb from './shared/Breadcrumb'

import OptimizedImage from '@/components/OptimizedImage'
const SITE = 'https://mychef.id'

const LOCATION_DETAILS = [
  {
    slug: 'seminyak',
    highlights: ['Beachfront villas', 'Luxury estates', 'Sunset dining'],
    image: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'canggu',
    highlights: ['Surf villas', 'Rice field views', 'Bohemian luxury'],
    image: '/generated/mychef-location-bali-hub-hero.webp',
  },
  {
    slug: 'ubud',
    highlights: ['Jungle retreats', 'Wellness focus', 'Rice terrace views'],
    image: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'uluwatu',
    highlights: ['Cliffside estates', 'Ocean views', 'Wedding venues'],
    image: '/generated/mychef-location-bali-hub-bali.webp',
  },
  {
    slug: 'nusa-dua',
    highlights: ['Resort villas', 'Family-friendly', 'Calm beaches'],
    image: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'jimbaran',
    highlights: ['Seafood tradition', 'Beach clubs', 'Sunset dinners'],
    image: '/generated/mychef-location-bali-hub-hero.webp',
  },
  {
    slug: 'sanur',
    highlights: ['Quiet beaches', 'Family villas', 'Relaxed pace'],
    image: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'berawa',
    highlights: ['Modern villas', 'Beach club culture', 'Group events'],
    image: '/generated/mychef-location-bali-hub-bali.webp',
  },
  {
    slug: 'pererenan',
    highlights: ['Design villas', 'Quiet atmosphere', 'Chef-friendly kitchens'],
    image: '/generated/mychef-location-bali-locations-sunset.webp',
  },
  {
    slug: 'bukit',
    highlights: ['Clifftop premium', 'Surf villas', 'Ocean horizon'],
    image: '/generated/mychef-location-bali-hub-hero.webp',
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
        ogImage="/mychef-misc-bali-og-image.webp"
        canonical={canonical}
        jsonLd={[localBusinessSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema('Locations', canonical), faqPageSchema([
          { question: 'Which areas in Bali does myCHEF.id cover?', answer: 'myCHEF.id covers all major Bali areas including Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Pererenan, and Bingin — serving 560+ villas across the island.' },
          { question: 'Does myCHEF.id travel to my villa location?', answer: 'Yes — our team travels to your villa anywhere in Bali. We handle all logistics including ingredients, equipment, and setup, so you never need to leave your villa.' },
          { question: 'How far in advance do I need to book?', answer: 'We recommend booking 24–48 hours in advance. For large events or catering, earlier is better. Contact us via WhatsApp for last-minute availability.' },
        ])]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-location-bali-locations-sunset.webp"
            alt="Dramatic Bali sunset over tropical landscape — myCHEF service areas"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-[1100px] mx-auto text-left text-white">
          <div className="max-w-[750px]">
            <Breadcrumb items={[{ label: 'Locations' }]} theme="dark" className="px-0 pt-0 pb-8" />
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF Coverage</p>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              Private Chef & Hospitality<br /><span className="italic">Across Bali & Jakarta</span>
            </h1>
            <p className="text-lg md:text-xl text-white/[85%] leading-relaxed mb-10 max-w-[600px]">
              From Seminyak's beachfront estates to Menteng's diplomatic residences — myCHEF serves every major region with vetted teams and local operations.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Seminyak', 'Canggu', 'Ubud', 'Uluwatu', 'Nusa Dua', 'Jimbaran', 'Sanur', 'Jakarta'].map((loc) => (
                <span key={loc} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-white/10">
                  <MapPin className="w-3 h-3 text-[#C5A028]" /> {loc}
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
            <div key={text} className="flex items-center gap-2 text-white/[60%] text-sm">
              <Icon className="w-4 h-4 text-[#C5A028]" /> {text}
            </div>
          ))}
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4 text-center">Where We Serve</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-14">Every Region of Bali</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => {
              const details = LOCATION_DETAILS.find((d) => d.slug === loc.slug)
              return (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden bg-[#E5E3E0]">
                    <OptimizedImage
                      src={details?.image || '/generated/mychef-location-bali-locations-sunset.webp'}
                      alt={loc.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#C5A028]" />
                        <h3 className="font-playfair text-xl">{loc.label}</h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#C5A028] transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-[#4A4745] leading-relaxed mb-4">{loc.intro}</p>
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

      <section className="py-20 md:py-28 bg-[#0A0A0A] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Beyond Bali</p>
              <h2 className="font-playfair text-3xl md:text-5xl mb-6">Jakarta Expansion</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                myCHEF has expanded to Indonesia's capital, bringing the same Michelin-trained standards to private residences and corporate suites in Jakarta.
              </p>
              <div className="space-y-4">
                <Link
                  to="/jakarta"
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div>
                    <h3 className="font-playfair text-xl mb-1">Private Chef Jakarta</h3>
                    <p className="text-sm text-white/50">Full-service fine dining and weekly meal prep.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C5A028] transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/private-chef-menteng"
                  className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div>
                    <h3 className="font-playfair text-xl mb-1">Chef in Menteng</h3>
                    <p className="text-sm text-white/50">Discreet service for Jakarta's primary diplomatic district.</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#C5A028] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <OptimizedImage
                src="/generated/mychef-location-bali-locations-sunset.webp"
                alt="Dramatic skyline at dusk — myCHEF private chef expansion to Jakarta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="rounded-2xl border border-black/5 bg-white px-6 py-8">
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Detailed Service Areas</p>
            <div className="flex flex-wrap gap-2.5">
              {locations.sort((a, b) => a.label.localeCompare(b.label)).map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] transition-all hover:border-[#C5A028] hover:bg-[#C5A028] hover:text-white"
                >
                  {loc.label}
                </Link>
              ))}
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
          <p className="text-white/[60%] mb-8">We have chefs across Bali. Message us with your location and we will confirm availability within the hour.</p>
          <a
            href={`https://wa.me/6282237565997?text=${encodeURIComponent('Hi myCHEF, I would like to book a private chef. My villa is in: ')}`}
            target="_blank"
            rel="noopener noreferrer"
            data-source="locations-hub-cta"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MapPin className="w-4 h-4" /> Book for Your Location
          </a>
        </div>
      </section>
    </main>
  )
}
