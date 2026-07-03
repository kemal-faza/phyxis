'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { AssessmentTaker } from '@/features/quiz/components/AssessmentTaker'
import { AssessmentWorkspace } from '@/features/quiz/components/AssessmentWorkspace'
import { QUESTIONS } from '@/features/quiz/data/questions'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function AssessmentPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'pre-test' | 'post-test'>('pre-test')

  usePageTitle('AI Assessment')

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  const isPraktikan = role === 'praktikan'
  const questions = QUESTIONS.filter((q) => q.type === activeTab)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">AI Assessment</h1>
        <p className="mt-1 text-body text-muted">
          {isPraktikan
            ? 'Kerjakan pre-test dan post-test untuk mengukur pemahaman konsep.'
            : 'Review dan konfirmasi penilaian essay praktikan.'}
        </p>
      </div>

      {isPraktikan ? (
        <>
          <div className="flex gap-2">
            {(['pre-test', 'post-test'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 text-body font-medium ${
                  activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-surface text-muted'
                }`}
              >
                {tab === 'pre-test' ? 'Pre-test' : 'Post-test'}
              </button>
            ))}
          </div>
          <AssessmentTaker questions={questions} title={activeTab === 'pre-test' ? 'Pre-test' : 'Post-test'} />
        </>
      ) : (
        <AssessmentWorkspace />
      )}
    </div>
  )
}
