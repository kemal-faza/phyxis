import { cn } from '@/lib/utils'

export function GradientText({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn('gradient-text', className)}>{children}</span>
}
