export interface QuizQuestion {
  id: string
  question: string
  answerKey: string
}

export interface QuizResult {
  questionId: string
  answer: string
  score: number
}

export interface QuizState {
  results: QuizResult[]
}
