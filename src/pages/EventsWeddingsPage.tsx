import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Calendar, Check, Clock, Heart, Newspaper, Flower2, Waves, Mountain } from 'lucide-react'
import EmailCaptureBar from '@/components/EmailCaptureBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { breadcrumbSchema, faqPageSchema, serviceWithAggregateOfferSchema, howToSchema } from '@/components/SeoHead'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import FAQAccordion from '@/components/catering/FAQAccordion'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { ArticleContentSection, Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
gsap.registerPlugin(ScrollTrigger)

const WA_LINK = buildWhatsAppUrl({ serviceName: 'a wedding in Bali', intent: 'help with catering, staff, and setup' })
const SITE = 'https://mychef.id'
const ACCENT = '#C5A028'

const FORMAT_CARDS = [
  {
    title: 'Plated receptions',
    desc: 'Multi-course fine dining with synchronised table service, led by specialist head chefs. Plated service gives speeches a clean cadence and the evening a restaurant polish — inside your villa. Our standard ratio is one waiter per 8–10 guests, plus a service manager and kitchen lead.',
  },
  {
    title: 'Buffets and live stations',
    desc: 'Abundant, social and ideal for larger guest counts: grazing tables, carving stations, satay grills and live cooking lines. Buffet formats scale comfortably to 150+ guests with temporary prep kitchens we build on site.',
  },
  {
    title: 'Cocktail receptions',
    desc: 'Canapés, tray-passed bites and a bar that never keeps guests waiting — perfect for sunset ceremonies that flow into dancing. We increase tray-pass staffing so drinks and food keep moving while portraits happen.',
  },
  {
    title: 'Balinese heritage feasts',
    desc: 'Root your celebration in the island: a babi guling wedding feast, bebek betutu and temple-style presentations built with local suppliers — often run alongside a Western plated line for multicultural guest lists.',
  },
]

const ADDONS = [
  { icon: Calendar, title: 'Wedding Cake', desc: 'Custom 3-tier cake' },
  { icon: Newspaper, title: 'Cinematography', desc: 'Full-day film' },
  { icon: Heart, title: 'Drone Footage', desc: 'Aerial coverage' },
  { icon: MessageCircle, title: 'Live Band 4h', desc: 'Jazz, acoustic, or DJ' },
  { icon: Check, title: 'Ceremony Florals', desc: 'Arch + aisle + table' },
  { icon: Clock, title: 'Guest Transport', desc: 'Per 50-guest coach' },
]

const FAQS = [
  { q: 'How much does wedding catering in Bali cost?', a: 'Full receptions typically <strong>IDR 1.5M–3M++ per person</strong>; intimate formats from around IDR 700K++. ++ is 11% tax + 10% service; proposals show all-in totals. Packages: <a href="/bali-wedding-catering-packages">wedding packages</a>.' },
  { q: 'How many guests can you cater for a Bali wedding?', a: 'From ~10-guest micro-weddings to 200–250+ receptions. Buffet/live stations often from ~30 guests; intimate dinners may use <a href="/fine-dining">fine dining</a> or <a href="/private-chef-bali">private chef</a> formats.' },
  { q: 'Do you offer wedding menu tastings?', a: 'Yes — a pre-event tasting is included in wedding bookings, usually 2–4 weeks before the day. We finalise the menu together afterwards.' },
  { q: 'What about banjar fees and villa permission?', a: 'Many banjars charge a function fee (market guidance ~USD 300 — not a myCHEF fee). Villas often need outside-vendor approval and have noise curfews. We confirm with your villa manager and list fees in the proposal.' },
  { q: 'Can we bring our own alcohol to a villa wedding?', a: 'Yes — full bar service or BYO with service only. Corkage varies by venue; we advise which option is cheaper for your count. Cocktail packages: <a href="/in-villa-service/bartenders">cocktail packages</a>.' },
  { q: 'What happens if it rains on the wedding day?', a: 'Every booking has wet-weather plan B: marquee and/or indoor relocation, locked before the day — especially November–March wet season.' },
  { q: 'Can you cater dietary, halal or multicultural weddings?', a: 'Yes — halal-friendly lines, vegan/GF, allergy prep zones, and multi-cuisine service (e.g. Indonesian buffet + Western plated). Ceremony needs mapped at consult.' },
  { q: 'What does "++" mean, and what deposit is required?', a: '"++" = 11% tax + 10% service. 50% deposit locks the date; balance due the day before. <a href="/cancellation">Cancellation policy →</a>' },
  { q: 'How far in advance should I book wedding catering in Bali?', a: '3–10 months for peak (Jul–Sep, Dec–Jan). Off-peak can be shorter; full coordination is smoother with 3+ months.' },
  { q: 'Do you handle welcome dinners and rehearsal dinners?', a: 'Yes — BBQ, family-style or plated. Formats on this page and <a href="/events">events</a>.' },
  { q: 'What staffing ratios do you use for seated weddings?', a: 'About 1 waiter per 8–10 guests plus kitchen lead and service manager; cocktail hours add tray staff. Butlers/sommeliers via <a href="/in-villa-service">in-villa service</a>.' },
  { q: 'Can myCHEF work with our wedding planner?', a: 'Daily. Share planner and villa contacts early so load-in, power and run-of-show stay aligned.' },
  { q: 'Do you provide cake and dessert stations?', a: 'Yes — celebration cakes and dessert stations via our pastry team, or we coordinate your preferred baker into service.' },
  { q: 'Is this different from a proposal dinner package?', a: 'Yes — weddings are multi-guest reception production. Couples-only: <a href="/experiences/romantic-proposal-dinner">proposal package</a> / <a href="/fine-dining/romantic-dinner">romantic dinner</a>.' },
  { q: 'Which Bali areas do you cover for weddings?', a: 'Island-wide villas and many venues. <a href="/locations">Locations →</a>' },
  { q: 'Can guest dietary cards be managed on the day?', a: 'Yes — place cards / allergen labels and briefed waiters so restricted guests are served safely.' },
  { q: 'What about late-night snacks after the reception?', a: 'Optional add-on in the run-sheet (sliders, noodles, satay) so energy stays high after speeches.' },
  { q: 'Do you clean the villa after the wedding?', a: 'Yes on our catering scope — kitchen, service stations, plate clear and rubbish removal for a clean handback.' },
  { q: 'How do I get a wedding catering proposal?', a: 'WhatsApp date, guest estimate, villa/venue and style (plated/buffet/BBQ). <a href="/quote">Quote →</a> · <a href="/bali-wedding-catering-packages">packages →</a>' },
  { q: 'What if headcount changes close to the wedding?', a: 'Final numbers typically lock ~48–72 hours out. We adjust food and staff; large increases may change minimums — confirmed in writing.' },
]

const FLOW_STEPS = [
  'Arrival drinks and passed canapés begin 30–45 minutes before the ceremony so guests settle without crowding the aisle.',
  'Ceremony timing is locked into the run-sheet with officiant, musicians, photographer, and villa access team on the same timeline.',
  'Cocktail hour opens while portraits happen, with waiters circulating champagne, mocktails, and hot canapés from the kitchen.',
  'Reception dinner can run as plated, shared, or hybrid service depending on speeches, entertainment, and guest count.',
  'Cake cutting, late-night snacks, and final bar call are built into the service plan so the evening lands cleanly and calmly.',
]

const STAFFING_POINTS = [
  '1 waiter per 8–10 guests is our standard for seated weddings, plus a service manager and kitchen lead.',
  'For cocktail receptions we increase tray-pass staff so drinks and canapés keep moving while portraits and speeches happen.',
  'Setup crew typically arrives 3 hours before guest arrival; kitchen prep and rentals often begin earlier depending on access.',
  'Butlers and sommeliers can be added for couples who want personalised, fine-dining-level guest care.',
  'Full plate clearing, glassware reset, rubbish removal, and kitchen cleanup are included so the villa is handed back properly.',
]

const SETTINGS_CARDS = [
  {
    icon: Flower2,
    title: 'Villa rules and access',
    desc: 'Outside-vendor permission, access times, noise curfews and parking, confirmed with your villa manager in advance so there are no day-of surprises.',
  },
  {
    icon: Waves,
    title: 'Mobile kitchens and power',
    desc: 'Villa kitchens are rarely built for a hundred covers, so we bring mobile prep stations, refrigeration and generators where power is limited.',
  },
  {
    icon: Mountain,
    title: 'Rain plan B',
    desc: 'Every outdoor reception carries a wet-weather backup: marquee rental and an indoor relocation plan, locked before the day.',
  },
]

const WEDDING_WEEKEND_FORMATS = [
  {
    title: 'Welcome dinner / rehearsal night',
    desc: 'Relaxed family-style or BBQ formats the evening before. See our rehearsal dinner planning guide for the full approach.',
  },
  {
    title: 'Ceremony + reception day',
    desc: 'The timing-sensitive centrepiece: arrival canapés 30–45 minutes pre-ceremony, cocktail hour during portraits, then plated, shared or hybrid dinner service.',
  },
  {
    title: 'Recovery brunch',
    desc: 'A softer final meal for villa guests the next morning; simpler food, calmer pacing, no second event build.',
  },
]

export default function EventsWeddingsPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wedding-reveal', { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.wedding-content', start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title="Wedding Catering Bali | Villa Wedding Specialists | myCHEF"
        description="Wedding catering for Bali villa weddings: plated dinners, buffets & cocktail receptions with full team, tastings & transparent packages. WhatsApp myCHEF."
        canonical={`${SITE}/events/weddings`}
        ogImage={`${SITE}/generated/mychef-events-bali-hero-weddings.webp`}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Wedding Catering Bali',
            description: 'Villa wedding catering in Bali: plated receptions, buffets, live stations, cocktail receptions and Balinese heritage feasts with full service teams, tastings and coordination for 10–250+ guests.',
            url: `${SITE}/events/weddings`,
            lowPrice: '700000',
            highPrice: '3000000',
          }),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Plan a Wedding in Bali',
            description: 'Plan your dream Bali villa wedding with private chef catering in 4 easy steps.',
            totalTime: 'PT30M',
            steps: [
              { name: 'Share your date and venue', text: 'Send your wedding date, villa, guest count, and menu direction via WhatsApp.' },
              { name: 'Receive your bespoke proposal', text: 'Sofia sends a detailed, itemised proposal covering menu, staffing, and logistics within 48 hours.' },
              { name: 'Taste and finalise your menu', text: 'We schedule a pre-event tasting and lock the menu, timeline, and run-sheet together.' },
              { name: 'Celebrate your perfect day', text: 'Chef, staff, and coordination team arrive early. You enjoy your wedding while we handle every detail.' },
            ],
          }),
          breadcrumbSchema('Wedding Catering Bali', `${SITE}/events/weddings`, 'Events', `${SITE}/events`),
        ]}
      />

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-events-bali-hero-weddings.webp"
            alt="Elegant Bali villa wedding reception at sunset by myCHEF"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 px-6 md:px-8 py-12 md:py-20 max-w-2xl mx-auto md:mx-0 md:ml-auto md:mr-auto md:flex md:flex-col md:justify-center h-full w-full">
          <Breadcrumb items={[{ label: 'Events', href: '/events' }, { label: 'Weddings' }]} theme="dark" className="mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Wedding Catering Bali
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6 max-w-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wedding Catering in Bali — Villa Weddings, Run by One Team
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-xl">
            One contract covering menu design, the chef brigade, service staff, bar, setup, coordination with your planner and vendors — and a kitchen that leaves no trace behind.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-weddings-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <MessageCircle className="w-4 h-4" /> Request a Wedding Consult
            </a>
            <a href="/book" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
              <Calendar className="w-4 h-4" /> Open Wedding Inquiry Form
            </a>
          </div>
          <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] text-left">
            Itemised proposal within 48 hours · Pre-event tasting for every wedding
          </p>
        </div>
      </section>

      <TrustStrip dark />

      <section className="py-20 md:py-28 bg-white wedding-content wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                One Contract
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                One Team for Your Whole Wedding Day
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Most Bali weddings involve five vendors who have never worked together: caterer, rental company, bar supplier, florist, planner. We replace the catering half of that puzzle with a single team — chefs, waiters, bartenders and a coordinator working from one run-sheet, briefed against your ceremony timing, speeches, portraits and first dance.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Your coordinator, Sofia, has run more than 100 villa weddings across Bali. She liaises directly with your villa manager, planner and any vendors you bring, so everyone works from the same timeline — and you work with one person, not a supplier chain.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-hero-weddings.webp" alt="Bali villa wedding reception dinner table with candles and florals by myCHEF" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Formats"
            title="Wedding Catering Formats"
            subtitle="Plated, buffet, cocktail or Balinese heritage — we match the format to your guest count, villa layout and the rhythm of the evening."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {FORMAT_CARDS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8">
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#4A4745] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mt-10">
            For per-guest prices and guest-count scenarios: <Link to="/bali-wedding-catering-packages" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">see wedding catering packages & per-person prices</Link>. Marrying outside Bali? See <Link to="/wedding-catering-indonesia" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">wedding catering across Indonesia</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Ceremony to Reception Flow
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A wedding timeline that moves naturally from first arrival to final toast
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                The best villa weddings feel calm because the guest experience is paced properly. We usually begin with welcome drinks and light canapés so guests arrive settled instead of standing around waiting for the ceremony to start. Once vows finish, our team pivots immediately into cocktail hour while the couple steps away for photos. That handoff is where coordination matters most: the bar opens, service trays circulate, music changes, and reception tables are reset without a visible scramble.
              </p>
              <div className="space-y-3">
                {FLOW_STEPS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-weddings-cocktail.webp" alt="Champagne and canapé service during a Bali villa wedding cocktail hour" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-weddings-ceremony.webp" alt="Elegant Bali villa wedding ceremony setup in a tropical garden" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Staffing & Service
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Service ratios built for villa logistics, not restaurant assumptions
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                A wedding dinner in a private villa asks more of the team than a normal restaurant shift. Staff are carrying across garden paths, resetting glassware between outdoor and indoor moments, coordinating with the photographer, and working around speeches, dancing, and late arrivals. That is why we scope staffing against your event format rather than giving every wedding the same headcount.
              </p>
              <div className="space-y-3">
                {STAFFING_POINTS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                    <p className="text-[#4A4745] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Bar Service
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Signature cocktails, curated wines, and a bar that never keeps guests waiting
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Our bar service extends far beyond standard wine and beer. We design a bespoke drinks menu that reflects your tastes, your heritage, or your wedding theme — perhaps a tropical gin creation that captures the spirit of Bali, a classic European cocktail with a local twist, or a non-alcoholic masterpiece that ensures every guest feels included.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                We curate wine selections and champagne service to complement your menu, and can arrange professional sommelier service with pairings designed for each course. Bar logistics are managed with the same rigour as the kitchen — consumption rates calculated in advance, stock, ice, glassware, and garnishes managed throughout — so the bar never runs dry and never looks dishevelled. See our dedicated <Link to="/in-villa-service/bartenders" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">wedding bar service</Link>.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-weddings-bartender.webp" alt="myCHEF bartender preparing signature cocktails at a Bali villa wedding" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Logistics"
            title="Villa Wedding Logistics We Handle So You Don't"
            subtitle="Villa kitchens are rarely built for a hundred covers — so we bring our own, and manage the unglamorous details that make or break a Bali wedding."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SETTINGS_CARDS.map((card) => (
              <div key={card.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6 md:p-8">
                <card.icon className="w-6 h-6 text-[#C5A028] mb-4" />
                <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <p className="text-[#4A4745] leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-4xl mx-auto text-[#4A4745] leading-relaxed space-y-4">
            <p>
              <strong>Banjar (village) fees.</strong> Most Bali villages charge a function fee for events; around USD 300 is market guidance from Bali venue norms, not a myCHEF charge. We identify it early and include it in your budget planning.
            </p>
            <p>
              <strong>Drinks your way.</strong> Full bar service with our wedding bartenders, or BYO: market guidance from Bali venue norms puts corkage at roughly USD 35–47 per bottle at venues that charge it — myCHEF's own published corkage waiver for villa parties is a flat IDR 250,000. We will tell you honestly which option costs less for your guest count.
            </p>
            <p>
              For a deeper dive, read our <Link to="/journal/villa-wedding-catering-logistics-bali" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">villa wedding logistics guide</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Tastings, Dietary & Cultural Menus
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wedding menus have to satisfy mixed ages, cultures and dietary needs without slowing service
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-4">
                Vegan, vegetarian, halal-friendly, gluten-free, nut-free and children's meals are designed into the first draft — never improvised on the night. We regularly cater Hindu, Muslim, Jewish, Balinese-blessing and secular celebrations, and can split the menu by guest need: a halal Indonesian buffet line beside a Western plated service, lower-spice family tables, late-night comfort food after the formal courses.
              </p>
              <p className="text-[#4A4745] leading-relaxed">
                Every wedding booking includes a pre-event tasting, usually 2–4 weeks before the day — three dishes per course, then the menu is finalised together. For a Balinese-rooted celebration, explore our <Link to="/catering/babi-guling" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">babi guling wedding feast</Link> option.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/mychef-events-bali-weddings-reception.webp" alt="Long wedding reception dinner table with candles and florals in a Bali villa garden" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                The Wedding Weekend
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Welcome Dinner to Recovery Brunch
              </h2>
              <p className="text-[#4A4745] leading-relaxed mb-5">
                Many couples now cater the whole weekend with one team, and it is usually calmer — and more cost-effective — than stitching together separate vendors. Each event is costed separately in one proposal, so you can scale the weekend up or down before committing.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed"><strong>Welcome dinner / rehearsal night</strong> — relaxed family-style or BBQ formats the evening before. See our <Link to="/journal/rehearsal-dinner-planning-bali" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">rehearsal dinner planning guide</Link>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed"><strong>Ceremony + reception day</strong> — the timing-sensitive centrepiece: arrival canapés 30–45 minutes pre-ceremony, cocktail hour during portraits, then plated, shared or hybrid dinner service.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#C5A028] mt-1 shrink-0" />
                  <p className="text-[#4A4745] leading-relaxed"><strong>Recovery brunch</strong> — a softer final meal for villa guests the next morning; simpler food, calmer pacing, no second event build.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {WEDDING_WEEKEND_FORMATS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#E8E6E3] bg-white p-6">
                  <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-[#4A4745] leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:order-first">
              <img src="/generated/mychef-events-bali-weddings-ceremony.webp" alt="Tropical garden wedding ceremony setup at a Bali villa" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Process
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                How We Cater a Villa Wedding
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-[#E8E6E3] bg-white px-5 py-4">
                  <div className="w-8 h-8 rounded-full bg-[#C5A028]/10 flex items-center justify-center shrink-0 text-sm font-bold text-[#C5A028]">1</div>
                  <p className="text-[#4A4745] leading-relaxed"><strong>Consult.</strong> Share your date, villa, guest count and cuisine direction. Sofia replies — typically the same day — with availability and an initial direction.</p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-[#E8E6E3] bg-white px-5 py-4">
                  <div className="w-8 h-8 rounded-full bg-[#C5A028]/10 flex items-center justify-center shrink-0 text-sm font-bold text-[#C5A028]">2</div>
                  <p className="text-[#4A4745] leading-relaxed"><strong>Proposal.</strong> One itemised document: menus, staffing, rentals, bar, timing and the all-in cost. For package frameworks: <Link to="/bali-wedding-catering-packages" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">see wedding catering packages & per-person prices</Link>.</p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-[#E8E6E3] bg-white px-5 py-4">
                  <div className="w-8 h-8 rounded-full bg-[#C5A028]/10 flex items-center justify-center shrink-0 text-sm font-bold text-[#C5A028]">3</div>
                  <p className="text-[#4A4745] leading-relaxed"><strong>Tasting.</strong> Every wedding includes a pre-event tasting, usually 2–4 weeks before the day — three dishes per course, then the menu is finalised.</p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-[#E8E6E3] bg-white px-5 py-4">
                  <div className="w-8 h-8 rounded-full bg-[#C5A028]/10 flex items-center justify-center shrink-0 text-sm font-bold text-[#C5A028]">4</div>
                  <p className="text-[#4A4745] leading-relaxed"><strong>The day.</strong> Setup crews arrive around three hours before guests; the kitchen runs to the run-sheet; the villa is handed back spotless.</p>
                </div>
              </div>
              <p className="text-[#4A4745] leading-relaxed mt-6">
                A 50% deposit confirms your date. Peak season (July–September, December–January) books 3–10 months ahead; off-peak intimate weddings can sometimes be confirmed a month out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0A0A0A] wedding-reveal">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="Your Coordinator" title="Meet Sofia" subtitle="Your single point of contact from first message to final guest departure." dark />
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sofia holds the timeline so the couple does not have to
              </h3>
              <p className="text-white/[70%] leading-relaxed mb-4">
                Sofia coordinates menu decisions, supplier timing, guest flow, and the day-of service brief. Couples work with her directly instead of being handed from sales to planner to operations. That continuity matters when something changes in the final week: the person adjusting the run-sheet is the same person who understands your menu, your villa access notes, and your ceremony-reception sequence.
              </p>
              <p className="text-white/[70%] leading-relaxed mb-6">
                She has coordinated more than 100 villa weddings across Bali and knows the practical constraints that affect service: kitchen size, power load, rain backup, guest transport timing, and how long a speech block can realistically run before dinner quality starts to slip.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="events-weddings-cta" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#b08d23] transition-all focus:outline-none focus:ring-2 focus:ring-white rounded">
                <MessageCircle className="w-4 h-4" /> Message Sofia
              </a>
            </div>
            <div className="h-full min-h-[320px]">
              <img src="/generated/mychef-events-bali-weddings-cocktail.webp" alt="Wedding guests enjoying champagne and canapés at a Bali villa cocktail hour" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Add-Ons" title="Wedding Add-Ons" subtitle="Use these to expand production once your food and staffing plan is locked." />
          <p className="text-[#4A4745] text-center max-w-4xl mx-auto leading-relaxed mb-10">
            We recommend treating add-ons as a second-stage decision. First we make sure the ceremony, kitchen, staffing, and reception service are sound. Then we layer in florals, music, film, cake, and transport based on what the villa can actually support. Every add-on is scoped and priced inside your itemised proposal — no surprises later.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map((addon) => (
              <div key={addon.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 flex items-start gap-4">
                <div className="bg-[#C5A028]/10 rounded-xl p-2.5 shrink-0">
                  <addon.icon className="w-5 h-5 text-[#C5A028]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-sm">{addon.title}</h3>
                  <p className="text-[#4A4745] text-sm mt-1">{addon.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <EmailCaptureBar />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white wedding-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Questions" title="Wedding Catering Bali — FAQ" subtitle="Everything you need to know about booking a villa wedding with myCHEF." />
          <FAQAccordion items={FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#C5A028] mb-3">Also available</p>
          <h2 className="text-2xl font-semibold text-[#1A1916] mb-8">Explore More myCHEF Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/bali-wedding-catering-packages', label: 'Wedding Packages' },
              { to: '/wedding-catering-indonesia', label: 'Indonesia Weddings' },
              { to: '/catering', label: 'Villa Catering' },
              { to: '/pricing', label: 'Pricing Guide' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-3 px-4 rounded border border-[#C5A028]/30 text-[#1A1916] hover:bg-[#C5A028]/10 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-[#4A4745] text-center max-w-3xl mx-auto mt-8 leading-relaxed">
            Browse <Link to="/events" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">all event catering</Link> or see the{' '}
            <Link to="/pricing" className="text-[#C5A028] underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">full pricing guide</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAF8] wedding-reveal">
        <div className="max-w-3xl mx-auto px-6">
          <BookingFormCatering
            title="Request a Wedding Consult"
            subtitle="Tell us about your wedding and we will send a detailed proposal within 48 hours."
            packageOptions={['Intimate Villa Wedding', 'Full Wedding Reception', 'Multi-Day Wedding Weekend']}
            fields={[
              { name: 'package', label: 'Celebration Format', type: 'select', required: true },
              { name: 'date', label: 'Wedding Date', type: 'date', required: true },
              { name: 'celebration_days', label: 'Celebration Length', type: 'text', placeholder: 'e.g. 1 day, 3-day wedding weekend' },
              { name: 'guests', label: 'Number of Guests', type: 'number', placeholder: 'e.g. 60', required: true },
              { name: 'villa', label: 'Villa Name', type: 'text', placeholder: 'e.g. Villa Aria, Seminyak', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', placeholder: 'e.g. Seminyak, Uluwatu...', required: true },
              { name: 'ceremony', label: 'Ceremony / Reception Split', type: 'text', placeholder: 'e.g. Ceremony 4pm, Reception 6pm' },
              {
                name: 'cuisine_direction',
                label: 'Cuisine Direction / Cultural Notes',
                type: 'textarea',
                placeholder: 'Indian, Western, Balinese, halal, vegetarian mix, family dishes, late-night snacks...',
                rows: 4,
              },
              { name: 'planner', label: 'Planner / Production Contact', type: 'text', placeholder: 'Optional wedding planner or coordinator name' },
              { name: 'budget', label: 'Budget Range', type: 'text', placeholder: 'Optional — helps us shape the right proposal' },
              { name: 'dietary', label: 'Dietary Requirements', type: 'textarea', placeholder: 'Halal, vegan, allergies...' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'text' },
            ]}
            whatsappName="Sofia"
            accent={ACCENT}
            messageIntro="Hi Sofia, I'm planning a wedding in Bali and would like a proposal."
          />
        </div>
      </section>

      <PressStrip />

      {/* ═══════ RELATED EVENTS ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Other Events</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Anniversaries', href: '/events/anniversaries', desc: 'Romantic villa dinners for two.' },
              { label: 'Birthday Parties', href: '/events/birthdays', desc: 'Milestone celebrations in your villa.' },
              { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Cocktail receptions and celebrations.' },
              { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Business retreats and offsites.' },
              { label: 'Catering', href: '/catering', desc: 'Full-service catering for any event.' },
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Fine-dining tasting menus.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ArticleContentSection downgradeFirstH1 />


      <StickyMobileCTA
        pageSource="events-weddings"
        serviceType="wedding"
        label="Plan My Wedding Menu via WhatsApp"
        serviceName="a wedding in Bali"
        intent="help with catering, staff, and setup"
      />
    </div>
  )
}
