'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/Card'

export function SimulatorCanvas() {
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setWebglSupported(!!gl)
    } catch {
      setWebglSupported(false)
    }
  }, [])

  return (
    <Card className="relative flex h-72 sm:h-[400px] lg:h-[500px] items-center justify-center overflow-hidden">
      {!webglSupported && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-surface/90 p-6 text-center">
          <div>
            <div className="text-headline-sm text-error">WebGL tidak didukung</div>
            <p className="mt-2 text-sm text-on-surface-variant">
              Perangkat ini tidak dapat menampilkan animasi 3D. Kamu tetap bisa memilih langkah di panel sebelah kanan.
            </p>
          </div>
        </div>
      )}
      <div className="text-center text-on-surface-variant">
        <div className="text-headline-sm">Canvas Simulator 3D</div>
        <p className="mt-2 text-sm">Animasi GLB dari Blender akan ditampilkan di sini.</p>
      </div>
    </Card>
  )
}
