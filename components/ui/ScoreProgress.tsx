import { cn } from '@/lib/utils'

interface ScoreProgressProps {
  score: number
  label: string
  showScore?: boolean
  className?: string
}

export function scoreColorClass(score: number): string {
  if (score >= 80) return 'bg-primary'
  if (score >= 70) return 'bg-warning'
  return 'bg-error'
}

export function ScoreProgress({
  score,
  label,
  showScore = true,
  className,
}: ScoreProgressProps) {
  const clamped = Math.min(100, Math.max(0, score))
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <span className="text-body font-medium">{label}</span>
        {showScore && (
          <span className="text-body-sm font-semibold text-foreground">
            {Math.round(clamped)}%
          </span>
        )}
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
        <div
          className={cn('h-full rounded-full transition-all', scoreColorClass(clamped))}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
