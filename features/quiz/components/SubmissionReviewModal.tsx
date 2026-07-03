'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { QuizSubmission } from '@/features/quiz/types'

interface SubmissionReviewModalProps {
  submission: QuizSubmission
  onClose: () => void
  onConfirm: () => void
}

export function SubmissionReviewModal({ submission, onClose, onConfirm }: SubmissionReviewModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="max-h-[90vh] w-full max-w-4xl overflow-y-auto p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-headline-sm">{submission.studentName}</h2>
            <p className="text-body-sm text-muted">{submission.nim} &mdash; {submission.topic}</p>
          </div>
          <Badge variant={submission.reviewed ? 'success' : 'warning'}>
            {submission.reviewed ? 'Reviewed' : 'Pending'}
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-body font-semibold">Student Answer</h3>
            <div className="rounded-lg border border-border bg-surface p-3 text-body-sm">
              {submission.studentAnswer}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-body font-semibold">Reference Answer</h3>
            <div className="rounded-lg border border-border bg-surface p-3 text-body-sm">
              {submission.referenceAnswer}
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-body font-semibold">AI Feedback</h3>
          <p className="text-body-sm text-muted">{submission.aiFeedback}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {Object.entries(submission.criteriaScores).map(([criteria, score]) => (
            <Card key={criteria} className="space-y-1 p-3">
              <div className="text-label-sm text-muted">{criteria.toUpperCase()}</div>
              <div className="text-headline-sm font-bold">{score}</div>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-headline-md font-bold">Final: {submission.finalScore}/100</div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onClose}>Tutup</Button>
            <Button onClick={onConfirm}>Konfirmasi Nilai</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
