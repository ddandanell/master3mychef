import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { MessageCircle, Check, Calendar, Users, MapPin, Utensils, Heart, Leaf, Flower2, Truck, ShieldCheck, Sparkles, Package, Clock, Table2, Wine, Baby, Wallet, ClipboardList, Send } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, {
  cateringBreadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip, CateringDiscoverySection } from '@/components/shared'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

import OptimizedImage from '@/components/OptimizedImage'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a grazing table in Bali', intent: 'menu options and pricing' })
const SITE = 'https://mychef.id'
const PAGE_URL = `${SITE}/catering/grazing-tables`

const GOLD = '#C5A028'

/* ═══════════════════════════════════════════════════════════════
   PACKAGES — Grazing Table Service Levels

   Per the page brief, grazing tables move to a custom-quotation model:
   no fixed prices are published. Every table is quoted around guest
   count, menu selection, styling, location, and service requirements.
   Minimum booking: five guests.
   ═══════════════════════════════════════════════════════════════ */
const CUSTOM_QUOTE_LINE = 'Custom quotation based on guest count, location, menu, and styling requirements.'

const PACKAGES = [
  {
    title: 'Intimate Villa Grazing Table',
    guests: 'Available from 5 guests',
    includes: ['Selection of cheeses', 'Cured meats or vegetarian alternatives', 'Fresh tropical fruit', 'Breads and crackers', 'Dips and spreads', 'Olives and vegetables', 'Nuts and sweet elements', 'Styled board presentation'],
    bestFor: 'Smaller villa gatherings, welcome drinks, birthdays, wine evenings, bridal events, and poolside celebrations',
  },
  {
    title: 'Event Grazing Table',
    guests: 'Medium & large groups',
    includes: ['Expanded cheese and charcuterie selection', 'Artisan breads and premium crackers', 'Seasonal fruit', 'Dips and marinated vegetables', 'Tropical styling', 'Dietary labels', 'Setup and breakdown options'],
    bestFor: 'Villa parties, cocktail receptions, birthdays, retreats, and pre-dinner gatherings',
  },
  {
    title: 'Wedding Grazing Table',
    guests: 'Scaled to your wedding',
    includes: ['Premium table styling', 'Multiple grazing sections', 'Custom labels and signage', 'Vegetarian and vegan sections', 'Coordinated wedding styling', 'Optional attendants', 'Canapé and bar-service additions'],
    bestFor: 'Wedding welcome receptions, cocktail hours, bridal celebrations, and post-ceremony gatherings',
  },
  {
    title: 'Corporate Grazing Table',
    guests: 'Scalable for large groups',
    includes: ['Branded labels', 'Individual dietary identification', 'Scalable setup for larger groups', 'Corporate styling', 'Delivery and venue coordination', 'Optional staff and beverage service'],
    bestFor: 'Product launches, networking events, retreats, office celebrations, and brand activations',
  },
]

/* ═══════════════════════════════════════════════════════════════
   WHAT GOES ON THE TABLE
   ═══════════════════════════════════════════════════════════════ */
const TABLE_COMPONENTS = [
  { category: 'Cheese', items: ['Brie & camembert', 'Aged cheddar', 'Blue cheese', 'Manchego', 'Goat cheese', 'Cream cheese'] },
  { category: 'Cured Meats', items: ['Prosciutto di Parma', 'Salami', 'Chorizo', 'Mortadella', 'Coppa', 'Serrano ham'] },
  { category: 'Fruit', items: ['Fresh grapes', 'Figs', 'Berries', 'Pomegranate', 'Mango', 'Dragon fruit'] },
  { category: 'Bread & Crackers', items: ['Sourdough', 'Baguette', 'Water crackers', 'Seeded crisps', 'Grissini', 'Rye bread'] },
  { category: 'Dips & Spreads', items: ['Hummus', 'Tapenade', 'Baba ganoush', 'Tzatziki', 'Fruit chutney', 'Local honey'] },
  { category: 'Extras', items: ['Marinated olives', 'Roasted nuts', 'Dried apricots', 'Dark chocolate', 'Vegetable crudités', 'Microgreens'] },
]

/* ═══════════════════════════════════════════════════════════════
   STYLING DIRECTION
   ═══════════════════════════════════════════════════════════════ */
const STYLING_ITEMS = [
  { icon: Table2, title: 'Wood Boards', desc: 'Rustic teak and acacia boards layered for depth and texture.' },
  { icon: Flower2, title: 'Linen & Florals', desc: 'Natural linen runners with edible flowers and tropical greenery.' },
  { icon: Sparkles, title: 'Height & Layers', desc: 'Risers, cake stands, and stacked crates create visual dimension.' },
  { icon: Wine, title: 'Candles & Ambience', desc: 'Tea lights and taper candles for evening events and romance.' },
  { icon: ShieldCheck, title: 'Clean Spacing', desc: 'Breathing room between clusters for an uncluttered premium look.' },
  { icon: Heart, title: 'Labels & Signage', desc: 'Hand-lettered labels for cheeses, dietary callouts, and event branding.' },
]

/* ═══════════════════════════════════════════════════════════════
   BEST EVENTS FOR GRAZING
   ═══════════════════════════════════════════════════════════════ */
const BEST_EVENTS = [
  { icon: Wine, title: 'Cocktail Parties', desc: 'Self-serve grazing during mingling and drinks.' },
  { icon: Truck, title: 'Villa Arrivals', desc: 'Welcome guests with an immediate beautiful spread.' },
  { icon: Heart, title: 'Weddings', desc: 'Cocktail hour or pre-reception grazing for guests.' },
  { icon: Sparkles, title: 'Birthdays', desc: 'Celebration centerpiece that doubles as décor.' },
  { icon: ShieldCheck, title: 'Brand Launches', desc: 'Photo-ready display that elevates your event.' },
  { icon: Leaf, title: 'Retreats', desc: 'Relaxed, nourishing food for wellness gatherings.' },
  { icon: Flower2, title: 'Pool Parties', desc: 'Poolside grazing with tropical styling.' },
  { icon: Package, title: 'Bridal Events', desc: 'Elegant spreads for showers and hen parties.' },
  { icon: Utensils, title: 'Pre-Dinner Receptions', desc: 'Beautiful appetizer before a seated meal.' },
]

/* ═══════════════════════════════════════════════════════════════
   DIETARY OPTIONS
   ═══════════════════════════════════════════════════════════════ */
const DIETARY_OPTIONS = [
  { icon: Leaf, title: 'Vegetarian Grazing', desc: 'Cheese-forward with extra vegetables, dips, fruit, and nuts. No cured meats.' },
  { icon: Heart, title: 'Vegan Grazing', desc: 'Plant-based cheeses, vegetable dips, marinated tofu, fruit, nuts, and herb oils.' },
  { icon: ShieldCheck, title: 'Pork-Free', desc: 'Beef bresaola, turkey, chicken, and seafood charcuterie replace all pork products.' },
  { icon: Table2, title: 'Gluten-Free Crackers', desc: 'Rice crackers, seed crisps, and vegetable-based alternatives to wheat.' },
  { icon: Sparkles, title: 'Nut-Free Sections', desc: 'Dedicated nut-free zones with clear labeling for allergy safety.' },
  { icon: Baby, title: "Children's Platters", desc: 'Mild cheeses, simple fruits, breadsticks, and chocolate — no strong flavors.' },
]

/* ═══════════════════════════════════════════════════════════════
   SETUP AND BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */
const SETUP_STEPS = [
  { icon: Clock, title: 'Arrival Time', desc: 'We arrive 60–90 minutes before your event to set up the grazing table.' },
  { icon: Table2, title: 'Table Requirements', desc: 'A sturdy table or surface is needed. We bring boards, linens, and all serving ware.' },
  { icon: ShieldCheck, title: 'Shaded Placement', desc: 'Outdoor setups require shade or cover to protect cheese and fruit from direct sun.' },
  { icon: Sparkles, title: 'Freshness & Replenishment', desc: 'With an on-site attendant, we refresh the table during the event and monitor food safety throughout.' },
  { icon: Truck, title: 'Breakdown & Cleanup', desc: 'Breakdown and cleanup can be included according to your selected service level — confirmed in your quotation.' },
  { icon: Users, title: 'Staff Options', desc: 'Optional dedicated grazing attendant to serve, replenish, and answer guest questions.' },
]

/* ═══════════════════════════════════════════════════════════════
   CUSTOMIZE YOUR GRAZING TABLE
   ═══════════════════════════════════════════════════════════════ */
const CUSTOMIZE_OPTIONS = [
  'Classic cheese and charcuterie',
  'Mediterranean grazing',
  'Tropical Bali grazing',
  'Vegetarian grazing',
  'Vegan grazing',
  'Pork-free grazing',
  "Children's grazing table",
  'Dessert grazing table',
  'Breakfast and brunch grazing',
  'Wedding cocktail-hour grazing',
  'Corporate branded grazing',
  'Premium cheese selection',
  'Seafood and oyster additions',
  'Indonesian-inspired grazing',
  'Healthy retreat grazing',
]

/* ═══════════════════════════════════════════════════════════════
   SERVICE OPTIONS — replaces generic staffing ratios
   ═══════════════════════════════════════════════════════════════ */
const SERVICE_OPTIONS = [
  { icon: Truck, title: 'Delivery & Styled Setup', desc: 'Our team delivers and styles the complete grazing table before your guests arrive.' },
  { icon: Users, title: 'Grazing Table Attendant', desc: 'An optional attendant can remain on site to replenish food, maintain the display, and assist guests.' },
  { icon: Sparkles, title: 'Full Event Service', desc: 'For larger celebrations, we can add waiters, bartenders, chefs, canapés, drinks, and full event support.' },
  { icon: Package, title: 'Breakdown & Collection', desc: 'Breakdown, equipment collection, and final cleanup can be included according to the selected service package.' },
]

/* ═══════════════════════════════════════════════════════════════
   BOOKING FLOW — grazing-specific, replaces generic booking process
   ═══════════════════════════════════════════════════════════════ */
const BOOKING_FLOW = [
  { icon: Send, title: 'Send event details', desc: 'Share your date, area, villa or venue, guest count, and occasion.' },
  { icon: Utensils, title: 'Choose menu & styling', desc: 'Pick ingredients, dietary needs, and the styling direction of your table.' },
  { icon: ClipboardList, title: 'Receive a custom quotation', desc: 'Priced around guest count, menu, styling, location, and service level.' },
  { icon: Wallet, title: 'Confirm with deposit', desc: 'A 50% deposit secures your date. The balance is due before the event.' },
  { icon: Truck, title: 'Delivery & setup', desc: 'We arrive 60–90 minutes before your event to deliver and style the table.' },
  { icon: Sparkles, title: 'Optional service & breakdown', desc: 'Attendance, replenishment, and final collection according to your quotation.' },
]

/* ═══════════════════════════════════════════════════════════════
   TRUST STRIP — grazing-specific (replaces generic staffing claims)
   ═══════════════════════════════════════════════════════════════ */
const TRUST_ITEMS = [
  { icon: MessageCircle, label: 'Same-day WhatsApp', desc: 'Confirmation within the hour' },
  { icon: Wallet, label: 'Custom quotation', desc: 'Tailored to your event' },
  { icon: Users, label: 'Minimum five guests', desc: 'Same minimum Bali-wide' },
  { icon: Truck, label: 'Bali-wide delivery', desc: 'Styled setup at your venue' },
]

/* ═══════════════════════════════════════════════════════════════
   FAQ — custom-quotation model, minimum five guests
   ═══════════════════════════════════════════════════════════════ */
const FAQS = [
  { q: 'How much does a grazing table in Bali cost?', a: 'Every grazing table is quoted individually. Pricing depends on the number of guests, ingredient selection, table size, styling, location, dietary requirements, and whether staff are required. Our minimum booking is for five guests. Send us your event details for a tailored quotation.' },
  { q: 'What is the minimum order for a grazing table?', a: 'Our grazing tables are available for a minimum of five guests — the same minimum in every area we serve. For larger events, we adjust the table size, food quantities, styling, and service according to your guest count and event format.' },
  { q: 'How do I size a grazing table for my guest count?', a: 'As a pre-dinner spread, plan one tier below your headcount — guests are grazing, not dining. As the main food, size at full headcount and tell us; we\'ll adjust quantities honestly.' },
  { q: 'Is the grazing table intended as a full meal?', a: 'It can be designed either as light welcome food, cocktail-hour grazing, or a more substantial meal. Tell us how the table will be used so we can recommend the correct quantity.' },
  { q: 'Can you do vegan, gluten-free, or pork-free tables?', a: 'Yes — fully vegan tables, gluten-free crackers, pork-free charcuterie, and nut-free zones are all standard, with clear labelling.' },
  { q: 'Do you deliver and set up at villas?', a: 'Yes — delivery, full styling, and setup across Bali, from Seminyak and Canggu to Ubud, Uluwatu, and Nusa Dua. The minimum booking is five guests everywhere; remote areas may simply carry a quoted travel fee.' },
  { q: 'Are setup and cleanup included?', a: 'Setup requirements are included in your quotation. Depending on the event, we can provide setup only or remain on site to replenish, supervise, and complete the final breakdown. The exact service level will be confirmed before booking.' },
  { q: 'Is a grazing table enough for a wedding?', a: 'For cocktail hour, absolutely. As the only food for a full reception, we\'d honestly recommend pairing it with a dinner format — we\'ll build the stack in one quote.' },
  { q: 'How far ahead should I book?', a: 'Three to seven days for most tables; two weeks or more for wedding-season dates. A 50% deposit confirms. Cancellations 14+ days before receive a full refund, 7–13 days before receive a 50% refund, and under 7 days are non-refundable (see /cancellation policy).' },
  { q: 'Can you add hot food or staff?', a: 'Yes — hot canapés, live stations, waiters, and bartenders are all add-ons. That\'s the advantage of booking grazing through a full catering company.' },
  { q: 'How much does catering in Bali cost?', a: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { q: 'What formats do you offer?', a: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { q: 'Is catering the same as private chef hire?', a: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { q: 'Do prices include staff and cleanup?', a: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { q: 'Can you cook in an Airbnb villa?', a: 'Yes with a workable kitchen — share the listing when booking.' },
  { q: 'Minimum guest counts?', a: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { q: 'Can menus be customised?', a: 'Yes — proteins, spice, diets locked before shopping.' },
  { q: 'Travel fees?', a: 'Remote areas may add a fee quoted upfront.' },
  { q: 'Can we add bartenders?', a: 'Yes — <a href="/in-villa-service/bartenders">bartenders</a>.' },
  { q: 'Kids and allergies?', a: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
]

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  { name: 'Emma R.', location: 'Uluwatu Villa', quote: 'The grazing table was the highlight of our wedding cocktail hour. Every guest commented on how beautiful (and tasty) it was.', rating: 5 },
  { name: 'Jessica & Mike', location: 'Canggu Villa', quote: 'We ordered a styled grazing table for 10 at our villa. It was stunning and the quality was top-notch.', rating: 5 },
  { name: 'The Park Family', location: 'Seminyak Villa', quote: 'Wedding-scale grazing for 35 guests. The vegan option was just as beautiful as the regular one. myCHEF nailed it.', rating: 5 },
]

/* ═══════════════════════════════════════════════════════════════
   INTERNAL LINKS
   ═══════════════════════════════════════════════════════════════ */
export default function CateringGrazingPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.graze-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.graze-content', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const schemaFaq = FAQS.map(f => ({ question: f.q, answer: f.a }))

  const grazingServiceSchema = serviceSchema(
    'Grazing Tables Bali',
    'Styled grazing tables in Bali: artisan cheese, charcuterie, tropical fruit and dips for weddings, welcome drinks, villa events and corporate receptions. Minimum booking five guests; every table is individually quoted.',
    PAGE_URL,
  )

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Grazing Table Bali | Styled Event Platters & Spreads"
        description="Grazing tables in Bali: artisan cheese, charcuterie & fresh fruit spreads styled for welcome drinks, weddings & poolside events. WhatsApp myCHEF."
        canonical={PAGE_URL}
        ogImage={`${SITE}/generated/mychef-catering-bali-hero-grazing.webp`}
        jsonLd={[
          grazingServiceSchema,
          faqPageSchema(schemaFaq),
          cateringBreadcrumbSchema('Grazing Tables Bali', PAGE_URL),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Grazing Tables Bali' }]} />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-hero-grazing.webp"
            alt="Luxurious grazing table with cheese, charcuterie and tropical fruit at a Bali villa event"
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
          <Breadcrumb items={[{ label: 'Catering', href: '/catering' }, { label: 'Grazing Tables Bali' }]} theme="dark" className="justify-center mb-8" />
          <p
            className="text-sm tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: GOLD }}
          >
            Grazing Tables &amp; Charcuterie Bali
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Grazing Tables Bali — Styled Spreads for Events, Weddings &amp; Villas
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-2xl mx-auto">
            A grazing table is the moment guests walk in and reach for their phones. Artisan cheeses, charcuterie, tropical fruit, dips, and edible flowers, styled across teak boards and linen — food as décor, and the easiest hosting format there is. These are the grazing tables Bali event hosts, wedding planners and villa guests reach for when they want photo-ready food without the formal service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
              style={{ background: GOLD }}
            >
              <Package className="w-4 h-4" /> Design My Grazing Table
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-grazing-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
          <p className="text-white/[60%] text-sm">Minimum five guests · Custom menus · Vegan and dietary options · Bali-wide delivery &amp; setup</p>
        </div>
      </section>

      {/* ═══════ TRUST STRIP — grazing-specific ═══════ */}
      <div className="bg-white border-y border-[#E8E6E3]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TRUST_ITEMS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="bg-[#6B8E5A]/10 rounded-xl p-2.5 shrink-0">
                  <Icon className="w-5 h-5 text-[#6B8E5A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{label}</p>
                  <p className="text-xs text-[#4A4745] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — Grazing Tables in Bali
          ═══════════════════════════════════════════════════════════════ */}
      <section className="graze-content py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Grazing Tables Bali"
                title="Instant Visual Impact That Reduces Formal Service Pressure"
                subtitle="Grazing tables are built for events where people want beautiful food without a heavy meal structure. They create an immediate focal point, encourage mingling, and eliminate the need for passed service or plated courses."
              />
              <p className="text-[#4A4745] mb-6">
                As part of our broader <Link to="/catering" className="underline decoration-[#C5A028]/50 hover:text-[#C5A028] transition-colors">catering services</Link>, grazing tables work for everything from villa welcomes to corporate receptions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Villa welcome food', 'Poolside events', 'Wedding cocktail hour', 'Birthday celebrations', 'Wine nights', 'Corporate receptions', 'Pre-dinner grazing', 'Photo-ready brunch'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: GOLD }} />
                    <span className="text-[#4A4745] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#4A4745] text-sm mt-6">
                Hosts often pair grazing with <Link to="/events/weddings" className="underline decoration-[#C5A028]/50 hover:text-[#C5A028] transition-colors">wedding catering</Link> for cocktail hour, add a <Link to="/catering/bbq-catering" className="underline decoration-[#C5A028]/50 hover:text-[#C5A028] transition-colors">BBQ night</Link> for heartier appetites, or choose <Link to="/catering/drop-off-catering" className="underline decoration-[#C5A028]/50 hover:text-[#C5A028] transition-colors">drop-off catering</Link> when they want fresh food without on-site staff.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/generated/mychef-catering-bali-grazing-detail.webp"
                alt="Close-up of a premium grazing board with cheeses, cured meats and tropical fruit"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — Best Events for Grazing
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Best Events for Grazing"
            title="The Perfect Occasions for a Grazing Table in Bali"
            subtitle="From intimate villa gatherings to large-scale celebrations, grazing tables adapt to any event style."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {BEST_EVENTS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-5 text-center hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — What Goes on the Table
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="What Goes on the Table"
            title="Every Component on Your Grazing Table"
            subtitle="Nothing is hidden. Here is exactly what goes into every grazing setup — from cheese and charcuterie to tropical additions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TABLE_COMPONENTS.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-[#E8E6E3] bg-white text-center">
            <p className="text-[#4A4745] text-sm">
              <strong>Tropical additions:</strong> We incorporate local Bali produce such as dragon fruit, mango, passion fruit, snake fruit, and fresh coconut to give your grazing table a distinctive island character.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3B — Customize Your Grazing Table
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Customize Your Grazing Table"
            title="Design a Grazing Table Around Your Event"
            subtitle="Every grazing table can be adapted to your event, guests, and preferred style — from classic charcuterie to fully vegan or Indonesian-inspired spreads."
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {CUSTOMIZE_OPTIONS.map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            Tell us your direction and dietary requirements — we will shape the menu, quantities, and styling around them in your custom quotation.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — Styling Direction
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Styling Direction"
            title="How We Style Your Grazing Table"
            subtitle="Every detail is considered — from board selection to candle placement — for a premium presentation that photographs beautifully."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STYLING_ITEMS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — Grazing Table Service Levels
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Grazing Table Sizes"
            title="Choose the Right Size for Your Event"
            subtitle="Every grazing table is individually quoted around your guest count, menu selection, styling, location, and service requirements. Minimum booking: five guests."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 hover:shadow-lg transition-all flex flex-col">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: GOLD }}>{pkg.guests}</p>
                <div className="space-y-2 mb-4 flex-1">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} /> {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#4A4745]/80 mb-3">
                  <strong>Best for:</strong> {pkg.bestFor}
                </p>
                <p className="text-xs pt-3 border-t border-[#E8E6E3] italic" style={{ color: GOLD }}>
                  {CUSTOM_QUOTE_LINE}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            Packages are individually quoted. Pricing depends on guest count, ingredients, styling, location, and whether setup, service, or breakdown staff are required.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — Dietary Options
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Dietary Options"
            title="Grazing Tables for Every Diet"
            subtitle="No one misses out. We create inclusive grazing experiences that cater to all dietary requirements without compromising on visual impact."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIETARY_OPTIONS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — Grazing vs Canapés
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Grazing vs Canapés"
            title="Which Service Style Suits Your Event?"
            subtitle="Understanding the difference helps you choose the right food format — or combine both for the perfect experience."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                <Table2 className="w-5 h-5" style={{ color: GOLD }} />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Grazing Tables</h3>
              <ul className="space-y-2">
                {['Static display — guests serve themselves', 'Highly visual — doubles as event décor', 'Encourages mingling and conversation', 'Ideal for 2–4 hour events', 'No staff required to pass food', 'More relaxed, informal atmosphere'].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mb-4">
                <Utensils className="w-5 h-5 text-[#6B8E5A]" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Canapés</h3>
              <ul className="space-y-2">
                {['Passed by staff — controlled portions', 'Formal and elegant presentation', 'Precise timing and temperature control', 'Ideal for seated dinners or formal receptions', 'Requires service staff', 'More structured, upscale atmosphere'].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[#4A4745]">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#6B8E5A]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-[#E8E6E3] bg-white text-center">
            <p className="text-[#4A4745] text-sm">
              <strong>Many events need both.</strong> Grazing tables work beautifully as a welcome display while canapés are passed during cocktails. For a full seated meal, pair grazing with our <Link to="/catering/plated-catering" className="underline decoration-[#C5A028]/50 hover:text-[#C5A028] transition-colors">plated dinner</Link> service. We can design a combined package — complete with a <Link to="/in-villa-service/bartenders" className="underline decoration-[#C5A028]/50 hover:text-[#C5A028] transition-colors">cocktail packages</Link> if you want drinks handled — that gives you the best of both worlds.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — Setup and Breakdown
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Setup and Breakdown"
            title="How We Deliver and Set Up Your Grazing Table"
            subtitle="From arrival to cleanup — we handle every detail so you can focus on your guests."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SETUP_STEPS.map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8B — Service Options for Your Grazing Table
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Service Options"
            title="Service Options for Your Grazing Table"
            subtitle="From simple delivery and styled setup to full event service — choose the level of support that fits your event. The exact service level is confirmed in your quotation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_OPTIONS.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E8E6E3] p-6 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${GOLD}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9 — FAQ (7 questions)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="FAQ"
            title="Grazing Table Questions"
            subtitle="Everything you need to know about booking a grazing table in Bali."
          />
          <FAQAccordion items={FAQS} defaultOpenCount={3} showToc ctaEvery={5} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10 — CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Request a Quote"
            title="Design My Grazing Table"
            subtitle="Tell us your guest count, location, preferred style, dietary restrictions, and event timing. Minimum booking: five guests. We will reply with a tailored quote within the hour."
          />
          <BookingFormCatering
            title="Request Grazing Table Quote"
            subtitle="Minimum booking: five guests. We will confirm availability, styling options, and your custom quotation within the hour."
            fields={[
              { name: 'tableType', label: 'Type of Grazing Table', type: 'select', icon: Package, required: true, options: [
                'Villa gathering',
                'Birthday or celebration',
                'Wedding or bridal event',
                'Corporate event',
                'Retreat',
                'Pool party',
                'Pre-dinner reception',
                'Other',
              ] },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'time', label: 'Event Time', type: 'text', icon: Clock, placeholder: 'e.g. 5:00 PM' },
              { name: 'area', label: 'Location / Area', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'villa', label: 'Villa or Venue Name', type: 'text', required: true },
              { name: 'guests', label: 'Guest Count (minimum 5 guests)', type: 'number', icon: Users, placeholder: 'Minimum booking: 5 guests', required: true },
              { name: 'mealRole', label: 'Main Food or Before Another Meal?', type: 'select', options: [
                'Main food for the event',
                'Light grazing before another meal',
                'Not sure — please advise',
              ] },
              { name: 'serviceLevel', label: 'Setup Only or Full Service?', type: 'select', options: [
                'Delivery and styled setup only',
                'Setup, attendance and replenishment',
                'Full service including breakdown',
                'Not sure — please advise',
              ] },
              { name: 'style', label: 'Style Preference', type: 'text', placeholder: 'Classic / Mediterranean / Vegan / Cheese-only' },
              { name: 'dietary', label: 'Dietary Restrictions', type: 'textarea', placeholder: 'Vegetarian, vegan, gluten-free, nut-free, pork-free...' },
              { name: 'addons', label: 'Add-ons', type: 'textarea', placeholder: 'Bamboo board, pool styling, extra flowers, drinks...' },
              { name: 'occasion', label: 'Occasion', type: 'text', placeholder: 'Wedding, birthday, corporate, pool party...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            accent={GOLD}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════════════════════ */}
      <TestimonialBlock
        testimonials={TESTIMONIALS}
        title="What Grazing Guests Say"
        subtitle="Real reviews from grazing table events across Bali."
      />

      <PressStrip />

      {/* ═══════════════════════════════════════════════════════════════
          BOOKING FLOW — grazing-specific six steps
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Booking Flow"
            title="How Booking a Grazing Table Works"
            subtitle="From first message to final collection — a simple process sized to your event."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOKING_FLOW.map((step, idx) => (
              <div key={step.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 relative">
                <span className="absolute top-4 right-4 text-[#E8E6E3] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <step.icon className="w-7 h-7 mb-4" style={{ color: GOLD }} />
                <h3 className="font-medium text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-[#4A4745] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#4A4745] text-sm max-w-2xl mx-auto">
            For large or technically complex events, we also arrange a villa inspection and venue coordination in advance.
          </p>
        </div>
      </section>

      <CateringDiscoverySection page="grazing" />

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/generated/mychef-catering-bali-hero-grazing.webp"
            alt="Beautiful grazing table at a Bali villa event with cheese, charcuterie, and tropical styling"
            className="w-full h-full object-cover"
            loading="lazy" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Order a Grazing Table for Your Bali Event
          </h2>
          <p className="text-white/[80%] text-lg mb-8">
            Send your date, area, guest count, and preferred grazing style. Minimum booking: five guests — every table is individually quoted based on guest count, ingredients, styling, location, and service requirements. We will confirm availability and your custom quotation by WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
              style={{ background: GOLD }}
            >
              <Package className="w-4 h-4" /> Design My Grazing Table
            </a>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-grazing-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp myCHEF
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'catering services', href: '/catering', desc: 'Browse full-service catering across Bali.' },
              { label: 'plated dinner', href: '/catering/plated-catering', desc: 'Multi-course seated dinner service.' },
              { label: 'BBQ night', href: '/catering/bbq-catering', desc: 'Live-fire grilling at your villa.' },
              { label: 'wedding catering', href: '/events/weddings', desc: 'Ceremony to reception catering.' },
              { label: 'cocktail packages', href: '/in-villa-service/bartenders', desc: 'Complete cocktail packages for villas.' },
              { label: 'drop-off catering', href: '/catering/drop-off-catering', desc: 'Fresh food delivered, no staff needed.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="catering-grazing"
        serviceName="grazing table in Bali"
        intent="grazing table options and a custom quotation"
      />
    </div>
  )
}