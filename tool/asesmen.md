---
layout: default
title: "Asesmen Diagnostik Inklusivitas Instansi"
permalink: /tool/asesmen/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<style>
  .audit-container { max-width: 900px; margin: 40px auto; font-family: sans-serif; }
  
  /* Info Box */
  .info-box { background: #e8f5e9; border-left: 5px solid #2e7d32; padding: 20px; border-radius: 4px; margin-bottom: 30px; }
  .info-box h2 { margin-top: 0; color: #1b5e20; font-size: 1.5em; }

  /* Accessibility-First Form Styling */
  fieldset { border: 1px solid #ccc; border-radius: 8px; padding: 20px; margin-bottom: 25px; background: var(--card-bg); }
  legend { font-weight: bold; font-size: 1.1em; color: var(--primary-color); padding: 0 10px; background: var(--bg-color); border-radius: 4px; }
  
  .radio-group { display: flex; flex-direction: column; gap: 12px; margin-top: 10px; }
  .radio-label { 
    display: flex; align-items: center; gap: 10px; 
    padding: 12px; border: 1px solid #ddd; border-radius: 6px; 
    cursor: pointer; transition: 0.2s; 
  }
  .radio-label:hover, .radio-label:focus-within { background: rgba(0, 43, 92, 0.05); border-color: var(--primary-color); }
  input[type="radio"] { width: 20px; height: 20px; }

  /* Input Data Diri */
  .form-group { margin-bottom: 20px; }
  .form-group label { display: block; font-weight: bold; margin-bottom: 8px; }
  .form-control { width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 1em; }

  /* Result View */
  #simple-result-view { display: none; text-align: center; margin-top: 40px; padding: 40px; border: 2px solid var(--border-color); border-radius: 12px; }
  .score-circle { width: 120px; height: 120px; background: #002b5c; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5em; font-weight: bold; margin: 0 auto 20px; border: 5px solid #ffd700; }
  
  .btn-primary { background: #002b5c; color: white; padding: 15px 30px; border: none; border-radius: 8px; font-size: 1.1em; font-weight: bold; cursor: pointer; width: 100%; margin-top: 20px; }
  .btn-pdf { background: #b71c1c; }
  
  /* Focus Indicator yang Jelas untuk Aksesibilitas */
  *:focus { outline: 3px solid #ffc107; outline-offset: 2px; }
</style>

<div class="container audit-container">

  <h1 style="text-align: center; margin-bottom: 10px;">Audit Diagnostik Inklusivitas</h1>
  <p style="text-align: center; margin-bottom: 40px;">Instrumen penilaian mandiri (Self-Assessment) berdasarkan UU No. 8 Tahun 2016 & PP No. 42 Tahun 2020.</p>

  <div class="info-box">
    <h2>Petunjuk Pengisian</h2>
    <p>Kuesioner ini dirancang agar dapat diakses penuh oleh pembaca layar (Screen Reader). Terdapat 10 pertanyaan kunci yang mencakup aspek fisik, digital, ketenagakerjaan, dan pelayanan.</p>
  </div>

  <div id="quiz-section">
    <fieldset>
      <legend>Identitas Instansi & Responden</legend>
      <div class="form-group">
        <label for="userName">Nama Pejabat/PIC</label>
        <input type="text" id="userName" class="form-control" placeholder="Tulis nama lengkap Anda" required>
      </div>
      <div class="form-group">
        <label for="agencyName">Nama Instansi/Unit Kerja</label>
        <input type="text" id="agencyName" class="form-control" placeholder="Contoh: Dinas Sosial Kota..." required>
      </div>
    </fieldset>

    <form id="auditForm">
      
      <h3 style="margin: 30px 0 15px; border-bottom: 2px solid #ccc; padding-bottom: 5px;">A. Aksesibilitas Fisik Gedung</h3>
      
      <fieldset>
        <legend>1. Apakah tersedia bidang miring (Ramp) di pintu masuk utama?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q1" value="10"> Ya, landai (kemiringan standar) dan memiliki pegangan rambat.</label>
          <label class="radio-label"><input type="radio" name="q1" value="5"> Ada, tapi terlalu curam atau tanpa pegangan.</label>
          <label class="radio-label"><input type="radio" name="q1" value="0"> Tidak ada, hanya tangga.</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>2. Apakah tersedia Toilet Khusus Disabilitas yang berfungsi?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q2" value="10"> Ya, pintu lebar (geser), ruang luas, ada pegangan (handrail), dan tombol darurat.</label>
          <label class="radio-label"><input type="radio" name="q2" value="5"> Ada toilet umum yang luas, tapi belum standar khusus.</label>
          <label class="radio-label"><input type="radio" name="q2" value="0"> Toilet sempit/bertingkat sulit diakses.</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>3. Apakah tersedia Ubin Pemandu (Guiding Block) untuk Tunanetra?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q3" value="10"> Ya, terpasang dari gerbang hingga loket pelayanan tanpa terputus.</label>
          <label class="radio-label"><input type="radio" name="q3" value="5"> Ada sebagian, tapi terputus atau tertutup halangan.</label>
          <label class="radio-label"><input type="radio" name="q3" value="0"> Tidak ada sama sekali.</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>4. Apakah tersedia Parkir Khusus Disabilitas?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q4" value="10"> Ya, dekat pintu masuk, ada rambu jelas, dan cukup lebar.</label>
          <label class="radio-label"><input type="radio" name="q4" value="5"> Parkir biasa, tapi petugas membantu mencarikan tempat dekat.</label>
          <label class="radio-label"><input type="radio" name="q4" value="0"> Tidak ada alokasi khusus.</label>
        </div>
      </fieldset>

      <h3 style="margin: 30px 0 15px; border-bottom: 2px solid #ccc; padding-bottom: 5px;">B. Informasi & Digital</h3>

      <fieldset>
        <legend>5. Apakah Website/Aplikasi instansi aksesibel bagi pembaca layar (Screen Reader)?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q5" value="10"> Ya, gambar memiliki teks alternatif (Alt Text) dan struktur navigasi jelas.</label>
          <label class="radio-label"><input type="radio" name="q5" value="5"> Sebagian bisa dibaca, tapi dokumen/SK sering berupa gambar hasil scan.</label>
          <label class="radio-label"><input type="radio" name="q5" value="0"> Tidak aksesibel sama sekali.</label>
        </div>
      </fieldset>
      
      <fieldset>
        <legend>6. Apakah tersedia informasi pelayanan dalam format visual/video?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q6" value="10"> Ya, video profil/layanan dilengkapi Teks (Caption) dan Bahasa Isyarat.</label>
          <label class="radio-label"><input type="radio" name="q6" value="5"> Ada video, tapi hanya suara (tanpa teks/isyarat).</label>
          <label class="radio-label"><input type="radio" name="q6" value="0"> Tidak tersedia.</label>
        </div>
      </fieldset>

      <h3 style="margin: 30px 0 15px; border-bottom: 2px solid #ccc; padding-bottom: 5px;">C. Pelayanan & SDM</h3>

      <fieldset>
        <legend>7. Apakah petugas Front Office memiliki kemampuan melayani penyandang disabilitas?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q7" value="10"> Ya, petugas paham etika berinteraksi dan menguasai dasar bahasa isyarat.</label>
          <label class="radio-label"><input type="radio" name="q7" value="5"> Belum terlatih khusus, namun bersikap kooperatif membantu.</label>
          <label class="radio-label"><input type="radio" name="q7" value="0"> Tidak ada pemahaman khusus.</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>8. Apakah tersedia Alat Bantu pelayanan di lokasi?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q8" value="10"> Ya, tersedia Kursi Roda pinjaman, Tongkat, atau Formulir Braille.</label>
          <label class="radio-label"><input type="radio" name="q8" value="5"> Hanya kursi roda, itu pun kondisi kurang baik.</label>
          <label class="radio-label"><input type="radio" name="q8" value="0"> Tidak tersedia alat bantu.</label>
        </div>
      </fieldset>

      <h3 style="margin: 30px 0 15px; border-bottom: 2px solid #ccc; padding-bottom: 5px;">D. Kebijakan & Regulasi</h3>

      <fieldset>
        <legend>9. Apakah instansi memenuhi kuota 2% pegawai penyandang disabilitas?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q9" value="10"> Ya, kuota terpenuhi (minimal 2% dari total pegawai).</label>
          <label class="radio-label"><input type="radio" name="q9" value="5"> Ada pegawai disabilitas, tapi belum mencapai 2%.</label>
          <label class="radio-label"><input type="radio" name="q9" value="0"> Belum ada pegawai disabilitas.</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>10. Apakah ada Unit Layanan Disabilitas (ULD) atau SOP khusus?</legend>
        <div class="radio-group">
          <label class="radio-label"><input type="radio" name="q10" value="10"> Ya, ada SK Tim ULD atau SOP Pelayanan Prioritas yang disahkan.</label>
          <label class="radio-label"><input type="radio" name="q10" value="5"> SOP sedang disusun/belum disahkan.</label>
          <label class="radio-label"><input type="radio" name="q10" value="0"> Tidak ada.</label>
        </div>
      </fieldset>

      <button type="button" onclick="analisisHasil()" class="btn-primary">📊 Analisis Hasil Diagnostik</button>
    </form>
  </div>

  <div id="simple-result-view">
    <h2 id="hasil-judul">Hasil Analisis</h2>
    <div class="score-circle">
      <span id="score-display">0</span>
    </div>
    <h3 id="predikat-display" style="font-size: 1.5em; margin: 10px 0;">-</h3>
    <p id="deskripsi-singkat">-</p>
    
    <button onclick="generateAccessiblePDF()" class="btn-primary btn-pdf">
      📄 Unduh Laporan Resmi (PDF Aksesibel)
    </button>
    <button onclick="location.reload()" style="margin-top: 20px; background: none; border: none; text-decoration: underline; cursor: pointer; color: #555;">Ulangi Asesmen</button>
  </div>

</div>

<script>
// Variabel Global Data
let globalData = {
  nama: "", instansi: "", skor: 0, predikat: "", rekomendasi: "", tanggal: ""
};

function analisisHasil() {
  // 1. Validasi
  const nama = document.getElementById('userName').value;
  const instansi = document.getElementById('agencyName').value;
  
  if(!nama || !instansi) {
    alert("Mohon lengkapi Nama dan Instansi pada bagian Identitas.");
    document.getElementById('userName').focus();
    return;
  }

  // Cek Radio (Ada 10 Pertanyaan)
  let totalSkor = 0;
  let terisi = 0;
  for(let i=1; i<=10; i++) {
    const radios = document.getElementsByName('q'+i);
    let checked = false;
    for(let r of radios) {
      if(r.checked) {
        totalSkor += parseInt(r.value);
        checked = true;
      }
    }
    if(checked) terisi++;
  }

  if(terisi < 10) {
    alert("Mohon lengkapi seluruh 10 pertanyaan agar hasil akurat. Baru terisi: " + terisi);
    return;
  }

  // 2. Logika Penilaian (Total Max 100)
  let predikat = "";
  let rekomendasi = "";
  let warna = "";

  if(totalSkor >= 80) {
    predikat = "SANGAT BAIK (INKLUSIF)";
    rekomendasi = "Instansi Anda telah memenuhi standar akomodasi yang layak. Pertahankan kualitas ini, lakukan audit berkala, dan jadikan instansi Anda percontohan (role model) bagi unit kerja lain.";
    warna = "#2e7d32";
  } else if(totalSkor >= 50) {
    predikat = "CUKUP (PERLU PERBAIKAN)";
    rekomendasi = "Terdapat fasilitas dasar yang sudah baik, namun masih ada celah krusial. Prioritaskan anggaran tahun depan untuk perbaikan Akses Fisik (Toilet/Ramp) dan Akses Digital.";
    warna = "#f57f17";
  } else {
    predikat = "KURANG (BELUM AKSESIBEL)";
    rekomendasi = "Kondisi saat ini belum memenuhi amanat UU No. 8/2016. Diperlukan komitmen pimpinan untuk segera menyusun Rencana Aksi Pemenuhan Aksesibilitas dalam jangka pendek.";
    warna = "#c62828";
  }

  // Simpan ke Global Data
  const now = new Date();
  globalData = {
    nama: nama,
    instansi: instansi,
    skor: totalSkor,
    predikat: predikat,
    rekomendasi: rekomendasi,
    tanggal: now.toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})
  };

  // 3. Tampilkan Hasil
  document.getElementById('score-display').innerText = totalSkor;
  document.getElementById('predikat-display').innerText = predikat;
  document.getElementById('predikat-display').style.color = warna;
  document.getElementById('deskripsi-singkat').innerText = "Skor maksimal adalah 100. " + rekomendasi;

  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('simple-result-view').style.display = 'block';
  document.getElementById('simple-result-view').focus();
}

// GENERATE PDF AKSESIBEL (TEXT-BASED) & NAMA FILE DINAMIS
async function generateAccessiblePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Set Metadata PDF (Agar dibaca judulnya oleh screen reader)
  doc.setProperties({
    title: "Laporan Hasil Audit Inklusif - " + globalData.instansi,
    subject: "Laporan Diagnostik",
    author: "Forum ASN Inklusif",
    creator: "Sistem Web ASN Inklusif"
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const margin = 20;
  let yPos = 20; // Cursor posisi vertikal

  // 1. KOP SURAT
  const logoUrl = "/assets/img/logo.png";
  try { doc.addImage(logoUrl, 'PNG', margin, 15, 25, 25); } catch(e) {}

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("FORUM ASN INKLUSIF", margin + 30, 22);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Gerakan Nasional Pegawai Sipil Negara Penyandang Disabilitas", margin + 30, 28);
  doc.text("Website: www.asninklusif.id | Email: contact@asninklusif.id", margin + 30, 34);
  
  doc.setLineWidth(1);
  doc.line(margin, 42, pageWidth - margin, 42);

  yPos = 55;

  // 2. JUDUL & NOMOR REGISTRASI
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("LAPORAN HASIL AUDIT DIAGNOSTIK", pageWidth / 2, yPos, { align: "center" });
  
  yPos += 10;
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  const noReg = Math.floor(1000 + Math.random() * 9000);
  const currentYear = new Date().getFullYear();
  doc.text(`Nomor Registrasi: AUDIT/${currentYear}/${noReg}`, pageWidth / 2, yPos, { align: "center" });

  yPos += 20;

  // 3. IDENTITAS
  doc.setFontSize(12);
  doc.text("Nama Pejabat", margin, yPos);
  doc.text(": " + globalData.nama, margin + 50, yPos);
  yPos += 8;
  
  doc.text("Instansi", margin, yPos);
  doc.text(": " + globalData.instansi, margin + 50, yPos);
  yPos += 8;

  doc.text("Tanggal Asesmen", margin, yPos);
  doc.text(": " + globalData.tanggal, margin + 50, yPos);
  yPos += 15;

  // 4. HASIL PENILAIAN
  doc.setDrawColor(0);
  doc.setFillColor(245, 245, 245); 
  doc.rect(margin, yPos, pageWidth - (margin*2), 40, "F"); 
  doc.rect(margin, yPos, pageWidth - (margin*2), 40, "S"); 

  let boxY = yPos + 10;
  doc.setFont("helvetica", "bold");
  doc.text("SKOR INDEKS INKLUSIVITAS", pageWidth / 2, boxY, { align: "center" });
  
  boxY += 15;
  doc.setFontSize(22);
  doc.text(globalData.skor.toString() + " / 100", pageWidth / 2, boxY, { align: "center" });
  
  boxY += 10;
  doc.setFontSize(14);
  doc.text(`(${globalData.predikat})`, pageWidth / 2, boxY, { align: "center" });

  yPos += 50;

  // 5. REKOMENDASI
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("REKOMENDASI TINDAK LANJUT:", margin, yPos);
  yPos += 8;

  doc.setFont("helvetica", "normal");
  const splitText = doc.splitTextToSize(globalData.rekomendasi, pageWidth - (margin*2));
  doc.text(splitText, margin, yPos);
  
  yPos += 30;

  // 6. DASAR HUKUM
  doc.setFontSize(10);
  doc.setTextColor(100);
  const disclaimer = "Asesmen ini merujuk pada indikator UU No. 8 Tahun 2016 dan PP No. 42 Tahun 2020. Hasil ini sah sebagai dokumen diagnosa awal untuk perencanaan anggaran.";
  const splitDisclaimer = doc.splitTextToSize(disclaimer, pageWidth - (margin*2));
  doc.text(splitDisclaimer, margin, yPos);

  // 7. FOOTER & QR CODE
  const footerY = 240;
  const qrData = `VALIDASI AUDIT\nInstansi: ${globalData.instansi}\nSkor: ${globalData.skor}\nRef: ${noReg}`;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
  
  doc.addImage(qrApiUrl, "PNG", margin, footerY, 30, 30);
  doc.setFontSize(9);
  doc.text("Scan untuk validasi", margin, footerY + 35);

  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.text(`Jakarta, ${globalData.tanggal}`, pageWidth - margin, footerY, { align: "right" });
  doc.text("Ketua Forum ASN Inklusif", pageWidth - margin, footerY + 6, { align: "right" });
  
  doc.setFont("helvetica", "bold");
  doc.text("Dimas P. Muharam", pageWidth - margin, footerY + 30, { align: "right" });
  doc.setLineWidth(0.5);
  doc.line(pageWidth - margin - 40, footerY + 31, pageWidth - margin, footerY + 31); 

  // --- LOGIKA NAMA FILE DINAMIS ---
  // 1. Bersihkan Nama Instansi (Ganti spasi dengan underscore, hapus karakter aneh)
  const cleanInstansi = globalData.instansi.replace(/[^a-zA-Z0-9]/g, "_").substring(0, 30);
  
  // 2. Format Tanggal (YYYY-MM-DD)
  const dateObj = new Date();
  const cleanDate = dateObj.toISOString().split('T')[0];

  // 3. Gabungkan
  const fileName = `Laporan_Audit_${cleanInstansi}_${cleanDate}.pdf`;

  // Simpan File
  doc.save(fileName);
}
</script>
