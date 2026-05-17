'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

import { cn } from '@/lib/utils'

const heroEase = [0.22, 1, 0.36, 1] as const

/**
 * Full-bleed imagery: background under copy below lg; split layout on large screens.
 * Cormorant headline with gold rule, staggered entrance, primary CTA (matches home hero).
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: heroEase },
        }

  return (
    <section
      id="hero"
      aria-label="About hero"
      className="relative overflow-hidden bg-[var(--fp-brown-dark)] text-[var(--fp-cream)]"
    >
      <div className="relative flex min-h-[min(72vh,580px)] flex-col overflow-hidden lg:min-h-[640px] lg:flex-row">
        {/* Background image: full-bleed under copy below lg; right column on lg+ */}
        <div
          className="absolute inset-0 z-0 min-h-[min(45vh,320px)] lg:inset-y-0 lg:left-[min(48%,520px)] lg:right-0 lg:min-h-0"
          aria-hidden
        >
          <Image
            src="/images/about/caretaker.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fp-brown-dark via-fp-brown-dark/45 to-transparent sm:via-fp-brown-dark/30 lg:via-fp-brown-dark/20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fp-black/35 via-transparent to-fp-copper/15"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-fp-copper-dark/20 to-transparent"
            aria-hidden
          />
        </div>

        {/* Copy + grain — horizontal inset matches `.section-container` (navbar logo / Our Story) */}
        <div
          className={cn(
            'fp-page-hero-inset relative z-20 flex w-full flex-col justify-center pb-12 sm:pb-14 lg:w-[min(52%,640px)] lg:flex-none lg:pb-20 lg:pt-10 xl:pt-12',
            'pl-4 pr-4 sm:pl-6 sm:pr-6',
            // lg+: same left edge as `.section-container` (navbar logo / Our Story)
            'lg:pl-[max(2rem,calc((100vw-min(100vw,80rem))/2+2rem))] lg:pr-10',
          )}
        >
          <div className="about-hero-grain" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fp-brown-dark via-fp-brown-dark/90 to-fp-black/30"
            aria-hidden
          />

          <div className="relative">
            <motion.nav aria-label="Breadcrumb" {...fadeUp(0.02)} className="text-[var(--fp-cream)]/70">
              <ol className="flex flex-wrap items-center gap-2 font-body text-[12px]">
                <li>
                  <Link href="/" className="transition-colors hover:text-[var(--fp-gold-light)]">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-[var(--fp-cream)]/45">
                  &gt;
                </li>
                <li className="text-[var(--fp-cream)]/85">About Us</li>
              </ol>
            </motion.nav>

            <motion.div {...fadeUp(0.12)} className="mt-6">
              <h1 className="font-accent text-[clamp(2.15rem,4.6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--fp-cream)]">
                Rooted in Georgia.
                <span className="block">Built on Compassion.</span>
              </h1>
              <div
                className="mt-5 h-px w-[min(11rem,52vw)] origin-left bg-[var(--fp-gold)] shadow-[0_0_24px_rgba(176,125,74,0.45)] animate-about-hero-line"
                aria-hidden
              />
            </motion.div>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-6 max-w-xl font-body text-[16px] leading-relaxed text-[var(--fp-cream)]/82 md:text-lg"
            >
              Fair Path Health Services was founded by people who understand firsthand what families go
              through when a loved one needs care at home. We built this agency to be different: warm,
              rigorous, and unmistakably human.
            </motion.p>

            <motion.div {...fadeUp(0.36)} className="mt-10">
              <Link
                href="/services"
                className="btn-primary inline-flex w-full px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
                aria-label="Explore Fair Path home care services"
              >
                Meet Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
