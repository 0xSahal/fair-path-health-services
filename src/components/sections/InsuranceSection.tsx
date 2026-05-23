import Link from 'next/link'
import {
  Building2,
  CreditCard,
  FileCheck2,
  Medal,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react'

import ScrollReveal from '@/components/shared/ScrollReveal'
import SectionHeader from '@/components/shared/SectionHeader'
import { INSURANCE_PROGRAMS } from '@/lib/constants'

const IconMap: Record<string, LucideIcon> = {
  Building2,
  FileCheck2,
  RefreshCw,
  CreditCard,
  Medal,
}

export default function InsuranceSection() {
  return (
    <section
      id="insurance"
      aria-label="Payment options and insurance"
      className="bg-cream py-section"
    >
      <div className="section-container">
        <SectionHeader
          label="Payment Made Easy"
          title="We Make Payment Simple"
          subtitle="We accept private pay only — our team explains pricing clearly so you can focus on your loved one."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INSURANCE_PROGRAMS.map((program, index) => {
            const Icon = IconMap[program.icon] ?? Building2
            return (
              <ScrollReveal key={program.name} delay={index * 0.1}>
                <article className="rounded-card border border-blush/60 bg-white p-7 text-center transition-all hover:-translate-y-1 hover:border-roseGold/50 hover:shadow-card">
                  <div className="mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-roseGold/10">
                    <Icon className="text-roseGold" size={28} aria-hidden />
                  </div>
                  <h3 className="mb-2 font-display text-[18px] font-bold text-mahogany">
                    {program.name}
                  </h3>
                  <p className="font-body text-[13px] leading-[1.5] text-slate">
                    {program.desc}
                  </p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="#contact" className="btn-outline-mah inline-block">
            Learn About Payment Options →
          </Link>
        </div>
      </div>
    </section>
  )
}
