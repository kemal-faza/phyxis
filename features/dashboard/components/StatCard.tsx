import { Card } from '@/components/ui/Card'

interface StatCardProps {
  label: string
  value: string | number
  change?: string
}

export function StatCard({ label, value, change }: StatCardProps) {
  return (
    <Card>
      <div className="text-label-md text-on-surface-variant uppercase">{label}</div>
      <div className="mt-2 text-headline-md text-on-surface">{value}</div>
      {change && <div className="mt-1 text-sm text-primary">{change}</div>}
    </Card>
  )
}
