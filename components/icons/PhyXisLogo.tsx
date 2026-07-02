import { cn } from '@/lib/utils'

interface PhyXisLogoProps {
  className?: string
  size?: number
}

export function PhyXisLogo({ className, size = 20 }: PhyXisLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-label="PhyXis logo"
    >
      <path
        d="M40.0003 43.3337C41.8413 43.3337 43.3337 41.8413 43.3337 40.0003C43.3337 38.1594 41.8413 36.667 40.0003 36.667C38.1594 36.667 36.667 38.1594 36.667 40.0003C36.667 41.8413 38.1594 43.3337 40.0003 43.3337Z"
        stroke="currentColor"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M67.333 67.333C74.133 60.5663 67.3996 42.7996 52.333 27.6663C37.1996 12.5996 19.433 5.86629 12.6663 12.6663C5.86629 19.433 12.5996 37.1996 27.6663 52.333C42.7996 67.3996 60.5663 74.133 67.333 67.333Z"
        stroke="currentColor"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.333 52.333C67.3996 37.1996 74.133 19.433 67.333 12.6663C60.5663 5.86629 42.7996 12.5996 27.6663 27.6663C12.5996 42.7996 5.86629 60.5663 12.6663 67.333C19.433 74.133 37.1996 67.3996 52.333 52.333Z"
        stroke="currentColor"
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
