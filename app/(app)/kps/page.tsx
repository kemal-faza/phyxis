import { KPSPassport } from '@/features/kps/components/KPSPassport'
import { MOCK_KPS } from '@/features/kps/data/mockKps'

export default function KpsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-headline-lg">KPS Passport Nilai</h1>
      <KPSPassport indicators={MOCK_KPS} />
    </div>
  )
}
