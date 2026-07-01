'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useKpsStore } from '@/features/kps/stores/kpsStore'

interface KPSReviewTableProps {
  canEdit: boolean
}

export function KPSReviewTable({ canEdit }: KPSReviewTableProps) {
  const indicatorDefs = useKpsStore((s) => s.indicatorDefs)
  const praktikanList = useKpsStore((s) => s.praktikanList)
  const toggleStatus = useKpsStore((s) => s.toggleStatus)

  const handleToggle = (nim: string, indicatorId: string) => {
    if (!canEdit) return
    toggleStatus(nim, indicatorId)
  }

  if (indicatorDefs.length === 0) {
    return (
      <Card>
        <h2 className="mb-4 text-headline-sm">Rekap KPS Praktikan</h2>
        <p className="text-sm text-on-surface-variant">
          Belum ada indikator KPS yang ditambahkan.
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="mb-4 text-headline-sm">Rekap KPS Praktikan</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-on-surface-variant">
              <th className="pb-2 pr-4 whitespace-nowrap">Nama</th>
              <th className="pb-2 pr-4 whitespace-nowrap">NIM</th>
              {indicatorDefs.map((def) => (
                <th key={def.id} className="pb-2 pr-4 whitespace-nowrap" title={def.name}>
                  {def.id.toUpperCase()}
                </th>
              ))}
              <th className="pb-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {praktikanList.map((p) => {
              const statuses = indicatorDefs.map(
                (d) => p.indicatorStatuses[d.id] ?? 'belum-lulus'
              )
              const passed = statuses.filter((s) => s === 'lulus').length
              const total = statuses.length
              return (
                <tr key={p.nim} className="border-b border-border-subtle last:border-0">
                  <td className="py-3 pr-4 whitespace-nowrap">{p.nama}</td>
                  <td className="py-3 pr-4 whitespace-nowrap text-on-surface-variant">
                    {p.nim}
                  </td>
                  {indicatorDefs.map((d) => {
                    const status = p.indicatorStatuses[d.id] ?? 'belum-lulus'
                    return (
                      <td key={d.id} className="py-3 pr-4">
                        <button
                          type="button"
                          disabled={!canEdit}
                          onClick={() => handleToggle(p.nim, d.id)}
                          className={canEdit ? 'cursor-pointer' : 'cursor-default'}
                        >
                          <Badge variant={status === 'lulus' ? 'success' : 'neutral'}>
                            {status === 'lulus' ? 'Lulus' : '-'}
                          </Badge>
                        </button>
                      </td>
                    )
                  })}
                  <td className="py-3 whitespace-nowrap">
                    <span className="text-on-surface-variant">
                      {passed}/{total}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
