'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { ReportUpload } from '@/features/report/components/ReportUpload'
import { ReportReviewTable } from '@/features/report/components/ReportReviewTable'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function ReportPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  usePageTitle('Laporan Akhir')

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Laporan Akhir</h1>
        <p className="mt-1 text-body text-muted">
          {role === 'praktikan'
            ? 'Unggah laporan akhir praktikum untuk direview asisten.'
            : 'Review dan kelola pengumpulan laporan praktikan.'}
        </p>
      </div>

      {role === 'praktikan' ? (
        <ReportUpload />
      ) : (
        <ReportReviewTable />
      )}
    </div>
  )
}
