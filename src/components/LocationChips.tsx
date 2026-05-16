import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const CITIES = [
  { name: 'Seminyak', slug: 'seminyak' },
  { name: 'Canggu', slug: 'canggu' },
  { name: 'Ubud', slug: 'ubud' },
  { name: 'Uluwatu', slug: 'uluwatu' },
  { name: 'Sanur', slug: 'sanur' },
  { name: 'Nusa Dua', slug: 'nusa-dua' },
  { name: 'Jimbaran', slug: 'jimbaran' },
  { name: 'Berawa', slug: 'berawa' },
  { name: 'Pererenan', slug: 'pererenan' },
  { name: 'Bukit', slug: 'bukit' },
]

interface LocationChipsProps {
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function LocationChips({
  title = 'Available Across Bali',
  subtitle = 'Every service is available in every region. We know the local markets, the villa kitchens, and the best suppliers.',
  dark = false,
}: LocationChipsProps) {
  return (
    <section className={`py-16 md:py-24 px-6 ${dark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p
            className={`text-sm tracking-[0.3em] uppercase mb-3 ${dark ? 'text-[#C5A028]' : 'text-[#C5A028]'}`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Where We Serve
          </p>
          <h2
            className={`text-3xl md:text-4xl mb-3 ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          <p className={`max-w-xl mx-auto text-sm ${dark ? 'text-white/[50%]' : 'text-[#4A4745]'}`}>
            {subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              to={`/${city.slug}`}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm transition-all ${
                dark
                  ? 'border-white/10 text-white/[60%] hover:border-[#C5A028]/50 hover:text-[#C5A028]'
                  : 'border-[#E8E6E3] text-[#4A4745] hover:border-[#C5A028]/50 hover:text-[#C5A028]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" /> {city.name}
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-sm text-[#C5A028] hover:gap-3 transition-all"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            View All Locations <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
