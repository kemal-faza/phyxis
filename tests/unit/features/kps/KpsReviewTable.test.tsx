import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { KpsReviewTable } from '@/features/kps/components/KpsReviewTable'

vi.mock('@/features/kps/stores/kpsStore', () => ({
  useKpsStore: (selector: (s: unknown) => unknown) => {
    const state = {
      profiles: [
        { nama: 'Budi', nim: '001', modules: [{ moduleId: 'M-1', moduleName: 'GP', passport: { overallScore: 80, skillsPassed: 7, totalSkills: 8, skills: [] } }] },
      ],
      moduleDefs: [{ id: 'M-1', name: 'Pegas' }],
      setScore: () => {},
      setNote: () => {},
    }
    return selector(state)
  },
}))

describe('KpsReviewTable', () => {
  it('renders profile name and nilai button', () => {
    render(<KpsReviewTable />)
    // Budi appears in both mobile card and desktop table
    expect(screen.getAllByText('Budi').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Nilai').length).toBeGreaterThanOrEqual(1)
  })
})
