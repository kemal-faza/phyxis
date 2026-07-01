'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ReportUpload } from '@/features/report/components/ReportUpload'
import { ReportReviewTable } from '@/features/report/components/ReportReviewTable'

const ALLOWED_ROLES: Array<string> = ['praktikan', 'asisten', 'dosen']

export default function ReportPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  /* ---------- ASISTEN / DOSEN: review laporan masuk ---------- */
  if (role === 'asisten' || role === 'dosen') {
    return (
      <div className="space-y-6">
        <h1 className="page-title">Laporan Praktikan</h1>
        <ReportReviewTable />
      </div>
    )
  }

  /* ---------- PRAKTIKAN: upload laporan ---------- */
  return (
    <div className="space-y-6">
      <h1 className="page-title">Laporan Akhir Praktikan</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="text-label-md text-on-surface-variant">MODUL AKTIF</div>
          <div className="mt-2 text-headline-md">M-4 Gerak Jatuh Bebas</div>
        </Card>
        <Card>
          <div className="text-label-md text-on-surface-variant">STATUS LAPORAN</div>
          <div className="mt-2">
            <Badge variant="warning">Belum dikumpulkan</Badge>
          </div>
        </Card>
        <Card>
          <div className="text-label-md text-on-surface-variant">DEADLINE</div>
          <div className="mt-2 text-headline-md">07 Juli 2026</div>
        </Card>
      </div>
      <ReportUpload />
    </div>
  )
}
