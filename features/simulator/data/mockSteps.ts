import { SimulatorStep } from '@/features/simulator/types'
import { M4_STEPS } from './m4Steps'

export const M1_STEPS: SimulatorStep[] = [
  {
    id: 'm1-01',
    question: 'Alat ukur yang tepat untuk mengukur panjang benda adalah?',
    options: ['Mistar', 'Stopwatch', 'Neraca', 'Termometer'],
    correctOptionIndex: 0,
    animationClipName: 'm1_alat_ukur',
    explanation: 'Mistar digunakan untuk mengukur panjang/ketinggian benda.',
  },
  {
    id: 'm1-02',
    question: 'Sebelum mengukur, langkah pertama yang harus dilakukan adalah?',
    options: ['Membaca skala', 'Mengkalibrasi alat', 'Mencatat suhu', 'Menyiapkan grafik'],
    correctOptionIndex: 1,
    animationClipName: 'm1_kalibrasi',
    explanation: 'Kalibrasi alat ukur penting untuk memastikan akurasi pengukuran.',
  },
  {
    id: 'm1-03',
    question: 'Hasil pengukuran mistar yang benar adalah?',
    options: [
      'Membaca di ujung mistar',
      'Membaca dari angka 0 sejajar dengan ujung benda',
      'Membaca dari angka terbesar',
      'Membaca dari ujung mistar bagian dalam',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm1_baca_skala',
    explanation: 'Posisi mata harus sejajar dengan skala untuk menghindari kesalahan paralaks.',
  },
]

export const M2_STEPS: SimulatorStep[] = [
  {
    id: 'm2-01',
    question: 'Vektor adalah besaran yang memiliki?',
    options: ['Nilai saja', 'Arah saja', 'Nilai dan arah', 'Satuan saja'],
    correctOptionIndex: 2,
    animationClipName: 'm2_definisi',
    explanation: 'Vektor memiliki besar (magnitude) dan arah (direction).',
  },
  {
    id: 'm2-02',
    question: 'Resultan dua vektor yang saling tegak lurus dapat dihitung dengan?',
    options: ['Pythagoras', 'Perkalian', 'Pembagian', 'Logaritma'],
    correctOptionIndex: 0,
    animationClipName: 'm2_resultan',
    explanation: 'R = \u221A(A\u00B2 + B\u00B2) untuk vektor yang saling tegak lurus.',
  },
  {
    id: 'm2-03',
    question: 'Metode penjumlahan vektor yang tepat adalah?',
    options: ['Metode jajar genjang', 'Metode kuadrat', 'Metode perkalian skalar', 'Metode integral'],
    correctOptionIndex: 0,
    animationClipName: 'm2_jajar_genjang',
    explanation: 'Metode jajar genjang dan segitiga adalah metode dasar penjumlahan vektor.',
  },
  {
    id: 'm2-04',
    question: 'Vektor yang memiliki besar yang sama tetapi arah berlawanan disebut?',
    options: ['Vektor nol', 'Vektor satuan', 'Vektor negatif', 'Vektor resultan'],
    correctOptionIndex: 2,
    animationClipName: 'm2_negatif',
    explanation: 'Vektor negatif adalah vektor dengan besar sama tetapi arah 180\u00B0 berlawanan.',
  },
]

export const M3_STEPS: SimulatorStep[] = [
  {
    id: 'm3-01',
    question: 'Gerak lurus beraturan (GLB) memiliki ciri?',
    options: ['Kecepatan tetap', 'Percepatan tetap', 'Kecepatan berubah', 'Jarak tetap'],
    correctOptionIndex: 0,
    animationClipName: 'm3_glb',
    explanation: 'GLB adalah gerak dengan kecepatan konstan dan percepatan nol.',
  },
  {
    id: 'm3-02',
    question: 'Rumus jarak pada GLB adalah?',
    options: ['s = v.t', 's = 1/2 a.t\u00B2', 'v = a.t', 's = v\u2080.t + 1/2 a.t\u00B2'],
    correctOptionIndex: 0,
    animationClipName: 'm3_rumus_glb',
    explanation: 'Pada GLB, jarak = kecepatan x waktu (s = v.t).',
  },
  {
    id: 'm3-03',
    question: 'Grafik hubungan jarak terhadap waktu pada GLB berbentuk?',
    options: ['Garis lurus horizontal', 'Garis lurus miring', 'Parabola', 'Hiperbola'],
    correctOptionIndex: 1,
    animationClipName: 'm3_grafik',
    explanation: 'Grafik s-t pada GLB adalah garis lurus dengan kemiringan tetap (kecepatan).',
  },
]

export const MODULE_STEPS: Record<string, SimulatorStep[]> = {
  'M-1': M1_STEPS,
  'M-2': M2_STEPS,
  'M-3': M3_STEPS,
  'M-4': M4_STEPS,
}
