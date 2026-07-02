import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-full font-semibold text-body transition-colors',
      'active:translate-y-0.5 transition-transform duration-100',
      'disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-primary text-primary-foreground hover:bg-primary-hover shadow-btn-primary': variant === 'primary',
        'bg-surface text-foreground hover:bg-primary/10': variant === 'secondary',
        'border border-border bg-transparent hover:bg-surface': variant === 'outline',
        'bg-transparent text-muted hover:bg-surface': variant === 'ghost',
        'py-2 px-4': size === 'sm',
        'py-3.5 px-6': size === 'md',
        'py-4 px-8': size === 'lg',
      },
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes} {...(props as any)}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
