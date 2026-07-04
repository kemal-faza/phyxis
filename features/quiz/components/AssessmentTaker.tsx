'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { QuizQuestion } from '@/features/quiz/types'

interface AssessmentTakerProps {
  questions: QuizQuestion[]
  title: string
}

export function AssessmentTaker({ questions, title }: AssessmentTakerProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <Card className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-headline-sm">{title}</h2>
        {submitted && <Badge variant="success">{title} sudah dikerjakan</Badge>}
      </div>

      {questions.map((q, index) => (
        <div key={q.id} className="space-y-2">
          <div className="font-medium">
            {index + 1}. {q.question}
          </div>
          <textarea
            className="min-h-[100px] w-full rounded-lg border border-border bg-card p-3 text-body focus:border-primary focus:outline-none"
            value={answers[q.id] ?? ''}
            onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
            disabled={submitted}
            placeholder="Tulis jawabanmu di sini..."
          />
        </div>
      ))}

      {!submitted && <Button className="w-full sm:w-auto" onClick={handleSubmit}>Kirim Jawaban</Button>}
    </Card>
  )
}
