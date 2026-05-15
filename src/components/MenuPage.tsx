import { useLocation, Link, Navigate } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema } from './SeoHead'
import { MENUS } from '@/data/sitemap'

const SITE = 'https://mychef.id'
const WA = '6282237565997'

const FEATURED_MENUS = [
  {
    name: 'Mediterranean Set Menu',
    subtitle: '3-course villa favourite',
    description: 'Burrata or seafood to start, handmade pasta or grilled catch for the main, and a classic Italian dessert to finish.',
    price: 'From IDR 650K/person',
    detailHref: '/menus/mediterranean',
  },
  {
    name: 'Indonesian Feast',
    subtitle: 'Family-style sharing menu',
    description: 'A generous spread of Indonesian favourites with sambals, grilled proteins, vegetables, rice, and tropical sweets for the table.',
    price: 'From IDR 450K/person',
    detailHref: '/menus/balinese',
  },
  {
    name: 'BBQ & Grill',
    subtitle: 'Poolside crowd-pleaser',
    description: 'Live-fire seafood, satay, wagyu, grilled vegetables, and bright sauces designed for relaxed villa evenings with a group.',
    price: 'From IDR 550K/person',
    detailHref: '/catering',
  },
  {
    name: 'Private Tasting Menu',
    subtitle: '5-course signature experience',
    description: 'A chef-led multi-course dinner with refined plating, premium ingredients, and the option to build a wine-led evening around it.',
    price: 'From IDR 1.2M/person',
    detailHref: '/fine-dining',
  },
] as const

const MENU_PRICE_GUIDE: Record<string, string> = {
  mediterranean: 'From IDR 650K/person',
  balinese: 'From IDR 450K/person',
  'asian-fusion': 'From IDR 550K/person',
  vegan: 'From IDR 450K/person',
  'modern-european': 'From IDR 1.2M/person',
  halal: 'From IDR 450K/person',
}

export default function MenuPage() {
  const { pathname } = useLocation()
  const isIndex = pathname === '/menus' || pathname === '/menus/'
  const slug = pathname.replace(/^\/menus\//, '').replace(/\/$/, '')

  if (isIndex) {
    return (
      <main className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
        <SeoHead
          title="Private Chef Menus in Bali | myCHEF"
          description="Explore myCHEF menu ideas for Bali villas — Mediterranean set menus, Indonesian feasts, BBQ nights, tasting menus, and customizable cuisine pages."
          canonical={`${SITE}/menus`}
          jsonLd={[breadcrumbSchema('Menus', `${SITE}/menus`)]}
        />

        <section className="px-8 pt-32 pb-16 max-w-[1120px] mx-auto">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Menus</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">Private Chef Menus for Bali Villas</h1>
          <p className="text-lg text-[#4A4745] max-w-[720px] mb-8">
            Start with one of our most-booked menu styles, then customize around your villa,
            guest count, dietary needs, and the mood you want to create.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
            >
              Book a Menu
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like help choosing the right menu for my villa stay.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/15 text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:border-[#C5A028] hover:text-[#8B6F1A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </section>

        <section className="px-8 pb-20 max-w-[1120px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED_MENUS.map((menu) => {
              const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, I'm interested in the ${menu.name}. Can you send details?`)}`

              return (
                <article
                  key={menu.name}
                  className="h-full rounded-[28px] border border-[#1A1A1A]/10 bg-white p-8 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[2px] text-[#8B6F1A] mb-3">{menu.subtitle}</p>
                  <h2 className="font-playfair text-3xl mb-3">{menu.name}</h2>
                  <p className="text-[#C5A028] font-semibold mb-4">{menu.price}</p>
                  <p className="text-sm leading-relaxed text-[#4A4745] mb-8">{menu.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/book"
                      className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-6 py-3 rounded-full hover:bg-[#D4B43A] transition-colors"
                    >
                      Book This Menu
                    </Link>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/15 text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-6 py-3 rounded-full hover:border-[#C5A028] hover:text-[#8B6F1A] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                  <Link
                    to={menu.detailHref}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8B6F1A] hover:text-[#C5A028] transition-colors"
                  >
                    View inspiration
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </section>

        <section className="px-8 py-16 bg-white">
          <div className="max-w-[1120px] mx-auto">
            <div className="max-w-[720px] mb-10">
              <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Browse by Cuisine</p>
              <h2 className="font-playfair text-3xl md:text-4xl mb-4">Need another style? Start with these cuisine pages.</h2>
              <p className="text-[#4A4745] leading-relaxed">
                These pages show the cuisines we cook most often. Every booking is tailored, so use them as inspiration and we will build the right version for your group.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {MENUS.map((m) => (
                <Link
                  key={m.slug}
                  to={`/menus/${m.slug}`}
                  className="block rounded-2xl border border-[#1A1A1A]/10 p-6 hover:border-[#C5A028] hover:shadow-sm transition-all"
                >
                  <h3 className="font-playfair text-2xl mb-2">{m.name}</h3>
                  <p className="text-sm text-[#C5A028] font-semibold mb-3">{MENU_PRICE_GUIDE[m.slug] || 'Custom quote'}</p>
                  <p className="text-sm text-[#4A4745] leading-relaxed">{m.description}</p>
                </Link>
              ))}
            </div>
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
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-4">{menu.description}</p>
        <p className="text-[#C5A028] font-semibold mb-8">{MENU_PRICE_GUIDE[menu.slug] || 'Custom pricing available on request'}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/15 text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:border-[#C5A028] hover:text-[#8B6F1A] transition-colors"
          >
            Book This Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-white">
        <div className="max-w-[960px] mx-auto">
          <h2 className="font-playfair text-3xl mb-4">Other menus we cook</h2>
          <p className="text-[#4A4745] mb-6">Need a different direction? Browse the rest of our cuisine pages or message us for a custom villa menu.</p>
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
