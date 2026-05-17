import Footer from '@/components/layout/Footer'

import { CoreValues } from './sections/CoreValues'
import { CTABanner } from './sections/CTABanner'
import { HeroSection } from './sections/HeroSection'
import { OurStory } from './sections/OurStory'
import { StatsBar } from './sections/StatsBar'
import { WhyChooseUs } from './sections/WhyChooseUs'

/**
 * About page: composed sections; site chrome (navbar) comes from root layout.
 */
export default function AboutUnifiedPage() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <OurStory />
        <CoreValues />
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
