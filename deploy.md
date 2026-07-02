# Panduan Deployment Portofolio Next.js

Portofolio ini dibangun menggunakan **Next.js** dan siap untuk di-deploy (di-hosting) agar bisa diakses oleh publik. Berikut adalah beberapa cara mudah untuk mendepoy proyek ini dari repositori GitHub Anda.

---

## 🚀 Opsi 1: Vercel (Sangat Direkomendasikan & Paling Mudah)
Vercel adalah perusahaan di balik Next.js. Oleh karena itu, deployment di Vercel sangat cepat, optimal, dan gratis untuk kebutuhan personal.

1. Buka [Vercel.com](https://vercel.com/) dan daftar/masuk menggunakan akun **GitHub** Anda.
2. Di dashboard utama, klik tombol hitam **"Add New..."** lalu pilih **"Project"**.
3. Pada bagian *Import Git Repository*, temukan repo `portofolio-saya` dan klik **"Import"**.
4. Di halaman pengaturan:
   - **Framework Preset**: Akan otomatis mendeteksi *Next.js*.
   - **Build Command & Output Directory**: Biarkan secara *default*.
5. Klik **"Deploy"**.
6. Tunggu sekitar 1-2 menit. Jika sudah, Anda akan mendapatkan efek konfeti dan tautan web portofolio Anda siap diakses! (Tautan biasanya berupa `portofolio-saya.vercel.app`).

---

## ☁️ Opsi 2: Netlify (Alternatif Gratis)
Netlify adalah alternatif populer yang juga mendukung framework Next.js secara sempurna.

1. Buka [Netlify.com](https://www.netlify.com/) dan masuk menggunakan **GitHub**.
2. Klik **"Add new site"** lalu pilih **"Import an existing project"**.
3. Pilih penyedia Git yaitu **GitHub**, berikan otorisasi jika diminta, lalu pilih repositori `portofolio-saya`.
4. Pengaturan build akan terisi otomatis. Langsung klik **"Deploy site"**.
5. Tunggu proses *building* selesai dan web Anda akan online.

---

## 🖥️ Opsi 3: Menggunakan VPS Server (Cpanel / Hostinger / DigitalOcean)
Jika Anda menyewa *Virtual Private Server* (VPS) atau layanan hosting yang mendukung Node.js.

1. Hubungkan ke server Anda (via SSH) atau buka terminal dari panel hosting Anda.
2. Kloning (Clone) repositori ke server Anda:
   ```bash
   git clone https://github.com/syihab-zuhri/portofolio-saya.git
   cd portofolio-saya
   ```
3. Instal semua paket *(dependencies)*:
   ```bash
   npm install
   ```
4. Buat versi optimal untuk produksi *(Production Build)*:
   ```bash
   npm run build
   ```
5. Jalankan website:
   ```bash
   npm start
   ```
   *(Web akan berjalan di port `3000`)*.
6. **(Direkomendasikan)** Gunakan manajer proses seperti **PM2** agar website Anda tetap berjalan meskipun terminal ditutup:
   ```bash
   npm install -g pm2
   pm2 start npm --name "portofolio" -- start
   ```

---

## 💡 Tips & Trik Tambahan
- **Otomatis Update (CI/CD)**: Jika Anda menggunakan Vercel atau Netlify, Anda hanya perlu melakukan `git push` dari komputer (VS Code) ke GitHub ketika Anda memperbarui kode. Vercel/Netlify akan mendeteksinya dan otomatis memperbarui website Anda secara otomatis!
- **Domain Kustom**: Anda dapat menambahkan nama domain milik Anda sendiri (contoh: `andirizky.my.id`) secara gratis melalui menu **Settings > Domains** di dalam *dashboard* Vercel atau Netlify Anda.
