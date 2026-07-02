'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
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
        <Card key={role.value} className="overflow-hidden rounded-full p-0">
          <Button
            variant="ghost"
            className="h-auto w-full justify-start p-4 text-left"
            onClick={() => handleSelect(role.value)}
          >
            <div>
              <div className="font-medium text-foreground">{role.label}</div>
              <div className="text-sm text-muted">{role.description}</div>
            </div>
          </Button>
        </Card>
      ))}
    </div>
  )
}
