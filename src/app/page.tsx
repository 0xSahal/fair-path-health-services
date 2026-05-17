import Footer from '@/components/layout/Footer'
import HomeHero from '@/components/home/HomeHero'
import HomeTrustBar from '@/components/home/HomeTrustBar'
import HomeAboutTeaser from '@/components/home/HomeAboutTeaser'
import HomeServicesGrid from '@/components/home/HomeServicesGrid'
import HomeHowItWorks from '@/components/home/HomeHowItWorks'
import HomeWhyChoose from '@/components/home/HomeWhyChoose'
import HomeTestimonialsCarousel from '@/components/home/HomeTestimonialsCarousel'
import HomeServiceAreas from '@/components/home/HomeServiceAreas'
import HomeInsuranceTeaser from '@/components/home/HomeInsuranceTeaser'
import HomeContactQuick from '@/components/home/HomeContactQuick'

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <HomeHero />
        <HomeTrustBar />
        <HomeAboutTeaser />
        <HomeServicesGrid />
        <HomeHowItWorks />
        <HomeWhyChoose />
        <HomeTestimonialsCarousel />
        <HomeServiceAreas />
        <HomeInsuranceTeaser />
        <HomeContactQuick />
      </main>
      <Footer />
    </>
  )
}
