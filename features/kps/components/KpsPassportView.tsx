'use client'

import { Card } from '@/components/ui/Card'
import { KpsPassport } from '@/features/kps/types'
import { KpsRadarChart } from './KpsRadarChart'
import { KpsSkillBreakdown } from './KpsSkillBreakdown'
import { KpsBadgeGrid } from './KpsBadgeGrid'

interface KpsPassportViewProps {
  passport: KpsPassport
}

export function KpsPassportView({ passport }: KpsPassportViewProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="space-y-1">
          <div className="text-label-md text-muted">OVERALL KPS</div>
          <div className="text-headline-xl font-bold text-foreground">{passport.overallScore}%</div>
          <div className="text-body-sm text-muted">Weighted mastery</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">SKILLS PASSED</div>
          <div className="text-headline-xl font-bold text-foreground">
            {passport.skillsPassed}/{passport.totalSkills}
          </div>
          <div className="text-body-sm text-muted">Threshold = 70%</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">BADGES EARNED</div>
          <div className="text-headline-xl font-bold text-foreground">
            {passport.badges.filter((b) => b.unlockedAt).length}
          </div>
          <div className="text-body-sm text-muted">{passport.badges.length} total</div>
        </Card>
      </div>

      <Card className="space-y-4">
        <h2 className="text-headline-sm">Radar Map</h2>
        <KpsRadarChart skills={passport.skills} />
      </Card>

      <KpsSkillBreakdown skills={passport.skills} />
      <KpsBadgeGrid badges={passport.badges} />
    </div>
  )
}
