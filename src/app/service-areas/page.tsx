import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { Button } from '@/components/ui/Button'
import { SERVICE_AREAS } from '@/lib/service-areas-data'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Service Areas: 10 Georgia Counties | Fair Path Health Services',
  description:
    'Fair Path Health Services proudly serves 10 Georgia counties. View key cities by county and request a free assessment.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title="Service Areas"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Service Areas', href: '/service-areas' },
          ]}
          imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Georgia service area coverage for home care"
        />

        <section className="relative overflow-hidden bg-fp-cream fp-section-padding" aria-label="Counties served">
          <svg
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            viewBox="0 0 800 800"
            aria-hidden
          >
            <path
              fill="currentColor"
              className="text-fp-brown-dark"
              d="M420 120c80 20 140 90 150 170 10 90-30 170-100 220 40 30 70 70 90 120-60-10-120 0-170 30-50-40-110-60-170-50-90 10-160-50-180-130-20-80 20-160 100-200-10-50-10-100 10-150 50-30 110-40 170-10z"
            />
          </svg>

          <div className="section-container relative">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Where We Serve</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Service Areas: 10 Georgia Counties
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Availability varies by schedule and care level. Request a free assessment to confirm the best coverage for your home.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICE_AREAS.map((c, i) => (
                <Reveal
                  key={c.county}
                  delay={i * 0.04}
                  className="rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card"
                >
                  <div className="mb-4 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
                    <MapPin className="h-4 w-4 text-fp-copper" aria-hidden />
                    {c.county} County
                  </div>
                  <p className="font-display text-xl font-semibold text-fp-text-primary">
                    Key cities served
                  </p>
                  <p className="mt-3 font-body text-[15px] text-fp-text-body">
                    {c.cities.join(', ')}
                  </p>
                  <p className="mt-4 font-body text-sm text-fp-text-muted">{c.note}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 rounded-2xl border border-fp-border bg-fp-brown-dark p-10 text-center text-fp-cream shadow-card-hover">
              <h2 className="font-display text-2xl font-semibold text-fp-cream">
                Don&apos;t see your area?
              </h2>
              <p className="mt-3 font-body text-lg text-fp-cream/75">
                Call us and we’ll confirm coverage and recommend the best next step for your family.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact/book-appointment" variant="primary" size="lg">
                  Book Free Consultation
                </Button>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/70 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  Call {SITE_CONFIG.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

