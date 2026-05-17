import type { Metadata } from 'next'
import { Check, Clock, CreditCard, Wallet } from 'lucide-react'

import Footer from '@/components/layout/Footer'
import InnerPageHero from '@/components/shared/InnerPageHero'
import Reveal from '@/components/shared/Reveal'
import { Button } from '@/components/ui/Button'
import { SectionTag } from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Payment & Insurance | Fair Path Health Services',
  description:
    'Private pay pricing and transparency for Georgia in-home care. Medicaid, insurance, and Aid & Attendance are coming soon. Contact Fair Path for a consultation.',
}

const AVAILABLE_BENEFITS = [
  'No referral or approval wait times',
  'Flexible scheduling and service customization',
  'Direct relationship with your care team',
  'Available for short-term or long-term care',
] as const

const PRICING_FACTORS = [
  'Care hours per week and schedule complexity',
  'Care type (companionship, personal care, skilled support)',
  'Client needs and safety considerations',
  'Coordination requirements and coverage level',
] as const

const COMING_SOON_OPTIONS = [
  'Medicaid CCSP/SOURCE',
  'Insurance Coverage',
  'Aid & Attendance Benefit',
] as const

export default function PaymentAndInsurancePage() {
  const pricingCardClass =
    'flex h-full min-h-0 flex-col rounded-2xl border border-solid border-[#E8DDD0] bg-[#FAF6F1] p-[32px] shadow-card'

  return (
    <>
      <main id="main-content">
        <InnerPageHero
          title="Payment & Insurance"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Payment & Insurance', href: '/payment' },
          ]}
          imageSrc="/images/payment.webp"
          imageAlt="Payment and insurance planning for compassionate in-home care"
          titleAccent="service"
          serviceBanner
        />

        <section className="bg-fp-cream" aria-labelledby="payment-intro-heading">
          <div className="section-container">
            <div className="py-[80px]">
              <Reveal className="mx-auto max-w-3xl text-center">
                <SectionTag className="text-center">Simple & Transparent</SectionTag>
                <h1
                  id="payment-intro-heading"
                  className="mt-3 font-display text-h1 font-semibold text-fp-text-primary"
                >
                  We Make Payment Simple
                </h1>
                <p className="mt-4 font-body text-lg text-fp-text-muted">
                  We believe quality care should be accessible. We currently accept Private Pay and are actively working to
                  expand our payment options for Georgia families.
                </p>
              </Reveal>
            </div>

            <div className="py-[80px] pt-0">
              <Reveal delay={0.04}>
                <div
                  className="rounded-2xl border border-solid border-[#E8DDD0] border-l-[4px] border-l-[#C9A96E] p-[40px] shadow-[0_4px_24px_rgba(180,140,80,0.10)]"
                  style={{ backgroundColor: '#FAF6F1' }}
                >
                  <span className="inline-block rounded-full bg-[#C9A96E] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                    Available Now
                  </span>

                  <div className="mt-6 flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fp-brown-dark text-[#C9A96E] shadow-sm">
                      <Wallet className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-2xl font-semibold text-fp-text-primary md:text-[28px]">
                        Private Pay
                      </h2>
                      <p className="mt-3 font-body text-[15px] leading-relaxed text-fp-text-muted">
                        Private Pay allows families to arrange care directly without going through insurance or government
                        programs. It offers maximum flexibility, faster start times, and fully customized care plans tailored
                        to your loved one&apos;s exact needs.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3 md:max-w-xl">
                    {AVAILABLE_BENEFITS.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A96E]/25 text-fp-brown-dark">
                          <Check className="h-3.5 w-3.5" aria-hidden strokeWidth={2.5} />
                        </span>
                        <span className="font-body text-[15px] text-fp-text-body">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 w-full sm:w-auto">
                    <Button href="/contact" variant="primary" size="lg" className="w-full justify-center sm:w-auto">
                      Schedule a Free Consultation →
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-[60px] py-[80px] pt-0">
              <Reveal className="mx-auto max-w-3xl text-center" delay={0.02}>
                <SectionTag className="text-center">Private Pay Details</SectionTag>
                <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                  Flexible Pricing Based on Care Hours and Type
                </h2>
                <p className="mt-4 font-body text-lg text-fp-text-muted">
                  While every plan is different, we keep pricing clear and aligned with your needs. No surprises.
                </p>
              </Reveal>

              <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
                <Reveal className={pricingCardClass}>
                  <div className="mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fp-copper/12 text-fp-copper">
                    <CreditCard className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-fp-text-primary">How pricing generally works</h2>
                  <ul className="mt-5 flex flex-1 flex-col space-y-3">
                    {PRICING_FACTORS.map((i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fp-copper/15 text-fp-copper">
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="font-body text-[15px] text-fp-text-body">{i}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.06} className={pricingCardClass}>
                  <h2 className="font-display text-2xl font-semibold text-fp-text-primary">What&apos;s included</h2>
                  <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-fp-text-muted">
                    Private pay plans include a personalized assessment, care plan development, scheduling, and ongoing
                    communication, with services matched to your exact needs.
                  </p>
                  <div className="mt-6">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-fp-text-muted">
                      Package options (conceptual)
                    </p>
                    <ul className="mt-4 space-y-2 font-body text-sm text-fp-text-body">
                      <li>• Companion support (a few visits/week)</li>
                      <li>• Daily routine support (consistent weekly hours)</li>
                      <li>• Higher-acuity support (more frequent visits)</li>
                      <li>• Family respite coverage (planned or urgent)</li>
                    </ul>
                  </div>
                </Reveal>
              </div>

              <Reveal className="mt-12 flex justify-center">
                <Button href="/contact/book-appointment" variant="secondary" size="lg">
                  Contact Us for a Quote →
                </Button>
              </Reveal>
            </div>

            <div className="py-[80px] pt-0">
              {/* Coming soon */}
              <Reveal className="mx-auto max-w-3xl text-center">
                <SectionTag className="text-center">More Options Coming Soon</SectionTag>
                <h2 className="mt-3 font-display text-h2 font-semibold text-fp-text-primary">
                  Expanding Access for Every Family
                </h2>
                <p className="mt-4 font-body text-lg text-fp-text-muted">
                  We are working hard to accept additional payment options. Check back soon or contact us to ask about
                  availability.
                </p>
              </Reveal>

              <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
                {COMING_SOON_OPTIONS.map((title, i) => (
                  <li key={title} className="h-full">
                    <Reveal delay={i * 0.05} className="block h-full">
                      <div
                        className="flex min-h-[140px] h-full flex-col rounded-2xl border border-dashed border-[#D4C9BA] p-[28px] shadow-[0_2px_12px_rgba(44,26,14,0.04)]"
                        style={{ backgroundColor: '#F0EBE3' }}
                      >
                        <div className="text-[#C4B49A]" aria-hidden>
                          <Clock className="size-8" strokeWidth={1.75} />
                        </div>
                        <span className="mt-5 inline-block w-fit rounded-full bg-[#EDE8E0] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9E8E7E]">
                          Coming Soon
                        </span>
                        <p className="mt-4 font-display text-base font-semibold leading-snug text-[#9E8E7E]">
                          {title}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="border-y border-solid border-[#E8DDD0] bg-[#FAF6F1] py-[60px]"
          aria-label="Questions about payment"
        >
          <div className="section-container">
            <Reveal className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-[32px] font-semibold leading-tight text-fp-text-primary">
                Have Questions About Payment?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl font-body text-[15px] leading-relaxed text-fp-text-muted">
                Our care coordinators are happy to walk you through your options and help find the best fit for your
                family.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Talk to Our Team →
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
