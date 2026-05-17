/**
 * Compact trust strip below the hero: editorial spacing, token-backed colors.
 */
export function StatsBar() {
  const stats = [
    { label: 'Georgia counties served', value: '10' },
    { label: 'Types of in-home care', value: '12+' },
    { label: 'Years serving families', value: '7+' },
  ] as const

  return (
    <section
      aria-label="Fair Path at a glance"
      className="border-y border-[var(--fp-border)] bg-[var(--fp-cream-dark)] py-10 text-[var(--fp-text-primary)]"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 divide-[var(--fp-border)] sm:grid-cols-3 sm:gap-0 sm:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:px-4">
              <p className="font-accent text-4xl font-semibold tracking-tight text-[var(--fp-brown-dark)] md:text-[2.75rem]">
                {s.value}
              </p>
              <p className="mt-2 font-body text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--fp-text-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
