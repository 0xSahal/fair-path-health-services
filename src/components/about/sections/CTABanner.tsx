'use client'

import Link from 'next/link'

import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

import { FadeInWhenVisible } from '../FadeInWhenVisible'

/** Soft botanical corners: warm, abstract curves (not logo reproduction). */
function CornerLeaves({ className, flipX }: { className?: string; flipX?: boolean }) {
  return (
    <svg
      className={cn('pointer-events-none text-[var(--fp-gold)]', flipX && 'scale-x-[-1]', className)}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        opacity="0.22"
        d="M8 104C32 88 38 52 24 28c12 8 28 10 44 4-8 18-8 40 4 58-20-4-42-2-64 14Z"
        fill="currentColor"
      />
      <path
        opacity="0.14"
        d="M0 120c18-34 52-48 84-42-10 14-16 32-14 52C48 118 22 122 0 120Z"
        fill="currentColor"
      />
      <path
        opacity="0.18"
        stroke="currentColor"
        strokeWidth="0.8"
        d="M12 96c22-18 34-44 28-72"
      />
    </svg>
  )
}

/**
 * Closing call-to-action: dark brown field, dual CTAs, subtle botanical corners.
 */
export function CTABanner() {
  const telHref = `tel:+1${SITE_CONFIG.phoneRaw}`

  return (
    <section
      aria-label="Get started with Fair Path"
      className="relative overflow-hidden bg-[var(--fp-brown-dark)] py-20 text-[var(--fp-cream)] md:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(176,125,74,0.16)_0%,transparent_68%)]"
        aria-hidden
      />
      <CornerLeaves className="absolute -left-2 -top-2 h-36 w-36 md:left-4 md:top-4 md:h-44 md:w-44" />
      <CornerLeaves
        className="absolute -bottom-2 -right-2 h-36 w-36 md:bottom-4 md:right-4 md:h-44 md:w-44"
        flipX
      />

      <div className="section-container relative z-10">
        <FadeInWhenVisible className="mx-auto max-w-[720px] text-center">
          <h2 className="font-accent text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-tight tracking-tight text-[var(--fp-cream)]">
            Ready to find the right care?
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-[var(--fp-cream)]/78">
            Tell us about your family. We will help you understand options, coverage, and next steps,
            with zero pressure and full transparency.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact/book-appointment"
              className="btn-primary w-full px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
              aria-label="Book a free consultation with Fair Path Health Services"
            >
              Book Free Consultation
            </Link>
            <Link
              href={telHref}
              className="btn-ghost-white w-full border-white px-6 py-3 text-sm normal-case tracking-normal sm:w-auto"
              aria-label={`Call Fair Path Health Services at ${SITE_CONFIG.phone}`}
            >
              Call {SITE_CONFIG.phone}
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
