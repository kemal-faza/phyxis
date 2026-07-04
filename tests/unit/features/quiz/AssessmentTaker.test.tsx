import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AssessmentTaker } from '@/features/quiz/components/AssessmentTaker'

const QUESTIONS = [{ id: 'q1', question: 'Apa itu GHS?', answerKey: 'GHS adalah...', type: 'pre-test' as const }]

describe('AssessmentTaker', () => {
  it('renders question and submit button', () => {
    render(<AssessmentTaker questions={QUESTIONS} title="Pre-test" />)
    expect(screen.getByText(/Apa itu GHS/)).toBeTruthy()
    expect(screen.getByText('Kirim Jawaban')).toBeTruthy()
  })
})
