import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, PartyPopper, Heart, Cake, Users, Briefcase, Gem, ChefHat, CalendarCheck } from 'lucide-react'
import SeoHead, { localBusinessSchema, breadcrumbSchema } from '@/components/SeoHead'
import { SERVICES } from '@/data/sitemap'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

const ICONS: Record<string, React.FC<{ className?: string; style?: React.CSSProperties; strokeWidth?: number }>> = {
  'villa-parties': PartyPopper,
  'romantic-dinners': Heart,
  'birthday-celebrations': Cake,
  'family-reunions': Users,
  'corporate-events': Briefcase,
  'wedding-celebrations': Gem,
  'cooking-classes': ChefHat,
  'weekly-meal-prep': CalendarCheck,
}

const ACCENTS = [
  '#C5A028',
  '#2C5F7C',
  '#6B8E5A',
  '#C5A028',
  '#2C5F7C',
  '#6B8E5A',
  '#C5A028',
  '#2C5F7C',
]

export default function ServicesPage() {
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like to know more about your services.')}`

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        url: `${SITE}/services/${s.slug}`,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SeoHead
        title="Private Chef Services Bali | Parties, Weddings — myCHEF"
        description="Eight ways we bring food to your villa. Parties, romantic dinners, birthdays, reunions, corporate events, weddings, cooking classes, meal prep."
        canonical={`${SITE}/services`}
        ogImage={`${SITE}/generated/bali-hub-hero.webp`}
        jsonLd={[localBusinessSchema, itemListSchema, breadcrumbSchema('Services', `${SITE}/services`)]}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <img
          src="/generated/bali-hub-hero.webp"
          alt="Luxury villa dinner overlooking Bali rice terraces at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.88))' }}
        />
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 pt-32 max-w-[1280px] mx-auto w-full">
          <p
            className="text-[#C5A028] text-xs md:text-sm tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What We Do
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.02] max-w-[900px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="italic">Services</span>
          </h1>
          <p className="text-base md:text-xl text-white/75 mb-10 max-w-[640px] leading-relaxed">
            Eight ways we bring extraordinary food to your villa — from intimate dinners for two to full-scale weddings and corporate retreats.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C5A028] text-black text-xs md:text-sm font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 text-white text-xs md:text-sm tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-colors"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Eight Experiences
          </p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Something for Every Occasion
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Each service is built around the same principle: extraordinary food, in your villa, with zero stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.slug] || PartyPopper
            const accent = ACCENTS[i]
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div
                  className="w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{ borderColor: `${accent}30`, background: `${accent}10` }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl mb-3 transition-colors duration-300 group-hover:text-[#C5A028]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: accent }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/[0.08]">
        <div className="max-w-[800px] mx-auto text-center">
          <p
            className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Not Sure Which Service?
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Will Guide You
          </h2>
          <p className="text-white/50 mb-10 max-w-lg mx-auto">
            Tell us about your occasion, guest count, and vision. We will recommend the right service and build a custom proposal — usually within the hour.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Message Us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
