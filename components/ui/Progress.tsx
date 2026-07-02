interface ProgressProps {
  value: number
  max?: number
  className?: string
}

export function Progress({ value, max = 100, className }: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={`h-1.5 w-full rounded bg-surface ${className ?? ''}`}>
      <div
        className="h-full rounded bg-primary transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
