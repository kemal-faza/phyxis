import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from '@/components/ui/Badge'

describe('Badge', () => {
  it('renders success variant with new tokens', () => {
    render(<Badge variant="success">Done</Badge>)
    const badge = screen.getByText('Done')
    expect(badge.className).toContain('bg-success/15')
    expect(badge.className).toContain('text-success')
  })
})
