import { SimulatorStep } from '@/features/simulator/types'

/* ── M-1: Pegas (Konstanta Pegas) ──
   Sumber: PDF Panduan Praktikum Fisika Dasar, M-1 (Pegas)
   Metode Pembebanan (4 langkah) + Metode Getaran (5 langkah) = 9 langkah */
export const M1_STEPS: SimulatorStep[] = [
  {
    id: 'm1-01',
    question: 'Langkah pertama dalam metode pembebanan untuk menentukan konstanta pegas adalah?',
    options: [
      'Menentukan massa pemberat',
      'Meletakkan pegas pada statif',
      'Mengukur panjang pegas',
      'Menghitung konstanta pegas',
    ],
    correctOptionIndex: 0,
    animationClipName: 'm1_beban_1',
    explanation: 'Urutkan langkah percobaan secara logis. Sebelum merakit alat, data apa yang perlu diketahui tentang beban yang akan digunakan?',
  },
  {
    id: 'm1-02',
    question: 'Setelah massa pemberat ditentukan, langkah selanjutnya pada metode pembebanan adalah?',
    options: [
      'Menghitung konstanta pegas',
      'Meletakkan pegas pada statif',
      'Menggantung beban pada pegas',
      'Mencatat waktu osilasi',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm1_beban_2',
    explanation: 'Pegas butuh penyangga kokoh agar bisa menahan beban. Alat laboratorium apa yang biasa dipakai sebagai penyangga?',
  },
  {
    id: 'm1-03',
    question: 'Pengukuran yang dilakukan pada metode pembebanan adalah?',
    options: [
      'Mengukur diameter pegas',
      'Mengukur panjang pegas tanpa beban dan setelah diberikan beban',
      'Mengukur waktu osilasi pegas',
      'Mengukur massa pegas',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm1_beban_3',
    explanation: 'Kita ingin tahu seberapa besar perubahan panjang pegas karena beban. Kondisi apa saja yang perlu diukur panjangnya?',
  },
  {
    id: 'm1-04',
    question: 'Setelah pengukuran pertama selesai, langkah berikutnya dalam metode pembebanan adalah?',
    options: [
      'Mengganti jenis pegas',
      'Mengulangi dengan massa beban yang berbeda',
      'Menghitung konstanta pegas',
      'Menyimpulkan hasil percobaan',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm1_beban_4',
    explanation: 'Satu data belum cukup untuk kesimpulan yang baik. Dalam eksperimen, apa yang dilakukan untuk memperkuat hasil?',
  },
  {
    id: 'm1-05',
    question: 'Langkah pertama dalam metode getaran (osilasi) pada percobaan pegas adalah?',
    options: [
      'Menentukan massa pemberat',
      'Menarik beban ke bawah',
      'Meletakkan pegas pada statif',
      'Mencatat waktu osilasi',
    ],
    correctOptionIndex: 0,
    animationClipName: 'm1_getar_1',
    explanation: 'Metode getaran dan pembebanan punya prinsip awal yang sama. Apa data paling mendasar yang harus diketahui sebelum memulai?',
  },
  {
    id: 'm1-06',
    question: 'Setelah massa pemberat ditentukan, pegas diletakkan pada?',
    options: ['Meja', 'Statif', 'Lantai', 'Neraca digital'],
    correctOptionIndex: 1,
    animationClipName: 'm1_getar_2',
    explanation: 'Agar pegas bisa berosilasi vertikal, ia perlu digantung. Alat laboratorium apa yang berfungsi sebagai tempat menggantung?',
  },
  {
    id: 'm1-07',
    question: 'Untuk memulai osilasi pada pegas, langkah yang dilakukan adalah?',
    options: [
      'Memanaskan pegas',
      'Menarik beban kemudian melepaskannya',
      'Memutar beban',
      'Menekan beban ke bawah',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm1_getar_3',
    explanation: 'Pegas perlu diberi simpangan dari posisi diam agar mulai bergerak periodik. Bagaimana cara memberi simpangan awal pada beban?',
  },
  {
    id: 'm1-08',
    question: 'Data yang dicatat dalam metode getaran adalah?',
    options: [
      'Massa beban',
      'Panjang pegas',
      'Waktu yang dibutuhkan pegas untuk berosilasi',
      'Suhu ruangan',
    ],
    correctOptionIndex: 2,
    animationClipName: 'm1_getar_4',
    explanation: 'Pada getaran, besaran yang diukur berkaitan dengan sifat periodik. Besaran apa yang terkait dengan lama waktu gerak bolak-balik?',
  },
  {
    id: 'm1-09',
    question: 'Pengulangan pada metode getaran dilakukan dengan variasi?',
    options: [
      'Jenis pegas',
      'Massa beban yang berbeda',
      'Sudut tarikan',
      'Panjang tali',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm1_getar_5',
    explanation: 'Agar hasilnya bisa dibandingkan dengan metode pembebanan, variabel apa yang sebaiknya diubah pada setiap pengulangan?',
  },
]

/* ── M-2: Viskosimeter Stokes ──
   Sumber: PDF Panduan Praktikum Fisika Dasar, M-2 (Viskosimeter Stokes)
   4 langkah */
export const M2_STEPS: SimulatorStep[] = [
  {
    id: 'm2-01',
    question: 'Langkah pertama percobaan viskosimeter Stokes adalah?',
    options: [
      'Menjatuhkan kelereng ke dalam gliserin',
      'Mengukur massa dan volume kelereng untuk memperoleh massa jenis kelereng',
      'Mencatat waktu tempuh kelereng',
      'Mengisi tabung dengan gliserin',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm2_01',
    explanation: 'Sebelum percobaan dimulai, kita perlu tahu karakteristik benda yang akan dijatuhkan. Data fisika apa tentang kelereng yang harus dikumpulkan?',
  },
  {
    id: 'm2-02',
    question: 'Setelah mengukur kelereng, langkah selanjutnya adalah?',
    options: [
      'Menjatuhkan kelereng ke dalam gliserin',
      'Mengukur massa dan volume gliserin untuk memperoleh massa jenis gliserin',
      'Menghitung koefisien viskositas',
      'Membersihkan alat',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm2_02',
    explanation: 'Selain benda, kita juga perlu tahu sifat fluida yang digunakan. Data apa tentang gliserin yang masih diperlukan?',
  },
  {
    id: 'm2-03',
    question: 'Bagaimana cara mengukur waktu tempuh kelereng dalam gliserin?',
    options: [
      'Menggunakan mistar untuk mengukur jarak',
      'Menjatuhkan kelereng pada permukaan gliserin dan mengukur waktu tempuh hingga kedalaman tertentu',
      'Menggunakan neraca digital',
      'Menghitung secara manual tanpa alat',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm2_03',
    explanation: 'Untuk menghitung kecepatan terminal, kita perlu tahu waktu yang dibutuhkan kelereng untuk menempuh jarak tertentu dalam fluida. Bagaimana cara mendapatkannya?',
  },
  {
    id: 'm2-04',
    question: 'Pengulangan pada percobaan viskosimeter Stokes dilakukan dengan variasi?',
    options: [
      'Suhu gliserin',
      'Kedalaman dan ukuran kelereng',
      'Jenis zat cair',
      'Warna kelereng',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm2_04',
    explanation: 'Data yang bervariasi memberi gambaran yang lebih lengkap. Aspek apa pada percobaan ini yang bisa diubah tanpa mengganti fluida?',
  },
]

/* ── M-4: Gerak Jatuh Bebas ──
   Sumber: PDF Panduan Praktikum Fisika Dasar, M-4 (Gerak Jatuh Bebas)
   Peralatan modern: gerbang cahaya, pencacah waktu, magnet elektrik
   7 langkah */
export const M4_STEPS: SimulatorStep[] = [
  {
    id: 'm4-01',
    question: 'Langkah pertama percobaan gerak jatuh bebas setelah alat siap adalah?',
    options: [
      'Mengukur massa bola besi',
      'Mengatur jarak gerbang cahaya pertama dan kedua dengan pusat magnet',
      'Menyalakan pencacah waktu',
      'Menekan tombol E.Magnet',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm4_01',
    explanation: 'Sebelum menyalakan alat ukur, posisi sensor harus sesuai dengan lintasan benda yang akan dijatuhkan. Apa yang perlu diatur pada kedua sensor cahaya?',
  },
  {
    id: 'm4-02',
    question: 'Untuk memastikan jalur jatuhnya bola tepat masuk ke area gerbang cahaya, alat yang digunakan adalah?',
    options: ['Mistar', 'Plumb bomb', 'Magnet', 'Bantalan'],
    correctOptionIndex: 1,
    animationClipName: 'm4_02',
    explanation: 'Agar bola tidak menyentuh sensor saat jatuh, lintasannya harus benar-benar vertikal dan presisi. Alat apa yang biasa dipakai untuk memeriksa kelurusan vertikal?',
  },
  {
    id: 'm4-03',
    question: 'Pencacah waktu pada percobaan gerak jatuh bebas diatur pada mode?',
    options: [
      'Timing 2',
      'Cycle',
      'Gravity acceleration',
      'Frequency',
    ],
    correctOptionIndex: 2,
    animationClipName: 'm4_03',
    explanation: 'Pencacah waktu memiliki beberapa mode pengukuran. Mode mana yang secara khusus dirancang untuk mengukur waktu yang dipengaruhi gravitasi?',
  },
  {
    id: 'm4-04',
    question: 'Setelah semua pengaturan selesai, bola besi dipasang pada?',
    options: ['Statif', 'Bantalan', 'Pusat magnet', 'Gerbang cahaya'],
    correctOptionIndex: 2,
    animationClipName: 'm4_04',
    explanation: 'Bola harus ditahan pada posisi awal tanpa dipegang tangan. Bagian alat mana yang berfungsi menahan bola sebelum dijatuhkan?',
  },
  {
    id: 'm4-05',
    question: 'Bola besi dijatuhkan dengan cara?',
    options: [
      'Melepas bola dari tangan',
      'Menekan tombol E.Magnet sehingga LED mati dan bola jatuh',
      'Membuka katup penahan',
      'Memutar statif',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm4_05',
    explanation: 'Karena bola ditahan oleh elektromagnet, bagaimana cara melepaskannya tanpa menyentuh bola secara langsung?',
  },
  {
    id: 'm4-06',
    question: 'Data yang dicatat dari pencacah waktu setelah bola jatuh adalah?',
    options: [
      'Massa bola besi',
      'Waktu yang ditunjukkan pencacah waktu',
      'Suhu ruangan',
      'Ketinggian awal',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm4_06',
    explanation: 'Setelah bola melewati kedua sensor, pencacah waktu menampilkan hasil. Besaran apa yang tertera di layar pencacah waktu?',
  },
  {
    id: 'm4-07',
    question: 'Pengulangan percobaan gerak jatuh bebas dilakukan dengan variasi?',
    options: [
      'Massa bola besi',
      'Ketinggian awal bola',
      'Jarak antar gerbang cahaya',
      'Jenis bola',
    ],
    correctOptionIndex: 2,
    animationClipName: 'm4_07',
    explanation: 'Untuk mendapatkan beberapa titik data, aspek apa yang diubah antar percobaan tanpa mengganti alat atau bola?',
  },
]

/* ── M-5: Momen Kelembaman ──
   Sumber: PDF Panduan Praktikum Fisika Dasar, M-5 (Momen Kelembaman)
   Bentuk Geometri (1 langkah) + Ayunan Torsi (5 langkah) = 6 langkah */
export const M5_STEPS: SimulatorStep[] = [
  {
    id: 'm5-01',
    question: 'Pada metode geometri, langkah awal untuk menghitung momen kelembaman adalah?',
    options: [
      'Mengukur diameter dan menimbang massa dari masing-masing objek',
      'Menyiapkan alat ayunan torsi',
      'Mengatur gerbang cahaya',
      'Mencatat waktu osilasi',
    ],
    correctOptionIndex: 0,
    animationClipName: 'm5_geo_1',
    explanation: 'Momen inersia secara geometris dihitung dari dimensi dan massa. Data fisik apa yang perlu dikumpulkan dari setiap objek?',
  },
  {
    id: 'm5-02',
    question: 'Langkah pertama dalam metode ayunan torsi adalah?',
    options: [
      'Menimbang massa objek',
      'Menyiapkan alat momen inersia beserta gerbang cahaya',
      'Mengatur sudut ayunan',
      'Mencatat waktu osilasi',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm5_torsi_1',
    explanation: 'Sebelum melakukan pengukuran, peralatan harus dalam keadaan siap pakai terlebih dahulu. Apa yang perlu dipersiapkan?',
  },
  {
    id: 'm5-03',
    question: 'Alat momen inersia diayunkan dengan sudut?',
    options: ['45\u00B0', '60\u00B0', '90\u00B0', '180\u00B0'],
    correctOptionIndex: 2,
    animationClipName: 'm5_torsi_2',
    explanation: 'Agar konsisten antar pengukuran, simpangan awal perlu distandarisasi. Besaran sudut berapa yang umum digunakan sebagai simpangan standar?',
  },
  {
    id: 'm5-04',
    question: 'Pencacah waktu pada ayunan torsi diatur dalam mode?',
    options: [
      'Timing 2',
      'Gravity acceleration',
      'Cycle, dengan penghitungan 10 kali osilasi',
      'Frequency',
    ],
    correctOptionIndex: 2,
    animationClipName: 'm5_torsi_3',
    explanation: 'Untuk mengukur periode ayunan, kita butuh waktu untuk beberapa siklus. Mode dan jumlah siklus apa yang sesuai?',
  },
  {
    id: 'm5-05',
    question: 'Setelah pencacah waktu selesai, data yang dicatat adalah?',
    options: [
      'Massa objek',
      'Diameter objek',
      'Waktu yang ditunjukkan pencacah waktu',
      'Sudut ayunan',
    ],
    correctOptionIndex: 2,
    animationClipName: 'm5_torsi_4',
    explanation: 'Hasil pengukuran dari pencacah waktu digunakan untuk menghitung periode osilasi. Data apa yang langsung bisa dibaca dari alat tersebut?',
  },
  {
    id: 'm5-06',
    question: 'Pengulangan pada ayunan torsi dilakukan dengan variasi?',
    options: [
      'Sudut ayunan',
      'Berbagai variasi objek',
      'Jumlah osilasi',
      'Suhu ruangan',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm5_torsi_5',
    explanation: 'Tujuan percobaan adalah membandingkan momen inersia berbagai bentuk. Apa yang diubah setiap pengulangan untuk mencapai tujuan itu?',
  },
]

/* ── M-6: Pesawat Atwood ──
   Sumber: PDF Panduan Praktikum Fisika Dasar, M-6 (Pesawat Atwood)
   Percobaan GLB (6 langkah) + Percobaan GLBB (6 langkah) = 12 langkah */
export const M6_STEPS: SimulatorStep[] = [
  {
    id: 'm6-glb-01',
    question: 'Langkah pertama percobaan GLB pada pesawat Atwood adalah?',
    options: [
      'Menambahkan beban pada m2',
      'Mengatur posisi massa m2 pada ketinggian tertentu dan meletakkan penahan beban berlubang di bawahnya',
      'Menyalakan pencacah waktu',
      'Melepaskan penahan beban',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glb_1',
    explanation: 'Sebelum menambah beban atau menyalakan alat, posisi awal massa harus ditentukan dulu. Bagaimana mengatur posisi m2 dan penahannya?',
  },
  {
    id: 'm6-glb-02',
    question: 'Setelah mengatur posisi m2, langkah selanjutnya pada percobaan GLB adalah?',
    options: [
      'Mengatur jarak gerbang cahaya',
      'Menambahkan beban tambahan pada m2',
      'Melepaskan penahan beban',
      'Mencatat waktu tempuh',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glb_2',
    explanation: 'Agar ada perbedaan massa yang menyebabkan sistem bergerak, apa yang perlu ditambahkan pada massa m2?',
  },
  {
    id: 'm6-glb-03',
    question: 'Pada pesawat Atwood, jarak yang diatur adalah antara?',
    options: [
      'Massa m1 dan massa m2',
      'Gerbang cahaya pertama dan gerbang cahaya kedua',
      'Katrol dan beban',
      'Tiang berskala dan lantai',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glb_3',
    explanation: 'Untuk mengukur waktu tempuh, kita perlu menentukan panjang lintasan yang akan dilalui massa. Jarak antara dua titik apa yang perlu diatur?',
  },
  {
    id: 'm6-glb-04',
    question: 'Pencacah waktu pada percobaan GLB diatur pada function?',
    options: ['Timing 1', 'Timing 2', 'Gravity acceleration', 'Cycle'],
    correctOptionIndex: 1,
    animationClipName: 'm6_glb_4',
    explanation: 'Pencacah waktu punya beberapa function untuk pengukuran yang berbeda. Function mana yang mengukur interval waktu antara dua sensor?',
  },
  {
    id: 'm6-glb-05',
    question: 'Percobaan dimulai dengan cara?',
    options: [
      'Menekan tombol start pada pencacah waktu',
      'Melepaskan penahan pada beban m1',
      'Menjatuhkan beban m2',
      'Memutar katrol',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glb_5',
    explanation: 'Setelah semua siap, sistem masih diam karena ditahan. Tindakan apa yang membuat sistem mulai bergerak?',
  },
  {
    id: 'm6-glb-06',
    question: 'Pengulangan pada percobaan GLB dilakukan dengan variasi?',
    options: [
      'Massa beban',
      'Jarak antara gerbang cahaya pertama dengan gerbang cahaya kedua',
      'Jenis tali',
      'Ukuran katrol',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glb_6',
    explanation: 'Untuk mendapatkan data kecepatan pada berbagai lintasan, aspek apa yang diubah setiap pengulangan?',
  },
  {
    id: 'm6-glbb-07',
    question: 'Perbedaan persiapan GLBB dengan GLB adalah posisi gerbang cahaya pertama yang?',
    options: [
      'Di atas katrol',
      'Tepat di bawah massa m2',
      'Sejajar dengan penahan beban',
      'Di lantai',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glbb_1',
    explanation: 'Pada GLBB, kita ingin mengukur waktu dari awal gerakan. Di mana sebaiknya sensor pertama ditempatkan agar bisa menangkap momen awal gerak?',
  },
  {
    id: 'm6-glbb-08',
    question: 'Setelah posisi diatur, langkah selanjutnya pada GLBB adalah?',
    options: [
      'Menambahkan beban tambahan pada m2',
      'Melepaskan penahan beban',
      'Mencatat waktu tempuh',
      'Mengatur pencacah waktu',
    ],
    correctOptionIndex: 0,
    animationClipName: 'm6_glbb_2',
    explanation: 'Sama seperti GLB, setelah posisi diatur apa yang perlu dilakukan pada massa m2 agar ada perbedaan massa?',
  },
  {
    id: 'm6-glbb-09',
    question: 'Pada GLBB, jarak yang diatur adalah antara?',
    options: [
      'Massa m1 dan massa m2',
      'Gerbang cahaya pertama dan gerbang cahaya kedua',
      'Katrol dan penahan',
      'Tiang dan lantai',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glbb_3',
    explanation: 'Sama seperti pada GLB, panjang lintasan perlu ditentukan. Jarak antara dua titik apa yang diatur?',
  },
  {
    id: 'm6-glbb-10',
    question: 'Pada percobaan GLBB, pencacah waktu diatur pada function?',
    options: ['Timing 1', 'Timing 2', 'Gravity acceleration', 'Cycle'],
    correctOptionIndex: 1,
    animationClipName: 'm6_glbb_4',
    explanation: 'Sama seperti pada GLB, function apa yang digunakan untuk mengukur interval waktu antara dua sensor?',
  },
  {
    id: 'm6-glbb-11',
    question: 'Cara memulai percobaan GLBB adalah?',
    options: [
      'Menekan tombol start pada pencacah waktu',
      'Melepaskan penahan pada beban m1',
      'Menjatuhkan beban m2',
      'Menambahkan beban',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glbb_5',
    explanation: 'Sama seperti pada GLB, bagaimana cara memulai gerakan sistem yang sedang ditahan?',
  },
  {
    id: 'm6-glbb-12',
    question: 'Pengulangan pada percobaan GLBB dilakukan dengan variasi?',
    options: [
      'Massa beban tambahan',
      'Jarak antara gerbang cahaya pertama dengan gerbang cahaya kedua',
      'Jenis tali',
      'Ukuran katrol',
    ],
    correctOptionIndex: 1,
    animationClipName: 'm6_glbb_6',
    explanation: 'Untuk mendapatkan data percepatan pada berbagai lintasan, aspek apa yang divariasikan antar percobaan?',
  },
]

export const MODULE_STEPS: Record<string, SimulatorStep[]> = {
  'M-1': M1_STEPS,
  'M-2': M2_STEPS,
  'M-4': M4_STEPS,
  'M-5': M5_STEPS,
  'M-6': M6_STEPS,
}
