import { ShieldCheck, RefreshCw, Home, Users, Star, MapPin, MessageCircle, ArrowRight, ChefHat } from 'lucide-react'

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background with decorations */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/generated/trust-section-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 text-center">
        {/* Top label */}
        <p
          className="text-sm md:text-base tracking-[0.55em] uppercase"
          style={{
            color: '#C5A028',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            letterSpacing: '0.1em',
          }}
        >
          Experience You Can Trust
        </p>

        {/* Divider */}
        <div className="mx-auto mt-4 h-px w-12 md:w-14 bg-[#C5A028]" />

        {/* Headline */}
        <h2
          className="mt-6 md:mt-8 text-5xl md:text-6xl lg:text-7xl leading-tight mx-auto"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            color: '#161616',
            lineHeight: 1.02,
            maxWidth: '900px',
          }}
        >
          Crafted by Experience.
          <br />
          Served with Care.
        </h2>

        {/* Intro paragraph */}
        <p
          className="mx-auto mt-7 md:mt-8 max-w-3xl text-lg md:text-xl leading-relaxed mb-12 md:mb-16"
          style={{
            color: '#6D5F55',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            lineHeight: 1.65,
          }}
        >
          Founded by Adriano, trained under a Michelin-starred chef in Milan, myCHEF.id delivers restaurant-level
          private dining to Bali's finest villas with a 50+ person hospitality team.
        </p>

        {/* Trust Guarantee Card */}
        <TrustGuaranteeCard />

        {/* Stats Grid */}
        <StatsGrid />

        {/* CTA Line */}
        <CtaLine />
      </div>
    </section>
  )
}

function TrustGuaranteeCard() {
  return (
    <div
      className="mx-auto max-w-5xl rounded-2xl border mb-10 md:mb-14 overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.82)',
        border: '1px solid rgba(201, 162, 39, 0.14)',
        boxShadow: '0 18px 55px rgba(40, 30, 20, 0.055)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 p-6 md:p-8 lg:p-10">
        {/* Left: Same-day confirmation */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6 md:pr-6 md:border-r md:border-[rgba(201,162,39,0.16)]">
          <div
            className="flex-shrink-0 rounded-full flex items-center justify-center"
            style={{
              width: '70px',
              height: '70px',
              background: '#F4F1EA',
            }}
          >
            <ShieldCheck size={30} color="#C5A028" strokeWidth={1.8} />
          </div>
          <div className="text-center md:text-left">
            <h3
              className="text-xl md:text-2xl mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                color: '#1E1E1E',
                lineHeight: 1.2,
              }}
            >
              Same-day confirmation
              <br />
              or your money back
            </h3>
            <p
              className="text-sm md:text-base"
              style={{
                color: '#6D5F55',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                lineHeight: 1.55,
              }}
            >
              If your chef cannot make it, we send a replacement within 2 hours or refund 100%.
            </p>
          </div>
        </div>

        {/* Center: myCHEF Logo */}
        <div className="flex items-center justify-center md:px-4 border-t md:border-t-0 md:border-x md:border-[rgba(201,162,39,0.16)] pt-6 md:pt-0">
          <div className="flex flex-col items-center gap-1">
            <ChefHat size={40} color="#C5A028" strokeWidth={1.6} />
            <p
              className="text-sm tracking-widest mt-2"
              style={{
                color: '#C5A028',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                letterSpacing: '0.1em',
              }}
            >
              myCHEF
            </p>
            <p
              className="text-xs tracking-widest"
              style={{
                color: '#C5A028',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                letterSpacing: '0.08em',
              }}
            >
              FINE DINING
            </p>
          </div>
        </div>

        {/* Right: Chef replacement guarantee */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6 md:pl-6 border-t md:border-t-0 pt-6 md:pt-0">
          <div
            className="flex-shrink-0 rounded-full flex items-center justify-center"
            style={{
              width: '70px',
              height: '70px',
              background: '#F4F1EA',
            }}
          >
            <RefreshCw size={30} color="#C5A028" strokeWidth={1.8} />
          </div>
          <div className="text-center md:text-left">
            <h3
              className="text-xl md:text-2xl mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                color: '#1E1E1E',
                lineHeight: 1.2,
              }}
            >
              Chef replacement
              <br />
              guarantee
            </h3>
            <p
              className="text-sm md:text-base"
              style={{
                color: '#6D5F55',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                lineHeight: 1.55,
              }}
            >
              Same-day replacement or full refund. Your evening is protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsGrid() {
  const stats = [
    {
      icon: Home,
      number: '560+',
      label: 'Villas Served',
    },
    {
      icon: Users,
      number: '12,000+',
      label: 'Happy Guests',
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Google Rating',
    },
    {
      icon: MapPin,
      number: '8+',
      label: 'Years in Bali',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-14">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="rounded-lg md:rounded-xl p-5 md:p-6 text-center border"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(201, 162, 39, 0.12)',
            boxShadow: '0 12px 35px rgba(40, 30, 20, 0.04)',
          }}
        >
          <stat.icon size={48} color="#C5A028" strokeWidth={1.6} className="mx-auto mb-3 md:mb-4" />
          <p
            className="text-3xl md:text-4xl mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              color: '#161616',
              lineHeight: 1,
            }}
          >
            {stat.number}
          </p>
          <p
            className="text-xs md:text-sm tracking-widest uppercase"
            style={{
              color: '#B88A10',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

function CtaLine() {
  return (
    <div
      className="flex items-center justify-center gap-4 md:gap-6 mt-10 md:mt-14 flex-wrap"
      style={{ marginTop: '40px' }}
    >
      <div
        className="rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          width: '50px',
          height: '50px',
          background: '#F4F1EA',
        }}
      >
        <MessageCircle size={22} color="#C5A028" strokeWidth={1.6} />
      </div>
      <p
        className="text-lg md:text-xl"
        style={{
          color: '#1E1E1E',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
        }}
      >
        Message us with date, guest count, and villa area
      </p>
      <ArrowRight size={24} color="#C5A028" strokeWidth={1.6} className="flex-shrink-0" />
    </div>
  )
}
