'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { QuizForm } from '@/features/quiz/components/QuizForm'
import { QuizResult } from '@/features/quiz/components/QuizResult'
import { QuizReviewTable } from '@/features/quiz/components/QuizReviewTable'
import { PRE_TEST_QUESTIONS, POST_TEST_QUESTIONS } from '@/features/quiz/data/questions'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function QuizPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  const title =
    role === 'asisten' || role === 'dosen'
      ? 'Pre-test & Post-test: Review'
      : role === 'praktikan'
        ? 'Pre-test & Post-test'
        : ''
  usePageTitle(title)

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  /* ---------- ASISTEN / DOSEN: review hasil quiz ---------- */
  if (role === 'asisten' || role === 'dosen') {
    return (
      <div className="space-y-6">
        <h1 className="page-title hidden lg:block">Pre-test & Post-test: Review</h1>
        <QuizReviewTable />
      </div>
    )
  }

  /* ---------- PRAKTIKAN: quiz form ---------- */
  return (
    <div className="space-y-6">
        <h1 className="page-title hidden lg:block">Pre-test & Post-test</h1>
      <QuizForm questions={PRE_TEST_QUESTIONS} title="Pre-test" />
      <QuizForm questions={POST_TEST_QUESTIONS} title="Post-test" />
      <QuizResult />
    </div>
  )
}
