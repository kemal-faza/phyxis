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

export function ReviewTable() {
  return (
    <Card>
      <h2 className="mb-4 text-headline-sm">Hasil Simulator Praktikan &mdash; M-4 Gerak Jatuh Bebas</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-on-surface-variant">
              <th className="pb-2 pr-4">Nama</th>
              <th className="pb-2 pr-4">Status</th>
              <th className="pb-2 pr-4">Total Salah</th>
              <th className="pb-2">Rata-rata Waktu</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REVIEW.map((row) => (
              <tr key={row.nama} className="border-b border-border-subtle last:border-0">
                <td className="py-3 pr-4">{row.nama}</td>
                <td className="py-3 pr-4">
                  <Badge
                    variant={
                      row.status === 'completed'
                        ? 'success'
                        : row.status === 'in-progress'
                          ? 'warning'
                          : 'neutral'
                    }
                  >
                    {row.status === 'completed'
                      ? 'Selesai'
                      : row.status === 'in-progress'
                        ? 'Berjalan'
                        : 'Belum mulai'}
                  </Badge>
                </td>
                <td className="py-3 pr-4">{row.errors}</td>
                <td className="py-3">{row.avgTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
