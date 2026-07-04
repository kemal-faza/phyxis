'use client'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { KpsSkill } from '@/features/kps/types'

interface KpsRadarChartProps {
  skills: KpsSkill[]
}

export function KpsRadarChart({ skills }: KpsRadarChartProps) {
  const data = skills.map((skill) => ({
    skill: skill.name,
    score: skill.score,
    fullMark: 100,
  }))

  return (
    <div className="h-64 w-full md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#6b7280" strokeOpacity={0.3} />
          <PolarAngleAxis dataKey="skill" tick={{ fill: 'var(--foreground)', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="KPS Score"
            dataKey="score"
            stroke="var(--primary)"
            fill="var(--primary)"
            fillOpacity={0.35}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
