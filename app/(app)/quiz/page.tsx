import { QuizForm } from '@/features/quiz/components/QuizForm'
import { QuizResult } from '@/features/quiz/components/QuizResult'
import { PRE_TEST_QUESTIONS, POST_TEST_QUESTIONS } from '@/features/quiz/data/questions'

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-headline-lg">Pre-test & Post-test</h1>
      <QuizForm questions={PRE_TEST_QUESTIONS} title="Pre-test" />
      <QuizForm questions={POST_TEST_QUESTIONS} title="Post-test" />
      <QuizResult />
    </div>
  )
}
