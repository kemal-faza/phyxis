import { PhyXisLogo } from '@/components/icons/PhyXisLogo'

const NAV = ['Dashboard', 'Virtual Lab', 'Smart Lab IoT', 'KPS Passport', 'Analytics']

export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-b from-primary/20 via-purple/10 to-primary-cyan/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-[26px] border border-border bg-card shadow-xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-error" />
            <span className="h-3 w-3 rounded-full bg-warning" />
            <span className="h-3 w-3 rounded-full bg-success" />
            <span className="ml-3 text-xs text-muted">phyxis.app / dashboard</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
            <span className="h-2 w-2 rounded-full bg-success" />
            Live lab telemetry
          </div>
        </div>

        <div className="flex bg-surface">
          {/* Sidebar */}
          <aside className="w-44 border-r border-border bg-white p-4">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white">
                <PhyXisLogo size={16} />
              </div>
              <span className="font-heading text-sm font-bold text-foreground">PhyXis</span>
            </div>
            <nav className="space-y-1">
              {NAV.map((item, idx) => (
                <div
                  key={item}
                  className={`rounded-xl px-3 py-2 text-xs ${
                    idx === 0
                      ? 'bg-primary/10 font-semibold text-primary'
                      : 'text-muted'
                  }`}
                >
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <main className="flex-1 p-5">
            <div className="mb-5">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-primary">Student console</p>
              <h3 className="font-heading text-xl font-bold text-foreground">Welcome back, Dinda 👋</h3>
            </div>

            <div className="mb-4 grid grid-cols-4 gap-3">
              {[
                { label: 'Active', value: '08' },
                { label: 'Avg', value: '86.4%' },
                { label: 'XP', value: '1,240' },
                { label: 'Rank', value: '#12' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-white p-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted">{stat.label}</p>
                  <p className="font-heading text-lg font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-white p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-muted">Lab A-102 telemetry</span>
                  <span className="font-mono text-xs text-muted">24h</span>
                </div>
                <div className="h-16 rounded-lg bg-surface" />
              </div>
              <div className="rounded-2xl border border-border bg-white p-4">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted">KPS Skills</p>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 w-full rounded-full bg-surface">
                      <div className="h-2 rounded-full bg-primary" style={{ width: `${80 - i * 10}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
