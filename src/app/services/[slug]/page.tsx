import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  BadgeCheck,
  Check,
  HeartHandshake,
  PhoneCall,
} from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import RelatedServicesStrip from '@/components/services/RelatedServicesStrip'
import { Button } from '@/components/ui/Button'
import { SectionTag } from '@/components/ui/SectionTag'
import { getServiceBySlug, SERVICES } from '@/lib/services-data'
import { SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'

/** Minimum vertical padding per major section (80px). */
const SERVICE_DETAIL_SECTION_PAD = 'py-[80px]'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [
        {
          url: service.heroImage.src,
          width: 1200,
          height: 630,
          alt: service.heroImage.alt,
        },
      ],
    },
  }
}

function Step({
  stepNumber,
  title,
  body,
}: {
  stepNumber: 1 | 2 | 3
  title: string
  body: string
}) {
  return (
    <div className="text-center">
      <p className="mb-3 font-body text-[11px] font-bold uppercase tracking-[0.14em] text-fp-copper-light">
        Step {stepNumber}
      </p>
      <div className="mx-auto mb-5 flex size-[56px] shrink-0 items-center justify-center rounded-full border-2 border-fp-copper bg-fp-cream font-display text-lg font-semibold text-fp-brown-dark">
        {stepNumber}
      </div>
      <h3 className="font-display text-xl font-semibold text-fp-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-xs font-body text-[14px] leading-relaxed text-fp-text-muted">
        {body}
      </p>
    </div>
  )
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return <ServiceDetailPageInner params={params} />
}

async function ServiceDetailPageInner({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return notFound()

  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title={service.title}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title, href: `/services/${service.slug}` },
          ]}
          imageSrc={service.heroImage.src}
          imageAlt={service.heroImage.alt}
          titleAccent="service"
          serviceBanner
          servicePagesHero
        />

        {/* 2) Overview */}
        <section
          className={cn('bg-fp-cream', SERVICE_DETAIL_SECTION_PAD)}
          aria-label="Service overview"
        >
          <div className="section-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <SectionTag>Overview</SectionTag>
                <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                  Care Designed for Safety, Comfort, and Peace of Mind
                </h2>
                <p className="mt-6 font-body text-lg leading-relaxed text-fp-text-body">
                  {service.description}
                </p>

                {service.badges?.length ? (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {service.badges.map((b) => (
                      <span
                        key={b.label}
                        className="inline-flex items-center gap-2 rounded-pill border border-fp-border bg-fp-white px-4 py-2 font-body text-xs font-semibold text-fp-brown-dark"
                      >
                        <BadgeCheck className="h-4 w-4 text-fp-copper" aria-hidden />
                        <span>{b.label}</span>
                        {b.detail ? (
                          <span className="text-fp-text-muted">• {b.detail}</span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
                    Key Benefits
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.keyBenefits.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fp-copper/15 text-fp-copper">
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="font-body text-[15px] leading-relaxed text-fp-text-body">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3) What's Included */}
        <section
          className={cn('bg-fp-white', SERVICE_DETAIL_SECTION_PAD)}
          aria-label="What's included"
        >
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">What&apos;s Included</SectionTag>
              <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                Practical Support, Delivered with Respect
              </h2>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                A clear view of tasks and activities commonly included in this service.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 md:[grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
              {service.whatsIncluded.map((item, i) => (
                <Reveal
                  key={item}
                  delay={i * 0.03}
                  className={cn(
                    'rounded-2xl border border-[#E8DDD0] border-l-[3px] border-l-[#FAF6F1] bg-[#FAF6F1] p-7 shadow-[0_2px_12px_rgba(44,26,14,0.04)] transition-[border-left-color,box-shadow] duration-200',
                    'hover:border-l-[#C9A96E] hover:shadow-[0_4px_16px_rgba(44,26,14,0.07)]',
                  )}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                    <HeartHandshake className="h-7 w-7 shrink-0" aria-hidden />
                  </div>
                  <p className="font-body text-[15px] font-semibold text-fp-text-primary">
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4) Who Benefits */}
        <section
          className={cn('bg-fp-cream', SERVICE_DETAIL_SECTION_PAD)}
          aria-label="Who benefits"
        >
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Who It Helps</SectionTag>
              <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                Who Benefits From This Service
              </h2>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Common scenarios where this service brings the greatest relief and stability.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
              {service.whoBenefits.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 0.05}
                  className="flex h-full flex-col rounded-2xl border border-[#E8DDD0] bg-[#FAF6F1] p-8 shadow-[0_2px_12px_rgba(44,26,14,0.04)]"
                >
                  <h3 className="font-display text-xl font-bold text-fp-text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-fp-text-muted">
                    {p.description}
                  </p>
                </Reveal>
              ))}
            </div>

            {service.eligibilityChecklist?.length ? (
              <Reveal className="mt-10 rounded-2xl border border-fp-copper/35 bg-fp-white p-8 shadow-card">
                <SectionTag>Do I Qualify?</SectionTag>
                <h3 className="mt-3 font-display text-2xl font-semibold text-fp-text-primary">
                  Eligibility Checklist
                </h3>
                <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {service.eligibilityChecklist.map((c) => (
                    <li key={c} className="flex gap-3 rounded-xl bg-fp-cream p-4">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fp-copper/15 text-fp-copper">
                        <Check className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="font-body text-[14px] leading-relaxed text-fp-text-body">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </section>

        {/* 5) How to Get Started */}
        <section
          className={cn('bg-fp-brown-dark text-fp-cream', SERVICE_DETAIL_SECTION_PAD)}
          aria-label="How to get started"
        >
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center text-fp-copper">How to Get Started</SectionTag>
              <h2 className="mt-3 font-display text-h2 font-semibold text-fp-cream">
                Getting Started is Easy
              </h2>
            </Reveal>

            <div className="relative mx-auto mt-10 max-w-5xl">
              <div
                aria-hidden
                className="absolute left-[14%] right-[14%] top-[54px] hidden h-[2px] md:block"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, rgba(201,154,107,0.9) 0px, rgba(201,154,107,0.9) 10px, transparent 10px, transparent 22px)',
                }}
              />

              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                <Reveal delay={0.02}>
                  <Step
                    stepNumber={1}
                    title="Reach Out"
                    body="Call us or submit a request. We’ll answer questions and guide your next step."
                  />
                </Reveal>
                <Reveal delay={0.06}>
                  <Step
                    stepNumber={2}
                    title="Free Assessment"
                    body="We learn your loved one’s needs and build a personalized care plan."
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <Step
                    stepNumber={3}
                    title="Care Begins"
                    body="Your matched caregiver arrives, and your family gets the peace of mind it deserves."
                  />
                </Reveal>
              </div>

              <Reveal className="mt-10 flex justify-center">
                <Button href="/contact/book-appointment" variant="primary" size="lg">
                  Schedule a Free Assessment
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6) Related services strip */}
        <RelatedServicesStrip
          relatedSlugs={service.relatedSlugs}
          sectionClassName={SERVICE_DETAIL_SECTION_PAD}
        />

        {/* 7) CTA */}
        <section
          className={cn('border-y border-[#E8DDD0] bg-[#FAF6F1]', SERVICE_DETAIL_SECTION_PAD)}
          aria-label="Schedule assessment"
        >
          <div className="section-container">
            <Reveal className="rounded-2xl border border-[#E8DDD0] bg-fp-white p-10 shadow-[0_4px_24px_rgba(44,26,14,0.06)]">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-fp-text-primary">
                    Schedule a Free Assessment for {service.title}
                  </h2>
                  <p className="mt-2 font-body text-sm text-fp-text-muted">
                    Get clear answers, a recommended care path, and a plan your family can trust.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/contact/book-appointment" variant="primary" size="lg">
                    Book Free Consultation
                  </Button>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-md border-2 border-fp-brown-dark/20 bg-fp-cream px-7 py-3.5 font-body text-sm font-semibold text-fp-brown-dark transition-colors',
                      'hover:border-fp-copper hover:bg-fp-cream-dark',
                    )}
                  >
                    <PhoneCall className="h-5 w-5 text-fp-copper" aria-hidden />
                    Call {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

