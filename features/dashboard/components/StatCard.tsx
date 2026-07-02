import { Card } from '@/components/ui/Card'

interface StatCardProps {
  label: string
  value: string | number
  change?: string
}

export function StatCard({ label, value, change }: StatCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <div className="text-label text-muted uppercase tracking-wide">{label}</div>
      <div className="mt-2 font-heading text-headline-xl text-foreground">{value}</div>
      {change && <div className="mt-1 text-body-sm text-primary">{change}</div>}
    </Card>
  )
}
