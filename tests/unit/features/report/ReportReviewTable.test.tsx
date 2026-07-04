import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ReportReviewTable } from '@/features/report/components/ReportReviewTable'

describe('ReportReviewTable', () => {
  it('renders filter and review rows', () => {
    render(<ReportReviewTable />)
    expect(screen.getByText('TOTAL PRAKTIKAN')).toBeTruthy()
    // M-4 appears in the SelectTrigger and in table rows
    const modulElements = screen.getAllByText('M-4')
    expect(modulElements.length).toBeGreaterThanOrEqual(2)
  })
})
