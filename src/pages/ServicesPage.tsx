import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, PartyPopper, Heart, Flame, Users, Briefcase, Gem, ChefHat, CalendarCheck, MapPin } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import SectionHeader from '@/components/catering/SectionHeader'
import { HaccpTrustLine } from '@/components/shared'

const SITE = 'https://mychef.id'
const WA = 6289674072020

const SERVICES = [
  {
    slug: 'fine-dining',
    label: 'Fine Dining',
    description: 'Multi-course tasting menus — Italian, French, Mediterranean, Wagyu — plated in your villa by a specialist chef team. From 5 guests (2 for romantic dinners).',
    price: 'From IDR 950K++ per person.',
    url: '/fine-dining',
    cta: 'Explore fine dining',
    icon: Gem,
  },
  {
    slug: 'villa-catering',
    label: 'Villa Catering',
    description: 'Buffets, plated group dinners, grazing tables and babi guling for 8–150 guests — the same chef team at group scale.',
    price: 'From IDR 700K++ per person.',
    url: '/catering',
    cta: 'Explore catering',
    icon: Users,
  },
  {
    slug: 'bbq-live-fire',
    label: 'BBQ & Live Fire',
    description: 'Poolside seafood grills, satay and slow-cooked meats with full setup and service.',
    price: 'From IDR 700K++ per person (min. 10 guests).',
    url: '/catering/bbq-catering',
    cta: 'BBQ catering',
    icon: Flame,
  },
  {
    slug: 'events-weddings',
    label: 'Events & Weddings',
    description: 'Full-service hospitality for weddings, birthdays and corporate gatherings up to 200 guests — chef, staff, setup, cleanup.',
    price: 'Weddings from IDR 1.5M++ per person.',
    url: '/events',
    cta: 'Explore events',
    icon: PartyPopper,
  },
  {
    slug: 'daily-villa-chef',
    label: 'Daily Villa Chef',
    description: 'Breakfast, lunch and dinner across your whole stay. Groceries at cost, receipts provided.',
    price: 'Half-day from IDR 2M; full-day from IDR 4M.',
    url: '/private-chef-bali',
    cta: 'daily villa chef service',
    icon: ChefHat,
  },
  {
    slug: 'monthly-long-stay-chef',
    label: 'Monthly & Long-Stay Chef',
    description: 'Recurring chef days and meal-prep plans for long stays and residents.',
    price: 'Weekly chef service from IDR 900,000++/day (10% off standard); live-in placement quoted individually.',
    url: '/private-chef-bali',
    cta: 'monthly chef arrangements',
    icon: CalendarCheck,
  },
  {
    slug: 'in-villa-service-staff',
    label: 'In-Villa Service Staff',
    description: 'Waiters, bartenders, butlers and sommeliers by the shift — restaurant-grade front-of-house in your villa.',
    price: 'Pricing on request.',
    url: '/in-villa-service',
    cta: 'in-villa service staff',
    icon: Heart,
  },
  {
    slug: 'villa-staffing-placement',
    label: 'Villa Staffing & Placement',
    description: 'Long-term chefs and household teams for villas, hotels and residences — sourced, vetted and placed. Contact us for pricing.',
    price: 'Pricing on request.',
    url: '/staffing',
    cta: 'villa staff placement',
    icon: Briefcase,
  },
]

const FAQS = [
  {
    q: "What's the difference between fine dining and catering in Bali?",
    a: 'Fine dining is multi-course plated service for smaller groups. Catering feeds larger groups buffet-, family- or grazing-style. Same organisation — different format. <a href="/fine-dining">Fine dining →</a> · <a href="/catering">Catering →</a>',
  },
  {
    q: 'What is the difference between private chef and catering?',
    a: '<a href="/private-chef-bali">Private chef</a> is a day rate for multi-meal villa stays (groceries at cost). Catering is one-off event production. Many groups book both.',
  },
  {
    q: 'Can I combine services?',
    a: 'Yes — chef + waiters + bartender is common, or daily chef with one fine-dining night mid-stay. One quote can cover the stack.',
  },
  {
    q: 'Do you handle dietary requirements?',
    a: "Yes — vegan, gluten-free, halal-sensitive, allergies and kids' menus across services, at no extra charge when briefed early.",
  },
  {
    q: 'How far ahead should I book myCHEF in Bali?',
    a: 'A few days for dinners; longer for events and weddings. Same-week is often possible. 50% deposit locks the date.',
  },
  {
    q: 'How much do services cost?',
    a: 'Private chef from IDR 1,000,000++/day; many dinners from ~IDR 700K–1.25M+/person depending on format. Full tables: <a href="/pricing">pricing</a>.',
  },
  {
    q: 'Which service is right for a family villa week?',
    a: 'Daily <a href="/private-chef-bali">private chef</a> for a stay — full-day staff, three flexible meals — optionally plus one BBQ or fine dining night. One meal is catering. Kids: <a href="/kids-menus">kids menus</a>.',
  },
  {
    q: 'Which service is right for a wedding?',
    a: '<a href="/events/weddings">Wedding catering</a> with full staffing — not a single daily chef. Packages also on <a href="/bali-wedding-catering-packages">wedding packages</a>.',
  },
  {
    q: 'Do you provide waiters and bartenders only?',
    a: 'Yes via <a href="/in-villa-service">in-villa service</a>. Long-term staff placement: <a href="/staffing">staffing</a>.',
  },
  {
    q: 'Can you run experiences like cooking classes or proposal dinners?',
    a: 'Yes — curated formats on <a href="/experiences">experiences</a>.',
  },
  {
    q: 'Which areas of Bali do you cover?',
    a: 'Island-wide. <a href="/locations">Locations →</a>',
  },
  {
    q: 'What does "++" mean?',
    a: '11% government tax + 10% service charge. Quotes show all-in totals before deposit.',
  },
  {
    q: 'Are groceries included?',
    a: 'Daily private chef: shopping included, food at cost with receipts. Most catering/fine dining packages include ingredients in the menu price.',
  },
  {
    q: 'Do you clean up after service?',
    a: 'Yes on serviced chef, dining and catering formats.',
  },
  {
    q: 'How do I get a recommendation?',
    a: 'WhatsApp occasion, guest count and villa area — or use <a href="/recommended-services">recommended services</a> and <a href="/dining-styles">dining styles</a>.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Full refund 14+ days out, 50% at 7–13 days, none under 7. <a href="/cancellation">Policy →</a>',
  },
  {
    q: 'Can corporate teams book myCHEF?',
    a: 'Yes — dinners, offsites and multi-day programmes. <a href="/events/corporate-events">Corporate events →</a> · <a href="/catering/corporate-catering">Corporate catering →</a>',
  },
  {
    q: 'Is there a complete villa hospitality package?',
    a: 'Yes — transfers, chef, staff, events and concierge on <a href="/complete-villa-experience">complete villa experience</a>.',
  },
  {
    q: 'Where can I read reviews?',
    a: '<a href="/reviews">Guest reviews</a> and <a href="/why-mychef">why myCHEF</a>.',
  },
  {
    q: 'How do I book?',
    a: 'WhatsApp or <a href="/book">book</a> / <a href="/quote">quote</a>. Common questions: <a href="/faq">FAQ</a>.',
  },
]

const OCCASION_SELECTOR = [
  { occasion: 'Dinner for 2–10', fit: 'Fine dining or a private villa dinner' },
  { occasion: 'Family week in a villa', fit: 'Daily villa chef or weekly meal prep' },
  { occasion: 'Group of 10–40, relaxed', fit: 'BBQ or buffet catering' },
  { occasion: 'Wedding or milestone event', fit: 'Events & weddings team' },
  { occasion: 'Month or season in Bali', fit: 'Monthly chef arrangement' },
  { occasion: 'You already have a cook, need polish', fit: 'In-villa service staff' },
]

const LOCATIONS = [
  { name: 'Seminyak', slug: 'seminyak' },
  { name: 'Canggu', slug: 'canggu' },
  { name: 'Ubud', slug: 'ubud' },
  { name: 'Uluwatu', slug: 'uluwatu' },
  { name: 'Sanur', slug: 'sanur' },
  { name: 'Nusa Dua', slug: 'nusa-dua' },
  { name: 'Jimbaran', slug: 'jimbaran' },
  { name: 'Berawa', slug: 'berawa' },
  { name: 'Pererenan', slug: 'pererenan' },
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
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like help choosing the right service for my occasion.')}`

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Private Chef Services in Bali',
    url: `${SITE}/services`,
    about: { '@id': `${SITE}/#business` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.label,
          description: s.description,
          url: `${SITE}${s.url}`,
        },
      })),
    },
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <SeoHead
        title="Private Chef Services in Bali | Compare Every myCHEF Service"
        description="Compare all private chef services in Bali: fine dining, catering, events, staffing & classes. HACCP-certified chefs. WhatsApp us to find the right fit."
        canonical={`${SITE}/services`}
        ogImage={`${SITE}/generated/mychef-location-bali-hub-hero.webp`}
        jsonLd={[collectionPageSchema, breadcrumbSchema('Services', `${SITE}/services`), faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a })))]}
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
            {"Our Services"}
          </h1>
          <p className="text-base md:text-xl text-white/[75%] mb-10 max-w-[640px] leading-relaxed">
            Eight services, one standard: extraordinary food in your villa, with zero stress. Every service includes menu planning, fresh shopping, on-site cooking and a spotless kitchen afterwards — and every one starts with a clear price. All culinary teams are HACCP-certified.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer" data-source="services-cta"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C5A028] text-black text-xs md:text-sm font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            >
              <MessageCircle className="w-4 h-4" /> Help Me Choose — WhatsApp
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 text-white text-xs md:text-sm tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              full pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-8">
            <HaccpTrustLine dark />
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
            Compare
          </p>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Services
          </h2>
          <p className="text-white/[50%] max-w-xl mx-auto">
            Each service is built around the same principle: extraordinary food, in your villa, with zero stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const accent = ACCENTS[i]
            return (
              <Link
                key={service.slug}
                to={service.url}
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
                  {service.label}
                </h3>
                <p className="text-white/[50%] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-sm font-semibold text-white mb-6" style={{ color: accent }}>
                  {service.price}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: accent }}
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── WHICH SERVICE FITS YOUR OCCASION? ── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p
              className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Quick Match
            </p>
            <h2
              className="text-3xl md:text-5xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Which Service Fits Your Occasion?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {OCCASION_SELECTOR.map((item) => (
              <div
                key={item.occasion}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
              >
                <p className="font-semibold text-white min-w-[220px]">{item.occasion}</p>
                <div className="hidden sm:block w-px h-6 bg-white/10" />
                <p className="text-white/[60%]">→ {item.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/[40%] text-sm mt-8">
            All prices ++ (11% government tax + 10% service charge). A 50% deposit confirms any booking.
          </p>
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
              Locations
            </p>
            <h2
              className="text-3xl md:text-5xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where We Serve
            </h2>
            <p className="text-white/[50%] max-w-xl mx-auto">
              Every service is available in every major villa area — our teams know the local markets, kitchens and suppliers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((city) => (
              <Link
                key={city.slug}
                to={`/private-chef/${city.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-sm text-white/[70%] hover:border-[#C5A028]/50 hover:text-[#C5A028] transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MapPin className="w-3.5 h-3.5" /> {city.name}
              </Link>
            ))}
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
            Get Help
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Not Sure Which Service?
          </h2>
          <p className="text-white/[50%] mb-10 max-w-lg mx-auto">
            Tell us your occasion, guest count and dates. We will recommend the right fit and send a custom proposal — usually within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer" data-source="services-cta"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-full"
            >
              <MessageCircle className="w-4 h-4" /> Get Matched on WhatsApp
            </a>
            <a
              href="mailto:bali@mychef.id"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/30 text-white text-xs md:text-sm tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Email bali@mychef.id <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Questions" title="Services FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>All Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus in your villa.' },
              { label: 'Catering', href: '/catering', desc: 'Buffets, plated dinners & grazing tables.' },
              { label: 'BBQ catering', href: '/catering/bbq-catering', desc: 'Poolside grills, satay & live fire.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays, corporate & villa parties.' },
              { label: 'wedding catering', href: '/events/weddings', desc: 'Full-service wedding hospitality.' },
              { label: 'daily villa chef service', href: '/private-chef-bali', desc: 'Daily private chef for your villa stay.' },
              { label: 'monthly chef arrangements', href: '/private-chef-bali', desc: 'Recurring chef days & meal prep.' },
              { label: 'in-villa service staff', href: '/in-villa-service', desc: 'Waiters, bartenders, butlers & sommelier.' },
              { label: 'villa staff placement', href: '/staffing', desc: 'Long-term chefs & household teams.' },
              { label: 'full pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
              { label: 'Private Chef Seminyak', href: '/private-chef/seminyak', desc: 'Private chef services in Seminyak.' },
              { label: 'Private Chef Canggu', href: '/private-chef/canggu', desc: 'Private chef services in Canggu.' },
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
