import { useLocation, Link, Navigate } from 'react-router-dom'
import { ArrowRight, MessageCircle, Check } from 'lucide-react'
import SeoHead, { breadcrumbSchema, aggregateRatingSchema, faqPageSchema } from './SeoHead'
import { MENUS, type Menu } from '@/data/siteArchitecture'
import TrustStrip from '@/components/shared/TrustStrip'

const SITE = 'https://mychef.id'
const WA = '491635080236'

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
          ogImage="/hero-fine-dining.webp"
          canonical={`${SITE}/menus`}
          jsonLd={[aggregateRatingSchema(4.9, 560), breadcrumbSchema('Menus', `${SITE}/menus`), faqPageSchema([
            { question: 'What types of menus does myCHEF offer in Bali?', answer: 'myCHEF offers Mediterranean tasting menus, Indonesian feasts, BBQ nights, grazing tables, floating breakfast menus, and fully customizable cuisines for any villa event in Bali.' },
            { question: 'Can I customise the menu for dietary restrictions?', answer: 'Yes — every menu is fully customizable. We accommodate gluten-free, vegan, halal, vegetarian, shellfish allergies, and pregnancy-safe requests at no extra charge.' },
            { question: 'How do I choose the right menu for my villa event?', answer: 'Contact our team via WhatsApp with your guest count, occasion, and preferences. We will recommend the best menu and send a proposal with pricing within 24 hours.' },
          ])]}
        />

        {/* ══════════════════════════════════ HERO ══════════════════════════════════ */}
        <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/generated/mychef-finedining-bali-luna-plating.webp"
              alt="myCHEF private chef menus — Bali villa dining"
              width={1920} height={1080}
              decoding="async" fetchPriority="high"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
          </div>
          <div className="relative z-10 max-w-[1120px] mx-auto px-8 pb-16 w-full">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The myCHEF Menu Collection
            </p>
            <h1 className="text-white text-4xl md:text-6xl leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Private Chef Menus<br /><span className="italic">for Bali Villas</span>
            </h1>
            <p className="text-white/[75%] text-lg max-w-[600px] mb-8">
              Every menu is adapted to your villa, your group, and your evening. These are starting points — we build from here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi myCHEF, I would like help choosing the right menu for my villa stay.')}`}
                target="_blank" data-source="menu-hero" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
              </a>
              <Link
                to="/fine-dining"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Fine Dining Menus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* ══════════════════════════════════ FINE DINING SPOTLIGHT ══════════════════════════════════ */}
        <section className="py-20 px-8 bg-[#1A1A1A]">
          <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Premium · Fine Dining
              </p>
              <h2 className="text-white text-3xl md:text-4xl mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Tasting Menus.<br /><span className="italic">In your villa.</span>
              </h2>
              <p className="text-white/[65%] text-base leading-relaxed mb-6">
                The Luna fine dining collection features two multi-course menus — Mediterranean Sea (IDR 2,200,000++) and Wagyu Experience (IDR 2,400,000++) — prepared by a Michelin-trained team in your villa kitchen.
              </p>
              <ul className="space-y-2 mb-8">
                {['Five courses, handmade pasta, premium ingredients', 'Michelin-trained chef + team of 6–10', 'All groceries, service, and cleanup included', 'Optional wine pairing +IDR 850K per person'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/[65%]">
                    <Check className="w-4 h-4 text-[#C5A028] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link to="/fine-dining" className="inline-flex items-center gap-2 bg-[#C5A028] text-white text-sm font-semibold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#D4B43A] transition-all">
                  The Full Experience <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/fine-dining/tasting-menu" className="inline-flex items-center gap-2 border border-white/20 text-white text-sm tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-white/10 transition-all">
                  Tasting Menu
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: '/generated/mychef-finedining-bali-luna-plating.webp', alt: 'Fine dining plating' },
                { src: '/generated/mychef-experience-bali-luna-gallery-2.webp', alt: 'Dessert course' },
                { src: '/generated/mychef-experience-bali-luna-wine.webp', alt: 'Wine pairing service' },
                { src: '/generated/mychef-experience-bali-luna-table.webp', alt: 'Villa table setting' },
              ].map((img) => (
                <div key={img.src} className="aspect-square overflow-hidden rounded-[16px]">
                  <img src={img.src} alt={img.alt} width={400} height={400} loading="lazy" decoding="async"
                    className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-20 max-w-[1120px] mx-auto">
          <div className="mb-10">
            <p className="text-[#C5A028] text-xs tracking-[0.35em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Most Booked</p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>Villa Catering Menus</h2>
          </div>
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
                      target="_blank" data-source="menu-card"
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
              {MENUS.map((m: Menu) => (
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
      <SeoHead title={`${title} | myCHEF`} description={menu.description} canonical={canonical} ogImage="/hero-fine-dining.webp" jsonLd={[aggregateRatingSchema(4.9, 560), breadcrumbSchema(menu.name, canonical)]} />

      <section className="px-8 pt-32 pb-16 max-w-[960px] mx-auto">
        <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Menu</p>
        <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6">{menu.name}</h1>
        <p className="text-lg text-[#4A4745] max-w-[640px] mb-4">{menu.description}</p>
        <p className="text-[#C5A028] font-semibold mb-8">{MENU_PRICE_GUIDE[menu.slug] || 'Custom pricing available on request'}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer" data-source="menu-detail" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-colors">
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
            {MENUS.filter((m: Menu) => m.slug !== slug).map((m: Menu) => (
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
