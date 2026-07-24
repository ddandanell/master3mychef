import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle, Check, Phone, Calendar, Users,
  Utensils, Flame, Wine, Beef, Heart,
  ShieldCheck, BadgeCheck, ArrowRight, Clock, Thermometer,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
  howToSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { Breadcrumb, PressStrip, AllInPrice, GroupTotalCalculator, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'buffet catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'

/* ── DATA ── */

const BUFFET_PACKAGES = [
  {
    title: 'Indonesian Buffet',
    price: 475000,
    description: '3 main dishes, 2 vegetable/side dishes, rice and noodles, 2 salads or cold dishes, sambals, dessert and fruit.',
    includes: ['Chef and kitchen team', 'Buffet equipment', 'Service staff', 'Setup and cleanup', 'Normal groceries included'],
    minGuests: 'Min. 30 guests',
    image: '/generated/mychef-catering-bali-buffet-package-indonesian.webp',
  },
  {
    title: 'International Buffet',
    price: 575000,
    description: '3 premium proteins, pasta or potato dish, 2 salads, vegetables, bread, two desserts.',
    includes: ['Chef and service team', 'Complete buffet setup', 'Service staff', 'Setup and cleanup', 'Normal groceries included'],
    minGuests: 'Min. 30 guests',
    image: '/generated/mychef-catering-bali-buffet-package-international.webp',
  },
  {
    title: 'Premium Live-Station Buffet',
    price: 775000,
    description: 'Two live stations, two prepared main dishes, premium sides and salads, dessert station. A third live station, lobster, imported tenderloin, sushi-grade fish or elaborate decorations are additional upgrades.',
    includes: ['Dedicated station chefs', 'Complete staffing and equipment', 'Service staff', 'Setup and cleanup', 'Normal groceries included'],
    minGuests: 'Min. 30 guests',
    image: '/generated/mychef-catering-bali-buffet-package-premium.webp',
  },
]

const BUFFET_MENU_TYPES = [
  { name: 'Western Buffet', desc: 'Roast meats, grilled fish, pasta, salads, bread rolls, and European-style desserts.' },
  { name: 'Indonesian Buffet', desc: 'Nasi campur, sate, rendang, gado-gado, urap, sambals, and traditional sweets.' },
  { name: 'BBQ Buffet', desc: 'Live-grill station with ribs, prawns, chicken, corn, and BBQ sauces.' },
  { name: 'Asian Fusion', desc: 'Thai, Vietnamese, Japanese, and Chinese dishes mixed with local Balinese flavors.' },
  { name: 'Mediterranean Buffet', desc: 'Grilled seafood, hummus, tabbouleh, falafel, olives, and flatbread.' },
  { name: 'Vegetarian Buffet', desc: 'Plant-based mains, tofu, tempeh, vegetable curries, and fresh salads.' },
  { name: 'Children\'s Buffet', desc: 'Mild flavors, familiar dishes, finger foods, and fun dessert options.' },
  { name: 'Dessert Buffet', desc: 'Cakes, pastries, fresh fruit, chocolate fountain, and Balinese sweets.' },
]

const SETUP_FLOW = [
  { title: 'Buffet Tables', desc: 'Sturdy tables with linens, arranged for smooth guest flow. Multiple access points for large groups.' },
  { title: 'Chafing Dishes', desc: 'Full chafing dish setup with fuel burners. Hot food stays above 60°C throughout service.' },
  { title: 'Serving Staff', desc: '1 server per 12 guests, plus head chef. Staff manage replenishment, clearing, and guest guidance.' },
  { title: 'Menu Signage', desc: 'Clear labels for every dish, including dietary markers (V, GF, NF, spicy).' },
  { title: 'Food Rotation', desc: 'Fresh batches brought out regularly. Nothing sits for more than 45 minutes.' },
  { title: 'Clearing & Cleanup', desc: 'Tables cleared continuously. Full pack-up and kitchen cleanup after service.' },
]

const GUEST_COUNT_PLANNING = [
  { count: '15–30 guests', format: 'Single buffet line, 1 chafing station, compact setup', style: 'Intimate villa dinner, small family gathering' },
  { count: '30–50 guests', format: 'Double-sided buffet, 2 chafing stations, dedicated server', style: 'Birthday party, villa celebration, corporate lunch' },
  { count: '50–100 guests', format: 'Multiple buffet lines, 4+ chafing stations, 4–6 servers', style: 'Wedding reception, large retreat, company event' },
  { count: '100+ guests', format: 'Full catering team, 6+ stations, live cooking, dedicated coordinator', style: 'Large wedding, corporate gala, festival catering' },
]

const FOOD_SAFETY = [
  { icon: Thermometer, title: 'Hot Holding', desc: 'Hot food maintained above 60°C in chafing dishes with proper fuel burners. Regular temperature checks.' },
  { icon: Clock, title: 'Service Timing', desc: 'Food service window of 2.5 hours. Fresh batches replenished every 30–45 minutes. Nothing sits too long.' },
  { icon: ShieldCheck, title: 'Cold Chain', desc: 'Cold items kept on ice or refrigerated until service. Salads, desserts, and seafood handled separately.' },
  { icon: Check, title: 'Staff Supervision', desc: 'Head chef monitors all stations. Service staff trained in food handling and hygiene protocols.' },
]

const BUFFET_STYLING = [
  { title: 'Table Linens', desc: 'Crisp white or themed linens. Skirting hides equipment and creates clean lines.' },
  { title: 'Height & Levels', desc: 'Tiered serving platters, cake stands, and risers create visual interest and easier access.' },
  { title: 'Floral Accents', desc: 'Fresh flowers or greenery between stations. Color-matched to event theme.' },
  { title: 'Menu Cards', desc: 'Printed cards for each dish. Elegant typography, dietary symbols, and brief descriptions.' },
  { title: 'Ambient Lighting', desc: 'Candles, fairy lights, or LED accents for evening events. Safe, flameless options near food.' },
  { title: 'Clean Equipment', desc: 'Polished chafing dishes, matching serving utensils, and spotless tableware throughout service.' },
]

const ADDONS = [
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', desc: 'Professional cocktail station' },
  { title: 'Extra service staff', price: 'Quote based on guests', desc: 'Additional servers as needed' },
  { title: 'Live station upgrade', price: 'Quote based on type', desc: 'Sushi, pasta, carving, dim sum' },
  { title: 'Premium seafood upgrade', price: 'Quote based on menu', desc: 'Lobster, prawns, fresh catch' },
  { title: 'Dessert table upgrade', price: 'Quote based on guests', desc: 'Extended dessert selection' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', desc: 'Depends on area and event size' },
]

const BEST_FOR = [
  { icon: Heart, title: 'Villa Wedding Buffet', desc: 'Elegant garden reception with variety for all guests' },
  { icon: Users, title: 'Corporate Dinner', desc: 'Professional event dining with dietary flexibility' },
  { icon: Flame, title: 'Birthday Celebration', desc: 'Large group with diverse tastes and dietary needs' },
  { icon: Wine, title: 'Retreat Catering', desc: 'Multi-day group meals with consistent quality' },
  { icon: Beef, title: 'Family Gathering', desc: 'Multi-generational dining with familiar options' },
  { icon: Utensils, title: 'Venue Event', desc: 'Event space catering with full setup and service' },
]

const AREA_MINIMUMS = [
  { area: 'Seminyak / Canggu', min: '30 guests', fee: 'No travel fee' },
  { area: 'Berawa / Pererenan', min: '30 guests', fee: 'No travel fee' },
  { area: 'Ubud', min: '40 guests', fee: 'IDR 350,000' },
  { area: 'Uluwatu', min: '50 guests', fee: 'IDR 500,000' },
  { area: 'Nusa Dua', min: 'Quote required', fee: 'Quote required' },
  { area: 'Sanur', min: 'Quote required', fee: 'Quote required' },
  { area: 'Jimbaran', min: 'Quote required', fee: 'Quote required' },
  { area: 'Tanah Lot', min: 'Quote required', fee: 'Travel fee applies' },
]

const GROUP_SIZE_GUIDE = [
  { guests: 30, indonesian: 'IDR 17.24M', international: 'IDR 20.87M', premium: 'IDR 28.12M' },
  { guests: 50, indonesian: 'IDR 28.74M', international: 'IDR 34.78M', premium: 'IDR 46.87M' },
  { guests: 80, indonesian: 'IDR 45.98M', international: 'IDR 55.65M', premium: 'IDR 75.00M' },
  { guests: 120, indonesian: 'IDR 68.97M', international: 'IDR 83.48M', premium: 'IDR 112.50M' },
  { guests: 200, indonesian: 'IDR 114.95M', international: 'IDR 139.13M', premium: 'IDR 187.50M' },
]

const BUFFET_VS_PLATED = [
  { aspect: 'Guest flow', buffet: 'Guests serve themselves at their own pace', plated: 'Courses timed and served by staff' },
  { aspect: 'Best for', buffet: 'Large groups, mixed tastes, casual events', plated: 'Formal dinners, smaller groups, precise timing' },
  { aspect: 'Group size', buffet: '30–200+ guests', plated: '10–60 guests' },
  { aspect: 'Service style', buffet: 'Self-serve with staff assistance', plated: 'Individual courses to each guest' },
  { aspect: 'Setup time', buffet: '2–3 hours before service', plated: '3–4 hours before service' },
  { aspect: 'Staff needed', buffet: '1 per 12 guests + chef', plated: '1 per 8 guests + chef + kitchen team' },
  { aspect: 'Price range', buffet: 'IDR 475K–775K/pp', plated: 'IDR 800K–1.3M/pp' },
  { aspect: 'Dietary flexibility', buffet: 'High — guests choose what they want', plated: 'Medium — pre-selected courses with substitutions' },
]

const FAQS = [
  { q: 'What is the minimum guest count for buffet catering in Bali?', a: 'Minimum 30 guests for all buffet packages. This ensures the food flow, service quality, and setup costs work properly. For smaller groups, consider our BBQ or plated catering options.' },
  { q: 'What does IDR 475,000++ per person include?', a: 'It includes the Indonesian buffet menu, chef and kitchen team, service staff, buffet equipment, serving tables, linens, cutlery, setup, 2.5-hour service and cleanup. Normal groceries are included. Premium upgrades such as lobster or imported tenderloin are quoted separately.' },
  { q: 'What is the difference between ++ and all-in pricing?', a: '++ means the price is subject to 10% government tax and 11% service charge. The all-in figure is the total after those charges. For example, IDR 475,000++ per person becomes approximately IDR 575,000 all-in.' },
  { q: 'Do you bring tables and chafing dishes?', a: 'Yes. All buffet packages include serving tables, linens, full chafing dish setup, cutlery, and serving equipment. You do not need to provide anything.' },
  { q: 'Can you do Indonesian and Western food together?', a: 'Absolutely. Many clients choose a mixed buffet with Indonesian mains and international sides. Our International Buffet package is designed for this.' },
  { q: 'How long is the buffet service?', a: 'Standard service window is 2.5 hours. We set up 2–3 hours before guests arrive and begin cleanup after the last guest is served.' },
  { q: 'Can you combine BBQ and buffet?', a: 'Yes. We can add a live BBQ station to any buffet package. This gives guests the theater of live grilling plus the variety of a full buffet.' },
  { q: 'Do you handle dietary restrictions?', a: 'Yes. We label all dishes with dietary markers (V, GF, NF, spicy) and can prepare vegetarian, vegan, gluten-free, and halal options. Tell us when booking.' },
  { q: 'How many staff do you provide?', a: 'We provide 1 service staff per 12 guests, plus a head chef. For 50 guests, that is 4–5 service staff plus chef. Live stations add dedicated station chefs.' },
  { q: 'Do you clean up after the event?', a: 'Full cleanup is included. We pack up all equipment, clear the buffet area, dispose of waste, and leave your villa or venue as we found it.' },
  { q: 'Do you charge travel fees?', a: 'Travel fees apply outside Seminyak/Canggu: IDR 250,000 to 700,000 depending on distance and event size. Confirmed before deposit.' },
  { q: 'How far in advance should I book?', a: 'We recommend 1–2 weeks for buffet catering. For weddings and large events during peak season, 1+ month is ideal. Last-minute bookings possible depending on availability.' },
  { q: 'Can I add a live station to the Indonesian or International buffet?', a: 'Yes. Live stations such as pasta, carving, sushi or BBQ can be added to any package. They are quoted as an upgrade based on the station type and guest count.' },
  { q: 'Do you cater villa weddings in Bali?', a: 'Yes. Wedding buffet catering is one of our most popular services. We handle Indonesian buffet, international buffet and live-station setups for villa receptions across Bali.' },
  { q: 'Is the food prepared on-site or delivered?', a: 'Most dishes are prepared fresh on-site or finished at your villa kitchen. Large events may use a combination of on-site prep and controlled transport to ensure quality and timing.' },
  { q: 'Do you cater corporate events and retreats?', a: 'Yes. We provide corporate buffet Bali services for team lunches, offsites, product launches and multi-day retreats with reliable timing and dietary flexibility.' },
  { q: 'What happens if guest numbers change after booking?', a: 'Guest counts can usually be adjusted up to 7 days before the event. Final numbers are confirmed 3 days prior so we can order the right amount of food and staff.' },
  { q: 'Do you provide plates, cutlery and napkins?', a: 'Yes. Standard plates, cutlery, napkins and serving utensils are included. Upgraded tableware or themed linens can be arranged on request.' },
  { q: 'Can we taste the menu before the event?', a: 'Complimentary tastings are offered for events of 40 guests or more. You will meet the head chef, sample the proposed dishes and confirm every detail before the big day.' },
  { q: 'Which areas of Bali do you serve?', a: 'We serve Seminyak, Canggu, Berawa, Pererenan, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Tanah Lot and surrounding areas. Travel fees may apply outside the Seminyak/Canggu core.' },
]

export default function CateringBuffetPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.buffet-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.buffet-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Buffet Catering Bali from IDR 475K++ | Villa & Event Buffets — myCHEF"
        description="Buffet catering in Bali from IDR 475,000++ per guest. Indonesian buffet, international buffet & live-station catering for villas, weddings & corporate events. Chef, staff & cleanup included."
        canonical={`${SITE}/catering/buffet`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-buffet.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Buffet Catering Bali',
            description: 'Full-service buffet catering for Bali villas, weddings, retreats, and large private events with Indonesian and international menu options. myCHEF.id brings chefs, service staff, buffet equipment, and cleanup across Bali.',
            url: `${SITE}/catering/buffet`,
            lowPrice: '475000',
            highPrice: '775000',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book Buffet Catering in Bali',
            description: 'Book full-service buffet catering for your Bali villa event in 4 easy steps.',
            totalTime: 'PT20M',
            steps: [
              { name: 'Choose your buffet package', text: 'Select Indonesian Buffet, International Buffet, or Premium Live-Station Buffet based on guest count and style.' },
              { name: 'Share event details', text: 'Send your event date, villa or venue, guest count, and menu preferences via WhatsApp.' },
              { name: 'Receive custom quote', text: 'We confirm setup, staffing, and all-in pricing within the hour. Free tasting included for 40+ guests.' },
              { name: 'Confirm and enjoy', text: '50% deposit secures your date. We arrive 2–3 hours early with tables, chafing dishes, and service staff.' },
            ],
          }),
          cateringBreadcrumbSchema('Buffet Catering Bali', `${SITE}/catering/buffet`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Buffet Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-buffet.webp"
            alt="Elegant buffet setup in a Bali villa garden with chafing dishes and tropical flowers"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Chapter 1 — Buffet Catering Bali
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Buffet Catering Bali for Villas, Weddings & Corporate Events
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-4 max-w-2xl mx-auto">
            Indonesian buffet, international buffet and premium live-station catering for villa events, weddings and corporate groups across Bali.
          </p>
          <p className="text-white/[60%] text-sm mb-10">
            Buffet catering from IDR 475,000++ per guest, including food, chef, service staff, buffet setup and cleanup. Minimum 30 guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-buffet-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <MessageCircle className="w-4 h-4" /> Get Buffet Quote
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              View Buffet Packages
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day WhatsApp reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Tables & chafing dishes included</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Full cleanup after</span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ═══════ SECTION 2: WHY CHOOSE MYCHEF BUFFET CATERING ═══════ */}
      <section className="buffet-content py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 2 — Why Us"
            title="Why Choose myCHEF Buffet Catering"
            subtitle="We deliver full-service buffet catering in Bali with transparent per-guest pricing, experienced chefs and a complete setup that lets you host without lifting a finger."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              { title: 'All-Inclusive Pricing', desc: 'IDR 475,000++ per guest covers food, chef, service staff, buffet equipment, setup and cleanup. No hidden service fees.' },
              { title: 'Michelin-Trained Leadership', desc: 'Every buffet is overseen by chefs with fine-dining and large-event experience across Bali villas and venues.' },
              { title: 'Bali-Wide Coverage', desc: 'From Seminyak and Canggu to Ubud, Uluwatu and Nusa Dua, we travel to villas, beach clubs and event spaces island-wide.' },
              { title: 'Dietary Flexibility', desc: 'Vegetarian, vegan, gluten-free, halal and allergy-aware options are clearly labelled and safely served.' },
              { title: 'Live Stations', desc: 'Add pasta, carving, sushi or BBQ live stations for theater and freshness without slowing the line.' },
              { title: 'Easy WhatsApp Booking', desc: 'Send your date, guest count and villa. We reply with a confirmed quote, usually within the hour.' },
            ].map((item) => (
              <div key={item.title} className="buffet-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1 text-[#C5A028]">{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: BUFFET CATERING IN BALI ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 3 — The Format"
            title="Buffet Catering in Bali"
            subtitle="When the guest count climbs, buffet keeps the villa calm and the food moving. Guests eat at their own pace while our team keeps every station full and tidy."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <p className="text-[#4A4745]">
                For 30+ guests, buffet is often the cleanest format. People move at their own pace. Different diets are easier to cover. Hot dishes stay hot. The line keeps moving.
              </p>
              <p className="text-[#4A4745]">
                You get a head chef, service staff, tables, linens, chafing dishes, cutlery, and clear labels. We build the setup around your villa or venue, then clear it down after the last plate.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Wedding buffet Bali', 'Corporate buffet Bali', 'Villa buffet Bali', 'Retreat catering', 'Birthday celebrations', 'Family gatherings'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[#FAFAF8] rounded-full text-xs text-[#4A4745] border border-[#E8E6E3]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Why Buffet Works for Large Groups</h3>
              <div className="space-y-3">
                {[
                  'Scales from 30 to 200+ guests without losing quality',
                  'Guests choose what they want — no wasted food',
                  'Multiple dietary options visible and accessible',
                  'Service staff focus on flow, not plate-by-plate delivery',
                  'Live stations add theater without slowing service',
                  'Cleanup is centralized and efficient',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: EVENT TYPES WE CATER ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 4 — Occasions"
            title="Event Types We Cater"
            subtitle="Buffet is the right format when you need variety, speed, and scale. Here are the events where it outperforms every other catering style."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {BEST_FOR.map((event) => (
              <div key={event.title} className="buffet-reveal bg-[#FAFAF8] rounded-xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <event.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{event.title}</h3>
                <p className="text-sm text-[#4A4745]">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: BUFFET MENU STYLES ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 5 — The Menu"
            title="Buffet Menu Styles"
            subtitle="Eight buffet directions, each customizable for your group. Mix and match cuisines, or let us design a menu around your event theme."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {BUFFET_MENU_TYPES.map((menu) => (
              <div key={menu.name} className="buffet-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1 text-[#C5A028]">{menu.name}</h3>
                <p className="text-sm text-[#4A4745]">{menu.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catering/bbq-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore BBQ Catering <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/catering/plated-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore Plated Dinners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: SETUP AND SERVICE FLOW ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 6 — Setup"
            title="Setup and Service Flow"
            subtitle="A well-run buffet is invisible. Guests see beautiful food and smooth service. Behind the scenes, our team manages timing, temperature, replenishment, and cleanup with military precision."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {SETUP_FLOW.map((item) => (
              <div key={item.title} className="buffet-reveal bg-[#FAFAF8] rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E6E3]">
            <h3 className="font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Need to Provide</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Flat area for buffet tables (indoor or outdoor)',
                'Access to kitchen or prep space',
                'Electricity for chafing dish burners',
                'Water access for cleanup',
                'Parking or loading access for equipment',
                'Rain backup plan for outdoor setups',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: GUEST COUNT PLANNING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 7 — Planning"
            title="Guest Count Planning"
            subtitle="The buffet setup changes based on group size. Here is how we scale from intimate villa dinners to large wedding receptions."
          />
          <div className="space-y-4 mt-10">
            {GUEST_COUNT_PLANNING.map((row) => (
              <div key={row.count} className="buffet-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-[#C5A028]">{row.count}</h3>
                  <span className="text-sm text-[#4A4745]">{row.style}</span>
                </div>
                <p className="text-sm text-[#4A4745]">{row.format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: FOOD SAFETY AND TIMING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 8 — Safety"
            title="Food Safety and Timing"
            subtitle="For large-group catering, food safety is non-negotiable. Our protocols ensure every dish is safe, fresh, and served at the right temperature."
          />
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {FOOD_SAFETY.map((item) => (
              <div key={item.title} className="buffet-reveal bg-[#FAFAF8] rounded-xl p-5">
                <item.icon className="w-6 h-6 text-[#C5A028] mb-2" />
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-[#4A4745]">
              All staff are trained in food handling and hygiene. We follow HACCP principles for large-event catering in Bali's tropical climate.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: BUFFET STYLING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Chapter 9 — Styling"
                title="Buffet Styling"
                subtitle="A buffet should look clean from the first plate to the last. We style each table to fit the villa, the guest count, and the pace of the event."
              />
              <div className="space-y-3 mt-6">
                {BUFFET_STYLING.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-sm text-[#4A4745]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-catering-bali-buffet-styling.webp"
                alt="Crisp buffet linens, tropical flowers, and polished chafing dishes at a Bali villa"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: PACKAGES + PRICING ═══════ */}
      <section id="packages" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 10 — Packages"
            title="Buffet Catering Packages"
            subtitle="Clear per-guest pricing for Indonesian buffet, international buffet and live-station catering in Bali. Normal groceries are included; premium upgrades are quoted separately. Minimum 30 guests."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {BUFFET_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="buffet-reveal bg-white rounded-2xl border border-[#E8E6E3] overflow-hidden flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <OptimizedImage src={pkg.image} alt={`${pkg.title} catering setup at a Bali villa`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                  <div className="mb-1">
                    <AllInPrice price={pkg.price} />
                  </div>
                  <p className="text-xs text-[#4A4745]/80 mb-4">{pkg.minGuests}</p>
                  <p className="text-sm text-[#4A4745] mb-4">{pkg.description}</p>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                        <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-buffet-cta" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                    <Calendar className="w-4 h-4" /> Request This Buffet
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Volume Pricing */}
          <div className="mt-8 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 max-w-4xl mx-auto">
            <h3 className="font-semibold mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Volume Pricing</h3>
            <p className="text-sm text-[#4A4745] text-center mb-4">Larger groups benefit from economies of scale. Prices below are per person, ++.</p>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-[#1A1A1A]">
                    <th className="pb-3 font-semibold uppercase tracking-normal">Guests</th>
                    <th className="pb-3 font-semibold uppercase tracking-normal">Indonesian</th>
                    <th className="pb-3 font-semibold uppercase tracking-normal">International</th>
                    <th className="pb-3 font-semibold uppercase tracking-normal">Live Station</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">20 – 29</td><td className="py-3">IDR 525,000++</td><td className="py-3">IDR 625,000++</td><td className="py-3">IDR 850,000++</td></tr>
                  <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">30 – 49</td><td className="py-3">IDR 475,000++</td><td className="py-3">IDR 575,000++</td><td className="py-3">IDR 775,000++</td></tr>
                  <tr className="border-b border-[#E8E6E3]"><td className="py-3 font-medium">50 – 99</td><td className="py-3">IDR 450,000++</td><td className="py-3">IDR 550,000++</td><td className="py-3">IDR 750,000++</td></tr>
                  <tr><td className="py-3 font-medium">100+</td><td className="py-3" colSpan={3}>Custom quotation</td></tr>
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-3">
              <div className="flex justify-between text-sm"><span className="font-medium">20 – 29 guests</span><span className="text-[#4A4745]">IDR 525K++ / IDR 625K++ / IDR 850K++</span></div>
              <div className="flex justify-between text-sm"><span className="font-medium">30 – 49 guests</span><span className="text-[#4A4745]">IDR 475K++ / IDR 575K++ / IDR 775K++</span></div>
              <div className="flex justify-between text-sm"><span className="font-medium">50 – 99 guests</span><span className="text-[#4A4745]">IDR 450K++ / IDR 550K++ / IDR 750K++</span></div>
              <div className="flex justify-between text-sm"><span className="font-medium">100+ guests</span><span className="text-[#4A4745]">Custom quotation</span></div>
            </div>
          </div>

          {/* Group Total Calculators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <GroupTotalCalculator pricePerPerson={475000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={575000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
            <GroupTotalCalculator pricePerPerson={775000} minGuests={30} maxGuests={200} defaultGuests={50} accent="#C5A028" />
          </div>
          <TaxFooter className="mt-6" />
        </div>
      </section>

      {/* ═══════ SECTION 11: WHAT IS INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 11 — Inclusions"
            title="What Is Included"
            subtitle="Every buffet catering package in Bali includes the food, team and equipment you need for a stress-free event. Normal groceries are included; only premium upgrades are quoted separately."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              'Head chef and kitchen team',
              'Service staff (1 per 12 guests)',
              'Buffet tables, linens and skirting',
              'Chafing dishes and serving equipment',
              'Cutlery, plates and napkins',
              'Menu labels with dietary markers',
              '2.5-hour standard service window',
              'Full setup before guests arrive',
              'Complete cleanup after service',
              'Normal groceries and ingredients',
              'On-site event coordination',
              'Bali-wide villa and venue travel',
            ].map((item) => (
              <div key={item} className="buffet-reveal bg-white rounded-xl border border-[#E8E6E3] p-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#4A4745]">{item}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-2xl border border-[#E8E6E3] p-6">
            <h3 className="font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Premium upgrades quoted separately</h3>
            <p className="text-sm text-[#4A4745] mb-3">
              Lobster, imported tenderloin, sushi-grade fish, a third live station, elaborate floral or themed decorations, premium bar service, and extended service hours are additional. We quote these clearly before you confirm.
            </p>
            <p className="text-sm text-[#4A4745]">
              Everything else — standard proteins, vegetables, rice, noodles, salads, sambals, dessert, fruit, chef labour, service staff, equipment, setup and cleanup — is covered by the package price.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 12: GROUP SIZE GUIDE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 12 — Investment"
            title="Group Size Guide"
            subtitle="All-in totals include 21% service charge and tax. Final quote confirmed before deposit."
          />
          <div className="hidden md:block overflow-x-auto mt-10 bg-white rounded-2xl border border-[#E8E6E3] p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">Indonesian <span className="text-xs font-normal opacity-70">(475K)</span></th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">International <span className="text-xs font-normal opacity-70">(575K)</span></th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-normal tabular-nums">Live-Station <span className="text-xs font-normal opacity-70">(775K)</span></th>
                </tr>
              </thead>
              <tbody>
                {GROUP_SIZE_GUIDE.map((row) => (
                  <tr key={row.guests} className="border-b border-[#E8E6E3] even:bg-[#FAFAF8] last:border-b-0">
                    <td className="py-5 font-semibold tabular-nums">{row.guests}</td>
                    <td className="py-5 text-[#C5A028] font-medium tabular-nums">{row.indonesian}</td>
                    <td className="py-5 text-[#C5A028] font-medium tabular-nums">{row.international}</td>
                    <td className="py-5 text-[#C5A028] font-medium tabular-nums">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4 mt-10">
            {GROUP_SIZE_GUIDE.map((row) => (
              <div key={row.guests} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-semibold text-base mb-3 tabular-nums">{row.guests} guests</p>
                <div className="divide-y divide-[#E8E6E3]">
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">Indonesian</span><span className="text-[#C5A028] font-semibold tabular-nums">{row.indonesian}</span></div>
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">International</span><span className="text-[#C5A028] font-semibold tabular-nums">{row.international}</span></div>
                  <div className="flex justify-between py-2 text-sm"><span className="text-[#4A4745] text-xs uppercase tracking-wide">Premium</span><span className="text-[#C5A028] font-semibold tabular-nums">{row.premium}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 13 — Add-Ons"
            title="Buffet Add-Ons"
            subtitle="Elevate your buffet with live stations, bartenders, premium seafood, and extended dessert options."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="buffet-reveal bg-[#FAFAF8] rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-1">{addon.title}</h3>
                <p className="text-sm text-[#C5A028] font-semibold mb-1">{addon.price}</p>
                <p className="text-sm text-[#4A4745]">{addon.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/in-villa-service/bartenders" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Hire Bartenders <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="mx-4 text-[#E8E6E3]">|</span>
            <Link to="/in-villa-service/waiters" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Hire Waiters <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 14: BUFFET VS PLATED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 14 — Compare"
            title="Buffet vs Plated Dinner"
            subtitle="Buffet gives flexibility and speed. Plated gives formality and control. Here is how to choose."
          />
          <div className="hidden md:block overflow-x-auto mt-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Aspect</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider text-[#C5A028]">Buffet</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Plated</th>
                </tr>
              </thead>
              <tbody>
                {BUFFET_VS_PLATED.map((row) => (
                  <tr key={row.aspect} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.aspect}</td>
                    <td className="py-4 text-[#C5A028] font-semibold">{row.buffet}</td>
                    <td className="py-4 text-[#4A4745]">{row.plated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4 mt-10">
            {BUFFET_VS_PLATED.map((row) => (
              <div key={row.aspect} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <p className="font-medium mb-3">{row.aspect}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-[#C5A028] font-semibold">Buffet</span><span className="text-[#4A4745]">{row.buffet}</span></div>
                  <div className="flex justify-between"><span className="text-[#4A4745] font-semibold">Plated</span><span className="text-[#4A4745]">{row.plated}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catering/plated-catering" className="inline-flex items-center gap-2 text-sm text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Explore Plated Dinners <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 14: LOCATIONS IN BALI ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Chapter 15 — Coverage"
            title="Locations in Bali"
            subtitle="Buffet catering across all major Bali villa areas. Minimums ensure service quality and logistics work properly."
          />
          <div className="hidden md:block overflow-x-auto mt-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Area</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Minimum Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Travel Fee</th>
                </tr>
              </thead>
              <tbody>
                {AREA_MINIMUMS.map((row) => (
                  <tr key={row.area} className="border-b border-[#E8E6E3]">
                    <td className="py-4 font-medium">{row.area}</td>
                    <td className="py-4">{row.min}</td>
                    <td className="py-4 text-[#4A4745]">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3 mt-10">
            {AREA_MINIMUMS.map((row) => (
              <div key={row.area} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{row.area}</span>
                  <span className="text-sm text-[#C5A028] font-semibold">{row.min}</span>
                </div>
                <p className="text-xs text-[#4A4745]">{row.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 16: PRE-EVENT TASTING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A028]/10 text-[#C5A028] text-sm font-semibold mb-6">
            <BadgeCheck className="w-4 h-4" />
            Free tasting at 40+ guests
          </div>
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Pre-Event Tasting Promise</h2>
          <p className="text-[#4A4745] mb-6">
            For groups of 40 guests or more, we offer a complimentary pre-event tasting session. You will sample the proposed menu, meet the head chef, and confirm every detail before the big day. No surprises. No guesswork.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Menu preview', 'Chef meet-and-greet', 'Dietary adjustments', 'Portion confirmation', 'Service timing walkthrough'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 17: TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Sarah & James', location: 'Seminyak Villa Wedding', quote: 'The Indonesian buffet for 80 guests was incredible. The sate lilit and nasi kuning were authentic and delicious. The live pasta station was a huge hit.', rating: 5 },
          { name: 'The Chen Family', location: 'Canggu Villa', quote: 'We booked the International buffet for our parents\' anniversary with 45 guests. The setup was beautiful and the service team was impeccable.', rating: 5 },
          { name: 'Emma R.', location: 'Uluwatu Wedding', quote: 'Premium live-station buffet for 120 guests at our wedding reception. The carving and pasta stations kept everyone happy. Beautiful styling too.', rating: 5 },
        ]}
        title="What Buffet Guests Say"
        subtitle="Real reviews from villa buffet events across Bali."
      />

      {/* ═══════ SECTION 18: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader eyebrow="Chapter 18 — FAQ" title="Buffet Catering FAQ" />
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 19: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/mychef-catering-bali-buffet-final.webp" alt="Completed buffet dinner at a Bali villa poolside at dusk" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Book Buffet Catering Bali
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Buffet Catering?
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, villa or venue, guest count, and menu style. We confirm setup, staffing, and price on WhatsApp within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-buffet-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              <MessageCircle className="w-4 h-4" /> Get Buffet Quote
            </a>
            <a href="tel:+6289674072020" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Phone className="w-4 h-4" /> Call +62 896-7407-2020
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/[50%] text-xs">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> Same-day reply</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> 50% deposit only</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#C5A028]" /> No hidden fees</span>
          </div>
        </div>
      </section>

      <StaffingInfo />
      <BookingProcess />

      <CateringDiscoverySection page="buffet" />

      <TaxFooter className="py-6" />

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'BBQ Catering', href: '/catering/bbq-catering', desc: 'Live-fire grilling at your villa.' },
              { label: 'Plated Dinners', href: '/catering/plated-catering', desc: 'Formal course service.' },
              { label: 'Grazing Tables', href: '/catering/grazing-tables', desc: 'Styled spreads for events.' },
              { label: 'Drop-Off Catering', href: '/catering/drop-off-catering', desc: 'Fresh food delivered to your villa.' },
              { label: 'Villa Chef', href: '/villa-chef', desc: 'Daily chef for your villa stay.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="catering-buffet"
        serviceName="buffet catering in Bali"
        intent="buffet packages and pricing"
      />
    </div>
  )
}