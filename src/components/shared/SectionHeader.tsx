import { cn } from '@/lib/utils'
import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  labelClassName?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  labelClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <ScrollReveal className={cn(isCenter && 'text-center')}>
      <p className={cn('section-label', labelClassName)}>{label}</p>
      <h2
        className={cn(
          'font-display text-h2 font-bold text-mahogany',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 max-w-[580px] font-body text-[17px] leading-relaxed text-slate',
            isCenter && 'mx-auto',
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </ScrollReveal>
  )
}
