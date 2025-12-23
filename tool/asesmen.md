---
layout: default
title: "Asesmen Diagnostik Inklusivitas Instansi"
permalink: /tool/asesmen/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

<style>
  /* --- 1. Style Layout Utama --- */
  .audit-container { max-width: 800px; margin: 40px auto; font-family: sans-serif; }
  
  /* Box Informasi Dasar Hukum */
  .info-box { background: #e8f5e9; border-left: 5px solid #2e7d32; padding: 20px; border-radius: 4px; margin-bottom: 30px; font-size: 0.95em; line-height: 1.6; }
  .info-box h3 { margin-top: 0; color: #1b5e20; }

  /* Card Pertanyaan */
  .question-card { background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
  .option-label { display: block; padding: 12px; border: 1px solid var(--border-color); border-radius: 6px; margin-top: 8px; cursor: pointer; transition: 0.2s; }
  .option-label:hover { background: rgba(0, 43, 92, 0.05); border-color: var(--primary-color); }

  /* --- 2. Tampilan Hasil RINGKAS (Di Layar Web) --- */
  #simple-result-view { display: none; text-align: center; margin-top: 40px; padding: 40px; background: var(--card-bg); border-radius: 12px; border: 2px solid var(--border-color); box-shadow: 0 5px 20px rgba(0,0,0,0.1); }
  
  .simple-score-circle { 
    width: 150px; height: 150px; background: #002b5c; color: #fff; border-radius: 50%; 
    display: flex; flex-direction: column; justify-content: center; align-items: center; 
    margin: 0 auto 20px auto; border: 5px solid #ffd700;
  }
  .simple-val { font-size: 3em; font-weight: bold; line-height: 1; }
  .simple-label { font-size: 0.8em; text-transform: uppercase; }
  
  .simple-predikat { font-size: 1.5em; font-weight: bold; margin-bottom: 10px; color: var(--primary-color); }
  .simple-desc { margin-bottom: 30px; color: #666; }

  /* Tombol */
  .btn-primary { background: #002b5c; color: white; padding: 15px 30px; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px; transition: 0.3s; }
  .btn-download { background: #2e7d32; display: flex; align-items: center; justify-content: center; gap: 10px; }
  .btn-download:hover { background: #1b5e20; }

  /* --- 3. Tampilan Laporan LENGKAP (Tersembunyi utk Download) --- */
  #full-report-node {
    position: fixed; left: -9999px; top: 0; /* Sembunyi */
    width: 1000px; height: 1414px; /* A4 Portrait Ratio */
    background: #fff; color: #333; padding: 60px; box-sizing: border-box;
    font-family: 'Arial', sans-serif; border: 1px solid #ccc;
  }

  /* Styling Dokumen Resmi */
  .doc-header { border-bottom: 5px double #002b5c; padding-bottom: 20px; margin-bottom: 30px; display: flex; align-items: center; gap: 20px; }
  .doc-logo { height: 100px; }
  .doc-kop h1 { margin: 0; font-size: 28px; color: #002b5c; text-transform: uppercase; }
  .doc-grid { display: grid; grid-template-columns: 180px 1fr; gap: 10px; margin-bottom: 30px; font-size: 16px; text-align: left; }
  .doc-val { border-bottom: 1px dotted #999; font-weight: bold; color: #000; }
  
  .doc-score-box { background: #f4f4f4; border: 2px solid #002b5c; padding: 20px; text-align: center; margin: 30px 0; border-radius: 8px; }
  .doc-score-val { font-size: 48px; font-weight: bold; color: #002b5c; }
  
  .doc-recommendation { background: #fff8e1; border-left: 5px solid #ffc107; padding: 15px; font-size: 15px; margin-bottom: 40px; text-align: justify; line-height: 1.5; }
  
  .doc-footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 80px; }
  .sign-name { font-weight: bold; text-decoration: underline; margin-top: 80px; font-size: 18px; }
</style>

<div class="container audit-container">
  
  <div style="text-align: center; margin-bottom: 30px;">
    <h1>🔍 Audit Diagnostik Inklusivitas</h1>
    <p>Pemetaan awal kesiapan instansi pemerintah dalam layanan ramah disabilitas.</p>
  </div>

  <div class="info-box">
    <h3>Dasar Instrumen</h3>
    <p>Instrumen asesmen diagnostik ini disusun berdasarkan indikator pemenuhan <strong>Akomodasi yang Layak</strong> bagi Penyandang Disabilitas sebagaimana diamanatkan dalam:</p>
    <ul style="margin-bottom: 0;">
      <li><strong>UU No. 8 Tahun 2016</strong> tentang Penyandang Disabilitas.</li>
      <li><strong>PP No. 42 Tahun 2020</strong> tentang Aksesibilitas terhadap Pemukiman, Pelayanan Publik, dan Perlindungan dari Bencana.</li>
      <li>Standar Teknis Bangunan Gedung (Permen PUPR).</li>
    </ul>
  </div>

  <div class="question-card" style="border-left: 5px solid var(--accent-color);">
    <h3 style="margin-bottom: 15px;">Data Instansi (Untuk Keperluan Laporan)</h3>
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

    <button type="button" onclick="prosesData()" class="btn-primary">📊 Analisis Hasil Sekarang</button>
  </form>

  <div id="simple-result-view">
    <div class="simple-score-circle">
      <span class="simple-val" id="screen-score">0</span>
      <span class="simple-label">Skor</span>
    </div>
    <div class="simple-predikat" id="screen-predikat">-</div>
    <p class="simple-desc">Hasil analisis lengkap beserta rekomendasi teknis telah disusun dalam dokumen laporan resmi.</p>
    
    <button onclick="downloadReport()" class="btn-primary btn-download">
      📥 Unduh Laporan Lengkap (PDF/Doc)
    </button>
    <p style="font-size: 0.8em; margin-top: 10px; color: #888;">*Dokumen ini sah untuk laporan internal instansi.</p>
  </div>

</div>

<div id="full-report-node">
  
  <div class="doc-header">
    <img src="/assets/img/logo.png" alt="Logo Forum ASN Inklusif" class="doc-logo">
    <div class="doc-kop">
      <h1>Forum ASN Inklusif</h1>
      <p style="margin: 5px 0 0; font-size: 14px; color: #666;">Sinergi Birokrasi Humanis & Inklusif Indonesia</p>
      <p style="margin: 0; font-size: 14px; color: #666;">www.asninklusif.id | contact@asninklusif.id</p>
    </div>
  </div>

  <div style="text-align: center; margin-bottom: 40px;">
    <h2 style="text-decoration: underline; margin: 0;">LAPORAN HASIL ASESMEN DIAGNOSTIK</h2>
    <div style="font-size: 14px; color: #555; margin-top: 5px;" id="doc-nomor">No: REG/---/---</div>
  </div>

  <div class="doc-grid">
    <div>Nama Pejabat/PIC</div>
    <div class="doc-val" id="doc-nama">-</div>
    
    <div>Instansi/Unit Kerja</div>
    <div class="doc-val" id="doc-instansi">-</div>
    
    <div>Tanggal Audit</div>
    <div class="doc-val" id="doc-tanggal">-</div>
  </div>

  <p style="text-align: justify; line-height: 1.5;">Berdasarkan pengisian instrumen audit mandiri (<em>Self-Assessment</em>) terhadap indikator aksesibilitas fisik, digital, dan kebijakan layanan publik sesuai UU No. 8 Tahun 2016, maka instansi memperoleh hasil sebagai berikut:</p>

  <div class="doc-score-box">
    <span style="display: block; font-size: 14px; text-transform: uppercase;">Indeks Kesiapan Inklusivitas</span>
    <span class="doc-score-val" id="doc-skor">0</span>
    <span style="display: block; font-size: 24px; font-weight: bold; margin-top: 10px;" id="doc-predikat">-</span>
  </div>

  <div class="doc-recommendation">
    <strong>REKOMENDASI TINDAK LANJUT:</strong>
    <p id="doc-saran" style="margin-top: 5px;">-</p>
  </div>

  <p style="font-size: 14px; color: #666;"><em>Catatan: Dokumen ini merupakan diagnosa awal. Sangat disarankan untuk mengajukan audit teknis lanjutan oleh tenaga ahli aksesibilitas bersertifikat untuk perencanaan anggaran (RAB).</em></p>

  <div class="doc-footer">
    <div style="text-align: center; font-size: 12px;">
      <img src="" id="doc-qr" style="width: 120px; height: 120px; margin-bottom: 10px; border: 1px solid #eee;">
      <div>Scan untuk Validasi Data</div>
    </div>
    
    <div style="text-align: center; width: 300px;">
      <p>Jakarta, <span id="sign-date"></span></p>
      <p>Mengetahui,<br>Ketua Forum ASN Inklusif</p>
      <div class="sign-name">Dimas P. Muharam</div>
      <div>NIP. -----------------</div>
    </div>
  </div>

</div>

<script>
function prosesData() {
  // 1. Validasi
  let nama = document.getElementById('userName').value;
  let instansi = document.getElementById('agencyName').value;
  if(!nama || !instansi) { alert("Mohon lengkapi Nama & Instansi."); return; }
  
  let radios = document.querySelectorAll('input[type="radio"]:checked');
  if(radios.length < 5) { alert("Mohon jawab semua pertanyaan."); return; }

  // 2. Hitung Skor
  let total = 0;
  radios.forEach(r => total += parseInt(r.value));

  // 3. Tentukan Predikat & Rekomendasi Berbobot
  let predikat = "";
  let warna = "";
  let saran = "";

  if(total >= 80) {
    predikat = "SANGAT BAIK (INKLUSIF)";
    warna = "#2e7d32";
    saran = "Instansi Anda telah memenuhi standar dasar pelayanan publik inklusif. Langkah selanjutnya adalah memastikan pemeliharaan fasilitas (maintenance) dan meningkatkan kapasitas SDM melalui pelatihan Bahasa Isyarat lanjutan.";
  } else if(total >= 50) {
    predikat = "CUKUP (PERLU PERBAIKAN)";
    warna = "#f9a825"; // Kuning Gelap
    saran = "Instansi memiliki potensi, namun terdapat celah krusial. Prioritaskan anggaran tahun depan untuk: 1) Renovasi Toilet Aksesibel sesuai standar teknis, dan 2) Penyesuaian Website agar terbaca oleh aplikasi pembaca layar (Screen Reader).";
  } else {
    predikat = "KURANG (BELUM AKSESIBEL)";
    warna = "#c62828"; // Merah
    saran = "Hasil menunjukkan fasilitas belum memenuhi amanat UU No. 8/2016. Disarankan segera melakukan perombakan prioritas pada akses utama (Bidang Miring/Ramp) dan penyediaan SOP pelayanan prioritas bagi penyandang disabilitas.";
  }

  // 4. Update Tampilan LAYAR (Ringkas)
  document.getElementById('screen-score').innerText = total;
  const screenPred = document.getElementById('screen-predikat');
  screenPred.innerText = predikat;
  screenPred.style.color = warna;
  
  // Sembunyikan form, Munculkan hasil ringkas
  document.getElementById('auditForm').style.display = 'none';
  document.getElementById('simple-result-view').style.display = 'block';
  document.getElementById('simple-result-view').scrollIntoView({ behavior: 'smooth' });

  // 5. Update Dokumen LAPORAN (Hidden)
  // Nomor Acak
  const randomNo = Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const tglStr = now.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});
  
  document.getElementById('doc-nomor').innerText = `No: AUDIT/${now.getFullYear()}/${now.getMonth()+1}/${randomNo}`;
  document.getElementById('doc-nama').innerText = nama;
  document.getElementById('doc-instansi').innerText = instansi;
  document.getElementById('doc-tanggal').innerText = tglStr;
  document.getElementById('sign-date').innerText = tglStr;

  document.getElementById('doc-skor').innerText = total;
  document.getElementById('doc-predikat').innerText = predikat;
  document.getElementById('doc-predikat').style.color = warna;
  document.getElementById('doc-saran').innerText = saran;

  // Generate QR Code
  const qrData = `VALIDASI AUDIT ASN INKLUSIF\nInstansi: ${instansi}\nSkor: ${total}\nPredikat: ${predikat}`;
  document.getElementById('doc-qr').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
}

function downloadReport() {
  const element = document.getElementById("full-report-node");
  
  // Gunakan html2canvas untuk 'memotret' laporan tersembunyi
  html2canvas(element, {
    scale: 2, // Biar HD saat di-zoom
    backgroundColor: "#ffffff"
  }).then(canvas => {
    let link = document.createElement("a");
    link.download = "Laporan-Hasil-Audit-Inklusif.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
</script>
