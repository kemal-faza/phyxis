import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardModulesProgress } from '@/features/dashboard/components/DashboardModulesProgress'

describe('DashboardModulesProgress', () => {
  it('renders modules progress list', () => {
    render(<DashboardModulesProgress />)
    expect(screen.getByText('Modules in progress')).toBeTruthy()
    expect(screen.getByText('M-4 — Gerak Jatuh Bebas')).toBeTruthy()
  })
})
