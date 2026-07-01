import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { KpsIndicator } from '@/features/kps/data/mockKps'

export function KPSPassport({ indicators }: { indicators: KpsIndicator[] }) {
  return (
    <Card>
      <h2 className="mb-4 text-headline-sm">KPS Passport</h2>
      <div className="space-y-2">
        {indicators.map((indicator) => (
          <div
            key={indicator.id}
            className="flex items-center justify-between rounded border border-border-subtle bg-surface-container p-3"
          >
            <span className="text-sm">{indicator.name}</span>
            <Badge variant={indicator.status === 'lulus' ? 'success' : 'neutral'}>
              {indicator.status === 'lulus' ? 'Lulus' : 'Belum Lulus'}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
