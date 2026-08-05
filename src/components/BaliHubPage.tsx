import { Link } from 'react-router-dom'
import { MessageCircle, Utensils, Flame, Sparkles } from 'lucide-react'
import SeoHead, { breadcrumbSchema, faqPageSchema } from './SeoHead'
import { TOP_CITIES } from '@/data/topCities'
import { getLocationCanonical } from '@/data/siteArchitecture'

const SITE = 'https://mychef.id'
const WA = '6289674072020'

// The Bali hub — links to all 10 top-city pages.
// Lives at /guide/private-chef-bali so the SEO from the old guide URL is reused.
// This is the page each city page links back to ("See the full Bali coverage map").
export default function BaliHubPage() {
  const canonical = `${SITE}/guide/private-chef-bali`
  // Keyword ownership: this page owns "private chef Bali areas / coverage map".
  // Do NOT use head-term H1 "Private Chef in Bali" — that belongs to /private-chef-bali.
  // Do NOT use "How to Hire" — that belongs to /blog/how-to-hire-private-chef-bali-complete-guide.
  const title = 'Private Chef Coverage Across Bali'
  const description =
    'myCHEF private chef coverage across Bali’s top villa regions — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Berawa, Pererenan and Bukit. Pick your area and book.'
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent("Hi myCHEF, I'd like a private chef in Bali.")}`

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SeoHead
        title="Private Chef Bali Areas | Coverage Map by Villa Region | myCHEF"
        description={description}
        canonical={canonical}
        ogType="article"
        ogImage={`${SITE}/generated/mychef-location-bali-hub-hero.webp`}
        jsonLd={[
          breadcrumbSchema('Bali Coverage', canonical),
          faqPageSchema([
          { question: 'How much does a private chef in Bali cost?', answer: 'Daily private chef from IDR 1,000,000++/day for one meal (chef+assistant). Event dinners and fine dining are quoted per person. <a href="/private-chef-bali">Private chef</a> · <a href="/pricing">pricing</a>.' },
          { question: 'What areas in Bali does myCHEF serve?', answer: 'All major villa areas island-wide — Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua and more. <a href="/locations">Locations →</a>' },
          { question: 'What services does myCHEF offer in Bali?', answer: 'Private chef, fine dining, catering, weddings, corporate, experiences, in-villa staff and long-term staffing. <a href="/services">Services →</a>' },
          { question: 'Is same-day booking possible?', answer: 'Often outside peak — WhatsApp to check. A few days notice is ideal.' },
          { question: 'Are groceries included?', answer: 'On daily chef hire, shopping is included and food billed at cost with receipts.' },
          { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
          { question: 'Weddings?', answer: 'Yes — <a href="/events/weddings">wedding catering</a>.' },
          { question: 'Fine dining in villa?', answer: 'Yes — <a href="/fine-dining">fine dining</a>.' },
          { question: 'Kids menus?', answer: 'Yes — <a href="/kids-menus">kids menus</a>.' },
          { question: 'Deposit?', answer: 'Usually 50%.' },
          { question: 'Cancellation?', answer: '<a href="/cancellation">Policy</a>.' },
          { question: 'Allergies?', answer: 'Supported when briefed. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Guide</a>.' },
          { question: 'How to book?', answer: 'WhatsApp date, guests, area — <a href="/book">book</a>.' },
          { question: 'Staff only?', answer: '<a href="/in-villa-service">In-villa service</a>.' },
          { question: 'Long-term chef?', answer: '<a href="/staffing/live-in-chef">Live-in chef</a>.' },
          { question: 'BBQ parties?', answer: '<a href="/catering/bbq-catering">BBQ catering</a>.' },
          { question: 'Why myCHEF?', answer: '<a href="/why-mychef">Why myCHEF</a>.' },
          { question: 'Reviews?', answer: '<a href="/reviews">Reviews</a>.' },
          { question: 'Pricing tables?', answer: '<a href="/pricing">Pricing</a>.' },
          { question: 'FAQ hub?', answer: '<a href="/faq">FAQ</a>.' }
        ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            url: canonical,
            image: `${SITE}/generated/mychef-location-bali-hub-hero.webp`,
            publisher: {
              '@type': 'Organization',
              name: 'myCHEF',
              url: SITE,
              logo: { '@type': 'ImageObject', url: `${SITE}/mychef-logo.svg` },
            },
            author: { '@type': 'Organization', name: 'myCHEF' },
            dateModified: new Date().toISOString().slice(0, 10),
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
          },
        ]}
      />

      {/* Hero — full-bleed image with overlay copy */}
      <section className="relative w-full min-h-[78vh] flex items-end overflow-hidden">
        <img
          src="/generated/mychef-location-bali-hub-hero.webp"
          alt="Luxury Bali villa with private dining setup at golden hour overlooking rice terraces and the Indian Ocean"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async" fetchPriority="high" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.15) 35%, rgba(5,5,5,0.85) 100%)' }}
        />
        <div className="relative z-10 px-8 pb-12 md:pb-20 pt-24 md:pt-32 max-w-[1100px] mx-auto w-full text-white">
          <p className="font-cormorant text-[#C5A028] text-sm uppercase tracking-[4px] mb-4">Bali coverage</p>
          <h1 className="font-playfair text-4xl md:text-6xl leading-tight mb-6 max-w-[820px]">{title}</h1>
          <p className="text-base md:text-lg text-white/[85%] max-w-[640px] mb-8">
            Wherever your villa is in Bali, we have a chef ten minutes away. Pick the area closest to where you are staying —
            we cook the same three things at every address: <span className="text-[#6B8E5A] font-medium">catering</span>,{' '}
            <span className="text-[#2C5F7C] font-medium">events</span>, and{' '}
            <span className="text-[#C5A028] font-medium">fine dining</span>.
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" data-source="bali-hub-cta" className="inline-flex items-center justify-center gap-2 bg-[#C5A028] text-[#1A1A1A] font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#D4B43A] transition-all">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* The 10 cities, each as a card linking to the area page */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl mb-2">The ten regions we cook in</h2>
          <p className="text-[#4A4745] mb-10 max-w-[640px]">
            Each region has its own villa profile, its own kitchens, and its own logistics.
            Tap a region to see what we do there and what we cook best.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {TOP_CITIES.map((c) => (
              <Link
                key={c.slug}
                to={getLocationCanonical(c.slug)}
                className="block bg-[#FAFAF8] border border-[#E5E3E0] rounded-2xl p-6 hover:border-[#C5A028] transition-all"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-playfair text-2xl">{c.name}</h3>
                  <span className="text-xs uppercase tracking-[2px] text-[#8A8785]">→</span>
                </div>
                <p className="text-sm font-medium text-[#1A1A1A] mb-2">{c.hook}</p>
                <p className="text-sm text-[#4A4745] mb-3">{c.blurb}</p>
                <p className="text-xs text-[#8A8785] italic">{c.signature}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three-service callout */}
      <section className="px-8 py-16 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-center font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">What we cook everywhere</p>
          <h2 className="text-center font-playfair text-3xl md:text-4xl mb-12">Three services. Every villa. Every region.</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/private-chef-bali" className="bg-white border border-[#E5E3E0] rounded-2xl p-6 hover:border-[#6B8E5A] transition-all">
              <Utensils className="w-6 h-6 text-[#6B8E5A] mb-3" />
              <h3 className="font-playfair text-2xl mb-3">Private Villa Dining</h3>
              <p className="text-sm text-[#4A4745]">Private villa chef for breakfast, lunch, dinner. Weekly meal prep. Groceries billed at cost — no markup.</p>
            </Link>
            <Link to="/events" className="bg-white border border-[#E5E3E0] rounded-2xl p-6 hover:border-[#2C5F7C] transition-all">
              <Sparkles className="w-6 h-6 text-[#2C5F7C] mb-3" />
              <h3 className="font-playfair text-2xl mb-3">Events</h3>
              <p className="text-sm text-[#4A4745]">Weddings, retreats, corporate dinners, birthdays. Catering, bar, décor, on-site coordination.</p>
            </Link>
            <Link to="/fine-dining" className="bg-white border border-[#E5E3E0] rounded-2xl p-6 hover:border-[#C5A028] transition-all">
              <Flame className="w-6 h-6 text-[#C5A028] mb-3" />
              <h3 className="font-playfair text-2xl mb-3">Fine Dining</h3>
              <p className="text-sm text-[#4A4745]">Two signature tasting menus in your villa. White-clad team, sommelier pairing, open-flame cooking.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner callout */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-cormorant text-[#2C5F7C] text-sm uppercase tracking-[4px] mb-4">Partner villas</p>
          <h2 className="font-playfair text-3xl md:text-4xl mb-4">We work with 50+ luxury villas across Bali</h2>
          <p className="text-[#4A4745] mb-6">
            If you own or manage a villa in any of the ten regions above, our partner programme lets you offer on-demand
            fine dining as part of your guest experience — at preferred partner pricing.
          </p>
          <Link to="/staffing/for-villa-managers" className="inline-flex items-center justify-center bg-[#2C5F7C] text-white font-semibold text-sm uppercase tracking-[2px] px-8 py-4 rounded-full hover:bg-[#1E4A5E] transition-all">
            See the Partner Programme
          </Link>
        </div>
      </section>
    </div>
  )
}
