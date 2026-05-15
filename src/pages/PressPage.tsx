import { Award, BadgeCheck, Camera, Clock3, FileText, Mail, MessageCircle, Newspaper, Sparkles } from 'lucide-react'

import SeoHead, { breadcrumbSchema, localBusinessSchema } from '@/components/SeoHead'
import { Breadcrumb } from '@/components/shared'
import { Button } from '@/components/ui/button'

const SITE = 'https://mychef.id'
const WA_NUMBER = '6282237565997'
const PRESS_KIT_MESSAGE = "Hi, I'm a journalist/blogger and would like to request the myCHEF.id press kit."
const PRESS_KIT_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(PRESS_KIT_MESSAGE)}`

const PRESS_MENTIONS = [
  {
    publication: 'Bali Travel Guide',
    quote:
      'myCHEF.id has become the go-to recommendation for villa guests who want restaurant-level dining without leaving the property. The service feels polished, private, and unmistakably premium.',
    year: '2024',
  },
  {
    publication: 'The Jakarta Post',
    quote:
      'Led by Michelin-trained founder Adriano, myCHEF.id has built a rare combination of culinary discipline and Bali hospitality scale — from intimate villa dinners to major celebrations.',
    year: '2024',
  },
  {
    publication: 'Luxury Escapes Asia',
    quote:
      'For travelers booking Bali villas, myCHEF.id stands out for reliability, beautiful presentation, and a team large enough to execute flawlessly for groups, families, and events.',
    year: '2023',
  },
  {
    publication: 'Villas of Bali',
    quote:
      'Trusted by luxury hosts and villa managers, myCHEF.id consistently delivers the kind of private dining guests remember long after checkout.',
    year: '2023',
  },
]

const MEDIA_STATS = [
  '560+ Villas Served',
  '12,000+ Guests',
  '500+ Events',
  'Michelin-Trained Chef',
]

const PRESS_KIT_ITEMS = [
  'High-resolution logo (PNG + SVG)',
  "Founder bio — Adriano's story",
  'Company fact sheet (founding year 2019, Bali HQ, 50+ staff)',
  'High-res food photography',
]

const TRUSTED_VILLAS = [
  'Seminyak Signature Villas',
  'Bukit Clifftop Collection',
  'Ubud Sanctuary Estates',
  'Canggu House Collection',
  'Nusa Dua Grand Villas',
]

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#1A1916]">
      <SeoHead
        title="Press & Media | myCHEF.id Bali"
        description="Press coverage, media kit, and PR contact for myCHEF.id — Bali's premier private chef and catering service. Request press kit via WhatsApp."
        canonical={`${SITE}/press`}
        ogImage={`${SITE}/partners-hero.webp`}
        jsonLd={[localBusinessSchema, breadcrumbSchema('Press & Media', `${SITE}/press`)]}
      />

      <div className="pt-24 md:pt-28 px-6 md:px-12">
        <div className="mx-auto max-w-[1240px]">
          <Breadcrumb items={[{ label: 'Press & Media' }]} />
        </div>
      </div>

      <section className="relative overflow-hidden px-6 pb-12 pt-6 md:px-12 md:pb-20 md:pt-10">
        <div className="absolute inset-0 opacity-80">
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at 12% 20%, rgba(197,160,40,0.18), transparent 34%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at 88% 18%, rgba(26,25,22,0.08), transparent 28%)' }}
          />
        </div>

        <div className="relative mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#8A857D]">Press &amp; Media</p>
            <h1 className="mt-6 font-playfair text-5xl leading-tight md:text-7xl">myCHEF.id in the Press</h1>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-[#4A4745] md:text-xl">
              Bali&apos;s most-trusted private chef service — featured in travel media, lifestyle publications, and hospitality guides.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="primary" size="brand" className="w-full sm:w-auto">
                <a href={PRESS_KIT_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Request Press Kit
                </a>
              </Button>
            </div>
          </div>

          <aside className="rounded-[32px] border border-[#C5A028]/25 bg-white/[0.85] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm md:p-10">
            <div className="flex items-center gap-3 text-[#C5A028]">
              <Newspaper className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">Media snapshot</span>
            </div>
            <h2 className="mt-4 font-playfair text-3xl text-[#1A1916]">What journalists need fast</h2>
            <div className="mt-8 space-y-4">
              {[
                'Michelin-trained founder story and Bali growth journey',
                'Verified company stats: 50+ staff, 560+ villas, 12,000+ guests',
                'Fast WhatsApp coordination for quotes, logos, and photos',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#ECE6D8] bg-[#FCFBF8] px-5 py-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C5A028]" />
                  <p className="text-sm leading-6 text-[#4A4745]">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[28px] bg-[#1A1916] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-[#C5A028]">PR Contact</p>
              <p className="mt-3 text-xl font-semibold">Sofia — Communications</p>
              <p className="mt-2 text-white/75">WhatsApp: +62 822-3756-5997</p>
              <p className="mt-1 text-white/75">Email: press@mychef.id</p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/75">
                <Clock3 className="h-4 w-4 text-[#C5A028]" />
                Response time: Within 24 hours
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#E7E1D4] bg-[#F8F6F0] px-6 py-6 md:px-12 md:py-8">
        <div className="mx-auto grid max-w-[1240px] gap-4 md:grid-cols-4 md:gap-0">
          {MEDIA_STATS.map((stat, index) => (
            <div
              key={stat}
              className={`rounded-2xl border border-[#E7E1D4] bg-white px-5 py-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#1A1916] md:rounded-none md:border-y-0 md:bg-transparent ${index < MEDIA_STATS.length - 1 ? 'md:border-r' : ''}`}
            >
              {stat}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[780px]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#8A857D]">Media Coverage</p>
            <h2 className="mt-4 font-playfair text-4xl text-[#1A1916] md:text-5xl">Recent mention highlights</h2>
            <p className="mt-4 text-lg leading-8 text-[#4A4745]">
              Simulated coverage placeholders for the dedicated press page — designed to show the kind of editorial positioning myCHEF.id belongs in.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PRESS_MENTIONS.map((item) => (
              <article
                key={`${item.publication}-${item.year}`}
                className="flex h-full flex-col rounded-[28px] border border-[#C5A028]/50 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">Publication</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#1A1916]">{item.publication}</h3>
                  </div>
                  <span className="rounded-full border border-[#C5A028]/40 bg-[#F8F2DE] px-3 py-1 text-xs font-semibold text-[#8D7422]">
                    {item.year}
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-[#4A4745]">“{item.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A1916] px-6 py-16 text-white md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C5A028]">Press Kit Download Section</p>
            <h2 className="mt-4 font-playfair text-4xl md:text-5xl">Press Kit &amp; Media Assets</h2>
            <p className="mt-5 max-w-[680px] text-lg leading-8 text-white/70">
              Everything a journalist, blogger, or producer needs to cover the brand quickly — from logos and founder background to fact-sheet details and polished food imagery.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="primary" size="brand" className="w-full sm:w-auto">
                <a href={PRESS_KIT_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Request Full Press Kit on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm md:p-10">
            <div className="space-y-4">
              {PRESS_KIT_ITEMS.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-black/10 px-5 py-4">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#C5A028]/20 text-[#C5A028]">
                    {index === 0 ? <BadgeCheck className="h-4 w-4" /> : index === 1 ? <FileText className="h-4 w-4" /> : index === 2 ? <Sparkles className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
                  </div>
                  <p className="text-base leading-7 text-white/80">✅ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-[#E7E1D4] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-10">
            <div className="flex items-center gap-3 text-[#C5A028]">
              <Mail className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">PR Contact</span>
            </div>
            <h2 className="mt-4 font-playfair text-4xl text-[#1A1916]">Media enquiries</h2>
            <dl className="mt-8 space-y-5 text-[#4A4745]">
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">Name</dt>
                <dd className="mt-2 text-lg font-semibold text-[#1A1916]">Sofia (Communications)</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">WhatsApp</dt>
                <dd className="mt-2 text-lg font-semibold text-[#1A1916]">+62 822-3756-5997</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">Email</dt>
                <dd className="mt-2 text-lg font-semibold text-[#1A1916]">press@mychef.id</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">Response time</dt>
                <dd className="mt-2 text-lg font-semibold text-[#1A1916]">Within 24 hours</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[32px] border border-[#C5A028]/30 bg-[#FCFBF8] p-8 md:p-10">
            <div className="flex items-center gap-3 text-[#C5A028]">
              <Award className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#8A857D]">Social proof / Awards</span>
            </div>
            <h2 className="mt-4 font-playfair text-4xl text-[#1A1916]">Trusted by Bali&apos;s Best Villas</h2>
            <p className="mt-4 max-w-[640px] text-lg leading-8 text-[#4A4745]">
              Placeholder logo wall styled as text brands for now — ready to swap with approved partner marks when available.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {TRUSTED_VILLAS.map((villa) => (
                <div
                  key={villa}
                  className="flex min-h-[88px] items-center justify-center rounded-[24px] border border-[#E7E1D4] bg-white px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#6B675F]"
                >
                  {villa}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
