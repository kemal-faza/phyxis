'use client'

import { Card } from '@/components/ui/Card'
import { usePageTitle } from '@/components/layout/PageTitleContext'

export default function AssessmentPage() {
  usePageTitle('AI Assessment')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="page-title">AI Assessment</h1>
        <p className="mt-1 text-body text-muted">Pre-test, post-test, and AI-assisted answer review.</p>
      </div>
      <Card className="flex h-64 items-center justify-center">
        <div className="text-center">
          <div className="font-heading text-headline-sm text-foreground">Coming soon</div>
          <p className="mt-2 text-body text-muted">Full assessment implementation is planned for the next iteration.</p>
        </div>
      </Card>
    </div>
  )
}
