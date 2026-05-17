import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-fp-border/90 bg-fp-cream shadow-card transition-all duration-300',
        'hover:-translate-y-1 hover:border-fp-copper/50 hover:shadow-card-hover',
        className,
      )}
      {...props}
    />
  )
}
