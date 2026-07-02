import { cn } from '@/lib/utils'

interface LandingSectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export function LandingSection({ id, className, children }: LandingSectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      {children}
    </section>
  )
}
