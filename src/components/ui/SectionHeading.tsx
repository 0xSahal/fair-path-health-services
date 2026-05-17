import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { Container } from './Container'

export interface SectionHeadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  /** When true, wraps content in `Container` */
  contained?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  contained = false,
  className,
  ...props
}: SectionHeadingProps) {
  const inner = (
    <div
      className={cn(
        align === 'center' && 'mx-auto max-w-3xl text-center',
        className,
      )}
      {...props}
    >
      <h2 className="font-display text-h2 font-semibold text-fp-text-primary">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 font-body text-lg leading-relaxed text-fp-text-muted',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )

  if (contained) {
    return <Container>{inner}</Container>
  }

  return inner
}
