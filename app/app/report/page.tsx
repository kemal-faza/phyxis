'use client'

import { Card } from '@/components/ui/Card'
import { usePageTitle } from '@/components/layout/PageTitleContext'

export default function ReportPage() {
  usePageTitle('Report')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Laporan Akhir</h1>
        <p className="mt-1 text-body text-muted">Submit and review final experiment reports.</p>
      </div>
      <Card className="flex h-64 items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-headline-sm text-foreground">Coming soon</div>
          <p className="mt-2 text-body text-muted">Full report implementation is planned for the next iteration.</p>
        </div>
      </Card>
    </div>
  )
}
