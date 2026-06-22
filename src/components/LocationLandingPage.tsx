import { Link } from 'react-router-dom'
import { ArrowRight, Building2, CalendarClock, Check, ChefHat, Clock3, MapPin, MessageCircle, Sparkles, UtensilsCrossed, Users } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '@/components/SeoHead'
import type { LocationLandingPageConfig } from '@/data/locationLandingPages'

const SITE = 'https://mychef.id'
const WHATSAPP_NUMBER = '628113803488'

function createWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function LocationLandingPage({ config }: { config: LocationLandingPageConfig }) {
  const canonical = `${SITE}/${config.slug}`
  const inquiryLink = createWhatsAppLink(`Hi myCHEF, I would like a private chef in ${config.name}, Bali.`)

  const localBusiness = {
    ...localBusinessSchema,
    areaServed: {
      '@type': 'Place',
      name: `${config.name}, Bali`,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: config.coordinates.latitude,
      longitude: config.coordinates.longitude,
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.h1,
    description: config.description,
    provider: { '@id': `${SITE}/#business` },
    areaServed: {
      '@type': 'Place',
      name: `${config.name}, Bali`,
    },
    url: canonical,
  }

  const faqSchema = faqPageSchema([
    {
      question: `Do you travel to villas in ${config.name}?`,
      answer: `Yes. myCHEF travels to ${config.name} for private chef dinners, catering, and event service. We confirm the travel fee in advance so the quote stays clear.`,
    },
    {
      question: `How far ahead should I book a private chef in ${config.name}?`,
      answer: config.bookingRecommendation,
    },
    {
      question: `What type of guests usually book myCHEF in ${config.name}?`,
      answer: config.guestProfile,
    },
  ])

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title={config.title}
        description={config.description}
        canonical={canonical}
        ogImage={`${SITE}${config.heroImage}`}
        jsonLd={[
          localBusiness,
          serviceSchema,
          breadcrumbSchema(config.name, canonical, 'Locations', `${SITE}/locations`),
          faqSchema,
        ]}
      />

      <section className="relative min-h-[88vh] overflow-hidden flex items-center">
        <img
          src={config.heroImage}
          alt={config.heroAlt}
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.88)_0%,rgba(7,7,7,0.62)_48%,rgba(7,7,7,0.25)_100%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1160px] flex-col gap-8 px-6 py-28 text-white md:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[680px]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C5A028]">Location service</p>
            <h1 className="font-playfair text-4xl leading-tight md:text-6xl">{config.h1}</h1>
            <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-white/85">{config.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
              {config.landmarks.slice(0, 4).map((landmark) => (
                <span key={landmark} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  {landmark}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[360px] rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-md">
            <p className="text-sm text-white/70">Travel from our Canggu / Seminyak base</p>
            <div className="mt-4 space-y-4">
              {config.travelFees.map((travel) => (
                <div key={travel.from} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">From {travel.from}</span>
                    <span className="text-sm font-semibold text-[#C5A028]">{travel.fee}</span>
                  </div>
                  <p className="mt-2 flex items-center gap-2 text-sm text-white/75"><Clock3 className="h-4 w-4 text-[#C5A028]" /> {travel.travelTime}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{travel.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={inquiryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111] transition hover:bg-[#d4b43a] focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp myCHEF
              </a>
              <Link
                to="/book"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#C5A028] hover:text-[#C5A028] focus:outline-none focus:ring-2 focus:ring-white"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1160px] gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#C5A028]">About the area</p>
            <h2 className="font-playfair text-3xl md:text-4xl">How myCHEF works in {config.name}</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#4A4745]">
              {config.areaDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[28px] border border-black/5 bg-[#FAFAF8] p-6">
              <div className="flex items-center gap-3 text-[#C5A028]">
                <Building2 className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">Villa density</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#4A4745]">{config.villaDensity}</p>
            </div>
            <div className="rounded-[28px] border border-black/5 bg-[#FAFAF8] p-6">
              <div className="flex items-center gap-3 text-[#C5A028]">
                <Users className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">Typical guest profile</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#4A4745]">{config.guestProfile}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#C5A028]">Service availability</p>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl">Private chef, catering, and events in {config.name}</h2>
              <p className="mt-4 max-w-[720px] text-base leading-7 text-[#4A4745]">
                We adapt the service format to the villa, guest mix, and timing window — from chef-led dinners to staffed celebrations.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {config.serviceAvailability.map((service, index) => {
              const Icon = [ChefHat, UtensilsCrossed, Sparkles][index] ?? ChefHat
              return (
                <div key={service.title} className="flex h-full flex-col rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_10px_40px_rgba(17,17,17,0.04)]">
                  <Icon className="h-6 w-6 text-[#C5A028]" />
                  <h3 className="mt-5 font-playfair text-2xl">{service.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#4A4745]">{service.summary}</p>
                  <p className="mt-5 rounded-2xl bg-[#FAFAF8] px-4 py-3 text-sm leading-6 text-[#1A1A1A]">{service.availability}</p>
                  <Link to={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#C5A028] transition hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1">
                    Explore service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0F1111] px-6 py-20 text-white md:px-10">
        <div className="mx-auto grid max-w-[1160px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-7">
            <div className="flex items-center gap-3">
              <CalendarClock className="h-5 w-5 text-[#C5A028]" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Advance booking</p>
            </div>
            <p className="mt-5 text-base leading-8 text-white/78">{config.bookingRecommendation}</p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-7">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#C5A028]" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Local landmarks we plan around</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {config.landmarks.map((landmark) => (
                <div key={landmark} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/80">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C5A028]" />
                  <span>{landmark}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#C5A028]">Internal links</p>
            <h2 className="font-playfair text-3xl md:text-4xl">Plan the right service for your stay in {config.name}</h2>
            <p className="mt-4 max-w-[560px] text-base leading-7 text-[#4A4745]">
              Start with the service page that matches your stay: an intimate fine-dining dinner, group catering, or a fully staffed villa event.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Fine Dining', href: '/fine-dining' },
              { label: 'Catering', href: '/catering' },
              { label: 'Events', href: '/events' },
              { label: 'Book myCHEF', href: '/book' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group rounded-[24px] border border-black/5 bg-white px-5 py-6 shadow-[0_10px_40px_rgba(17,17,17,0.04)] transition hover:border-[#C5A028] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A028]">myCHEF</p>
                <p className="mt-3 font-playfair text-2xl text-[#1A1A1A]">{link.label}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1A1A1A] transition group-hover:text-[#C5A028]">
                  Open page <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#C5A028]">Other Bali locations</p>
          <h2 className="font-playfair text-3xl md:text-4xl">We serve private chefs across Bali</h2>
          <p className="mt-4 max-w-[720px] text-base leading-7 text-[#4A4745]">
            myCHEF operates island-wide. If you're staying in a different area or planning events across multiple locations, explore our location pages:
          </p>
          
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Seminyak', slug: 'seminyak', desc: 'Beach clubs, luxury villas, vibrant dining scene' },
              { name: 'Canggu', slug: 'canggu', desc: 'Surf culture, co-living spaces, digital nomad hub' },
              { name: 'Ubud', slug: 'ubud', desc: 'Rice terraces, wellness retreats, cultural heart' },
              { name: 'Uluwatu', slug: 'uluwatu', desc: 'Clifftop villas, surf breaks, sunset views' },
              { name: 'Nusa Dua', slug: 'nusa-dua', desc: 'Resort enclave, family-friendly, golf courses' },
              { name: 'Jimbaran', slug: 'jimbaran', desc: 'Beachfront dining, luxury resorts, quiet bay' },
            ]
              .filter((loc) => loc.slug !== config.slug)
              .map((location) => (
                <Link
                  key={location.slug}
                  to={`/${location.slug}`}
                  className="group flex flex-col rounded-[24px] border border-black/5 bg-[#FAFAF8] p-6 transition hover:border-[#C5A028] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(197,160,40,0.12)] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#C5A028]" />
                    <p className="font-playfair text-xl text-[#1A1A1A]">{location.name}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#4A4745]">{location.desc}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#C5A028] transition group-hover:text-[#1A1A1A]">
                    View location <ArrowRight className="h-4 w-4" />
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
