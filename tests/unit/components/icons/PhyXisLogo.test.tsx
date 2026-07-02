import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PhyXisLogo } from '@/components/icons/PhyXisLogo'

describe('PhyXisLogo', () => {
  it('renders svg atom mark', () => {
    const { container } = render(<PhyXisLogo />)
    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
    expect(svg?.querySelectorAll('path').length).toBeGreaterThanOrEqual(3)
  })
})
