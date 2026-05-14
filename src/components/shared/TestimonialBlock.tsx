import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  location: string
  quote: string
  rating?: number
  image?: string
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
    quote: 'The BBQ was incredible — the Wagyu was perfectly cooked and the team handled everything. We didn\'t lift a finger.',
    rating: 5,
  },
  {
    name: 'The Chen Family',
    location: 'Canggu Villa',
    quote: 'We booked the Indonesian buffet for 40 guests. The sate lilit and nasi kuning were authentic and delicious. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Emma R.',
    location: 'Uluwatu Villa',
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-[#6B8E5A] text-sm uppercase tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Testimonials
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[#4A4745] max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#6B8E5A]/30 mb-4" />
              <p className="text-[#1A1A1A] text-base leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center">
                    <span className="text-[#6B8E5A] font-semibold text-sm">
                      {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-[#1A1A1A] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#4A4745] text-xs">{t.location}</p>
                </div>
                {t.rating && (
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#C5A028] text-[#C5A028]" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
