import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-9 w-full rounded-xl border border-border bg-card px-3 text-body text-foreground placeholder:text-muted-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'
