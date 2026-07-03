import { describe, it, expect } from 'vitest'
import { deriveStatus, calculateOverallScore } from '@/features/kps/lib/scoreColor'

const MOCK_SKILLS_FOR_TEST = [
  { id: 'obs', name: 'Observation', score: 92, threshold: 70, note: '' },
  { id: 'cls', name: 'Classification', score: 84, threshold: 70, note: '' },
  { id: 'mes', name: 'Measurement', score: 88, threshold: 70, note: '' },
  { id: 'pre', name: 'Prediction', score: 76, threshold: 70, note: '' },
  { id: 'hyp', name: 'Hypothesis', score: 68, threshold: 70, note: '' },
  { id: 'exp', name: 'Experiment', score: 81, threshold: 70, note: '' },
  { id: 'int', name: 'Interpretation', score: 72, threshold: 70, note: '' },
  { id: 'com', name: 'Communication', score: 58, threshold: 70, note: '' },
]

describe('KPS helpers', () => {
  it('derives lulus for score >= threshold', () => {
    expect(deriveStatus(75)).toBe('lulus')
  })

  it('derives belum-lulus for score < threshold', () => {
    expect(deriveStatus(65)).toBe('belum-lulus')
  })

  it('calculates overall score as average', () => {
    const score = calculateOverallScore(MOCK_SKILLS_FOR_TEST)
    expect(score).toBe(77)
  })
})
