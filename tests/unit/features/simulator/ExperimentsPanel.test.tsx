import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ExperimentsPanel } from '@/features/simulator/components/ExperimentsPanel'

const EXPERIMENTS = [
  { id: 'M-1', name: 'Gerak Parabola', subtitle: 'Projectile Motion', status: 'active' as const },
  { id: 'M-2', name: 'Hukum Newton', subtitle: "Newton's Laws", status: 'active' as const },
]

describe('ExperimentsPanel', () => {
  it('renders desktop sidebar list by default', () => {
    render(<ExperimentsPanel experiments={EXPERIMENTS} activeId="M-1" onSelect={() => {}} />)
    expect(screen.getAllByText('M-1').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Experiments')).toBeTruthy()
  })

  it('calls onSelect when experiment clicked', () => {
    const onSelect = vi.fn()
    render(<ExperimentsPanel experiments={EXPERIMENTS} activeId="M-1" onSelect={onSelect} />)
    fireEvent.click(screen.getByText('M-2'))
    expect(onSelect).toHaveBeenCalledWith('M-2')
  })
})
