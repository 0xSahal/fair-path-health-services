import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import ServicesDirectoryClient from '@/components/services/ServicesDirectoryClient'

export const metadata: Metadata = {
  title: 'Services | Fair Path Health Services',
  description:
    'Explore Fair Path Health Services in-home care offerings in Georgia. Browse services by category and find the right care plan for your loved one.',
}

export default function ServicesPage() {
  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title="Services"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
          ]}
          imageSrc="/images/service.webp"
          imageAlt="Diverse team of home care professionals in scrubs standing together in a bright living room"
          serviceBanner
          servicePagesHero
        />
        <ServicesDirectoryClient />
      </main>
      <Footer />
    </>
  )
}

