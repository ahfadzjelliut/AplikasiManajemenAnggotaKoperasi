
## Tentang Aplikasi Manajemen Anggota Koperasi

Aplikasi Manajemen Anggota Koperasi adalah aplikasi yang tujuannya dibuat untuk manajemen struktur anggota pada 
koperasi, berikut beberapa fitur pada aplikasi:

- Mempunyai fitur login untuk keamanan user level
- Super Admin dapat mengelola dan memantau seluruh user level
- Front Office dapat mempunyai anggota dan mengelola datanya
- anggota dapat melihat data milik pribadi
- terdapat fitur pencarian


## Cara Penginstalan

Install Laragon terlebih dahulu
```bash
composer install

npm install
```
-download AplikasiManajemenAplikasi.zip yang ada di github
-taruh di folder "../laragon/www/" tempat beberapa running  
-kemudian ekstrak isi file AplikasiManajemenAplikasi.zip

## Cara Running Aplikasi

Cara running nya

-Pada laragon aktifkan apache dan mysqlnya

-Kemudian laragon gunakan terminal kemudian ketik
```bash
cd AplikasiManajemenAnggotaKoperasi

php artisan serve
```

kemudian untuk terminal satunya pada bagian foldernya jalankan
```bash
npm run dev
```

## Note

ada beberapa fitur eror :

-seperti tidak bisa mengambil data anggota sesuai fo
-ubah data diri anggota masih belum berfungsi dengan baik
