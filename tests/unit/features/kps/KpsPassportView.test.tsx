import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { KpsPassportView } from '@/features/kps/components/KpsPassportView'

const MODULES = [{
  moduleId: 'M-1',
  moduleName: 'Pegas',
  passport: {
    overallScore: 77,
    skillsPassed: 6,
    totalSkills: 8,
    badges: [{ id: 'b1', name: 'Observer', level: 'bronze' as const, unlockedAt: '2026-07-01' }],
    skills: [{ id: 'obs', name: 'Observation', score: 92, threshold: 70, note: 'Baik' }],
  },
}]

const MODULE_DEFS = [{ id: 'M-1', name: 'Pegas' }]

describe('KpsPassportView', () => {
  it('renders passport stats and radar', () => {
    render(<KpsPassportView modules={MODULES} moduleDefs={MODULE_DEFS} />)
    expect(screen.getByText('OVERALL KPS')).toBeTruthy()
    expect(screen.getByText('Radar Map')).toBeTruthy()
  })
})
