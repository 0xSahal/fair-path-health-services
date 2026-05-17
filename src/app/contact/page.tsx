import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ContactPageForm from '@/components/contact/ContactPageForm'
import { Button } from '@/components/ui/Button'
import { SectionTag } from '@/components/ui/SectionTag'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | Fair Path Health Services',
  description:
    'Contact Fair Path Health Services to schedule a free in-home assessment, ask questions, or request care support across Georgia.',
  keywords: [
    'contact home care Georgia',
    'home care consultation',
    'Douglasville home care',
    'Fair Path Health Services phone',
  ],
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function ContactPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Contact"
          breadcrumb={breadcrumb}
          imageSrc="/images/contact.webp"
          imageAlt="Caregiver and family connecting for compassionate in-home care support"
          titleAccent="service"
          serviceBanner
        />

        {/* Top contact methods */}
        <section className="bg-fp-cream fp-section-padding" aria-label="Contact methods">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Get in touch</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                We’re Here to Help Your Family
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Trust-first care starts with a simple conversation. Choose the contact method that feels easiest.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Reveal className="rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                  <Phone className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="font-display text-xl font-semibold text-fp-text-primary">Call Us</h2>
                <p className="mt-2 font-body text-sm text-fp-text-muted">
                  Available Mon–Fri 8AM–6PM, Sat 9AM–3PM
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="mt-4 inline-flex font-display text-2xl font-semibold text-fp-copper hover:text-fp-copper-dark"
                  aria-label={`Call ${SITE_CONFIG.phone}`}
                >
                  {SITE_CONFIG.phone}
                </a>
              </Reveal>

              <Reveal delay={0.05} className="rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                  <Mail className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="font-display text-xl font-semibold text-fp-text-primary">Email Us</h2>
                <p className="mt-2 font-body text-sm text-fp-text-muted">
                  Response within 2 business hours
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="mt-4 inline-flex font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                >
                  {SITE_CONFIG.email}
                </a>
              </Reveal>

              <Reveal delay={0.1} className="rounded-2xl border border-fp-border bg-fp-white p-7 shadow-card">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                  <MapPin className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="font-display text-xl font-semibold text-fp-text-primary">Visit Us</h2>
                <p className="mt-2 font-body text-sm text-fp-text-muted">Douglasville, Georgia</p>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Douglasville%2C%20GA"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex font-body text-sm font-semibold text-fp-copper hover:text-fp-copper-dark"
                >
                  Open in Google Maps →
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Main section */}
        <section className="bg-fp-white fp-section-padding" aria-label="Contact form">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
              <Reveal className="rounded-2xl border border-fp-border bg-fp-cream p-8 shadow-card md:p-10">
                <h2 className="font-display text-2xl font-semibold text-fp-text-primary">
                  Send a Message
                </h2>
                <p className="mt-2 font-body text-sm text-fp-text-muted">
                  Share a few details and we’ll guide next steps.
                </p>
                <div className="mt-8">
                  <ContactPageForm />
                </div>
              </Reveal>

              <Reveal delay={0.06} className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-fp-border bg-fp-cream shadow-card">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=85&auto=format&fit=crop"
                      alt="Map of Georgia (placeholder)"
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
                      Coverage
                    </p>
                    <p className="mt-2 font-body text-sm text-fp-text-body">
                      Serving families across 10 Georgia counties.
                    </p>
                    <div className="mt-5">
                      <Button href="/service-areas" variant="secondary" size="md">
                        View Service Areas →
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-fp-border bg-fp-cream p-7 shadow-card">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-fp-copper" aria-hidden />
                    <div>
                      <p className="font-display text-lg font-semibold text-fp-text-primary">
                        Business hours
                      </p>
                      <p className="mt-1 font-body text-sm text-fp-text-muted">
                        {SITE_CONFIG.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-fp-copper/35 bg-fp-cream p-7 shadow-card">
                  <p className="font-display text-lg font-semibold text-fp-text-primary">
                    Emergency?
                  </p>
                  <p className="mt-2 font-body text-sm text-fp-text-muted">
                    Call us any time at{' '}
                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="font-semibold text-fp-copper hover:text-fp-copper-dark"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    .
                  </p>
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

