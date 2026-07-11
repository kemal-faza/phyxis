import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardLiveExperiment } from '@/features/dashboard/components/DashboardLiveExperiment'

describe('DashboardLiveExperiment', () => {
  it('renders live experiment card and resume button', () => {
    render(<DashboardLiveExperiment />)
    expect(screen.getByText('Live experiment')).toBeTruthy()
    expect(screen.getByText('Pesawat Atwood — Sesi 03')).toBeTruthy()
    expect(screen.getByText('Resume simulation')).toBeTruthy()
  })

  it('does not render telemetry metrics', () => {
    render(<DashboardLiveExperiment />)
    expect(screen.queryByText('Temperature')).toBeNull()
    expect(screen.queryByText('Humidity')).toBeNull()
    expect(screen.queryByText('CO₂')).toBeNull()
    expect(screen.queryByText('Power')).toBeNull()
  })
})
