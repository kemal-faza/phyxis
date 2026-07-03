'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useKpsStore } from '@/features/kps/stores/kpsStore'
import { PraktikanKpsProfile } from '@/features/kps/types'
import { KpsAssessmentModal } from './KpsAssessmentModal'

interface KpsReviewTableProps {
  readOnly?: boolean
}

export function KpsReviewTable({ readOnly = false }: KpsReviewTableProps) {
  const profiles = useKpsStore((s) => s.profiles)
  const setScore = useKpsStore((s) => s.setScore)
  const setNote = useKpsStore((s) => s.setNote)
  const [selected, setSelected] = useState<PraktikanKpsProfile | null>(null)

  const handleSave = (updated: PraktikanKpsProfile) => {
    updated.passport.skills.forEach((skill) => {
      const original = selected?.passport.skills.find((s) => s.id === skill.id)
      if (original && original.score !== skill.score) {
        setScore(updated.nim, skill.id, skill.score)
      }
      if (original && original.note !== skill.note) {
        setNote(updated.nim, skill.id, skill.note)
      }
    })
  }

  const avgOverall = Math.round(
    profiles.reduce((sum, p) => sum + p.passport.overallScore, 0) / (profiles.length || 1)
  )

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="space-y-1">
          <div className="text-label-md text-muted">TOTAL PRAKTIKAN</div>
          <div className="text-headline-md font-bold">{profiles.length}</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">RATA-RATA OVERALL</div>
          <div className="text-headline-md font-bold">{avgOverall}%</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">LULUS SEMUA SKILL</div>
          <div className="text-headline-md font-bold">
            {profiles.filter((p) => p.passport.skillsPassed === p.passport.totalSkills).length}
          </div>
        </Card>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="pb-2 pr-4">Nama</th>
                <th className="pb-2 pr-4">NIM</th>
                <th className="pb-2 pr-4">Overall</th>
                <th className="pb-2 pr-4">Passed</th>
                <th className="pb-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((p) => (
                <tr key={p.nim} className="border-b border-border last:border-0">
                  <td className="py-3 pr-4">{p.nama}</td>
                  <td className="py-3 pr-4 text-muted">{p.nim}</td>
                  <td className="py-3 pr-4 font-semibold">{p.passport.overallScore}%</td>
                  <td className="py-3 pr-4">
                    <Badge variant={p.passport.skillsPassed === p.passport.totalSkills ? 'success' : 'warning'}>
                      {p.passport.skillsPassed}/{p.passport.totalSkills}
                    </Badge>
                  </td>
                  <td className="py-3">
                    <Button size="sm" variant="outline" onClick={() => setSelected(p)}>
                      {readOnly ? 'Lihat' : 'Nilai'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {selected && (
        <KpsAssessmentModal
          profile={selected}
          readOnly={readOnly}
          onSave={readOnly ? undefined : handleSave}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
