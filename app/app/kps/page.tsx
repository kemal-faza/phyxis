'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { KpsPassportView } from '@/features/kps/components/KpsPassportView'
import { KpsReviewTable } from '@/features/kps/components/KpsReviewTable'
import { MOCK_PASSPORT } from '@/features/kps/data/mockPassport'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function KpsPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  const title = role === 'praktikan' ? 'KPS Passport' : 'Rekap KPS Praktikan'
  usePageTitle(title)

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">{title}</h1>
        <p className="mt-1 text-body text-muted">
          {role === 'praktikan'
            ? 'Science Process Skills tracking across every practicum.'
            : 'Kelola dan review pencapaian KPS praktikan.'}
        </p>
      </div>

      {role === 'praktikan' ? (
        <KpsPassportView passport={MOCK_PASSPORT} />
      ) : (
        <KpsReviewTable readOnly={role === 'dosen'} />
      )}
    </div>
  )
}
