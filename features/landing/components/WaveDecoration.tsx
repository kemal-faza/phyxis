import { cn } from '@/lib/utils'

interface WaveDecorationProps {
  className?: string
}

export function WaveDecoration({ className }: WaveDecorationProps) {
  return (
    <div className={cn('pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden', className)}>
      <svg
        viewBox="0 0 505 96"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3264f2" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3264f2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,68 C64,42 128,16 192,34 C256,52 320,68 384,34 C448,0 480,16 505,24 L505,96 L0,96 Z"
          fill="url(#wave-gradient)"
        />
        <path
          d="M0,40 C64,20 128,0 192,20 C256,40 320,50 384,40 C448,30 480,40 505,44 L505,96 L0,96 Z"
          fill="url(#wave-gradient)"
          opacity="0.4"
        />
      </svg>
    </div>
  )
}
