'use client'

import { Card } from '@/components/ui/Card'
import { usePageTitle } from '@/components/layout/PageTitleContext'

export default function AnalyticsPage() {
  usePageTitle('Analytics')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">Analytics</h1>
        <p className="mt-1 text-body text-muted">Learning activity and module usage insights.</p>
      </div>
      <Card className="flex h-64 items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-headline-sm text-foreground">Coming soon</div>
          <p className="mt-2 text-body text-muted">Full analytics implementation is planned for the next iteration.</p>
        </div>
      </Card>
    </div>
  )
}
