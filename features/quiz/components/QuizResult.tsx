'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useQuizStore } from '@/features/quiz/stores/quizStore'
import { PRE_TEST_QUESTIONS, POST_TEST_QUESTIONS } from '@/features/quiz/data/questions'

export function QuizResult() {
  const results = useQuizStore((s) => s.results)
  const allQuestions = [...PRE_TEST_QUESTIONS, ...POST_TEST_QUESTIONS]

  if (results.length === 0) return null

  const average =
    results.reduce((sum, r) => sum + r.score, 0) / (results.length || 1)

  return (
    <Card className="space-y-4">
      <h2 className="text-headline-sm">Hasil Quiz</h2>
      <div className="text-headline-md">Rata-rata: {Math.round(average)}</div>
      <div className="space-y-2">
        {results.map((result) => {
          const question = allQuestions.find((q) => q.id === result.questionId)
          return (
            <div
              key={result.questionId}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded border border-border-subtle bg-surface-container p-3"
            >
              <span className="text-sm">{question?.question ?? result.questionId}</span>
              <Badge variant={result.score >= 60 ? 'success' : 'error'}>{result.score}</Badge>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
