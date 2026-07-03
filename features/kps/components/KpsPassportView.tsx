'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { KpsModulePassport, KpsModule } from '@/features/kps/types'
import { KpsRadarChart } from './KpsRadarChart'
import { KpsSkillBreakdown } from './KpsSkillBreakdown'
import { KpsBadgeGrid } from './KpsBadgeGrid'
import { calculateOverallScore } from '@/features/kps/lib/scoreColor'

interface KpsPassportViewProps {
  modules: KpsModulePassport[]
  moduleDefs: KpsModule[]
}

export function KpsPassportView({ modules, moduleDefs }: KpsPassportViewProps) {
  const [selectedModuleId, setSelectedModuleId] = useState(
    modules.length > 0 ? modules[0].moduleId : ''
  )

  const currentModule = modules.find((m) => m.moduleId === selectedModuleId)
  const passport = currentModule?.passport

  if (modules.length === 0 || !passport) {
    return (
      <Card className="flex h-64 items-center justify-center">
        <p className="text-body text-muted">Belum ada data KPS untuk modul apapun.</p>
      </Card>
    )
  }

  // Recalculate overall in case skills have changed
  const overall = calculateOverallScore(passport.skills)
  const passed = passport.skills.filter((s) => s.score >= s.threshold).length
  const badgesEarned = passport.badges.filter((b) => b.unlockedAt).length

  return (
    <div className="space-y-6">
      {/* Module selector */}
      <div>
        <label className="text-label-sm text-muted">PILIH MODUL</label>
        <Select value={selectedModuleId} onValueChange={setSelectedModuleId}>
          <SelectTrigger className="mt-1 w-full md:w-72">
            <SelectValue placeholder="Pilih modul..." />
          </SelectTrigger>
          <SelectContent>
            {modules.map((mod) => {
              const def = moduleDefs.find((d) => d.id === mod.moduleId)
              return (
                <SelectItem key={mod.moduleId} value={mod.moduleId}>
                  {def?.name ?? mod.moduleName}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="space-y-1">
          <div className="text-label-md text-muted">OVERALL KPS</div>
          <div className="text-headline-xl font-bold text-foreground">{overall}%</div>
          <div className="text-body-sm text-muted">Weighted mastery</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">SKILLS PASSED</div>
          <div className="text-headline-xl font-bold text-foreground">
            {passed}/{passport.totalSkills}
          </div>
          <div className="text-body-sm text-muted">Threshold = 70%</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">BADGES EARNED</div>
          <div className="text-headline-xl font-bold text-foreground">
            {badgesEarned}
          </div>
          <div className="text-body-sm text-muted">{passport.badges.length} total</div>
        </Card>
      </div>

      {/* Skills per-modul sudah terfilter dari selectedModuleId */}
      <Card className="space-y-4">
        <h2 className="text-headline-sm">Radar Map</h2>
        <KpsRadarChart skills={passport.skills} />
      </Card>

      <KpsSkillBreakdown skills={passport.skills} />
      <KpsBadgeGrid badges={passport.badges} />
    </div>
  )
}
