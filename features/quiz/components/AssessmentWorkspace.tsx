'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { QuizSubmission } from '@/features/quiz/types'
import { MOCK_SUBMISSIONS } from '@/features/quiz/data/mockSubmissions'
import { SubmissionReviewModal } from './SubmissionReviewModal'

export function AssessmentWorkspace() {
  const [submissions, setSubmissions] = useState<QuizSubmission[]>(MOCK_SUBMISSIONS)
  const [selected, setSelected] = useState<QuizSubmission | null>(null)

  const pending = submissions.filter((s) => !s.reviewed).length
  const graded = submissions.filter((s) => s.reviewed).length
  const avgScore = Math.round(
    submissions.reduce((sum, s) => sum + s.finalScore, 0) / (submissions.length || 1)
  )
  const avgConfidence = Math.round(
    submissions.reduce((sum, s) => sum + s.aiConfidence, 0) / (submissions.length || 1)
  )

  const handleConfirm = () => {
    if (!selected) return
    setSubmissions((prev) =>
      prev.map((s) => (s.id === selected.id ? { ...s, reviewed: true } : s))
    )
    setSelected(null)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card className="space-y-1"><div className="text-label-md text-muted">PENDING</div><div className="text-headline-md font-bold">{pending}</div></Card>
        <Card className="space-y-1"><div className="text-label-md text-muted">AUTO-GRADED</div><div className="text-headline-md font-bold">{graded}</div></Card>
        <Card className="space-y-1"><div className="text-label-md text-muted">AVE. SCORE</div><div className="text-headline-md font-bold">{avgScore}</div></Card>
        <Card className="space-y-1"><div className="text-label-md text-muted">AI CONFIDENCE</div><div className="text-headline-md font-bold">{avgConfidence}%</div></Card>
      </div>

      <div className="space-y-3 md:hidden">
        {submissions.map((s) => (
          <Card key={s.id} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="font-semibold truncate">{s.studentName}</span>
                <Badge variant={s.reviewed ? 'success' : 'warning'} className="shrink-0">
                  {s.reviewed ? 'Reviewed' : 'Pending'}
                </Badge>
              </div>
              <Button variant="outline" size="sm" onClick={() => setSelected(s)} className="shrink-0">Review</Button>
            </div>
            <div className="text-body-sm text-muted">{s.topic}</div>
          </Card>
        ))}
      </div>

      <Card className="hidden md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="pb-2 pr-4">Nama</th>
              <th className="pb-2 pr-4">Topik</th>
              <th className="pb-2 pr-4">Tipe</th>
              <th className="pb-2 pr-4">Status</th>
              <th className="pb-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id} className="border-b border-border last:border-0">
                <td className="py-3 pr-4">{s.studentName}</td>
                <td className="py-3 pr-4">{s.topic}</td>
                <td className="py-3 pr-4 uppercase">{s.type}</td>
                <td className="py-3 pr-4">
                  <Badge variant={s.reviewed ? 'success' : 'warning'}>
                    {s.reviewed ? 'Reviewed' : 'Pending'}
                  </Badge>
                </td>
                <td className="py-3">
                  <Button variant="outline" size="sm" onClick={() => setSelected(s)}>Review</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {selected && (
        <SubmissionReviewModal
          submission={selected}
          onClose={() => setSelected(null)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}
