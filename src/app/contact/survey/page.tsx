import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import SatisfactionSurveyForm from '@/components/contact/SatisfactionSurveyForm'
import { SectionTag } from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Client Satisfaction Survey | Fair Path Health Services',
  description:
    'Share your experience with Fair Path Health Services. Your feedback helps us improve care and support every family.',
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function SurveyPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
    { label: 'Survey', href: '/contact/survey' },
  ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Client Satisfaction Survey"
          breadcrumb={breadcrumb}
          imageSrc="https://images.unsplash.com/photo-1582719478185-2c3d77b0b5f5?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Compassionate care experience and feedback"
        />

        <section className="bg-fp-cream fp-section-padding" aria-label="Survey form">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <SectionTag className="text-center">Feedback</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                How Are We Doing? Share Your Experience
              </h1>
              <p className="mt-4 font-body text-lg text-fp-text-muted">
                Your feedback helps us improve and ensures every family gets the best care possible.
              </p>
            </Reveal>

            <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-fp-border bg-fp-white p-8 shadow-card md:p-10">
              <SatisfactionSurveyForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

