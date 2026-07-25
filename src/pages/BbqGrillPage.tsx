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
import SeoHead, { faqPageSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import FAQAccordion from '@/components/catering/FAQAccordion'
import { MenuOverview } from '@/components/menus'
import type { Menu } from '@/data/menus'
import { BBQ_MIXED_MENUS, BBQ_SEAFOOD_MENUS, BBQ_SPECIALTY_MENUS } from '@/data/menus'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { ArticleContentSection } from '@/components/shared'

const BEST_VALUE_GRILLS: Menu[] = [
  BBQ_SPECIALTY_MENUS.find((m) => m.name === 'Sunset Pool Party BBQ')!,
  BBQ_SEAFOOD_MENUS.find((m) => m.name === 'Jimbaran-Style Seafood Grill')!,
  BBQ_SPECIALTY_MENUS.find((m) => m.name === 'Indonesian Balinese Grill Night')!,
  BBQ_MIXED_MENUS.find((m) => m.name === 'Australian BBQ')!,
  BBQ_SEAFOOD_MENUS.find((m) => m.name === 'Mediterranean Seafood BBQ')!,
]

const PREMIUM_FIRE_MENUS: Menu[] = [
  BBQ_MIXED_MENUS.find((m) => m.name === 'American Smokehouse')!,
  BBQ_SEAFOOD_MENUS.find((m) => m.name === 'Premium Seafood Grill with Oysters')!,
  BBQ_MIXED_MENUS.find((m) => m.name === 'Brazilian Churrasco')!,
  BBQ_SPECIALTY_MENUS.find((m) => m.name === 'Tomahawk & Ribs Feast')!,
  BBQ_MIXED_MENUS.find((m) => m.name === 'Premium Steak Night')!,
  BBQ_SEAFOOD_MENUS.find((m) => m.name === 'Seafood Tower Grill')!,
  BBQ_SPECIALTY_MENUS.find((m) => m.name === 'Luxury Wagyu Fire Grill')!,
]

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
    desc: 'Portable charcoal and gas grills, smoker boxes, professional tools and all fuel. Your villa kitchen stays untouched.',
  },
  {
    n: '2',
    title: 'The chef cooks live',
    desc: 'Grilling, smoking and basting beside your party, with apple, hickory and mesquite wood chips for three smoke profiles.',
  },
  {
    n: '3',
    title: 'You enjoy',
    desc: 'Everything comes hot off the grill to the table. We handle the full cleanup afterwards.',
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
    label: 'Best-value grills',
    intro: 'Relaxed, flavour-forward grills that suit birthdays, pool parties and mixed groups.',
    menus: BEST_VALUE_GRILLS,
  },
  {
    label: 'Premium fire menus',
    intro: 'Show-piece grills, Wagyu, ribs and shellfish for celebration nights.',
    menus: PREMIUM_FIRE_MENUS,
  },
]

const FAQS = [
  {
    q: 'What is the minimum group size?',
    a: 'Eight guests. The live grill station is built for parties — birthdays, villa gatherings and celebration dinners where fire and smoke are part of the show.',
  },
  {
    q: 'Do you bring the grill, or do we need one at the villa?',
    a: 'We bring everything: charcoal and gas grills, smoker boxes, professional tools and all fuel. Your villa kitchen stays untouched, and we take it all away afterwards.',
  },
  {
    q: 'Charcoal or gas — and can you smoke meats?',
    a: 'Both. Charcoal for slow smoky char, gas for precise heat on larger parties, and smoker boxes with apple, hickory and mesquite chips for low-and-slow brisket, ribs and whole fish.',
  },
  {
    q: 'Can the grill menus be adapted for dietary requirements?',
    a: 'Yes. Most grill menus adapt to vegetarian, vegan, gluten-free and halal requirements, and mixed menus let seafood-lovers and meat-lovers eat at the same party. Tell us about allergies and preferences when you enquire and we will adjust the menu before your date.',
  },
  {
    q: 'What if it rains?',
    a: 'We adapt the setup to covered terrace areas of your villa; if the weather makes grilling impossible, we reschedule or rework the menu indoors — decided with you in advance, never on the night.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'Bali-wide. Travel fees may apply for remote areas and are always quoted upfront.',
  },
  {
    q: 'What deposit is required?',
    a: 'A 50% deposit secures your date, chef and grill station; the remaining 50% is due the day before the event.',
  },
  {
    q: 'We want full-service BBQ with staff, buffet styling and a bar — is that different?',
    a: 'Yes — that is our BBQ catering service, with waiting staff, buffet styling and bar options for larger celebrations. For dedicated packages see villa BBQ party packages and seafood BBQ catering.',
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
    to: '/dining-styles',
    label: 'Dining Styles',
    title: 'Browse All 50 Menus',
    note: 'Every collection in one place',
  },
]

export default function BbqGrillPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F3EF]">
      <SeoHead
        title="BBQ Grill Menu Bali | 12 Live-Grill Menus & Prices | myCHEF"
        description="Browse 12 Bali BBQ grill menus with real prices — live grill station, seafood, Wagyu & ribs at your villa. From IDR 950K/guest, min 8. WhatsApp myCHEF."
        canonical={CANONICAL}
        ogImage="/generated/mychef-catering-bali-bbq-grill-satay.webp"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Menu',
            name: 'myCHEF BBQ Grill Menus Bali',
            hasMenuSection: [
              {
                '@type': 'MenuSection',
                name: 'Best-Value Grills',
                hasMenuItem: BEST_VALUE_GRILLS.map((menu) => ({
                  '@type': 'MenuItem',
                  name: menu.name,
                  offers: { '@type': 'Offer', price: String(menu.priceIdr), priceCurrency: 'IDR' },
                })),
              },
              {
                '@type': 'MenuSection',
                name: 'Premium Fire Menus',
                hasMenuItem: PREMIUM_FIRE_MENUS.map((menu) => ({
                  '@type': 'MenuItem',
                  name: menu.name,
                  offers: { '@type': 'Offer', price: String(menu.priceIdr), priceCurrency: 'IDR' },
                })),
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'BBQ Grill Experience Bali',
            provider: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id', telephone: '+62 896-7407-2020', email: 'bali@mychef.id' },
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
            description: 'Live grill station at your Bali villa: 12 BBQ grill menus from IDR 950,000 per guest, minimum 8 guests, with chef, charcoal and gas grills, smoker boxes and full cleanup.',
            url: CANONICAL,
          },
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
              { '@type': 'ListItem', position: 2, name: 'BBQ Grill Menu', item: CANONICAL },
            ],
          },
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
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">BBQ Grill Menu</p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            {"The BBQ Grill Menu — Fire. Smoke. Flavour."}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Twelve live-grill menus, every one cooked in front of your guests on our own grill station — charcoal, gas and real wood smoke.
          </p>
          <p className="text-white/70 text-sm mb-2">
            From IDR 950,000 per guest · Minimum 8 guests · Full grill station, chef and cleanup included
          </p>
          <p className="text-white/50 text-xs mb-8 max-w-2xl mx-auto">
            Price-model note: this page is the named grill-menu catalogue (from IDR 950K/guest, min. 8). Our <Link to="/catering/bbq-catering" className="text-[#C5A028] hover:underline">BBQ catering in Bali</Link> is priced differently (from IDR 700K/person, min. 10) — different products, different entry floors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_HERO}
              target="_blank"
              rel="noopener noreferrer"
              data-source="bbq-hero"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Book Your Grill Night
            </a>
            <Link
              to="/catering/bbq-catering"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              BBQ catering in Bali
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip dark />

      {/* How it works */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4 text-center">How It Works</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-12 text-center">How the Live Grill Station Works</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-center">The Grill Menus & Prices</h2>
          <p className="text-white/[60%] text-sm max-w-3xl mx-auto text-center leading-relaxed mb-14">
            Prices are per guest, minimum 8 guests, subject to 11% government tax + 10% service charge (++). Every menu includes starters, grill-station mains, sides from the grill, house sauces and dessert.
          </p>
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

      {/* Group math */}
      <section className="py-20 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Group Math</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-white">What a BBQ Night Costs</h2>
          <p className="text-white/[65%] leading-relaxed mb-6">
            Multiply the menu price by your headcount, then add 11% government tax + 10% service charge. For example: 12 guests on the Jimbaran-Style Seafood Grill = 12 × IDR 1,150,000 = IDR 13,800,000++, roughly IDR 16.7M all-in. Twenty guests on the Sunset Pool Party BBQ = IDR 19,000,000++, roughly IDR 23M all-in.
          </p>
          <p className="text-white/[65%] leading-relaxed">
            Your quote is fixed before you commit — see <Link to="/journal/bbq-catering-cost-breakdown-bali" className="text-[#C5A028] hover:underline">what a villa BBQ costs</Link> for the full breakdown.
          </p>
        </div>
      </section>

      {/* Dietary options */}
      <section className="py-20 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Dietary</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-white">Dietary Options on the Grill</h2>
          <p className="text-white/[65%] leading-relaxed">
            Most grill menus adapt to vegetarian, vegan, gluten-free and halal requirements, and mixed menus let seafood-lovers and meat-lovers eat at the same party. Younger guests are covered too — our <Link to="/kids-menus" className="text-[#C5A028] hover:underline">kids</Link> menu runs from IDR 250,000 per child alongside any grill night.
          </p>
        </div>
      </section>

      {/* Cross-link to full-event BBQ catering */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          <Link
            to="/catering/bbq-catering"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-[#C5A028]/60 transition-colors"
          >
            <div>
              <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-2">Full-Event BBQ</p>
              <h3 className="font-playfair text-2xl text-white group-hover:text-[#C5A028] transition-colors mb-2">
                BBQ catering in Bali
              </h3>
              <p className="text-sm text-white/[60%] leading-relaxed">
                Servers, buffet styling, bar service and full event staffing for larger celebrations.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold uppercase tracking-[2px] flex-shrink-0">
              Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/villa-bbq-catering-bali"
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-[#C5A028]/60 transition-colors"
            >
              <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-2">Villa Parties</p>
              <h3 className="font-playfair text-xl text-white group-hover:text-[#C5A028] transition-colors mb-2">villa BBQ party packages</h3>
              <p className="text-sm text-white/[60%] leading-relaxed">In-villa BBQ party packages with setup, staff and cleanup.</p>
            </Link>
            <Link
              to="/seafood-bbq-catering-bali"
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-[#C5A028]/60 transition-colors"
            >
              <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-2">Seafood</p>
              <h3 className="font-playfair text-xl text-white group-hover:text-[#C5A028] transition-colors mb-2">seafood BBQ catering</h3>
              <p className="text-sm text-white/[60%] leading-relaxed">Market-fresh seafood grilled live at your villa.</p>
            </Link>
          </div>
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
          <h2 className="font-playfair text-3xl md:text-4xl mb-4 text-white">Book Your Grill Night</h2>
          <p className="text-white/[70%] mb-10 leading-relaxed">
            Pick a menu, tell us your date, villa and guest count — we confirm availability on WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={WA_FINAL}
              target="_blank"
              rel="noopener noreferrer"
              data-source="bbq-final"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Book Your Grill Night on WhatsApp
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              transparent pricing
            </Link>
          </div>
          <p className="text-white/50 text-sm">
            Prefer email? <a href="mailto:bali@mychef.id" className="text-[#C5A028] hover:underline">bali@mychef.id</a> · Or call +62 896-7407-2020
          </p>
        </div>
      </section>
      <StickyMobileCTA
        pageSource="bbq-grill"
        serviceName="a BBQ grill experience at our villa"
        intent="a quote for a live grill night"
      />
    <ArticleContentSection />
    </div>
  )
}
