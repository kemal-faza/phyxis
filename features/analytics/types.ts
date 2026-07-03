export interface ConceptMastery {
  topic: string
  score: number
}

export interface CohortAnalytics {
  enrolled: number
  activeStudents: number
  weeklyGrowth: number
  avgHoursPerWeek: number
  conceptMastery: ConceptMastery[]
}
