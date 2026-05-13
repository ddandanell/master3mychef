import { useLocation, Link, Navigate } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from './SeoHead'
import { MENUS } from '@/data/sitemap'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

export default function MenuPage() {
  const { pathname } = useLocation()
  const isIndex = pathname === '/menus' || pathname === '/menus/'
  const slug = pathname.replace(/^\/menus\//, '').replace(/\/$/, '')

  if (isIndex) {
    return (
      <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
        <SeoHead
          title="All Sample Menus | myCHEF"
          description="Browse every cuisine we cook in Bali — Mediterranean, Balinese, Asian fusion, vegan, modern European, and halal."
          canonical={`${SITE}/menus`}
          jsonLd={[breadcrumbSchema('Menus', `${SITE}/menus`)]}
        />
        <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Menus</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">All Sample Menus</h1>
          <p className="text-lg text-[#4A4745] max-w-[640px] mb-12">
            Browse the cuisines our chefs cook every day. Every menu is fully customizable —
            tell us what you love, what you avoid, and we adjust.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {MENUS.map((m) => (
              <Link
                key={m.slug}
                to={`/menus/${m.slug}`}
                className="block bg-white border border-[#1A1A1A]/10 rounded-2xl p-6 hover:border-[#C5A028] transition-all"
              >
                <h2 className="font-playfair text-2xl mb-2">{m.name}</h2>
                <p className="text-sm text-[#4A4745]">{m.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    )
  }

  const menu = MENUS.find((m) => m.slug === slug)
  if (!menu) return <Navigate to="/404" replace />

  const title = `${menu.name} — Private Chef in Bali`
  const canonical = `${SITE}/menus/${slug}`
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'd like the ${menu.name} for my villa.`)}`

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead title={`${title} | myCHEF`} description={menu.description} canonical={canonical} jsonLd={[breadcrumbSchema(menu.name, canonical)]} />

      <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Menu</p>
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">{menu.name}</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-8">{menu.description}</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full">
          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
        </a>
      </section>

      <section className="px-8 py-16 bg-white">
        <div className="max-w-[960px] mx-auto">
          <h2 className="font-playfair text-3xl mb-6">Other menus we cook</h2>
          <div className="flex flex-wrap gap-3">
            {MENUS.filter((m) => m.slug !== slug).map((m) => (
              <Link key={m.slug} to={`/menus/${m.slug}`} className="text-sm border border-[#1A1A1A]/15 px-4 py-2 rounded-full hover:border-[#C5A028] hover:text-[#8B6F1A] transition-all">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
