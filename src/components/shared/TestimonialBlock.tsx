import { CalendarDays, Quote, Star } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  quote: string
  rating?: number
  image?: string
  eventType?: string
  date?: string
}

interface TestimonialBlockProps {
  testimonials?: Testimonial[]
  title?: string
  subtitle?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Sarah & James',
    location: 'Seminyak Villa',
    eventType: 'Private Dinner',
    date: 'March 2026',
    quote: 'The BBQ was incredible — the Wagyu was perfectly cooked and the team handled everything. We didn\'t lift a finger.',
    rating: 5,
  },
  {
    name: 'The Chen Family',
    location: 'Canggu Villa',
    eventType: 'Family Gathering',
    date: 'February 2026',
    quote: 'We booked the Indonesian buffet for 40 guests. The sate lilit and nasi kuning were authentic and delicious. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Emma R.',
    location: 'Uluwatu Villa',
    eventType: 'Wedding Welcome Party',
    date: 'January 2026',
    quote: 'The grazing table was the highlight of our wedding cocktail hour. Every guest commented on how beautiful (and tasty) it was.',
    rating: 5,
  },
]

export default function TestimonialBlock({
  testimonials = defaultTestimonials,
  title = 'What Our Guests Say',
  subtitle = 'Real reviews from real villa events across Bali.',
}: TestimonialBlockProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <p
            className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6B8E5A]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Testimonials
          </p>
          <h2
            className="mb-4 text-3xl leading-tight text-[#1A1A1A] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-2xl text-lg text-[#4A4745]">{subtitle}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => {
            const rating = Math.max(1, Math.min(5, t.rating ?? 5))
            const eventType = t.eventType ?? 'Villa Experience'
            const reviewDate = t.date ?? 'Recent stay'

            return (
              <article
                key={`${t.name}-${i}`}
                className="flex flex-col rounded-2xl border border-[#E8E6E3] border-l-4 border-l-[#C5A028] bg-[#FAFAF8] p-6 shadow-[0_18px_40px_rgba(26,25,22,0.06)] md:p-8"
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-1" aria-label={`${rating} star review`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`h-4 w-4 ${j < rating ? 'fill-[#C5A028] text-[#C5A028]' : 'text-[#D4C8A0]'}`}
                      />
                    ))}
                  </div>
                  <span className="rounded-full bg-[#F4E7B4] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6F15]">
                    {eventType}
                  </span>
                </div>

                <Quote className="mb-4 h-8 w-8 text-[#C5A028]/35" />
                <p className="mb-6 flex-1 text-base leading-relaxed text-[#1A1A1A]">
                  “{t.quote}”
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[#E8E6E3] pt-6">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A028]/10 ring-1 ring-[#C5A028]/20">
                      <span className="text-sm font-semibold text-[#8A6F15]">
                        {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-[#4A4745]">{t.location}</p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-[#6B675F]">
                    <CalendarDays className="h-3.5 w-3.5 text-[#C5A028]" />
                    {reviewDate}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
