---
layout: default
title: "Asesmen Diagnostik Inklusivitas Instansi"
permalink: /tool/asesmen/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<style>
  /* --- Style Umum --- */
  .audit-container { max-width: 800px; margin: 40px auto; font-family: sans-serif; }
  
  /* Info Box */
  .info-box { background: #e8f5e9; border-left: 5px solid #2e7d32; padding: 20px; border-radius: 4px; margin-bottom: 30px; font-size: 0.95em; line-height: 1.6; }
  .info-box h3 { margin-top: 0; color: #1b5e20; }

  /* Kartu Pertanyaan */
  .question-card { background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
  .option-label { display: block; padding: 12px; border: 1px solid var(--border-color); border-radius: 6px; margin-top: 8px; cursor: pointer; transition: 0.2s; }
  .option-label:hover { background: rgba(0, 43, 92, 0.05); border-color: var(--primary-color); }

  /* --- TAMPILAN RINGKAS (WEB VIEW) --- */
  #simple-result-view { display: none; text-align: center; margin-top: 40px; padding: 40px; background: var(--card-bg); border-radius: 12px; border: 2px solid var(--border-color); box-shadow: 0 5px 20px rgba(0,0,0,0.1); }
  
  .simple-score-circle { 
    width: 160px; height: 160px; background: #002b5c; color: #fff; border-radius: 50%; 
    display: flex; flex-direction: column; justify-content: center; align-items: center; 
    margin: 0 auto 25px auto; border: 6px solid #ffd700;
  }
  .simple-val { font-size: 3.5em; font-weight: bold; line-height: 1; }
  .simple-label { font-size: 0.9em; text-transform: uppercase; margin-top: 5px; opacity: 0.8; }
  
  .simple-predikat { font-size: 1.6em; font-weight: bold; margin-bottom: 15px; color: var(--primary-color); }
  .simple-desc { margin-bottom: 30px; color: #666; max-width: 600px; margin-left: auto; margin-right: auto; }

  .btn-primary { background: #002b5c; color: white; padding: 15px 30px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px; transition: 0.3s; }
  .btn-pdf { background: #b71c1c; display: flex; align-items: center; justify-content: center; gap: 10px; }
  .btn-pdf:hover { background: #d32f2f; }

  /* --- TAMPILAN LAPORAN LENGKAP (HIDDEN NODE UTK PDF) --- */
  /* Kita set lebar fix A4 (sekitar 794px pada 96DPI) agar proporsional di PDF */
  #full-report-node {
    position: fixed; left: -9999px; top: 0;
    width: 800px; /* Lebar konten PDF */
    min-height: 1123px; /* Tinggi A4 */
    background: #fff; color: #333; padding: 50px 60px; box-sizing: border-box;
    font-family: 'Times New Roman', serif; border: 1px solid #ccc;
  }

  /* Style Laporan Resmi */
  .doc-header { border-bottom: 3px double #000; padding-bottom: 20px; margin-bottom: 30px; display: flex; align-items: center; gap: 20px; }
  .doc-logo { height: 90px; }
  .doc-kop h1 { margin: 0; font-size: 24px; color: #000; text-transform: uppercase; font-family: Arial, sans-serif; font-weight: 800; }
  .doc-kop p { margin: 5px 0 0; font-size: 14px; color: #444; font-family: Arial, sans-serif; }

  .doc-title { text-align: center; margin-bottom: 30px; font-family: Arial, sans-serif; }
  .doc-title h2 { text-decoration: underline; margin: 0; font-size: 20px; }
  
  .doc-grid { display: grid; grid-template-columns: 200px 1fr; gap: 8px; margin-bottom: 25px; font-size: 14px; text-align: left; }
  .doc-label { font-weight: bold; }
  .doc-val { border-bottom: 1px dotted #999; }

  .doc-score-box { background: #f5f5f5; border: 1px solid #000; padding: 15px; text-align: center; margin: 25px 0; }
  .doc-score-val { font-size: 36px; font-weight: bold; color: #002b5c; display: block; margin: 10px 0; font-family: Arial, sans-serif; }
  
  .doc-recommendation { border: 1px solid #000; padding: 15px; font-size: 14px; margin-bottom: 30px; text-align: justify; line-height: 1.5; }
  
  .doc-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 50px; }
  .sign-name { font-weight: bold; text-decoration: underline; margin-top: 70px; font-size: 16px; }
</style>

<div class="container audit-container">
  
  <div style="text-align: center; margin-bottom: 30px;">
    <h1>🔍 Audit Diagnostik Inklusivitas</h1>
    <p>Pemetaan awal kesiapan instansi pemerintah dalam layanan ramah disabilitas.</p>
  </div>

  <div class="info-box">
    <h3>Dasar Instrumen</h3>
    <p>Instrumen asesmen diagnostik ini disusun sebagai rujukan awal berdasarkan indikator pemenuhan <strong>Akomodasi yang Layak</strong> bagi Penyandang Disabilitas sesuai:</p>
    <ul style="margin-bottom: 0;">
      <li><strong>UU No. 8 Tahun 2016</strong> tentang Penyandang Disabilitas.</li>
      <li><strong>PP No. 42 Tahun 2020</strong> tentang Aksesibilitas Pelayanan Publik.</li>
      <li>Standar Teknis Bangunan Gedung (Permen PUPR).</li>
    </ul>
  </div>

  <div id="quiz-section">
    <div class="question-card" style="border-left: 5px solid var(--accent-color);">
      <h3 style="margin-bottom: 15px;">Data Instansi (Wajib untuk Laporan)</h3>
      <label>Nama Pejabat/PIC:</label>
      <input type="text" id="userName" placeholder="Nama Lengkap..." style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
      <label>Nama Instansi/Unit Kerja:</label>
      <input type="text" id="agencyName" placeholder="Contoh: Dinas Sosial Kab. Bogor" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <form id="auditForm">
      <div class="question-card">
        <h3>1. Aksesibilitas Fisik (Bidang Miring/Ramp)</h3>
        <label class="option-label"><input type="radio" name="q1" value="20"> Tersedia, landai, dan memiliki pegangan rambat (standar)</label>
        <label class="option-label"><input type="radio" name="q1" value="10"> Tersedia, namun curam atau tanpa pegangan</label>
        <label class="option-label"><input type="radio" name="q1" value="0"> Tidak tersedia akses kursi roda</label>
      </div>
  
      <div class="question-card">
        <h3>2. Fasilitas Sanitasi (Toilet Aksesibel)</h3>
        <label class="option-label"><input type="radio" name="q2" value="20"> Toilet khusus tersedia (pintu geser/lebar, ada handrail)</label>
        <label class="option-label"><input type="radio" name="q2" value="10"> Toilet umum luas, bisa dimasuki kursi roda</label>
        <label class="option-label"><input type="radio" name="q2" value="0"> Toilet sempit/bertingkat (tidak aksesibel)</label>
      </div>
  
      <div class="question-card">
        <h3>3. Aksesibilitas Informasi Digital</h3>
        <label class="option-label"><input type="radio" name="q3" value="20"> Website/Medsos aksesibel (ada teks alternatif & terbaca screen reader)</label>
        <label class="option-label"><input type="radio" name="q3" value="10"> Ada kanal informasi, namun formatnya gambar (scan) sulit dibaca</label>
        <label class="option-label"><input type="radio" name="q3" value="0"> Belum memiliki standar aksesibilitas digital</label>
      </div>
  
      <div class="question-card">
        <h3>4. Kebijakan Afirmasi Pegawai (Kuota 2%)</h3>
        <label class="option-label"><input type="radio" name="q4" value="20"> Kuota 2% terpenuhi atau dalam proses rekrutmen aktif</label>
        <label class="option-label"><input type="radio" name="q4" value="10"> Ada kebijakan, namun realisasi belum mencapai target</label>
        <label class="option-label"><input type="radio" name="q4" value="0"> Belum ada kebijakan/alokasi khusus</label>
      </div>
  
      <div class="question-card">
        <h3>5. Layanan Front Office (Komunikasi Inklusif)</h3>
        <label class="option-label"><input type="radio" name="q5" value="20"> Petugas paham etika interaksi & dasar isyarat/tulisan</label>
        <label class="option-label"><input type="radio" name="q5" value="10"> Belum terlatih, namun kooperatif membantu</label>
        <label class="option-label"><input type="radio" name="q5" value="0"> Tidak ada SOP pelayanan khusus disabilitas</label>
      </div>
  
      <button type="button" onclick="prosesData()" class="btn-primary">📊 Analisis Hasil & Selesai</button>
    </form>
  </div>

  <div id="simple-result-view">
    <h3>Hasil Analisis Singkat</h3>
    <div class="simple-score-circle">
      <span class="simple-val" id="screen-score">0</span>
      <span class="simple-label">Poin</span>
    </div>
    <div class="simple-predikat" id="screen-predikat">-</div>
    <p class="simple-desc">Berikut adalah ringkasan skor Anda. Untuk melihat rincian evaluasi, rekomendasi teknis perbaikan, dan legalitas hasil asesmen, silakan unduh dokumen laporan lengkap (PDF) di bawah ini.</p>
    
    <button onclick="generatePDF()" class="btn-primary btn-pdf">
      📄 Unduh Laporan Lengkap (PDF)
    </button>
    <p style="font-size: 0.8em; margin-top: 15px; color: #888;">*Format PDF A4 Resmi, dapat digunakan untuk laporan internal.</p>
    <button onclick="location.reload()" style="background:none; border:none; color: #666; text-decoration: underline; margin-top: 10px; cursor: pointer;">Ulangi Asesmen</button>
  </div>

</div>

<div id="full-report-node">
  
  <div class="doc-header">
    <img src="/assets/img/logo.png" alt="Logo Forum ASN Inklusif" class="doc-logo">
    <div class="doc-kop">
      <h1>Forum ASN Inklusif</h1>
      <p style="font-weight: bold;">Gerakan Nasional Pegawai Sipil Negara Penyandang Disabilitas Indonesia</p>
      <p>Website: www.asninklusif.id | Email: contact@asninklusif.id</p>
    </div>
  </div>

  <div class="doc-title">
    <h2>LAPORAN HASIL ASESMEN DIAGNOSTIK</h2>
    <div style="font-size: 14px; color: #000; margin-top: 5px;" id="doc-nomor">No: REG/---/---</div>
  </div>

  <div class="doc-grid">
    <div class="doc-label">Nama Pejabat/PIC</div>
    <div class="doc-val" id="doc-nama">-</div>
    
    <div class="doc-label">Instansi/Unit Kerja</div>
    <div class="doc-val" id="doc-instansi">-</div>
    
    <div class="doc-label">Tanggal Asesmen</div>
    <div class="doc-val" id="doc-tanggal">-</div>
  </div>

  <p style="text-align: justify; line-height: 1.5; font-size: 14px; margin-bottom: 20px;">
    Berdasarkan pengisian instrumen audit mandiri (<em>Self-Assessment</em>) terhadap indikator aksesibilitas fisik, digital, dan kebijakan layanan publik sesuai amanat UU No. 8 Tahun 2016 dan PP No. 42 Tahun 2020, maka instansi memperoleh hasil evaluasi sebagai berikut:
  </p>

  <div class="doc-score-box">
    <span style="display: block; font-size: 12px; text-transform: uppercase;">Indeks Kesiapan Inklusivitas</span>
    <span class="doc-score-val" id="doc-skor">0</span>
    <span style="display: block; font-size: 18px; font-weight: bold; font-family: Arial, sans-serif;" id="doc-predikat">-</span>
  </div>

  <div class="doc-recommendation">
    <strong style="display: block; margin-bottom: 10px; text-decoration: underline;">REKOMENDASI TINDAK LANJUT:</strong>
    <p id="doc-saran" style="margin: 0;">-</p>
  </div>

  <p style="font-size: 12px; color: #666; font-style: italic; margin-top: 20px;">
    Catatan: Dokumen ini merupakan diagnosa awal yang sah diterbitkan oleh Sistem Forum ASN Inklusif. Sangat disarankan untuk mengajukan audit teknis lanjutan oleh tenaga ahli aksesibilitas bersertifikat guna perencanaan anggaran (RAB) yang presisi.
  </p>

  <div class="doc-footer">
    <div style="text-align: center; font-size: 12px;">
      <img src="" id="doc-qr" style="width: 100px; height: 100px; margin-bottom: 10px; border: 1px solid #000;">
      <div>Scan Validasi</div>
    </div>
    
    <div style="text-align: center; width: 250px;">
      <p style="margin-bottom: 60px;">
        Jakarta, <span id="sign-date"></span><br>
        Mengetahui,<br>
        <strong>Ketua Forum ASN Inklusif</strong>
      </p>
      <div class="sign-name">Dimas P. Muharam</div>
    </div>
  </div>

</div>

<script>
// Variabel Global untuk menyimpan data
let reportData = {};

function prosesData() {
  // 1. Validasi Input
  let nama = document.getElementById('userName').value;
  let instansi = document.getElementById('agencyName').value;
  if(!nama || !instansi) { alert("Mohon lengkapi Nama Pejabat & Nama Instansi."); return; }
  
  let radios = document.querySelectorAll('input[type="radio"]:checked');
  if(radios.length < 5) { alert("Mohon jawab semua 5 pertanyaan asesmen."); return; }

  // 2. Hitung Skor
  let total = 0;
  radios.forEach(r => total += parseInt(r.value));

  // 3. Logika Predikat & Rekomendasi
  let predikat = "";
  let warna = ""; // Warna untuk tampilan web
  let saran = "";

  if(total >= 80) {
    predikat = "SANGAT BAIK (INKLUSIF)";
    warna = "#2e7d32";
    saran = "Instansi telah memenuhi standar dasar pelayanan publik inklusif. PERTAHANKAN dan jadikan role model. Langkah selanjutnya adalah memastikan pemeliharaan rutin fasilitas (ramp/toilet) dan meningkatkan kapasitas SDM front-office melalui pelatihan Bahasa Isyarat lanjutan.";
  } else if(total >= 50) {
    predikat = "CUKUP (PERLU PERBAIKAN)";
    warna = "#f57f17"; 
    saran = "Instansi memiliki potensi namun masih terdapat celah aksesibilitas krusial. REKOMENDASI PRIORITAS: 1) Renovasi Toilet Aksesibel sesuai standar teknis Permen PUPR, dan 2) Penyesuaian Website agar terbaca screen reader. Segera anggarkan perbaikan pada tahun berjalan/mendatang.";
  } else {
    predikat = "KURANG (BELUM AKSESIBEL)";
    warna = "#c62828"; 
    saran = "Fasilitas belum memenuhi amanat UU No. 8/2016. TINDAKAN SEGERA: Wajib menyediakan akses utama (Bidang Miring/Ramp) yang layak dan menyusun SOP pelayanan prioritas bagi penyandang disabilitas untuk menghindari sanksi maladministrasi pelayanan publik.";
  }

  // 4. Update Tampilan Web (Ringkas)
  document.getElementById('screen-score').innerText = total;
  const screenPred = document.getElementById('screen-predikat');
  screenPred.innerText = predikat;
  screenPred.style.color = warna;
  
  // Ganti Tampilan
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('simple-result-view').style.display = 'block';
  document.getElementById('simple-result-view').scrollIntoView({ behavior: 'smooth' });

  // 5. Siapkan Data Laporan PDF (Di balik layar)
  const now = new Date();
  const tglStr = now.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});
  const randomNo = Math.floor(1000 + Math.random() * 9000);
  
  // Isi DOM Laporan Tersembunyi
  document.getElementById('doc-nomor').innerText = `No: AUDIT/${now.getFullYear()}/${now.getMonth()+1}/${randomNo}`;
  document.getElementById('doc-nama').innerText = nama;
  document.getElementById('doc-instansi').innerText = instansi;
  document.getElementById('doc-tanggal').innerText = tglStr;
  document.getElementById('sign-date').innerText = tglStr;

  document.getElementById('doc-skor').innerText = total;
  document.getElementById('doc-predikat').innerText = predikat;
  document.getElementById('doc-saran').innerText = saran;

  // Generate QR Code
  const qrData = `VALIDASI AUDIT ASN INKLUSIF\nInstansi: ${instansi}\nSkor: ${total}\nPredikat: ${predikat}\nRef: ${randomNo}`;
  document.getElementById('doc-qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
}

// FUNGSI BARU: GENERATE PDF
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const element = document.getElementById("full-report-node");

  // Ubah tombol jadi 'Loading...'
  const btn = document.querySelector('.btn-pdf');
  const oriText = btn.innerText;
  btn.innerText = "⏳ Sedang Memproses PDF...";

  // Gunakan html2canvas untuk 'memotret' laporan HTML menjadi Gambar High-Res
  html2canvas(element, {
    scale: 2, // Kualitas Tinggi (2x)
    useCORS: true, // Izinkan gambar external (Logo/QR)
    backgroundColor: "#ffffff"
  }).then(canvas => {
    
    // Inisialisasi PDF (A4 Portrait)
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Hitung dimensi agar pas di A4
    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    // Masukkan gambar ke PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
    // Simpan File
    pdf.save("Laporan-Audit-Inklusif.pdf");

    // Kembalikan tombol
    btn.innerText = oriText;
  });
}
</script>
