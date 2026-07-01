import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded border border-border-subtle bg-surface-container px-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'
