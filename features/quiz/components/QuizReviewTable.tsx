'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

type QuizStatus = 'lulus' | 'perlu-perbaikan' | 'belum-mengerjakan'

const MOCK_REVIEW: { nama: string; preTest: number; postTest: number; status: QuizStatus }[] = [
  { nama: 'Budi Santoso', preTest: 75, postTest: 90, status: 'lulus' },
  { nama: 'Ani Rahmawati', preTest: 60, postTest: 85, status: 'lulus' },
  { nama: 'Citra Dewi', preTest: 40, postTest: 55, status: 'perlu-perbaikan' },
  { nama: 'Dedi Prasetyo', preTest: 0, postTest: 0, status: 'belum-mengerjakan' },
  { nama: 'Eka Putri', preTest: 80, postTest: 95, status: 'lulus' },
]

function statusBadge(status: QuizStatus) {
  const variant = status === 'lulus' ? 'success' : status === 'perlu-perbaikan' ? 'warning' : 'neutral'
  const label = status === 'lulus' ? 'Lulus' : status === 'perlu-perbaikan' ? 'Perlu Perbaikan' : 'Belum Mengerjakan'
  return <Badge variant={variant}>{label}</Badge>
}

export function QuizReviewTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-headline-sm">Hasil Quiz Praktikan</h2>

      {/* Mobile: Card list */}
      <div className="space-y-3 md:hidden">
        {MOCK_REVIEW.map((row) => (
          <Card key={row.nama} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-body-lg font-semibold">{row.nama}</span>
              {statusBadge(row.status)}
            </div>
            <div className="border-t border-border-subtle" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-label-md text-on-surface-variant">PRE-TEST</div>
                <div className="mt-1 text-headline-sm font-semibold">{row.preTest}</div>
              </div>
              <div>
                <div className="text-label-md text-on-surface-variant">POST-TEST</div>
                <div className="mt-1 text-headline-sm font-semibold">{row.postTest}</div>
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
              <th className="pb-2 pr-4">Nama</th>
              <th className="pb-2 pr-4">Pre-test</th>
              <th className="pb-2 pr-4">Post-test</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REVIEW.map((row) => (
              <tr key={row.nama} className="border-b border-border-subtle last:border-0">
                <td className="py-3 pr-4">{row.nama}</td>
                <td className="py-3 pr-4">{row.preTest}</td>
                <td className="py-3 pr-4">{row.postTest}</td>
                <td className="py-3">{statusBadge(row.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
