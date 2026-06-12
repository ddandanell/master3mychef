import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, MessageCircle, Star } from 'lucide-react'
import SeoHead, { breadcrumbSchema, localBusinessSchema, faqPageSchema } from '@/components/SeoHead'
import TestimonialBlock from '@/components/shared/TestimonialBlock'

type ReviewCategory = 'All' | 'Weddings' | 'Private Dinners' | 'Catering' | 'Retreats'

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
const WHATSAPP_URL = 'https://wa.me/491635080236'

const MONTH_MAP: Record<string, string> = {
  January: '01', February: '02', March: '03', April: '04',
  May: '05', June: '06', July: '07', August: '08',
  September: '09', October: '10', November: '11', December: '12',
}
function toISOMonth(human: string): string {
  const [month, year] = human.split(' ')
  return `${year}-${MONTH_MAP[month] ?? '01'}`
}

const STATS = [
  '560+ events',
  '4.9★ rating',
  '12,000+ guests',
  '98% repeat bookings',
]

const FILTERS: ReviewCategory[] = ['All', 'Weddings', 'Private Dinners', 'Catering', 'Retreats']

const REVIEWS: Review[] = [
  {
    name: 'Olivia · Seminyak',
    location: 'Seminyak villa',
    date: 'February 2026',
    eventType: 'Private dinner for 8',
    category: 'Private Dinners',
    review: 'We booked myCHEF for our first night in Bali and it set the tone for the whole trip. Chef Bayu adjusted the menu for our gluten-free guest without making it feel like a compromise. The snapper, sambal and the way they left the kitchen spotless felt unbelievably polished.',
    rating: 5,
  },
  {
    name: 'Harper · Uluwatu',
    location: 'Clifftop villa in Uluwatu',
    date: 'January 2026',
    eventType: 'Wedding dinner for 42',
    category: 'Weddings',
    review: 'We needed a wedding team that could handle sunset timing, dietary notes and a very small villa kitchen. myCHEF made it look effortless. Dinner landed exactly on schedule, the waiters were warm and calm, and our parents are still talking about the lamb and truffle jus.',
    rating: 5,
  },
  {
    name: 'Noah · Canggu',
    location: 'Canggu birthday villa',
    date: 'March 2026',
    eventType: 'Birthday BBQ for 18',
    category: 'Catering',
    review: 'This was supposed to be a relaxed birthday lunch and it ended up feeling like a private resort event. The grazing starters disappeared in minutes, the seafood grill was excellent and the bartender kept everything moving without ever being intrusive. Zero stress for the host.',
    rating: 5,
  },
  {
    name: 'Isla · Ubud',
    location: 'Retreat venue in Ubud',
    date: 'December 2025',
    eventType: 'Wellness retreat for 26',
    category: 'Retreats',
    review: 'Our retreat group had vegan, high-protein and no-dairy requests all at the same table. Every meal still felt abundant and beautiful. Adriano’s team understood exactly how to keep food nourishing without making it boring, which is rare even at dedicated retreat venues.',
    rating: 5,
  },
  {
    name: 'Theo · Nusa Dua',
    location: 'Nusa Dua family villa',
    date: 'November 2025',
    eventType: 'Villa dinner for 12',
    category: 'Private Dinners',
    review: 'We had grandparents, toddlers and two very fussy eaters, so I expected some friction. Instead the chef paced the courses perfectly, made a separate kids pasta on request and still delivered a dinner that felt elegant for the adults. It was the easiest “special occasion” we have ever hosted.',
    rating: 5,
  },
  {
    name: 'Mila · Jimbaran',
    location: 'Jimbaran garden villa',
    date: 'October 2025',
    eventType: 'Wedding welcome party for 65',
    category: 'Weddings',
    review: 'The welcome party was where we actually got to relax because myCHEF handled everything. They coordinated service, cleared glasses quickly and kept the buffet looking fresh all night. Guests thought we had hired a full hotel team, which says everything.',
    rating: 5,
  },
  {
    name: 'Ethan · Berawa',
    location: 'Berawa corporate offsite',
    date: 'September 2025',
    eventType: 'Corporate catering for 35',
    category: 'Catering',
    review: 'We booked breakfast, lunch and an evening canape service for our company offsite. Menus changed every day, portions were generous and the communication on timing was excellent. For Bali operations, reliability matters as much as flavor, and they delivered both.',
    rating: 5,
  },
  {
    name: 'Sofia · Tabanan',
    location: 'Tabanan retreat estate',
    date: 'August 2025',
    eventType: 'Yoga retreat closing dinner',
    category: 'Retreats',
    review: 'The closing dinner felt like the emotional finale our retreat needed. Long table, candlelight, beautifully plated food and a service team that read the room perfectly. Guests asked for the WhatsApp number before dessert was finished.',
    rating: 5,
  },
  {
    name: 'James · Sanur',
    location: 'Sanur beachside villa',
    date: 'July 2025',
    eventType: 'Anniversary dinner for 2',
    category: 'Private Dinners',
    review: 'My wife had no idea what was planned and I was terrified of getting it wrong. The team set up the table by the pool, built a four-course menu around her favourite flavours and had a small dessert waiting with a card. She cried in the best way. I could not have pulled this off without them.',
    rating: 5,
  },
  {
    name: 'Charlotte · Pererenan',
    location: 'Pererenan villa',
    date: 'June 2025',
    eventType: 'Baby shower for 20',
    category: 'Catering',
    review: 'We had a mixed group of Australian and Indonesian families and I was worried about satisfying everyone. The catering team put together a menu that bridged both perfectly — Indonesian bites alongside very good mezze and fresh salads. The grazing spread looked beautiful and everything disappeared fast.',
    rating: 5,
  },
  {
    name: 'William · Ubud',
    location: 'Jungle villa, Ubud',
    date: 'May 2025',
    eventType: 'Corporate retreat for 14',
    category: 'Retreats',
    review: 'Our leadership offsite needed meals that energised rather than slowed the group down. The chef built every meal around clean proteins, seasonal vegetables, and enough carbohydrate for a full day of workshops. No heavy afternoon crashes. The team were invisible when they needed to be and attentive when we needed refreshes.',
    rating: 5,
  },
  {
    name: 'Amelia · Canggu',
    location: 'Canggu pool villa',
    date: 'April 2025',
    eventType: 'Private dining for 6',
    category: 'Private Dinners',
    review: 'We have stayed in Canggu multiple times and this was genuinely the best meal of any trip. The pasta was handmade, the branzino was perfectly cooked, and the chef worked around two coeliacs and a nut allergy without reducing the ambition of the menu at all. We booked again before we left.',
    rating: 5,
  },
  {
    name: 'Lucas · Seminyak',
    location: 'Seminyak private villa',
    date: 'March 2025',
    eventType: 'Villa wedding for 80',
    category: 'Weddings',
    review: 'Our wedding had 80 guests across multiple nationalities. myCHEF handled welcome canapés, a four-course plated dinner and a late-night grazing station without a single moment of visible chaos. The floor team was polished, the kitchen stayed calm, and every single guest commented on the food. That is all I can ask for.',
    rating: 5,
  },
]

const REVIEWS_SCHEMAS = [
  localBusinessSchema,
  breadcrumbSchema('Reviews', `${SITE}/reviews`),
  faqPageSchema([
    { question: 'How do guests rate myCHEF private chef services?', answer: 'myCHEF holds a 4.9-star average rating across 560+ verified reviews from villa guests, wedding parties, corporate retreats, and catering events throughout Bali.' },
    { question: 'Where can I read myCHEF reviews?', answer: 'Guest reviews are collected from Google, TripAdvisor, and direct feedback from villa owners and event planners. Our rating reflects 560+ experiences delivered across Bali.' },
    { question: 'Are the reviews from real guests?', answer: 'Yes — all reviews on this page are from real guests who experienced myCHEF private chef dinners, catering, and hospitality staffing at their Bali villas and events.' },
  ]),
  ...REVIEWS.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${SITE}/reviews#review-${r.name.split('·')[0].trim().replace(/\s+/g, '-').toLowerCase()}`,
    author: {
      '@type': 'Person',
      name: r.name.split('·')[0].trim(),
    },
    reviewBody: r.review,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    datePublished: toISOMonth(r.date),
    name: r.eventType,
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': 'https://mychef.id/#business',
      name: 'myCHEF',
      url: SITE,
    },
  })),
]

const SOCIAL_PROOF = [
  { name: 'Google', detail: '4.9★ local service rating' },
  { name: 'TripAdvisor', detail: 'Villa dining and event feedback' },
  { name: 'Airbnb Experiences', detail: 'Guest-loved private chef moments' },
]

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<ReviewCategory>('All')

  const filteredReviews = useMemo(
    () => (activeFilter === 'All' ? REVIEWS : REVIEWS.filter((review) => review.category === activeFilter)),
    [activeFilter],
  )

  const canonical = `${SITE}/reviews`

  return (
    <main className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="myCHEF Reviews | 4.9★ Private Chef & Catering Bali"
        description="Read guest reviews for myCHEF private dinners, weddings, retreats and catering events across Bali."
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
              4.9★ average across 560+ villa dinners, catering events and private chef bookings in Bali.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E4D7A8] bg-white px-5 py-3 shadow-sm">
                <div className="flex items-center gap-1" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[#C5A028] text-[#C5A028]" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#1A1A1A]">4.9 / 5 guest rating</span>
              </div>
              <a
                href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-source="reviews-cta" 
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#E8E2CF] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
            <img
              src="/generated/mychef-ui-bali-testimonials-bg.webp"
              alt="myCHEF Bali guest testimonials and social proof"
              className="h-56 w-full object-cover"
              loading="eager"
            />
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#8A7A47] mb-4">Trusted by villa guests across Bali</p>
              <div className="space-y-5">
                <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#EFE7D1]">
                  <p className="text-3xl font-playfair text-[#1A1A1A] mb-1">560+</p>
                  <p className="text-sm text-[#4A4745]">Private dinners, celebrations and chef bookings delivered in Bali villas.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#EFE7D1]">
                    <p className="text-2xl font-playfair mb-1">12,000+</p>
                    <p className="text-sm text-[#4A4745]">Guests served by Adriano and the myCHEF team.</p>
                  </div>
                  <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#EFE7D1]">
                    <p className="text-2xl font-playfair mb-1">98%</p>
                    <p className="text-sm text-[#4A4745]">Repeat or referred bookings from villas, retreats and event hosts.</p>
                  </div>
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
                Weddings, private dinners, retreat catering and villa celebrations — filter by the type of experience you want to book.
              </p>
            </div>
            <Link to="/pricing" className="text-sm font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
              See pricing guide
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
          <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028] font-semibold mb-4">Social proof</p>
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Seen where guests already search and share</h2>
          <p className="max-w-2xl mx-auto text-[#4A4745] leading-relaxed">
            Review-platform badges prepared for Google, TripAdvisor, and Airbnb Experiences proof points.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SOCIAL_PROOF.map((badge) => (
              <div key={badge.name} className="rounded-[24px] border border-[#E8E2CF] bg-[#FAFAF8] px-6 py-7 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8A7A47] mb-3">Review platform</p>
                <h3 className="text-2xl font-playfair mb-2">{badge.name}</h3>
                <p className="text-sm text-[#4A4745]">{badge.detail}</p>
              </div>
            ))}
          </div>
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
              <Link to="/book" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white">
                Start booking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
