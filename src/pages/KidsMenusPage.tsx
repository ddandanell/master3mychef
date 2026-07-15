import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle } from 'lucide-react'
import SeoHead, { breadcrumbSchema, localBusinessSchema, serviceWithOfferSchema, faqPageSchema, menuSchema } from '@/components/SeoHead'
import Breadcrumb from '@/components/shared/Breadcrumb'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { MenuOverview } from '@/components/menus'
import { KIDS_MENUS } from '@/data/menus'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const SITE = 'https://mychef.id'
const WA_KIDS = buildWhatsAppUrl({ serviceName: "Kids' Party Menus" })

const FAQS = [
  {
    q: 'What is the minimum number of children?',
    a: "Six children minimum per booking. Every menu is portioned and priced per child, so you only pay for the little guests at the table. Bigger celebration? We regularly cater parties of 20+ children with advance notice.",
  },
  {
    q: 'How do you handle allergies?',
    a: "Every kids' menu is nut-free as standard. Tell us about any allergy — gluten, dairy, egg, shellfish — and our chefs will adapt the menu to keep every child safe. There is no extra charge for dietary adjustments.",
  },
  {
    q: 'Are the menus halal?',
    a: "Yes. All of our kids' menus are halal adaptable. Let us know your requirements when booking and our chefs will source and prepare everything accordingly.",
  },
  {
    q: 'What are the interactive options?',
    a: "Several menus are built around hands-on fun — build-your-own pizza, burger bars and dessert stations where children assemble their own plates. It keeps them entertained and turns dinner into the party activity.",
  },
]

const RELATED_COLLECTIONS = [
  { label: 'Classic Set Menus', href: '/fine-dining/menus', price: 'From IDR 1.25M' },
  { label: 'Three-Course', href: '/three-course', price: 'From IDR 850K' },
  { label: 'BBQ Grill', href: '/bbq-grill', price: 'From IDR 950K' },
  { label: 'All Menu Families', href: '/families', price: '50 menus' },
]

const WHY_PARENTS = [
  'Nut-free as standard',
  'Halal adaptable',
  'Mild flavours (no chilli)',
  "Interactive 'build your own' options",
  'Allergen-friendly',
  'Portion-sized for children',
]

export default function KidsMenusPage() {
  const canonical = `${SITE}/kids-menus`

  return (
    <div className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      <SeoHead
        title="Kids' Party Menus Bali — 6 Fun Options | myCHEF.id"
        description="Fun, healthy kids' party menus in Bali. Pizza, pasta, burgers, seafood & Indonesian. From IDR 250K/child. Nut-free."
        canonical={canonical}
        ogImage="/generated/mychef-events-bali-party-birthday.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema("Kids' Menus", canonical, 'Menu Families', `${SITE}/families`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
          serviceWithOfferSchema({
            name: "Kids' Party Menus",
            description: "Six fun, healthy kids' party menus for Bali villas — nut-free as standard, halal adaptable, with interactive build-your-own options. Cooked fresh in your villa by our private chefs. From IDR 250,000 per child, minimum 6 children.",
            url: canonical,
            price: '250000',
            unitText: 'per child',
          }),
          menuSchema(
            "Kids' Party Menus",
            "Six fun, healthy kids' party menus cooked fresh in your Bali villa — pizza, pasta, burgers, seafood and Indonesian favourites. Nut-free as standard, from IDR 250,000 per child.",
            canonical,
            KIDS_MENUS.map((menu) => ({ name: menu.name, description: menu.description })),
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '88vh' }}>
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-events-bali-party-birthday.webp"
            alt="Children's birthday party table in a Bali villa with cake, candles and warm golden lights"
            width={1280}
            height={800}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 py-24 max-w-4xl mx-auto text-center text-white">
          <Breadcrumb items={[{ label: "Kids' Menus" }]} theme="dark" className="px-0 pt-0 pb-8" />
          <p className="font-cormorant text-[#E8985E] text-sm uppercase tracking-[4px] mb-4">Kids&apos; Villa Dining</p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Little Guests.<br />Big Flavours.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Fun, healthy menus designed just for children.
          </p>
          <p className="text-base md:text-xl text-[#E8985E] font-medium mb-10">
            From IDR 250,000 per child
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_KIDS}
              target="_blank"
              rel="noopener noreferrer"
              data-source="kids-hero"
              className="inline-flex items-center gap-2 bg-[#E8985E] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#f0a76f] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan a Kids&apos; Party
            </a>
            <a
              href="#menus"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Explore the Menus
            </a>
          </div>
        </div>
      </section>

      <TrustStrip dark />

      {/* Menus */}
      <section id="menus" className="py-20 px-6" style={{ background: '#111111' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">The Kids&apos; Collection</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">Six Menus Children Actually Finish</h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Pizza parties, build-your-own burger bars and a gentle taste of Bali — every menu is cooked fresh in your villa by our private chefs.
            </p>
          </div>
          <MenuOverview menus={KIDS_MENUS} dataSource="kids-menus" accent="warm" />
        </div>
      </section>

      {/* Why Parents Love Us */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Why Parents Love Us</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white">Built for Children. Approved by Parents.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHY_PARENTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8985E] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen Note */}
      <section className="py-16 px-6" style={{ background: '#111111' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Allergies &amp; Dietary Needs</p>
          <h2 className="font-playfair text-3xl text-white mb-6">Nut-Free as Standard</h2>
          <p className="text-white/70 leading-relaxed">
            Every kids&apos; menu is nut-free as standard and halal adaptable. Tell us about any allergy and our chefs will adapt the menu.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Frequently Asked Questions</p>
            <h2 className="font-playfair text-3xl md:text-4xl text-white">Before You Book</h2>
          </div>
          <FAQAccordion items={FAQS} dark />
        </div>
      </section>

      {/* Related Menu Collections */}
      <section className="py-16 px-6" style={{ background: '#0B0B0B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cormorant text-[#E8985E] text-xs uppercase tracking-[4px] mb-4">Related Menu Collections</p>
          <h2 className="font-playfair text-2xl md:text-3xl text-white mb-10">Explore More Menus</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RELATED_COLLECTIONS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:border-[#E8985E]/60 hover:bg-white/[0.07] transition-all"
              >
                <p className="text-white font-medium text-sm mb-2">{item.label}</p>
                <p className="text-[#E8985E] text-xs uppercase tracking-[2px]">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cormorant text-[#E8985E] text-sm uppercase tracking-[4px] mb-4">Ready to Plan?</p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">Book Your Kids&apos; Party Chef</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            From IDR 250,000 per child &middot; Minimum 6 children
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_KIDS}
              target="_blank"
              rel="noopener noreferrer"
              data-source="kids-final-cta"
              className="inline-flex items-center gap-2 bg-[#E8985E] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#f0a76f] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Plan a Kids&apos; Party
            </a>
            <Link
              to="/recommended-services"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              Not sure? Let us recommend
            </Link>
          </div>
        </div>
      </section>

      <StickyMobileCTA
        pageSource="kids-menus"
        serviceName="kids' party menu in Bali"
        intent="menu and pricing"
      />
    </div>
  )
}
