'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ScoreProgress } from '@/components/ui/ScoreProgress'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { KpsSkill, PraktikanKpsProfile } from '@/features/kps/types'
import { calculateOverallScore } from '@/features/kps/lib/scoreColor'

interface KpsAssessmentModalProps {
  profile: PraktikanKpsProfile
  moduleId: string
  readOnly?: boolean
  onSave?: (updated: PraktikanKpsProfile, moduleId: string) => void
  onClose: () => void
}

export function KpsAssessmentModal({
  profile,
  moduleId,
  readOnly = false,
  onSave,
  onClose,
}: KpsAssessmentModalProps) {
  const currentModule = profile.modules.find((m) => m.moduleId === moduleId)
  const [skills, setSkills] = useState<KpsSkill[]>(currentModule?.passport.skills ?? [])

  const updateSkill = (id: string, patch: Partial<KpsSkill>) => {
    setSkills((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)))
  }

  const overall = calculateOverallScore(skills)
  const passed = skills.filter((s) => s.score >= s.threshold).length
  const moduleName = currentModule?.moduleName ?? moduleId

  const handleSave = () => {
    const updatedModules = profile.modules.map((m) =>
      m.moduleId === moduleId
        ? { ...m, passport: { ...m.passport, skills, overallScore: overall, skillsPassed: passed } }
        : m
    )
    onSave?.({ ...profile, modules: updatedModules }, moduleId)
    onClose()
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-headline-sm">{readOnly ? 'Detail KPS' : 'Nilai KPS'}</h2>
            <p className="text-body-sm text-muted">
              {profile.nama} &mdash; {profile.nim}
            </p>
            <p className="text-body-sm text-muted">{moduleName}</p>
          </div>
          <div className="text-right">
            <div className="text-headline-md font-bold">{overall}%</div>
            <div className="text-body-sm text-muted">{passed}/{skills.length} lulus</div>
          </div>
        </div>

        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-body font-medium">{skill.name}</span>
                {readOnly ? (
                  <span className="text-body-sm font-semibold">{skill.score}</span>
                ) : (
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={skill.score}
                    onChange={(e) => updateSkill(skill.id, { score: Number(e.target.value) })}
                    className="w-20 rounded border border-border bg-card px-2 py-1 text-right text-body"
                    disabled={readOnly}
                  />
                )}
              </div>
              <ScoreProgress score={skill.score} label="" showScore={false} />
              {readOnly ? (
                <p className="text-body-sm text-muted">{skill.note}</p>
              ) : (
                <textarea
                  value={skill.note}
                  onChange={(e) => updateSkill(skill.id, { note: e.target.value })}
                  placeholder="Catatan/alasan nilai..."
                  className="min-h-[60px] w-full rounded border border-border bg-card p-2 text-body-sm"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button variant="ghost" onClick={onClose}>Tutup</Button>
          {!readOnly && <Button onClick={handleSave}>Simpan</Button>}
        </div>
      </DialogContent>
    </Dialog>
  )
}
