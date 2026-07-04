'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useKpsStore } from '@/features/kps/stores/kpsStore'
import { PraktikanKpsProfile } from '@/features/kps/types'
import { KpsAssessmentModal } from './KpsAssessmentModal'

interface KpsReviewTableProps {
  readOnly?: boolean
}

export function KpsReviewTable({ readOnly = false }: KpsReviewTableProps) {
  const profiles = useKpsStore((s) => s.profiles)
  const moduleDefs = useKpsStore((s) => s.moduleDefs)
  const setScore = useKpsStore((s) => s.setScore)
  const setNote = useKpsStore((s) => s.setNote)

  const [selectedModuleId, setSelectedModuleId] = useState(
    moduleDefs.length > 0 ? moduleDefs[0].id : ''
  )
  const [selectedProfile, setSelectedProfile] = useState<PraktikanKpsProfile | null>(null)

  // Compute stats for the selected module
  const moduleProfiles = profiles.map((p) => {
    const mod = p.modules.find((m) => m.moduleId === selectedModuleId)
    return { profile: p, modulePassport: mod }
  })

  const totalPraktikan = moduleProfiles.length
  const avgOverall = moduleProfiles.length > 0
    ? Math.round(
        moduleProfiles.reduce((sum, mp) => sum + (mp.modulePassport?.passport.overallScore ?? 0), 0) /
          moduleProfiles.length
      )
    : 0
  const allPassed = moduleProfiles.filter(
    (mp) =>
      mp.modulePassport &&
      mp.modulePassport.passport.skillsPassed === mp.modulePassport.passport.totalSkills
  ).length

  const handleSave = (updated: PraktikanKpsProfile, moduleId: string) => {
    const updatedModule = updated.modules.find((m) => m.moduleId === moduleId)
    if (!updatedModule) return
    updatedModule.passport.skills.forEach((skill) => {
      const original = selectedProfile?.modules
        .find((m) => m.moduleId === moduleId)
        ?.passport.skills.find((s) => s.id === skill.id)
      if (original && original.score !== skill.score) {
        setScore(updated.nim, moduleId, skill.id, skill.score)
      }
      if (original && original.note !== skill.note) {
        setNote(updated.nim, moduleId, skill.id, skill.note)
      }
    })
  }

  return (
    <div className="space-y-4">
      {/* Module filter + stat summary */}
      <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <label className="text-label-sm text-muted">PILIH MODUL</label>
          <Select value={selectedModuleId} onValueChange={setSelectedModuleId}>
            <SelectTrigger className="md:w-72">
              <SelectValue placeholder="Pilih modul..." />
            </SelectTrigger>
            <SelectContent>
              {moduleDefs.map((mod) => (
                <SelectItem key={mod.id} value={mod.id}>{mod.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="space-y-1">
          <div className="text-label-md text-muted">TOTAL PRAKTIKAN</div>
          <div className="text-headline-md font-bold">{totalPraktikan}</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">RATA-RATA OVERALL</div>
          <div className="text-headline-md font-bold">{avgOverall}%</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">LULUS SEMUA SKILL</div>
          <div className="text-headline-md font-bold">{allPassed}</div>
        </Card>
      </div>

      {/* Mobile card list */}
      <div className="space-y-3 md:hidden">
        {moduleProfiles.map(({ profile: p, modulePassport }) => {
          const passport = modulePassport?.passport
          if (!passport) return null
          return (
            <Card key={p.nim} className="space-y-3 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-body font-semibold text-foreground">{p.nama}</span>
                <Badge variant={passport.skillsPassed === passport.totalSkills ? 'success' : 'warning'}>
                  {passport.skillsPassed}/{passport.totalSkills}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-body-sm">
                <div>
                  <div className="text-label-sm text-muted">NIM</div>
                  <div className="font-medium text-muted">{p.nim}</div>
                </div>
                <div>
                  <div className="text-label-sm text-muted">OVERALL</div>
                  <div className="font-medium">{passport.overallScore}%</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={() => setSelectedProfile(p)}>
                {readOnly ? 'Lihat' : 'Nilai'}
              </Button>
            </Card>
          )
        })}
      </div>

      {/* Desktop table */}
      <Card className="hidden md:block">
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
              {moduleProfiles.map(({ profile: p, modulePassport }) => {
                const passport = modulePassport?.passport
                if (!passport) return null
                return (
                  <tr key={p.nim} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4">{p.nama}</td>
                    <td className="py-3 pr-4 text-muted">{p.nim}</td>
                    <td className="py-3 pr-4 font-semibold">{passport.overallScore}%</td>
                    <td className="py-3 pr-4">
                      <Badge variant={passport.skillsPassed === passport.totalSkills ? 'success' : 'warning'}>
                        {passport.skillsPassed}/{passport.totalSkills}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <Button size="sm" variant="outline" onClick={() => setSelectedProfile(p)}>
                        {readOnly ? 'Lihat' : 'Nilai'}
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {selectedProfile && (
        <KpsAssessmentModal
          profile={selectedProfile}
          moduleId={selectedModuleId}
          readOnly={readOnly}
          onSave={readOnly ? undefined : handleSave}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  )
}
