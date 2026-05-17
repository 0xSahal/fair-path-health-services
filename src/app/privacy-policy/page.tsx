import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { SectionTag } from '@/components/ui/SectionTag'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fair Path Health Services',
  description:
    'Privacy policy for Fair Path Health Services: data collection, use, storage, your rights, and contact information.',
}

const siteUrl = 'https://www.fairpathhealth.com'

export default function PrivacyPolicyPage() {
  const breadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ]

  return (
    <>
      <main id="main-content">
        <BreadcrumbJsonLd items={breadcrumb} siteUrl={siteUrl} />
        <InnerPageHero
          title="Privacy Policy"
          breadcrumb={breadcrumb}
          imageSrc="https://images.unsplash.com/photo-1559135197-8a45ea74d367?w=1920&q=85&auto=format&fit=crop"
          imageAlt="Privacy and data protection policy"
        />

        <article className="bg-fp-cream fp-section-padding">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl">
              <SectionTag>Legal</SectionTag>
              <h1 className="mt-3 font-display text-h1 font-semibold text-fp-text-primary">
                Privacy Policy
              </h1>
              <p className="mt-4 font-body text-[16px] leading-relaxed text-fp-text-body">
                This Privacy Policy explains how {SITE_CONFIG.name} (“we,” “us,” or “our”) collects,
                uses, and protects information when you visit our website or submit a form.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-fp-text-primary">
                Data We Collect
              </h2>
              <p className="mt-3 font-body text-[16px] leading-relaxed text-fp-text-body">
                We may collect information you submit through our forms (such as name, phone, email,
                address, county, and message content). We may also collect basic technical
                information (such as browser type and pages viewed) for analytics and website
                performance.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-fp-text-primary">
                How We Use Information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6 font-body text-[16px] leading-relaxed text-fp-text-body">
                <li>Respond to requests, schedule assessments, and provide customer support</li>
                <li>Improve our website and understand which content helps families most</li>
                <li>Comply with legal obligations when required</li>
              </ul>

              <h2 className="mt-10 font-display text-2xl font-semibold text-fp-text-primary">
                Storage & Security
              </h2>
              <p className="mt-3 font-body text-[16px] leading-relaxed text-fp-text-body">
                We take reasonable measures to protect information. No website can guarantee
                absolute security, but we work to reduce risk and limit access to authorized use.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-fp-text-primary">
                Your Rights
              </h2>
              <p className="mt-3 font-body text-[16px] leading-relaxed text-fp-text-body">
                You may request access, correction, or deletion of personal information you’ve
                provided, subject to applicable laws and operational requirements.
              </p>

              <h2 className="mt-10 font-display text-2xl font-semibold text-fp-text-primary">
                Contact
              </h2>
              <p className="mt-3 font-body text-[16px] leading-relaxed text-fp-text-body">
                Questions about privacy? Contact us at{' '}
                <a
                  className="font-semibold text-fp-copper hover:text-fp-copper-dark"
                  href={`mailto:${SITE_CONFIG.email}`}
                >
                  {SITE_CONFIG.email}
                </a>
                .
              </p>

              <p className="mt-10 font-body text-sm text-fp-text-muted">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

