import * as React from 'react'

import { cn } from '@/lib/utils'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'min-h-[100px] w-full rounded-lg border border-blush bg-cream px-4 py-3 text-[15px] font-body text-charcoal',
          'placeholder:text-slate/40 transition-all duration-200 resize-none',
          'focus:border-roseGold focus:outline-none focus:ring-1 focus:ring-roseGold/30',
          'focus-visible:ring-2 focus-visible:ring-roseGold focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
