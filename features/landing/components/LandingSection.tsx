import { cn } from '@/lib/utils'

export function LandingSection({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      {children}
    </section>
  )
}
