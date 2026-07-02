import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PhyXisLogo } from '@/components/icons/PhyXisLogo'

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12 xl:px-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PhyXisLogo size={20} />
          </div>
          <span className="font-heading text-headline-sm font-bold text-foreground">PhyXis</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          <Link href="#platform" className="hover:text-foreground">Platform</Link>
          <Link href="#workspace" className="hover:text-foreground">Workspace</Link>
          <Link href="#outcomes" className="hover:text-foreground">Outcomes</Link>
          <Link href="#faq" className="hover:text-foreground">FAQ</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" href="/login">Sign in</Button>
          <Button size="sm" icon={<ArrowRight size={16} />} href="/login">Launch app</Button>
        </div>
      </div>
    </header>
  )
}
