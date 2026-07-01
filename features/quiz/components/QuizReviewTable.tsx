'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const MOCK_REVIEW = [
  { nama: 'Budi Santoso', preTest: 75, postTest: 90, status: 'lulus' as const },
  { nama: 'Ani Rahmawati', preTest: 60, postTest: 85, status: 'lulus' as const },
  { nama: 'Citra Dewi', preTest: 40, postTest: 55, status: 'perlu-perbaikan' as const },
  { nama: 'Dedi Prasetyo', preTest: 0, postTest: 0, status: 'belum-mengerjakan' as const },
  { nama: 'Eka Putri', preTest: 80, postTest: 95, status: 'lulus' as const },
]

export function QuizReviewTable() {
  return (
    <Card>
      <h2 className="mb-4 text-headline-sm">Hasil Quiz Praktikan</h2>
      <div className="overflow-x-auto">
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
                <td className="py-3">
                  <Badge
                    variant={
                      row.status === 'lulus'
                        ? 'success'
                        : row.status === 'perlu-perbaikan'
                          ? 'warning'
                          : 'neutral'
                    }
                  >
                    {row.status === 'lulus'
                      ? 'Lulus'
                      : row.status === 'perlu-perbaikan'
                        ? 'Perlu Perbaikan'
                        : 'Belum Mengerjakan'}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
