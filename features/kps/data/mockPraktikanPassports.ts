import { PraktikanKpsProfile } from '@/features/kps/types'
import { MOCK_PASSPORT } from './mockPassport'

export const MOCK_PRAKTIKAN_PROFILES: PraktikanKpsProfile[] = [
  { nama: 'Budi Santoso', nim: '230101001', passport: MOCK_PASSPORT },
  { nama: 'Ani Rahmawati', nim: '230101002', passport: {
    ...MOCK_PASSPORT,
    overallScore: 85,
    skillsPassed: 7,
    skills: MOCK_PASSPORT.skills.map(s => ({ ...s, score: Math.min(100, s.score + 8) })),
  }},
  { nama: 'Citra Dewi', nim: '230101003', passport: {
    ...MOCK_PASSPORT,
    overallScore: 62,
    skillsPassed: 4,
    skills: MOCK_PASSPORT.skills.map(s => ({ ...s, score: Math.max(0, s.score - 15) })),
  }},
]
