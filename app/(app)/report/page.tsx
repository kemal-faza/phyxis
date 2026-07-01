import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ReportUpload } from '@/features/report/components/ReportUpload'

export default function ReportPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-headline-lg">Laporan Akhir Praktikan</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="text-label-md text-on-surface-variant">MODUL AKTIF</div>
          <div className="mt-2 text-headline-md">M-4 Gerak Jatuh Bebas</div>
        </Card>
        <Card>
          <div className="text-label-md text-on-surface-variant">STATUS LAPORAN</div>
          <div className="mt-2"><Badge variant="warning">Belum dikumpulkan</Badge></div>
        </Card>
        <Card>
          <div className="text-label-md text-on-surface-variant">DEADLINE</div>
          <div className="mt-2 text-headline-md">07 Juli 2026</div>
        </Card>
      </div>
      <ReportUpload />
    </div>
  )
}
