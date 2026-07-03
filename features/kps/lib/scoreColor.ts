export function scoreColorClass(score: number): string {
  if (score >= 80) return 'bg-primary'
  if (score >= 70) return 'bg-warning'
  return 'bg-error'
}

export function deriveStatus(score: number, threshold = 70): 'lulus' | 'belum-lulus' {
  return score >= threshold ? 'lulus' : 'belum-lulus'
}

export function calculateOverallScore(skills: { score: number }[]): number {
  if (skills.length === 0) return 0
  return Math.round(skills.reduce((sum, s) => sum + s.score, 0) / skills.length)
}
