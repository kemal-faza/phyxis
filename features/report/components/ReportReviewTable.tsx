'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const MOCK_REVIEW = [
  { nama: 'Budi Santoso', nim: '230101001', modul: 'M-4', submitted: true, tanggal: '30 Jun 2026' },
  { nama: 'Ani Rahmawati', nim: '230101002', modul: 'M-4', submitted: true, tanggal: '28 Jun 2026' },
  { nama: 'Citra Dewi', nim: '230101003', modul: 'M-4', submitted: false, tanggal: '-' },
  { nama: 'Dedi Prasetyo', nim: '230101004', modul: 'M-4', submitted: false, tanggal: '-' },
  { nama: 'Eka Putri', nim: '230101005', modul: 'M-4', submitted: true, tanggal: '01 Jul 2026' },
]

export function ReportReviewTable() {
  const total = MOCK_REVIEW.length
  const submitted = MOCK_REVIEW.filter((r) => r.submitted).length

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="space-y-1">
          <div className="text-label-md text-muted">TOTAL PRAKTIKAN</div>
          <div className="text-headline-md font-bold">{total}</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">SUDAH SUBMIT</div>
          <div className="text-headline-md font-bold text-success">{submitted}</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">BELUM SUBMIT</div>
          <div className="text-headline-md font-bold text-warning">{total - submitted}</div>
        </Card>
      </div>

      <Card className="flex flex-wrap gap-3">
        <select className="rounded-lg border border-border bg-card px-3 py-2 text-body" disabled>
          <option>M-4 Gerak Jatuh Bebas</option>
        </select>
        <select className="rounded-lg border border-border bg-card px-3 py-2 text-body" disabled>
          <option>Semua status</option>
        </select>
      </Card>

      <div className="space-y-3 md:hidden">
        {MOCK_REVIEW.map((row) => (
          <Card key={row.nim} className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-body font-semibold">{row.nama}</span>
              <Badge variant={row.submitted ? 'success' : 'warning'}>
                {row.submitted ? 'Terkumpul' : 'Belum dikumpulkan'}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4 text-body-sm">
              <div>
                <div className="text-label-sm text-muted">NIM</div>
                <div className="font-medium">{row.nim}</div>
              </div>
              <div>
                <div className="text-label-sm text-muted">TANGGAL</div>
                <div className="font-medium">{row.tanggal}</div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">Lihat</Button>
          </Card>
        ))}
      </div>

      <Card className="hidden md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="pb-2 pr-4">Nama</th>
              <th className="pb-2 pr-4">NIM</th>
              <th className="pb-2 pr-4">Modul</th>
              <th className="pb-2 pr-4">Tanggal</th>
              <th className="pb-2 pr-4">Status</th>
              <th className="pb-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_REVIEW.map((row) => (
              <tr key={row.nim} className="border-b border-border last:border-0">
                <td className="py-3 pr-4">{row.nama}</td>
                <td className="py-3 pr-4 text-muted">{row.nim}</td>
                <td className="py-3 pr-4">{row.modul}</td>
                <td className="py-3 pr-4">{row.tanggal}</td>
                <td className="py-3 pr-4">
                  <Badge variant={row.submitted ? 'success' : 'warning'}>
                    {row.submitted ? 'Terkumpul' : 'Belum dikumpulkan'}
                  </Badge>
                </td>
                <td className="py-3">
                  <Button variant="outline" size="sm">Lihat</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
