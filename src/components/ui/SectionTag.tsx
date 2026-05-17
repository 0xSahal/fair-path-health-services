import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export type SectionTagProps = HTMLAttributes<HTMLParagraphElement>

/** Small italic label above section headings (Cormorant Garamond). */
export function SectionTag({ className, children, ...props }: SectionTagProps) {
  return (
    <p
      className={cn(
        'font-accent text-sm italic tracking-[0.14em] text-fp-copper md:text-base',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
