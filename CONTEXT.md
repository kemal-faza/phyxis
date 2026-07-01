# CONTEXT.md — PhyXis

Glossary domain language untuk proyek PhyXis. File ini berisi definisi istilah yang sudah disepakati selama sesi desain. Tidak boleh ada detail implementasi di sini.

## Domain Terms

### Procedural Animation
Animasi keyframe yang dibuat di Blender untuk menggambarkan urutan prosedur penggunaan alat praktikum. Bukan simulasi fisika real-time. Tiap clip merepresentasikan satu langkah prosedur.

_Avoid_: Jangan menyamakan dengan physics simulation atau simulasi fisika interaktif.

### Animation Clip
Segmen animasi individual di dalam file GLB yang merepresentasikan satu langkah prosedur. Contoh nama: `langkah_01_pasang_statif`.

_Avoid_: Jangan disebut "scene" atau "slide" — itu istilah presentasi, bukan animasi 3D.

### GLB (glTF 2.0 Binary)
Format file 3D standar web yang diekspor dari Blender. Berisi mesh, material, kamera, dan animation clips. Format ini yang akan dimuat oleh Three.js/React Three Fiber di browser.

_Avoid_: Jangan pakai FBX, OBJ, atau format 3D lain untuk asset final.

### Simulator Step
Satu langkah interaksi di dalam simulator virtual. Praktikan memilih jawaban dari beberapa opsi. Jika benar, animation clip berikutnya diputar. Jika salah, sistem menampilkan informasi kesalahan tanpa memutar animasi.

_Avoid_: Bukan "level" atau "stage" — fokusnya adalah prosedur praktikum.

### Correct Answer Flow
Alur ketika praktikan memilih jawaban benar pada satu simulator step: animation clip untuk langkah berikutnya diputar, sistem mencatat waktu keputusan, lalu berpindah ke step berikutnya.

_Avoid_: Bukan "success state" secara umum — istilah ini khusus untuk simulator.

### Wrong Answer Flow
Alur ketika praktikan memilih jawaban salah: sistem menampilkan informasi bahwa jawaban salah, animasi tidak diputar, praktikan dapat mencoba lagi. Kesalahan dicatat untuk metrik kelancaran.

_Avoid_: Jangan disebut "game over" — ini adalah pembelajaran, bukan permainan.

### KPS Passport
Catatan status pencapaian Keterampilan Proses Sains (KPS) per mahasiswa dalam format lulus/belum lulus, bukan skor numerik. Status ditetapkan oleh AI, asisten, dan dosen.

_Avoid_: Bukan "rapor" atau "transkrip" — rapor adalah agregat nilai, KPS Passport adalah catatan kompetensi.

### Rubrik Digital
Standar penilaian lima komponen praktikum (pre-test, kelancaran simulator, kelancaran praktikum nyata, post-test, laporan akhir) yang bobotnya ditetapkan dosen dan diagregasi sistem.

_Avoid_: Jangan disamakan dengan KPS Passport.

### Progressive Web App (PWA)
Aplikasi web yang dapat di-install ke perangkat pengguna. Di MVP hanya manifest dan kemampuan install, tanpa fitur offline complex.

_Avoid_: Bukan "aplikasi native" atau "apk".

### User Role
Peran pengguna dalam sistem: Praktikan, Asisten Laboratorium, Dosen Pengampu, dan Admin. Admin memiliki wewenang tertinggi untuk mengelola peran di bawahnya dan konfigurasi modul praktikum.

_Avoid_: Jangan menyamakan Asisten Laboratorium dengan Dosen Pengampu atau Admin.

### Simulator Module
Satu topik praktikum Fisika Dasar yang memiliki simulator tersendiri. Modul M-4 Gerak Jatuh Bebas adalah modul pertama yang dibangun.

_Avoid_: Bukan "bab" atau "materi" — modul memiliki simulator, rubrik, dan alur praktikum tersendiri.

### Configurable Step
Langkah simulator yang dapat diinput/diedit oleh Admin atau Dosen Pengampu, termasuk soal pilihan ganda, opsi jawaban, jawaban benar, dan nama animation clip yang diputar.

_Avoid_: Bukan "slide" — step adalah unit interaksi yang terhubung dengan animation clip dan metrik.

## Project Scope (MVP)

MVP mencakup 7 halaman utama dari desain:

1. Login/Daftar
2. Dashboard Dosen
3. Dashboard Praktikan + Laporan Akhir
4. KPS Passport Nilai
5. Monitoring Fitur
6. Pre-test AI
7. Simulator M-4 Gerak Jatuh Bebas

Beberapa halaman akan menjadi placeholder statis (UI terlihat, belum interaktif). Halaman simulator adalah prioritas interaktivitas tertinggi.

Modul M-4 Gerak Jatuh Bebas memiliki 7 langkah prosedur praktikum, belum termasuk perakitan alat. Langkah-langkah ini bersifat configurable oleh Admin atau Dosen Pengampu.

## Tech Stack Direction

- Frontend: Next.js 15 + TypeScript + Tailwind CSS
- 3D: React Three Fiber + drei untuk memuat dan mengontrol GLB
- Persistence: localStorage untuk progress simulator dan skor quiz di MVP
- Backend: Ditunda untuk iterasi berikutnya
- Physics engine: Tidak digunakan di MVP karena animasi sudah di-keyframe di Blender
