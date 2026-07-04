import { StatCard } from './StatCard'
import { DASHBOARD_STATS } from '../data/mockData'
import { FlaskConical, BarChart3, Award, CheckCircle } from 'lucide-react'
import type { ElementType } from 'react'

const ICONS: Record<string, { icon: ElementType; className: string }> = {
  'Active Practicum': { icon: FlaskConical, className: 'bg-primary/10 text-primary' },
  'Average Score': { icon: BarChart3, className: 'bg-purple/[0.12] text-purple' },
  'KPS Level': { icon: Award, className: 'bg-primary-cyan/[0.12] text-primary-cyan' },
  Completion: { icon: CheckCircle, className: 'bg-success/[0.12] text-success' },
}

export function DashboardStatsGrid() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {DASHBOARD_STATS.map((s) => {
        const config = ICONS[s.label]
        return (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            icon={config.icon}
            iconContainerClass={config.className}
            caption={s.caption}
            change={'change' in s ? String(s.change) : undefined}
          />
        )
      })}
    </div>
  )
}
