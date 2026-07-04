import { Card } from '@/components/ui/Card'
import { ScoreProgress } from '@/components/ui/ScoreProgress'
import { CohortAnalytics } from '@/features/analytics/types'

interface AnalyticsDashboardProps {
  data: CohortAnalytics
}

export function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Card className="space-y-1">
          <div className="text-label-md text-muted">ENROLLED</div>
          <div className="text-headline-md font-bold">{data.enrolled}</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">WEEKLY GROWTH</div>
          <div className="text-headline-md font-bold text-success">+{data.weeklyGrowth}%</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">ACTIVE STUDENTS</div>
          <div className="text-headline-md font-bold">{data.activeStudents}</div>
        </Card>
        <Card className="space-y-1">
          <div className="text-label-md text-muted">AVG HOURS/WEEK</div>
          <div className="text-headline-md font-bold">{data.avgHoursPerWeek}h</div>
        </Card>
      </div>

      <Card className="space-y-4">
        <h2 className="text-headline-sm">Concept Mastery</h2>
        <div className="space-y-3">
          {data.conceptMastery.map((concept) => (
            <ScoreProgress
              key={concept.topic}
              score={concept.score}
              label={concept.topic}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}
