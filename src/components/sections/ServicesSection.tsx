import {
  Accessibility,
  ArrowRight,
  Brain,
  CalendarCheck,
  Car,
  Coffee,
  HeartHandshake,
  Home,
  Hospital,
  Medal,
  MessagesSquare,
  Pill,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

import ScrollReveal from '@/components/shared/ScrollReveal'
import SectionHeader from '@/components/shared/SectionHeader'
import { SERVICE_ITEMS } from '@/lib/constants'
import type { Service } from '@/lib/types'

const IconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  Home,
  Stethoscope,
  Pill,
  Coffee,
  Brain,
  Hospital,
  Car,
  CalendarCheck,
  Accessibility,
  Medal,
  MessagesSquare,
  ArrowRight,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = IconMap[service.icon] ?? HeartHandshake

  return (
    <ScrollReveal delay={index * 0.1}>
      <article className="card-trust group cursor-pointer border-0 border-t-[3px] border-fp-copper">
        <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-fp-copper/10">
          <Icon className="text-fp-copper" size={22} aria-hidden />
        </div>
        <h3 className="mb-2.5 font-serif text-h3 font-semibold text-fp-brown-dark">
          {service.name}
        </h3>
        <p className="mb-4 font-body text-[15px] leading-relaxed text-fp-text-muted">
          {service.shortDescription}
        </p>
        <span className="flex items-center gap-1.5 text-[13px] font-semibold text-fp-copper-dark transition-all group-hover:gap-3">
          Learn more
          <ArrowRight size={14} aria-hidden />
        </span>
      </article>
    </ScrollReveal>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="bg-fp-white py-section-sm lg:py-section"
    >
      <div className="section-container">
        <SectionHeader
          label="What We Offer"
          title="Comprehensive Home Care Services"
          subtitle="Tailored care solutions designed to support independence, dignity, and quality of life, in the comfort of your own home."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_ITEMS.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
