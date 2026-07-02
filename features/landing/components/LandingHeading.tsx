import { cn } from '@/lib/utils'

interface LandingHeadingProps {
  as?: 'h1' | 'h2' | 'h3'
  variant?: 'hero' | 'section' | 'sub'
  className?: string
  children: React.ReactNode
}

export function LandingHeading({ as: Tag = 'h2', variant = 'section', className, children }: LandingHeadingProps) {
  return (
    <Tag
      className={cn(
        'font-heading font-bold text-foreground',
        {
          'text-headline-hero leading-tight tracking-tight': variant === 'hero',
          'text-headline-lg leading-tight tracking-tight': variant === 'section',
          'text-headline-sm': variant === 'sub',
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}
