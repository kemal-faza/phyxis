import { CohortAnalytics } from '@/features/analytics/types'

export const MOCK_ANALYTICS: CohortAnalytics = {
  enrolled: 128,
  activeStudents: 100,
  weeklyGrowth: 4.6,
  avgHoursPerWeek: 4.2,
  conceptMastery: [
    { topic: 'Kinematika', score: 88 },
    { topic: 'Listrik', score: 84 },
    { topic: 'Optika', score: 76 },
    { topic: 'Termodinamika', score: 71 },
    { topic: 'Gelombang', score: 65 },
  ],
}
