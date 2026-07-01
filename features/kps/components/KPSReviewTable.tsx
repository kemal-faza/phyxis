'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { INDICATOR_DEFINITIONS, MOCK_PRAKTIKAN_KPS } from '@/features/kps/data/mockKps'

export function KPSReviewTable() {
  return (
    <Card>
      <h2 className="mb-4 text-headline-sm">Rekap KPS Praktikan</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border-subtle text-on-surface-variant">
              <th className="pb-2 pr-4 whitespace-nowrap">Nama</th>
              <th className="pb-2 pr-4 whitespace-nowrap">NIM</th>
              {INDICATOR_DEFINITIONS.map((def) => (
                <th key={def.id} className="pb-2 pr-4 whitespace-nowrap" title={def.name}>
                  {def.id.toUpperCase()}
                </th>
              ))}
              <th className="pb-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PRAKTIKAN_KPS.map((p) => {
              const passed = p.indicators.filter((i) => i.status === 'lulus').length
              const total = p.indicators.length
              return (
                <tr key={p.nim} className="border-b border-border-subtle last:border-0">
                  <td className="py-3 pr-4 whitespace-nowrap">{p.nama}</td>
                  <td className="py-3 pr-4 whitespace-nowrap text-on-surface-variant">
                    {p.nim}
                  </td>
                  {p.indicators.map((ind) => (
                    <td key={ind.id} className="py-3 pr-4">
                      <Badge variant={ind.status === 'lulus' ? 'success' : 'neutral'}>
                        {ind.status === 'lulus' ? 'Lulus' : '-'}
                      </Badge>
                    </td>
                  ))}
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
