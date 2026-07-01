import { RoleSwitcher } from '@/features/auth/components/RoleSwitcher'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface p-6">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center page-title">PhyXis</h1>
        <p className="mb-6 text-center text-on-surface-variant">Pilih peran untuk masuk</p>
        <RoleSwitcher />
      </div>
    </div>
  )
}
