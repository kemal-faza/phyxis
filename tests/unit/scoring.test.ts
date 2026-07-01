import { describe, it, expect } from 'vitest'
import { scoreAnswer } from '@/features/quiz/lib/scoring'

describe('scoreAnswer', () => {
  it('returns 100 for exact match', () => {
    expect(scoreAnswer('gaya gravitasi', 'gaya gravitasi')).toBe(100)
  })

  it('returns partial score for partial keyword match', () => {
    expect(scoreAnswer('gravitasi bumi', 'gaya gravitasi bumi')).toBeGreaterThan(0)
    expect(scoreAnswer('gravitasi bumi', 'gaya gravitasi bumi')).toBeLessThan(100)
  })

  it('returns 0 for no match', () => {
    expect(scoreAnswer('tidak tahu', 'gaya gravitasi')).toBe(0)
  })
})
