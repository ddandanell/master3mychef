import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, MessageCircle, Star } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { ArticleContentSection } from '@/components/shared'
import FAQAccordion from '@/components/catering/FAQAccordion'

type ReviewCategory = 'All' | 'Private Dinners' | 'Weddings' | 'Retreats & Corporate' | 'Celebrations & BBQs'

interface Review {
  name: string
  location: string
  date: string
  eventType: string
  category: Exclude<ReviewCategory, 'All'>
  review: string
  rating: number
}

const SITE = 'https://mychef.id'
const WHATSAPP_URL = 'https://wa.me/6289674072020'

const STATS = [
  '4.9/5 guest rating',
  '12,000+ guests served',
  '560+ bookings delivered',
  '98% repeat/referred',
]

const FILTERS: ReviewCategory[] = ['All', 'Private Dinners', 'Weddings', 'Retreats & Corporate', 'Celebrations & BBQs']

const REVIEWS: Review[] = [
  {
    name: 'Olivia',
    location: 'Seminyak villa',
    date: 'February 2026',
    eventType: 'Private dinner for 8',
    category: 'Private Dinners',
    review: 'We booked myCHEF for our first night in Bali and it set the tone for the whole trip. Chef Bayu adjusted the menu for our gluten-free guest without making it feel like a compromise. The snapper, sambal and the way they left the kitchen spotless felt unbelievably polished.',
    rating: 5,
  },
  {
    name: 'Theo',
    location: 'Nusa Dua family villa',
    date: 'November 2025',
    eventType: 'Villa dinner for 12',
    category: 'Private Dinners',
    review: 'We had grandparents, toddlers and two very fussy eaters, so I expected some friction. Instead the chef paced the courses perfectly, made a separate kids pasta on request and still delivered a dinner that felt elegant for the adults.',
    rating: 5,
  },
  {
    name: 'James',
    location: 'Sanur beachside villa',
    date: 'July 2025',
    eventType: 'Anniversary dinner for 2',
    category: 'Private Dinners',
    review: 'My wife had no idea what was planned. The team set up the table by the pool, built a four-course menu around her favourite flavours and had a small dessert waiting with a card. She cried in the best way.',
    rating: 5,
  },
  {
    name: 'Amelia',
    location: 'Canggu pool villa',
    date: 'April 2025',
    eventType: 'Private dining for 6',
    category: 'Private Dinners',
    review: 'We have stayed in Canggu multiple times and this was genuinely the best meal of any trip. The pasta was handmade, the branzino was perfectly cooked, and the chef worked around two coeliacs and a nut allergy without reducing the ambition of the menu at all. We booked again before we left.',
    rating: 5,
  },
  {
    name: 'Harper',
    location: 'Clifftop villa, Uluwatu',
    date: 'January 2026',
    eventType: 'Wedding dinner for 42',
    category: 'Weddings',
    review: 'We needed a wedding team that could handle sunset timing, dietary notes and a very small villa kitchen. myCHEF made it look effortless. Dinner landed exactly on schedule, the waiters were warm and calm, and our parents are still talking about the lamb and truffle jus.',
    rating: 5,
  },
  {
    name: 'Mila',
    location: 'Jimbaran garden villa',
    date: 'October 2025',
    eventType: 'Wedding welcome party for 65',
    category: 'Weddings',
    review: 'The welcome party was where we actually got to relax because myCHEF handled everything. They coordinated service, cleared glasses quickly and kept the buffet looking fresh all night. Guests thought we had hired a full hotel team.',
    rating: 5,
  },
  {
    name: 'Lucas',
    location: 'Seminyak private villa',
    date: 'March 2025',
    eventType: 'Villa wedding for 80',
    category: 'Weddings',
    review: 'Our wedding had 80 guests across multiple nationalities. myCHEF handled welcome canapés, a four-course plated dinner and a late-night grazing station without a single moment of visible chaos.',
    rating: 5,
  },
  {
    name: 'Isla',
    location: 'Ubud',
    date: 'December 2025',
    eventType: 'Wellness retreat for 26',
    category: 'Retreats & Corporate',
    review: 'Our retreat group had vegan, high-protein and no-dairy requests all at the same table. Every meal still felt abundant and beautiful. Adriano\'s team understood exactly how to keep food nourishing without making it boring.',
    rating: 5,
  },
  {
    name: 'Ethan',
    location: 'Berawa',
    date: 'September 2025',
    eventType: 'Corporate catering for 35',
    category: 'Retreats & Corporate',
    review: 'We booked breakfast, lunch and an evening canape service for our company offsite. Menus changed every day, portions were generous and the communication on timing was excellent.',
    rating: 5,
  },
  {
    name: 'Sofia',
    location: 'Tabanan',
    date: 'August 2025',
    eventType: 'Yoga retreat closing dinner',
    category: 'Retreats & Corporate',
    review: 'The closing dinner felt like the emotional finale our retreat needed. Long table, candlelight, beautifully plated food and a service team that read the room perfectly. Guests asked for the WhatsApp number before dessert was finished.',
    rating: 5,
  },
  {
    name: 'Noah',
    location: 'Canggu',
    date: 'March 2026',
    eventType: 'Birthday BBQ for 18',
    category: 'Celebrations & BBQs',
    review: 'This was supposed to be a relaxed birthday lunch and it ended up feeling like a private resort event. The grazing starters disappeared in minutes, the seafood grill was excellent and the bartender kept everything moving without ever being intrusive.',
    rating: 5,
  },
  {
    name: 'Charlotte',
    location: 'Pererenan',
    date: 'June 2025',
    eventType: 'Baby shower for 20',
    category: 'Celebrations & BBQs',
    review: 'We had a mixed group of Australian and Indonesian families and the catering team put together a menu that bridged both perfectly — Indonesian bites alongside very good mezze and fresh salads. Everything disappeared fast.',
    rating: 5,
  },
  {
    name: 'William',
    location: 'Ubud',
    date: 'May 2025',
    eventType: 'Corporate retreat for 14',
    category: 'Celebrations & BBQs',
    review: 'Our leadership offsite needed meals that energised rather than slowed the group down. The chef built every meal around clean proteins and seasonal vegetables. The team were invisible when they needed to be and attentive when we needed refreshes.',
    rating: 5,
  },
]

const REVIEWS_FAQS = [
  { q: 'Are these real myCHEF reviews?', a: 'Yes — each review names occasion, guest count, location and month. We curate which appear here, but every one is from a real Bali booking.' },
  { q: 'What is the 98% repeat-or-referred figure?', a: 'The share of bookings from guests who booked before or were referred by someone who had. It is the loyalty metric we watch closest. Context: <a href="/why-mychef">why myCHEF</a>.' },
  { q: 'Can I read reviews for my occasion or Bali area?', a: 'Yes — filter by occasion on this page. Area pages and private chef area guides also carry local context for Seminyak, Canggu, Ubud, Uluwatu and more. <a href="/locations">Locations →</a>' },
  { q: 'How do I leave a review after my event?', a: 'Your concierge shares a review link after service. Honest feedback — good or critical — is read by the whole team.' },
  { q: 'Do you publish negative feedback?', a: 'We prioritise useful, dated guest outcomes. If something goes wrong, our first response is fix or refund — then improve the system. See the replacement promise on <a href="/why-mychef">why myCHEF</a>.' },
  { q: 'How many events has myCHEF served in Bali?', a: '560+ events, 500+ villa bookings and 12,000+ guests — the same framing used across the site for operational proof.' },
  { q: 'Are reviews only for fine dining?', a: 'No — dinners, BBQs, weddings, retreats, family chef weeks and celebrations all appear. Match format via <a href="/services">services</a>.' },
  { q: 'Can I talk to past clients?', a: 'Privacy comes first. We can share more case detail for corporate or multi-day programmes on request after a real enquiry.' },
  { q: 'Where else can I verify myCHEF?', a: 'Google Business Profile, public chef profiles, published pricing and cancellation policy. Start at <a href="/chefs">about</a> and <a href="/chefs">chefs</a>.' },
  { q: 'Do reviews mention cleanup and punctuality?', a: 'Often yes — guests repeatedly note arrival timing, calm service and kitchens left cleaner than found.' },
  { q: 'Can I filter for wedding catering reviews?', a: 'Use the occasion filters on this page, then explore <a href="/events/weddings">wedding catering</a> for service detail.' },
  { q: 'Are family and kids experiences reviewed?', a: 'Yes where guests shared them. For kids-first formats see <a href="/kids-menus">kids menus</a> and <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a>.' },
  { q: 'Do long-stay private chef guests leave reviews?', a: 'Yes — multi-day villa chef weeks are a major category. Rates: <a href="/private-chef-bali">private chef Bali</a>.' },
  { q: 'How quickly do you respond if a review flags an issue?', a: 'Operations issues are handled same-day via WhatsApp with the same fix-or-refund standard used on service day.' },
  { q: 'Is star rating the same as Google rating?', a: 'On-page stars reflect guest feedback we display. Google stars are independent — both matter; we do not invent platform scores.' },
  { q: 'Can corporate buyers see case studies?', a: 'Yes — <a href="/corporate-case-studies">corporate case studies</a> and <a href="/events/corporate-events">corporate events</a>.' },
  { q: 'Do you serve my villa area if I only see reviews from another area?', a: 'Coverage is island-wide. A review from Canggu does not limit service in Ubud or Uluwatu. <a href="/locations">Locations →</a>' },
  { q: 'How do reviews affect which chef I get?', a: 'We match cuisine and occasion first. You can still request a named chef from <a href="/chefs">our chefs</a>.' },
  { q: 'Where should I start if reviews convinced me?', a: 'Send date, guests and villa area on WhatsApp — or <a href="/book">book</a> / <a href="/quote">quote</a> / <a href="/faq">FAQ</a>.' },
  { q: 'Can I see menus that match reviewed dinners?', a: 'Yes — <a href="/dining-styles">dining styles</a>, <a href="/fine-dining/menus">set menus</a>, <a href="/bbq-grill">BBQ</a> and <a href="/fine-dining">fine dining</a>.' },
]

// Review / AggregateRating schema built from the reviews actually rendered on this
// page (compliant: markup matches visible, dated, attributed on-page reviews;
// reviewCount = on-page review count, not the marketing "560+ bookings" stat).
const REVIEW_MONTHS: Record<string, string> = {
  January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
  July: '07', August: '08', September: '09', October: '10', November: '11', December: '12',
}
function reviewIsoDate(d: string): string {
  const m = d.match(/([A-Za-z]+)\s+(\d{4})/)
  return m && REVIEW_MONTHS[m[1]] ? `${m[2]}-${REVIEW_MONTHS[m[1]]}` : d
}
// All reviews in ONE @graph script. Reasons: (1) "Review" survives the prerender's
// @type dedup (not a shell type); (2) emitting them as 15 separate scripts fails —
// the dedup adds "Review" to its seen-set after the first and drops the rest, whereas
// a single @graph is kept whole (its nodes are filtered in one pass). Each review
// references the business by @id. Do not add aggregateRating on LocalBusiness —
// self-serving ratings are ineligible; stars belong on the Google Business Profile.
const reviewGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': REVIEWS.map((r) => ({
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE}/#business` },
    author: { '@type': 'Person', name: r.name },
    datePublished: reviewIsoDate(r.date),
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
    reviewBody: r.review,
  })),
}

const REVIEWS_SCHEMAS = [
  breadcrumbSchema('Reviews', `${SITE}/reviews`),
  faqPageSchema(REVIEWS_FAQS.map((f) => ({ question: f.q, answer: f.a }))),
  reviewGraphSchema,
]

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<ReviewCategory>('All')

  const filteredReviews = useMemo(
    () => (activeFilter === 'All' ? REVIEWS : REVIEWS.filter((review) => review.category === activeFilter)),
    [activeFilter],
  )

  const canonical = `${SITE}/reviews`

  return (
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="myCHEF Reviews | 560+ Events Served in Bali"
        description="Read guest reviews from myCHEF Bali villa dinners, weddings, retreats & events — real hosts, real outcomes."
        canonical={canonical}
        ogImage={`${SITE}/dining-table.webp`}
        jsonLd={REVIEWS_SCHEMAS}
      />
      <section className="px-5 pt-14 pb-12 sm:px-6 md:pt-24 md:pb-16">
        <div className="max-w-[1200px] mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-4">Guest reviews</p>
            <h1 className="mb-5 font-playfair text-3xl leading-tight sm:text-4xl md:text-6xl">What Our Guests Say</h1>
            <p className="text-lg md:text-xl text-[#4A4745] max-w-3xl leading-relaxed">
              Featured feedback from 560+ events, catering and private chef villa bookings across Bali — every review dated, located and tied to a real occasion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-source="reviews-cta"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
              <Link to="/pricing" className="text-sm font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                see pricing
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#E8E2CF] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
            <img
              src="/generated/mychef-ui-bali-testimonials-bg.webp"
              alt="myCHEF Bali guest testimonials and social proof"
              width={1600}
              height={1066}
              className="h-56 w-full object-cover"
              loading="eager"
            />
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#8A7A47] mb-4">The numbers behind the reviews</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#EFE7D1]">
                  <p className="text-2xl font-playfair text-[#1A1A1A] mb-1">4.9/5</p>
                  <p className="text-sm text-[#4A4745]">Guest rating</p>
                </div>
                <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#EFE7D1]">
                  <p className="text-2xl font-playfair text-[#1A1A1A] mb-1">12,000+</p>
                  <p className="text-sm text-[#4A4745]">Guests served</p>
                </div>
                <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#EFE7D1]">
                  <p className="text-2xl font-playfair text-[#1A1A1A] mb-1">560+</p>
                  <p className="text-sm text-[#4A4745]">Bookings delivered</p>
                </div>
                <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#EFE7D1]">
                  <p className="text-2xl font-playfair text-[#1A1A1A] mb-1">98%</p>
                  <p className="text-sm text-[#4A4745]">Repeat or referred</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:pb-14">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat} className="rounded-2xl border border-[#E8E2CF] bg-white px-5 py-4 text-center text-sm font-semibold text-[#4A4745] shadow-sm">
              {stat}
            </div>
          ))}
        </div>
      </section>

      <TestimonialBlock
        title="Featured guest moments"
        subtitle="From weddings to long-table villa dinners, these are the details guests remember."
        testimonials={REVIEWS.slice(0, 3).map((review) => ({
          name: review.name,
          location: review.location,
          eventType: review.eventType,
          date: review.date,
          quote: review.review,
          rating: review.rating,
        }))}
      />

      <section className="px-6 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-3">Browse by occasion</p>
              <h2 className="text-3xl md:text-5xl font-playfair mb-3">Reviews by category</h2>
              <p className="max-w-2xl text-[#4A4745] leading-relaxed">
                Private dinners, weddings, retreats & corporate events, and celebrations & BBQs — filter by the type of experience you want to book.
              </p>
            </div>
            <Link to="/pricing" className="text-sm font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              see pricing
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {FILTERS.map((filter) => {
              const isActive = filter === activeFilter
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${isActive ? 'bg-[#C5A028] text-black' : 'border border-[#E2DDD2] bg-white text-[#4A4745] hover:border-[#C5A028]'}`}
                >
                  {filter}
                </button>
              )
            })}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredReviews.map((review) => (
              <article key={`${review.name}-${review.date}`} className="rounded-[28px] border border-[#E8E2CF] bg-white p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <div className="flex flex-col gap-3 border-b border-[#F0EBDE] pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#FAF2D4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6F15]">
                      {review.eventType}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#7A746A]">{review.category}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-[#4A4745]">
                    <CalendarDays className="h-4 w-4 text-[#C5A028]" />
                    {review.date}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[#C5A028] text-[#C5A028]" />
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-playfair text-[#1A1A1A]">{review.name}</h3>
                  <p className="mt-1 text-sm text-[#4A4745]">{review.location}</p>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#35312E] sm:text-[15px]">“{review.review}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white border-y border-[#ECE5D5]">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-4">Verification</p>
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Where to Verify Us</h2>
          <p className="max-w-3xl mx-auto text-[#4A4745] leading-relaxed">
            Third-party review profiles:{' '}
            <strong></strong>.
            We publish every review here with a date, a location and an occasion so you can judge them the way we&apos;d want to be judged.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto rounded-[32px] bg-[#1A1A1A] px-8 py-12 text-white md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-4">Ready when you are</p>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-playfair leading-tight">Ready to create your own story?</h2>
              <p className="mt-4 text-white/[75%] leading-relaxed">
                Tell us your villa, date and guest count. We will match you with the right chef and service style for your dinner, event or retreat.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-source="reviews-cta"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <Link to="/why-mychef" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white">
                why villas choose myCHEF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-white border-y border-[#ECE5D5] scroll-mt-24">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Questions
          </p>
          <h2 className="text-2xl md:text-4xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Reviews FAQ
          </h2>
          <p className="text-center text-[#4A4745] mb-10 leading-relaxed">
            How we collect feedback, what the loyalty metrics mean, and how to verify myCHEF before you book in Bali.
          </p>
          <FAQAccordion items={REVIEWS_FAQS} defaultOpenCount={2} showToc ctaEvery={5} />
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Why myCHEF', href: '/why-mychef', desc: 'Why villas choose myCHEF for private chef & catering.' },
              { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
              { label: 'Private chef in Seminyak', href: '/private-chef/seminyak', desc: 'Villa dinners & events in Seminyak.' },
              { label: 'Private chef in Uluwatu', href: '/private-chef/uluwatu', desc: 'Clifftop villa dining in Uluwatu.' },
              { label: 'Private chef in Canggu', href: '/private-chef/canggu', desc: 'Private dining & BBQs in Canggu.' },
              { label: 'Private chef in Ubud', href: '/private-chef/ubud', desc: 'Retreats & villa dinners in Ubud.' },
              { label: 'wedding catering', href: '/events/weddings', desc: 'Wedding catering & villa receptions.' },
              { label: 'retreat catering', href: '/catering/retreat-catering', desc: 'Wellness & corporate retreat catering.' },
              { label: 'Contact', href: '/contact', desc: 'Talk to the team about your event.' },
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
    </div>
  )
}
