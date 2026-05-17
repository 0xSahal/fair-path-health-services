import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import FaqClient from '@/components/resources/FaqClient'

export const metadata: Metadata = {
  title: 'FAQ | Fair Path Health Services',
  description:
    'Frequently asked questions about Fair Path Health Services: getting started, services, scheduling, payment, caregiver selection, DBHDD services, and careers.',
}

export default function ResourcesFaqPage() {
  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title="FAQ"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'FAQ', href: '/resources/faq' },
          ]}
          imageSrc="/images/faq.webp"
          imageAlt="Frequently asked questions about in-home care and Fair Path Health Services"
          titleAccent="service"
          serviceBanner
        />
        <FaqClient />
      </main>
      <Footer />
    </>
  )
}

