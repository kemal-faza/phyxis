import Link from 'next/link'
import { PhyXisLogo } from '@/components/icons/PhyXisLogo'

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8 lg:px-12 xl:px-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-btn-primary">
            <PhyXisLogo size={20} />
          </div>
          <span className="font-heading text-headline-sm font-bold text-foreground">PhyXis</span>
        </Link>
        <p className="text-body-sm text-muted">&copy; {new Date().getFullYear()} PhyXis &middot; Physics Experience &amp; Intelligent System</p>
        <div className="flex gap-6 text-body-sm text-muted">
          <Link href="/login" className="hover:text-foreground">Privacy</Link>
          <Link href="/login" className="hover:text-foreground">Security</Link>
          <Link href="/login" className="hover:text-foreground">Documentation</Link>
        </div>
      </div>
    </footer>
  )
}
