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
    <Card>
      <h2 className="mb-4 text-headline-sm">Laporan Praktikan &mdash; M-4 Gerak Jatuh Bebas</h2>
      <div className="overflow-x-auto">
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
      </div>
    </Card>
  )
}
