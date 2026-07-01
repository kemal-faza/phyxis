import { Card } from '@/components/ui/Card'
import { MONITORING_DATA } from '@/features/monitoring/data/mockMonitoring'

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60)
  return `${m} menit`
}

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-headline-lg">Monitoring Fitur</h1>
      <Card>
        <h2 className="mb-4 text-headline-sm">Aktivitas Fitur (anonim, sukarela)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border-subtle text-on-surface-variant">
                <th className="pb-2">Fitur</th>
                <th className="pb-2">Jumlah Pembukaan</th>
                <th className="pb-2">Rata-rata Durasi</th>
              </tr>
            </thead>
            <tbody>
              {MONITORING_DATA.map((row) => (
                <tr key={row.feature} className="border-b border-border-subtle last:border-0">
                  <td className="py-3">{row.feature}</td>
                  <td className="py-3">{row.opens}</td>
                  <td className="py-3">{formatDuration(row.avgDurationSeconds)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
