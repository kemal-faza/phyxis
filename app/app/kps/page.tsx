'use client'

import { Card } from '@/components/ui/Card'
import { usePageTitle } from '@/components/layout/PageTitleContext'

export default function KpsPage() {
  usePageTitle('KPS Passport')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">KPS Passport</h1>
        <p className="mt-1 text-body text-muted">Science process skills tracking and passport.</p>
      </div>
      <Card className="flex h-64 items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-headline-sm text-foreground">Coming soon</div>
          <p className="mt-2 text-body text-muted">Full KPS Passport implementation is planned for the next iteration.</p>
        </div>
      </Card>
    </div>
  )
}
