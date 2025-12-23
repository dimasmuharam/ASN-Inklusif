---
layout: default
title: "Asesmen Diagnostik Inklusivitas Instansi"
permalink: /tool/asesmen/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

<style>
  /* 1. Style Form & Container */
  .audit-container { max-width: 800px; margin: 40px auto; font-family: sans-serif; }
  .question-card { background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
  .question-card h3 { margin-top: 0; font-size: 1.1em; color: var(--primary-color); }
  
  .option-label { display: block; padding: 12px; border: 1px solid var(--border-color); border-radius: 6px; margin-top: 8px; cursor: pointer; transition: 0.2s; }
  .option-label:hover { background: rgba(0, 43, 92, 0.05); border-color: var(--primary-color); }
  
  /* 2. Tombol & Hasil */
  .btn-primary { background: #002b5c; color: white; padding: 15px 30px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; width: 100%; font-weight: bold; margin-top: 20px; }
  .btn-primary:hover { background: #004080; }
  
  #result-area { display: none; text-align: center; margin-top: 40px; padding: 30px; background: #e3f2fd; border-radius: 12px; border: 1px solid #90caf9; }

  /* 3. DESAIN DOKUMEN HASIL (Disembunyikan) */
  #certificate-node {
    position: fixed; left: -9999px; top: 0;
    width: 1000px; height: 1414px; /* Ukuran Kertas A4 Portrait (kurang lebih) */
    background: #fff;
    color: #333;
    padding: 60px;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    border: 1px solid #ddd; /* Border tipis saja buat margin */
  }

  /* Layout Dokumen Resmi */
  .doc-header { border-bottom: 5px double #002b5c; padding-bottom: 20px; margin-bottom: 30px; display: flex; align-items: center; gap: 20px; }
  .doc-logo { height: 100px; }
  .doc-kop { text-align: left; flex-grow: 1; }
  .doc-kop h1 { margin: 0; font-size: 28px; color: #002b5c; text-transform: uppercase; }
  .doc-kop p { margin: 5px 0 0; font-size: 14px; color: #666; }
  
  .doc-title { text-align: center; margin-bottom: 40px; }
  .doc-title h2 { margin: 0; font-size: 24px; text-decoration: underline; }
  .doc-number { font-size: 14px; color: #555; margin-top: 5px; }

  .doc-grid { display: grid; grid-template-columns: 150px 1fr; gap: 10px; margin-bottom: 30px; font-size: 16px; }
  .doc-label { font-weight: bold; }
  .doc-val { border-bottom: 1px dotted #999; }

  .doc-score-box { background: #f9f9f9; border: 2px solid #002b5c; padding: 20px; text-align: center; margin: 30px 0; border-radius: 10px; }
  .doc-score-val { font-size: 48px; font-weight: bold; color: #002b5c; display: block; }
  .doc-predikat { font-size: 24px; font-weight: bold; margin-top: 10px; display: block; }

  .doc-desc { font-size: 16px; line-height: 1.6; text-align: justify; margin-bottom: 30px; }
  .doc-recommendation { background: #fff3cd; border-left: 5px solid #ffc107; padding: 15px; font-size: 15px; margin-bottom: 40px; }

  .doc-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 50px; }
  .qr-area { text-align: center; font-size: 12px; }
  .qr-img { width: 120px; height: 120px; margin-bottom: 10px; border: 1px solid #eee; }
  .sign-area { text-align: center; width: 300px; }
  .sign-name { font-weight: bold; text-decoration: underline; margin-top: 80px; font-size: 18px; }
</style>

<div class="container audit-container">
  
  <div style="text-align: center; margin-bottom: 40px;">
    <h1>🔍 Audit Diagnostik Inklusivitas</h1>
    <p>Asesmen awal untuk memetakan kesiapan instansi ramah disabilitas.</p>
  </div>

  <div class="question-card" style="border-left: 5px solid var(--accent-color);">
    <h3 style="margin-bottom: 15px;">Identitas Penerima Laporan</h3>
    <label>Nama Pejabat/PIC:</label>
    <input type="text" id="userName" placeholder="Nama Lengkap..." style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
    <label>Nama Instansi/Unit Kerja:</label>
    <input type="text" id="agencyName" placeholder="Nama Instansi..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
  </div>

  <form id="auditForm">
    <div class="question-card">
      <h3>1. Aksesibilitas Fisik (Bidang Miring/Ramp)</h3>
      <label class="option-label"><input type="radio" name="q1" value="20"> Tersedia sesuai standar teknis</label>
      <label class="option-label"><input type="radio" name="q1" value="10"> Tersedia tapi belum standar</label>
      <label class="option-label"><input type="radio" name="q1" value="0"> Belum tersedia</label>
    </div>

    <div class="question-card">
      <h3>2. Fasilitas Sanitasi (Toilet Aksesibel)</h3>
      <label class="option-label"><input type="radio" name="q2" value="20"> Tersedia, pintu lebar & ada handrail</label>
      <label class="option-label"><input type="radio" name="q2" value="10"> Toilet umum luas (bisa masuk kursi roda)</label>
      <label class="option-label"><input type="radio" name="q2" value="0"> Belum tersedia</label>
    </div>

    <div class="question-card">
      <h3>3. Aksesibilitas Digital (Website & Aplikasi)</h3>
      <label class="option-label"><input type="radio" name="q3" value="20"> Website bisa dibaca screen reader</label>
      <label class="option-label"><input type="radio" name="q3" value="10"> Ada website, belum diuji aksesibilitas</label>
      <label class="option-label"><input type="radio" name="q3" value="0"> Tidak punya website</label>
    </div>

    <div class="question-card">
      <h3>4. Kebijakan Ketenagakerjaan (Kuota 2%)</h3>
      <label class="option-label"><input type="radio" name="q4" value="20"> Memenuhi/melebihi kuota 2%</label>
      <label class="option-label"><input type="radio" name="q4" value="10"> Ada kebijakan, kuota belum penuh</label>
      <label class="option-label"><input type="radio" name="q4" value="0"> Belum ada kebijakan khusus</label>
    </div>

    <div class="question-card">
      <h3>5. Layanan Komunikasi (Juru Bahasa Isyarat)</h3>
      <label class="option-label"><input type="radio" name="q5" value="20"> Tersedia petugas/JBI on-site</label>
      <label class="option-label"><input type="radio" name="q5" value="10"> Menggunakan tulisan/aplikasi bantu</label>
      <label class="option-label"><input type="radio" name="q5" value="0"> Belum tersedia layanan khusus</label>
    </div>

    <button type="button" onclick="prosesLaporan()" class="btn-primary">📝 Proses & Terbitkan Laporan</button>
  </form>

  <div id="result-area">
    <h2>Laporan Siap!</h2>
    <p>Dokumen hasil asesmen telah dibuat dengan nomor registrasi sistem.</p>
    <button onclick="downloadPDF()" class="btn-primary" style="background: #2e7d32;">
      📥 Download Dokumen Resmi (PNG)
    </button>
  </div>

</div>

<div id="certificate-node">
  
  <div class="doc-header">
    <img src="/assets/img/logo.png" alt="Logo" class="doc-logo">
    <div class="doc-kop">
      <h1>Forum ASN Inklusif</h1>
      <p>Gerakan Nasional Pegawai Sipil Negara Penyandang Disabilitas Indonesia</p>
      <p>www.asninklusif.id | contact@asninklusif.id</p>
    </div>
  </div>

  <div class="doc-title">
    <h2>LAPORAN HASIL ASESMEN DIAGNOSTIK</h2>
    <div class="doc-number" id="doc-nomor">No: ASN/2025/XII/00000</div>
  </div>

  <div class="doc-grid">
    <div class="doc-label">Nama Pejabat</div>
    <div class="doc-val" id="doc-nama">-</div>
    
    <div class="doc-label">Instansi</div>
    <div class="doc-val" id="doc-instansi">-</div>
    
    <div class="doc-label">Tanggal Asesmen</div>
    <div class="doc-val" id="doc-tanggal">-</div>
  </div>

  <div class="doc-desc">
    <p>Berdasarkan pengisian instrumen audit mandiri (Self-Assessment) terhadap indikator aksesibilitas fisik, digital, dan kebijakan layanan publik inklusif, maka instansi tersebut memperoleh hasil sebagai berikut:</p>
  </div>

  <div class="doc-score-box">
    <span style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Indeks Inklusivitas</span>
    <span class="doc-score-val" id="doc-skor">0</span>
    <span class="doc-predikat" id="doc-predikat">-</span>
  </div>

  <div class="doc-recommendation">
    <strong>Rekomendasi Tindak Lanjut:</strong>
    <p id="doc-saran" style="margin: 5px 0 0 0;">-</p>
  </div>

  <div class="doc-desc">
    <p><em>Catatan: Dokumen ini merupakan diagnosa awal. Disarankan untuk mengajukan audit teknis lanjutan oleh tenaga ahli aksesibilitas bersertifikat guna mendapatkan rincian perbaikan yang sesuai standar PUPR.</em></p>
  </div>

  <div class="doc-footer">
    <div class="qr-area">
      <img src="" id="doc-qr" class="qr-img" alt="QR Code Verifikasi">
      <div>Scan untuk Validasi Data</div>
    </div>
    
    <div class="sign-area">
      <p>Jakarta, <span id="sign-date"></span></p>
      <p>Mengetahui,<br>Ketua Forum ASN Inklusif</p>
      <div class="sign-name">Dimas P. Muharam</div>
      <div style="font-size: 12px;">NIP. -----------------</div>
    </div>
  </div>

</div>

<script>
function generateNumber() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000); // 4 digit acak
  return `No: AUDIT/${year}/${month}/${random}`;
}

function prosesLaporan() {
  // 1. Validasi Input
  let nama = document.getElementById('userName').value;
  let instansi = document.getElementById('agencyName').value;
  
  if(!nama || !instansi) { alert("Mohon lengkapi data nama dan instansi."); return; }
  
  let radios = document.querySelectorAll('input[type="radio"]:checked');
  if(radios.length < 5) { alert("Mohon isi semua pertanyaan."); return; }

  // 2. Hitung Skor
  let total = 0;
  radios.forEach(r => total += parseInt(r.value));

  // 3. Logika Bobot & Rekomendasi (Ini yang bikin berbobot)
  let predikat = "";
  let warna = "";
  let saran = "";

  if(total >= 80) {
    predikat = "SANGAT BAIK (INKLUSIF)";
    warna = "#2e7d32";
    saran = "Instansi telah memenuhi standar dasar. Disarankan untuk menjadi role model bagi unit kerja lain dan melakukan pemeliharaan fasilitas secara berkala.";
  } else if(total >= 50) {
    predikat = "CUKUP (PERLU PENINGKATAN)";
    warna = "#f9a825";
    saran = "Instansi memiliki potensi, namun perlu melengkapi fasilitas vital seperti Toilet Aksesibel dan Website yang terbaca screen reader. Segera anggarkan perbaikan tahun depan.";
  } else {
    predikat = "KURANG (TIDAK AKSESIBEL)";
    warna = "#c62828";
    saran = "Sangat disarankan melakukan perombakan prioritas pada aksesibilitas fisik (Ramp) dan penyediaan layanan dasar bagi penyandang disabilitas sesuai UU No. 8 Tahun 2016.";
  }

  // 4. Masukkan Data ke Dokumen
  const nomorDokumen = generateNumber();
  const tanggalFull = new Date().toLocaleDateString('id-ID', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});

  document.getElementById('doc-nama').innerText = nama;
  document.getElementById('doc-instansi').innerText = instansi;
  document.getElementById('doc-tanggal').innerText = tanggalFull;
  document.getElementById('doc-nomor').innerText = nomorDokumen;
  document.getElementById('sign-date').innerText = new Date().toLocaleDateString('id-ID', {year: 'numeric', month: 'long', day: 'numeric'});

  const elSkor = document.getElementById('doc-skor');
  const elPredikat = document.getElementById('doc-predikat');
  
  elSkor.innerText = total;
  elSkor.style.color = warna;
  
  elPredikat.innerText = predikat;
  elPredikat.style.color = warna;
  
  document.getElementById('doc-saran').innerText = saran;

  // 5. Generate QR Code (Pakai API QR Server Gratis)
  // Isinya adalah ringkasan data validasi
  const qrData = `VALIDASI HASIL AUDIT\nNomor: ${nomorDokumen}\nInstansi: ${instansi}\nSkor: ${total}\nPredikat: ${predikat}\nValid: Forum ASN Inklusif`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
  document.getElementById('doc-qr').src = qrUrl;

  // Tampilkan Area Download
  document.getElementById('result-area').style.display = 'block';
  document.getElementById('result-area').scrollIntoView({ behavior: 'smooth' });
}

function downloadPDF() {
  const element = document.getElementById("certificate-node");
  
  // Tunggu gambar QR load dulu sebentar
  setTimeout(() => {
    html2canvas(element, {
      scale: 2, // Kualitas Tinggi
      backgroundColor: "#ffffff"
    }).then(canvas => {
      let link = document.createElement("a");
      link.download = "Laporan-Audit-Inklusif.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }, 500);
}
</script>
