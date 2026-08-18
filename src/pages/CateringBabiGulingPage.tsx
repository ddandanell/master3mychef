import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, Calendar, Users, MapPin, Utensils, Flame, Heart, Truck, ShieldCheck, Sparkles, Package, CreditCard, ChefHat, ArrowRight } from 'lucide-react'
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
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import BabiGulingPricing from '@/components/catering/BabiGulingPricing'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { ArticleContentSection, Breadcrumb, PressStrip, CateringDiscoverySection } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'Babi Guling catering in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'

const BEST_FOR = [
  { icon: Heart, title: 'Villa parties', desc: 'Celebrate with tradition' },
  { icon: Utensils, title: 'Birthdays', desc: 'Local culinary experience' },
  { icon: Users, title: 'Wedding recovery lunches', desc: 'Casual post-wedding feast' },
  { icon: Heart, title: 'Family gatherings', desc: 'Multi-generational dining' },
  { icon: Flame, title: 'Indonesian-themed dinners', desc: 'Authentic Balinese night' },
  { icon: ShieldCheck, title: 'Corporate cultural events', desc: 'Team cultural dinner' },
  { icon: Sparkles, title: 'Large poolside parties', desc: 'Festive villa celebration' },
  { icon: Truck, title: 'Group holiday dinners', desc: 'Shared cultural meal' },
]

const INCLUDED = [
  'Whole roasted pig', 'Balinese side dishes', 'Lawar', 'Nasi kuning',
  'Sate lilit', 'Sambals', 'Dessert', 'Fresh fruit', 'Serving setup',
  'Delivery or event coordination',
]

const MENU_ITEMS = [
  { name: 'Whole roasted suckling pig', desc: 'Crispy skin, tender meat, Balinese spice stuffing' },
  { name: 'Lawar', desc: 'Traditional Balinese salad with coconut and spices' },
  { name: 'Nasi kuning', desc: 'Fragrant turmeric rice' },
  { name: 'Sate lilit', desc: 'Minced meat satay on lemongrass skewers' },
  { name: 'Sambal matah', desc: 'Raw shallot and lemongrass chilli relish' },
  { name: 'Urap', desc: 'Steamed vegetables with spiced grated coconut' },
  { name: 'Kuah Balung', desc: 'Rich pork bone soup (medium & large)' },
  { name: 'Tropical dessert', desc: 'Balinese sweets and fresh seasonal fruit' },
]

const ADDONS = [
  { title: 'Extra sides', price: 'Quote based on guests', description: 'Additional rice, vegetables, sambals' },
  { title: 'Additional sate', price: 'Quote based on quantity', description: 'Extra sate skewers' },
  { title: 'Service staff', price: 'Quote based on group', description: 'Staff to serve and carve' },
  { title: 'Bonfire setup', price: 'Selected locations', description: 'Evening villa garden fire' },
  { title: 'Cocktail packages', price: 'From IDR 500,000++/guest', description: 'Complete bar team package (min 10)' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', description: 'Depends on area and event size' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose package', desc: 'Small, medium, or large.', icon: Package },
  { step: '02', title: 'Send details', desc: 'Date, area, guest count.', icon: Calendar },
  { step: '03', title: 'Confirm menu', desc: 'Pork-based menu accepted.', icon: Utensils },
  { step: '04', title: 'Confirm setup', desc: 'Delivery or service setup.', icon: Truck },
  { step: '05', title: 'Pay deposit', desc: '50% to confirm booking.', icon: CreditCard },
  { step: '06', title: 'We prepare', desc: 'Whole-pig prep and timing.', icon: ChefHat },
  { step: '07', title: 'Food served', desc: 'Delivered or served at event.', icon: Sparkles },
]

const AREA_CLUSTERS = [
  {
    region: 'Canggu & the west coast',
    areas: ['Canggu', 'Berawa', 'Pererenan', 'Kerobokan', 'Tanah Lot'],
    note: 'Our densest coverage area and the shortest run from base. Large private villas with gardens are common here, which is where on-site roasting works best.',
  },
  {
    region: 'Seminyak, Kuta & Legian',
    areas: ['Seminyak', 'Kuta', 'Legian'],
    note: 'Well within standard coverage. Villas here sit closer together, so we confirm setup space and any noise or timing rules with your villa manager before the roast is scheduled.',
  },
  {
    region: 'Ubud & central Bali',
    areas: ['Ubud'],
    note: 'Standard coverage. Access roads to valley and ridge villas can be narrow, so we confirm vehicle access and unloading points at quoting stage rather than on the day.',
  },
  {
    region: 'The Bukit peninsula',
    areas: ['Uluwatu', 'Jimbaran', 'Nusa Dua'],
    note: 'Standard coverage across the peninsula. Resort-managed and estate villas more often have their own rules on open flame and outside caterers, so we check those in writing before confirming an on-site roast.',
  },
  {
    region: 'Sanur & Denpasar',
    areas: ['Sanur', 'Denpasar'],
    note: 'Standard coverage, including private homes and office or corporate venues as well as villas.',
  },
]

const AREA_VARIABLES = [
  { title: 'Can the pig be roasted on site?', desc: 'Depends on whether your villa permits open flame and whether there is a garden, terrace or open area for the setup. Where it is not permitted, we roast at our facility and finish and carve at your event.' },
  { title: 'Travel cost', desc: 'Delivery and setup are included across the coverage areas above. Out-of-area events are quoted individually, with travel running IDR 250,000–700,000 depending on distance, timing and event size — always quoted upfront.' },
  { title: 'Access and unloading', desc: 'A whole roast, serving equipment and staff all have to reach the property. We check vehicle access and the unloading point when we quote, not when we arrive.' },
]

const BABI_GULING_GALLERY = [
  '/generated/mychef-catering-bali-hero-babiguling-new.webp',
  '/generated/mychef-catering-bali-pkg-roast-new.webp',
  '/generated/mychef-catering-bali-hub-catering-new.webp',
  '/generated/mychef-catering-bali-hero-buffet-catering-new.webp',
  '/generated/mychef-catering-bali-pkg-roast-new.webp',
  '/generated/mychef-catering-bali-event-wedding-new.webp',
]

const FAQS = [
  // ── Cost & group size ──
  { q: "How much does babi guling catering cost in Bali?", a: "Babi guling catering is priced per person and scales down as the group grows: IDR 650,000 for 6–15 guests, IDR 600,000 for 16–30, IDR 550,000 for 31–50, and IDR 525,000 for 51–100. Above 100 guests we prepare a custom quote. The minimum total is IDR 3,900,000 (6 guests × IDR 650,000). All prices are ++ (11% government tax + 10% service charge)." },
  { q: "How much is babi guling for 20 guests?", a: "Twenty guests fall in the 16–30 tier at IDR 600,000 per person, so roughly IDR 12,000,000 before ++ (11% government tax + 10% service charge). That covers the whole roasted pig, the full accompaniment spread, serving setup, delivery or on-site service, and cleanup." },
  { q: "How much is babi guling for 30 guests?", a: "Thirty guests sit at the top of the 16–30 tier at IDR 600,000 per person — about IDR 18,000,000 before ++. Adding one more guest moves you into the 31–50 tier at IDR 550,000 per person, so groups near the boundary are often better off rounding up." },
  { q: "How much is babi guling for 50 guests?", a: "Fifty guests fall in the 31–50 tier at IDR 550,000 per person — approximately IDR 27,500,000 before ++. At this size we typically staff one chef and five assistants, and a carving station works better than a single whole-pig display." },
  { q: "What is the minimum group size for babi guling?", a: "Six guests, with a minimum total of IDR 3,900,000. The format is at its best between 15 and 50 guests, but a smaller feast is absolutely possible — the per-person rate is simply higher." },
  { q: "What is the largest group you can cater babi guling for?", a: "We quote babi guling for groups well beyond 100 guests, including multi-pig setups for large celebrations. Above 100 guests pricing moves to a custom quote with a dedicated brigade plan, because roasting time, carving stations and service staffing all have to be scaled together." },
  { q: "Is travel or delivery included in the price?", a: "Delivery and serving setup are included across our standard coverage area in South Bali and Ubud. Out-of-area travel runs IDR 250,000–700,000 depending on the area, timing and event size, and is always quoted upfront rather than added later." },
  { q: "Do you provide serving staff?", a: "Yes. Staffing scales with the group — roughly one chef per 50 guests and one assistant per 10 guests. Staff handle carving, the buffet or serving station, and cleanup. You can also add complete cocktail packages from IDR 500,000++ per guest (min 10)." },

  // ── What it is ──
  { q: "What is babi guling?", a: "Babi guling is Bali's traditional whole roasted suckling pig — hand-stuffed with basa gede spice paste and slow-roasted over charcoal until the skin turns glassy and crisp. It is the island's great ceremonial and celebration dish, served at weddings, temple festivals and family milestones alongside lawar, nasi kuning, sate lilit and sambal matah." },
  { q: "What does babi guling taste like?", a: "The defining contrast is texture: shatteringly crisp skin against meat that has gone soft and falls apart after six to eight hours over charcoal. The flavour is aromatic rather than sweet or smoky — turmeric, galangal, lemongrass, garlic and shallot from the basa gede paste perfume the meat from the inside out. The accompaniments cut through it: sharp sambal matah, coconut-rich lawar, fragrant turmeric rice." },
  { q: "Is babi guling spicy?", a: "The pig itself is aromatic rather than hot — the basa gede paste is built on turmeric, galangal, lemongrass, garlic, shallot and candlenut, with chilli as one element among many. Most of the heat lives in the sambals, which are served alongside rather than mixed through, so each guest controls their own spice level. This is why the dish works for mixed groups and for children." },
  { q: "What spices are used in babi guling?", a: "The pig is filled with basa gede, the complete Balinese spice paste: shallots, garlic, ginger, turmeric, galangal, lemongrass, chillies and candlenut. It is a wet paste, hand-made, and it seasons the meat from the cavity outward during the long roast." },
  { q: "How long does babi guling take to cook?", a: "Six to eight hours over charcoal, turned by hand the traditional way. That roasting window is the main reason we ask for 5–7 days' notice — the pig has to be sourced, prepped and stuffed before the roast can even begin." },
  { q: "Why is babi guling famous in Bali?", a: "Because it is the dish Bali reserves for its most important moments. Babi guling has anchored Balinese ceremonies for centuries as a symbol of abundance and hospitality, which is also why it sits outside everyday Indonesian cooking — it is celebration food, prepared communally, and traditionally shared." },
  { q: "Is the skin really crispy?", a: "Yes — the crisp skin is the point of the dish, and it is the first thing that suffers if a pig is roasted too early or transported badly. Where villa rules allow, we roast on site so the skin comes off the fire close to service. Where open flame isn't permitted, we roast at our facility and finish and carve at your event to protect the crackling." },
  { q: "Is the food freshly cooked?", a: "Every roast is cooked for your event on the day — babi guling is not something we hold or reheat. The pig is sourced and prepped after your booking is confirmed, which is why lead time matters." },

  // ── What comes with it ──
  { q: "What side dishes come with babi guling?", a: "A babi guling booking is a complete Balinese spread, not just a plate of pork. It includes lawar (a coconut-and-spice salad), nasi kuning (fragrant turmeric rice), sate lilit (minced satay on lemongrass skewers), sambal matah, urap (steamed vegetables with spiced coconut), kuah balung pork-bone soup on medium and large packages, plus Balinese sweets and fresh seasonal fruit." },
  { q: "Is rice included?", a: "Yes — nasi kuning, fragrant turmeric rice, is included in every package, along with the full accompaniment spread, serving setup and cleanup. Extra rice and additional sides can be added and are quoted on guest numbers." },
  { q: "Can I customise the menu?", a: "Yes. The whole roast and core Balinese spread stay fixed, but you can extend the table with a grilled seafood station, extra sate, a full Indonesian buffet, vegetarian dishes, a dessert table, or an arak-cocktail bar. Tell us the group and we will shape the spread around it." },
  { q: "Can you provide vegetarian dishes as well?", a: "Yes — gado-gado, urap, tempeh dishes and vegetable sides can be served alongside the main spread, with separate serving areas so they stay genuinely separate from the pork." },
  { q: "Can children eat babi guling?", a: "It suits children well. The meat is tender and mildly spiced, and because the sambals are served on the side rather than mixed through, heat is entirely optional. Rice, urap and fruit round out the plate for younger guests." },
  { q: "What happens to the leftovers?", a: "They're yours. We pack everything with storage and reheating notes — babi guling fried rice the next morning is a Bali tradition in its own right." },

  // ── Dietary ──
  { q: "Is babi guling halal?", a: "No. Babi guling is a pork dish, cooked traditionally, and it is not halal. We are upfront about this because it matters. For mixed groups we serve separate non-pork dishes with separate serving areas; for fully halal events we will honestly steer you to our Indonesian BBQ, buffet catering, or an ayam betutu menu instead." },
  { q: "Do you offer pork-free catering in Bali?", a: "Yes. If some or all of your group doesn't eat pork, we can build the event around Indonesian BBQ, buffet catering, grilled seafood, chicken satay or ayam betutu — no roast pig involved. For mixed groups we run pork and non-pork spreads side by side with separate serving areas, boards and utensils." },

  // ── Booking & logistics ──
  { q: "Do you roast the pig at our villa?", a: "Where space and villa rules allow, yes — the roast itself is part of the spectacle, and it gives the best crackling. The setup needs a garden, terrace or open villa area, and we assess your layout when quoting. Where open fire isn't permitted, we roast at our facility and finish, carve and serve at your event." },
  { q: "Can you cook babi guling at a private home or Airbnb?", a: "Yes — this is a full home service covering private homes, villas, offices and event venues across Bali. The requirements are the same everywhere: somewhere to set up, clarity on whether open flame is allowed, and enough lead time." },
  { q: "How far ahead must I book, and what is the deposit?", a: "At least 5–7 days ahead so the whole pig can be sourced and prepped, and more in peak season. A 50% deposit confirms your date. Cancellations 14 or more days before the event receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable — see our cancellation policy." },
  { q: "Which areas of Bali do you cover?", a: "We cover Canggu, Berawa, Pererenan, Seminyak, Kerobokan, Kuta, Legian, Denpasar, Sanur, Ubud, Uluwatu, Jimbaran, Nusa Dua and Tanah Lot as standard. Out-of-area events are quoted individually with travel of IDR 250,000–700,000 depending on distance and event size." },
]

export default function CateringBabiGulingPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bg-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bg-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Babi Guling Catering Bali | Whole-Pig Roast at Your Villa"
        description="Babi guling catering Bali: traditional whole-pig roast cooked & carved at your villa. 6–100+ guests, IDR 525K–650K per person ++. Pork-free options too."
        canonical={`${SITE}/catering/babi-guling`}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-babiguling-new.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Babi Guling Catering Bali — Whole-Pig Roast Home Service',
            description: 'Traditional Balinese whole-pig roast (babi guling) cooked and carved at your villa, home or event for 6–50+ guests, with full accompaniment spread. Halal alternatives for mixed groups.',
            url: `${SITE}/catering/babi-guling`,
            lowPrice: '525000',
            highPrice: '650000',
            unitText: 'per person ++ (11% government tax + 10% service charge), tiered by group size; minimum total from IDR 3,900,000; min. 6 guests',
          }),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book Babi Guling Catering in Bali',
            description: 'Order authentic Balinese Babi Guling catering for your villa event in 4 easy steps.',
            totalTime: 'PT15M',
            steps: [
              { name: 'Choose your Babi Guling size', text: 'Select your guest count. Pricing starts at IDR 650,000 per person for 6–15 guests and scales down for larger groups.' },
              { name: 'Share event details', text: 'Send your villa location, event date, guest count, and any side dish preferences via WhatsApp.' },
              { name: 'Confirm your quote', text: 'We confirm the whole roast, side dishes, sambal, and delivery timing within 1 hour.' },
              { name: 'Chef delivers and carves', text: 'The chef arrives with the whole roasted pig, carves at your villa, and serves with traditional sides.' },
            ],
          }),
          cateringBreadcrumbSchema('Babi Guling Catering Bali', `${SITE}/catering/babi-guling`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Babi Guling Catering Bali' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-babiguling-new.webp"
            alt="Traditional Balinese Babi Guling whole-pig catering setup with crispy skin, rice, sambal, and lawar for a villa party in Bali"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Traditional Balinese
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Babi Guling Catering Bali — The Island's Celebration Roast, at Your Villa
          </h1>
          <p className="text-lg md:text-xl text-white/[80%] mb-4 max-w-2xl mx-auto">
            A whole pig stuffed with basa gede spices, slow-roasted over charcoal for six to eight hours, and carved at your villa with lawar, nasi kuning, sate lilit, and sambal matah.
          </p>
          <p className="text-white/[70%] text-base mb-8">
            From IDR 3,900,000 total · 6–50+ guests · Cooked, carved & served at your venue
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-babi-guling-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Flame className="w-4 h-4" /> Book the Feast
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              See Pricing
            </a>
          </div>
          <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3 max-w-md mx-auto flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <p className="text-xs text-amber-800">
              <strong>Babi guling is a pork dish</strong> and not suitable for halal groups. Non-pork alternatives are available for mixed groups — see below.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ SECTION 1 — WHAT IS BABI GULING? ═══════ */}
      <section className="bg-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Authentic Balinese Cuisine"
                title="What Is Babi Guling?"
                subtitle="Bali's great celebration dish — brought to your home, villa, or event as a full home service."
              />
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                Babi guling — Bali's whole roasted suckling pig — has anchored Balinese ceremonies for centuries. It's served at weddings, temple festivals, and family milestones as a symbol of abundance and hospitality: a whole pig, hand-stuffed with spices, turned slowly over fire until the skin turns glassy and crisp.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                For visitors, it's the most genuinely Balinese meal there is — and until now, finding it meant queuing at a warung. Our home service brings the full traditional roast to your villa, cooked and carved on site by Balinese cooks who have prepared it for ceremonies their whole lives.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                It's worth understanding what separates babi guling from a Western pig roast or a hog roast. A hog roast is essentially meat and fire. Babi guling is a <strong>seasoned</strong> dish: the cavity is packed with a wet, hand-ground spice paste called <em>basa gede</em>, and the pig cooks from the inside out as much as from the outside in. That is why the meat tastes of turmeric, galangal and lemongrass all the way through, and why the dish belongs to Balinese cuisine specifically rather than to Indonesian cuisine generally.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                It is also, traditionally, <strong>ceremonial food</strong> — prepared communally for weddings, temple odalan festivals, tooth-filing ceremonies and other milestones, then shared. That communal character is exactly why it translates so well to a villa: it is a dish designed to be carved in front of people and eaten together, not plated in a kitchen and carried out.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/generated/mychef-catering-bali-pkg-roast-new.webp"
                alt="Chef carving traditional Babi Guling with Balinese sides at a villa event"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1b — THE ROAST: HOW WE DO IT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Technique"
            title="The Roast: How We Do It"
            subtitle="Warung soul, event professionalism — traditional cooks plus our event team handling timing, villa access, setup, and cleanup."
          />
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Basa gede stuffing', desc: 'The pig is filled with the complete Balinese spice paste: shallots, garlic, ginger, turmeric, galangal, lemongrass, chillies, and candlenut.' },
              { title: 'Six to eight hours over charcoal', desc: 'Turned by hand, the traditional way, until the skin is crisp and the meat falls apart.' },
              { title: 'Carved at your event', desc: 'Choose a whole-pig display carving, a staffed carving station, or a relaxed buffet/family-style spread.' },
              { title: 'Full event handling', desc: 'Traditional cooks plus our event team managing timing, villa access, setup, and cleanup.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1c — WHAT IT TASTES LIKE ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Flavour"
            title="What Babi Guling Tastes Like — and How Spicy It Really Is"
            subtitle="The two questions guests ask before they commit: what am I actually eating, and can everyone at the table handle it?"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">The texture is the whole point</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                Crisp skin against meat that falls apart. After six to eight hours over charcoal the crackling turns glassy and shatters when it's cut, while the meat underneath has gone soft enough to pull with a spoon. Get one without the other and it isn't babi guling — which is why roasting timing and how close the roast finishes to service matter more than almost anything else on the day.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">Aromatic, not smoky or sweet</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                People often expect something like American barbecue. It isn't. There is no sweet glaze and very little smoke flavour. What you taste is the handmade spice paste working through the meat — turmeric and galangal up front, lemongrass and garlic behind it, with a warm background from candlenut and shallot.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">The heat is optional</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                Chilli is one element in the paste, not the point of it, so the pig itself is mild. The real heat lives in the sambals — sambal matah especially — and those are served alongside rather than mixed through. Every guest builds their own plate and sets their own spice level, which is why the dish works for families, children and mixed-tolerance groups without any special ordering.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">The sides do real work</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                Rich roast pork needs contrast, and the traditional accompaniments are built to provide it: lawar brings coconut and herbs, sambal matah brings raw shallot and lime sharpness, urap brings freshness, and nasi kuning carries everything. Ordering the roast without the spread is the most common way people get babi guling wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 1d — HOW MUCH DO YOU NEED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Sizing"
            title="How Much Babi Guling Do You Need?"
            subtitle="Babi guling is priced per person and the roast is sized to your group — so the number that matters is your headcount, not how many pigs."
          />
          <div className="mt-10 space-y-4">
            {[
              { title: '6–15 guests · IDR 650,000 per person', desc: 'A small feast, and the tier where per-person cost is highest. Usually a whole-pig display and a relaxed family-style spread. Minimum booking is 6 guests / IDR 3,900,000 total.' },
              { title: '16–30 guests · IDR 600,000 per person', desc: 'The most common villa-party size. A carving station starts to make sense here, and one chef with two to three assistants keeps service moving.' },
              { title: '31–50 guests · IDR 550,000 per person', desc: 'Big-celebration territory. A staffed carving station and a buffet line run in parallel so guests are not queuing at a single point.' },
              { title: '51–100 guests · IDR 525,000 per person', desc: 'The lowest per-person rate. Roasting, carving and serving all need to be scaled together, so we plan the brigade around your timings. At this size — or for anything with amplified music — some villages levy a function fee on private events. It is not ours and we never mark it up; we simply tell you if it applies.' },
              { title: '100+ guests · Custom quote', desc: 'Multi-pig setups with a dedicated brigade plan. We quote these individually because roast timing, carving stations and staffing all move together at this scale.' },
            ].map((tier) => (
              <div key={tier.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1">{tier.title}</h3>
                <p className="text-sm text-[#4A4745]">{tier.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5">
            <h3 className="font-semibold text-sm mb-2">One thing worth knowing before you count heads</h3>
            <p className="text-sm text-[#4A4745] leading-relaxed">
              The tiers are stepped, so a group sitting just below a boundary can pay more in total than a slightly larger group. Thirty guests at IDR 600,000 comes to IDR 18,000,000; thirty-one guests at IDR 550,000 comes to IDR 17,050,000 — a larger party for less money. If your numbers are near 15, 30 or 50, tell us and we will show you both sides before you commit. All figures are ++ (11% government tax + 10% service charge).
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2 — BEST EVENTS FOR BABI GULING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Occasions"
            title="Best Events for Babi Guling"
            subtitle="Babi guling works best when the group wants something social, shareable, and unmistakably local."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BEST_FOR.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — WHAT IS INCLUDED ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Inclusions"
            title="What's Included in Every Package"
            subtitle="Every Babi Guling package includes the whole roasted pig, the full accompaniment spread, serving setup, delivery or on-site service, and cleanup."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028]" />
                <span className="text-[#4A4745] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Truck className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Delivery or Setup</h4>
              <p className="text-xs text-[#4A4745] mt-1">We bring the food to your villa with full serving setup.</p>
            </div>
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Users className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Optional Staff</h4>
              <p className="text-xs text-[#4A4745] mt-1">Add servers and carvers to manage the buffet table.</p>
            </div>
            <div className="text-center p-5 bg-white rounded-xl border border-[#E8E6E3]">
              <Utensils className="w-6 h-6 text-[#C5A028] mx-auto mb-2" />
              <h4 className="font-medium text-sm">Plates & Cutlery</h4>
              <p className="text-xs text-[#4A4745] mt-1">Disposable or reusable tableware included on request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — TRADITIONAL BALINESE MENU ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="The Menu"
            title="The Full Feast"
            subtitle="A babi guling booking is a complete Balinese spread, not just a plate of pork."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {MENU_ITEMS.map((item) => (
              <div key={item.name} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E6E3]">
                <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-[#1A1A1A]">{item.name}</p>
                  <p className="text-xs text-[#4A4745]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#4A4745] mt-8 max-w-3xl mx-auto text-center">
            Popular pairings: a grilled seafood station, chicken satay for non-pork eaters, an arak-cocktail bar, or a full Indonesian buffet extension. Go further with <Link to="/blog/indonesian-street-food-private-chef-bali" className="text-[#C5A028] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">Indonesian street food menus, cooked in your villa</Link>.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 5 — PORK-FREE, HALAL & MIXED GROUPS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pork-Free Catering, Halal Guests & Mixed Groups
            </h2>
            <p className="text-[#4A4745] max-w-2xl mx-auto">
              We're upfront because it matters: <strong>babi guling is pork, cooked traditionally, and it is not halal.</strong> If that rules it out for some or all of your group, say so early — we cater plenty of events in Bali with no pork on the table at all.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">Fully pork-free events</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                No roast pig at all. We build the event around Indonesian BBQ, buffet catering, grilled seafood, chicken satay or ayam betutu — the same celebration feel, the same Balinese and Indonesian flavours, without pork anywhere in the menu.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">Mixed groups, run in parallel</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                The most common situation: some guests eat pork, some don't. We run the babi guling spread and a full non-pork spread side by side, with separate serving areas, separate boards and separate utensils, so nobody has to inspect a buffet before eating.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">Vegetarian and vegan guests</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed">
                Gado-gado, urap, tempeh and vegetable dishes are served on their own station rather than as an afterthought beside the roast. Tell us the numbers when you book and we scale the vegetarian side properly.
              </p>
            </div>
          </div>

          <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 mb-8">
            <h3 className="font-semibold text-base mb-2">A note on the word "halal"</h3>
            <p className="text-sm text-[#4A4745] leading-relaxed">
              Pork-free and certified halal are not the same thing, and we won't blur them. We can reliably serve an event with no pork present. If your event requires formally certified halal catering — certified supply chain, certified kitchen — tell us at enquiry stage and we will be straight with you about what we can and cannot document, rather than letting you find out on the day.
            </p>
          </div>

          <p className="text-sm text-[#4A4745] text-center mb-6">
            Where to go instead if pork is off the table:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/catering/bbq-catering" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Indonesian BBQ
            </Link>
            <Link to="/catering/buffet" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              buffet catering
            </Link>
            <Link to="/catering/drop-off-catering" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Drop-Off Catering
            </Link>
            <Link to="/catering/grazing-tables" className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#C5A028] hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded">
              Grazing Tables
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5b — BABI GULING VS OTHER FORMATS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Choosing"
            title="Babi Guling, BBQ or Buffet — Which Suits Your Event?"
            subtitle="Three different jobs. Picking the wrong one is the most common catering mistake we see in Bali."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">Choose babi guling when…</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed mb-3">
                You want the event to feel unmistakably Balinese and you want a centrepiece moment. The whole pig arriving and being carved in front of guests is theatre, and it anchors the evening. Best for cultural dinners, milestone birthdays, group holidays and anyone who wants their guests talking about the food afterwards.
              </p>
              <p className="text-xs text-[#4A4745]">Needs: pork-eating group, 5–7 days' notice, roasting space or off-site finish.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">Choose Indonesian BBQ when…</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed mb-3">
                You want live cooking and variety rather than one centrepiece, or your group includes guests who don't eat pork. Seafood, satay and skewers cook to order, so service is continuous rather than built around a single carving moment.
              </p>
              <Link to="/catering/bbq-catering" className="text-[#C5A028] text-sm hover:underline">Indonesian BBQ catering →</Link>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6">
              <h3 className="font-semibold text-base mb-2">Choose a buffet when…</h3>
              <p className="text-sm text-[#4A4745] leading-relaxed mb-3">
                The group is large, the dietary requirements are varied, and breadth of choice matters more than spectacle. A buffet feeds a mixed crowd predictably and scales further than a single roast without complicating service.
              </p>
              <Link to="/catering/buffet" className="text-[#C5A028] text-sm hover:underline">Buffet catering →</Link>
            </div>
          </div>
          <p className="text-sm text-[#4A4745] mt-8 text-center max-w-2xl mx-auto">
            They aren't mutually exclusive. Plenty of larger events run a babi guling centrepiece with a BBQ station or buffet extension alongside it — see <Link to="/catering" className="text-[#C5A028] hover:underline">all catering formats</Link> if you're still deciding.
          </p>
        </div>
      </section>

      {/* ═══════ SECTION 6 — LIVE CARVING OR BUFFET STYLE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Serving Styles"
            title="Live Carving or Buffet Style"
            subtitle="Choose how the Babi Guling is presented at your event."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 text-center">
              <ChefHat className="w-8 h-8 text-[#C5A028] mx-auto mb-3" />
              <h3 className="font-medium text-[#1A1A1A] mb-2">Whole Pig Display</h3>
              <p className="text-sm text-[#4A4745]">The roasted pig arrives whole and is presented at your event before carving. A dramatic centerpiece for villa parties and cultural dinners.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 text-center">
              <Utensils className="w-8 h-8 text-[#C5A028] mx-auto mb-3" />
              <h3 className="font-medium text-[#1A1A1A] mb-2">Carved Service</h3>
              <p className="text-sm text-[#4A4745]">Our staff carve the pig at a serving station and plate portions for guests. Ideal for sit-down dinners and more formal events.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 text-center">
              <Users className="w-8 h-8 text-[#C5A028] mx-auto mb-3" />
              <h3 className="font-medium text-[#1A1A1A] mb-2">Buffet or Family Style</h3>
              <p className="text-sm text-[#4A4745]">Guests serve themselves from a buffet table with all sides, sambals, and accompaniments. Perfect for casual villa gatherings and poolside parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6b — LOGISTICS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionHeader
            eyebrow="Planning"
            title="Logistics: Space, Fire & Lead Time"
            subtitle="Whole-pig roasting needs a little planning. Here's what to expect."
          />
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Space', desc: 'A garden, terrace, or open villa area for the roasting setup; we assess your layout when quoting.' },
              { title: 'Fire rules', desc: 'Roasting uses charcoal; where villas restrict open fire, we roast off-site and finish/carve at your event.' },
              { title: 'Lead time', desc: 'Whole-pig sourcing and prep need notice — book at least 5–7 days ahead (more in peak season).' },
              { title: 'Villa coordination', desc: 'We handle access, timing, and house rules with your villa manager.' },
              { title: 'Travel', desc: 'We serve all of South Bali and Ubud; out-of-area travel runs IDR 250K–700K, quoted upfront.' },
              { title: 'Leftovers', desc: "They're yours. We pack everything with storage and reheating notes — babi guling fried rice the next morning is a Bali tradition of its own." },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7 — LOCAL EXPERIENCE, PROFESSIONAL HANDLING ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden order-2 md:order-1">
              <img
                src="/generated/mychef-catering-bali-hub-catering-new.webp"
                alt="Professional Babi Guling catering team serving at a Bali villa event"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="order-1 md:order-2">
              <SectionHeader
                align="left"
                eyebrow="Service"
                title="Local Experience, Professional Handling"
                subtitle="Authentic Balinese flavor with the reliability of a professional event catering team."
              />
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                We work with experienced Balinese cooks who have prepared Babi Guling for ceremonies and celebrations their entire lives. The roasting is done traditionally — over charcoal, by hand, with the same spice blends used in temple feasts.
              </p>
              <p className="text-[#4A4745] text-sm leading-relaxed mt-4">
                At the same time, our event team handles logistics, timing, villa access, setup, and cleanup with the professionalism you expect from a full-service caterer. You get the authenticity of a local warung with the reliability of a managed event.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['On-time delivery', 'Villa coordination', 'Full cleanup', 'English-speaking staff', 'Flexible timing', 'Event insurance'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8 — PAIRING WITH OTHER CATERING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Combinations"
            title="Pairing With Other Catering"
            subtitle="Babi Guling can be the centerpiece of a larger catering experience. Mix and match to suit your group."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'BBQ Add-On', desc: 'Grilled seafood, chicken satay, and beef skewers alongside the pig.' },
              { title: 'Buffet Spread', desc: 'Expand into a full Indonesian buffet with extra rice, noodles, and vegetable dishes.' },
              { title: 'Seafood Station', desc: 'Fresh grilled fish, prawns, and squid for coastal villa events.' },
              { title: 'Vegetarian Dishes', desc: 'Gado-gado, urap, and tempeh dishes for non-meat eaters in the group.' },
              { title: 'Dessert Table', desc: 'Balinese klepon, dadar gulung, and tropical fruit platters.' },
              { title: 'Cocktails & Bar', desc: 'Arak-based cocktails, Bintang beer station, and tropical mixed drinks.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 hover:shadow-md transition-all">
                <h4 className="font-medium text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 space-y-2">
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 text-[#C5A028] text-sm font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
            >
              catering services <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm text-[#4A4745]">
              Babi guling works for <Link to="/events/villa-parties" className="text-[#C5A028] hover:underline">villa party catering</Link>, birthdays, <Link to="/events/weddings" className="text-[#C5A028] hover:underline">wedding catering</Link>, and multi-day <Link to="/catering/villa-catering" className="text-[#C5A028] hover:underline">villa catering</Link> stays.
            </p>
          </div>
        </div>
      </section>

      <BabiGulingPricing />
      <StaffingInfo />
      <BookingProcess />

      {/* ═══════ ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Add More to the Experience"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4 md:p-5 hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base">{addon.title}</h4>
                  <span className="text-[#C5A028] font-semibold text-sm whitespace-nowrap">{addon.price}</span>
                </div>
                {addon.description && <p className="text-xs text-[#4A4745]">{addon.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Process"
            title="How Setup Works"
            subtitle="Babi Guling requires coordination because the whole-pig preparation and timing must be handled properly."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#C5A028]" />
                </div>
                <span className="text-[#C5A028] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AREA COVERAGE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Babi Guling Catering Across Bali"
            subtitle="Where we cover as standard, and the four things that actually change from villa to villa."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {AREA_CLUSTERS.map((cluster) => (
              <div key={cluster.region} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6">
                <h3 className="font-semibold text-base mb-3">{cluster.region}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cluster.areas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#4A4745] leading-relaxed">{cluster.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Changes From Villa to Villa
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {AREA_VARIABLES.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-5">
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#4A4745] text-center mt-8 max-w-2xl mx-auto">
              Planning an event outside these areas? Send the location and we will quote the travel honestly rather than quietly declining — but we will also tell you if the distance would compromise the roast.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Gallery"
            title="Babi Guling Catering Setups"
            subtitle="Traditional whole-pig setups and carved feasts across Bali villas."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BABI_GULING_GALLERY.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <OptimizedImage src={src} alt={`Babi Guling catering setup ${i + 1} at a Bali villa event`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialBlock
        testimonials={[
          { name: 'Rachel & Sam', location: 'Ubud Villa', quote: 'The Babi Guling was the highlight of our group dinner. The crispy skin was incredible and the lawar was authentic. A true Balinese experience.', rating: 5 },
          { name: 'The Wong Family', location: 'Canggu Villa', quote: 'We ordered the medium package for 28 guests. The portions were generous and the whole pig was perfectly cooked. Highly recommend.', rating: 5 },
          { name: 'Chris M.', location: 'Seminyak Villa', quote: 'Best Babi Guling outside of Ubud. The sambals were spicy and flavorful. Our guests are still talking about it weeks later.', rating: 5 },
        ]}
        title="What Babi Guling Guests Say"
        subtitle="Real reviews from traditional Balinese whole-pig events across Bali."
      />

      {/* ═══════ SECTION 9 — FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Babi Guling Catering FAQ"
          />
          <FAQAccordion items={FAQS} defaultOpenCount={3} />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 10 — CTA ═══════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Reserve Now"
            title="Book the Feast"
            subtitle="Send your date, villa or home address, guest count, and serving style. We'll reply within the hour with availability and an itemised quote."
          />
          <BookingFormCatering
            title="Book Babi Guling Catering"
            subtitle="We will confirm availability, setup details, and pricing within the hour."
            fields={[
              { name: 'package', label: 'Package Size', type: 'select', icon: Package, required: true },
              { name: 'date', label: 'Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Time', type: 'text', icon: Flame, placeholder: 'e.g. 6:00 PM' },
              { name: 'area', label: 'Villa Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa / Venue Address', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count', type: 'number', icon: Users, placeholder: 'e.g. 15', required: true },
              { name: 'style', label: 'Serving Style', type: 'text', placeholder: 'Buffet / Carved / Family-style' },
              { name: 'porkConfirm', label: 'Pork accepted or need non-pork alternatives?', type: 'text', placeholder: 'Pork OK / Need alternatives', required: true },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Extra sides, staff, bonfire...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            packageOptions={['6–15 guests', '16–30 guests', '31–50 guests', '51–100 guests', '101–200 guests', '201–450 guests', '450+ guests']}
            accent="#C5A028"
          />
        </div>
      </section>

      <CateringDiscoverySection page="babiGuling" />

      {/* ═══════ FINAL CTA BANNER ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-pkg-roast-new.webp"
            alt="Complete Babi Guling catering table with guests at a Bali villa"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book the Feast
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, villa or home address, guest count, and serving style. We'll reply within the hour with availability and an itemised quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-babi-guling-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Flame className="w-4 h-4" /> Book the Feast
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <TaxFooter className="py-6" />
      <ArticleContentSection downgradeFirstH1 />

      <StickyMobileCTA
        pageSource="catering-babi-guling"
        serviceName="Babi Guling catering in Bali"
        intent="Babi Guling packages and pricing"
      />
    </div>
  )
}