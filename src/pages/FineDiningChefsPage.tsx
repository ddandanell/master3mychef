import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Check, ChevronRight, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SeoHead, { localBusinessSchema, breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import FAQAccordion from '@/components/catering/FAQAccordion'
import TrustStrip from '@/components/shared/TrustStrip'
import { Breadcrumb } from '@/components/shared'

gsap.registerPlugin(ScrollTrigger)

const SITE = 'https://mychef.id'
const WHATSAPP_NUMBER = 628113803488

const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

interface PhilosophyItem {
  label: string
}

interface ChefCard {
  name: string
  background: string
  specialties: string[]
  style: string
  signatureDish: string
  availableFor: string
  image: string
  dataSource: string
  specialtyLabel: string
}

interface RequestStep {
  step: string
  title: string
  body: string
}

const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  { label: '50+ Professionals' },
  { label: 'International Training' },
  { label: 'Bali Sourced' },
]

const ADRIANO_SPECIALTIES = [
  'Mediterranean tasting menus',
  'Handmade pasta',
  'Live-fire protein',
  'Wine pairing',
]

const TEAM_CHEFS: ChefCard[] = [
  {
    name: 'I Made Surya',
    background: '15 years in Bali hospitality and trained at IHTI, Surya specializes in cross-cultural menus that feel polished without losing warmth. He is intuitive with large groups and makes complex villa dinners look effortless.',
    specialties: ['Indonesian-Mediterranean fusion', 'Villa dinners for groups', 'Corporate catering'],
    style: 'Warm, intuitive, confident with large groups. Makes cooking look effortless.',
    signatureDish: 'Balinese bebek betutu reimagined for fine dining plating',
    availableFor: 'Villa dinners, events, corporate bookings, groups up to 30',
    image: '/generated/mychef-finedining-bali-luna-plating.webp',
    dataSource: 'chefs-surya-cta',
    specialtyLabel: 'Indonesian-Mediterranean Fusion',
  },
  {
    name: 'Bayu Pranata',
    background: 'Trained in Jakarta under a French-trained Indonesian chef, Bayu moved to Bali in 2020 and became known for dessert precision. He is methodical, quietly brilliant, and the chef guests remember when the final course lands.',
    specialties: ['Plated desserts', 'Petit fours', 'Chocolate work', 'Pastry courses'],
    style: 'Methodical. Quiet talent. Guests always ask about the dessert.',
    signatureDish: 'Pandan crème brûlée with coconut tuile and mango gel',
    availableFor: 'Full villa dinners, pastry consultation, events with dessert stations',
    image: '/generated/luna-dessert.webp',
    dataSource: 'chefs-bayu-cta',
    specialtyLabel: 'Pastry & Dessert Precision',
  },
  {
    name: 'Ni Putu Asri',
    background: 'Born in Ubud and trained in Jakarta and Singapore, Asri returned to Bali with global technique and deep local ingredient knowledge. Her cooking is creative, grounded, and deeply connected to Bali\'s food culture.',
    specialties: ['Plant-forward menus', 'Balinese ceremonial-inspired dishes', 'Dietary-inclusive cooking'],
    style: 'Creative, grounded, deeply connected to Bali\'s food culture.',
    signatureDish: 'Jackfruit rendang with tempeh crust and sambal matah',
    availableFor: 'Villa dinners, retreats, plant-forward events',
    image: '/generated/mychef-finedining-bali-sol-produce.webp',
    dataSource: 'chefs-asri-cta',
    specialtyLabel: 'Plant-Forward Balinese',
  },
]

const REQUEST_STEPS: RequestStep[] = [
  {
    step: '01',
    title: 'Tell us your date + guest count',
    body: 'Message us with your villa area, the dinner style you want, and whether you already have a preferred chef in mind.',
  },
  {
    step: '02',
    title: 'We check availability',
    body: 'Our team confirms which chefs are open for your date and recommends the closest fit if your first choice is already booked.',
  },
  {
    step: '03',
    title: 'We confirm your chef',
    body: 'Once the deposit is in, we lock your chef, menu direction, and arrival plan for the evening.',
  },
]

const FAQS = [
  {
    q: 'Can I choose my own chef?',
    a: 'Yes, subject to availability. Tell us who you want when you message and we will check that chef first before suggesting anyone else.',
  },
  {
    q: 'What if my preferred chef is unavailable?',
    a: 'We will suggest the closest-fit alternative based on menu style and group size, or help you rebook for a date when your preferred chef is available.',
  },
  {
    q: 'Is Adriano available for all bookings?',
    a: "No. Adriano is reserved for Chef's Table on Fridays and Saturdays, plus a limited number of 7-course tasting menus and custom collaborations.",
  },
  {
    q: 'Are the chefs vetted?',
    a: 'Yes. Every myCHEF chef passes a background check, food safety certification review, and in-person skills assessment before leading a booking.',
  },
  {
    q: 'Can I meet the chef before booking?',
    a: 'Yes. We can arrange a WhatsApp intro call so you can align on style, dietary needs, and the kind of evening you want to host.',
  },
]

export default function FineDiningChefsPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>('.reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Hire a Private Chef Bali | Meet the myCHEF Team"
        description="Meet myCHEF's private chefs in Bali: Michelin-trained Adriano & specialists in Mediterranean, seafood & fire cooking. Hire yours via WhatsApp today."
        canonical="https://mychef.id/fine-dining/our-chefs"
        ogImage="/generated/mychef-finedining-bali-chefs-hero.webp"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema('Our Chefs Bali', `${SITE}/fine-dining/our-chefs`, 'Fine Dining', `${SITE}/fine-dining`),
          faqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      <section className="relative min-h-[90vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-finedining-bali-chefs-hero.webp"
            alt="myCHEF chefs preparing a fine dining private service in Bali"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:py-20 md:px-10">
          <div className="max-w-3xl">
            <Breadcrumb
              items={[{ label: 'Fine Dining', href: '/fine-dining' }, { label: 'Our Chefs' }]}
              theme="dark"
              className="px-0 pt-0 pb-8"
            />
            <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[0.3em] mb-4">In-House Culinary Team</p>
            <div className="max-w-4xl">
              <p
                className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C5A028]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                myCHEF.id · Bali Fine Dining
              </p>
              <h1
                className="mb-5 text-5xl text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.02 }}
              >
                Our Chefs
              </h1>
              <p
                className="mb-8 max-w-2xl text-2xl italic text-white/[80%] md:text-3xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                International training. Balinese soul. Every dish a decision.
              </p>
              <p className="mb-8 max-w-2xl text-sm uppercase tracking-[0.2em] text-white/[70%]">
                The team executes two core fine-dining menus: La Riviera and L&apos;Odyssée.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={buildWhatsAppLink("Hi myCHEF, I'd like to book a dinner.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="chefs-hero-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-all hover:scale-[1.02] hover:bg-[#D2AE34] focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book via WhatsApp
                </a>
                <Link
                  to="/fine-dining/menus"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  View Menus
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/[80%]">
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#C5A028]" /> 560+ villas served</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#C5A028]" /> 12,000+ guests hosted</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#C5A028]" /> 50+ Indonesian hospitality professionals</span>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-6xl gap-5 text-center md:grid-cols-3">
          {PHILOSOPHY_ITEMS.map((item) => (
            <div key={item.label} className="reveal rounded-2xl border border-[#C5A028]/40 bg-white/[0.05] px-6 py-6">
              <p
                className="text-lg font-medium text-white md:text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal overflow-hidden rounded-[30px] border border-white/10 bg-black/20">
            <img
              src="/generated/mychef-finedining-bali-chef-signature.jpg"
              alt="Adriano, founder and head chef of myCHEF Bali"
              width={900}
              height={1100}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover" />
          </div>

          <div className="reveal">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Founder &amp; Head Chef
            </p>
            <h2
              className="mb-6 text-4xl text-white md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Adriano
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-white/[0.85] md:text-lg">
              <p>
                Adriano trained under a Michelin-starred chef in Milan and spent 12 years inside European fine dining kitchens where precision was non-negotiable.
              </p>
              <p>
                He brings an Italian discipline to every menu: clean flavors, exact technique, and the belief that a plate should say only what it needs to say.
              </p>
              <p>
                After falling in love with Bali in 2018, he founded myCHEF to build a private dining brand that respected local sourcing while holding international standards.
              </p>
              <p>
                Today he still leads the signature tasting menus, trains the chef team, and takes the bookings where the cooking needs his personal hand.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#C5A028]/40 bg-white/[0.08] p-6">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.22em] text-[#C5A028]">Chef&apos;s Table note</p>
              <p className="text-white/[90%]">
                Adriano is available for Chef&apos;s Table on Friday and Saturday only, with a maximum of 6 guests.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ADRIANO_SPECIALTIES.map((item) => (
                <div key={item} className="inline-flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-white/[0.85]">
                  <Check className="h-4 w-4 shrink-0 text-[#C5A028]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-[#C5A028]">
                <Star className="h-4 w-4" />
                <span className="text-sm uppercase tracking-[0.24em]">Signature dish</span>
              </div>
              <p className="text-lg text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Handmade tagliolini with Bali lemon and bottarga
              </p>
              <p className="mt-3 text-sm text-white/[0.85]">
                Available for Chef&apos;s Table (Fri/Sat only), 7-Course Tasting Menu, and custom collaborations.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppLink("Hi myCHEF, I'd like to reserve Adriano for a private dinner.")}
                target="_blank"
                rel="noopener noreferrer"
                data-source="chefs-adriano-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#D2AE34] focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                <MessageCircle className="h-4 w-4" />
                Reserve with Adriano
              </a>
              <Link to="/fine-dining/chefs-table" className="inline-flex items-center gap-2 text-sm font-medium text-white/[80%] transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1">
                View Chef&apos;s Table
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mx-auto mb-14 max-w-3xl text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              The Team
            </p>
            <h2 className="mb-5 text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Team
            </h2>
            <p className="text-base leading-relaxed text-[#4A4745] md:text-lg">
              Every myCHEF dinner is delivered by a vetted, trained professional who has worked in the most demanding hospitality environments in Indonesia.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {TEAM_CHEFS.map((chef) => (
              <article key={chef.name} className="reveal overflow-hidden rounded-[28px] border border-[#E7E2D7] bg-white shadow-[0_20px_50px_rgba(26,25,22,0.05)]">
                <div className="aspect-[4/4.4] overflow-hidden bg-[#F2F0EA]">
                  <img
                    src={chef.image}
                    alt={`${chef.name} — private chef at myCHEF Bali`}
                    width={900}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl text-[#1A1916]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {chef.name}
                  </h3>
                  <p
                    className="mt-3 text-xs uppercase tracking-[0.3em] text-[#C5A028]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    {chef.specialtyLabel}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#4A4745]">{chef.background}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#4A4745]">{chef.style}</p>
                  <div className="mt-5 rounded-2xl bg-[#FAFAF8] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8A7A52]">Available for:</p>
                    <p className="mt-1 text-sm text-[#1A1916]">{chef.availableFor}</p>
                  </div>
                  <p className="mt-4 text-sm text-[#4A4745]">
                    <span className="font-medium text-[#1A1916]">Signature dish:</span> {chef.signatureDish}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {chef.specialties.map((item) => (
                      <span key={item} className="rounded-full border border-[#E7E2D7] px-3 py-1 text-xs text-[#6A665F]">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={buildWhatsAppLink(`Hi myCHEF, I'd like to book ${chef.name} for a private dinner.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source={chef.dataSource}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#C5A028] transition-colors hover:text-[#A88716] focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {`Book ${chef.name}`}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal mx-auto mb-12 max-w-3xl text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Booking Flow
            </p>
            <h2 className="mb-5 text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Requesting a specific chef
            </h2>
            <p className="text-base leading-relaxed text-[#4A4745] md:text-lg">
              If you already know whose cooking you want, the process is simple and handled over WhatsApp.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {REQUEST_STEPS.map((item, index) => (
              <div key={item.step} className="reveal rounded-[24px] border border-[#E8E1D4] bg-[#FAFAF8] p-7">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-5xl leading-none text-[#C5A028]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.step}
                  </p>
                  {index < REQUEST_STEPS.length - 1 && <ChevronRight className="h-5 w-5 text-[#C5A028]" />}
                </div>
                <h3 className="text-xl text-[#1A1916]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4745]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 rounded-[24px] border border-[#C5A028]/20 bg-[#FFF8E8] px-6 py-5 text-center text-sm text-[#6A5731]">
            <span className="font-semibold text-[#A88716]">Note:</span> Chef&apos;s Table is Adriano only.
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="reveal mb-10 text-center">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              FAQ
            </p>
            <h2 className="mb-5 text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Questions before you book?
            </h2>
            <p className="text-base leading-relaxed text-[#4A4745] md:text-lg">
              We will help you choose the right chef, align the menu, and confirm the best fit for your date.
            </p>
          </div>
          <div className="reveal">
            <FAQAccordion items={FAQS} defaultOpenCount={1} />
          </div>
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="reveal rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-12 md:px-12">
            <p
              className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C5A028]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Reserve your chef
            </p>
            <h2 className="mb-5 text-4xl text-white md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Reserve your chef
            </h2>
            <p
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: '#E7E2D8' }}
            >
              Share your date, guest count, and preferred chef. We confirm quickly and match the right kitchen talent for your villa dinner.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={buildWhatsAppLink("Hi myCHEF, I'd like to book a dinner.")}
                target="_blank"
                rel="noopener noreferrer"
                data-source="chefs-final-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A028] px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#D2AE34] focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp myCHEF
              </a>
              <Link
                to="/fine-dining"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Explore Fine Dining
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <TrustStrip dark />
        </div>
      </section>
    </div>
  )
}
