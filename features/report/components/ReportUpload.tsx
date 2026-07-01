'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FileUpload } from '@/components/ui/FileUpload'
import { Progress } from '@/components/ui/Progress'

export function ReportUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [progress, setProgress] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleUpload = () => {
    if (!file) return
    let p = 0
    const interval = setInterval(() => {
      p += 20
      setProgress(p)
      if (p >= 100) {
        clearInterval(interval)
        setSubmitted(true)
      }
    }, 200)
  }

  return (
    <Card className="space-y-4">
      <h2 className="text-headline-sm">Pengumpulan Laporan Akhir</h2>
      <FileUpload
        value={file}
        onChange={setFile}
        accept=".pdf"
      />
      {file && (
        <div className="space-y-2">
          <Progress value={progress} />
          <Button onClick={handleUpload} disabled={progress > 0 && progress < 100}>
            {submitted ? 'Terkirim' : 'Upload'}
          </Button>
        </div>
      )}
      {submitted && (
        <div className="rounded bg-primary/10 p-3 text-sm text-primary">
          Laporan berhasil diunggah (dummy).
        </div>
      )}
    </Card>
  )
}
