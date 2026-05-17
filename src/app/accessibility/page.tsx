import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { SectionTag } from '@/components/ui/SectionTag'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Fair Path Health Services',
  description:
    'Accessibility statement for Fair Path Health Services. We are committed to providing an accessible, inclusive website experience.',
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function AccessibilityPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Accessibility', href: '/accessibility' },
  ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Accessibility"
          breadcrumb={breadcrumb}
          imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Accessible and inclusive support"
        />

        <article className="bg-fp-cream fp-section-padding">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl">
              <SectionTag>Statement</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Accessibility Statement
              </h1>
              <p className="mt-4 font-body text-[16px] leading-relaxed text-fp-text-body">
                {SITE_CONFIG.name} is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We aim to follow best practices aligned with WCAG accessibility guidelines.
              </p>
              <h2 className="mt-10 font-display text-2xl font-semibold text-fp-text-primary">
                Ongoing improvements
              </h2>
              <p className="mt-3 font-body text-[16px] leading-relaxed text-fp-text-body">
                We continually work to improve usability, keyboard navigation, color contrast, and semantic structure across our pages.
              </p>
              <h2 className="mt-10 font-display text-2xl font-semibold text-fp-text-primary">
                Need help?
              </h2>
              <p className="mt-3 font-body text-[16px] leading-relaxed text-fp-text-body">
                If you experience any difficulty using the site, please contact us at{' '}
                <a className="font-semibold text-fp-copper hover:text-fp-copper-dark" href={`mailto:${SITE_CONFIG.email}`}>
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

