'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { EXPERIMENTS } from '@/features/simulator/data/experiments'

type ReviewStatus = 'completed' | 'in-progress' | 'not-started'

interface ReviewRow {
  nama: string
  status: ReviewStatus
  errors: number
  avgTime: string
}

const MOCK_REVIEW_ALL: Record<string, ReviewRow[]> = {
  'M-1': [
    { nama: 'Budi Santoso', status: 'completed', errors: 1, avgTime: '5s' },
    { nama: 'Ani Rahmawati', status: 'completed', errors: 0, avgTime: '4s' },
    { nama: 'Citra Dewi', status: 'completed', errors: 2, avgTime: '7s' },
    { nama: 'Dedi Prasetyo', status: 'completed', errors: 1, avgTime: '6s' },
    { nama: 'Eka Putri', status: 'completed', errors: 0, avgTime: '3s' },
  ],
  'M-2': [
    { nama: 'Budi Santoso', status: 'completed', errors: 2, avgTime: '8s' },
    { nama: 'Ani Rahmawati', status: 'completed', errors: 1, avgTime: '6s' },
    { nama: 'Citra Dewi', status: 'in-progress', errors: 3, avgTime: '-' },
    { nama: 'Dedi Prasetyo', status: 'completed', errors: 0, avgTime: '5s' },
    { nama: 'Eka Putri', status: 'not-started', errors: 0, avgTime: '-' },
  ],
  'M-4': [
    { nama: 'Budi Santoso', status: 'completed', errors: 3, avgTime: '12s' },
    { nama: 'Ani Rahmawati', status: 'completed', errors: 1, avgTime: '8s' },
    { nama: 'Citra Dewi', status: 'in-progress', errors: 5, avgTime: '-' },
    { nama: 'Dedi Prasetyo', status: 'not-started', errors: 0, avgTime: '-' },
    { nama: 'Eka Putri', status: 'completed', errors: 0, avgTime: '6s' },
  ],
  'M-5': [
    { nama: 'Budi Santoso', status: 'completed', errors: 2, avgTime: '10s' },
    { nama: 'Ani Rahmawati', status: 'completed', errors: 0, avgTime: '7s' },
    { nama: 'Citra Dewi', status: 'completed', errors: 3, avgTime: '11s' },
    { nama: 'Dedi Prasetyo', status: 'in-progress', errors: 1, avgTime: '-' },
    { nama: 'Eka Putri', status: 'completed', errors: 1, avgTime: '9s' },
  ],
  'M-6': [
    { nama: 'Budi Santoso', status: 'completed', errors: 4, avgTime: '15s' },
    { nama: 'Ani Rahmawati', status: 'in-progress', errors: 2, avgTime: '-' },
    { nama: 'Citra Dewi', status: 'completed', errors: 1, avgTime: '8s' },
    { nama: 'Dedi Prasetyo', status: 'completed', errors: 3, avgTime: '12s' },
    { nama: 'Eka Putri', status: 'completed', errors: 0, avgTime: '5s' },
  ],
}

function statusBadge(status: ReviewStatus) {
  const variant = status === 'completed' ? 'success' : status === 'in-progress' ? 'warning' : 'neutral'
  const label = status === 'completed' ? 'Selesai' : status === 'in-progress' ? 'Berjalan' : 'Belum mulai'
  return <Badge variant={variant}>{label}</Badge>
}

export function ReviewTable() {
  const [selectedModul, setSelectedModul] = useState('M-4')

  const rows = MOCK_REVIEW_ALL[selectedModul] ?? []

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-label-sm text-muted">PILIH MODUL</label>
        <Select value={selectedModul} onValueChange={setSelectedModul}>
          <SelectTrigger className="w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {EXPERIMENTS.filter((m) => m.status !== 'locked').map((m) => (
              <SelectItem key={m.id} value={m.id}>{m.id}: {m.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <h2 className="text-headline-sm">
        Hasil Simulator Praktikan &mdash; {selectedModul}
      </h2>

      {/* Mobile: Card list */}
      <div className="space-y-3 md:hidden">
        {rows.map((row) => (
          <Card key={`${row.nama}-${selectedModul}`} className="space-y-3">
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
            {rows.map((row) => (
              <tr key={`${row.nama}-${selectedModul}`} className="border-b border-border last:border-0">
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
