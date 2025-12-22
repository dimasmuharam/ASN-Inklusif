---
layout: default
title: "Quick Assessment Inklusivitas Unit Kerja Pemerintah"
permalink: /tool/asesmen/
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

<div style="display:none">
  <h1>Audit Aksesibilitas Kantor Pemerintah & Unit Kerja</h1>
  <p>Alat ukur kesiapan instansi pemerintah dalam menerapkan UU Penyandang Disabilitas, standar ILO, dan ISO 30415.</p>
</div>

<div class="container" style="max-width: 900px; margin: 40px auto;">

  <section class="asesmen-intro">
    <h1 style="text-align: center; margin-bottom: 10px;">📊 Instrumen Asesmen Inklusivitas Instansi</h1>
    <p style="text-align: center; font-size: 1.1em; opacity: 0.8; margin-bottom: 40px;">
      Diagnostik cepat kesiapan unit kerja Anda dalam menerapkan <strong>Manajemen ASN Inklusif</strong>.
    </p>

    <div style="background: var(--card-bg); padding: 25px; border-radius: 8px; border-left: 5px solid var(--accent-color); margin-bottom: 40px; border: 1px solid var(--border-color);">
      <h2 style="margin-top: 0; font-size: 1.3em;">Mengapa Asesmen Ini Penting?</h2>
      
      <p>Mewujudkan Birokrasi Berkelas Dunia tidak mungkin terjadi tanpa prinsip <strong>Meritokrasi</strong> yang inklusif. Tantangan terbesar sektor publik saat ini adalah kekakuan anggaran (DIPA) dan infrastruktur gedung lama.</p>
      
      <p>Berbeda dengan swasta, instansi pemerintah memiliki mandat konstitusi untuk menjadi <strong>Role Model</strong> pemenuhan Hak Asasi Manusia.</p>
    </div>
  </section>

  <form id="auditForm" style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid var(--border-color);">
    
    <div style="margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
      <div style="margin-bottom: 15px; padding: 15px; background: #f0f7ff; border-radius: 6px; font-size: 0.9em; border: 1px solid #d0e3ff;">
        <strong>📋 Petunjuk Pengisian:</strong><br>
        Jawablah sesuai kondisi riil di lapangan. Sistem akan menerbitkan Sertifikat Digital dengan QR Code Validasi.
      </div>
      
      <div style="font-size: 0.85em; color: #666;">
        <strong>📚 Dasar Penyusunan Instrumen:</strong>
        <ul style="margin: 5px 0 0 20px; padding: 0;">
          <li><strong>UU No. 8 Tahun 2016</strong> tentang Penyandang Disabilitas (Pasal 11 & 27).</li>
          <li><strong>ILO Global Business & Disability Network Charter</strong> (Prinsip Non-Diskriminasi).</li>
          <li><strong>ISO 30415:2021</strong> (Human Resource Management – Diversity and Inclusion).</li>
        </ul>
      </div>
    </div>

    <h3 class="section-title">A. Komitmen & Regulasi</h3>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah instansi memiliki dokumen tertulis (SK Tim/Peraturan) tentang layanan inklusif?</span></label></div>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah tersedia anggaran (DIPA) khusus untuk Akomodasi yang Layak (non-bansos)?</span></label></div>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah tersedia kanal pengaduan diskriminasi yang aksesibel & rahasia?</span></label></div>

    <h3 class="section-title">B. HR & Pengembangan Karir</h3>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah pengumuman lowongan umum eksplisit mengundang disabilitas melamar?</span></label></div>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah pewawancara seleksi sudah dilatih "Etika Berinteraksi dengan Disabilitas"?</span></label></div>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah pegawai disabilitas punya akses setara ke Diklatpim/Beasiswa?</span></label></div>

    <h3 class="section-title">C. Aksesibilitas Fisik & Digital</h3>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah jalur dari gerbang hingga ruang kerja utama bebas hambatan (step-free)?</span></label></div>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah tersedia toilet aksesibel yang fungsional di lantai kerja?</span></label></div>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah aplikasi internal (E-Kinerja) sudah diuji dengan Pembaca Layar?</span></label></div>

    <h3 class="section-title">D. Budaya Organisasi</h3>
    <div class="q-item"><label class="check-label"><input type="checkbox" value="10"> <span>Apakah pernah diadakan sosialisasi <em>Disability Awareness</em> (2 thn terakhir)?</span></label></div>

    <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
      <label style="display: block; margin-bottom: 5px; font-weight: bold;">Nama Unit Kerja / Instansi:</label>
      <input type="text" id="unitName" placeholder="Contoh: Biro SDM Kementerian X" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <div style="margin-top: 30px; text-align: center;">
      <button type="button" onclick="generatePDF()" class="button-cta" style="border: none; cursor: pointer; font-size: 1.1rem; min-width: 250px;">
        🖨️ Proses & Download Sertifikat PDF
      </button>
      <p id="loadingText" style="display:none; color: #666; margin-top:10px;">
        <span class="loader-icon">⚙️</span> Sedang memproses data & QR Code...
      </p>
    </div>
  </form>

  <div id="certificateTemplate" style="width: 750px; background: #fff; padding: 40px; display: none; position: relative;">
    
    <div style="border-bottom: 3px solid #002b5c; padding-bottom: 20px; margin-bottom: 30px; display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 15px;">
        <img src="https://www.asninklusif.or.id/assets/img/logo.png" width="80" crossorigin="anonymous">
        <div style="text-align: left;">
          <h2 style="margin: 0; color: #002b5c; font-size: 24px; text-transform: uppercase;">Forum ASN Inklusif</h2>
          <small style="font-size: 12px; color: #555;">Sinergi Indonesia Inklusif | www.asninklusif.or.id</small>
        </div>
      </div>
      <div style="text-align: right;">
        <span style="background: #002b5c; color: #fff; padding: 5px 15px; border-radius: 4px; font-size: 12px; letter-spacing: 1px;">HASIL ASESMEN</span>
      </div>
    </div>

    <div style="text-align: center; margin-top: 20px;">
      <h1 style="margin: 0; font-size: 26px; color: #333;">LAPORAN DIAGNOSTIK INKLUSIVITAS</h1>
      
      <p style="margin-top: 5px; font-family: monospace; color: #666; font-size: 14px;">
        No. Reg: <span id="docRegNumber">ASN/2025/X/0000</span>
      </p>

      <div style="margin: 30px 0;">
        <p>Berdasarkan asesmen mandiri <em>(self-assessment)</em>, Unit Kerja:</p>
        <h2 id="pdfUnitName" style="font-size: 24px; margin: 10px 0; color: #000; text-decoration: underline;">Nama Unit Kerja</h2>
        
        <p>Telah melakukan pengukuran kesiapan infrastruktur dan kebijakan inklusif dengan hasil:</p>
        
        <div style="background: #f8f9fa; border: 2px solid #dde1e6; width: 60%; margin: 20px auto; padding: 20px; border-radius: 8px;">
          <span style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">SKOR INDEKS</span>
          <span id="pdfScore" style="display: block; font-size: 48px; font-weight: 800; color: #002b5c; line-height: 1;">0</span>
          <span style="display: block; font-size: 12px; color: #888; margin-bottom: 15px;">Skala 100</span>
          
          <div id="pdfBadge" style="background: #333; color: #fff; padding: 8px 20px; border-radius: 50px; font-weight: bold; display: inline-block;">
            PREDIKAT
          </div>
        </div>

        <div id="pdfDesc" style="font-size: 14px; color: #444; max-width: 80%; margin: 0 auto; line-height: 1.5; text-align: justify;">
          Deskripsi hasil...
        </div>

        <div style="text-align: left; font-size: 10px; color: #777; margin-top: 30px; border-top: 1px dotted #ccc; padding-top: 10px;">
          <strong>Basis Asesmen:</strong>
          Indikator penilaian mengacu pada <em>UU No. 8/2016 tentang Penyandang Disabilitas</em>, <em>ILO Global Business & Disability Network Charter</em>, dan <em>ISO 30415:2021 (D&I)</em>.
        </div>
      </div>
    </div>

    <div style="margin-top: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
      
      <div style="width: 250px; text-align: left;">
        <div id="qrcode" style="margin-bottom: 10px;"></div>
        <p style="font-size: 10px; color: #888; margin: 0;">
          <strong>Scan untuk Validasi</strong><br>
          Dokumen ini dihasilkan secara digital.<br>
          Data tersimpan dalam kode QR di atas.
        </p>
      </div>

      <div style="text-align: center; width: 250px;">
        <p id="pdfDate" style="margin: 0; font-size: 14px;">Jakarta, 22 Desember 2025</p>
        <p style="margin: 5px 0 20px 0; font-weight: bold; font-size: 14px;">Ketua Forum ASN Inklusif</p>
        
        <div style="height: 60px; display: flex; align-items: center; justify-content: center;">
           <span style="font-family: 'Brush Script MT', cursive; font-size: 28px; color: #002b5c; transform: rotate(-5deg);">Dimas P. Muharam</span>
        </div>

        <p style="margin: 0; font-weight: bold; text-decoration: underline; font-size: 14px;">DIMAS PRASETYO MUHARAM</p>
        <p style="margin: 0; font-size: 12px;">Founder</p>
      </div>
    </div>
    
    <div style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 10px; font-size: 10px; color: #999; text-align: center;">
      Dokumen ini diterbitkan oleh Sistem Asesmen Digital Forum ASN Inklusif. Validitas isi merupakan tanggung jawab pengisi survei.<br>
      Untuk verifikasi lanjutan dan audit lapangan, hubungi: contact@asninklusif.or.id
    </div>
  </div>

</div>

<style>
.section-title { color: var(--primary-color); margin-top: 25px; margin-bottom: 10px; border-bottom: 2px solid #eee; }
.check-label { display: flex; gap: 10px; cursor: pointer; padding: 5px; }
.check-label:hover { background: #f9f9f9; }
@media (max-width: 600px) {
  .asesmen-intro .grid { grid-template-columns: 1fr !important; }
}
</style>

<script>
function generatePDF() {
  const unitName = document.getElementById('unitName').value;
  if(!unitName) { alert("Mohon isi Nama Unit Kerja!"); return; }

  // UI Loading
  const btn = document.querySelector('.button-cta');
  const loading = document.getElementById('loadingText');
  btn.style.display = 'none';
  loading.style.display = 'block';

  // 1. Hitung Skor
  const inputs = document.querySelectorAll('#auditForm input[type="checkbox"]');
  let score = 0;
  inputs.forEach(input => { if(input.checked) score += parseInt(input.value); });

  // 2. Predikat
  let predikat = ""; let color = ""; let text = "";
  if (score <= 40) {
    predikat = "INISIATOR"; color = "#d9534f";
    text = "Unit kerja Anda mulai menyadari isu disabilitas. Diperlukan reformasi kebijakan dasar dan komitmen pimpinan yang lebih kuat.";
  } else if (score <= 70) {
    predikat = "PROGRESIF"; color = "#f0ad4e";
    text = "Unit kerja berada di jalur yang tepat. Fokuskan perbaikan pada detail aksesibilitas digital dan fasilitas fisik.";
  } else {
    predikat = "ROLE MODEL"; color = "#5cb85c";
    text = "Luar biasa! Unit kerja Anda berpotensi menjadi instansi percontohan nasional dalam penerapan manajemen ASN inklusif.";
  }

  // 3. Generate Nomor Registrasi
  const now = new Date();
  const dateStr = now.toISOString().slice(0,10).replace(/-/g,""); 
  const timeStr = now.toTimeString().slice(0,5).replace(/:/g,""); 
  const randomCode = Math.floor(1000 + Math.random() * 9000); 
  const regNum = `ASN/${dateStr}/${timeStr}/${randomCode}`;

  // 4. Update Isi Sertifikat
  document.getElementById('pdfUnitName').innerText = unitName;
  document.getElementById('pdfScore').innerText = score;
  document.getElementById('docRegNumber').innerText = "No. Reg: " + regNum;
  
  const badge = document.getElementById('pdfBadge');
  badge.innerText = predikat;
  badge.style.backgroundColor = color;
  document.getElementById('pdfDesc').innerText = text;

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('pdfDate').innerText = "Jakarta, " + now.toLocaleDateString('id-ID', dateOptions);

  // 5. Generate QR Code
  document.getElementById("qrcode").innerHTML = ""; 
  const qrData = `VALIDASI DOKUMEN FORUM ASN INKLUSIF\nNo.Reg: ${regNum}\nUnit: ${unitName}\nSkor: ${score} (${predikat})\nTgl: ${now.toLocaleDateString('id-ID')}\nDasar: UU No.8/2016, ISO 30415, ILO\n\nDokumen ini sah secara digital.`;
  
  new QRCode(document.getElementById("qrcode"), {
    text: qrData, width: 100, height: 100,
    colorDark : "#000000", colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.M
  });

  // 6. Cetak ke PDF
  setTimeout(() => {
    const element = document.getElementById('certificateTemplate');
    element.style.display = 'block';

    var opt = {
      margin:       10,
      filename:     'Sertifikat-Inklusif-' + regNum.replace(/\//g,'-') + '.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(function(){
      element.style.display = 'none';
      btn.style.display = 'inline-block';
      loading.style.display = 'none';
    });
  }, 500);
}
</script>
