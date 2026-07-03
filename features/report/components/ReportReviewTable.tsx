'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const MODULS = ['M-1', 'M-2', 'M-3', 'M-4']

const MOCK_REVIEW = [
  { nama: 'Budi Santoso',  nim: '230101001', modul: 'M-1', submitted: true,  tanggal: '15 Jun 2026' },
  { nama: 'Budi Santoso',  nim: '230101001', modul: 'M-2', submitted: true,  tanggal: '22 Jun 2026' },
  { nama: 'Budi Santoso',  nim: '230101001', modul: 'M-3', submitted: false, tanggal: '-' },
  { nama: 'Budi Santoso',  nim: '230101001', modul: 'M-4', submitted: true,  tanggal: '30 Jun 2026' },
  { nama: 'Ani Rahmawati', nim: '230101002', modul: 'M-1', submitted: true,  tanggal: '14 Jun 2026' },
  { nama: 'Ani Rahmawati', nim: '230101002', modul: 'M-2', submitted: false, tanggal: '-' },
  { nama: 'Ani Rahmawati', nim: '230101002', modul: 'M-3', submitted: true,  tanggal: '25 Jun 2026' },
  { nama: 'Ani Rahmawati', nim: '230101002', modul: 'M-4', submitted: true,  tanggal: '28 Jun 2026' },
  { nama: 'Citra Dewi',   nim: '230101003', modul: 'M-1', submitted: false, tanggal: '-' },
  { nama: 'Citra Dewi',   nim: '230101003', modul: 'M-2', submitted: true,  tanggal: '20 Jun 2026' },
  { nama: 'Citra Dewi',   nim: '230101003', modul: 'M-3', submitted: false, tanggal: '-' },
  { nama: 'Citra Dewi',   nim: '230101003', modul: 'M-4', submitted: false, tanggal: '-' },
  { nama: 'Dedi Prasetyo', nim: '230101004', modul: 'M-1', submitted: true,  tanggal: '13 Jun 2026' },
  { nama: 'Dedi Prasetyo', nim: '230101004', modul: 'M-2', submitted: true,  tanggal: '21 Jun 2026' },
  { nama: 'Dedi Prasetyo', nim: '230101004', modul: 'M-3', submitted: true,  tanggal: '26 Jun 2026' },
  { nama: 'Dedi Prasetyo', nim: '230101004', modul: 'M-4', submitted: false, tanggal: '-' },
  { nama: 'Eka Putri',    nim: '230101005', modul: 'M-1', submitted: true,  tanggal: '16 Jun 2026' },
  { nama: 'Eka Putri',    nim: '230101005', modul: 'M-2', submitted: false, tanggal: '-' },
  { nama: 'Eka Putri',    nim: '230101005', modul: 'M-3', submitted: true,  tanggal: '27 Jun 2026' },
  { nama: 'Eka Putri',    nim: '230101005', modul: 'M-4', submitted: true,  tanggal: '01 Jul 2026' },
]

export function ReportReviewTable() {
  const [selectedModul, setSelectedModul] = useState('M-4')
  const [selectedStatus, setSelectedStatus] = useState('semua')

  const filtered = MOCK_REVIEW.filter((r) => {
    if (r.modul !== selectedModul) return false
    if (selectedStatus === 'terkumpul' && !r.submitted) return false
    if (selectedStatus === 'belum' && r.submitted) return false
    return true
  })

  const total = filtered.length
  const submitted = filtered.filter((r) => r.submitted).length
  const notSubmitted = total - submitted

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
          <div className="text-headline-md font-bold text-warning">{notSubmitted}</div>
        </Card>
      </div>

      <Card className="flex flex-wrap items-center gap-3">
        <Select value={selectedModul} onValueChange={setSelectedModul}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {MODULS.map((m) => (
              <SelectItem key={m} value={m}>{m}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full md:w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="semua">Semua status</SelectItem>
            <SelectItem value="terkumpul">Terkumpul</SelectItem>
            <SelectItem value="belum">Belum dikumpulkan</SelectItem>
          </SelectContent>
        </Select>
      </Card>

      <div className="space-y-3 md:hidden">
        {filtered.map((row) => (
          <Card key={`${row.nim}-${row.modul}`} className="space-y-3">
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
            {filtered.map((row) => (
              <tr key={`${row.nim}-${row.modul}`} className="border-b border-border last:border-0">
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
