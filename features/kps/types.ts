export interface KpsSkill {
  id: string
  name: string
  score: number
  threshold: number
  note: string
}

export interface KpsBadge {
  id: string
  name: string
  level: 'bronze' | 'silver' | 'gold'
  unlockedAt?: string
}

export interface KpsPassport {
  overallScore: number
  skillsPassed: number
  totalSkills: number
  badges: KpsBadge[]
  skills: KpsSkill[]
}

export interface PraktikanKpsProfile {
  nama: string
  nim: string
  passport: KpsPassport
}

// Keep existing types for backward compatibility
export interface KpsIndicator {
  id: string
  name: string
  status: 'lulus' | 'belum-lulus'
}
