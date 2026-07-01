# Spesifikasi Teknis Asset 3D — Simulator M-4 Gerak Jatuh Bebas

Dokumen ini ditujukan untuk animator 3D yang membuat asset dan animasi simulator praktikum Fisika Dasar modul Gerak Jatuh Bebas.

## 1. Tujuan Animasi

Animasi yang dibuat adalah **procedural animation** — urutan langkah penggunaan alat praktikum. Fokusnya pada prosedur, bukan simulasi fisika real-time. Tidak perlu physics engine.

## 2. Format Export

- **Format**: glTF 2.0 Binary (`.glb`)
- **Alasan**: standar web, didukung native oleh Three.js, ukuran file lebih kecil dari FBX, loading lebih cepat.

## 3. Struktur Animasi

- Tiap langkah prosedur harus menjadi **animation clip** yang terpisah.
- Berikan nama clip yang jelas dan konsisten.
- Contoh penamaan:
  - `langkah_01_siapkan_statif`
  - `langkah_02_pasang_pengukur_tinggi`
  - `langkah_03_tempatkan_bola_di_klem`
  - `langkah_04_lepas_bola`
  - `langkah_05_baca_stopwatch`
- Nama clip hanya boleh mengandung huruf kecil, angka, dan garis bawah.

## 4. Durasi dan Frame Rate

- **Frame rate**: 30 fps.
- **Durasi per clip**: 2–5 detik. Cukup untuk memperjelas gerakan, tidak perlu terlalu panjang.
- Tidak perlu clip looping. Setiap clip diputar sekali saja per langkah.

## 5. Konten Visual

- Tampilkan alat praktikum yang dibutuhkan: statif, pengukur tinggi, bola, klem, lantai/meja, stopwatch.
- Gunakan prop sederhana, tidak perlu detail berlebih.
- Hindari teks 3D atau label di dalam model. Label akan ditambahkan dari UI web sebagai overlay.

## 6. Material dan Tekstur

- Gunakan material PBR sederhana (Base Color, Roughness, Metalness).
- Hindari tekstur beresolusi tinggi. Maksimal 1024x1024 px.
- Usahakan satu material dapat digunakan kembali untuk beberapa objek.

## 7. Optimasi

- Apply semua modifier sebelum export.
- Gunakan Decimate atau manual retopology jika polygon terlalu tinggi.
- Aktifkan Draco compression saat export untuk mengurangi ukuran file.
- Target ukuran file GLB final: di bawah 5 MB per modul.

## 8. Skala dan Koordinat

- **Unit**: 1 unit Blender = 1 meter.
- **Up axis**: Y-up (default Blender).
- Posisikan objek utama di sekitar origin (0, 0, 0) agar kamera web mudah diatur.

## 9. Kamera

- Tidak perlu animasi kamera di dalam file GLB.
- Kamera akan dikontrol dari sisi web (React Three Fiber).
- Cukup pastikan seluruh objek terlihat jelas dari sudut pandang depat-atas-samping.

## 10. Pengecekan Hasil Export

Setelah export, uji file GLB di:

https://gltf-viewer.donmccurdy.com/

Pastikan:
- Model tampil normal.
- Animation clips muncul di panel Animations.
- Tidak ada error merah.
- Ukuran file masuk akal.

## 11. Deliverable

Kirimkan ke tim web developer:
- File `.glb` hasil export.
- Daftar nama animation clip beserta deskripsi singkat apa yang terjadi di tiap clip.
- Screenshot atau video preview (opsional, tapi sangat disarankan).

## 12. Catatan Penting

- Jangan membuat animasi bercabang. Urutan adalah linear: langkah 1 → langkah 2 → langkah 3, dan seterusnya.
- Jangan menyematkan audio di dalam GLB.
- Jangan menyematkan UI, teks penjelasan, atau tombol di dalam model 3D. Semua itu akan dibuat di web.
