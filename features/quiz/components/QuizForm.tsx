'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { QuizQuestion } from '@/features/quiz/types'
import { scoreAnswer } from '@/features/quiz/lib/scoring'
import { useQuizStore } from '@/features/quiz/stores/quizStore'

export function QuizForm({ questions, title }: { questions: QuizQuestion[]; title: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const saveResult = useQuizStore((s) => s.saveResult)

  const handleSubmit = () => {
    questions.forEach((q) => {
      const answer = answers[q.id] ?? ''
      saveResult({ questionId: q.id, answer, score: scoreAnswer(answer, q.answerKey) })
    })
    setSubmitted(true)
  }

  return (
    <Card className="space-y-4">
      <h2 className="text-headline-sm">{title}</h2>
      {questions.map((q, index) => (
        <div key={q.id} className="space-y-2">
          <div className="font-medium">
            {index + 1}. {q.question}
          </div>
          <textarea
            className="min-h-[100px] w-full rounded border border-border-subtle bg-surface-container p-3 text-sm text-on-surface focus:border-primary focus:outline-none"
            value={answers[q.id] ?? ''}
            onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
            disabled={submitted}
            placeholder="Tulis jawabanmu di sini..."
          />
        </div>
      ))}
      {!submitted && <Button onClick={handleSubmit}>Kirim Jawaban</Button>}
    </Card>
  )
}
