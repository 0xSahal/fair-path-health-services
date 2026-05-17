'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

const SLIDE_COUNT = 3

const slides = [
  {
    id: 0,
    src: '/hero-slider/img-1.webp',
    alt: 'Compassionate caregiver attending to a smiling elderly woman in her living room at home',
    heading: (
      <>
        Caring for Your Loved Ones,
        <br />
        Right at Home
      </>
    ),
    sub:
      'Compassionate, professional in-home care tailored to every individual, so your family can live with dignity, comfort, and peace of mind.',
    ctas: (
      <>
        <Link
          href="/contact/book-appointment"
          className="btn-primary w-full px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
        >
          Book Free Consultation
        </Link>
        <Link
          href="/services"
          className="btn-ghost-white w-full border-white px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
        >
          Explore Our Services
        </Link>
      </>
    ),
  },
  {
    id: 1,
    src: '/hero-slider/img-2.webp',
    alt: 'Fair Path care coordinator reviewing a care plan with a senior couple at their kitchen table',
    heading: (
      <>
        Experienced Care You
        <br />
        Can Trust
      </>
    ),
    sub:
      'Background-checked, certified caregivers serving 10 Georgia counties with genuine compassion.',
    ctas: (
      <>
        <Link
          href="/contact/book-appointment"
          className="btn-primary w-full px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
        >
          Schedule Free Assessment
        </Link>
        <Link
          href="/services"
          className="btn-ghost-white w-full border-white px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
        >
          View All Services
        </Link>
      </>
    ),
  },
  {
    id: 2,
    src: '/hero-slider/img-3.webp',
    alt: 'Caregiver walking arm-in-arm with a smiling senior gentleman through a tree-lined neighborhood',
    heading: (
      <>
        Serving Georgia Families
        <br />
        With Heart
      </>
    ),
    sub:
      'Accepting Medicaid CCSP/SOURCE, Aid & Attendance, and Private Pay, making quality care accessible to every family.',
    ctas: (
      <>
        <Link
          href="/payment"
          className="btn-primary w-full px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
        >
          Check Your Coverage
        </Link>
        <Link
          href="/contact/book-appointment"
          className="btn-ghost-white w-full border-white px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
        >
          Contact Us Today
        </Link>
      </>
    ),
  },
] as const

/* ── Mobile hero (< md / <768px) ─────────────────────────────────────
   Full-height block below the site navbar (document flow, not overlay). */
function MobileVideoHero() {
  return (
    <div
      aria-label="Fair Path Health Services — caring for your loved ones at home"
      className="relative min-h-[calc(100svh-var(--fp-nav-height))] w-full overflow-hidden md:hidden"
    >
      {/* Background video. Animated GIF is layered behind as a graceful
          placeholder until /videos/caretaker.mp4|webm is provided; once
          those files exist the <video> element will play on top. */}
      <div className="absolute inset-0">
        <Image
          src="/videos/caretaker.gif"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <video
          className="absolute inset-0 h-full w-full bg-transparent object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/caretaker.gif"
          aria-hidden
        >
          <source src="/videos/caretaker.mp4" type="video/mp4" />
          <source src="/videos/caretaker.webm" type="video/webm" />
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[inherit] flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md text-center"
          >
            <h1 className="font-display text-[30px] font-semibold leading-[1.15] tracking-tight text-white">
              Caring for Your Loved Ones, Right at Home
            </h1>
            <p className="mt-4 font-body text-[15px] leading-relaxed text-white/85">
              Professional in-home care tailored to your family&apos;s needs.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Link
                href="/contact/book-appointment"
                className="btn-primary w-full px-6 py-3.5 text-sm normal-case tracking-normal"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="btn-ghost-white w-full px-6 py-3.5 text-sm normal-case tracking-normal"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ── Desktop hero (>= md / ≥768px) ───────────────────────────────────
   Existing 3-slide image slider with crossfade, dots, arrows. */
function DesktopSliderHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((idx: number) => {
    setActive(((idx % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setActive((s) => (s + 1) % SLIDE_COUNT)
    }, 5000)
    return () => window.clearInterval(id)
  }, [paused])

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Fair Path Health Services highlights"
      className="relative hidden min-h-[calc(100svh-var(--fp-nav-height))] w-full overflow-hidden md:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 20%, rgba(0,0,0,0.0) 45%)',
        }}
        animate={{ opacity: active === 1 ? 0.85 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 60%)',
        }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.37) 0%, rgba(0,0,0,0) 60%)',
        }}
        animate={{ opacity: active === 1 ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />

      <div className="section-container relative z-20 flex min-h-[inherit] flex-col justify-center px-4 pb-24 pt-12 sm:pb-28 sm:pt-14 lg:pb-32 lg:pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pl-12 md:pl-14"
          >
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="font-display font-semibold tracking-tight text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]"
            >
              {slides[active].heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="mt-6 max-w-xl font-body text-[20px] leading-relaxed text-white/85 md:text-[22px]"
            >
              {slides[active].sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
              className="mt-10 flex flex-row flex-wrap items-center gap-3"
            >
              {slides[active].ctas}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(active - 1)}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(active + 1)}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-white/15 px-4 py-2 ring-1 ring-white/25 backdrop-blur-md">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              onClick={() => go(i)}
              className="group h-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <span
                className={cn(
                  'block h-3 rounded-full transition-all duration-300',
                  active === i ? 'w-8 bg-fp-copper' : 'w-3 bg-white/45 group-hover:bg-white/70',
                )}
              />
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/15">
          <div
            key={active}
            className={cn(
              'h-full rounded-none bg-fp-copper',
              'animate-fp-hero-progress',
            )}
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          />
        </div>
      </div>
    </div>
  )
}

export default function HomeHero() {
  return (
    <section id="hero" className="relative">
      <MobileVideoHero />
      <DesktopSliderHero />
    </section>
  )
}
