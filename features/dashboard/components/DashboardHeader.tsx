import { Button } from '@/components/ui/Button'
import { Calendar, FlaskConical } from 'lucide-react'

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <p className="text-body font-semibold text-primary">
          Student console · Semester 4
        </p>
        <h1 className="page-title">Selamat datang, Dinda</h1>
        <p className="mt-2 text-body text-muted">
          You have 2 experiments and 1 report due today. Lab A-102 is live and ready.
        </p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row shrink-0">
        <Button variant="outline" className="bg-white" icon={<Calendar size={16} />} iconPosition="left">
          Full schedule
        </Button>
        <Button icon={<FlaskConical size={16} />} iconPosition="left" href="/app/simulator">
          Enter Virtual Lab
        </Button>
      </div>
    </div>
  )
}
