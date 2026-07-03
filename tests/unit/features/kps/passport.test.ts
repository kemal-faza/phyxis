import { describe, it, expect } from 'vitest'
import { deriveStatus, calculateOverallScore } from '@/features/kps/lib/scoreColor'
import { MOCK_PASSPORT } from '@/features/kps/data/mockPassport'

describe('KPS helpers', () => {
  it('derives lulus for score >= threshold', () => {
    expect(deriveStatus(75)).toBe('lulus')
  })

  it('derives belum-lulus for score < threshold', () => {
    expect(deriveStatus(65)).toBe('belum-lulus')
  })

  it('calculates overall score as average', () => {
    const score = calculateOverallScore(MOCK_PASSPORT.skills)
    expect(score).toBe(77)
  })
})
