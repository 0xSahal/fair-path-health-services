import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { SectionTag } from '@/components/ui/SectionTag'
import DoNotSellForm from '@/components/legal/DoNotSellForm'

export const metadata: Metadata = {
  title: 'Do Not Sell or Share My Personal Information | Fair Path Health Services',
  description:
    'Opt out of the sale or sharing of personal information. Submit an opt-out request to Fair Path Health Services.',
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function DoNotSellPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Do Not Sell', href: '/do-not-sell' },
  ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Do Not Sell or Share My Personal Information"
          breadcrumb={breadcrumb}
          imageSrc="https://images.unsplash.com/photo-1559135197-8a45ea74d367?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Opt-out request for personal information"
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Opt-out form">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Privacy</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Opt-Out Request
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Use the form below to submit a request. We’ll confirm receipt and follow up as needed.
              </p>
            </Reveal>

            <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card md:p-10">
              <DoNotSellForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

