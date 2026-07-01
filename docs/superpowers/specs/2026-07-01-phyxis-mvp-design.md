# PhyXis MVP Design Document

## 1. Overview

PhyXis (Physics Experience & Intelligent System) adalah aplikasi web untuk mendukung praktikum Fisika Dasar. MVP ini bertujuan membuktikan konsep inti produk melalui antarmuka yang terlihat fungsional dan simulator virtual yang dapat dijalankan secara end-to-end.

Design visual mengikuti **PhyXis Design System** di `phyxis_design_system/` yang menggunakan dark mode, palet warna hijau laboratorium (#4CAF50), biru teknis (#1976D2), dan charcoal gelap (#121417).

## 2. Goals

- Menampilkan 7 halaman utama dari desain sistem dengan UI yang konsisten.
- Membuat simulator M-4 Gerak Jatuh Bebas benar-benar interaktif: praktikan memilih langkah, animasi GLB diputar saat benar, dan metrik kelancaran tercatat.
- Memberikan demo alur peran pengguna (Praktikan, Asisten, Dosen, Admin) melalui dummy user switcher.
- Menyediakan quiz pre-test/post-test dengan scoring sederhana berbasis kunci jawaban statis (bukan AI/LLM di MVP).
- Deploy ke Vercel sebagai static site yang installable sebagai PWA ringan.

## 3. Scope

### In Scope

1. Halaman login dengan dummy user switcher.
2. Sidebar navigasi adaptif berdasarkan role.
3. Dashboard Dosen dengan data dummy.
4. Dashboard Praktikan + Laporan Akhir (UI upload file PDF).
5. KPS Passport Nilai dengan status lulus/belum lulus dummy.
6. Monitoring Fitur dengan data aktivitas dummy.
7. Quiz Pre-test/Post-test dengan soal hardcoded dan scoring sederhana (AI/LLM ditunda ke iterasi berikutnya).
8. Simulator M-4 Gerak Jatuh Bebas dengan 7 langkah hardcoded.
9. GLB asset dari Blender dimuat dan dikontrol melalui React Three Fiber.
10. localStorage untuk menyimpan progress dan skor.
11. PWA manifest dan kemampuan install.
12. Unit test (Vitest) dan E2E test (Playwright).

### Out of Scope

1. Autentikasi nyata dan otorisasi backend.
2. Backend/API atau database.
3. AI/LLM untuk generate soal atau grading essay.
4. Fisika real-time dan physics engine (Rapier.js).
5. Konfigurasi langkah simulator oleh admin/dosen di UI.
6. Upload dan pemrosesan file PDF laporan di backend.
7. Offline sync data.
8. Integrasi dengan Sistem Informasi Akademik.

## 4. Tech Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | Next.js 15 (App Router) | PWA, SSG/static export, routing terstruktur. |
| Language | TypeScript | Type safety dan maintainability. |
| Styling | Tailwind CSS | Match design system, utility-first, responsive. |
| 3D | React Three Fiber + drei | Wrapper Three.js standar untuk React, muat GLB, kontrol animasi. |
| State | Zustand | Ringan, tidak boilerplate, cocok untuk multiple stores. |
| Persistence | localStorage | Cukup untuk MVP tanpa backend. |
| Testing | Vitest + Playwright | Unit untuk logic, E2E untuk alur kritis. |
| Deploy | Vercel | Natural untuk Next.js, free tier, static export. |

## 5. Architecture

Aplikasi menggunakan pendekatan **feature-based modular**:

- `app/`: routing Next.js, hanya rendering dan layout.
- `features/`: setiap fitur berisi komponen, hooks, stores, types, dan data.
- `components/ui/`: komponen UI primitives yang reusable.
- `lib/`: utility, constants, design tokens.
- `public/`: GLB assets, icons, manifest.json.
- `stores/`: Zustand global stores (auth, simulator, quiz, ui).

State global disimpan di Zustand dan di-persist ke localStorage melalui adapter. Simulator state machine mengatur urutan langkah dan pemutaran animation clip.

## 6. Folder Structure

```
phyxis/
├── app/
│   ├── (auth)/
│   │   └── login/page.tsx
│   ├── (app)/
│   │   ├── dashboard/page.tsx
│   │   ├── simulator/page.tsx
│   │   ├── quiz/page.tsx
│   │   ├── report/page.tsx
│   │   ├── kps/page.tsx
│   │   └── monitoring/page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── stores/
│   │   ├── types.ts
│   │   └── data.ts
│   ├── simulator/
│   │   ├── components/
│   │   │   ├── SimulatorCanvas.tsx
│   │   │   ├── StepPanel.tsx
│   │   │   └── MetricSummary.tsx
│   │   ├── hooks/
│   │   │   └── useSimulator.ts
│   │   ├── stores/
│   │   │   └── simulatorStore.ts
│   │   ├── types.ts
│   │   └── data/
│   │       └── m4Steps.ts
│   ├── quiz/
│   ├── dashboard/
│   ├── report/
│   └── kps/
├── components/ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   ├── Sidebar.tsx
│   └── Modal.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── storage.ts
├── public/
│   ├── models/
│   │   └── m4_gerak_jatuh_bebas.glb
│   ├── icons/
│   └── manifest.json
├── stores/
│   ├── authStore.ts
│   ├── simulatorStore.ts
│   ├── quizStore.ts
│   └── uiStore.ts
├── tests/
│   ├── unit/
│   └── e2e/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 7. Page-by-Page Functionality

### 7.1 Login / Daftar

- Tampilan sesuai mockup `phyxis_masuk_daftar/`.
- Dummy user switcher: tombol "Masuk sebagai Praktikan / Asisten / Dosen / Admin".
- Setelah pilih, role disimpan di authStore dan redirect ke dashboard.

### 7.2 Dashboard Dosen

- Tampilan sesuai mockup `dashboard_dosen_phyxis/`.
- Data statis: jumlah praktikan, rata-rata nilai, daftar modul.
- Interaksi: filter, tab, dan hover state aktif, tanpa backend.

### 7.3 Dashboard Praktikan + Laporan Akhir

- Tampilan sesuai mockup `praktikan_dashboard_laporan_phyxis/`.
- Dashboard menampilkan progress modul dan status laporan dari localStorage/mock.
- Laporan: form upload file PDF, progress bar dummy, tombol submit tanpa backend processing.

### 7.4 KPS Passport Nilai

- Tampilan sesuai mockup `kps_passport_nilai_phyxis/`.
- Status indikator KPS ditampilkan sebagai badge lulus/belum lulus.
- Data hardcoded/mock.

### 7.5 Monitoring Fitur

- Tampilan sesuai mockup `monitoring_fitur_phyxis/`.
- Grafik atau tabel aktivitas fitur dari data dummy.
- Interaksi dasar: hover, filter periode statis.

### 7.6 Quiz Pre-test / Post-test

- Tampilan sesuai mockup `pre_test_ai_phyxis/`.
- Soal essay hardcoded.
- Scoring menggunakan token overlap sederhana terhadap kunci jawaban. Contoh: hitung berapa banyak kata kunci dari kunci jawaban yang muncul di jawaban praktikan, lalu normalisasi ke skor 0-100.
- Skor disimpan ke quizStore dan localStorage.

### 7.7 Simulator M-4 Gerak Jatuh Bebas

- Tampilan sesuai mockup `simulator_m_4_gerak_jatuh_bebas_guided_final/`.
- Canvas 3D di sebelah kiri, panel langkah di sebelah kanan.
- 7 langkah prosedur praktikum hardcoded. Langkah perakitan alat tidak termasuk dalam 7 langkah ini.
- Setiap langkah menampilkan soal pilihan ganda.
- Jawaban benar: putar animation clip berikutnya, lanjut ke langkah berikutnya.
- Jawaban salah: tampilkan panel info kesalahan, error count +1, tetap di langkah yang sama.
- Setelah selesai: tampilkan ringkasan metrik.

## 8. Simulator State Machine

```
step_N_idle
    │
    ▼
user selects option
    │
    ├── correct ──► record time
    │                 play clip N+1
    │                 on animation end ──► step_N+1_idle
    │
    └── wrong ─────► show error info
                      increment error count
                      stay at step_N_idle
                      allow retry
```

**State yang disimpan:**

- `currentStepIndex`: langkah aktif (0-6).
- `status`: 'idle' | 'playing' | 'completed'.
- `metrics.totalErrors`: jumlah jawaban salah.
- `metrics.totalDecisionTime`: akumulasi waktu keputusan.
- `metrics.startedAt`: waktu mulai.
- `isFirstAttempt`: boolean, hanya true saat pertama kali.
- `hasCompleted`: boolean, menandai simulator sudah selesai.

**Rules:**

- Hanya percobaan pertama yang dihitung metrik.
- Restart diperbolehkan, tetapi metrik tidak direset.
- Animation clip diputar satu kali per langkah, tidak looping.

## 9. 3D Asset Integration

### Animator Deliverable

Animator membuat animasi prosedur di Blender dan mengekspor ke file `.glb`. Spesifikasi lengkap ada di `docs/animator-spec-m4.md`.

Ringkasan:

- Format: glTF 2.0 Binary (.glb).
- Satu animation clip per langkah dengan nama `langkah_01_...`, `langkah_02_...`, dst.
- Tidak perlu physics engine.
- Optimasi: Draco compression, texture max 1024x1024, target file < 5 MB.

### Web Integration

- Muat GLB dengan `useGLTF('/models/m4_gerak_jatuh_bebas.glb')`.
- Kontrol animasi dengan `useAnimations(animations, group)`.
- Saat jawaban benar, panggil `actions['langkah_N'].reset().fadeIn(0.2).play()`.
- Dengarkan `mixer.addEventListener('finished', ...)` untuk pindah ke langkah berikutnya.

## 10. Data Flow

### Auth

1. User memilih role di halaman login.
2. `authStore.setRole(role)` disimpan ke localStorage.
3. Layout membaca role dan menyesuaikan sidebar/menu.

### Simulator

1. Halaman simulator mount, `simulatorStore` initialize dari localStorage atau default.
2. User memilih jawaban.
3. Jika benar, play animation clip, update metrics, persist progress.
4. Jika salah, update error count, show error, persist.
5. Setelah langkah terakhir, set status completed dan simpan ringkasan.

### Quiz

1. Soal dimuat dari hardcoded array.
2. User submit jawaban.
3. Scoring function menghitung similarity dengan kunci jawaban.
4. Skor disimpan ke `quizStore` dan localStorage.

### Dashboard / KPS / Monitoring

1. Komponen membaca dari `simulatorStore`, `quizStore`, atau data mock.
2. Tampilkan ringkasan progress, nilai, dan status KPS.

## 11. Error Handling

| Scenario | Handling |
|----------|----------|
| GLB gagal load | Tampilkan fallback UI dengan pesan error dan tombol retry. |
| Animation clip tidak ditemukan | Log ke console, lanjut ke langkah berikutnya tanpa animasi. |
| localStorage penuh / tidak tersedia | Tangkap error, jalankan in-memory tanpa persistensi. |
| Jawaban salah | Tampilkan panel info merah, tidak ada animasi, retry diperbolehkan. |
| WebGL tidak didukung | Deteksi saat mount, tampilkan pesan perangkat tidak mendukung. |
| State corrupt di localStorage | Reset ke default state, catat di console. |

## 12. Testing Strategy

### Unit Tests (Vitest)

- Scoring function dengan berbagai input.
- Simulator state transitions (correct, wrong, complete, restart).
- localStorage adapter (serialize, deserialize, error handling).
- Auth role guards dan sidebar menu filtering.

### E2E Tests (Playwright)

- Alur login sebagai praktikan → buka simulator → selesaikan 7 langkah → lihat ringkasan.
- Alur login sebagai dosen → buka dashboard → verifikasi data dummy muncul.
- Ganti role via sidebar → verifikasi menu berubah.
- Quiz: input jawaban → verifikasi skor muncul.

## 13. Deployment

- Next.js di-build dengan `output: 'export'` di `next.config.js`.
- Static files dihasilkan di folder `out/`.
- GLB assets dan manifest otomatis ikut di-copy.
- Deploy ke Vercel melalui Git push atau `vercel --prod`.
- URL publik stabil untuk diakses praktikan dan asisten.

## 14. Dependencies

Core dependencies:

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `zustand`
- `@react-three/fiber`
- `@react-three/drei`
- `three`
- `@types/three`

Dev dependencies:

- `vitest`
- `@testing-library/react`
- `playwright`
- `eslint`
- `prettier`

## 15. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| File GLB terlalu besar | Kompress Draco, optimasi texture, lazy load. |
| Perangkat low-end tidak bisa render 3D | Deteksi WebGL, fallback UI, opsi non-3D sederhana. |
| Mock data terasa tidak meyakinkan | Gunakan data yang realistis dan konsisten antar halaman. |
| Scope creep ke fitur backend | Patuhi out-of-scope list dan dokumentasikan untuk iterasi berikutnya. |
| Animator belum familiar glTF | Berikan spesifikasi `docs/animator-spec-m4.md` dan link validator. |

## 16. Decisions & Assumptions

- Mockup HTML di `phyxis_design_system/` dikonversi ke React semi-1:1. Struktur layout, warna, tipografi, dan komponen utama dipertahankan. Penyederhanaan boleh dilakukan pada elemen dekoratif yang tidak memengaruhi fungsi.
- Setiap quiz (pre-test dan post-test) di-hardcode dengan 3 soal essay untuk demo.
- Loading state wajib ada saat GLB di-fetch dan diparsing.
- Integrasi GLB asli dari Blender ditunda sampai asset tersedia. Selama pengembangan, simulator bisa menggunakan GLB placeholder sederhana atau mode non-3D untuk menguji state machine.

## 17. Open Questions / Next Steps

1. Kapan asset GLB dari Blender akan tersedia untuk integrasi?
2. Siapa yang akan menyusun 7 langkah prosedur beserta soal pilihan gandanya?
3. Apakah ada kebutuhan khusus untuk nama modul atau path URL?

---

**Design Reference:** `phyxis_design_system/DESIGN.md` dan folder mockup HTML di `phyxis_design_system/`.

**Animator Spec:** `docs/animator-spec-m4.md`.

**Domain Language:** `CONTEXT.md`.
