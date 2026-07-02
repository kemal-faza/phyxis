import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { PhyXisLogo } from '@/components/icons/PhyXisLogo'
import { RoleSwitcher } from '@/features/auth/components/RoleSwitcher'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <Link href="/" className="flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-btn-primary">
            <PhyXisLogo size={24} />
          </div>
          <span className="font-heading text-headline-md text-foreground">PhyXis</span>
        </Link>
        <Card className="space-y-4 p-6">
          <div className="text-center">
            <h1 className="text-headline-sm text-foreground">Pilih peran untuk masuk</h1>
            <p className="mt-1 text-body text-muted">Akses akan disesuaikan dengan peranmu.</p>
          </div>
          <RoleSwitcher />
        </Card>
      </div>
    </main>
  )
}
