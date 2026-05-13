import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Star, Send, Check, ChevronRight, Phone, MessageCircle, Award, Users, Calendar, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   CATERING PAGE — Villa Catering
   Complete rewrite:
   - Expandable service details
   - 6 chef profiles for rent-a-chef
   - Booking process with 50% deposit
   - Rental durations (day/week/month/long)
   - Certifications & partnerships
   - Blog section
   - Contact person (Daniel)
   ═══════════════════════════════════════════════════════════════ */

/* ─── 8 Services with detailed expandable content ─── */
const services = [
  {
    icon: <Calendar size={22} />,
    title: 'Daily Breakfast',
    short: 'Start every morning beautifully with a fresh tropical breakfast prepared in your villa.',
    full: 'Our breakfast service includes fresh tropical fruit platters, smoothie bowls, eggs prepared any style, pancakes or French toast, fresh pastries from local bakeries, avocado toast, and barista-quality coffee. Your chef arrives before you wake and has everything ready when you come down. Whether you want a light healthy start or a full indulgent spread, we adapt to your mood every morning.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Lunch & Light Meals',
    short: 'Fresh, delicious midday meals — from light salads to hearty Indonesian specialties.',
    full: 'Lunch is designed to keep your day going. Fresh salads with tropical ingredients, grilled seafood, handmade pasta, Indonesian specialties like nasi goreng or satay, wraps and sandwiches for poolside eating. Everything prepared fresh in your kitchen and served when you are ready. No rush, no schedule — just great food when you want it.',
  },
  {
    icon: <Users size={22} />,
    title: 'Family-Style Dining',
    short: 'Large shared platters designed for groups — everyone gathers around the table.',
    full: 'Family-style dining brings everyone together. Large shared platters of grilled meats, fresh seafood, roasted vegetables, handmade pasta, and local specialties placed at the center of the table. This is how we eat in Bali — communal, warm, generous. Perfect for families, groups of friends, or anyone who believes food tastes better when shared.',
  },
  {
    icon: <Star size={22} />,
    title: 'BBQ & Grill Nights',
    short: 'Premium grilled meats, fresh seafood, and tropical sides by the pool.',
    full: 'Our BBQ nights are legendary. Premium imported steaks, fresh local seafood (prawns, fish, squid), marinated chicken, grilled vegetables with Balinese spices, fresh salads, homemade sauces and salsas. Your chef grills everything to order by the pool while you relax with a drink. The perfect casual evening under the stars.',
  },
  {
    icon: <Award size={22} />,
    title: 'Healthy & Wellness Menus',
    short: 'Plant-forward, nutrient-dense meals designed for health-conscious guests.',
    full: 'Wellness-focused menus crafted by chefs who understand nutrition. Fresh, organic ingredients from local farms. Vegan, raw, Ayurvedic, and cleanse-focused options available. Low-sodium, anti-inflammatory, gut-friendly preparations. Smoothie bowls, cold-pressed juices, nutrient-dense salads, and nourishing mains. Many of our wellness retreat partners choose this service exclusively.',
  },
  {
    icon: <Users size={22} />,
    title: 'Kids Meals',
    short: 'Healthy, creative meals that even picky eaters love.',
    full: 'Our chefs are experts at feeding children. Hidden-veggie pasta sauces, fun tropical fruit platters shaped like animals, homemade chicken nuggets, mini pizzas, fresh smoothies, and healthy treats that taste like dessert. We accommodate allergies, fussy eaters, and special dietary needs with creativity and patience. Parents tell us their kids eat better on vacation than at home.',
  },
  {
    icon: <Calendar size={22} />,
    title: 'Meal Prep',
    short: 'Healthy meals prepared in advance, ready when you need them.',
    full: 'For guests who want flexibility, our meal prep service means your chef prepares healthy, delicious meals in advance and stores them perfectly in your villa kitchen. Grab a fresh salad for lunch, reheat a nourishing curry for dinner, or snack on homemade energy balls between activities. Ideal for fitness-focused travelers, busy families, and anyone who wants great food without set meal times.',
  },
  {
    icon: <Phone size={22} />,
    title: 'Grocery Shopping',
    short: 'Your chef handles all shopping — visiting markets at dawn for the freshest ingredients.',
    full: 'Your chef is also your personal shopper. They visit local markets at dawn when the produce is freshest, source premium ingredients from trusted suppliers, and handle all the logistics. You never have to think about what to buy, where to go, or how to communicate in Indonesian. Everything arrives at your villa, fully receipted, with complete transparency.',
  },
]

/* ─── 6 Chef Profiles ─── */
const chefs = [
  {
    name: 'Chef Maria',
    specialty: 'Italian & Mediterranean',
    image: '/chef-maria.jpg',
    bio: 'Trained in Rome and Milan. 12 years of experience in fine dining. Specializes in handmade pasta, fresh seafood, and Mediterranean flavors. Warm, engaging personality. Speaks English, Italian, and Indonesian.',
    tags: ['Pasta', 'Seafood', 'Family Meals'],
  },
  {
    name: 'Chef Antonio',
    specialty: 'Italian Fine Dining',
    image: '/chef-antonio.jpg',
    bio: 'Michelin-starred restaurant background from Sicily. 15 years of culinary mastery. Expert in truffle, wine pairing, and multi-course tasting menus. The storyteller — every dish has a history. Speaks English and Italian.',
    tags: ['Fine Dining', 'Wine Pairing', 'Tasting Menus'],
  },
  {
    name: 'Chef David',
    specialty: 'French & European',
    image: '/chef-david.jpg',
    bio: 'Classically trained in Lyon, France. 10 years across Europe and Asia. Masters French technique with Balinese ingredients. Specializes in pastry, sauces, and elegant plating. Speaks English and French.',
    tags: ['Pastry', 'French Cuisine', 'Elegant Dining'],
  },
  {
    name: 'Chef Ani',
    specialty: 'Healthy & Wellness',
    image: '/chef-ani.jpg',
    bio: 'Certified nutritionist and plant-based chef. 8 years in wellness retreat kitchens. Expert in vegan, raw, Ayurvedic, and anti-inflammatory cooking. Creates food that heals and delights. Speaks English and Indonesian.',
    tags: ['Vegan', 'Wellness', 'Nutrition'],
  },
  {
    name: 'Chef Wayan',
    specialty: 'Indonesian & Asian Fusion',
    image: '/chef-portrait.jpg',
    bio: 'Born and raised in Bali. 20 years of experience in Indonesian and Asian cuisine. Masters the art of Balinese spices, traditional techniques, and fusion creativity. The heart of our local flavor. Speaks English and Indonesian.',
    tags: ['Indonesian', 'BBQ', 'Local Flavors'],
  },
  {
    name: 'Chef Sarah',
    specialty: 'Family & International',
    image: '/hero-catering.jpg',
    bio: 'Background in international family catering across 6 countries. Expert in multi-cultural cuisines, kid-friendly meals, and large-group dining. The organizational genius who makes complex meals look effortless. Speaks English and Spanish.',
    tags: ['Family Meals', 'Kids', 'International'],
  },
]

/* ─── Rental Durations ─── */
const rentalOptions = [
  {
    title: 'Daily Rental',
    desc: 'Perfect for a special day, a birthday celebration, or a one-time indulgence. Your chef arrives in the morning, prepares all meals for the day, and leaves your kitchen spotless.',
    includes: ['Full day chef service', 'All meals (breakfast, lunch, dinner)', 'Grocery shopping', 'Menu planning', 'Kitchen cleanup'],
  },
  {
    title: 'Weekly Rental',
    desc: 'Our most popular option. A dedicated chef for your entire week in Bali. They learn your preferences, adapt to your schedule, and become part of your villa experience.',
    includes: ['6 days of chef service', 'All daily meals', 'Dedicated chef matched to you', 'Grocery management', 'Flexible scheduling'],
  },
  {
    title: 'Monthly Rental',
    desc: 'For extended stays, digital nomad lifestyles, or long family vacations. Your chef becomes your culinary partner, managing everything food-related for a month or more.',
    includes: ['Full month dedicated chef', 'Complete kitchen management', 'Meal planning & prep', 'Special dietary management', 'Best value pricing'],
  },
  {
    title: 'Long-Term Placement',
    desc: 'For villa owners, long-term renters, or property managers who need a permanent culinary solution. We place a certified, trained chef directly with you.',
    includes: ['Full-time dedicated chef', 'Villa kitchen management', 'Guest meal service', 'Monthly menu planning', 'Ongoing training & support'],
  },
]

/* ─── Booking Process ─── */
const bookingSteps = [
  { num: '01', title: 'Reach Out', desc: 'Call or WhatsApp Daniel. Tell us about your villa, your group, your dates, and what you are looking for. We listen first.' },
  { num: '02', title: 'Discovery', desc: 'We ask the right questions. Dietary needs? Food preferences? Special occasions? Kids? Health goals? We discover what matters to you.' },
  { num: '03', title: 'Match Your Chef', desc: 'Based on your needs, we match you with the perfect chef from our team of 50+ professionals. The right personality, the right skills.' },
  { num: '04', title: 'Confirm & Deposit', desc: 'We send you a detailed proposal. To confirm your booking, a 50% deposit secures your chef. The balance is due before service begins.' },
  { num: '05', title: 'Plan Together', desc: 'Your chef contacts you directly to plan menus, discuss preferences, and coordinate arrival. Everything is tailored to you.' },
  { num: '06', title: 'Enjoy', desc: 'Your chef arrives, shops, cooks, serves, and cleans. You simply enjoy extraordinary food in your villa. We handle everything else.' },
]

/* ─── Certifications ─── */
const certifications = [
  { name: 'HACCP Certified', desc: 'Hazard Analysis Critical Control Points — the global standard for food safety in professional kitchens.' },
  { name: 'Food Safety Level 3', desc: 'All chefs hold Level 3 Food Safety Certification, the highest standard for food handlers.' },
  { name: 'Regular Health Checks', desc: 'All team members undergo quarterly health screenings and maintain current medical certificates.' },
  { name: 'Insurance Coverage', desc: 'Full liability, property, and food safety insurance covering every placement and event.' },
  { name: 'Background Verified', desc: 'Every team member is thoroughly vetted with background checks before joining our platform.' },
  { name: 'Continuous Training', desc: 'Monthly training programs in food safety, new techniques, dietary requirements, and hospitality standards.' },
]

/* ─── Partnerships ─── */
const partnerships = [
  {
    name: 'Villa Management Companies',
    desc: 'We partner with Bali\'s leading villa management companies to provide chef services across their portfolios. One agreement, consistent quality, seamless coordination.',
  },
  {
    name: 'Luxury Hotels',
    desc: 'Boutique hotels and luxury resorts trust us for in-villa dining experiences, special event catering, and supplementary culinary staffing during peak seasons.',
  },
  {
    name: 'Wellness Retreats',
    desc: 'Yoga and wellness centers partner with us for healthy, nourishing meals designed around their retreat programs and guest wellness goals.',
  },
  {
    name: 'Real Estate Agencies',
    desc: 'Property agents recommend myCHEF to new villa owners and long-term renters as part of their premium relocation and settling-in services.',
  },
]

/* ─── Blog/Articles ─── */
const articles = [
  {
    title: 'Why a Private Chef is the Best Investment for Your Bali Villa Stay',
    excerpt: 'When you factor in restaurant costs, transport, waiting times, and the stress of coordinating group meals, a private chef often costs less while delivering infinitely more. Here is the real math.',
    tag: 'Guide',
  },
  {
    title: 'Feeding Picky Eaters in Bali: How Our Chefs Win Over Every Child',
    excerpt: 'From hidden-veggie pasta to tropical fruit art, our chefs have mastered the art of making healthy food irresistible to kids. Here are their secrets.',
    tag: 'Family',
  },
  {
    title: 'A Day in the Life of a myCHEF Villa Chef',
    excerpt: '4:30 AM at the market. 7:00 AM breakfast service. Follow Chef Maria through a typical day managing a villa kitchen in Canggu.',
    tag: 'Behind the Scenes',
  },
]

/* ─── FAQ ─── */
const faqs = [
  { q: 'How does hiring a private chef work?', a: 'Simple. Contact Daniel on WhatsApp or call us. We discuss your villa, dates, group size, and food preferences. We match you with the right chef from our team. You pay a 50% deposit to confirm, and we handle everything else — menus, shopping, cooking, serving, and cleanup.' },
  { q: 'How long can I rent a chef for?', a: 'Any duration — one day, one week, one month, or several months. Many of our guests book for their entire Bali stay. The longer the booking, the more your chef learns your preferences and the smoother everything becomes.' },
  { q: 'What is included when I rent a chef?', a: 'Everything food-related: menu planning, grocery shopping at local markets, all meal preparation, table service, and complete kitchen cleanup. Your chef arrives with everything they need. You just enjoy the food.' },
  { q: 'How does pricing work?', a: 'You pay for the chef\'s time plus the cost of groceries. There are no hidden fees. Groceries are billed at cost — your chef shops at local markets and provides all receipts. Contact Daniel for a personalized quote based on your needs.' },
  { q: 'Can I customize the menus?', a: 'Absolutely. Every menu is designed around your preferences. Tell us what you love, what you avoid, and any dietary needs. Your chef creates a custom plan for every day of your stay. Want Italian tonight and Thai tomorrow? We make it happen.' },
  { q: 'Can the chef accommodate dietary restrictions?', a: 'Yes. All our chefs are experienced with vegan, vegetarian, gluten-free, dairy-free, nut allergies, halal, kosher, low-sodium, keto, and more. Just let us know what you need when you book.' },
  { q: 'Are your chefs certified and insured?', a: 'Every chef on our platform is HACCP certified, holds Food Safety Level 3 certification, undergoes quarterly health checks, and is covered by our comprehensive liability and property insurance. We also conduct thorough background checks on every team member.' },
  { q: 'What if my chef is unavailable?', a: 'We maintain a bench of certified backup chefs. If your regular chef becomes unavailable, we provide a fully briefed replacement who matches your needs. In 8 years of operation, we have never left a guest without a chef.' },
  { q: 'Do you partner with villa management companies?', a: 'Yes. We partner with many of Bali\'s leading villa management companies, luxury hotels, wellness retreats, and real estate agencies. Our partnership program includes certified chef placement, quality control, and dedicated account management.' },
  { q: 'How do I book?', a: 'The easiest way is to WhatsApp Daniel directly — he handles all catering inquiries personally. Alternatively, fill out the booking form on this page and we will respond within 2 hours. For urgent requests, call us directly.' },
]

/* ─── Testimonials ─── */
const testimonials = [
  { quote: 'Having Chef Maria with us for two weeks was the best decision we made. She handled everything — breakfast for the kids, healthy lunches, amazing dinners. We actually relaxed on vacation for the first time.', name: 'The Andersen Family', detail: '2-Week Villa Stay, Canggu', rating: 5 },
  { quote: 'We hired myCHEF for our month-long retreat in Ubud. Chef David designed the most incredible wellness menu. Our guests were obsessed with the food.', name: 'Emma Richardson', detail: 'Wellness Retreat, 25 guests, Ubud', rating: 5 },
  { quote: 'The BBQ night was incredible. Fresh seafood, perfect steaks, incredible salads. The chef even taught my husband how to grill Balinese-style fish.', name: 'Michelle & Tom', detail: 'Group Stay, Seminyak', rating: 5 },
  { quote: 'With three kids under 8, I was worried about picky eaters. Chef Ani made the most creative, healthy meals — my kids actually asked for vegetables. Magic.', name: 'Lisa Chen', detail: 'Family Vacation, 10 Days, Nusa Dua', rating: 5 },
]

export default function CateringPage() {
  const [openService, setOpenService] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.cat-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    tl.fromTo('.cat-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4')
    tl.fromTo('.cat-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    tl.fromTo('.cat-hero-cta', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2')
  }, [])

  useGSAP(() => {
    document.querySelectorAll('.cat-reveal').forEach((el) => {
      gsap.fromTo(el, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef} style={{ backgroundColor: '#F5F3EF' }}>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-catering.jpg" alt="Villa catering" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(245,243,239,0.92) 0%, rgba(245,243,239,0.75) 40%, transparent 100%)' }} />
        </div>
        <div className="relative z-10 px-8 md:px-16 lg:px-20 py-24 max-w-[650px]">
          <p className="cat-hero-label font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4" style={{ opacity: 0 }}>Villa Catering</p>
          <h1 className="cat-hero-title font-playfair font-bold text-[#2C2419] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4" style={{ opacity: 0 }}>
            Your Private Chef,<br />Every Day
          </h1>
          <p className="cat-hero-sub font-inter text-[#6B5B4E] text-base mb-8 max-w-[480px]" style={{ opacity: 0 }}>
            Rent a professional chef for your Bali villa — by the day, week, month, or longer. 
            Breakfast, lunch, dinner. We shop, cook, serve, and clean. You just enjoy.
          </p>
          <div className="cat-hero-cta flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
            <a href="#book" className="bg-[#D4AF37] text-[#050505] font-inter font-semibold text-xs uppercase tracking-[2px] px-8 py-4 hover:bg-[#C99B2F] transition-all text-center">
              Book a Villa Chef
            </a>
            <a href="https://wa.me/6282237565997?text=Hi%20Daniel%2C%20we%27re%20staying%20at%20a%20villa%20and%20would%20love%20to%20explore%20private%20chef%20options." target="_blank" rel="noopener noreferrer" className="border border-[#2C2419]/20 text-[#2C2419] font-inter text-xs uppercase tracking-[2px] px-8 py-[14px] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-center flex items-center justify-center gap-2">
              <MessageCircle size={14} /> Chat with Daniel
            </a>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT PERSON STRIP ═══ */}
      <section className="bg-[#2C2419] py-6 px-8">
        <div className="max-w-container-lg mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <p className="font-inter text-[#F5F3EF]/60 text-sm">
            Your catering contact: <span className="text-[#D4AF37] font-medium">Daniel</span>
          </p>
          <span className="hidden sm:block w-[1px] h-4 bg-[#F5F3EF]/20" />
          <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="font-inter text-[#D4AF37] text-sm hover:underline">
            WhatsApp +62 822-3756-5997
          </a>
          <span className="hidden sm:block w-[1px] h-4 bg-[#F5F3EF]/20" />
          <p className="font-inter text-[#F5F3EF]/40 text-xs">Response within 2 hours</p>
        </div>
      </section>

      {/* ═══ 8 SERVICES — Expandable ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">What We Do</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl mb-4">Everything Your Villa Needs</h2>
            <p className="font-inter text-[#6B5B4E] text-sm max-w-[500px] mx-auto">Click on any service to learn more about how we can help.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <div key={s.title} className="bg-white border border-[#E5E0D8]">
                <button
                  onClick={() => setOpenService(openService === i ? null : i)}
                  className="w-full flex items-center gap-4 p-6 text-left group hover:bg-[#FDFBF7] transition-colors"
                >
                  <div className="text-[#D4AF37] flex-shrink-0">{s.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-playfair font-semibold text-[#2C2419] text-base">{s.title}</h4>
                    <p className="font-inter text-[#6B5B4E] text-sm mt-1">{s.short}</p>
                  </div>
                  <ChevronRight size={16} className={`text-[#9A8E84] flex-shrink-0 transition-transform duration-300 ${openService === i ? 'rotate-90' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openService === i ? 'max-h-[400px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 pl-16">
                    <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed">{s.full}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RENT A CHEF — Durations ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Rent a Chef</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl mb-4">Flexible for Every Timeline</h2>
            <p className="font-inter text-[#6B5B4E] text-sm max-w-[500px] mx-auto">Rent a professional chef by the day, week, month, or longer. We adapt to your schedule.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rentalOptions.map((r) => (
              <div key={r.title} className="border border-[#E5E0D8] p-8 hover:border-[#D4AF37]/30 transition-all">
                <h3 className="font-playfair font-semibold text-[#2C2419] text-xl mb-2">{r.title}</h3>
                <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed mb-5">{r.desc}</p>
                <p className="font-cormorant text-[#9A8E84] text-xs uppercase tracking-[2px] mb-3">What&apos;s Included</p>
                <ul className="space-y-2">
                  {r.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <Check size={14} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                      <span className="font-inter text-[#6B5B4E] text-sm">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 CHEF PROFILES ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Our Chefs</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl mb-4">Meet the Team</h2>
            <p className="font-inter text-[#6B5B4E] text-sm max-w-[500px] mx-auto">50+ professional chefs. Each one matched to your taste, your villa, and your family.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chefs.map((chef) => (
              <div key={chef.name} className="bg-white border border-[#E5E0D8] overflow-hidden group">
                <div className="overflow-hidden aspect-[3/4]">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="font-cormorant text-[#D4AF37] text-xs uppercase tracking-[2px] mb-1">{chef.specialty}</p>
                  <h4 className="font-playfair font-semibold text-[#2C2419] text-lg mb-3">{chef.name}</h4>
                  <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed mb-4">{chef.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {chef.tags.map((tag) => (
                      <span key={tag} className="font-inter text-[#9A8E84] text-xs bg-[#F5F3EF] px-3 py-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOOKING PROCESS ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">How It Works</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl mb-4">From First Call to First Meal</h2>
            <p className="font-inter text-[#6B5B4E] text-sm max-w-[500px] mx-auto">We have refined our process over 8 years and 500+ villa placements. Here is how it works.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookingSteps.map((step) => (
              <div key={step.title} className="flex gap-4">
                <span className="font-playfair text-[#D4AF37] text-2xl font-bold opacity-30 flex-shrink-0">{step.num}</span>
                <div>
                  <h4 className="font-playfair font-semibold text-[#2C2419] text-base mb-2">{step.title}</h4>
                  <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#2C2419', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Our Standards</p>
            <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl mb-4">Certified. Trained. Trusted.</h2>
            <p className="font-inter text-[#9A9590] text-sm max-w-[500px] mx-auto">Every chef on our platform meets rigorous standards for food safety, skill, and professionalism.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div key={c.name} className="flex gap-4 items-start p-5 border border-[#F5F3EF]/10">
                <Check size={18} className="text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-playfair font-semibold text-[#F5F3EF] text-sm mb-1">{c.name}</h4>
                  <p className="font-inter text-[#9A9590] text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNERSHIPS ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Partnerships</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl mb-4">Who We Work With</h2>
            <p className="font-inter text-[#6B5B4E] text-sm max-w-[500px] mx-auto">Bali&apos;s leading properties and hospitality companies trust myCHEF for their guest experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((p) => (
              <div key={p.name} className="bg-white p-6 border border-[#E5E0D8]">
                <h4 className="font-playfair font-semibold text-[#2C2419] text-base mb-2">{p.name}</h4>
                <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/partners" className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-[2px] text-[#2C2419] hover:text-[#D4AF37] transition-colors">
              <span>Learn About Our Partner Program</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ BLOG / ARTICLES ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-14">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">From the Kitchen</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl mb-4">Guides & Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <div key={a.title} className="group cursor-pointer">
                <div className="bg-[#F5F3EF] p-8 border border-[#E5E0D8] hover:border-[#D4AF37]/30 transition-all h-full">
                  <span className="font-cormorant text-[#D4AF37] text-xs uppercase tracking-[2px]">{a.tag}</span>
                  <h4 className="font-playfair font-semibold text-[#2C2419] text-lg mt-3 mb-3 group-hover:text-[#D4AF37] transition-colors">{a.title}</h4>
                  <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 font-inter text-xs uppercase tracking-[1px] text-[#9A8E84] group-hover:text-[#D4AF37] transition-colors">
                    <span>Read More</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#F5F3EF', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Guest Reviews</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl">What Families Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 md:p-8 border border-[#E5E0D8]">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="font-playfair italic text-[#2C2419] text-base leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-inter text-[#2C2419] text-sm font-medium">{t.name}</p>
                <p className="font-inter text-[#9A8E84] text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="cat-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#FFFFFF', opacity: 0 }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Questions</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl">Frequently Asked</h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#2C2419]/10">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                  <span className="font-inter text-[#2C2419] text-sm pr-4 group-hover:text-[#D4AF37] transition-colors">{faq.q}</span>
                  <ChevronRight size={16} className={`text-[#9A8E84] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${openFaq === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                  <p className="font-inter text-[#6B5B4E] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOOKING FORM ═══ */}
      <section id="book" className="cat-reveal py-20 md:py-28 px-8" style={{ backgroundColor: '#F5F3EF', opacity: 0 }}>
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Book Now</p>
            <h2 className="font-playfair font-bold text-[#2C2419] text-3xl md:text-4xl mb-4">Find Your Villa Chef</h2>
            <p className="font-inter text-[#6B5B4E] text-sm">Tell us about your stay and we will match you with the perfect chef.</p>
          </div>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name *" className="w-full bg-white border border-[#2C2419]/15 px-4 py-3 font-inter text-sm text-[#2C2419] placeholder:text-[#9A8E84] focus:border-[#D4AF37] focus:outline-none" />
              <input type="email" placeholder="Email *" className="w-full bg-white border border-[#2C2419]/15 px-4 py-3 font-inter text-sm text-[#2C2419] placeholder:text-[#9A8E84] focus:border-[#D4AF37] focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone / WhatsApp" className="w-full bg-white border border-[#2C2419]/15 px-4 py-3 font-inter text-sm text-[#2C2419] placeholder:text-[#9A8E84] focus:border-[#D4AF37] focus:outline-none" />
              <input type="text" placeholder="Villa Location *" className="w-full bg-white border border-[#2C2419]/15 px-4 py-3 font-inter text-sm text-[#2C2419] placeholder:text-[#9A8E84] focus:border-[#D4AF37] focus:outline-none" />
            </div>
            <select className="w-full bg-white border border-[#2C2419]/15 px-4 py-3 font-inter text-sm text-[#8A8785] focus:border-[#D4AF37] focus:outline-none">
              <option value="">How long do you need a chef?</option>
              <option>One day</option>
              <option>A few days</option>
              <option>One week</option>
              <option>2-4 weeks</option>
              <option>1-3 months</option>
              <option>Longer</option>
              <option>Not sure yet</option>
            </select>
            <textarea placeholder="Tell us about your stay, dietary requirements, food preferences, group size, or any questions..." rows={4} className="w-full bg-white border border-[#2C2419]/15 px-4 py-3 font-inter text-sm text-[#2C2419] placeholder:text-[#9A8E84] focus:border-[#D4AF37] focus:outline-none resize-none" />
            <button type="submit" className="w-full bg-[#D4AF37] text-[#050505] font-inter font-semibold text-xs uppercase tracking-[2px] py-4 hover:bg-[#C99B2F] transition-all flex items-center justify-center gap-2">
              <Send size={14} /> Send My Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
