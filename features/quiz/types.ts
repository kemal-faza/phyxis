export interface QuizQuestion {
  id: string
  question: string
  answerKey: string
  type: 'pre-test' | 'post-test'
}

export interface QuizResult {
  questionId: string
  answer: string
  score: number
}

export interface QuizState {
  results: QuizResult[]
}

export interface QuizSubmission {
  id: string
  studentName: string
  nim: string
  topic: string
  type: 'pre-test' | 'post-test'
  studentAnswer: string
  referenceAnswer: string
  aiFeedback: string
  criteriaScores: Record<string, number>
  finalScore: number
  aiConfidence: number
  reviewed: boolean
}
