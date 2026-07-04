# Responsive Shell & Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` for sequential chains and `superpowers:dispatching-parallel-agents` for parallel batches. See Task Grouping section for execution strategy.

**Goal:** Make the authenticated app shell and Dashboard page responsive across desktop, tablet, and mobile using Tailwind CSS and extracted dashboard section components.

**Architecture:** Keep the existing desktop layout unchanged. Introduce a polished `MobileHeader` and ensure the sidebar drawer works smoothly. Extract dashboard sections into focused components under `features/dashboard/components/` so each section owns its responsive behavior. Use Tailwind responsive utilities (`grid-cols-1 md:grid-cols-2 lg:grid-cols-*`, `hidden lg:flex`, `lg:hidden`) to switch layouts at `md` (768 px) and `lg` (1024 px).

**Execution Strategy:** Hybrid — Sequential Chain A (shell) → Parallel Batch B (dashboard sections) → Sequential Chain C (page integration + visual regression).

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3, lucide-react, vitest + jsdom, Playwright.

---

## File Map

| File | Responsibility |
|------|----------------|
| `components/layout/MobileHeader.tsx` | Header fixed untuk mobile/tablet: hamburger, logo icon, notifikasi, profil. |
| `components/layout/TopHeader.tsx` | Header sticky desktop (breadcrumb, notifikasi, profil). Hanya styling alignment. |
| `components/layout/Sidebar.tsx` | Navigasi persisten desktop / drawer mobile-tablet. |
| `components/layout/AppShell.tsx` | Orchestrasi layout: margin-left, padding-top, render headers & sidebar. |
| `features/dashboard/components/DashboardHeader.tsx` | Header section dashboard dengan CTA responsive. |
| `features/dashboard/components/DashboardStatsGrid.tsx` | Grid statistik: 1/2/4 kolom. |
| `features/dashboard/components/DashboardLiveExperiment.tsx` | Card live experiment tanpa telemetry metrics. |
| `features/dashboard/components/DashboardScheduleCard.tsx` | Card today's schedule. |
| `features/dashboard/components/DashboardActivityCard.tsx` | Card recent activity. |
| `features/dashboard/components/DashboardModulesProgress.tsx` | Card modules in progress. |
| `features/dashboard/components/DashboardRoleRecap.tsx` | Section role-specific recap. |
| `app/app/dashboard/page.tsx` | Compose semua dashboard section components. |
| `tests/unit/layout/MobileHeader.test.tsx` | Test MobileHeader render. |
| `tests/unit/layout/Sidebar.test.tsx` | Update test sidebar close on nav click. |
| `tests/unit/features/dashboard/*.test.tsx` | Test masing-masing dashboard section component. |
| `tests/e2e/dashboard-responsive.spec.ts` | Playwright screenshots di 3 viewport. |

---

## Task Grouping

### Sequential Chain A: Shell Responsive

Task 1 → Task 2 → Task 3

### Parallel Batch B: Dashboard Section Components

Task 4, Task 5, Task 6, Task 7, Task 8, Task 9, Task 10 — independent, can run concurrently.

### Sequential Chain C: Integration & Verification

Task 11 → Task 12

---

## Sequential Chain A: Shell Responsive

### Task 1: Update MobileHeader

**Type:** AFK
**Blocked by:** None

**Files:**
- Modify: `components/layout/MobileHeader.tsx`
- Test: `tests/unit/layout/MobileHeader.test.tsx`

**Step 1: Write failing test**

Create `tests/unit/layout/MobileHeader.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MobileHeader } from '@/components/layout/MobileHeader'

vi.mock('@/components/layout/PageTitleContext', () => ({
  useCurrentPageTitle: () => 'Dashboard',
}))

describe('MobileHeader', () => {
  it('renders hamburger, logo, notification, and profile', () => {
    render(<MobileHeader onOpenSidebar={() => {}} />)
    expect(screen.getByLabelText('Buka menu')).toBeTruthy()
    expect(screen.getByAltText('PhyXis')).toBeTruthy()
    expect(screen.getByLabelText('Notifikasi')).toBeTruthy()
    expect(screen.getByLabelText('Profil')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/layout/MobileHeader.test.tsx`
Expected: FAIL — `MobileHeader` export not found or missing labels.

**Step 2: Implement MobileHeader**

Update `components/layout/MobileHeader.tsx`:

```tsx
'use client'

import { Menu, Bell, User } from 'lucide-react'
import { useCurrentPageTitle } from './PageTitleContext'

export function MobileHeader({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const title = useCurrentPageTitle()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card lg:hidden flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenSidebar}
          className="p-2 text-muted hover:bg-surface rounded-app"
          aria-label="Buka menu"
        >
          <Menu size={20} />
        </button>
        <img
          src="/phyxis-logo.png"
          alt="PhyXis"
          className="h-8 w-8 object-cover"
        />
      </div>
      <span className="sr-only">{title}</span>
      <div className="flex items-center gap-2">
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface transition-colors"
          aria-label="Notifikasi"
        >
          <Bell size={18} className="text-muted" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error" />
        </button>
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary"
          aria-label="Profil"
        >
          <User size={18} />
        </div>
      </div>
    </header>
  )
}
```

Run: `pnpm vitest run tests/unit/layout/MobileHeader.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add components/layout/MobileHeader.tsx tests/unit/layout/MobileHeader.test.tsx
git commit -m "feat: polish MobileHeader with logo, notification, and profile"
```

---

### Task 2: Update AppShell spacing

**Type:** AFK
**Blocked by:** Task 1

**Files:**
- Modify: `components/layout/AppShell.tsx`
- Test: `tests/unit/appShell.test.tsx`

**Step 1: Write failing test**

Update `tests/unit/appShell.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AppShell } from '@/components/layout/AppShell'
import { usePageTitle } from '@/components/layout/PageTitleContext'

vi.mock('next/navigation', () => ({
  usePathname: () => '/app/dashboard',
  useRouter: () => ({ push: vi.fn() }),
}))

function TitleSetter() {
  usePageTitle('Dashboard Dosen')
  return <div data-testid="page-content">Page content</div>
}

describe('AppShell', () => {
  it('renders mobile header and main content', () => {
    render(
      <AppShell>
        <TitleSetter />
      </AppShell>
    )
    expect(screen.getByLabelText('Buka menu')).toBeTruthy()
    expect(screen.getByTestId('page-content')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/appShell.test.tsx`
Expected: PASS (test sebelumnya juga masih pass).

**Step 2: Update AppShell**

Update `components/layout/AppShell.tsx`:

```tsx
'use client'

import { useState } from 'react'
import { MobileHeader } from './MobileHeader'
import { Sidebar } from './Sidebar'
import { TopHeader } from './TopHeader'
import { PageTitleProvider } from './PageTitleContext'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <PageTitleProvider>
      <div className="flex min-h-screen bg-background">
        <MobileHeader onOpenSidebar={() => setMobileOpen(true)} />

        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <div
          className={`${
            collapsed ? 'lg:ml-16' : 'lg:ml-64'
          } ml-0 flex-1 flex flex-col transition-all duration-200`}
        >
          <TopHeader />
          <main className="flex-1 p-4 pt-20 lg:pt-6">
            {children}
          </main>
        </div>
      </div>
    </PageTitleProvider>
  )
}
```

Run: `pnpm vitest run tests/unit/appShell.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add components/layout/AppShell.tsx tests/unit/appShell.test.tsx
git commit -m "feat: adjust AppShell padding for mobile header"
```

---

### Task 3: Sidebar mobile behavior

**Type:** AFK
**Blocked by:** Task 2

**Files:**
- Modify: `components/layout/Sidebar.tsx`
- Test: `tests/unit/layout/Sidebar.test.tsx`

**Step 1: Write failing test**

Update `tests/unit/layout/Sidebar.test.tsx`:

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Sidebar } from '@/components/layout/Sidebar'

vi.mock('next/navigation', () => ({
  usePathname: () => '/app/dashboard',
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'dosen' }),
}))

describe('Sidebar', () => {
  it('renders workspace nav items', () => {
    render(
      <Sidebar
        collapsed={false}
        onToggleCollapse={() => {}}
        mobileOpen={false}
        onCloseMobile={() => {}}
      />
    )
    expect(screen.getByText('Dashboard')).toBeTruthy()
    expect(screen.getByText('Virtual Lab')).toBeTruthy()
  })

  it('closes mobile sidebar when nav item clicked', () => {
    const onCloseMobile = vi.fn()
    // Simulate mobile viewport by overriding window.innerWidth
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 })
    render(
      <Sidebar
        collapsed={false}
        onToggleCollapse={() => {}}
        mobileOpen={true}
        onCloseMobile={onCloseMobile}
      />
    )
    fireEvent.click(screen.getByText('Virtual Lab'))
    expect(onCloseMobile).toHaveBeenCalled()
  })
})
```

Run: `pnpm vitest run tests/unit/layout/Sidebar.test.tsx`
Expected: FAIL — second test belum ada implementasi close on click (atau test pertama pass, kedua fail).

**Step 2: Implement sidebar close on nav click**

Ensure `Sidebar.tsx` already has `handleNavClick` that closes on `window.innerWidth < 1024`. If not, add it. Current code already has it. Verify it works.

Also ensure close button (X) only shows below `lg` and collapse toggle only shows on `lg`. Current code already has `hidden lg:flex` and `flex lg:hidden`.

Run: `pnpm vitest run tests/unit/layout/Sidebar.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add components/layout/Sidebar.tsx tests/unit/layout/Sidebar.test.tsx
git commit -m "fix: ensure sidebar closes on nav click in mobile viewport"
```

---

## Parallel Batch B: Dashboard Section Components

All tasks in this batch are independent. Each task extracts one section component and its unit test.

---

### Task 4: Extract DashboardHeader

**Type:** AFK
**Blocked by:** None

**Files:**
- Create: `features/dashboard/components/DashboardHeader.tsx`
- Test: `tests/unit/features/dashboard/DashboardHeader.test.tsx`

**Step 1: Write failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'

describe('DashboardHeader', () => {
  it('renders greeting and CTA buttons', () => {
    render(<DashboardHeader />)
    expect(screen.getByText('Selamat datang, Dinda')).toBeTruthy()
    expect(screen.getByText('Full schedule')).toBeTruthy()
    expect(screen.getByText('Enter Virtual Lab')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardHeader.test.tsx`
Expected: FAIL.

**Step 2: Implement component**

Create `features/dashboard/components/DashboardHeader.tsx`:

```tsx
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
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardHeader.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add features/dashboard/components/DashboardHeader.tsx tests/unit/features/dashboard/DashboardHeader.test.tsx
git commit -m "feat: add responsive DashboardHeader component"
```

---

### Task 5: Extract DashboardStatsGrid

**Type:** AFK
**Blocked by:** None

**Files:**
- Create: `features/dashboard/components/DashboardStatsGrid.tsx`
- Test: `tests/unit/features/dashboard/DashboardStatsGrid.test.tsx`

**Step 1: Write failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardStatsGrid } from '@/features/dashboard/components/DashboardStatsGrid'

describe('DashboardStatsGrid', () => {
  it('renders all dashboard stats', () => {
    render(<DashboardStatsGrid />)
    expect(screen.getByText('Active Practicum')).toBeTruthy()
    expect(screen.getByText('Average Score')).toBeTruthy()
    expect(screen.getByText('KPS Level')).toBeTruthy()
    expect(screen.getByText('Completion')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardStatsGrid.test.tsx`
Expected: FAIL.

**Step 2: Implement component**

Create `features/dashboard/components/DashboardStatsGrid.tsx`:

```tsx
import { StatCard } from './StatCard'
import { DASHBOARD_STATS } from '../data/mockData'
import { FlaskConical, BarChart3, Award, CheckCircle } from 'lucide-react'
import type { ElementType } from 'react'

const ICONS: Record<string, { icon: ElementType; className: string }> = {
  'Active Practicum': { icon: FlaskConical, className: 'bg-primary/10 text-primary' },
  'Average Score': { icon: BarChart3, className: 'bg-purple/[0.12] text-purple' },
  'KPS Level': { icon: Award, className: 'bg-primary-cyan/[0.12] text-primary-cyan' },
  Completion: { icon: CheckCircle, className: 'bg-success/[0.12] text-success' },
}

export function DashboardStatsGrid() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {DASHBOARD_STATS.map((s) => {
        const config = ICONS[s.label]
        return (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            icon={config.icon}
            iconContainerClass={config.className}
            caption={s.caption}
            change={'change' in s ? String(s.change) : undefined}
          />
        )
      })}
    </div>
  )
}
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardStatsGrid.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add features/dashboard/components/DashboardStatsGrid.tsx tests/unit/features/dashboard/DashboardStatsGrid.test.tsx
git commit -m "feat: add responsive DashboardStatsGrid component"
```

---

### Task 6: Extract DashboardLiveExperiment

**Type:** AFK
**Blocked by:** None

**Files:**
- Create: `features/dashboard/components/DashboardLiveExperiment.tsx`
- Test: `tests/unit/features/dashboard/DashboardLiveExperiment.test.tsx`

**Step 1: Write failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardLiveExperiment } from '@/features/dashboard/components/DashboardLiveExperiment'

describe('DashboardLiveExperiment', () => {
  it('renders live experiment card and resume button', () => {
    render(<DashboardLiveExperiment />)
    expect(screen.getByText('Live experiment')).toBeTruthy()
    expect(screen.getByText('Gerak Parabola — Sesi 03')).toBeTruthy()
    expect(screen.getByText('Resume simulation')).toBeTruthy()
  })

  it('does not render telemetry metrics', () => {
    render(<DashboardLiveExperiment />)
    expect(screen.queryByText('Temperature')).toBeNull()
    expect(screen.queryByText('Humidity')).toBeNull()
    expect(screen.queryByText('CO₂')).toBeNull()
    expect(screen.queryByText('Power')).toBeNull()
  })
})
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardLiveExperiment.test.tsx`
Expected: FAIL.

**Step 2: Implement component**

Create `features/dashboard/components/DashboardLiveExperiment.tsx`:

```tsx
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Progress } from '@/components/ui/Progress'
import { ArrowRight } from 'lucide-react'

export function DashboardLiveExperiment() {
  return (
    <Card className="space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <div className="text-label text-primary uppercase tracking-wide">
            Live experiment
          </div>
          <h2 className="mt-1 font-heading text-headline-sm text-foreground">
            Gerak Parabola — Sesi 03
          </h2>
          <p className="mt-1 text-body text-muted">
            Pengamatan lintasan benda dengan sudut elevasi 45°.
          </p>
        </div>
        <Badge variant="success">Ongoing</Badge>
      </div>
      <div>
        <div className="mb-1 flex justify-between text-body-sm text-muted">
          <span>Progress</span>
          <span>76%</span>
        </div>
        <Progress value={76} />
      </div>
      <Button className="mt-2 w-full lg:w-auto" href="/app/simulator">
        Resume simulation <ArrowRight size={16} className="ml-1" />
      </Button>
    </Card>
  )
}
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardLiveExperiment.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add features/dashboard/components/DashboardLiveExperiment.tsx tests/unit/features/dashboard/DashboardLiveExperiment.test.tsx
git commit -m "feat: add DashboardLiveExperiment component without telemetry metrics"
```

---

### Task 7: Extract DashboardScheduleCard

**Type:** AFK
**Blocked by:** None

**Files:**
- Create: `features/dashboard/components/DashboardScheduleCard.tsx`
- Test: `tests/unit/features/dashboard/DashboardScheduleCard.test.tsx`

**Step 1: Write failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardScheduleCard } from '@/features/dashboard/components/DashboardScheduleCard'

describe('DashboardScheduleCard', () => {
  it('renders today schedule with sessions', () => {
    render(<DashboardScheduleCard />)
    expect(screen.getByText("Today's schedule")).toBeTruthy()
    expect(screen.getByText('Mekanika — Gerak Parabola')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardScheduleCard.test.tsx`
Expected: FAIL.

**Step 2: Implement component**

Create `features/dashboard/components/DashboardScheduleCard.tsx`:

```tsx
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { TODAY_SCHEDULE } from '../data/mockData'
import { cn } from '@/lib/utils'

export function DashboardScheduleCard() {
  return (
    <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h3 className="text-body font-semibold text-foreground">Today&apos;s schedule</h3>
        <span className="text-body-sm text-muted font-semibold">
          {TODAY_SCHEDULE.length} sessions
        </span>
      </div>
      <div className="relative px-6 pb-6 pt-4">
        <div className="absolute left-[20.5px] top-5 bottom-6 w-px bg-border" />
        <div className="space-y-4">
          {TODAY_SCHEDULE.map((s) => (
            <div key={s.title} className="relative">
              <div
                className={cn(
                  'absolute left-[-8px] top-[5px] h-2.5 w-2.5 rounded-full',
                  s.status === 'ongoing'
                    ? 'bg-primary shadow-[0_0_0_4px] shadow-primary/20'
                    : 'bg-border'
                )}
              />
              <div className="flex ml-3 items-center justify-between">
                <span className="text-body-sm text-muted">{s.time}</span>
                <Badge variant={s.status === 'ongoing' ? 'success' : 'neutral'}>
                  {s.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                </Badge>
              </div>
              <p className="mt-1 ml-3 text-body font-semibold text-foreground">{s.title}</p>
              <p className="text-body-sm ml-3 text-muted">{s.location}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardScheduleCard.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add features/dashboard/components/DashboardScheduleCard.tsx tests/unit/features/dashboard/DashboardScheduleCard.test.tsx
git commit -m "feat: add DashboardScheduleCard component"
```

---

### Task 8: Extract DashboardActivityCard

**Type:** AFK
**Blocked by:** None

**Files:**
- Create: `features/dashboard/components/DashboardActivityCard.tsx`
- Test: `tests/unit/features/dashboard/DashboardActivityCard.test.tsx`

**Step 1: Write failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardActivityCard } from '@/features/dashboard/components/DashboardActivityCard'

describe('DashboardActivityCard', () => {
  it('renders recent activity items', () => {
    render(<DashboardActivityCard />)
    expect(screen.getByText('Recent activity')).toBeTruthy()
    expect(screen.getByText('Report graded')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardActivityCard.test.tsx`
Expected: FAIL.

**Step 2: Implement component**

Create `features/dashboard/components/DashboardActivityCard.tsx`:

```tsx
import { Card } from '@/components/ui/Card'
import { RECENT_ACTIVITY } from '../data/mockData'
import { FileText, Upload, Settings } from 'lucide-react'

export function DashboardActivityCard() {
  return (
    <Card className="rounded-support border-border bg-card shadow-sm space-y-0 overflow-hidden p-0">
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-body font-semibold text-foreground">Recent activity</h3>
      </div>
      <div className="space-y-4 px-6 py-4">
        {RECENT_ACTIVITY.map((a) => {
          const ActivityIcon = [FileText, Upload, Settings][a.id - 1] ?? FileText
          return (
            <div key={a.id} className="flex items-start gap-3">
              <div className="h-8 w-8 shrink-0 flex items-center justify-center rounded-app bg-surface text-muted border border-border">
                <ActivityIcon size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-body font-semibold text-foreground truncate">{a.title}</div>
                <div className="text-body-sm text-muted truncate">{a.detail}</div>
              </div>
              <span className="shrink-0 text-body-sm text-muted">{a.time}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardActivityCard.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add features/dashboard/components/DashboardActivityCard.tsx tests/unit/features/dashboard/DashboardActivityCard.test.tsx
git commit -m "feat: add DashboardActivityCard component"
```

---

### Task 9: Extract DashboardModulesProgress

**Type:** AFK
**Blocked by:** None

**Files:**
- Create: `features/dashboard/components/DashboardModulesProgress.tsx`
- Test: `tests/unit/features/dashboard/DashboardModulesProgress.test.tsx`

**Step 1: Write failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DashboardModulesProgress } from '@/features/dashboard/components/DashboardModulesProgress'

describe('DashboardModulesProgress', () => {
  it('renders modules progress list', () => {
    render(<DashboardModulesProgress />)
    expect(screen.getByText('Modules in progress')).toBeTruthy()
    expect(screen.getByText('M-4 — Gerak Jatuh Bebas')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardModulesProgress.test.tsx`
Expected: FAIL.

**Step 2: Implement component**

Create `features/dashboard/components/DashboardModulesProgress.tsx`:

```tsx
import { Card } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { MODULE_PROGRESS } from '../data/mockData'

export function DashboardModulesProgress() {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-headline-sm text-foreground">Modules in progress</h2>
        <span className="text-body-sm text-muted">
          {MODULE_PROGRESS.filter((m) => m.progress === 100).length} of {MODULE_PROGRESS.length} finished
        </span>
      </div>
      <div className="space-y-3">
        {MODULE_PROGRESS.map((m) => (
          <div key={m.id}>
            <div className="mb-1 flex justify-between text-body text-foreground">
              <span>{m.id} — {m.name}</span>
              <span className="font-mono text-body-sm">{m.progress}%</span>
            </div>
            <Progress value={m.progress} />
          </div>
        ))}
      </div>
    </Card>
  )
}
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardModulesProgress.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add features/dashboard/components/DashboardModulesProgress.tsx tests/unit/features/dashboard/DashboardModulesProgress.test.tsx
git commit -m "feat: add DashboardModulesProgress component"
```

---

### Task 10: Extract DashboardRoleRecap

**Type:** AFK
**Blocked by:** None

**Files:**
- Create: `features/dashboard/components/DashboardRoleRecap.tsx`
- Test: `tests/unit/features/dashboard/DashboardRoleRecap.test.tsx`

**Step 1: Write failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { DashboardRoleRecap } from '@/features/dashboard/components/DashboardRoleRecap'

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'dosen' }),
}))

describe('DashboardRoleRecap', () => {
  it('renders role-specific heading and stats for dosen', () => {
    render(<DashboardRoleRecap />)
    expect(screen.getByText('Rekap Kelas')).toBeTruthy()
    expect(screen.getByText('Total Praktikan')).toBeTruthy()
  })
})
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardRoleRecap.test.tsx`
Expected: FAIL.

**Step 2: Implement component**

Create `features/dashboard/components/DashboardRoleRecap.tsx`:

```tsx
'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { StatCard } from './StatCard'
import { useAuthStore } from '@/features/auth/stores/authStore'
import {
  DOSEN_STATS,
  ASISTEN_STATS,
  ADMIN_STATS,
  PRAKTIKAN_STATS,
  RECENT_MODULES,
  ASISTEN_QUEUE,
} from '../data/mockData'

export function DashboardRoleRecap() {
  const role = useAuthStore((s) => s.role)
  if (!role) return null

  const roleStats =
    role === 'dosen'
      ? DOSEN_STATS
      : role === 'asisten'
      ? ASISTEN_STATS
      : role === 'admin'
      ? ADMIN_STATS
      : PRAKTIKAN_STATS

  const heading =
    role === 'dosen'
      ? 'Rekap Kelas'
      : role === 'asisten'
      ? 'Antrian Review'
      : role === 'admin'
      ? 'Ringkasan Admin'
      : 'Info Cepat'

  return (
    <div className="space-y-4">
      <h2 className="font-heading text-headline-md text-foreground">{heading}</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {roleStats.map((s) => (
          <StatCard
            key={s.label}
            label={s.label}
            value={s.value}
            change={'change' in s ? String(s.change) : undefined}
          />
        ))}
      </div>

      {role === 'dosen' && (
        <Card className="space-y-3">
          <h3 className="font-heading text-headline-sm text-foreground">Modul Terbaru</h3>
          <div className="space-y-2">
            {RECENT_MODULES.map((mod) => (
              <div
                key={mod.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-border bg-surface p-3"
              >
                <div>
                  <div className="text-body font-semibold text-foreground">{mod.id} — {mod.name}</div>
                  <div className="text-body-sm text-muted">{mod.participants} praktikan</div>
                </div>
                <Badge variant={mod.status === 'Aktif' ? 'success' : 'neutral'}>{mod.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      )}

      {role === 'asisten' && (
        <Card className="space-y-3">
          <h3 className="font-heading text-headline-sm text-foreground">Antrian Review</h3>
          <div className="space-y-2">
            {ASISTEN_QUEUE.map((item) => (
              <div
                key={item.nama}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-border bg-surface p-3"
              >
                <span className="text-body text-foreground">{item.nama} — {item.modul}</span>
                <Badge variant={item.status === 'Sudah dinilai' ? 'success' : 'warning'}>{item.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
```

Run: `pnpm vitest run tests/unit/features/dashboard/DashboardRoleRecap.test.tsx`
Expected: PASS.

**Step 3: Commit**

```bash
git add features/dashboard/components/DashboardRoleRecap.tsx tests/unit/features/dashboard/DashboardRoleRecap.test.tsx
git commit -m "feat: add responsive DashboardRoleRecap component"
```

---

## Sequential Chain C: Integration & Verification

### Task 11: Refactor dashboard page

**Type:** AFK
**Blocked by:** Parallel Batch B (Tasks 4–10)

**Files:**
- Modify: `app/app/dashboard/page.tsx`
- Test: `tests/unit/app/dashboard/page.test.tsx`

**Step 1: Write failing integration test**

Create `tests/unit/app/dashboard/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DashboardPage from '@/app/app/dashboard/page'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/features/auth/stores/authStore', () => ({
  useAuthStore: (selector: (s: { role: string }) => string) => selector({ role: 'dosen' }),
}))

describe('DashboardPage', () => {
  it('renders all dashboard sections', () => {
    render(<DashboardPage />)
    expect(screen.getByText('Selamat datang, Dinda')).toBeTruthy()
    expect(screen.getByText('Active Practicum')).toBeTruthy()
    expect(screen.getByText('Live experiment')).toBeTruthy()
    expect(screen.getByText("Today's schedule")).toBeTruthy()
    expect(screen.getByText('Recent activity')).toBeTruthy()
    expect(screen.getByText('Modules in progress')).toBeTruthy()
    expect(screen.getByText('Rekap Kelas')).toBeTruthy()
  })

  it('does not render telemetry metrics', () => {
    render(<DashboardPage />)
    expect(screen.queryByText('Temperature')).toBeNull()
  })
})
```

Run: `pnpm vitest run tests/unit/app/dashboard/page.test.tsx`
Expected: FAIL — page belum di-refactor.

**Step 2: Refactor page**

Replace `app/app/dashboard/page.tsx` dengan compose components:

```tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePageTitle } from '@/components/layout/PageTitleContext'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import { DashboardStatsGrid } from '@/features/dashboard/components/DashboardStatsGrid'
import { DashboardLiveExperiment } from '@/features/dashboard/components/DashboardLiveExperiment'
import { DashboardScheduleCard } from '@/features/dashboard/components/DashboardScheduleCard'
import { DashboardActivityCard } from '@/features/dashboard/components/DashboardActivityCard'
import { DashboardModulesProgress } from '@/features/dashboard/components/DashboardModulesProgress'
import { DashboardRoleRecap } from '@/features/dashboard/components/DashboardRoleRecap'

export default function DashboardPage() {
  const role = useAuthStore((s) => s.role)
  const router = useRouter()

  useEffect(() => {
    if (!role) router.push('/login')
  }, [role, router])

  usePageTitle('Dashboard')

  if (!role) return null

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardStatsGrid />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardLiveExperiment />
        </div>
        <DashboardScheduleCard />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <DashboardActivityCard />
        <div className="lg:col-span-2">
          <DashboardModulesProgress />
        </div>
      </div>

      <DashboardRoleRecap />
    </div>
  )
}
```

Run: `pnpm vitest run tests/unit/app/dashboard/page.test.tsx`
Expected: PASS.

Run: `pnpm typecheck`
Expected: PASS.

**Step 3: Commit**

```bash
git add app/app/dashboard/page.tsx tests/unit/app/dashboard/page.test.tsx
git commit -m "refactor: compose dashboard from responsive section components"
```

---

### Task 12: Playwright visual regression

**Type:** AFK
**Blocked by:** Task 11

**Files:**
- Create: `tests/e2e/dashboard-responsive.spec.ts`

**Step 1: Write failing test**

Create `tests/e2e/dashboard-responsive.spec.ts`:

```ts
import { test, expect } from '@playwright/test'

async function loginAsDosen(page) {
  await page.goto('/login')
  // Adjust selector based on actual RoleSwitcher implementation
  await page.click('text=Dosen')
  await page.click('text=Masuk')
}

test.describe('Dashboard responsive', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsDosen(page)
    await page.goto('/app/dashboard')
    await page.waitForSelector('text=Selamat datang, Dinda')
  })

  test('mobile layout renders single column', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await expect(page.getByLabelText('Buka menu')).toBeVisible()
    await expect(page.getByText('Enter Virtual Lab').first()).toBeVisible()
    await expect(page.getByText('Temperature')).toHaveCount(0)
    await page.screenshot({ path: 'test-results/dashboard-mobile.png', fullPage: true })
  })

  test('tablet layout renders two column stats', async ({ page }) => {
    await page.setViewportSize({ width: 820, height: 1180 })
    await expect(page.getByLabelText('Buka menu')).toBeVisible()
    await expect(page.getByText('Enter Virtual Lab').first()).toBeVisible()
    await page.screenshot({ path: 'test-results/dashboard-tablet.png', fullPage: true })
  })

  test('desktop layout renders top header and sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await expect(page.getByText('Workspace')).toBeVisible()
    await expect(page.getByText('Dashboard').first()).toBeVisible()
    await page.screenshot({ path: 'test-results/dashboard-desktop.png', fullPage: true })
  })
})
```

Run: `pnpm test:e2e tests/e2e/dashboard-responsive.spec.ts`
Expected: FAIL — test file baru atau login selector salah.

**Step 2: Adjust login helpers if needed**

Verify `/login` page selectors. Update `loginAsDosen` helper agar sesuai dengan `RoleSwitcher`. If login is tricky, set role directly via localStorage or URL param (if supported). Simpler approach for this plan: mock auth store is not available in Playwright, so use the actual UI.

**Step 3: Run and verify**

Run: `pnpm test:e2e tests/e2e/dashboard-responsive.spec.ts`
Expected: PASS, screenshots generated.

**Step 4: Commit**

```bash
git add tests/e2e/dashboard-responsive.spec.ts
git commit -m "test: add Playwright visual regression for dashboard responsive"
```

---

## Spec Coverage Checklist

| Spec Requirement | Task |
|------------------|------|
| MobileHeader: hamburger + logo icon + notifikasi + profil | Task 1 |
| AppShell: padding-top untuk mobile header | Task 2 |
| Sidebar: drawer overlay, tutup saat nav tap | Task 3 |
| DashboardHeader responsive CTA | Task 4 |
| Stats grid 1/2/4 kolom | Task 5 |
| Live experiment tanpa telemetry metrics | Task 6 |
| Schedule card | Task 7 |
| Activity card | Task 8 |
| Modules progress card | Task 9 |
| Role recap responsive | Task 10 |
| Compose page + hapus telemetry inline | Task 11 |
| Visual regression 3 viewport | Task 12 |

## Placeholder Scan

- No TBD/TODO in tasks.
- Each task contains actual code, exact file paths, and exact commands.
- No vague steps like "add appropriate styling".

## Type Consistency Check

- `useAuthStore` selector signature consistent across tests.
- `StatCard` props consistent (`label`, `value`, `change`, `caption`, `icon`, `iconContainerClass`).

## Vertical Slice Check

- Each task produces a component + test or page + test, end-to-end.
- Shell tasks touch layout + test.
- Final task touches E2E test + screenshots.

## HITL/AFK Check

- All tasks are AFK. No human judgment required beyond code review.

## Task Grouping Check

- Sequential Chain A: shell tasks depend on each other (MobileHeader → AppShell → Sidebar behavior).
- Parallel Batch B: dashboard section components are independent.
- Sequential Chain C: page integration depends on all sections; visual regression depends on page integration.
