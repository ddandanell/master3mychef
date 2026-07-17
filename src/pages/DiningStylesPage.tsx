import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, localBusinessSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { CLASSIC_MENUS, THREE_COURSE_MENUS, KIDS_MENUS, BBQ_MENUS } from '@/data/menus'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const canonical = 'https://mychef.id/dining-styles'

const WA_LINK = buildWhatsAppUrl({
  serviceName: 'a private chef menu in Bali',
  intent: 'a menu recommendation for my event',
})

interface FamilyCard {
  name: string
  menuCount?: number
  price: string
  line: string
  href: string
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
}

const FAMILIES: FamilyCard[] = [
  {
    name: 'Classic Set Menus',
    menuCount: CLASSIC_MENUS.length,
    price: 'From IDR 1.25M',
    line: 'Six-course fine dining, cooked and served in your villa.',
    href: '/fine-dining/menus',
    image: '/generated/mychef-families-bali-classic-set-menus.webp',
    imageWidth: 960,
    imageHeight: 720,
    imageAlt: 'Plated duck breast course on a candlelit dining table inside a Bali villa',
  },
  {
    name: 'Three-Course',
    menuCount: THREE_COURSE_MENUS.length,
    price: 'From IDR 850K',
    line: 'Lighter three-course dining for relaxed villa evenings.',
    href: '/three-course',
    image: '/generated/mychef-families-bali-three-course.webp',
    imageWidth: 960,
    imageHeight: 720,
    imageAlt: 'Three-course dinner of starter, herb chicken main and lemon tart served beside a Bali villa pool',
  },
  {
    name: 'BBQ Grill',
    menuCount: BBQ_MENUS.length,
    price: 'From IDR 950K',
    line: 'A live grill station at your villa, cooked over open flame.',
    href: '/bbq-grill',
    image: '/generated/mychef-families-bali-bbq-grill.webp',
    imageWidth: 960,
    imageHeight: 720,
    imageAlt: 'Private chef grilling satay, prawns and whole fish over charcoal at a Bali villa BBQ station',
  },
  {
    name: "Kids' Menus",
    menuCount: KIDS_MENUS.length,
    price: 'From IDR 250K',
    line: 'Fun, healthy, nut-free menus children actually eat.',
    href: '/kids-menus',
    image: '/generated/mychef-families-bali-kids-menus.webp',
    imageWidth: 960,
    imageHeight: 720,
    imageAlt: "Kids' party table in a Bali villa with mini burgers, small pizzas, fresh fruit cups and cupcakes",
  },
  {
    name: 'Fine Dining Experience',
    price: 'From IDR 1.25M',
    line: 'The full private-chef evening, from aperitif to dessert.',
    href: '/fine-dining',
    image: '/generated/mychef-families-bali-fine-dining-experience.webp',
    imageWidth: 960,
    imageHeight: 720,
    imageAlt: 'Private chef plating a fine dining course with tweezers in a Bali villa kitchen',
  },
  {
    name: 'Catering & Events',
    price: 'Custom quotes',
    line: 'Weddings, parties and corporate events, fully staffed.',
    href: '/catering',
    image: '/generated/mychef-families-bali-catering-events.webp',
    imageWidth: 960,
    imageHeight: 720,
    imageAlt: 'Long banquet table with flower runners and staffed service at a golden-hour Bali event',
  },
]

export default function DiningStylesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Dining Styles — Find Your Perfect Menu | myCHEF.id"
        description="Browse myCHEF.id menus by dining style. 50 menus across 6 collections. Find your perfect dining experience."
        canonical={canonical}
        ogImage="/generated/mychef-dining-styles-bali-hero.webp"
        jsonLd={[localBusinessSchema, breadcrumbSchema('Dining Styles', canonical)]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-dining-styles-bali-hero.webp"
            alt="Private villa dining in Bali with chef service, grilled sharing platters, plated courses and a live grill station"
            width={1440}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.30) 100%)' }}
          />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <Breadcrumb
            items={[{ label: 'Dining Styles' }]}
            theme="dark"
            className="px-0 pt-0 pb-8 flex justify-center"
          />
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">myCHEF &middot; Dining Styles</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Find Your Perfect Menu
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Browse by dining style or occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="families-hero"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get a Recommendation
            </a>
            <a
              href="#dining-styles"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Browse Dining Styles
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* Family cards */}
      <section id="dining-styles" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Six Collections</p>
            <h2 className="font-playfair text-3xl md:text-4xl mb-4">Browse by Dining Style</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Fifty menus across six collections — from six-course fine dining to poolside BBQs and nut-free kids&rsquo; favourites. Every menu is cooked fresh in your villa by our own chefs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAMILIES.map((family) => (
              <Link
                key={family.href}
                to={family.href}
                className="group flex flex-col rounded-[28px] border border-white/10 bg-white/[0.04] overflow-hidden hover:border-[#C5A028]/50 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={family.image}
                    alt={family.imageAlt}
                    width={family.imageWidth}
                    height={family.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    {family.menuCount !== undefined && (
                      <span className="text-white/40 text-xs uppercase tracking-[2px]">{family.menuCount} menus</span>
                    )}
                    <span className="text-[#C5A028] text-xs font-semibold uppercase tracking-[2px]">{family.price}</span>
                  </div>
                  <h3 className="font-playfair text-2xl text-white mb-2">{family.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{family.line}</p>
                  <span className="mt-auto text-[#C5A028] text-sm font-semibold tracking-wide group-hover:underline">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure? CTA */}
      <section className="py-20 px-6 border-t border-white/10" style={{ background: '#0B0B0B' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-[#C5A028] text-xs uppercase tracking-[4px] mb-4">Not Sure?</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">Tell Us About Your Event</h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Tell us about your event and we will recommend the perfect menu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/recommended-services"
              className="inline-flex items-center gap-2 bg-[#C5A028] text-black font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all"
            >
              Find My Menu
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="families-not-sure"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="families"
        serviceName="a private chef menu in Bali"
        intent="a menu recommendation for my event"
      />
    </div>
  )
}
