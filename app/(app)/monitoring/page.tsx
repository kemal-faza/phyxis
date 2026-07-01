'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { Card } from '@/components/ui/Card'
import { MONITORING_DATA } from '@/features/monitoring/data/mockMonitoring'

const ALLOWED_ROLES: Array<string> = ['dosen', 'admin']

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60)
  return `${m} menit`
}

export default function MonitoringPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  usePageTitle(role === 'dosen' || role === 'admin' ? 'Monitoring Fitur' : '')

  useEffect(() => {
    if (!role || !ALLOWED_ROLES.includes(role)) router.push('/login')
  }, [role, router])

  if (!role || !ALLOWED_ROLES.includes(role)) return null

  return (
    <div className="space-y-6">
      <h1 className="page-title hidden lg:block">Monitoring Fitur</h1>
      <div className="space-y-4">
        <h2 className="text-headline-sm">Aktivitas Fitur (anonim, sukarela)</h2>

        {/* Mobile: Card list */}
        <div className="space-y-3 md:hidden">
          {MONITORING_DATA.map((row) => (
            <Card key={row.feature} className="space-y-3">
              <span className="text-body-lg font-semibold">{row.feature}</span>
              <div className="border-t border-border-subtle" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-label-md text-on-surface-variant">JUMLAH PEMBUKAAN</div>
                  <div className="mt-1 text-headline-sm font-semibold">{row.opens}</div>
                </div>
                <div>
                  <div className="text-label-md text-on-surface-variant">RATA-RATA DURASI</div>
                  <div className="mt-1 text-headline-sm font-semibold">{formatDuration(row.avgDurationSeconds)}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tablet/Desktop: Table */}
        <Card className="hidden md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle text-on-surface-variant">
                <th className="pb-2">Fitur</th>
                <th className="pb-2">Jumlah Pembukaan</th>
                <th className="pb-2">Rata-rata Durasi</th>
              </tr>
            </thead>
            <tbody>
              {MONITORING_DATA.map((row) => (
                <tr key={row.feature} className="border-b border-border-subtle last:border-0">
                  <td className="py-3">{row.feature}</td>
                  <td className="py-3">{row.opens}</td>
                  <td className="py-3">{formatDuration(row.avgDurationSeconds)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
