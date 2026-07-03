'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { KPSPassport } from '@/features/kps/components/KPSPassport'
import { KpsReviewTable } from '@/features/kps/components/KpsReviewTable'
import { IndicatorList } from '@/features/kps/components/IndicatorList'
import { MOCK_KPS } from '@/features/kps/data/mockKps'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen', 'admin']

export default function KpsPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  const title =
    role === 'asisten' || role === 'dosen' || role === 'admin'
      ? 'KPS Passport — Rekap Praktikan'
      : role === 'praktikan'
        ? 'KPS Passport Nilai'
        : ''
  usePageTitle(title)

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  /* ---------- ASISTEN / DOSEN / ADMIN: rekap semua praktikan ---------- */
  if (role === 'asisten' || role === 'dosen' || role === 'admin') {
    const readOnly = role !== 'dosen'
    return (
      <div className="space-y-6">
        <h1 className="page-title hidden lg:block">KPS Passport — Rekap Praktikan</h1>
        <IndicatorList canEdit={!readOnly} />
        <KpsReviewTable readOnly={readOnly} />
      </div>
    )
  }

  /* ---------- PRAKTIKAN: lihat KPS sendiri ---------- */
  return (
    <div className="space-y-6">
        <h1 className="page-title hidden lg:block">KPS Passport Nilai</h1>
      <KPSPassport indicators={MOCK_KPS} />
    </div>
  )
}
