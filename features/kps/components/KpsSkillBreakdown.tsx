'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ScoreProgress } from '@/components/ui/ScoreProgress'
import { KpsSkill } from '@/features/kps/types'
import { deriveStatus } from '@/features/kps/lib/scoreColor'

interface KpsSkillBreakdownProps {
  skills: KpsSkill[]
}

export function KpsSkillBreakdown({ skills }: KpsSkillBreakdownProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <Card className="space-y-4">
      <h2 className="text-headline-sm">Skill Breakdown</h2>
      <div className="space-y-4">
        {skills.map((skill) => {
          const status = deriveStatus(skill.score, skill.threshold)
          const isLong = skill.note.length > 120
          const isExpanded = expanded[skill.id]
          return (
            <div key={skill.id} className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-body font-medium">{skill.name}</span>
                <Badge variant={status === 'lulus' ? 'success' : 'warning'}>
                  {status === 'lulus' ? 'Lulus' : 'Belum lulus'}
                </Badge>
              </div>
              <ScoreProgress score={skill.score} label="" showScore />
              <p className="text-body-sm text-muted">
                {isLong && !isExpanded ? `${skill.note.slice(0, 120)}...` : skill.note}
                {isLong && (
                  <button
                    type="button"
                    onClick={() => toggle(skill.id)}
                    className="ml-1 text-primary hover:underline"
                  >
                    {isExpanded ? 'Sembunyikan' : 'Selengkapnya'}
                  </button>
                )}
              </p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
