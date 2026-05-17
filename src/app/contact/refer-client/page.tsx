import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ReferClientForm from '@/components/contact/ReferClientForm'
import { SectionTag } from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Refer a Client | Fair Path Health Services',
  description:
    'Refer a client to Fair Path Health Services. For healthcare professionals and families seeking trusted in-home care support across Georgia.',
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function ReferClientPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'Refer a Client', href: '/contact/refer-client' },
  ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Refer a Client"
          breadcrumb={breadcrumb}
          imageSrc="https://images.unsplash.com/photo-1582719478185-2c3d77b0b5f5?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Healthcare professional coordinating a referral"
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Referral form">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Referrals</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Refer a Client to Fair Path Health Services
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                For healthcare professionals and families referring someone who needs safe, compassionate in-home support.
              </p>
            </Reveal>

            <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card md:p-10">
              <ReferClientForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

