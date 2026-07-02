import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-logo bg-primary text-primary-foreground font-heading text-headline-sm">
            P
          </div>
          <span className="font-heading text-headline-sm text-foreground">PhyXis</span>
        </div>
        <nav className="hidden items-center gap-6 text-body text-muted md:flex">
          <Link href="#platform" className="hover:text-foreground">Platform</Link>
          <Link href="#workspace" className="hover:text-foreground">Workspace</Link>
          <Link href="#outcomes" className="hover:text-foreground">Outcomes</Link>
          <Link href="#faq" className="hover:text-foreground">FAQ</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" href="/login">Sign in</Button>
          <Button size="sm" href="/login">Launch app</Button>
        </div>
      </div>
    </header>
  )
}
