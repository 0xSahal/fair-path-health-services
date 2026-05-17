import type { Metadata } from 'next'
import { ClipboardCheck, HeartHandshake, Phone } from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import BookAppointmentForm from '@/components/contact/BookAppointmentForm'
import { SectionTag } from '@/components/ui/SectionTag'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Schedule Your Free In-Home Assessment | Fair Path Health Services',
  description:
    'Request a no-obligation free in-home assessment. A care coordinator visits your home, assesses needs, and creates a customized care plan.',
  keywords: ['free in-home assessment', 'home care consultation', 'book appointment'],
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function BookAppointmentPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book Appointment', href: '/contact/book-appointment' },
  ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Schedule Your Free In-Home Assessment"
          breadcrumb={breadcrumb}
          imageSrc="/images/contact.webp"
          imageAlt="Caregiver and family connecting for compassionate in-home care support"
          titleAccent="service"
          serviceBanner
        />

        <section className="bg-fp-cream fp-section-padding">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">No obligation</SectionTag>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                This is a no-obligation, free consultation where our care coordinator visits your
                home, assesses your loved one&apos;s needs, and creates a customized care plan.
              </p>
            </Reveal>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  icon: Phone,
                  title: 'Confirm by phone',
                  body: "We'll call to confirm your request and answer questions.",
                },
                {
                  icon: ClipboardCheck,
                  title: 'Free assessment',
                  body: 'A coordinator evaluates needs, safety, and schedule preferences.',
                },
                {
                  icon: HeartHandshake,
                  title: 'Care plan',
                  body: 'We recommend the right service mix and next steps.',
                },
              ].map((s, i) => {
                const Icon = s.icon
                return (
                  <Reveal
                    key={s.title}
                    delay={i * 0.05}
                    className="rounded-2xl border border-fp-border bg-fp-white p-7 text-center shadow-card"
                  >
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <p className="font-display text-xl font-semibold text-fp-text-primary">{s.title}</p>
                    <p className="mt-2 font-body text-sm text-fp-text-muted">{s.body}</p>
                  </Reveal>
                )
              })}
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card md:p-10">
                <h2 className="font-display text-2xl font-semibold text-fp-text-primary">
                  Booking request
                </h2>
                <p className="mt-2 font-body text-sm text-fp-text-muted">
                  We&apos;ll call to confirm your appointment within 4 business hours.
                </p>
                <div className="mt-8">
                  <BookAppointmentForm />
                </div>
              </Reveal>

              <Reveal delay={0.06} className="space-y-6">
                <div className="rounded-2xl border border-fp-border bg-fp-cream p-7 shadow-card">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
                    Prefer to call?
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="mt-3 inline-flex font-display text-3xl font-semibold text-fp-copper hover:text-fp-copper-dark"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="mt-2 font-body text-sm text-fp-text-muted">{SITE_CONFIG.hours}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

