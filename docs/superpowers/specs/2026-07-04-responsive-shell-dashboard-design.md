# Design: Responsive Shell & Dashboard (Batch 1)

## Context

Proyek PhyXis adalah Next.js 16 static export (PWA) dengan App Router, Tailwind CSS 3, TypeScript, dan Zustand. Saat ini layout sudah cukup baik di desktop, tetapi belum benar-benar responsive di tablet dan mobile. Figma menyediakan desain mobile (390 px) untuk hampir semua halaman. Batch ini fokus pada shell aplikasi (navigasi, header, sidebar) dan halaman Dashboard.

## Goal

Membuat shell dan dashboard benar-benar responsive di desktop, laptop, tablet, dan mobile, dengan aturan:

- Desktop/laptop (≥1024 px): pertahankan layout existing yang sudah sesuai viewport besar.
- Tablet (768–1023 px): terapkan layout mobile Figma, tetapi manfaatkan lebar dengan grid 2 kolom untuk stats dan kartu kecil.
- Mobile (<768 px): terapkan layout mobile Figma murni (single column).

## Out of Scope

- Halaman lain (Virtual Lab, KPS, Assessment, Analytics, Landing, Report) — masuk batch berikutnya.
- Menambahkan section baru seperti Laboratory Telemetry / bar chart — tidak dilakukan karena tidak ada di existing desktop.
- Mengubah desktop layout menjadi 100% sama dengan Figma desktop — tidak perlu, karena existing desktop sudah OK.

## Domain Language

Term yang sudah ada di `CONTEXT.md` dan tetap relevan:

- **AppShell**: wrapper layout authenticated pages yang menyusun Sidebar, TopHeader, MobileHeader, dan main content.
- **MobileHeader**: header fixed di atas untuk mobile/tablet.
- **TopHeader**: header sticky di desktop yang berisi breadcrumb Workspace > page title, notifikasi, dan profil.
- **Sidebar**: navigasi persisten di desktop, drawer overlay di mobile/tablet.
- **StatCard**: komponen kartu statistik yang muncul di Dashboard.

## Breakpoint Strategy

Tailwind default breakpoints digunakan sebagai dasar:

| Breakpoint | Width | Layout | Navigasi |
|------------|-------|--------|----------|
| `sm` | 640 px | — | — |
| `md` | 768 px | Batas bawah tablet | Hamburger + sidebar overlay |
| `lg` | 1024 px | Batas bawah desktop | Sidebar persisten + TopHeader |
| `desktop` (custom) | 1440 px | Desktop lebar | Sidebar persisten |

Aturan konkret:

- `< md` (mobile): single column, kartu bertumpuk, stats 1 kolom, tombol CTA vertikal/stacked.
- `md` – `< lg` (tablet): mobile layout, tapi stats grid 2 kolom dan beberapa kartu kecil bisa 2 kolom.
- `≥ lg` (desktop): layout existing multi-column.

## Shell Design

### MobileHeader

File: `components/layout/MobileHeader.tsx` (baru atau update)

- Fixed top, z-50, height 64 px, bg-card, border-bottom.
- Kiri: tombol hamburger untuk membuka sidebar.
- Tengah: logo PhyXis (icon saja, tanpa teks "PhyXis").
- Kanan: ikon notifikasi (dengan dot merah) + avatar/profil icon.
- Hanya muncul di bawah `lg` (`lg:hidden`).
- Saat sidebar terbuka, backdrop hitam 50% muncul di belakang sidebar.

### TopHeader

File: `components/layout/TopHeader.tsx`

- Tetap hanya muncul di `≥ lg` (`hidden lg:flex`).
- Isi: breadcrumb Workspace > page title, notifikasi, profil.
- Tidak ada perubahan fungsional besar; mungkin alignment/spacing saja.

### Sidebar

File: `components/layout/Sidebar.tsx`

- Di desktop (`≥ lg`): fixed kiri, full height, width 64 px (collapsed) atau 256 px (expanded), border-r.
- Di mobile/tablet (`< lg`): fixed drawer, translate-x-0 saat terbuka, -translate-x-full saat tertutup, z-50, width 256 px.
- Tombol collapse (ChevronLeft/Right) hanya muncul di `≥ lg`.
- Tombol close (X) hanya muncul di `< lg`.
- Backdrop overlay di `< lg` dengan `bg-black/50` di atas main content, klik untuk tutup.
- Saat item navigasi di-tap di `< lg`, sidebar otomatis tertutup.
- AI Copilot card tetap ada di bawah sidebar, disesuaikan padding agar muat.
- Workspace dan Account sections tetap sama.

### AppShell

File: `components/layout/AppShell.tsx`

- Render MobileHeader + TopHeader + Sidebar + main content.
- Main content:
  - `ml-0 lg:ml-64` (atau `lg:ml-16` saat sidebar collapsed).
  - `p-4` di semua breakpoint.
  - `pt-20 lg:pt-6` untuk memberi ruang MobileHeader fixed di mobile/tablet.
- State `mobileOpen` mengontrol sidebar drawer.
- State `collapsed` mengontrol sidebar desktop collapsed.

## Dashboard Design

Strategi: ekstrak komponen per section agar page `app/app/dashboard/page.tsx` tidak terlalu panjang dan tiap section bertanggung jawab atas responsive-nya sendiri. Semua komponen dashboard baru diletakkan di `features/dashboard/components/`.

### New/Updated Components

#### `DashboardHeader` (`features/dashboard/components/DashboardHeader.tsx`)

- Desktop: label + heading + subheading di kiri; tombol "Full schedule" (outline) dan "Enter Virtual Lab" (primary) di kanan, sebaris.
- Tablet: heading + subheading di atas; tombol side-by-side di bawah (Full schedule kiri, Enter Virtual Lab kanan).
- Mobile: heading + subheading di atas; tombol bertumpuk vertikal (full-width).

#### `DashboardStatsGrid` (`features/dashboard/components/DashboardStatsGrid.tsx`)

- Render `StatCard` untuk `DASHBOARD_STATS`.
- Desktop: 4 kolom (`lg:grid-cols-4`).
- Tablet: 2 kolom (`md:grid-cols-2`).
- Mobile: 1 kolom (`grid-cols-1`).

#### `DashboardLiveExperiment` (`features/dashboard/components/DashboardLiveExperiment.tsx`)

- Desktop: card lebar penuh dengan layout existing (heading, deskripsi, metadata, progress, tombol Resume simulation secara vertikal). Layout desktop **tidak** diubah menjadi 2 kolom seperti Figma desktop.
- Mobile/Tablet: sama — vertikal, semua konten bertumpuk, tombol full-width.
- 4 metric telemetry **dihapus** dari dashboard (desktop & mobile).

#### `DashboardScheduleCard`

- Card Today's schedule dengan timeline vertikal.
- Full-width di mobile/tablet.

#### `DashboardActivityCard`

- Card Recent activity dengan list item + icon + waktu.
- Full-width di mobile/tablet.

#### `DashboardModulesProgress`

- Card Modules in progress dengan list progress bar.
- Desktop: 2/3 lebar (seperti existing).
- Mobile/Tablet: full-width.

#### `DashboardRoleRecap`

- Section role-specific:
  - Dosen: stats + Recent Modules list.
  - Asisten: stats + Antrian Review list.
  - Admin/Praktikan: stats.
- Stats grid: 4 kolom desktop, 2 kolom tablet, 1 kolom mobile.
- List row: vertikal di mobile/tablet jika perlu.

### Dashboard Layout per Breakpoint

#### Desktop (≥1024 px)

```
Header (judul kiri, CTA kanan)
Stats (4 kolom)
Live experiment | Today's schedule
Recent activity | Modules in progress
Role recap
```

*(Urutan dan kolom mengikuti existing code, karena desktop tidak diubah secara drastis.)*

#### Tablet (768–1023 px)

```
Header (judul + CTA side-by-side)
Stats (2 kolom)
Live experiment (full-width)
Today's schedule (full-width)
Recent activity (full-width)
Modules in progress (full-width)
Role recap (stats 2 kolom, list full-width)
```

#### Mobile (<768 px)

```
Header (judul + CTA stacked)
Stats (1 kolom)
Live experiment (full-width)
Today's schedule (full-width)
Recent activity (full-width)
Modules in progress (full-width)
Role recap (stats 1 kolom, list full-width)
```

### Page File Changes

File: `app/app/dashboard/page.tsx`

- Hapus render inline telemetry metric cards (4 metric suhu, kelembaban, CO2, daya).
- Hapus atau pindahkan section "Modules in progress" ke komponen `DashboardModulesProgress`.
- Hapus atau pindahkan role-specific recap ke komponen `DashboardRoleRecap`.
- Gunakan komponen-komponen baru di atas dengan gap dan responsive grid yang sesuai.

## Data & State

- Tidak ada perubahan data model atau Zustand store.
- Mock data `DASHBOARD_STATS`, `TODAY_SCHEDULE`, `RECENT_ACTIVITY`, `MODULE_PROGRESS`, role-specific arrays tetap digunakan.

## Error Handling

- Tidak ada error handling spesifik untuk task ini.
- Pastikan sidebar drawer tertutup saat route berubah di mobile/tablet untuk mencegah overlay tertinggal.

## Accessibility

- Hamburger memiliki `aria-label="Buka menu"`.
- Tombol close sidebar memiliki `aria-label="Tutup menu"`.
- Sidebar backdrop dapat di-dismiss dengan klik dan tombol ESC (jika belum ada, ditambahkan).
- Focus management: setelah sidebar terbuka, focus dialihkan ke tombol close atau pertama nav item; setelah ditutup, focus kembali ke hamburger.

## Testing

### Unit Tests

- Test `MobileHeader` render sesuai role/props.
- Test `Sidebar` render workspace/account items dan tutup saat nav item di-tap di mobile.
- Test `DashboardStatsGrid` render 4 StatCard.
- Test `DashboardRoleRecap` render konten sesuai role.

### E2E / Visual Tests

- Playwright screenshot di 3 viewport: 390 px (mobile), 820 px (tablet), 1440 px (desktop).
- Verifikasi:
  - MobileHeader muncul di <1024 px, TopHeader muncul di ≥1024 px.
  - Sidebar drawer bisa dibuka/ditutup di mobile.
  - Dashboard stats grid: 1/2/4 kolom sesuai breakpoint.
  - Tombol dashboard header: stacked di mobile, side-by-side di tablet, sebaris di desktop.
  - Telemetry metrics tidak muncul.

## Dependencies

- Tidak ada dependency baru.
- Tailwind CSS responsive utilities yang sudah tersedia.
- `lucide-react` icons yang sudah digunakan.

## Risks & Trade-offs

| Risiko | Mitigasi |
|--------|----------|
| Ekstraksi komponen terlalu banyak mengaburkan alur data | Pertahankan props sederhana, jangan buat prop drilling dalam |
| Perubahan dashboard page terlalu besar | Commit per section, review diff sebelum lanjut |
| Sidebar drawer tidak tertutup saat route change | Gunakan `usePathname` effect atau `onNavClick` handler |
| Visual regression di desktop karena refactor | Screenshot before/after di desktop sebelum merge |

## Open Questions

Tidak ada. Semua keputusan sudah dikonfirmasi saat brainstorming.

## Decisions Log

1. **Desktop layout tetap existing** — karena existing desktop sudah sesuai viewport besar.
2. **Tablet menggunakan mobile layout dengan grid 2 kolom** — untuk memanfaatkan lebar tablet tanpa membuat layout terlalu renggang.
3. **Mobile header: hamburger + logo icon + notifikasi + profil** — mirip Figma mobile secara visual tetapi tetap fungsional dengan hamburger.
4. **Navigation tetap hamburger + sidebar overlay** — paling sedikit perubahan dan semua nav item sudah tersedia.
5. **Telemetry metrics dihapus dari dashboard** — tidak ada di existing desktop dan user memutuskan untuk tidak menambahkannya.
6. **Ekstrak komponen per dashboard section** — untuk maintainability dan testability.
