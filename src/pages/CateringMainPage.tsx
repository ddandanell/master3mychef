import { useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  MessageCircle, Check, ArrowRight, Phone, Calendar, Users, MapPin,
  Utensils, CreditCard, ChefHat, Sparkles, ShieldCheck, HelpCircle,
  Home, PartyPopper, Flame, Wine, Flower2, CakeSlice,
} from 'lucide-react'
import SeoHead, {
  localBusinessSchema,
  breadcrumbSchema,
  cateringServiceSchema,
  offerSchema,
  faqPageSchema,
  aggregateRatingSchema,
} from '@/components/SeoHead'
import { getPageMeta } from '@/data/page-meta'
import SectionHeader from '@/components/catering/SectionHeader'
import CateringPackageCard from '@/components/catering/CateringPackageCard'
import CateringAddOnCard from '@/components/catering/CateringAddOnCard'
import FAQAccordion from '@/components/catering/FAQAccordion'
import LocationChips from '@/components/LocationChips'
import TrustRow from '@/components/catering/TrustRow'
import BookingFormCatering from '@/components/catering/BookingFormCatering'
import { Breadcrumb, PressStrip } from '@/components/shared'
import TrustStrip from '@/components/shared/TrustStrip'
import TaxFooter from '@/components/shared/TaxFooter'
import TestimonialBlock from '@/components/shared/TestimonialBlock'
import { CateringRiskReversal } from '@/components/shared'

import OptimizedImage from '@/components/OptimizedImage'

const WA_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20a%20catering%20quote.'
const WA_DAILY_CHEF_LINK = 'https://wa.me/6282237565997?text=Hi%20myCHEF,%20I%20would%20like%20to%20book%20a%20daily%20villa%20chef.'
const SITE = 'https://mychef.id'
const bookingHref = (packageName: string) => `?package=${encodeURIComponent(packageName)}#book`

/* ── DATA ── */

const CATERING_STYLES = [
  {
    image: '/generated/pkg-bbq.webp',
    title: 'BBQ Catering',
    price: 'From IDR 450,000/person',
    description: 'Best for villa dinners, birthdays, and relaxed group meals. Chef grills live at your villa.',
    href: '/catering/bbq-catering',
    accent: '#C5A028',
  },
  {
    image: '/generated/aura-buffet.webp',
    title: 'Buffet Catering',
    price: 'From IDR 550,000/person',
    description: 'Best for weddings, larger events, and 30+ guests. Full buffet line with service staff.',
    href: '/catering/buffet',
    accent: '#6B8E5A',
  },
  {
    image: '/generated/hub-catering.webp',
    title: 'Plated Set Menus',
    price: 'From IDR 800,000/person',
    description: 'Best for seated dinners and private events with full table service.',
    href: '/catering/plated-catering',
    accent: '#2C5F7C',
  },
  {
    image: '/generated/catering/dropoff-hero.webp',
    title: 'Drop-Off Catering',
    price: 'From IDR 350,000/person',
    description: 'Best for villa guests who want food delivered without staff inside. Reheating instructions included.',
    href: '/catering/drop-off-catering',
    accent: '#8B5A2B',
  },
  {
    image: '/generated/hub-villa.webp',
    title: 'Villa Catering',
    price: 'From IDR 450,000/person',
    description: 'Best for villa lunches, dinners, and multi-day stays. Chef comes to your villa.',
    href: '/catering/villa-catering',
    accent: '#2C5F7C',
  },
  {
    image: '/generated/corp-villa.webp',
    title: 'Corporate Catering',
    price: 'From IDR 450,000/person',
    description: 'Best for offsites, board dinners, and conference catering. Tax invoiced.',
    href: '/catering/corporate-catering',
    accent: '#2C5F7C',
  },
  {
    image: '/generated/catering/babi-guling.webp',
    title: 'Babi Guling',
    price: 'From IDR 3,700,000 total',
    description: 'Best for traditional Balinese whole-pig events. 10 to 50 guests.',
    href: '/catering/babi-guling',
    accent: '#C5A028',
  },
  {
    image: '/generated/pkg-grazing.webp',
    title: 'Grazing Tables',
    price: 'From IDR 650,000',
    description: 'Best for parties, weddings, poolside events, and welcome snacks.',
    href: '/catering/grazing-tables',
    accent: '#6B8E5A',
  },
  {
    image: '/generated/city-ubud.webp',
    title: 'Retreat Catering',
    price: 'From IDR 400,000/person/day',
    description: 'Best for yoga retreats, wellness centers, and multi-day group stays. Plant-forward menus.',
    href: '/catering/retreat-catering',
    accent: '#6B8E5A',
  },
  {
    image: '/generated/generated/mychef-catering-bali-floating-breakfast.webp',
    title: 'Floating Breakfast',
    price: 'From IDR 950,000/couple',
    description: 'Best for villa pools, couples, birthdays, and honeymoon mornings.',
    href: '/catering/floating-breakfast',
    accent: '#2C5F7C',
  },
]

const BBQ_PACKAGES = [
  {
    image: '/generated/pkg-bbq.webp',
    title: 'Indonesian BBQ',
    price: 'IDR 450,000/person',
    description: 'Sate lilit, sate ayam, ikan bakar, jagung bakar, sambal matah, nasi kuning, sayur urap, gado-gado, fresh fruit dessert.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 6 guests',
  },
  {
    image: '/generated/sol-bbq.webp',
    title: 'International BBQ',
    price: 'IDR 600,000/person',
    description: 'Australian beef tenderloin, lamb chops, grilled prawns, salmon fillet, chicken thigh, gourmet salads, baked potato, garlic bread.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Setup & cleanup'],
    minGuests: 'Min. 6 guests',
  },
  {
    image: '/generated/pkg-seafood.webp',
    title: 'Surf & Turf BBQ',
    price: 'IDR 850,000/person',
    description: 'Wagyu steak, lobster tail, king prawns, salmon, Mahi-mahi, larger-format sides, signature sauces, chocolate dessert station.',
    includes: ['Chef', '2 service staff', 'All equipment', 'Plated service', 'Setup & cleanup'],
    minGuests: 'Min. 6 guests',
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
    price: 'IDR 550,000/person',
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
  { title: 'Family Dinner Drop-Off', price: 'IDR 350,000/person', description: '4 to 8 people. Hot main, 2 sides, dessert, bread.' },
  { title: 'Dinner Party Drop-Off', price: 'IDR 500,000/person', description: '8 to 16 people. Starter, main, 3 sides, dessert.' },
  { title: 'Grazing Dinner Drop-Off', price: 'IDR 650,000/person', description: '8+ people. Charcuterie, cheese board, 2 hot mains, sides, dessert.' },
]

const BABIGULING_PACKAGES = [
  { title: 'Small', price: 'IDR 3,700,000', description: '10 to 15 guests. Whole pig, lawar, nasi kuning, sate, sambals, dessert, fruit.' },
  { title: 'Medium', price: 'IDR 5,000,000', description: '25 to 30 guests. Extended sides and larger portions.' },
  { title: 'Large', price: 'IDR 7,000,000', description: '40 to 50 guests. Full spread with extended sides.' },
]

const GRAZING_PACKAGES = [
  { title: 'Mini Grazing Box', price: 'IDR 650,000', description: '2 pax. Perfect for couples or small welcome.' },
  { title: 'Cheese & Cold Cuts Platter', price: 'IDR 2,700,000', description: '10 pax. 4-6 cheeses, 3-4 cured meats, dips, fruit, nuts.' },
  { title: 'Wedding-Scale Grazing', price: 'IDR 350,000/person', description: '20 to 50 pax. Full visual spread with edible flowers.' },
]

const FLOATING_PACKAGES = [
  { title: 'Floating Breakfast for 2', price: 'IDR 950,000/couple', description: 'Tropical fruit, eggs, pastries, coffee, juice, flowers.' },
  { title: 'Floating Brunch for 2', price: 'IDR 1,400,000/couple', description: 'Extended brunch with champagne option.' },
  { title: 'Floating Group Brunch', price: 'IDR 750,000/person', description: '4 to 10 guests. Large floating tray setup.' },
]

const DAILY_CHEF_PACKAGES = [
  {
    title: 'Breakfast Only',
    price: 'IDR 600,000',
    period: '/hour',
    desc: 'Fresh tropical fruits, pastries, eggs any style, Balinese coffee. ~2 hours/day.',
    bestFor: 'Couples, light mornings, villa guests who lunch out',
  },
  {
    title: 'Half Board',
    price: 'IDR 1,100,000',
    period: '/hour',
    desc: 'Breakfast + dinner. Perfect for families who lunch out. ~4–5 hours/day.',
    bestFor: 'Families, groups who explore Bali during the day',
  },
  {
    title: 'Full Board',
    price: 'IDR 1,500,000',
    period: '/hour',
    desc: 'Breakfast, lunch, and dinner. The complete villa experience. ~6–8 hours/day.',
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
  { name: 'Indonesian BBQ', price: 'IDR 450,000/person', min: '6 guests', bestFor: 'Villa BBQ' },
  { name: 'International BBQ', price: 'IDR 600,000/person', min: '6 guests', bestFor: 'Villa BBQ' },
  { name: 'Surf & Turf BBQ', price: 'IDR 850,000/person', min: '6 guests', bestFor: 'Special occasions' },
  { name: 'Indonesian Buffet', price: 'IDR 550,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'International Buffet', price: 'IDR 750,000/person', min: '30 guests', bestFor: 'Weddings & events' },
  { name: 'Live-Station Buffet', price: 'IDR 950,000/person', min: '30 guests', bestFor: 'Larger-format events' },
  { name: '3-Course Plated', price: 'IDR 800,000/person', min: '10 guests', bestFor: 'Seated dinners' },
  { name: '4-Course Plated', price: 'IDR 1,000,000/person', min: '10 guests', bestFor: 'Milestone dinners' },
  { name: '5-Course Dinner', price: 'IDR 1,300,000/person', min: '10 guests', bestFor: 'Fine dining' },
  { name: 'Family Drop-Off', price: 'IDR 350,000/person', min: '4 guests', bestFor: 'Private meals' },
  { name: 'Dinner Party Drop-Off', price: 'IDR 500,000/person', min: '8 guests', bestFor: 'Small parties' },
  { name: 'Babi Guling Small', price: 'IDR 3,700,000 total', min: '10 guests', bestFor: 'Traditional events' },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose your package', desc: 'Pick BBQ, buffet, plated, drop-off, or specialty catering.', icon: Utensils },
  { step: '02', title: 'Send details', desc: 'Share date, area, guest count, and any dietary needs.', icon: Calendar },
  { step: '03', title: 'Add extras', desc: 'Bartender, Wagyu upgrade, gluten-free, plated service.', icon: Sparkles },
  { step: '04', title: 'Confirm price', desc: 'We send final quote including travel fees and add-ons.', icon: CreditCard },
  { step: '05', title: 'Pay deposit', desc: '25% deposit to lock your date. Balance due on the day.', icon: ShieldCheck },
  { step: '06', title: 'We handle everything', desc: 'Chef arrives, cooks, serves, and cleans up. You relax.', icon: ChefHat },
]

const AREAS = [
  'Canggu', 'Seminyak', 'Berawa', 'Pererenan', 'Ubud', 'Uluwatu',
  'Nusa Dua', 'Sanur', 'Jimbaran', 'Tanah Lot', 'Kerobokan', 'Kuta', 'Legian', 'Denpasar',
]

const FAQS = [
  { q: 'Do your prices include chef and staff?', a: 'Yes. All BBQ, buffet, and plated packages include a private chef and service staff. Drop-off catering does not include on-site staff — that is the point.' },
  { q: 'Do you provide catering at villas?', a: 'Yes. We specialize in villa catering across Bali. We bring all equipment, set up in your villa garden or pool area, and clean up after.' },
  { q: 'Can I book only drop-off food?', a: 'Absolutely. Our drop-off catering is designed for guests who want great food without staff staying in the villa.' },
  { q: 'What is the minimum guest count?', a: 'BBQ: 6 guests (Seminyak/Canggu), 10 (Ubud), 20 (Uluwatu). Buffet: 30 guests. Plated: 10 guests. Drop-off: 4 guests. Babi Guling: 10 guests.' },
  { q: 'Do you offer halal or pork-free menus?', a: 'Yes. We offer fully halal and pork-free BBQ, buffet, and plated menus. Babi Guling contains pork and is not halal.' },
  { q: 'Does Babi Guling contain pork?', a: 'Yes. Babi Guling is a traditional Balinese whole-pig roast and contains pork. It is not suitable for halal groups.' },
  { q: 'Can you handle gluten-free or allergies?', a: 'Yes. We accommodate gluten-free, nut-free, dairy-free, shellfish-free, and other allergies. Please tell us when booking.' },
  { q: 'Do you bring equipment?', a: 'Yes. We bring grills, chafing dishes, tables, linens, cutlery, glassware, and everything needed for service.' },
  { q: 'Do you clean up after the event?', a: 'Yes. Full cleanup is included in all serviced packages (BBQ, buffet, plated). Drop-off does not include cleanup.' },
  { q: 'Do you charge travel fees?', a: 'Travel fees apply for areas outside Seminyak/Canggu: IDR 250,000 to 700,000 depending on distance and event size.' },
  { q: 'How much deposit is required?', a: 'A 25% deposit is required to confirm your booking. The balance is due on the day of the event.' },
  { q: 'How far in advance should I book?', a: 'We recommend 3-7 days for BBQ and buffet. 2+ weeks for weddings and large events. Drop-off can often be arranged next-day if ordered by 4pm.' },
  { q: 'Is this a real chef or just delivered food?', a: 'A real chef grills at your villa. Not pre-cooked. Not delivered from a kitchen. Live fire, your pool, your garden. The chef arrives 3 hours early, preps everything on site, and serves course by course.' },
  { q: 'How do I know the food is safe?', a: 'All chefs are food-safety certified. We use separate prep for allergies. We have served 500+ villa events with zero food safety incidents. Every ingredient is purchased fresh the morning of your event.' },
  { q: 'What if it rains?', a: 'We bring a kitchen tent for outdoor setups. Or we move indoors if your villa has covered space. We plan for Bali weather — it is part of the service, not an extra charge.' },
  { q: 'Can I see a menu before booking?', a: 'Yes. We send a full menu proposal with exact pricing before you pay anything. No commitment required to review. Most quotes are sent within 2 hours.' },
  { q: 'What if my guest count changes?', a: 'Final headcount is due 48 hours before your event. We adjust portions and staffing. No penalty for small changes. Large increases may affect minimums.' },
  { q: 'Why myCHEF and not another caterer?', a: 'We own the full stack — chefs, equipment, logistics, staff training. No middlemen. That is why we can quote fast, deliver consistently, and fix issues immediately. Most other caterers outsource at least one layer.' },
  { q: 'What is the difference between One-Time Catering and Daily Chef Service?', a: 'One-Time Catering is for a single event — a BBQ night, a birthday dinner, a wedding buffet. The chef arrives, cooks, serves, and leaves. Daily Chef Service is for ongoing stays — the same chef comes to your villa every day for breakfast, lunch, and dinner throughout your holiday. Daily chef is billed hourly; one-time catering is billed per person.' },
  { q: 'Which service is right for me?', a: 'If you are celebrating one special occasion, choose One-Time Catering. If you are staying in a villa for multiple days and want every meal handled, choose Daily Chef Service. Not sure? Message us on WhatsApp and we will guide you in under 2 minutes.' },
]

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

export default function CateringMainPage() {
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<'one-time' | 'daily'>('one-time')
  const [decisionAnswers, setDecisionAnswers] = useState<(string | null)[]>([null, null, null])
  const [decisionResult, setDecisionResult] = useState<'one-time' | 'daily' | null>(null)

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
          localBusinessSchema,
          cateringServiceSchema('Villa Catering Bali', 'Chef-led catering for Bali villas, events, BBQ nights, and private gatherings with flexible formats from buffet to plated service. myCHEF.id manages menus, staffing, setup, and cleanup across Bali.', `${SITE}/catering`, 'FoodService'),
          offerSchema('Indonesian BBQ', 450000, 'IDR', `${SITE}/catering/bbq-catering`),
          offerSchema('International BBQ', 600000, 'IDR', `${SITE}/catering/bbq-catering`),
          offerSchema('Surf & Turf BBQ', 850000, 'IDR', `${SITE}/catering/bbq-catering`),
          offerSchema('Indonesian Buffet', 550000, 'IDR', `${SITE}/catering/buffet`),
          offerSchema('International Buffet', 750000, 'IDR', `${SITE}/catering/buffet`),
          offerSchema('Live-Station Buffet', 950000, 'IDR', `${SITE}/catering/buffet`),
          offerSchema('3-Course Plated', 800000, 'IDR', `${SITE}/catering/plated-catering`),
          offerSchema('4-Course Plated', 1000000, 'IDR', `${SITE}/catering/plated-catering`),
          offerSchema('5-Course Dinner', 1300000, 'IDR', `${SITE}/catering/plated-catering`),
          offerSchema('Family Drop-Off', 350000, 'IDR', `${SITE}/catering/drop-off-catering`),
          offerSchema('Dinner Party Drop-Off', 500000, 'IDR', `${SITE}/catering/drop-off-catering`),
          offerSchema('Babi Guling Small', 3700000, 'IDR', `${SITE}/catering/babi-guling`),
          faqPageSchema(FAQS.map(f => ({ question: f.q, answer: f.a }))),
          aggregateRatingSchema(4.9, 127),
          breadcrumbSchema('Catering', `${SITE}/catering`),
        ]}
      />

      <Breadcrumb items={[{ label: 'Catering' }]} />

      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/generated/mychef-catering-bali-catering-hero.webp"
            alt="Chef grilling seafood at a Bali villa poolside at sunset"
            width={1920}
            height={1080}
            decoding="async" fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/25 md:hidden" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <Breadcrumb items={[{ label: 'Catering' }]} theme="dark" className="justify-center mb-8" />
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            myCHEF Events & Catering
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Events & Catering Services<br />
            <span className="italic">Built for Groups, Parties & Hosted Dinners.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/[85%] mb-8 max-w-3xl mx-auto">
            This page is for villa parties, weddings, corporate dinners, and catered meals for 5+ guests. If you want a chef for breakfast, lunch, or intimate in-villa dining during your stay, book our Private Villa Dining service instead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_LINK}
              target="_blank"
              data-source="catering-hero"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B8E5A] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#5a7a4d] transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
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
            items={['500+ villa events served', '4.9★ Google Reviews', 'Chef + staff included', 'Same-day quotes', 'Bali-wide service']}
            dark
          />
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
                    ? 'bg-[#C5A028] text-white shadow-md'
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
                <p className="text-[#6B8E5A] font-semibold">Starting from IDR 450,000 per person</p>
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
                  <h4 className="text-xl md:text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>BBQ Catering: The Villa Volume Engine</h4>
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
                  <MessageCircle className="w-4 h-4" /> Get Catering Quote for 5+ Guests
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
                <p className="text-[#C5A028] font-semibold">IDR 600K/hour · Groceries at cost</p>
              </div>

              {/* Daily packages */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {DAILY_CHEF_PACKAGES.map((pkg) => (
                  <div key={pkg.title} className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6 md:p-8 text-center hover:shadow-lg transition-all flex flex-col">
                    <h4 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.title}</h4>
                    <p className="text-[#C5A028] font-semibold text-lg mb-1">{pkg.price}<span className="text-sm">{pkg.period}</span></p>
                    <p className="text-[#4A4745] text-sm mb-4 flex-1">{pkg.desc}</p>
                    <p className="text-xs text-[#4A4745]/70 mb-4">Best for: {pkg.bestFor}</p>
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
                  <MessageCircle className="w-4 h-4" /> Book Daily Chef Service
                </a>
              </div>
            </div>
          )}
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
            subtitle="A restaurant dinner for 10 in Seminyak costs 8–12M with drinks and transport. Our Indonesian BBQ for 10: 4.5M. At your villa. With a chef."
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
              <MessageCircle className="w-4 h-4" /> Get Catering Quote for Your Guests
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
                  <th className="pb-3"></th>
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
              Questions? We reply within 2 minutes during Bali business hours (9am–6pm).
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

      {/* ═══════ SECTION 15: AREAS SERVED ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAFAF8]">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Coverage"
            title="Catering Across Bali"
            subtitle="We serve villas and event spaces across <Link to='/locations' className='underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5'>all Bali regions</Link>. Popular areas include <Link to='/locations/seminyak' className='underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5'>Seminyak</Link>, <Link to='/locations/canggu' className='underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5'>Canggu</Link>, and <Link to='/locations/ubud' className='underline hover:text-[#C5A028] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A028] rounded px-0.5'>Ubud</Link>. Travel fees apply outside Canggu and Seminyak."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
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

      {/* ═══════ TESTIMONIALS ═══════ */}
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
          <FAQAccordion items={FAQS} defaultOpenCount={4} />
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
          <p className="text-center text-xs text-[#4A4745]/60 mt-6">
            No spam. No calls unless you ask. Just a clear quote you can book or ignore.
          </p>
        </div>
      </section>

      <PressStrip />

      {/* ═══════ SECTION 18: FINAL CTA ═══════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/generated/hub-catering.webp"
            alt="Completed villa dinner table with food ready"
            className="w-full h-full object-cover"
            loading="lazy" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 45%, rgba(0,0,0,0.10) 100%)',
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
              { step: '3', text: 'Pay 25% to lock it' },
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
              <MessageCircle className="w-4 h-4" /> Get Catering Quote for Your Guests
            </a>
            <a
              href="tel:+6282237565997"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone className="w-4 h-4" /> Call +62 822 3756 5997
            </a>
          </div>
          <p className="text-sm text-white/[60%] mb-8">
            No booking fee · Free consultation · Exact quote within 2 hours
          </p>
          <TrustRow
            items={['4.9★ from 180+ reviews', '500+ villa events served', '8 years in Bali', 'Same-day quotes']}
            dark
          />
        </div>
      </section>

      <LocationChips
        title="Catering Across Bali"
        subtitle="BBQ on the beach in Jimbaran. Buffet in a Canggu villa. Plated dinner in Uluwatu. We bring the kitchen to you — wherever you are."
      />

      <TaxFooter className="py-6" />
    </div>
  )
}
