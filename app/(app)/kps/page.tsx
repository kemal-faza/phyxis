'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { KPSPassport } from '@/features/kps/components/KPSPassport'
import { MOCK_KPS } from '@/features/kps/data/mockKps'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen', 'admin']

export default function KpsPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  return (
    <div className="space-y-6">
      <h1 className="text-headline-lg">KPS Passport Nilai</h1>
      <KPSPassport indicators={MOCK_KPS} />
    </div>
  )
}
