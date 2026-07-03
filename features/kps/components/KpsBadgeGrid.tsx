import { Card } from '@/components/ui/Card'
import { KpsBadge } from '@/features/kps/types'
import { Award } from 'lucide-react'

interface KpsBadgeGridProps {
  badges: KpsBadge[]
}

const levelClass: Record<KpsBadge['level'], string> = {
  bronze: 'text-amber-600',
  silver: 'text-slate-400',
  gold: 'text-yellow-500',
}

export function KpsBadgeGrid({ badges }: KpsBadgeGridProps) {
  return (
    <Card className="space-y-4">
      <h2 className="text-headline-sm">Achievement Badges</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {badges.map((badge) => {
          const unlocked = !!badge.unlockedAt
          return (
            <div
              key={badge.id}
              className={`flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-4 text-center ${
                !unlocked ? 'opacity-40 grayscale' : ''
              }`}
            >
              <Award className={`h-8 w-8 ${levelClass[badge.level]}`} />
              <span className="text-body-sm font-medium">{badge.name}</span>
              <span className="text-label-sm uppercase text-muted">{badge.level}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
