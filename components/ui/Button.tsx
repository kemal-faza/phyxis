import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, icon, iconPosition = 'right', children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-body transition duration-150',
      'hover:-translate-y-0.5 active:translate-y-0.5',
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

    const content = (
      <>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </>
    )

    if (href) {
      return (
        <Link href={href} className={classes} {...(props as any)}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    )
  }
)
Button.displayName = 'Button'
