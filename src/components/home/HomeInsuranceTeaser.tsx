import Link from 'next/link'
import { Building2, CreditCard, RefreshCw } from 'lucide-react'

import Reveal from '@/components/shared/Reveal'

const icons = [
  { Icon: Building2, label: 'Medicaid' },
  { Icon: RefreshCw, label: 'Medicaid SOURCE' },
  { Icon: CreditCard, label: 'Private Pay' },
] as const

export default function HomeInsuranceTeaser() {
  return (
    <section
      aria-label="Payment and insurance options"
      className="bg-fp-brown-dark fp-section-padding text-fp-cream"
    >
      <div className="section-container">
        <Reveal className="mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-h2 font-semibold text-fp-cream">
            Multiple Payment Options for Every Budget
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-fp-cream/85">
            We accept Medicaid CCSP/SOURCE and Private Pay options. Our team helps you navigate
            coverage to get the best care for your loved one.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {icons.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-fp-copper-light ring-1 ring-white/15">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <span className="font-body text-sm font-semibold tracking-normal text-fp-cream/85">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/payment"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-fp-copper px-8 py-3.5 font-body text-sm font-semibold text-fp-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-fp-copper-light hover:shadow-[0_12px_32px_rgba(176,125,74,0.28)] active:translate-y-0 active:bg-fp-copper-dark"
            >
              Learn About Payment Options →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
