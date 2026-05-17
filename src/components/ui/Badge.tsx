import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-pill border px-3 py-0.5 font-body text-xs font-semibold uppercase tracking-wide',
  {
    variants: {
      variant: {
        copper:
          'border-fp-copper/35 bg-fp-copper/10 text-fp-brown-dark',
        success:
          'border-fp-success/30 bg-fp-success/10 text-fp-success',
        muted:
          'border-fp-border bg-fp-cream-dark text-fp-text-muted',
        outline:
          'border-fp-border bg-transparent text-fp-text-body',
      },
    },
    defaultVariants: { variant: 'copper' },
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
