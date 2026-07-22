import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, MessageCircle, Star } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { REVIEWS, toIsoDate } from '@/data/reviews'

type ReviewCategory = 'All' | 'Weddings' | 'Private Dinners' | 'Catering' | 'Retreats'

const SITE = 'https://mychef.id'
const WHATSAPP_URL = 'https://wa.me/6289674072020'

const STATS = [
  '560+ events',
  '4.9★ rating',
  '12,000+ guests',
  '98% repeat bookings',
]

const FILTERS: ReviewCategory[] = ['All', 'Weddings', 'Private Dinners', 'Catering', 'Retreats']

const REVIEWED_BUSINESS = {
  '@type': 'LocalBusiness',
  name: 'myCHEF Bali',
  '@id': 'https://mychef.id/#business',
  url: SITE,
}

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: REVIEWED_BUSINESS,
  ratingValue: '4.9',
  bestRating: '5',
  reviewCount: '560',
}

// Emit standalone Review schemas rather than wrapping them in an ItemList.
// Google review snippets require Review to be a top-level entity (or directly
// attached to the reviewed item); ItemList/ListItem parents trigger the
// "Invalid object type for field '<parent_node>'" error in Search Console.
const reviewSchemas = REVIEWS.slice(0, 5).map((review) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: { '@type': 'Person', name: review.name },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: review.rating.toString(),
    bestRating: '5',
  },
  reviewBody: review.review,
  datePublished: toIsoDate(review.date),
  itemReviewed: REVIEWED_BUSINESS,
}))

const REVIEWS_SCHEMAS = [
  aggregateRatingSchema,
  ...reviewSchemas,
  breadcrumbSchema('Reviews', `${SITE}/reviews`),
  faqPageSchema([
    { question: 'How do guests rate myCHEF private chef services?', answer: 'myCHEF holds a 4.9-star average rating across 560+ verified reviews from villa guests, wedding parties, corporate retreats, and catering events throughout Bali.' },
    { question: 'Where can I read myCHEF reviews?', answer: 'Guest reviews are collected from Google, TripAdvisor, and direct feedback from villa owners and event planners. Our rating reflects 560+ experiences delivered across Bali.' },
    { question: 'Are the reviews from real guests?', answer: 'Yes — all reviews on this page are from real guests who experienced myCHEF private chef dinners, catering, and hospitality staffing at their Bali villas and events.' },
  ]),
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
    <div className="bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="myCHEF Bali Reviews | 4.9★ Private Chef & Catering"
        description="Read 4.9★ myCHEF Bali reviews from villa guests, weddings, retreats & events. Real hosts, real outcomes — see why 560+ villas keep coming back."
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
                className="inline-flex min-h-[48px] lg:min-h-[44px] items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
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
            <Link to="/pricing" className="inline-flex min-h-[48px] lg:min-h-[44px] items-center text-sm font-semibold text-[#1A1A1A] underline decoration-[#C5A028] underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
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
                  className={`min-h-[48px] lg:min-h-[44px] rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${isActive ? 'bg-[#C5A028] text-black' : 'border border-[#E2DDD2] bg-white text-[#4A4745] hover:border-[#C5A028]'}`}
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
                className="inline-flex min-h-[48px] lg:min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#D4B43A] focus:outline-none focus:ring-2 focus:ring-[#C5A028]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <Link to="/book" className="inline-flex min-h-[48px] lg:min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white">
                Start booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ RELATED SERVICES ═══════ */}
      <section className="py-16 px-6 bg-[#FAFAF8]">
        <div className="max-w-[960px] mx-auto">
          <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Fine Dining', href: '/fine-dining', desc: 'Michelin-trained tasting menus in your villa.' },
              { label: 'Catering', href: '/catering', desc: 'BBQ, buffet, plated & grazing tables.' },
              { label: 'Events', href: '/events', desc: 'Weddings, birthdays & corporate events.' },
              { label: 'Villa Chef', href: '/villa-chef', desc: 'Daily chef for your villa stay.' },
              { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
              { label: 'Get a Quote', href: '/quote', desc: 'Detailed proposal within 24 hours.' },
            ].map((item) => (
              <Link key={item.href} to={item.href} className="block p-5 rounded-2xl bg-white border border-[#E5E3E0] hover:border-[#C5A028]/50 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028]">
                <p className="font-semibold text-sm text-[#1A1A1A] mb-1">{item.label}</p>
                <p className="text-xs text-[#4A4745]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
