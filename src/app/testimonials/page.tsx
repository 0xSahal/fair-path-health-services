import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { Button } from '@/components/ui/Button'
import { SectionTag } from '@/components/ui/SectionTag'
import { TESTIMONIALS_PAGE } from '@/lib/testimonials-data'
import { SERVICES } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Testimonials | Fair Path Health Services',
  description:
    'Read real stories from families served by Fair Path Health Services. Filter testimonials by service type and explore what makes our care different.',
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function TestimonialsPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Testimonials', href: '/testimonials' },
  ]

  const serviceOptions = SERVICES.map((s) => ({
    slug: s.slug,
    label: s.title,
  }))

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Testimonials"
          breadcrumb={breadcrumb}
          imageSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Families and caregivers sharing trust and comfort"
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Testimonials directory">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">What families say</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Real Stories from Real Families
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Browse testimonials and filter by service type.
              </p>
            </Reveal>

            {/* Lightweight client-side filtering (no extra client component): use hash param is overkill; keep simple list + “by service” nav */}
            <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
              <Link
                href="#all"
                className="rounded-pill border border-fp-border bg-fp-white px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-fp-text-body hover:border-fp-copper/45 hover:bg-fp-cream-dark"
              >
                All
              </Link>
              {serviceOptions.slice(0, 10).map((s) => (
                <Link
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="rounded-pill border border-fp-border bg-fp-white px-4 py-2 font-body text-xs font-semibold uppercase tracking-wide text-fp-text-body hover:border-fp-copper/45 hover:bg-fp-cream-dark"
                >
                  {s.label}
                </Link>
              ))}
            </Reveal>

            <div id="all" className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
              {TESTIMONIALS_PAGE.map((t, i) => (
                <Reveal
                  key={t.id}
                  delay={i * 0.02}
                  className="mb-6 break-inside-avoid rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card"
                >
                  <div className="flex items-center gap-1 text-fp-copper">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <span key={s} aria-hidden>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 font-body text-[15px] leading-relaxed text-fp-text-body">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-fp-copper/30 bg-fp-cream-dark font-display text-lg font-semibold text-fp-brown-dark">
                      {t.name.slice(0, 1)}
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-fp-text-primary">
                        {t.name} — {t.city}
                      </p>
                      <p className="font-body text-sm text-fp-text-muted">{t.role}</p>
                      <Link
                        id={t.serviceSlug}
                        href={`/services/${t.serviceSlug}`}
                        className="mt-1 inline-flex font-body text-xs font-semibold text-fp-copper hover:text-fp-copper-dark"
                      >
                        Related service →
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Google reviews + video placeholder */}
            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Reveal className="rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card">
                <SectionTag>Google Reviews</SectionTag>
                <p className="mt-3 font-display text-2xl font-semibold text-fp-text-primary">
                  Widget placeholder
                </p>
                <p className="mt-2 font-body text-sm text-fp-text-muted">
                  Add your Google Reviews embed here when ready.
                </p>
              </Reveal>

              <Reveal delay={0.06} className="relative overflow-hidden rounded-2xl border border-fp-border bg-fp-white shadow-card">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=85&auto=format&fit=crop"
                    alt="Video testimonial placeholder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--fp-overlay)]" aria-hidden />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white">
                      <Play className="h-7 w-7" aria-hidden />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-display text-xl font-semibold text-fp-text-primary">
                    Video testimonial placeholder
                  </p>
                  <p className="mt-2 font-body text-sm text-fp-text-muted">
                    Add a real video when available.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-14 flex justify-center">
              <Button href="/contact/book-appointment" variant="primary" size="lg">
                Join Our Happy Families → Book Appointment
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

