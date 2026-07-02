'use client'

import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { ROLES } from '@/features/auth/data/roles'
import { useAuthStore } from '@/features/auth/stores/authStore'

export function RoleSwitcher() {
  const setRole = useAuthStore((s) => s.setRole)
  const router = useRouter()

  const handleSelect = (role: (typeof ROLES)[number]['value']) => {
    setRole(role)
    router.push('/app/dashboard')
  }

  return (
    <div className="grid gap-3">
      {ROLES.map((role) => (
        <Card
          key={role.value}
          className="cursor-pointer p-4 transition duration-150 hover:bg-surface active:scale-[0.98]"
          onClick={() => handleSelect(role.value)}
          role="button"
          tabIndex={0}
        >
          <div>
            <div className="font-medium text-foreground">{role.label}</div>
            <div className="text-sm text-muted">{role.description}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
