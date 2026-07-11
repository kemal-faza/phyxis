'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { useKpsStore } from '@/features/kps/stores/kpsStore'
import { KpsPassportView } from '@/features/kps/components/KpsPassportView'
import { KpsReviewTable } from '@/features/kps/components/KpsReviewTable'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen', 'admin']

export default function KpsPage() {
  const role = useAuthStore((s) => s.role)
  const isHydrated = useAuthStore((s) => s.isHydrated)
  const router = useRouter()
  const profiles = useKpsStore((s) => s.profiles)
  const moduleDefs = useKpsStore((s) => s.moduleDefs)

  const title = role === 'praktikan' ? 'KPS Passport' : 'Rekap KPS Praktikan'
  usePageTitle(title)

  useEffect(() => {
    if (!isHydrated) return
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router, isHydrated])

  if (!isHydrated) return null
  if (!role || !ALLOWED_ROLES.includes(role)) return null

  // Mock: praktikan melihat data Budi Santoso (profile pertama)
  const praktikanProfile = profiles[0]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">{title}</h1>
        <p className="mt-1 text-body text-muted">
          {role === 'praktikan'
            ? 'Science Process Skills tracking across every practicum.'
            : 'Kelola dan review pencapaian KPS praktikan per modul.'}
        </p>
      </div>

      {role === 'praktikan' ? (
        <KpsPassportView modules={praktikanProfile?.modules ?? []} moduleDefs={moduleDefs} />
      ) : (
        <KpsReviewTable readOnly={role === 'dosen'} />
      )}
    </div>
  )
}
