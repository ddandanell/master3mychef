import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ChevronRight, UtensilsCrossed, ShoppingBasket, Sparkles } from 'lucide-react'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceWithOfferSchema,
  howToSchema,
  menuSchema,
} from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { MenuFilterTabs, MenuOverview } from '@/components/menus'
import { THREE_COURSE_MENUS } from '@/data/menus'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const CANONICAL = 'https://mychef.id/three-course'
const WA_QUOTE = buildWhatsAppUrl({ serviceName: 'Three-Course Dining' })

const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'A', label: 'Tier A · Best-Value' },
  { value: 'B', label: 'Tier B · Premium' },
  { value: 'C', label: 'Tier C · Luxury' },
]

const STEPS = [
  {
    icon: UtensilsCrossed,
    title: 'Choose your menu',
    text: 'Browse the eight menus below and pick your tier — best-value, premium or luxury. Not sure? We will happily recommend.',
  },
  {
    icon: ShoppingBasket,
    title: 'We shop & prepare in your villa',
    text: 'Your chef sources everything fresh that morning, then cooks and plates each course in your villa kitchen.',
  },
  {
    icon: Sparkles,
    title: 'Relax',
    text: 'Starter, main and dessert served at your table in 1.5–2 hours. Full cleanup included — you will not lift a finger.',
  },
]

const FAQS = [
  {
    q: 'What is the minimum group size?',
    a: 'The Three-Course Collection starts at a minimum of 6 guests. The lighter format is built for groups — casual villa lunches, family dinners and easy celebration meals where a full tasting menu would be too much.',
  },
  {
    q: 'How long does the service take?',
    a: 'From the first plate to dessert, allow 1.5 to 2 hours. Your chef arrives beforehand to set up, serves starter, main and dessert at a relaxed pace, and leaves your kitchen spotless afterwards.',
  },
  {
    q: 'Can the menus be adapted for dietary requirements?',
    a: 'Yes. Most three-course menus can be adapted for vegetarian, vegan, gluten-free and halal requirements, and several are halal-friendly as written. Tell us about allergies and preferences when you enquire and we will adjust the menu before your date.',
  },
  {
    q: 'Which areas of Bali do you serve?',
    a: 'We serve Seminyak, Canggu, Ubud, Uluwatu and everywhere in between — plus Jimbaran, Sanur, Nusa Dua and beyond. Send us your villa location on WhatsApp and we will confirm any travel fee before you book.',
  },
  {
    q: 'How do I secure my date?',
    a: 'A 50% deposit secures your date, chef and menu. The balance is due on the day of service. Message us on WhatsApp with your date, guest count and villa and we will confirm availability within the hour.',
  },
]

const RELATED_COLLECTIONS = [
  {
    to: '/fine-dining/menus',
    label: 'Fine Dining',
    title: '24 Classic Set Menus',
    note: 'From IDR 1.25M per guest',
  },
  {
    to: '/bbq-grill',
    label: 'BBQ Grill',
    title: 'Live Grill Station',
    note: 'From IDR 950K per guest',
  },
  {
    to: '/kids-menus',
    label: 'For Younger Guests',
    title: "Kids' Menus",
    note: 'From IDR 250K per child',
  },
  {
    to: '/dining-styles',
    label: 'Dining Styles',
    title: 'Browse All 50 Menus',
    note: 'Every collection in one place',
  },
]

export default function ThreeCoursePage() {
  const [activeTier, setActiveTier] = useState('all')

  const visibleMenus =
    activeTier === 'all'
      ? THREE_COURSE_MENUS
      : THREE_COURSE_MENUS.filter((menu) => menu.tier === activeTier)

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EF]">
      <SeoHead
        title="Three-Course Villa Dining Bali — 8 Menus | myCHEF.id"
        description="Lighter 3-course villa dining in Bali. Starter, main, dessert. 8 menus from IDR 850K. Perfect for casual lunches."
        canonical={CANONICAL}
        ogImage="/generated/mychef-catering-bali-plated-3course-table.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Three-Course Dining', CANONICAL, 'Dining Styles', 'https://mychef.id/dining-styles'),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          serviceWithOfferSchema({
            name: 'Three-Course Villa Dining',
            description:
              'Lighter three-course villa dining in Bali — starter, main and dessert cooked and served in your villa. Eight menus across three tiers from IDR 850,000 per guest, with chef service, market shopping, table setup and full cleanup included.',
            url: CANONICAL,
            price: '850000',
            unitText: 'per person',
          }),
          howToSchema({
            name: 'How to Book Three-Course Villa Dining in Bali',
            description: 'Three simple steps to a three-course dinner cooked and served in your Bali villa.',
            steps: STEPS.map((step) => ({ name: step.title, text: step.text })),
          }),
          menuSchema(
            'The Three-Course Collection',
            'Eight three-course villa dining menus across best-value, premium and luxury tiers, served by a private chef in your Bali villa.',
            CANONICAL,
            THREE_COURSE_MENUS.map((menu) => ({ name: menu.name, description: menu.description })),
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-plated-3course-table.webp"
            alt="Plated three-course dinner table set in a Bali villa by myCHEF.id private chefs"
            width={1440}
            height={810}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 pt-28 pb-24 max-w-[1280px] mx-auto text-white">
          <Breadcrumb items={[{ label: 'Three-Course' }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Three-Course Dining</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Elegant Simplicity.<br />Three Perfect Courses.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-4 leading-relaxed">
            Starter. Main. Dessert. No fuss, all flavour.
          </p>
          <p className="text-base md:text-xl text-[#C5A028] font-medium mb-10">
            From IDR 850,000 per guest
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              data-source="three-course-hero"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get Your Quote in 1 Hour
            </a>
            <Link
              to="/dining-styles"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Browse all menus
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip dark />

      {/* Menus */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">The Three-Course Collection</p>
            <h2 className="font-playfair text-3xl md:text-5xl text-white mb-4">Choose Your Menu</h2>
            <p className="text-white/[65%] max-w-2xl mx-auto leading-relaxed">
              Eight menus across three tiers. Every one includes chef service, market shopping, table setup and full cleanup.
            </p>
          </div>
          <div className="mb-12 flex justify-center">
            <MenuFilterTabs options={FILTER_OPTIONS} active={activeTier} onChange={setActiveTier} accent="gold" />
          </div>
          <MenuOverview menus={visibleMenus} dataSource="three-course" accent="gold" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24 px-6" style={{ background: '#111111' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">How It Works</p>
            <h2 className="font-playfair text-3xl md:text-5xl text-white">Three Steps to Dinner</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-8">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A028]/10 text-[#C5A028]">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px]">Step {i + 1}</span>
                </div>
                <h3 className="font-playfair text-xl md:text-2xl text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/[70%]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
            <h2 className="font-playfair text-3xl md:text-5xl text-white">Three-Course Dining FAQ</h2>
          </div>
          <FAQAccordion items={FAQS} dark />
        </div>
      </section>

      {/* Related Menu Collections */}
      <section className="py-20 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Explore More</p>
            <h2 className="font-playfair text-3xl md:text-5xl text-white">Related Menu Collections</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RELATED_COLLECTIONS.map((collection) => (
              <Link
                key={collection.to}
                to={collection.to}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-[#C5A028]/60 transition-colors"
              >
                <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-3">{collection.label}</p>
                <h3 className="font-playfair text-xl text-white group-hover:text-[#C5A028] transition-colors mb-2">
                  {collection.title}
                </h3>
                <p className="text-sm text-white/[60%] leading-relaxed mb-5">{collection.note}</p>
                <span className="inline-flex items-center gap-2 text-[#C5A028] text-xs font-semibold uppercase tracking-[2px]">
                  Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 px-6" style={{ background: '#111111' }}>
        <div className="mx-auto max-w-4xl rounded-[32px] border border-[#C5A028]/20 bg-[radial-gradient(circle_at_top,_rgba(197,160,40,0.18),_transparent_55%)] px-8 py-14 text-center md:px-14">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready When You Are</p>
          <h2 className="font-playfair text-3xl md:text-5xl text-white mb-5">Three Courses. Zero Washing Up.</h2>
          <p className="text-white/[70%] mb-2 leading-relaxed">
            From IDR 850,000 per guest &middot; Minimum 6 guests
          </p>
          <p className="text-white/[55%] text-sm mb-10 leading-relaxed max-w-xl mx-auto">
            Tell us your date, villa and guest count — we reply on WhatsApp within the hour with availability and a clear quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              data-source="three-course-final"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get Your Quote in 1 Hour
            </a>
            <Link
              to="/recommended-services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Not sure? Let us recommend <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <StickyMobileCTA
        pageSource="three-course"
        serviceName="three-course villa dining in Bali"
        intent="menus and pricing"
      />
    </div>
  )
}
