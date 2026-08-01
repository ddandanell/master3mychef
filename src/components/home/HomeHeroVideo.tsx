import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight } from 'lucide-react'

const WA_HERO =
  'https://wa.me/6289674072020?text=Hi%2C%20I%27d%20like%20to%20book%20a%20private%20chef%20for%20my%20Bali%20villa.'

const POSTER = '/generated/mychef-home-hero-video-poster.webp'
const VIDEO_DESKTOP = '/videos/mychef-home-hero-desktop.mp4'
const VIDEO_MOBILE = '/videos/mychef-home-hero-mobile.mp4'

/** Timed hero copy synced to the ~20s loop (seconds). */
const PHASES = [
  {
    id: 'title',
    start: 0,
    end: 5.5,
    lines: ['Private Chef Bali'],
    size: 'hero' as const,
  },
  {
    id: 'dining',
    start: 5.5,
    end: 11,
    lines: ['Restaurant-level dining.', 'Cooked fresh in your villa.'],
    size: 'medium' as const,
  },
  {
    id: 'promise',
    start: 11,
    end: 16,
    lines: ['We shop. We cook. We serve. We clean.', 'You just enjoy.'],
    size: 'medium' as const,
  },
  {
    id: 'trust',
    start: 16,
    end: 20.5,
    lines: ['560+ villas · 12,000+ guests · Same-day confirmation'],
    size: 'trust' as const,
  },
] as const

function activePhase(t: number) {
  const time = ((t % 20) + 20) % 20
  return PHASES.find((p) => time >= p.start && time < p.end) ?? PHASES[0]
}

/**
 * Homepage full-bleed hero: autoplaying muted video + timed elegant copy.
 *
 * React historically drops the HTML `muted` attribute which blocks autoplay —
 * we force muted on the DOM node before every play() attempt.
 */
export default function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [phaseId, setPhaseId] = useState<string>(PHASES[0].id)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqMobile = window.matchMedia('(max-width: 768px)')
    const apply = () => {
      setReduceMotion(mqMotion.matches)
      setIsMobile(mqMobile.matches)
    }
    apply()
    mqMotion.addEventListener('change', apply)
    mqMobile.addEventListener('change', apply)
    return () => {
      mqMotion.removeEventListener('change', apply)
      mqMobile.removeEventListener('change', apply)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Critical for autoplay policies (Chrome/Safari/iOS)
    video.defaultMuted = true
    video.muted = true
    video.playsInline = true
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    if (reduceMotion) {
      video.pause()
      video.removeAttribute('autoplay')
      return
    }

    let raf = 0
    let cancelled = false

    const syncPhase = () => {
      if (cancelled || !video) return
      if (!video.paused && Number.isFinite(video.currentTime)) {
        const next = activePhase(video.currentTime).id
        setPhaseId((prev) => (prev === next ? prev : next))
      }
      raf = requestAnimationFrame(syncPhase)
    }

    const tryPlay = async () => {
      if (cancelled || !video) return
      video.defaultMuted = true
      video.muted = true
      try {
        await video.play()
      } catch {
        // Retry once after a short delay (iOS / slow network)
        window.setTimeout(() => {
          if (cancelled || !video) return
          video.muted = true
          void video.play().catch(() => {
            /* poster remains under the video */
          })
        }, 400)
      }
    }

    const onTimeUpdate = () => {
      if (!video.paused) {
        const next = activePhase(video.currentTime).id
        setPhaseId((prev) => (prev === next ? prev : next))
      }
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('loadeddata', tryPlay)
    video.addEventListener('canplay', tryPlay)

    // Kick load + play
    video.load()
    void tryPlay()
    raf = requestAnimationFrame(syncPhase)

    // Resume if tab becomes visible again
    const onVisibility = () => {
      if (document.visibilityState === 'visible' && video.paused && !reduceMotion) {
        void tryPlay()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('loadeddata', tryPlay)
      video.removeEventListener('canplay', tryPlay)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduceMotion, isMobile])

  const phase = PHASES.find((p) => p.id === phaseId) ?? PHASES[0]
  const videoSrc = isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP

  return (
    <div className="relative min-h-[100svh] min-h-screen overflow-hidden bg-black">
      {/* Poster under video for LCP + fallback while video buffers */}
      {/* Poster under video for LCP while the first frames buffer */}
      <img
        src={POSTER}
        alt="Private chef plating a luxury dinner at a Bali villa — myCHEF"
        width={1280}
        height={720}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {/* Always visible video layer (never opacity-0 — prerender froze that and hid motion) */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
        aria-hidden="true"
        disablePictureInPicture
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Readability overlays */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.68) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.50) 70%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      {/* Centered timed copy */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] min-h-screen max-w-[960px] flex-col items-center justify-center px-5 pb-28 pt-24 text-center sm:px-8">
        <h1 className="sr-only">Private Chef Bali — Your Villa. Our Kitchen.</h1>

        {reduceMotion ? (
          <div className="space-y-5 text-white">
            <p
              className="text-4xl font-normal leading-[1.08] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
            >
              Private Chef Bali
            </p>
            <p className="text-lg text-white/90 sm:text-xl" style={{ textShadow: '0 1px 16px rgba(0,0,0,0.4)' }}>
              Restaurant-level dining.
              <br />
              Cooked fresh in your villa.
            </p>
            <p className="text-base text-white/85 sm:text-lg">
              We shop. We cook. We serve. We clean.
              <br />
              You just enjoy.
            </p>
            <p
              className="text-sm tracking-[0.12em] text-white/70 uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              560+ villas · 12,000+ guests · Same-day confirmation
            </p>
          </div>
        ) : (
          <div className="relative flex min-h-[9.5rem] w-full items-center justify-center sm:min-h-[11rem] md:min-h-[12.5rem]">
            {PHASES.map((p) => {
              const active = p.id === phase.id
              const sizeClass =
                p.size === 'hero'
                  ? 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]'
                  : p.size === 'trust'
                    ? 'text-sm sm:text-base md:text-lg tracking-[0.08em] uppercase'
                    : 'text-xl sm:text-2xl md:text-3xl leading-snug'
              const font =
                p.size === 'trust'
                  ? { fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 as const }
                  : { fontFamily: "'Playfair Display', serif", fontWeight: 400 as const }

              return (
                <div
                  key={p.id}
                  aria-hidden={!active}
                  className={`absolute inset-x-0 px-2 transition-all duration-[1100ms] ease-out ${
                    active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
                  }`}
                >
                  <p
                    className={`text-white ${sizeClass}`}
                    style={{
                      ...font,
                      textShadow: '0 2px 28px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.4)',
                    }}
                  >
                    {p.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-10 flex w-full max-w-md flex-col items-center gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            data-source="homepage-hero-video"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white sm:w-auto"
            style={{ background: '#C5A028', color: '#111' }}
          >
            <MessageCircle className="h-4 w-4" />
            Get a free quote in 2 hours
          </a>
          <Link
            to="/pricing"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C5A028] sm:w-auto"
          >
            Transparent pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/65">Message us with your date &amp; villa</p>
      </div>
    </div>
  )
}
