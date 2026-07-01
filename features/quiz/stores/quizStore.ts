import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { QuizResult, QuizState } from '@/features/quiz/types'

interface QuizStore extends QuizState {
  saveResult: (result: QuizResult) => void
  clearResults: () => void
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      results: [],
      saveResult: (result) =>
        set((s) => ({
          results: [...s.results.filter((r) => r.questionId !== result.questionId), result],
        })),
      clearResults: () => set({ results: [] }),
    }),
    { name: 'phyxis-quiz' }
  )
)
