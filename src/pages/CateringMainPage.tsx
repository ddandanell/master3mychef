import { useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  MessageCircle, Check, ArrowRight, Phone, Calendar, Users, MapPin,
  Utensils, CreditCard, ChefHat, Sparkles, ShieldCheck, HelpCircle,
  Home, PartyPopper, Flame, Wine, Flower2, CakeSlice,
} from 'lucide-react'
import SeoHead, {
  breadcrumbSchema,
  serviceWithAggregateOfferSchema,
  faqPageSchema,
  howToSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import {
  CATERING_STYLES,
  WHAT_IS_CATERING_SECTIONS,
  CATERING_BY_EVENT_TYPES,
  CATERING_BY_GUEST_NUMBERS,
  COMPLETE_BOOKING_PROCESS,
  BALI_LOCATIONS,
  FOOD_PHILOSOPHY_CARDS,
  MENU_STYLES,
  OPTIONAL_SERVICES,
  CATERING_FAQS,
} from '@/data/cateringPillarContent'
import SectionHeader from '@/components/catering/SectionHeader'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import LocationChips from '@/components/LocationChips'
import TrustRow from '@/components/catering/TrustRow'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import StaffingInfo from '@/components/catering/StaffingInfo'
import BookingProcess from '@/components/catering/BookingProcess'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { CateringRiskReversal } from '@/components/shared'

import OptimizedImage from '@/components/OptimizedImage'
import { ArticleContentSection } from '@/components/shared'

const WA_LINK = buildWhatsAppUrl({ serviceName: 'catering in Bali', intent: 'menu options and pricing' })
const WA_DAILY_CHEF_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF,%20I%20would%20like%20to%20book%20a%20daily%20villa%20chef.'
const SITE = 'https://mychef.id'
const bookingHref = (packageName: string) => `?package=${encodeURIComponent(packageName)}#book`

/* ── DATA ── */

// CATERING_STYLES, WHAT_IS_CATERING_SECTIONS, CATERING_BY_EVENT_TYPES,
// CATERING_BY_GUEST_NUMBERS, COMPLETE_BOOKING_PROCESS, BALI_LOCATIONS,
// FOOD_PHILOSOPHY_CARDS, MENU_STYLES, OPTIONAL_SERVICES, and CATERING_FAQS
// are imported from @/data/cateringPillarContent.

const BBQ_PACKAGES = [
  {
    image: '/generated/pkg-bbq.webp',
    title: 'Indonesian BBQ',
    price: 'IDR 700,000/person',
    description: 'Sate lilit, sate ayam, ikan bakar, jagung bakar, sambal matah, nasi kuning, sayur urap, gado-gado, fresh fruit dessert.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
  {
    image: '/generated/sol-bbq.webp',
    title: 'International BBQ',
    price: 'IDR 700,000/person',
    description: 'Australian beef tenderloin, lamb chops, grilled prawns, salmon fillet, chicken thigh, gourmet salads, baked potato, garlic bread.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
  {
    image: '/generated/pkg-seafood.webp',
    title: 'Surf & Turf BBQ',
    price: 'IDR 850,000/person',
    description: 'Wagyu steak, lobster tail, king prawns, salmon, Mahi-mahi, larger-format sides, signature sauces, chocolate dessert station.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Plated service', 'Setup & cleanup'],
    minGuests: 'Min. 10 guests',
  },
]

const ADDONS = [
  { title: 'Bartender + 3h open bar', price: 'IDR 4,000,000 flat', description: 'Professional bartender with full cocktail setup' },
  { title: 'Wagyu upgrade', price: '+ IDR 250,000/person', description: 'Upgrade any BBQ to Wagyu beef' },
  { title: 'Gluten-free upgrade', price: '+ IDR 50,000/adult', description: 'Full gluten-free menu adaptation' },
  { title: 'Plated service', price: '+ IDR 50,000/person', description: 'Upgrade from buffet to full plated service' },
  { title: 'Out-of-area travel', price: 'IDR 250K – 700K', description: 'Travel fee depending on area and event size' },
]

const BUFFET_PACKAGES = [
  {
    image: '/generated/aura-buffet.webp',
    title: 'Indonesian Buffet',
    price: 'IDR 700,000/person',
    description: '8 hot dishes, 4 cold dishes, dessert, fresh fruit, sambals, rice, noodles, breads.',
    includes: ['Chef', '3 service staff', 'Chafing dishes', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/pkg-italian.webp',
    title: 'International Buffet',
    price: 'IDR 750,000/person',
    description: 'Mediterranean, Asian fusion, roast station, pasta station, salads, dessert table.',
    includes: ['Chef', '4 service staff', 'Live stations', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
  {
    image: '/generated/aura-corporate.webp',
    title: 'Live-Station Buffet',
    price: 'IDR 950,000/person',
    description: '3 live food stations, roast station, full dessert bar.',
    includes: ['Head chef', '5 service staff', 'Live stations', 'Event linens', 'Setup & cleanup'],
    minGuests: 'Min. 30 guests',
  },
]

const PLATED_PACKAGES = [
  { title: '3-Course Plated', price: 'IDR 800,000/person', description: 'Starter, main, dessert. Full table service.' },
  { title: '4-Course Plated', price: 'IDR 1,000,000/person', description: 'Amuse-bouche, starter, main, dessert.' },
  { title: '5-Course Dinner', price: 'IDR 1,300,000/person', description: 'Amuse-bouche, starter, fish, meat, dessert.' },
]

const DROPOFF_PACKAGES = [
  { title: 'Family Dinner Drop-Off', price: 'IDR 700,000/person', description: '4 to 8 people. Hot main, 2 sides, dessert, bread.' },
  { title: 'Dinner Party Drop-Off', price: 'IDR 700,000/person', description: '8 to 16 people. Starter, main, 3 sides, dessert.' },
  { title: 'Grazing Dinner Drop-Off', price: 'IDR 700,000/person', description: '8+ people. Charcuterie, cheese board, 2 hot mains, sides, dessert.' },
]

const BABIGULING_PACKAGES = [
  { title: 'Small', price: 'IDR 3,700,000', description: '10 to 15 guests. Whole pig, lawar, nasi kuning, sate, sambals, dessert, fruit.' },
  { title: 'Medium', price: 'IDR 5,000,000', description: '25 to 30 guests. Extended sides and larger portions.' },
  { title: 'Large', price: 'IDR 7,000,000', description: '40 to 50 guests. Full spread with extended sides.' },
]

const GRAZING_PACKAGES = [
  { title: 'Mini Grazing Box', price: 'IDR 650,000', description: '2 pax. Perfect for couples or small welcome.' },
  { title: 'Cheese & Cold Cuts Platter', price: 'IDR 2,700,000', description: '10 pax. 4-6 cheeses, 3-4 cured meats, dips, fruit, nuts.' },
  { title: 'Wedding-Scale Grazing', price: 'IDR 700,000/person', description: '20 to 50 pax. Full visual spread with edible flowers.' },
]

const FLOATING_PACKAGES = [
  { title: 'Floating Breakfast for 2', price: 'IDR 950,000/couple', description: 'Tropical fruit, eggs, pastries, coffee, juice, flowers.' },
  { title: 'Floating Brunch for 2', price: 'IDR 1,400,000/couple', description: 'Extended brunch with champagne option.' },
  { title: 'Floating Group Brunch', price: 'IDR 750,000/person', description: '4 to 10 guests. Large floating tray setup.' },
]

const DAILY_CHEF_PACKAGES = [
  {
    title: 'Breakfast Only',
    price: 'IDR 2,500,000++',
    period: '/day',
    desc: 'Fresh tropical fruits, pastries, eggs any style, Balinese coffee. Half-day chef hire (up to 4 hours), chef + assistant included.',
    bestFor: 'Couples, light mornings, villa guests who lunch out',
  },
  {
    title: 'Half Board',
    price: 'IDR 3,500,000++',
    period: '/day',
    desc: 'Breakfast + dinner. Perfect for families who lunch out. Full-day chef hire (up to 8 hours), chef + assistant included.',
    bestFor: 'Families, groups who explore Bali during the day',
  },
  {
    title: 'Full Board',
    price: 'IDR 4,200,000++',
    period: '/day',
    desc: 'Breakfast, lunch, and dinner. The complete villa experience. Complete full-day chef hire (up to 12 hours), chef + assistant included.',
    bestFor: 'Extended stays, retreats, families who want full coverage',
  },
  {
    title: 'Custom',
    price: 'Quote',
    period: '',
    desc: 'Special occasions, dietary programs, or extended stays. We design around you.',
    bestFor: 'Multi-week stays, wellness programs, special diets',
  },
]

const DAILY_CHEF_INCLUDES = [
  'Private villa chef (dedicated to your villa)',
  'Full grocery shopping & ingredient sourcing',
  'Breakfast, lunch & dinner preparation',
  'Table service & presentation',
  'Full kitchen cleanup after every meal',
  'Menu planning based on your preferences',
  'Dietary customization at no extra cost',
  'Fresh, local ingredients + select imports',
]

const DAILY_CHEF_ADDONS = [
  { icon: Wine, title: 'Bartender & Cocktails', desc: 'Mixologist, full bar setup, signature drinks. From IDR 850K.' },
  { icon: Users, title: 'Waiters & Service Staff', desc: 'Professional waiters for plated or buffet service. 1 per 10 guests.' },
  { icon: Flower2, title: 'Table Styling & Flowers', desc: 'Linens, candles, floral arrangements, and table decor.' },
  { icon: CakeSlice, title: 'Custom Cakes', desc: 'Birthday, anniversary, or celebration cakes. 3-day notice.' },
  { icon: Utensils, title: 'Breakfast Service', desc: 'Morning after? We do villa breakfast too. Continental or full.' },
  { icon: Flame, title: 'Live BBQ Station', desc: 'Chef grills at your villa. Whole fish, ribs, prawns, skewers.' },
]

const PRICING_TABLE = [
  { name: 'Indonesian BBQ', price: 'IDR 700,000/person', min: '10 guests', bestFor: 'Villa BBQ' },
  { name: 'International BBQ', price: 'IDR 700,000/person', min: '10 guests', bestFor: 'Villa BBQ' },
  { name: 'Surf & Turf BBQ', price: 'IDR 850,000/person', min: '10 guests', bestFor: 'Special occasions' },
  { name: 'Indonesian Buffet', price: 'IDR 700,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'International Buffet', price: 'IDR 750,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'Live-Station Buffet', price: 'IDR 950,000/person', min: '30 guests', bestFor: 'Larger-format events' },
  { name: '3-Course Plated', price: 'IDR 800,000/person', min: '10 guests', bestFor: 'Seated dinners' },
  { name: '4-Course Plated', price: 'IDR 1,000,000/person', min: '10 guests', bestFor: 'Milestone dinners' },
  { name: '5-Course Dinner', price: 'IDR 1,300,000/person', min: '10 guests', bestFor: 'Fine dining' },
  { name: 'Family Drop-Off', price: 'IDR 700,000/person', min: '4 guests', bestFor: 'Private meals' },
  { name: 'Dinner Party Drop-Off', price: 'IDR 700,000/person', min: '8 guests', bestFor: 'Small parties' },
  { name: 'Babi Guling Small', price: 'IDR 3,700,000 total', min: '10 guests', bestFor: 'Traditional events' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose your package', desc: 'Pick BBQ, buffet, plated, drop-off, or specialty catering.', icon: Utensils },
  { step: '02', title: 'Send details', desc: 'Share date, area, guest count, and any dietary needs.', icon: Calendar },
  { step: '03', title: 'Add extras', desc: 'Bartender, Wagyu upgrade, gluten-free, plated service.', icon: Sparkles },
  { step: '04', title: 'Confirm price', desc: 'We send final quote including travel fees and add-ons.', icon: CreditCard },
  { step: '05', title: 'Pay deposit', desc: '50% deposit to lock your date. Balance due the day before the event.', icon: ShieldCheck },
  { step: '06', title: 'We handle everything', desc: 'Chef arrives, cooks, serves, and cleans up. You relax.', icon: ChefHat },
]

const AREAS = [
  'Canggu', 'Seminyak', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Sanur', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar',
]

// CATERING_FAQS imported from @/data/cateringPillarContent

/* ── Decision Helper Data ── */
const DECISION_QUESTIONS = [
  {
    question: 'How long are you staying in the villa?',
    options: [
      { label: '1–2 nights', result: 'one-time' },
      { label: '3+ nights', result: 'daily' },
    ],
  },
  {
    question: 'What kind of meal experience do you want?',
    options: [
      { label: 'One special dinner or party', result: 'one-time' },
      { label: 'Every meal handled during my stay', result: 'daily' },
    ],
  },
  {
    question: 'How important is having the same chef every day?',
    options: [
      { label: 'Not important — I want the best chef for each event', result: 'one-time' },
      { label: 'Very important — I want consistency', result: 'daily' },
    ],
  },
]

/* ── Catering Style Decision Guide Data ── */
const GUEST_RANGES = [
  { value: '2-4', label: '2–4 guests', min: 2, max: 4 },
  { value: '5-10', label: '5–10 guests', min: 5, max: 10 },
  { value: '10-20', label: '10–20 guests', min: 10, max: 20 },
  { value: '20-50', label: '20–50 guests', min: 20, max: 50 },
  { value: '50-100', label: '50–100 guests', min: 50, max: 100 },
  { value: '100-250', label: '100–250 guests', min: 100, max: 250 },
  { value: '250+', label: '250+ guests', min: 250, max: 9999 },
]

const EVENT_TYPES = [
  { value: 'birthday', label: 'Birthday party' },
  { value: 'wedding', label: 'Wedding or reception' },
  { value: 'corporate', label: 'Corporate event or dinner' },
  { value: 'retreat', label: 'Wellness or yoga retreat' },
  { value: 'villa-holiday', label: 'Luxury villa holiday' },
  { value: 'family', label: 'Family gathering' },
  { value: 'christmas-nye', label: 'Christmas or New Year' },
  { value: 'shower', label: 'Baby or bridal shower' },
  { value: 'anniversary', label: 'Anniversary or milestone' },
  { value: 'engagement', label: 'Engagement party' },
  { value: 'networking', label: 'Networking event' },
  { value: 'product-launch', label: 'Product launch' },
  { value: 'seminar', label: 'Seminar or training' },
]

function getCateringRecommendation(guests: string, event: string): { title: string; description: string; href: string } {
  const map: Record<string, Record<string, { title: string; description: string; href: string }>> = {
    '2-4': {
      default: { title: 'Private Chef or Fine Dining', description: 'An intimate multi-course meal prepared in your villa. Perfect for couples, honeymoons, and small celebrations.', href: '/villa-chef' },
      birthday: { title: 'Private Chef Dinner or Grazing Table', description: 'A chef-prepared meal or styled grazing platter for a relaxed birthday in your villa.', href: '/catering/grazing-tables' },
      wedding: { title: 'Private Chef Tasting Menu', description: 'An elegant tasting menu for a tiny wedding party or elopement dinner.', href: '/catering/plated-catering' },
      anniversary: { title: 'Romantic Private Dining', description: 'A candlelit multi-course dinner with your own chef and waiter.', href: '/blog/romantic-dinner-bali-private-chef' },
    },
    '5-10': {
      default: { title: 'BBQ or Plated Dinner', description: 'Live grilling or a seated set menu for a small group. Great energy and easy logistics.', href: '/catering/bbq-catering' },
      birthday: { title: 'BBQ Catering', description: 'Casual, social, and ideal for a villa birthday party with friends.', href: '/catering/bbq-catering' },
      'villa-holiday': { title: 'Daily Villa Chef', description: 'Have a chef handle breakfast, lunch, and dinner across your stay.', href: '/villa-chef' },
      family: { title: 'Family-Style Villa Catering', description: 'Shared dishes served to the table for a relaxed family meal.', href: '/catering/villa-catering' },
      breakfast: { title: 'Floating Breakfast', description: 'Photo-ready breakfast served in your private pool.', href: '/catering/floating-breakfast' },
    },
    '10-20': {
      default: { title: 'BBQ or Plated Set Menu', description: 'A live grill party or a seated multi-course dinner with table service.', href: '/catering/bbq-catering' },
      wedding: { title: 'Plated Dinner or Grazing Table', description: 'Elegant plated service for a rehearsal dinner or grazing for welcome drinks.', href: '/catering/plated-catering' },
      corporate: { title: 'Plated Board Dinner or Buffet', description: 'Professional service with flexible menu choices.', href: '/catering/corporate-catering' },
      birthday: { title: 'BBQ Catering with Grazing Starter', description: 'Grazing table for arrival, followed by live grill.', href: '/catering/bbq-catering' },
    },
    '20-50': {
      default: { title: 'BBQ, Buffet, or Plated Dinner', description: 'The sweet spot where almost every format works. Choose based on formality.', href: '/catering/bbq-catering' },
      wedding: { title: 'Buffet or Plated Reception', description: 'Structured service for wedding meals with multiple courses.', href: '/catering/buffet' },
      corporate: { title: 'International Buffet', description: 'Efficient service, varied menu, and easy dietary accommodation.', href: '/catering/corporate-catering' },
      birthday: { title: 'Live BBQ or Babi Guling', description: 'A festive, social centerpiece for villa birthday parties.', href: '/catering/bbq-catering' },
      retreat: { title: 'Retreat Buffet or Family-Style', description: 'Nourishing, plant-forward menus served for wellness groups.', href: '/catering/retreat-catering' },
    },
    '50-100': {
      default: { title: 'Buffet or Live-Station Catering', description: 'Smooth service for larger groups with multiple food stations.', href: '/catering/buffet' },
      wedding: { title: 'Wedding Buffet or Live Stations', description: 'Variety, visual impact, and efficient guest flow.', href: '/catering/buffet' },
      corporate: { title: 'Corporate Buffet or Plated Dinner', description: 'Scalable formats with full staffing and tax invoicing.', href: '/catering/corporate-catering' },
      'christmas-nye': { title: 'Festive Buffet or Grazing Tables', description: 'Large celebratory spreads with canapes, mains, and desserts.', href: '/catering/buffet' },
    },
    '100-250': {
      default: { title: 'Large-Format Buffet with Live Stations', description: 'Full event catering with multiple stations, large service team, and event coordination.', href: '/catering/buffet' },
      wedding: { title: 'Wedding Catering Buffet', description: 'Complete reception catering with starters, mains, desserts, and service.', href: '/catering/buffet' },
      corporate: { title: 'Corporate Event Catering', description: 'Conference lunch, gala dinner, or product launch with full logistics.', href: '/catering/corporate-catering' },
      retreat: { title: 'Retreat Catering Program', description: 'Multi-day catering with breakfast, lunch, dinner, and snacks.', href: '/catering/retreat-catering' },
    },
    '250+': {
      default: { title: 'Large Event Catering', description: 'Bespoke large-scale catering with custom kitchen setup, extensive staffing, and event management support.', href: '/events' },
      wedding: { title: 'Large Wedding Catering', description: 'Full-service wedding catering for 250+ guests.', href: '/catering/buffet' },
      corporate: { title: 'Conference & Large Corporate Catering', description: 'Gala dinners, multi-day conferences, and large-scale catering.', href: '/catering/corporate-catering' },
    },
  }
  const byGuests = map[guests] || map['20-50']
  return byGuests[event] || byGuests.default
}

export default function CateringMainPage() {
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<'one-time' | 'daily'>('one-time')
  const [decisionAnswers, setDecisionAnswers] = useState<(string | null)[]>([null, null, null])
  const [decisionResult, setDecisionResult] = useState<'one-time' | 'daily' | null>(null)

  // Catering style decision guide state
  const [styleGuests, setStyleGuests] = useState<string>('')
  const [styleEvent, setStyleEvent] = useState<string>('')
  const styleRecommendation = styleGuests && styleEvent ? getCateringRecommendation(styleGuests, styleEvent) : null

  /* Scroll to #daily-chef on mount if hash present */
  useLayoutEffect(() => {
    if (location.hash === '#daily-chef') {
      setActiveTab('daily')
      const timer = setTimeout(() => {
        const el = document.getElementById('daily-chef')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [location.hash])

  // No GSAP animations are wired on this page currently.

  const handleDecisionAnswer = (qIndex: number, result: 'one-time' | 'daily') => {
    const next = [...decisionAnswers]
    next[qIndex] = result
    setDecisionAnswers(next)

    const counts: Record<string, number> = { 'one-time': 0, daily: 0 }
    next.forEach((a) => { if (a) counts[a]++ })
    if (counts['one-time'] + counts.daily >= 2) {
      setDecisionResult(counts['one-time'] >= counts.daily ? 'one-time' : 'daily')
    }
  }

  const resetDecision = () => {
    setDecisionAnswers([null, null, null])
    setDecisionResult(null)
  }

  return (
    <div ref={ref} className="min-h-screen" style={{ background: '#FAFAF8', color: '#1A1A1A' }}>
      <SeoHead
        title={getPageMeta('catering').title}
        description={getPageMeta('catering').description}
        canonical={getPageMeta('catering').canonical}
        ogImage={getPageMeta('catering').ogImage}
        jsonLd={[
          serviceWithAggregateOfferSchema({
            name: 'Villa Catering Bali',
            description: 'Chef-led catering for Bali villas, events, BBQ nights, and private gatherings with flexible formats from buffet to plated service. myCHEF.id manages menus, staffing, setup, and cleanup across Bali.',
            url: `${SITE}/catering`,
            lowPrice: '350000',
            highPrice: '3700000',
            unitText: 'per person',
          }),
          faqPageSchema(CATERING_FAQS.map(f => ({ question: f.q, answer: f.a }))),
          howToSchema({
            name: 'How to Book Catering in Bali',
            description: 'Book professional catering for your Bali villa or event in 6 easy steps.',
            totalTime: 'PT15M',
            steps: HOW_IT_WORKS.map(s => ({ name: s.title, text: s.desc })),
          }),
          breadcrumbSchema('Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering' }]} />

      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-catering-hero.webp"
            alt="Private chef grilling seafood at a Bali villa poolside sunset catering by myCHEF"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high" loading="eager"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/25 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="bg-black/60 rounded-3xl px-8 md:px-12 py-12 md:py-16 backdrop-blur-sm">
            <Breadcrumb items={[{ label: 'Catering' }]} theme="dark" className="justify-center mb-8" decorative />
            <p className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              myCHEF Events & Catering
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {"Catering in Bali — Built for Groups, Parties & Hosted Dinners"}
            </h1>
            <div className="text-base md:text-lg text-white/[85%] max-w-3xl mx-auto space-y-4">
              <p>
                Premium catering across Bali for private villas, luxury holidays, weddings, corporate events, retreats and celebrations. From intimate private chef experiences for two guests to events with hundreds of guests, myCHEF delivers complete hospitality tailored to every occasion. Our chef-led team brings the kitchen, service staff, ingredients, and equipment to your villa or venue, then handles menu design, on-site cooking, table service, and full cleanup so you can host without stress.
              </p>
              <p>
                What makes our catering Bali service different is that we own the full stack. We employ and train our own chefs, service staff, and logistics crew — no middlemen, no outsourced teams, and no last-minute surprises. Every dish is cooked fresh at your location, every allergy is logged, and every quote is confirmed in writing before you pay a deposit. Whether you need luxury catering Bali for a high-end villa holiday, wedding catering Bali for your reception, corporate catering Bali for an offsite, or private catering Bali for a family celebration, we match the format and staffing to your guest count and venue.
              </p>
              <p>
                We operate across Seminyak, Canggu, Berawa, Pererenan, Ubud, Sanur, Nusa Dua, Jimbaran, Uluwatu, Ungasan, Kerobokan, Sidemen, Munduk, and North Bali. Travel fees are disclosed upfront, menus are customised to your group, and our team has delivered over five hundred villa events since we started. Browse our catering styles below, use the decision guide to choose the right format, or message us on WhatsApp for a same-day quote.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                data-source="catering-hero"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A028] text-[#1A1A1A] text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
              </a>
              <Link
                to="/villa-chef"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ArrowRight className="w-4 h-4" /> Need a Private Villa Chef?
              </Link>
            </div>
            <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-white/15 bg-black/25 p-5 md:p-6 text-left backdrop-blur-sm">
              <p className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Not sure which service?
              </p>
              <p className="text-sm md:text-base text-white/[85%] leading-relaxed mb-4">
                Choose Events & Catering for BBQs, buffet service, plated group dinners, weddings, and formal villa setups. Choose <span className="font-semibold text-white">Private Villa Dining</span> for 1–4 guests, family stays, and everyday breakfast, lunch, or dinner with a chef in your villa.
              </p>
              <Link
                to="/villa-chef"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              >
                <ArrowRight className="w-4 h-4" /> View Private Villa Dining
              </Link>
            </div>
            <TrustRow
              items={['500+ villa events served', 'Guest-loved service', 'Chef + staff included', 'Same-day quotes', 'Bali-wide service']}
              dark
            />
          </div>
        </div>
      </section>

      {/* ═══════ CROSS-PROMOTION: FINE DINING ═══════ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#FAFAF8] rounded-3xl border border-[#E8E6E3] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p
                  className="text-[#C5A028] text-xs md:text-sm tracking-[0.3em] uppercase mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  Elevated Experience
                </p>
                <h2
                  className="text-2xl md:text-3xl mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Looking for a Multi-Course Tasting Menu?
                </h2>
                <p className="text-[#4A4745] text-sm md:text-base leading-relaxed mb-6">
                  For groups of 6 or more, our Private Fine Dining experience offers Italian, French, Mediterranean, and Wagyu tasting menus prepared by a Michelin-trained chef in your villa.
                </p>
                <Link
                  to="/fine-dining"
                  data-source="catering-cross-promotion"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A028] uppercase tracking-wider hover:text-[#D4B43A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-1"
                >
                  Explore Fine Dining <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative min-h-[240px] md:min-h-full">
                <OptimizedImage
                  src="/generated/mychef-misc-bali-hub-fine-dining.webp"
                  alt="Elegant plated fine dining course served at a Bali villa by myCHEF"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST STRIP ═══════ */}
      <TrustStrip />

      {/* ═══════ RISK REVERSAL ═══════ */}
      <CateringRiskReversal />

      {/* ═══════ SECTION 2: SERVICE TABS ═══════ */}
      <section id="service-tabs" className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHOOSE YOUR SERVICE"
            title="Two Ways to Eat Well in Your Villa"
            subtitle="Whether you need one spectacular meal or a chef every day of your stay — we have you covered."
          />

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-[#FAFAF8] rounded-full p-1 border border-[#E8E6E3]">
              <button
                type="button"
                onClick={() => setActiveTab('one-time')}
                className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] ${
                  activeTab === 'one-time'
                    ? 'bg-[#6B8E5A] text-white shadow-md'
                    : 'text-[#4A4745] hover:text-[#1A1A1A]'
                }`}
              >
                <PartyPopper className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                One-Time Catering
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('daily')}
                className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A028] ${
                  activeTab === 'daily'
                    ? 'bg-[#C5A028] text-[#1A1A1A] shadow-md'
                    : 'text-[#4A4745] hover:text-[#1A1A1A]'
                }`}
              >
                <Home className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                Daily Chef Service
              </button>
            </div>
          </div>

          {/* ONE-TIME CATERING PANEL */}
          {activeTab === 'one-time' && (
            <div className="space-y-16">
              {/* One-time intro */}
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  One-Time Catering
                </h3>
                <p className="text-[#4A4745] mb-2">
                  For events, parties, special occasions, and single meals. The chef arrives, cooks, serves, and cleans up — then leaves.
                </p>
                <p className="text-[#6B8E5A] font-semibold">Starting from IDR 700,000 per person</p>
              </div>

              {/* Styles grid */}
              <div>
                <h4 className="text-center text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-8 font-semibold">
                  Choose Your Catering Style
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {CATERING_STYLES.map((style) => (
                    <CateringPackageCard key={style.title} {...style} />
                  ))}
                </div>
              </div>

              {/* BBQ Preview */}
              <div className="bg-[#FAFAF8] rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h4 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>BBQ Catering: The Villa Crowd-Pleaser</h4>
                  <p className="text-[#4A4745] text-sm max-w-2xl mx-auto">
                    BBQ is the easiest way to feed a villa group properly. Live, social, flexible — works for family dinners, birthdays, and villa parties.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {BBQ_PACKAGES.map((pkg) => (
                    <CateringPackageCard key={pkg.title} {...pkg} href={bookingHref(pkg.title)} cta="Select package" />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    to="/catering/bbq-catering"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    View BBQ packages <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Buffet Preview */}
              <div className="bg-white rounded-3xl border border-[#E8E6E3] p-8 md:p-12">
                <div className="text-center mb-8">
                  <h4 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Buffet Catering for Larger Groups</h4>
                  <p className="text-[#4A4745] text-sm max-w-2xl mx-auto">
                    For weddings, villa events, corporate dinners, and larger groups. Smooth service, food available without slowing the event.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {BUFFET_PACKAGES.map((pkg) => (
                    <CateringPackageCard key={pkg.title} {...pkg} href={bookingHref(pkg.title)} cta="Select package" />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    to="/catering/buffet"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    View buffet packages <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* One-time CTA */}
              <div className="text-center">
                <a
                  href={WA_LINK}
                  target="_blank"
              data-source="catering-package"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
                </a>
              </div>
            </div>
          )}

          {/* DAILY CHEF SERVICE PANEL */}
          {activeTab === 'daily' && (
            <div id="daily-chef" className="space-y-16">
              {/* Daily intro */}
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Daily Chef Service
                </h3>
                <p className="text-[#4A4745] mb-2">
                  Your chef shops, cooks, and cleans — breakfast, lunch, and dinner. You see every grocery receipt. No meal planning. No dishes. Just great food every day.
                </p>
                <p className="text-[#C5A028] font-semibold">From IDR 2,500,000++/day · Chef + assistant included · Groceries at cost</p>
              </div>

              {/* Daily packages */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {DAILY_CHEF_PACKAGES.map((pkg) => (
                  <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center hover:shadow-lg transition-all flex flex-col">
                    <h4 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h4>
                    <p className="text-[#C5A028] font-semibold text-lg mb-1">{pkg.price}<span className="text-sm">{pkg.period}</span></p>
                    <p className="text-[#4A4745] text-sm mb-4 flex-1">{pkg.desc}</p>
                    <p className="text-xs text-[#4A4745]/80 mb-4">Best for: {pkg.bestFor}</p>
                    <a
                      href={WA_DAILY_CHEF_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#C5A028] text-black text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#D4B43A] transition-all"
                    >
                      <Calendar className="w-4 h-4" /> Enquire
                    </a>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div className="bg-white rounded-3xl border border-[#E8E6E3] p-8 md:p-12">
                <h4 className="text-center text-xl md:text-2xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What Is Included
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {DAILY_CHEF_INCLUDES.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-xl">
                      <Check className="w-5 h-5 text-[#C5A028] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4A4745]">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    <strong>Groceries billed at cost.</strong> You see every receipt. No markup, no hidden fees. The hourly rate covers chef time, cooking, service, and cleanup.
                  </p>
                </div>
              </div>

              {/* Daily chef add-ons */}
              <div>
                <h4 className="text-center text-sm uppercase tracking-[0.2em] text-[#4A4745] mb-8 font-semibold">
                  Optional Add-Ons
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {DAILY_CHEF_ADDONS.map((addon) => (
                    <div key={addon.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                      <addon.icon className="w-6 h-6 text-[#C5A028] mb-3" />
                      <h5 className="font-semibold text-sm mb-1">{addon.title}</h5>
                      <p className="text-sm text-[#4A4745]">{addon.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How daily chef works */}
              <div className="bg-[#FAFAF8] rounded-3xl p-8 md:p-12">
                <h4 className="text-center text-xl md:text-2xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  How Daily Chef Works
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {[
                    { step: '01', title: 'Message us', desc: 'Send your villa, dates, and guest count. We reply within the hour.', icon: MessageCircle },
                    { step: '02', title: 'We build your plan', desc: 'Menus designed for your dietary needs and daily schedule.', icon: Utensils },
                    { step: '03', title: 'Chef shops & cooks', desc: 'Groceries sourced that morning. Chef arrives, cooks, serves, cleans.', icon: ChefHat },
                    { step: '04', title: 'You relax', desc: 'No grocery runs. No dishes. No planning. Great food every day.', icon: Sparkles },
                  ].map((step) => (
                    <div key={step.step} className="text-center">
                      <div className="w-14 h-14 rounded-full bg-[#C5A028]/10 flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-[#C5A028]" />
                      </div>
                      <span className="text-[#C5A028] text-xs font-bold tracking-wider">{step.step}</span>
                      <h5 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h5>
                      <p className="text-xs text-[#4A4745]">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily CTA */}
              <div className="text-center">
                <a
                  href={WA_DAILY_CHEF_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-[#C5A028] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#D4B43A] transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Get Your Daily Chef Quote in 1 Hour
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* MID-PAGE CTA: After service tabs */}
      <section className="py-16 md:py-20 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[#6B8E5A] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Not Sure What You Need?</p>
          <h3 className="text-2xl md:text-3xl mb-4 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>We Will Match the Right Service to Your Stay</h3>
          <p className="text-[#4A4745] max-w-xl mx-auto mb-6">
            One-time BBQ for a birthday, or a daily chef for your whole holiday? Tell us your dates and guest count and we will recommend the right option — with a clear quote within the hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-source="catering-service-tabs-cta" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all">
              <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
            </a>
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E6E3] text-[#1A1A1A] text-sm font-medium tracking-widest uppercase rounded-full hover:bg-white transition-all">
              Get a Structured Quote
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#4A4745]">
            <Link to="/recommended-services" className="underline-offset-4 hover:text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">
              Not sure? Let us recommend →
            </Link>
            <Link to="/villa-event-packages" className="underline-offset-4 hover:text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">
              Want it all handled? See villa event packages →
            </Link>
            <Link to="/contact" className="underline-offset-4 hover:text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">
              View contact options
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: WHAT IS CATERING? ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="THE BASICS"
            title="What Is Catering?"
            subtitle="Catering means bringing prepared food, service staff, equipment, and the full dining experience to a location of your choice. In Bali, that usually means your villa, event space, retreat venue, or beach club."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {WHAT_IS_CATERING_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-4 text-[#4A4745]">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{section.title}</h3>
                <div
                  className="text-sm leading-relaxed [&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
                {section.link && (
                  <Link
                    to={section.link.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
                  >
                    {section.link.text} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              In short, <strong>catering Bali</strong> is the simplest way to host a memorable meal without leaving your villa. It combines restaurant-quality food, professional hospitality, and complete flexibility. Whether you want a casual <Link to="/catering/bbq-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">BBQ Catering</Link> night, an elegant <Link to="/catering/plated-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Plated Catering</Link> dinner, or a large <Link to="/catering/buffet" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Buffet Catering</Link> spread, the format is built around your event, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: DECISION HELPER ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="NOT SURE?"
            title="Which Service Is Right for Me?"
            subtitle="Answer 3 quick questions and we will point you to the right option."
          />

          <div className="bg-white rounded-3xl border border-[#E8E6E3] p-6 md:p-10">
            {!decisionResult ? (
              <div className="space-y-8">
                {DECISION_QUESTIONS.map((q, qIdx) => (
                  <div key={qIdx} className={qIdx > 0 && !decisionAnswers[qIdx - 1] ? 'opacity-40 pointer-events-none' : ''}>
                    <p className="font-semibold text-[#1A1A1A] mb-4">
                      <span className="text-[#6B8E5A] mr-2">{qIdx + 1}.</span>
                      {q.question}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {q.options.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => handleDecisionAnswer(qIdx, opt.result as 'one-time' | 'daily')}
                          className={`px-5 py-4 rounded-xl border text-left text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] ${
                            decisionAnswers[qIdx] === opt.result
                              ? 'border-[#6B8E5A] bg-[#6B8E5A]/5 text-[#1A1A1A] font-medium'
                              : 'border-[#E8E6E3] hover:border-[#6B8E5A]/40 hover:bg-[#FAFAF8]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-[#6B8E5A]" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We Recommend: {decisionResult === 'one-time' ? 'One-Time Catering' : 'Daily Chef Service'}
                </h3>
                <p className="text-[#4A4745] mb-8 max-w-md mx-auto">
                  {decisionResult === 'one-time'
                    ? 'Based on your answers, a single-event catering package is the best fit. Browse BBQ, buffet, plated, or drop-off options above.'
                    : 'Based on your answers, having a dedicated chef for your entire stay will give you the best experience. Explore daily chef packages above.'}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(decisionResult)
                      setTimeout(() => {
                        const el = document.getElementById('service-tabs')
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 100)
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                  >
                    <ArrowRight className="w-4 h-4" /> View {decisionResult === 'one-time' ? 'One-Time Catering' : 'Daily Chef Service'}
                  </button>
                  <button
                    type="button"
                    onClick={resetDecision}
                    className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E6E3] text-[#4A4745] text-sm tracking-widest uppercase rounded-full hover:bg-[#FAFAF8] transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CATERING STYLE DECISION GUIDE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader
            eyebrow="DECISION GUIDE"
            title="Which Catering Style Is Right For You?"
            subtitle="Pick your guest count and event type. We will suggest the best catering format, staffing level, and menu approach."
          />
          <div className="bg-[#FAFAF8] rounded-3xl border border-[#E8E6E3] p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="style-guests" className="block text-sm font-semibold text-[#1A1A1A] mb-2">How many guests?</label>
                <select
                  id="style-guests"
                  value={styleGuests}
                  onChange={(e) => setStyleGuests(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                >
                  <option value="">Select guest range</option>
                  {GUEST_RANGES.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="style-event" className="block text-sm font-semibold text-[#1A1A1A] mb-2">What type of event?</label>
                <select
                  id="style-event"
                  value={styleEvent}
                  onChange={(e) => setStyleEvent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E3] bg-white text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                >
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map((event) => (
                    <option key={event.value} value={event.value}>{event.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {!styleRecommendation ? (
              <div className="text-center py-6 text-[#4A4745] text-sm">
                <p>Select both options above to see a recommended catering style.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <p className="text-[#6B8E5A] text-xs font-bold tracking-widest uppercase mb-2">Recommended for you</p>
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{styleRecommendation.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed mb-6">{styleRecommendation.description}</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    to={styleRecommendation.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-[#6B8E5A]"
                  >
                    View package <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source="catering-style-decision-cta"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
                  >
                    <MessageCircle className="w-4 h-4" /> Get a personalised quote
                  </a>
                </div>
              </div>
            )}

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-[#4A4745]">
              <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <strong className="block text-[#1A1A1A] mb-1">Small groups (2–10)</strong>
                Private chef, plated dinner, BBQ, or grazing table.
              </div>
              <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <strong className="block text-[#1A1A1A] mb-1">Medium events (20–50)</strong>
                BBQ, buffet, plated, or live-station catering.
              </div>
              <div className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <strong className="block text-[#1A1A1A] mb-1">Large events (50+)</strong>
                Full buffet, live stations, and dedicated event manager.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CATERING BY EVENT TYPE ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="EVENTS"
            title="Catering by Event Type"
            subtitle="Every event has its own rhythm. Here is how we match catering style, menu, and staffing to the occasion."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATERING_BY_EVENT_TYPES.map((event) => (
              <div key={event.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{event.title}</h3>
                <div className="space-y-3 text-sm text-[#4A4745]">
                  <p><span className="font-semibold text-[#1A1A1A]">Recommended style:</span> {event.style}</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Typical menu:</span> {event.menu}</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Staffing:</span> {event.staffing}</p>
                  <div
                    className="leading-relaxed [&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5"
                    dangerouslySetInnerHTML={{ __html: event.experience }}
                  />
                </div>
                {event.href && (
                  <Link
                    to={event.href}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              Explore dedicated pages for <Link to="/events/weddings" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Wedding Catering</Link>, <Link to="/catering/corporate-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Corporate Catering</Link>, <Link to="/catering/retreat-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Retreat Catering</Link>, and <Link to="/catering/villa-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Villa Catering</Link> for more detail on each format.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CATERING BY GUEST NUMBERS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="GROUP SIZE"
            title="Catering by Guest Numbers"
            subtitle="The right format depends on how many people you are feeding. Here is how we scale service, kitchen, and staffing."
          />
          <div className="space-y-6">
            {CATERING_BY_GUEST_NUMBERS.map((row) => (
              <div key={row.range} className="grid md:grid-cols-12 gap-4 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <div className="md:col-span-2">
                  <h3 className="text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{row.range}</h3>
                </div>
                <div className="md:col-span-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#4A4745]">
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Service style</p>
                    <p>{row.style}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Kitchen needs</p>
                    <p>{row.kitchen}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Staffing</p>
                    <p>{row.staffing}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">Recommended menus</p>
                    <p>{row.menus}</p>
                  </div>
                </div>
                {row.notes && (
                  <div className="md:col-span-12">
                    <div
                      className="text-sm text-[#4A4745] leading-relaxed [&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5"
                      dangerouslySetInnerHTML={{ __html: row.notes }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: WHO THIS IS FOR ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 1 — THE INQUIRY"
            title="Who Villa Catering Is For"
            subtitle="If you are staying in a villa in Canggu, Seminyak, Uluwatu or Ubud — this is designed for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Family Holidays', desc: 'Kids eat early. Adults eat later. No restaurant logistics. No transport. No splitting the group across tables.' },
              { title: 'Birthday Groups', desc: 'Private space, your music, no closing time. Bring the celebration to your villa instead of renting a venue.' },
              { title: 'Wedding Parties', desc: 'Rehearsal dinners, welcome drinks, post-wedding brunch. One caterer for every meal around the big day.' },
              { title: 'Corporate Retreats', desc: 'Team dinners that do not require transport. Dietary needs handled. Invoiced and documented.' },
              { title: 'Bachelor / Bachelorette', desc: 'Poolside BBQ without venue restrictions. Your playlist, your timeline, your rules.' },
              { title: 'Villa Owners & Hosts', desc: 'Repeat bookings, consistent quality, one point of contact. We know your kitchen and your guests.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#4A4745] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: VILLA VS RESTAURANT ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 3 — THE COMPARISON"
            title="Skip the Restaurant. Eat at Your Villa."
            subtitle="A restaurant dinner for 10 in Seminyak costs IDR 8–12M with drinks and transport. Our Indonesian BBQ for 10: IDR 7M. At your villa. With a chef."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8">
              <h3 className="text-xl mb-6 text-[#4A4745]" style={{ fontFamily: "'Playfair Display', serif" }}>Restaurant Dinner</h3>
              <div className="space-y-4">
                {['Transport for 8+ people across Bali traffic', 'Split tables, noisy room, other guests', 'Fixed menu, fixed time, fixed pace', '21% tax and service charge on top', 'Tip expected, parking extra'].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#4A4745]">
                    <span role="img" aria-label="Not included" className="mt-0.5 font-bold text-red-400">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#6B8E5A]/5 rounded-2xl border border-[#6B8E5A]/20 p-6 md:p-8">
              <h3 className="text-xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>myCHEF Villa Catering</h3>
              <div className="space-y-4">
                {['Walk to your garden — zero transport', 'One long table, your music, your guests only', 'Custom menu, your pace, no rush', 'All-inclusive pricing — no surprises', 'Gratuity included, no extra fees'].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]">
                    <Check className="w-4 h-4 text-[#6B8E5A] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-mid-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: ADD-ONS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Extras"
            title="Upgrade Your Catering"
            subtitle="Add drinks, specific ingredients, plated service, or dietary adjustments directly when you book."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map((addon) => (
              <CateringAddOnCard key={addon.title} {...addon} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: PLATED PREVIEW ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 6 — THE PLATED"
            title="Plated Set Menus for Seated Events"
            subtitle="For milestone dinners, birthdays, villa owner events, and intimate weddings, plated menus create a more controlled dining experience with table service and stronger presentation."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {PLATED_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center hover:shadow-lg transition-all">
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold text-lg mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-3xl mx-auto">
            <h4 className="font-medium text-[#1A1A1A] mb-4">Includes:</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'English-speaking chef', 'Service manager', '1 waiter per 10 guests',
                'Tables, linens, cutlery, porcelain, glassware', 'Kitchen tent if required',
                'Free tasting at 40+ guests', 'Minimum spend IDR 5,000,000',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4A4745]">
                  <Check className="w-4 h-4 text-[#6B8E5A]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8: DROP-OFF PREVIEW ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 7 — THE DROP-OFF"
            title="Drop-Off Catering Without Staff Inside Your Villa"
            subtitle="For families and villa guests who want proper food without staff staying in the villa, drop-off catering is the cleanest option."
          />
          <p className="text-center text-sm text-[#4A4745] max-w-2xl mx-auto mb-8">
            Read our <Link to="/blog/drop-off-catering-bali" className="text-[#C5A028] hover:underline focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">drop-off catering guide</Link> for a full breakdown of formats, timing and when delivery makes more sense than full service.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {DROPOFF_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link
                  to={bookingHref(pkg.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
                >
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-sm text-[#4A4745]">
            {['Order by 4pm for next-day delivery', '90-minute delivery window', 'No on-site staff', 'Reheating instructions included', 'Recyclable containers'].map((r) => (
              <span key={r} className="flex items-center gap-1.5 bg-[#FAFAF8] px-3 py-1.5 rounded-full border border-[#E8E6E3]">
                <Check className="w-3.5 h-3.5 text-[#6B8E5A]" /> {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9: BABI GULING ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 8 — THE TRADITION"
            title="Babi Guling Whole-Pig Catering"
            subtitle="A traditional Balinese whole-pig experience for villa parties, birthdays, and larger group meals."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {BABIGULING_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> Babi Guling contains pork and is not suitable for halal groups. We offer halal alternatives — ask us about our Nasi Campur and Ayam Betutu packages.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 10: GRAZING TABLES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Visual"
            title="Grazing Tables & Charcuterie"
            subtitle="For weddings, welcome drinks, villa parties, poolside events, and easy entertaining, grazing tables create a strong visual food setup with minimal service friction."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {GRAZING_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto text-sm text-[#4A4745]">
            {['Sourdough & crackers', '4-6 cheeses', '3-4 cured meats', 'Marinated vegetables', 'Dips & honey', 'Fresh & dried fruit', 'Nuts & edible flowers', 'Vegan version available'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6B8E5A]" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 11: FLOATING BREAKFAST ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Instagram-Ready"
            title="Floating Breakfast & Brunch"
            subtitle="Photo-ready floating breakfast and brunch setups for villa pools, couples, birthdays, honeymoon mornings, and small groups."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {FLOATING_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6 hover:shadow-lg transition-all text-center">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h3>
                <p className="text-[#6B8E5A] font-semibold mb-3">{pkg.price}</p>
                <p className="text-[#4A4745] text-sm mb-4">{pkg.description}</p>
                <Link to={bookingHref(pkg.title)} className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Select package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center text-sm text-[#4A4745]">
            {['Floating pool tray', 'Bamboo & flower styling', 'Delivery and retrieval', 'Photo-ready setup', '48h lead time'].map((r) => (
              <span key={r} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8E6E3]">
                <Check className="w-3.5 h-3.5 text-[#6B8E5A]" /> {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 12: PRICING TRANSPARENCY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Why We Publish Our Prices</h2>
          <p className="text-[#4A4745] mb-6">
            Most Bali caterers hide pricing behind contact forms and phone calls. We do not. Publishing our prices saves you time, sets clear expectations, and lets you compare formats before reaching out. Every price you see includes chef, staff, ingredients, equipment, setup, service, and cleanup — so there are no surprises on the day. If your group size or location changes the math, we tell you upfront.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['No hidden fees', 'All-inclusive quotes', '21% tax included', 'Travel fee disclosed upfront', 'Final price before deposit'].map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full bg-[#FAFAF8] border border-[#E8E6E3] text-sm text-[#4A4745]">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 13: PRICING SUMMARY ═══════ */}
      <section id="book" className="scroll-mt-24 py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Compare"
            title="Catering Prices in Bali"
            subtitle="Final price confirmed before you pay. No hidden fees. No surprises."
          />
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Package</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Price</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Min. Guests</th>
                  <th className="pb-3 text-sm font-semibold uppercase tracking-wider">Best For</th>
                  <th className="pb-3"><span className="sr-only">Action</span></th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row) => (
                  <tr key={row.name} className="border-b border-[#E8E6E3] hover:bg-white transition-colors">
                    <td className="py-4 font-medium">{row.name}</td>
                    <td className="py-4 text-[#6B8E5A] font-semibold">{row.price}</td>
                    <td className="py-4 text-[#4A4745]">{row.min}</td>
                    <td className="py-4 text-[#4A4745]">{row.bestFor}</td>
                    <td className="py-4">
                      <a href={WA_LINK} target="_blank" data-source="catering-table-check" rel="noopener noreferrer" className="text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">Check date</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {PRICING_TABLE.map((row) => (
              <div key={row.name} className="bg-white rounded-xl border border-[#E8E6E3] p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{row.name}</h4>
                  <span className="text-[#6B8E5A] font-semibold text-sm">{row.price}</span>
                </div>
                <p className="text-xs text-[#4A4745] mb-3">Min. {row.min} · {row.bestFor}</p>
                <a href={WA_LINK} target="_blank" data-source="catering-card-check" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#6B8E5A] focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                  Check date <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 14: HOW BOOKING WORKS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CHAPTER 9 — THE PROCESS"
            title="How Booking Works"
            subtitle="From first message to finished dinner — six steps, zero stress."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#6B8E5A]/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#6B8E5A]" />
                </div>
                <span className="text-[#6B8E5A] text-xs font-bold tracking-wider">{step.step}</span>
                <h4 className="font-medium text-[#1A1A1A] text-sm mt-1 mb-1">{step.title}</h4>
                <p className="text-xs text-[#4A4745]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 max-w-xl mx-auto">
            <p className="text-sm text-[#4A4745] mb-4">
              Questions? Fast replies during Bali business hours (9am–6pm).
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-chat-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
            >
              <MessageCircle className="w-4 h-4" /> Chat now
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: COMPLETE BOOKING PROCESS ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="FROM ENQUIRY TO EVENT"
            title="The Complete 12-Step Booking Process"
            subtitle="We keep the process transparent so you always know what happens next."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLETE_BOOKING_PROCESS.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <span className="text-[#6B8E5A] text-xs font-bold tracking-widest">STEP {item.step}</span>
                <h3 className="text-lg mt-1 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-process-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Start Your Booking Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 15: AREAS SERVED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Catering Across Bali"
            subtitle={
              <>
                We serve villas and event spaces across{' '}
                <Link to="/locations" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  all Bali regions
                </Link>
                . Popular areas include{' '}
                <Link to="/locations/seminyak" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  Seminyak
                </Link>
                ,{' '}
                <Link to="/locations/canggu" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  Canggu
                </Link>
                , and{' '}
                <Link to="/locations/ubud" className="underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5">
                  Ubud
                </Link>
                . Travel fees apply outside Canggu and Seminyak.
              </>
            }
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 text-center">
              <h3 className="font-medium text-[#1A1A1A] mb-2">Canggu & Seminyak</h3>
              <p className="text-sm text-[#4A4745] mb-3">No travel fee. Same-day booking often available.</p>
              <span className="inline-block px-3 py-1 bg-[#6B8E5A]/10 text-[#6B8E5A] text-xs font-semibold rounded-full">Most Popular</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 text-center">
              <h3 className="font-medium text-[#1A1A1A] mb-2">Uluwatu & Ubud</h3>
              <p className="text-sm text-[#4A4745] mb-3">IDR 250K–500K travel fee. Book 3+ days ahead.</p>
              <span className="inline-block px-3 py-1 bg-[#E8E6E3] text-[#4A4745] text-xs font-semibold rounded-full">3+ Days Ahead</span>
            </div>
            <div className="bg-white rounded-2xl border border-[#E8E6E3] p-6 text-center">
              <h3 className="font-medium text-[#1A1A1A] mb-2">Nusa Dua, Sanur, Jimbaran</h3>
              <p className="text-sm text-[#4A4745] mb-3">IDR 400K–700K travel fee. Book 5+ days ahead.</p>
              <span className="inline-block px-3 py-1 bg-[#E8E6E3] text-[#4A4745] text-xs font-semibold rounded-full">5+ Days Ahead</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BALI_LOCATIONS.map((loc) => (
              <div key={loc.area} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {loc.href ? (
                    <Link to={loc.href} className="hover:text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-0.5">
                      {loc.area}
                    </Link>
                  ) : (
                    loc.area
                  )}
                </h3>
                <div className="space-y-2 text-sm text-[#4A4745]">
                  <p><span className="font-semibold text-[#1A1A1A]">Popular events:</span> {loc.events}</p>
                  <p><span className="font-semibold text-[#1A1A1A]">Villa styles:</span> {loc.villas}</p>
                  <div
                    className="[&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5"
                    dangerouslySetInnerHTML={{ __html: `<span class="font-semibold text-[#1A1A1A]">Catering notes:</span> ${loc.notes}` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-white border border-[#E8E6E3] text-sm text-[#4A4745] hover:border-[#6B8E5A] hover:text-[#6B8E5A] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: FOOD PHILOSOPHY ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="INGREDIENTS & STANDARDS"
            title="Our Food Philosophy"
            subtitle="Great catering starts with great ingredients, handled by people who care about every plate."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {FOOD_PHILOSOPHY_CARDS.map((card) => (
              <div key={card.title} className="space-y-4 text-[#4A4745]">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                <div
                  className="text-sm leading-relaxed [&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
              </div>
            ))}
          </div>
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              Our philosophy is simple: cook fresh, serve beautifully, and treat every dietary requirement seriously. Whether you choose <Link to="/catering/bbq-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">BBQ Catering</Link>, <Link to="/catering/buffet" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Buffet Catering</Link>, or a <Link to="/catering/plated-catering" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Plated Dinner</Link>, the same standards apply.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: MENU STYLE OVERVIEW ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="CUISINES"
            title="Menu Style Overview"
            subtitle="Mix and match cuisines, courses, and service styles to create a menu that fits your event and your guests."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_STYLES.map((style) => (
              <div key={style.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{style.title}</h3>
                <div
                  className="text-sm text-[#4A4745] leading-relaxed mb-3 [&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5"
                  dangerouslySetInnerHTML={{ __html: style.desc }}
                />
                {style.href && (
                  <Link to={style.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-[#4A4745] mb-4 max-w-2xl mx-auto">
              Not sure which cuisine suits your group? Many clients combine Indonesian starters with Western mains, or add a Japanese sashimi course to a Mediterranean buffet. We can build a mixed menu around your preferences.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="catering-menu-overview-cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1"
            >
              <MessageCircle className="w-4 h-4" /> Discuss menu ideas
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: OPTIONAL SERVICES ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="ADD-ONS"
            title="Optional Services"
            subtitle="Build a complete event experience by adding service staff, drinks, styling, and entertainment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPTIONAL_SERVICES.map((service) => (
              <div key={service.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                <div
                  className="text-sm text-[#4A4745] leading-relaxed mb-3 [&_a]:text-[#6B8E5A] [&_a]:hover:underline [&_a]:focus:outline-none [&_a]:focus:ring-2 [&_a]:focus:ring-[#6B8E5A] [&_a]:rounded [&_a]:px-0.5"
                  dangerouslySetInnerHTML={{ __html: service.desc }}
                />
                {service.href && (
                  <Link to={service.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded px-1">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-sm text-[#4A4745] leading-relaxed">
              Optional services can be added to any catering package. Tell us your vision and we will recommend the right staffing and styling to match. For event service teams, see our <Link to="/staffing/villa-staff" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Event Staffing</Link> page. For full villa staffing and long-term placements, see our <Link to="/staffing" className="text-[#6B8E5A] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6B8E5A] rounded">Staffing</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: TRUST / E-E-A-T ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="WHY MYCHEF"
            title="Experience, Expertise & Trust"
            subtitle="We combine culinary skill, event planning discipline, and hospitality standards to deliver catering you can rely on."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Professional Culinary Experience', desc: 'Our chefs come from hotel, restaurant, private villa, and Michelin-trained backgrounds. They understand Western palates, Indonesian flavours, and high-volume service.' },
              { title: 'Event Planning Expertise', desc: 'We have catered over five hundred villa events in Bali. That means we know how to read a venue, manage timelines, and adapt when the weather or guest count changes.' },
              { title: 'Hospitality Standards', desc: 'Uniformed staff, polite service, clear communication, and attention to guest comfort are non-negotiable parts of every booking.' },
              { title: 'Food Safety Processes', desc: 'Allergen separation, temperature logs, certified food handlers, and hygiene checks are built into every event. We take safety as seriously as taste.' },
              { title: 'Ingredient Sourcing', desc: 'We buy fresh, verify suppliers, and keep receipts visible for daily chef services. Quality ingredients are the foundation of every menu.' },
              { title: 'Operational Planning', desc: 'From kitchen tent placement to power supply and parking, we plan logistics before we arrive so setup is smooth and service is on time.' },
              { title: 'Large-Event Capability', desc: 'We have the team, equipment, and supplier network to handle events for 250+ guests, including multi-station buffets and plated service.' },
              { title: 'Transparent Booking Process', desc: 'Every quote is itemised, every menu is confirmed in writing, and every deposit is acknowledged with a booking summary. No ambiguity.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-[#E8E6E3] p-6">
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-sm text-[#4A4745] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-source="catering-trust-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Speak with the Catering Team
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      {/* Photo gallery */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader eyebrow="Gallery" title="Catering across Bali" subtitle="From villa buffets to plated dinners." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { src: '/generated/mychef-catering-1.webp', alt: 'Balinese chefs plating gourmet dishes at a Bali villa buffet' },
              { src: '/generated/mychef-catering-2.webp', alt: 'Lavish catering buffet on a Bali villa terrace with Indonesian staff serving' },
              { src: '/generated/mychef-catering-3.webp', alt: 'Indonesian catering team preparing food at a Bali villa event' },
              { src: '/generated/mychef-catering-4.webp', alt: 'Elegant plated dinner service by a Balinese waiter at a Bali villa' },
            ].map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <OptimizedImage src={g.src} alt={g.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        testimonials={[
          { name: 'Sarah & James', location: 'Seminyak Villa', quote: 'The BBQ was incredible — the Wagyu was perfectly cooked and the team handled everything. We did not lift a finger.', rating: 5 },
          { name: 'The Chen Family', location: 'Canggu Villa', quote: 'We booked the Indonesian buffet for 40 guests. The sate lilit and nasi kuning were authentic and delicious. Highly recommend.', rating: 5 },
          { name: 'Emma R.', location: 'Uluwatu Villa', quote: 'The grazing table was the highlight of our wedding cocktail hour. Every guest commented on how beautiful (and tasty) it was.', rating: 5 },
        ]}
        title="What Our Guests Say"
        subtitle="Real reviews from real villa events across Bali."
      />

      {/* ═══════ SECTION 16: FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Questions"
            title="Catering FAQ"
          />
          <FAQAccordion items={CATERING_FAQS} defaultOpenCount={4} />
        </div>
      </section>

      {/* ═══════ SECTION 17: BOOKING FORM ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto">
          <SectionHeader
            eyebrow="Book Now"
            title="Get Your Catering Quote"
            subtitle="Tell us your date, guests, and villa. We will reply on WhatsApp with availability and exact pricing in under 2 hours."
          />
          <BookingFormCatering
            title="Get Your Catering Quote"
            fields={[
              { name: 'package', label: 'Package', type: 'select', icon: Utensils, required: true },
              { name: 'date', label: 'Event Date', type: 'date', icon: Calendar, required: true },
              { name: 'guests', label: 'Number of Guests', type: 'number', icon: Users, placeholder: 'e.g. 12', required: true },
              { name: 'area', label: 'Villa Location', type: 'text', icon: MapPin, placeholder: 'Seminyak, Canggu, Ubud...', required: true },
              { name: 'duration', label: 'Stay Length / Service Window', type: 'text', icon: Calendar, placeholder: 'e.g. 12 days, dinner only, breakfast + dinner' },
              { name: 'meals', label: 'Meals Needed', type: 'text', icon: Utensils, placeholder: 'Breakfast, lunch, dinner, BBQ, special event...' },
              { name: 'budget', label: 'Budget Range (optional)', type: 'text', icon: CreditCard, placeholder: 'e.g. IDR 40M total' },
              { name: 'name', label: 'Your Name', type: 'text', required: true },
              { name: 'whatsapp', label: 'WhatsApp', type: 'text', required: true },
              { name: 'notes', label: 'Dietary Notes / Special Requests', type: 'textarea', rows: 4 },
            ]}
            packageOptions={[
              ...CATERING_STYLES.map((s) => s.title),
              ...BBQ_PACKAGES.map((p) => p.title),
              ...BUFFET_PACKAGES.map((p) => p.title),
              ...PLATED_PACKAGES.map((p) => p.title),
              ...DROPOFF_PACKAGES.map((p) => p.title),
              ...BABIGULING_PACKAGES.map((p) => p.title),
              ...GRAZING_PACKAGES.map((p) => p.title),
              ...FLOATING_PACKAGES.map((p) => p.title),
            ]}
            submitLabelBuilder={(formData) => {
              const guestLabel = formData.guests?.trim() ? `${formData.guests.trim()} Guests` : 'Your Guests'
              return `Get Catering Quote for ${guestLabel}`
            }}
            messageIntro="Hi myCHEF, I'd like a catering quote for my stay in Bali."
          />
          <p className="text-center text-xs text-[#4A4745]/80 mt-6">
            No spam. No calls unless you ask. Just a clear quote you can book or ignore.
          </p>
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 18: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/generated/mychef-catering-bali-hub-catering.webp"
            alt="Completed villa catering table with chef-prepared dishes ready to serve in Bali by myCHEF"
            className="w-full h-full object-cover"
            loading="lazy" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/20 md:hidden" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Still Deciding?
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Here Is What Happens Next
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { step: '1', text: 'Send your details' },
              { step: '2', text: 'Get a quote in 2 hours' },
              { step: '3', text: 'Pay 50% to lock it' },
              { step: '4', text: 'Show up and eat' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-[#C5A028] text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.step}</span>
                <p className="text-white/[80%] text-sm mt-1">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-final-cta"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Get Your Catering Quote in 1 Hour
            </a>
            <a
              href="tel:+6289674072020"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone className="w-4 h-4" /> Call +62 896-7407-2020
            </a>
          </div>
          <p className="text-sm text-white/[60%] mb-8">
            No booking fee · Free consultation · Exact quote within 2 hours
          </p>
          <TrustRow
            items={['Guest-loved service', '500+ villa events served', '8 years in Bali', 'Same-day quotes when possible']}
            dark
          />
        </div>
      </section>

      <StaffingInfo />
      <BookingProcess />

      <LocationChips
        title="Catering Across Bali"
        subtitle="BBQ on the beach in Jimbaran. Buffet in a Canggu villa. Plated dinner in Uluwatu. We bring the kitchen to you — wherever you are."
      />

      <TaxFooter className="py-6" />
      <StickyMobileCTA
        pageSource="catering-main"
        serviceType="catering"
        label="Get a Catering Quote via WhatsApp"
        serviceName="catering in Bali"
        intent="menu options and pricing"
      />
    <ArticleContentSection downgradeFirstH1 />
    </div>
  )
}