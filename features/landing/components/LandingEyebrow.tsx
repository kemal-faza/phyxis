import { cn } from '@/lib/utils'

export function LandingEyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn('text-eyebrow font-semibold uppercase tracking-widest text-primary', className)}>
      {children}
    </span>
  )
}
