import { Link } from 'react-router-dom'
import {
  MessageCircle,
  ChevronRight,
  Flame,
  FlameKindling,
  Box,
  UtensilsCrossed,
  Thermometer,
  TreePine,
} from 'lucide-react'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceWithOfferSchema,
  howToSchema,
  menuSchema,
} from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { MenuOverview } from '@/components/menus'
import { BBQ_MENUS, BBQ_MIXED_MENUS, BBQ_SEAFOOD_MENUS, BBQ_SPECIALTY_MENUS } from '@/data/menus'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const CANONICAL = 'https://mychef.id/bbq-grill'

const WA_HERO = buildWhatsAppUrl({ serviceName: 'BBQ Grill Experience' })
const WA_FINAL = buildWhatsAppUrl({
  serviceName: 'BBQ Grill Experience',
  intent: 'a quote for a live grill night at our villa',
})

const STEPS = [
  {
    n: '1',
    title: 'We bring our grill',
    desc: 'Our team arrives with the full grill station — charcoal and gas grills, smoker boxes, tools and fuel. Your villa kitchen stays untouched.',
  },
  {
    n: '2',
    title: 'Chef cooks live',
    desc: 'Your chef grills, smokes and bastes in front of your guests. Fire, smoke and theatre, right beside your party.',
  },
  {
    n: '3',
    title: 'You enjoy',
    desc: 'Everything comes hot off the grill and straight to the table. We handle the full cleanup — you keep the glow.',
  },
]

const EQUIPMENT = [
  {
    icon: FlameKindling,
    name: 'Portable charcoal grills (Weber-style)',
    desc: 'Slow, smoky heat for authentic char and crust.',
  },
  {
    icon: Flame,
    name: 'Portable gas grills',
    desc: 'Fast, precise heat control for larger parties.',
  },
  {
    icon: Box,
    name: 'Smoker boxes for wood chips',
    desc: 'Low-and-slow smoke for ribs, brisket and whole fish.',
  },
  {
    icon: UtensilsCrossed,
    name: 'Professional grill tools',
    desc: 'Tongs, spatulas, basting brushes and a full carving kit.',
  },
  {
    icon: Thermometer,
    name: 'Meat thermometers',
    desc: 'Every cut served at its perfect internal temperature.',
  },
  {
    icon: TreePine,
    name: 'Apple, hickory & mesquite wood chips',
    desc: 'Three smoke profiles matched to your menu.',
  },
]

const MENU_SECTIONS = [
  {
    label: 'Mixed & Meat Grills',
    intro: 'Charcoal-fired classics — burgers, lamb chops, satay and slow-grilled chicken for mixed crowds.',
    menus: BBQ_MIXED_MENUS,
  },
  {
    label: 'Seafood Grills',
    intro: 'Prawns, barramundi, lobster and oysters, kissed by smoke and finished over the coals.',
    menus: BBQ_SEAFOOD_MENUS,
  },
  {
    label: 'Specialty Grills',
    intro: 'Wagyu, ribs and show-piece grills with full fire-side theatre for your party.',
    menus: BBQ_SPECIALTY_MENUS,
  },
]

const FAQS = [
  {
    q: 'What is the minimum group size?',
    a: 'The BBQ Grill Experience starts at a minimum of 8 guests. The live grill station is built for parties — birthdays, villa gatherings and celebration dinners where fire and smoke are part of the show.',
  },
  {
    q: 'Do you bring the grill, or do we need one at the villa?',
    a: 'We bring everything. Our team arrives with the full grill station — portable charcoal and gas grills, smoker boxes, professional tools and all fuel. Your villa kitchen stays untouched, and we take it all away afterwards.',
  },
  {
    q: 'Charcoal or gas — and can you smoke meats?',
    a: 'Both. Charcoal grills give that slow, smoky char and crust, while gas grills give fast, precise heat for larger parties. For low-and-slow smoking we use smoker boxes with apple, hickory and mesquite wood chips — three smoke profiles matched to your menu.',
  },
  {
    q: 'Can the grill menus be adapted for dietary requirements?',
    a: 'Yes. Most grill menus can be adapted for vegetarian, vegan, gluten-free and halal requirements, and there are seafood-led and mixed options for different tastes at the same party. Tell us about allergies and preferences when you enquire and we will adjust the menu before your date.',
  },
  {
    q: 'How do I secure my date?',
    a: 'A 50% deposit secures your date, chef and grill station. The balance is due on the day of service. Message us on WhatsApp with your date, guest count and villa and we will confirm availability within the hour.',
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
    to: '/three-course',
    label: 'Three-Course Dining',
    title: 'Three-Course Collection',
    note: 'From IDR 850K per guest',
  },
  {
    to: '/kids-menus',
    label: 'For Younger Guests',
    title: "Kids' Menus",
    note: 'From IDR 250K per child',
  },
  {
    to: '/families',
    label: 'Menu Families',
    title: 'Browse All 50 Menus',
    note: 'Every collection in one place',
  },
]

export default function BbqGrillPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EF]">
      <SeoHead
        title="BBQ Grill Experience Bali — Live Grill Station | myCHEF.id"
        description="Premium BBQ grill experiences at your Bali villa. Live grill station, seafood, Wagyu, ribs. From IDR 950K."
        canonical={CANONICAL}
        ogImage="/generated/mychef-catering-bali-bbq-grill-satay.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('BBQ Grill Experience', CANONICAL, 'Menu Families', 'https://mychef.id/families'),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          serviceWithOfferSchema({
            name: 'BBQ Grill Experience',
            description:
              'Premium BBQ grill experiences at your Bali villa. A live grill station — charcoal and gas grills, smoker boxes and wood chips — with a private chef grilling seafood, Wagyu, ribs and satay in front of your guests. From IDR 950,000 per guest.',
            url: CANONICAL,
            price: '950000',
            unitText: 'per person',
          }),
          howToSchema({
            name: 'How to Book a BBQ Grill Night at Your Bali Villa',
            description: 'Three simple steps to a live grill night at your Bali villa — we bring the grill, the chef cooks live, you enjoy.',
            steps: STEPS.map((step) => ({ name: step.title, text: step.desc })),
          }),
          menuSchema(
            'The BBQ Grill Menus',
            'Twelve live-grill menus across mixed and meat grills, seafood grills and specialty grills, cooked over charcoal at your Bali villa.',
            CANONICAL,
            BBQ_MENUS.map((menu) => ({ name: menu.name, description: menu.description })),
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-bbq-grill-satay.webp"
            alt="Satay skewers grilling over glowing charcoal at a live BBQ grill station in a Bali villa"
            width={1440}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)' }}
          />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 pb-20 md:pb-28 pt-32 max-w-4xl mx-auto text-center text-white">
          <Breadcrumb items={[{ label: 'BBQ Grill' }]} theme="dark" className="px-0 pt-0 pb-8 justify-center [&>ol]:justify-center" />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">BBQ Grill Experience</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Fire. Smoke. Flavour.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            Live grilling at your villa. Our grill, your party.
          </p>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A028]/60 bg-[#C5A028]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A028]">
              <Flame className="w-3.5 h-3.5" strokeWidth={1.5} />
              Live Grill Station Included
            </span>
          </div>
          <p className="font-playfair text-xl md:text-2xl text-[#C5A028] mb-10">From IDR 950,000 per guest</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_HERO}
              target="_blank"
              rel="noopener noreferrer"
              data-source="bbq-hero"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Book Your BBQ Grill
            </a>
            <a
              href="#menus"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Explore Grill Menus
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip dark />

      {/* How it works */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4 text-center">How It Works</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12 text-center">Three Steps to Grill Night</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A028]/50 font-playfair text-xl text-[#C5A028]">
                  {step.n}
                </div>
                <h3 className="font-playfair text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/[65%]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our grill equipment */}
      <section className="py-20 md:py-24 px-6 border-t border-white/10" style={{ background: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4 text-center">Our Grill Equipment</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-center">Everything Arrives With Us</h2>
          <p className="text-white/[65%] max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            A complete professional grill station, packed and set up at your villa. No rental runs, no improvisation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EQUIPMENT.map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-[#C5A028]/50 transition-colors">
                <item.icon className="w-6 h-6 text-[#C5A028] mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-sm leading-relaxed text-white/[60%]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grill menus */}
      <section id="menus" className="py-20 md:py-24 px-6 border-t border-white/10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4 text-center">The Grill Menus</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-14 text-center">Choose Your Fire</h2>
          <div className="space-y-16">
            {MENU_SECTIONS.map((section, index) => (
              <div key={section.label}>
                <div className="mb-8 text-center">
                  <h3 className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-3">{section.label}</h3>
                  <p className="text-white/[60%] text-sm max-w-xl mx-auto leading-relaxed">{section.intro}</p>
                </div>
                <MenuOverview menus={section.menus} dataSource="bbq-grill" intro={index === 0 ? undefined : null} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to full-event BBQ catering */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/catering/bbq-catering"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-[#C5A028]/60 transition-colors"
          >
            <div>
              <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-2">Full-Event BBQ</p>
              <h3 className="font-playfair text-2xl text-white group-hover:text-[#C5A028] transition-colors mb-2">
                Looking for full-event BBQ catering instead?
              </h3>
              <p className="text-sm text-white/[60%] leading-relaxed">
                Servers, buffet styling, bar service and full event staffing for larger celebrations.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold uppercase tracking-[2px] flex-shrink-0">
              Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Common Questions</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white">BBQ Grill Experience FAQ</h2>
          </div>
          <FAQAccordion items={FAQS} dark />
        </div>
      </section>

      {/* Related Menu Collections */}
      <section className="py-20 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Explore More</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white">Related Menu Collections</h2>
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
      <section className="py-20 md:py-24 px-6 border-t border-white/10 text-center" style={{ background: 'linear-gradient(to bottom, #0A0A0A, #050505)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Ready to Book?</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-white">Your Grill Night Starts Here</h2>
          <p className="text-white/[70%] mb-10 leading-relaxed">
            From IDR 950,000 per guest &middot; Minimum 8 guests
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_FINAL}
              target="_blank"
              rel="noopener noreferrer"
              data-source="bbq-final"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Book Your BBQ Grill
            </a>
            <Link
              to="/recommended-services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Not sure? Let us recommend
            </Link>
          </div>
        </div>
      </section>
      <StickyMobileCTA
        pageSource="bbq-grill"
        serviceName="a BBQ grill experience at our villa"
        intent="a quote for a live grill night"
      />
    </div>
  )
}
