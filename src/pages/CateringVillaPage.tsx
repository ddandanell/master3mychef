import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users,
  Utensils, Home, ChefHat, ShieldCheck, Clock, Sparkles,
  Wine, Flower2, CakeSlice, Flame, ArrowRight,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  localBusinessSchema,
  cateringBreadcrumbSchema,
  cateringServiceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import FAQAccordion from '@/components/catering/FAQAccordion'
// import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, AllInPrice } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import PressStrip from '@/components/shared/PressStrip'

gsap.registerPlugin(ScrollTrigger)

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20villa%20catering%20quote%20for%20my%20Bali%20villa.'
const SITE = 'https://mychef.id'

/* ── DATA ── */

const VILLA_PACKAGES = [
  {
    title: 'Villa Lunch',
    price: 450000,
    people: '8 to 40 people',
    format: ['2 starters', '2 mains', '2 sides', 'Dessert', 'Soft drinks'],
    bestFor: 'Family lunches, poolside dining, relaxed villa days',
  },
  {
    title: 'Villa Dinner',
    price: 650000,
    people: '8 to 60 people',
    format: ['3 starters', '2 mains', '3 sides', 'Dessert', 'Coffee & tea'],
    bestFor: 'Birthdays, reunions, special occasions, group dinners',
  },
  {
    title: 'Multi-Day Villa Catering',
    price: 550000,
    people: '8 to 200 people',
    format: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Full service team'],
    bestFor: 'Wedding groups, retreats, extended family stays, corporate offsites',
  },
]

const MENU_STYLES = [
  { name: 'Family-Style', desc: 'Shared platters to the table. Relaxed, social, generous portions.' },
  { name: 'Buffet', desc: 'Self-serve hot and cold stations. Best for 30+ guests.' },
  { name: 'BBQ & Grill', desc: 'Live-fire cooking by the pool. Chef grills at your villa.' },
  { name: 'Plated Dinner', desc: 'Restaurant-style courses with table service. Formal and precise.' },
  { name: 'Grazing Table', desc: 'Charcuterie, cheeses, fruits, breads. Beautiful spread for welcome.' },
  { name: 'Floating Breakfast', desc: 'Bamboo tray in your pool. Instagram-ready brunch experience.' },
  { name: 'Canapés & Cocktails', desc: 'Bite-sized starters with drinks. Perfect for pre-dinner receptions.' },
  { name: 'Indonesian Feast', desc: 'Authentic Balinese and Indonesian dishes. Nasi campur, satay, lawar.' },
  { name: 'Mediterranean', desc: 'Grilled seafood, pasta, salads, olive oil, fresh herbs.' },
  { name: 'Custom Menu', desc: 'Tell us your vision. We design a menu around your group and occasion.' },
]

const VILLA_EVENTS = [
  { title: 'Birthdays', desc: 'Milestone celebrations with cake, decor, and custom menus.' },
  { title: 'Family Lunches', desc: 'Relaxed multi-generational dining by the pool.' },
  { title: 'Pool Parties', desc: 'BBQ, cocktails, and grazing by the water.' },
  { title: 'Anniversaries', desc: 'Romantic dinners with candles, petals, and wine.' },
  { title: 'Bachelor & Bachelorette', desc: 'Group dinners before the big day. Fun, loud, memorable.' },
  { title: 'Pre-Wedding Dinners', desc: 'Rehearsal dinners for wedding groups staying at the villa.' },
  { title: 'Retreat Dinners', desc: 'Wellness, yoga, and corporate retreat catering.' },
  { title: 'Holiday Gatherings', desc: 'Christmas, New Year, Easter — festive menus for villa groups.' },
]

const ADDONS = [
  { icon: Wine, title: 'Bartender & Cocktails', desc: 'Mixologist, full bar setup, signature drinks. From IDR 850K.' },
  { icon: Users, title: 'Waiters & Service Staff', desc: 'Professional waiters for plated or buffet service. 1 per 10 guests.' },
  { icon: Flower2, title: 'Table Styling & Flowers', desc: 'Linens, candles, floral arrangements, and table decor.' },
  { icon: CakeSlice, title: 'Custom Cakes', desc: 'Birthday, anniversary, or celebration cakes. 3-day notice.' },
  { icon: Utensils, title: 'Breakfast Service', desc: 'Morning after? We do villa breakfast too. Continental or full.' },
  { icon: Flame, title: 'Live BBQ Station', desc: 'Chef grills at your villa. Whole fish, ribs, prawns, skewers.' },
]

const AREAS = [
  'Seminyak', 'Canggu', 'Uluwatu', 'Ubud', 'Sanur',
  'Nusa Dua', 'Jimbaran', 'Pererenan', 'Berawa', 'Tabanan',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Share villa details', desc: 'Location, kitchen setup, guest count, and occasion. We check chef availability.', icon: Home },
  { step: '02', title: 'Choose your format', desc: 'Lunch, dinner, multi-day, BBQ, buffet, plated, or grazing. We guide you.', icon: Utensils },
  { step: '03', title: 'Confirm your menu', desc: 'Customize dishes, dietary needs, and add-ons. Nothing is fixed until you approve.', icon: ChefHat },
  { step: '04', title: 'Chef arrives prepared', desc: 'With groceries, equipment, and service team. Prep begins in your villa kitchen.', icon: Clock },
  { step: '05', title: 'We cook, serve, host', desc: 'Everything handled. You eat, drink, and enjoy your villa.', icon: Sparkles },
  { step: '06', title: 'Full cleanup', desc: 'Kitchen, dishes, surfaces — spotless. We leave the villa as we found it.', icon: ShieldCheck },
]

const FAQS = [
  { q: 'Can you cook inside my villa kitchen?', a: 'Yes. Our chefs are experienced in working with villa kitchens of all sizes. We bring any specialized equipment needed. If the kitchen is basic, we adapt the menu accordingly.' },
  { q: 'Do you bring your own equipment?', a: 'We bring chef knives, portable burners, grills, chafing dishes, and serving equipment. Most villas have standard cookware — we use what is there and supplement as needed.' },
  { q: 'How many guests can you cater for?', a: 'We cater villa groups from 8 to 200 guests. For groups over 60, we bring additional chefs and a larger service team.' },
  { q: 'Can we customize the menu?', a: 'Absolutely. Every menu is designed for your group. Choose cuisine style, dishes, spice level, and dietary needs. Nothing is off-the-shelf.' },
  { q: 'Do you handle dietary restrictions?', a: 'Yes — vegetarian, vegan, gluten-free, halal-friendly, allergies, children\'s menus, and low-spice options. We accommodate all needs at no extra charge.' },
  { q: 'Do you clean up after the meal?', a: 'Full cleanup is included. Kitchen, dishes, surfaces, and dining area. You relax. We leave the villa as we found it.' },
  { q: 'What areas in Bali do you serve?', a: 'All major villa areas: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Pererenan, Berawa, and surrounding regions.' },
  { q: 'How far in advance should I book?', a: 'For villa dinners, 3–7 days is ideal. For multi-day catering or large groups, 2–4 weeks helps us assign the best chef.' },
  { q: 'Can we add a bartender or waiters?', a: 'Yes. Bartenders, cocktail packages, waiters, and table styling are all available as add-ons. Ask when you book.' },
  { q: 'Is grocery shopping included?', a: 'We shop for fresh ingredients and bill groceries at cost — no markup. You see every receipt.' },
]

export default function CateringVillaPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.villa-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Villa Catering Bali | Private Chef & Event Catering"
        description="Private villa catering in Bali with chef-led menus, setup, service, drinks, and cleanup for birthdays, family dinners, retreats, and villa events."
        canonical={`${SITE}/catering/villa-catering`}
        ogImage={`${SITE}/generated/hero-buffet-catering.webp`}
        jsonLd={[
          localBusinessSchema,
          cateringServiceSchema('Villa Catering Bali', 'Villa catering in Bali for private lunches, dinners, birthdays, and multi-day stays with chef-led menus and on-site service. myCHEF.id brings the kitchen team, setup, service, and cleanup to your villa across Bali.', `${SITE}/catering/villa-catering`),
          offerSchema('Villa Lunch', 450000, 'IDR', `${SITE}/catering/villa-catering`),
          offerSchema('Villa Dinner', 650000, 'IDR', `${SITE}/catering/villa-catering`),
          offerSchema('Multi-Day Villa Catering', 550000, 'IDR', `${SITE}/catering/villa-catering`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 312),
          cateringBreadcrumbSchema('Villa Catering Bali', `${SITE}/catering/villa-catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Villa Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/hero-buffet-catering.webp"
            alt="Long villa dining table by pool at sunset with chef-prepared Bali catering"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Villa Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Villa Catering Bali,<br />
            <span className="italic">Built for Private Villas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Chef-led catering, discreet service, full setup, and cleanup for villa dinners, poolside parties, birthdays, family gatherings, and private events across Bali.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            From IDR 450,000/person · Chef + team included · Groceries at cost · Bali-wide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-catering-hero" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Request Villa Catering Quote
            </a>
            <a href="#menu-styles" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              View Menu Styles
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day WhatsApp reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 50% deposit only</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full cleanup included</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ SECTION 2: WHO THIS IS FOR ═══════ */}
      <section className="villa-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 2 — Who This Is For"
            title="Private Villa Catering for Every Group"
            subtitle="Families, villa guests, birthdays, holiday groups, expats, villa managers, and private celebrations. If you are staying in a Bali villa and want restaurant-level food without leaving, this is for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { title: 'Families', desc: 'Multi-generational groups who want relaxed, delicious meals without restaurant logistics.' },
              { title: 'Birthday Groups', desc: 'Milestone celebrations with custom menus, cakes, and decor at your villa.' },
              { title: 'Wedding Parties', desc: 'Pre-wedding dinners, rehearsal meals, and post-wedding brunches for villa-staying guests.' },
              { title: 'Corporate Retreats', desc: 'Multi-day catering for offsites, team buildings, and executive dinners.' },
              { title: 'Holiday Renters', desc: 'Airbnb and villa rental guests who want a private chef experience during their stay.' },
              { title: 'Villa Managers', desc: 'Concierge-level catering for your guests. White-label available for partners.' },
              { title: 'Retreat Hosts', desc: 'Yoga, wellness, and surf retreats needing consistent, healthy multi-day catering.' },
              { title: 'Celebrations', desc: 'Anniversaries, reunions, graduations — any reason to gather and eat well.' },
            ].map((item) => (
              <div key={item.title} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: MENU STYLES ═══════ */}
      <section id="menu-styles" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 3 — Menu Styles"
            title="Flexible Formats for Every Villa Occasion"
            subtitle="Choose the service style that matches your group, your villa, and your mood. Every format includes chef, service team, setup, and cleanup."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {MENU_STYLES.map((style) => (
              <div key={style.name} className="flex items-start gap-4 p-5 bg-[#FAFAF8] rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#C5A028] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{style.name}</h3>
                  <p className="text-sm text-[#4A4745]">{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catering/bbq-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline">
              Explore BBQ Catering <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/catering/buffet" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline">
              Explore Buffet Catering <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/catering/plated-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline">
              Explore Plated Dinners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: HOW THE VILLA SETUP WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 4 — How It Works"
            title="How the Villa Setup Works"
            subtitle="We handle everything from kitchen check to final cleanup. You just need to open the door."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <span className="text-xs text-[#C5A028] font-semibold tracking-wider uppercase">Step {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-sm text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#FAFAF8] rounded-2xl p-6 md:p-8 border border-[#E8E6E3]">
            <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>What You Need to Provide</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'A working kitchen (stove, fridge, sink)',
                'Basic cookware and utensils (most villas have these)',
                'Dining table and chairs for your group',
                'Access 2–3 hours before meal time',
                'WiFi for our coordination (helpful, not required)',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4A4745] mt-4">
              <strong>We bring everything else:</strong> chef, service team, groceries, specialized equipment, table styling materials, and cleanup supplies. If your villa lacks something, we arrange it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: VILLA EVENTS WE CATER ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 5 — Villa Events"
            title="Villa Events We Cater"
            subtitle="From casual family lunches to milestone celebrations — we have catered every type of villa gathering across Bali."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {VILLA_EVENTS.map((event) => (
              <div key={event.title} className="villa-reveal bg-[#FAFAF8] rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{event.title}</h3>
                <p className="text-sm text-[#4A4745]">{event.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/events" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline">
              Explore Event Catering <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: PACKAGES + PRICING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 6 — Packages"
            title="Villa Catering Packages"
            subtitle="Clear pricing per person. Chef, service team, setup, and cleanup included. Groceries billed at cost."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {VILLA_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <div className="mb-1">
                  <AllInPrice price={pkg.price} />
                </div>
                <p className="text-sm text-[#4A4745] mb-4">{pkg.people}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.format.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#4A4745]/70 mb-4">Best for: {pkg.bestFor}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-catering-package" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all">
                  <Calendar className="w-4 h-4" /> Book This Package
                </a>
              </div>
            ))}
          </div>
          <TaxFooter className="mt-8" />
        </div>
      </section>

      {/* ═══════ SECTION 7: DIETARY & GUEST HANDLING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 7 — Dietary"
            title="Dietary & Guest Handling"
            subtitle="Mixed international groups are the norm in Bali villas. We handle every dietary need without fuss."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {[
              { title: 'Vegetarian & Vegan', desc: 'Full plant-based menus with protein-rich mains, fresh salads, and creative sides.' },
              { title: 'Gluten-Free', desc: 'Naturally gluten-free options and adapted dishes. No cross-contamination in prep.' },
              { title: 'Halal-Friendly', desc: 'Pork-free, alcohol-free options available. We source halal-certified proteins on request.' },
              { title: 'Children\'s Menus', desc: 'Milder flavors, familiar dishes, and fun presentations for younger guests.' },
              { title: 'Allergies', desc: 'Nut, shellfish, dairy, and other allergies flagged and managed with separate prep zones.' },
              { title: 'Spice Levels', desc: 'Indonesian dishes adapted for Western palates. Sambal served on the side.' },
            ].map((d) => (
              <div key={d.title} className="flex items-start gap-3 p-5 bg-[#FAFAF8] rounded-xl">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">{d.title}</h3>
                  <p className="text-sm text-[#4A4745]">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: OPTIONAL ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 8 — Add-Ons"
            title="Optional Add-Ons"
            subtitle="Elevate your villa catering with bartenders, waiters, table styling, live BBQ, and more."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="villa-reveal bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <addon.icon className="w-6 h-6 text-[#C5A028] mb-3" />
                <h3 className="font-semibold text-sm mb-1">{addon.title}</h3>
                <p className="text-sm text-[#4A4745]">{addon.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/in-villa-service/bartenders" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline">
              Hire Bartenders <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/in-villa-service/waiters" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline">
              Hire Waiters <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: AREAS WE SERVE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <SectionHeader
            eyebrow="Chapter 9 — Coverage"
            title="Areas We Serve"
            subtitle="Bali-wide villa catering. From Canggu to Uluwatu, Ubud to Nusa Dua — we come to your villa."
          />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {AREAS.map((area) => (
              <span key={area} className="px-4 py-2 bg-[#FAFAF8] rounded-full text-sm text-[#4A4745] border border-[#E8E6E3]">
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#4A4745] mt-6">
            Not sure if we cover your villa? <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#C5A028] font-semibold hover:underline">Message us on WhatsApp</a> — we probably do.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 10: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'The Richardson Family', location: 'Canggu Villa', quote: 'We had the multi-day villa catering for 15 people over 4 days. The chef was incredible — every meal was different and delicious. The team left the kitchen spotless each night.', rating: 5 },
          { name: 'Mark & Lisa', location: 'Uluwatu Villa', quote: 'Villa dinner for 20 guests. The chef handled everything — from shopping to cleanup. We just sat by the pool and enjoyed. Best decision of our trip.', rating: 5 },
          { name: 'Corporate Group', location: 'Seminyak Villa', quote: 'Multi-day catering for our company offsite. Breakfast, lunch, and dinner for 25 people. Professional, punctual, and the food was outstanding.', rating: 5 },
        ]}
        title="What Villa Catering Guests Say"
        subtitle="Real reviews from villa groups across Bali."
      />

      {/* ═══════ SECTION 11: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Chapter 10 — FAQ" title="Villa Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 12: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/catering-hero.webp" alt="Villa catering setup with chef and team at Bali villa" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book Villa Catering Bali
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Villa Catering?
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Tell us your villa, group size, and dates. We will confirm chef availability and send a custom quote within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="villa-catering-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all">
              <MessageCircle className="w-4 h-4" /> Request Villa Catering Quote
            </a>
            <a href="tel:+6282237565997" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Call +62 822-3756-5997
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 50% deposit only</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: INTERNAL LINKS ═══════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E6E3]">
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-6 font-semibold">Explore More Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/fine-dining" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Fine Dining</h4>
              <p className="text-xs text-[#4A4745]">7–11 course tasting menus in your villa</p>
            </Link>
            <Link to="/catering/bbq-catering" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">BBQ Catering</h4>
              <p className="text-xs text-[#4A4745]">Live-fire grilling at your villa pool</p>
            </Link>
            <Link to="/events" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Events</h4>
              <p className="text-xs text-[#4A4745]">Weddings, birthdays, corporate events</p>
            </Link>
            <Link to="/contact" className="p-4 bg-[#FAFAF8] rounded-xl hover:bg-[#C5A028]/5 transition-colors">
              <h4 className="font-semibold text-sm mb-1">Contact</h4>
              <p className="text-xs text-[#4A4745]">Speak to our team directly</p>
            </Link>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
    </div>
  )
}
