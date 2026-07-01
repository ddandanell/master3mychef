import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, PartyPopper, Heart, Cake, Users, Briefcase, Gem, ChefHat, CalendarCheck, MapPin } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema, aggregateRatingSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import SectionHeader from '@/components/catering/SectionHeader'
import { SERVICES } from '@/data/sitemap'

const SITE = 'https://mychef.id'
const WA = 628113803488

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

const FAQS = [
  {
    q: 'What services does myCHEF offer in Bali?',
    a: 'myCHEF offers eight premium private chef experiences in Bali: villa parties, romantic dinners, birthday celebrations, family reunions, corporate events, wedding celebrations, cooking classes, and weekly meal prep. Every service includes menu planning, ingredient sourcing, on-site preparation, and full cleanup.',
  },
  {
    q: 'How do I book a private chef for my villa?',
    a: 'Booking is simple. Message us on WhatsApp or fill out the quote form on our website. Tell us your dates, guest count, occasion, and any dietary preferences. We will confirm availability and send a custom proposal — usually within the hour.',
  },
  {
    q: 'What is the difference between fine dining and catering?',
    a: 'Fine dining is a multi-course plated experience served course by course, ideal for intimate dinners and special occasions. Catering covers larger groups with buffet, family-style, or grazing setups — perfect for villa parties, weddings, and corporate events. Both use the same chef team and premium ingredients.',
  },
  {
    q: 'Can myCHEF handle dietary restrictions?',
    a: 'Absolutely. Our chefs are experienced with vegan, vegetarian, gluten-free, dairy-free, halal, keto, and allergen-sensitive menus. Just let us know your requirements when booking and we will design a menu that everyone can enjoy safely.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 1–2 weeks ahead for standard services and 3–4 weeks for weddings or large corporate events. Last-minute bookings are sometimes possible depending on chef availability — just ask.',
  },
  {
    q: 'What areas in Bali do you serve?',
    a: 'We serve all major areas of Bali including Seminyak, Canggu, Uluwatu, Jimbaran, Nusa Dua, Sanur, Ubud, and the surrounding regions. Travel fees may apply for remote locations — we will confirm this in your proposal.',
  },
  {
    q: 'Do you provide all equipment and ingredients?',
    a: 'Yes. Our chefs bring all necessary ingredients and specialty tools. We use your villa kitchen for preparation and plating. If your kitchen lacks basic cookware, let us know in advance and we will arrange everything needed.',
  },
  {
    q: 'How do I pay for myCHEF services?',
    a: 'We accept bank transfer (IDR), Wise, and major credit cards. A 50% deposit secures your date, with the balance due 48 hours before the event. Corporate clients can request invoicing with NET-14 terms.',
  },
]

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
    <div className="min-h-screen bg-[#050505] text-white">
      <SeoHead
        title="Private Chef Services Bali | All-In Villa Experiences — myCHEF"
        description="Compare all private chef services in Bali: fine dining, catering, events, staffing & classes. Michelin-trained team. WhatsApp us to find the right fit."
        canonical={`${SITE}/services`}
        ogImage={`${SITE}/generated/mychef-location-bali-hub-hero.webp`}
        jsonLd={[itemListSchema, aggregateRatingSchema(4.9, 560), breadcrumbSchema('Services', `${SITE}/services`), faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a })))]}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <img
          src="/generated/mychef-location-bali-hub-hero.webp"
          alt="Luxury villa dinner overlooking Bali rice terraces at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async" fetchPriority="high" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.50), rgba(0,0,0,0.88))' }}
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
          <p className="text-base md:text-xl text-white/[75%] mb-10 max-w-[640px] leading-relaxed">
            Eight ways we bring extraordinary food to your villa — from intimate dinners for two to full-scale weddings and corporate retreats.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer" data-source="services-cta"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C5A028] text-black text-xs md:text-sm font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            >
              <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 text-white text-xs md:text-sm tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
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
          <p className="text-white/[50%] max-w-xl mx-auto">
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
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-white"
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
                <p className="text-white/[50%] text-sm leading-relaxed mb-6">
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

      {/* ── LOCATIONS ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p
              className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where We Serve
            </p>
            <h2
              className="text-3xl md:text-5xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Available Across Bali
            </h2>
            <p className="text-white/[50%] max-w-xl mx-auto">
              Every service is available in every region. We know the local markets, the villa kitchens, and the best suppliers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Seminyak', slug: 'seminyak' },
              { name: 'Canggu', slug: 'canggu' },
              { name: 'Ubud', slug: 'ubud' },
              { name: 'Uluwatu', slug: 'uluwatu' },
              { name: 'Sanur', slug: 'sanur' },
              { name: 'Nusa Dua', slug: 'nusa-dua' },
              { name: 'Jimbaran', slug: 'jimbaran' },
              { name: 'Berawa', slug: 'berawa' },
              { name: 'Pererenan', slug: 'pererenan' },
              { name: 'Bukit', slug: 'bukit' },
            ].map((city) => (
              <Link
                key={city.slug}
                to={`/${city.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/[70%] hover:border-[#C5A028]/50 hover:text-[#C5A028] transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MapPin className="w-3.5 h-3.5" /> {city.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/locations" className="inline-flex items-center gap-2 text-sm text-[#C5A028] hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              View All Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
          <p className="text-white/[50%] mb-10 max-w-lg mx-auto">
            Tell us about your occasion, guest count, and vision. We will recommend the right service and build a custom proposal — usually within the hour.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer" data-source="services-cta"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-full"
          >
            <MessageCircle className="w-4 h-4" /> Message Us on WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Services FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>All Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus in your villa.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated dinners & grazing tables.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays, corporate & villa parties.' },
              { label: 'Villa Chef', href: '/villa-chef', desc: 'Daily private chef for your villa stay.' },
              { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, bartenders, butlers & sommelier.' },
              { label: 'Recommended Services', href: '/recommended-services', desc: 'Not sure what you need? We match you to the right service.' },
              { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
              { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Michelin-trained private chef in your villa.' },
              { label: 'Cost Breakdown', href: '/blog/private-chef-cost-bali', desc: 'What a private chef in Bali actually costs.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-[#FAFAF8] border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
