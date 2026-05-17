import ScrollReveal from '@/components/shared/ScrollReveal'
import SectionHeader from '@/components/shared/SectionHeader'
import { TEAM_MEMBERS } from '@/lib/constants'
import type { TeamMember } from '@/types'

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <article className="overflow-hidden rounded-card border border-blush/50 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-roseGold/60 hover:shadow-card-hover">
        <div className="flex aspect-[1/1.1] items-center justify-center bg-gradient-to-br from-blush to-roseGold/40">
          <div
            aria-hidden
            className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-mahogany font-display text-[34px] font-bold text-white shadow-lg"
          >
            {member.initial}
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-1 font-display text-[21px] font-bold text-mahogany">
            {member.name}
          </h3>
          <p className="mb-3 font-body text-[12px] font-semibold uppercase tracking-[0.05em] text-roseGold">
            {member.role}
          </p>
          <p className="font-body text-[14px] leading-[1.65] text-slate">
            {member.bio}
          </p>
        </div>
      </article>
    </ScrollReveal>
  )
}

export default function TeamSection() {
  return (
    <section
      id="team"
      aria-label="Our care team"
      className="bg-white py-section"
    >
      <div className="section-container">
        <SectionHeader
          label="The People Behind Your Care"
          title="Meet Our Care Team"
          subtitle="Every team member is background-checked, professionally trained, and selected for genuine compassion."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
