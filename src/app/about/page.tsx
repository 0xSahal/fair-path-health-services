import type { Metadata } from 'next'

import AboutUnifiedPage from '@/components/about/AboutUnifiedPage'

export const metadata: Metadata = {
  title: 'About Us | Fair Path Health Services',
  description:
    'Learn about Fair Path Health Services, our story, our values, and what families can expect from compassionate in-home care across Georgia.',
}

export default function AboutPage() {
  return <AboutUnifiedPage />
}
