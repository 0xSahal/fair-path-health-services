import Link from 'next/link'
import Image from 'next/image'

import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import Reveal from '@/components/shared/Reveal'
import { BRAND_LOGO } from '@/lib/constants'

export default function NotFound() {
  return (
    <>
      <main id="main-content" className="bg-fp-cream fp-section-padding">
        <div className="section-container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="font-display text-7xl font-semibold text-fp-copper md:text-8xl">
                404
              </p>
              <h1 className="mt-4 font-display text-h1 font-semibold text-fp-text-primary">
                This page seems to have wandered off.
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Let&apos;s get you back on the right path.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/" variant="primary" size="lg">
                  Back to Home
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="relative">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-fp-border bg-fp-white shadow-card">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'radial-gradient(600px circle at 30% 20%, rgba(var(--fp-copper-rgb) / 0.18), transparent 55%), radial-gradient(600px circle at 70% 80%, rgba(var(--fp-green-rgb) / 0.14), transparent 55%)',
                  }}
                  aria-hidden
                />
                <div className="relative flex h-full w-full flex-col items-center justify-center p-10 text-center">
                  <Image
                    src={BRAND_LOGO.src}
                    alt={BRAND_LOGO.alt}
                    width={220}
                    height={220}
                    className="h-auto w-[180px] object-contain md:w-[220px]"
                    priority
                  />
                  <p className="mt-6 font-body text-sm text-fp-text-muted">
                    Need help right now? Call{' '}
                    <a
                      href="tel:4045438730"
                      className="font-semibold text-fp-copper hover:text-fp-copper-dark"
                    >
                      (404) 543-8730
                    </a>
                    .
                  </p>
                  <Link
                    href="/sitemap"
                    className="mt-4 inline-flex font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                  >
                    Browse the sitemap →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

