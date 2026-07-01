'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const MOCK_REVIEW = [
  { nama: 'Budi Santoso', modul: 'M-4', submitted: true, tanggal: '30 Jun 2026' },
  { nama: 'Ani Rahmawati', modul: 'M-4', submitted: true, tanggal: '28 Jun 2026' },
  { nama: 'Citra Dewi', modul: 'M-4', submitted: false, tanggal: '-' },
  { nama: 'Dedi Prasetyo', modul: 'M-4', submitted: false, tanggal: '-' },
  { nama: 'Eka Putri', modul: 'M-4', submitted: true, tanggal: '01 Jul 2026' },
]

export function ReportReviewTable() {
  return (
    <div className="space-y-4">
      <h2 className="text-headline-sm">
        Laporan Praktikan &mdash; M-4 Gerak Jatuh Bebas
      </h2>

      {/* Mobile: Card list */}
      <div className="space-y-3 md:hidden">
        {MOCK_REVIEW.map((row) => (
          <Card key={row.nama} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-body-lg font-semibold">{row.nama}</span>
              <Badge variant={row.submitted ? 'success' : 'warning'}>
                {row.submitted ? 'Terkumpul' : 'Belum dikumpulkan'}
              </Badge>
            </div>
            <div className="border-t border-border-subtle" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-label-md text-on-surface-variant">MODUL</div>
                <div className="mt-1 text-headline-sm font-semibold">{row.modul}</div>
              </div>
              <div>
                <div className="text-label-md text-on-surface-variant">TANGGAL</div>
                <div className="mt-1 text-headline-sm font-semibold">{row.tanggal}</div>
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
              <th className="pb-2 pr-4">Modul</th>
              <th className="pb-2 pr-4">Tanggal</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REVIEW.map((row) => (
              <tr key={row.nama} className="border-b border-border-subtle last:border-0">
                <td className="py-3 pr-4">{row.nama}</td>
                <td className="py-3 pr-4">{row.modul}</td>
                <td className="py-3 pr-4">{row.tanggal}</td>
                <td className="py-3">
                  <Badge variant={row.submitted ? 'success' : 'warning'}>
                    {row.submitted ? 'Terkumpul' : 'Belum dikumpulkan'}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
