'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

type ReviewStatus = 'completed' | 'in-progress' | 'not-started'

const MOCK_REVIEW: { nama: string; status: ReviewStatus; errors: number; avgTime: string }[] = [
  { nama: 'Budi Santoso', status: 'completed', errors: 3, avgTime: '12s' },
  { nama: 'Ani Rahmawati', status: 'completed', errors: 1, avgTime: '8s' },
  { nama: 'Citra Dewi', status: 'in-progress', errors: 5, avgTime: '-' },
  { nama: 'Dedi Prasetyo', status: 'not-started', errors: 0, avgTime: '-' },
  { nama: 'Eka Putri', status: 'completed', errors: 0, avgTime: '6s' },
]

function statusBadge(status: ReviewStatus) {
  const variant = status === 'completed' ? 'success' : status === 'in-progress' ? 'warning' : 'neutral'
  const label = status === 'completed' ? 'Selesai' : status === 'in-progress' ? 'Berjalan' : 'Belum mulai'
  return <Badge variant={variant}>{label}</Badge>
}

export function ReviewTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-headline-sm">
        Hasil Simulator Praktikan &mdash; M-4 Gerak Jatuh Bebas
      </h2>

      {/* Mobile: Card list */}
      <div className="space-y-3 md:hidden">
        {MOCK_REVIEW.map((row) => (
          <Card key={row.nama} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-body font-semibold text-foreground">{row.nama}</span>
              {statusBadge(row.status)}
            </div>
            <div className="border-t border-border" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-label text-muted uppercase tracking-wide">TOTAL SALAH</div>
                <div className="mt-1 font-heading text-headline-sm text-foreground">{row.errors}</div>
              </div>
              <div>
                <div className="text-label text-muted uppercase tracking-wide">RATA-RATA WAKTU</div>
                <div className="mt-1 font-heading text-headline-sm text-foreground">{row.avgTime}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tablet/Desktop: Table */}
      <Card className="hidden md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="pb-2 pr-4">Nama</th>
              <th className="pb-2 pr-4">Status</th>
              <th className="pb-2 pr-4">Total Salah</th>
              <th className="pb-2">Rata-rata Waktu</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REVIEW.map((row) => (
              <tr key={row.nama} className="border-b border-border last:border-0">
                <td className="py-3 pr-4">{row.nama}</td>
                <td className="py-3 pr-4">{statusBadge(row.status)}</td>
                <td className="py-3 pr-4">{row.errors}</td>
                <td className="py-3">{row.avgTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
