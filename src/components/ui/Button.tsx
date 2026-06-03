import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-body font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border border-transparent bg-fp-copper text-fp-white hover:bg-fp-copper-light hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(176,125,74,0.28)] active:translate-y-0 active:bg-fp-copper-dark focus-visible:ring-fp-copper',
        secondary:
          'border-2 border-fp-brown-dark/25 bg-fp-cream text-fp-brown-dark hover:border-fp-copper hover:bg-fp-cream-dark focus-visible:ring-fp-copper',
        ghost:
          'border border-transparent bg-transparent text-fp-brown-dark hover:bg-fp-copper/10 focus-visible:ring-fp-copper',
        'outline-white':
          'border-2 border-white/75 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:ring-white',
      },
      size: {
        sm: 'px-4 py-2 text-xs uppercase tracking-wider',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-3.5 text-sm uppercase tracking-wide',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type VariantPropsType = VariantProps<typeof buttonVariants>

type ButtonAsButton = VariantPropsType &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = VariantPropsType &
  Omit<LinkProps, 'href' | 'className' | 'children'> & {
    href: string
    className?: string
    children?: ReactNode
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
  if ('href' in props && props.href) {
    const { href, children, variant, size, className, ...anchorRest } =
      props as ButtonAsLink
    const classes = cn(buttonVariants({ variant, size }), className)
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    )
  }

  const { children, variant, size, className, type = 'button', ...htmlBtnRest } =
    props as ButtonAsButton
  const classes = cn(buttonVariants({ variant, size }), className)

  return (
    <button type={type} className={classes} {...htmlBtnRest}>
      {children}
    </button>
  )
}
