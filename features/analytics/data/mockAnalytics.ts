import { CohortAnalytics } from '@/features/analytics/types'

export const MOCK_ANALYTICS: CohortAnalytics = {
  enrolled: 128,
  activeStudents: 100,
  weeklyGrowth: 4.6,
  avgHoursPerWeek: 4.2,
  conceptMastery: [
    { topic: 'Mekanika', score: 88 },
    { topic: 'Optika', score: 76 },
    { topic: 'Listrik', score: 84 },
    { topic: 'Termodinamika', score: 71 },
  ],
}
