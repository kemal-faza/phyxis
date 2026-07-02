import Link from 'next/link'
import { PhyXisLogo } from '@/components/icons/PhyXisLogo'

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8 lg:px-12 xl:px-20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            <PhyXisLogo size={16} />
          </div>
          <span className="font-heading text-headline-sm font-bold text-foreground">PhyXis</span>
        </div>
        <p className="text-body-sm text-muted">Physics Experience & Intelligent System</p>
        <div className="flex gap-6 text-body-sm text-muted">
          <Link href="/login" className="hover:text-foreground">Privacy</Link>
          <Link href="/login" className="hover:text-foreground">Security</Link>
          <Link href="/login" className="hover:text-foreground">Documentation</Link>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl px-4 text-center text-label-sm text-muted-light md:px-8 lg:px-12 xl:px-20">
        &copy; {new Date().getFullYear()} PhyXis. All rights reserved.
      </div>
    </footer>
  )
}
