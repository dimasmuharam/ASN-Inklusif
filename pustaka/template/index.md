---
layout: default
title: "Bank Template Surat Advokasi"
permalink: /pustaka/template/
---

<style>
  /* Container */
  .doc-container { max-width: 900px; margin: 40px auto; }

  /* 1. Intro Section */
  .intro-box { text-align: center; margin-bottom: 50px; }
  .intro-tag { background: var(--accent-color); color: #fff; padding: 4px 12px; border-radius: 50px; font-size: 0.85em; font-weight: bold; text-transform: uppercase; }
  
  /* 2. Kartu Surat */
  .letter-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 40px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  }
  .lc-meta { margin-bottom: 15px; }
  .lc-cat { color: var(--highlight); font-weight: bold; text-transform: uppercase; font-size: 0.9em; letter-spacing: 1px; }
  .lc-title { margin: 5px 0 10px 0; color: var(--primary-color); font-size: 1.5em; }
  .lc-desc { font-style: italic; opacity: 0.8; margin-bottom: 20px; line-height: 1.5; border-left: 3px solid var(--border-color); padding-left: 15px; }
  body.dark-mode .lc-title { color: var(--highlight); }

  /* Area Teks (Pre-formatted) */
  .letter-content {
    background: #f4f6f8;
    border: 1px dashed #999;
    padding: 25px;
    border-radius: 6px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1em;
    line-height: 1.6;
    color: #2c3e50;
    white-space: pre-wrap; /* Menjaga spasi & enter */
    overflow-x: auto;
    margin-bottom: 20px;
  }
  body.dark-mode .letter-content { background: #1e1e1e; color: #e0e0e0; border-color: #555; }

  /* Highlight bagian yang perlu diedit [ ... ] */
  .edit-mark { background-color: #ffeb3b; color: #000; padding: 0 2px; }

  /* Tombol Aksi */
  .btn-action-row { display: flex; align-items: center; gap: 15px; flex-wrap: wrap; }
  .btn-copy {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    padding: 12px 25px;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    display: inline-flex; align-items: center; gap: 8px;
    transition: background 0.2s;
  }
  .btn-copy:hover { background-color: var(--accent-color); }
  .btn-copy:focus { outline: 3px solid var(--highlight); }

  /* 3. FAQ Section */
  .faq-section { margin-top: 60px; border-top: 1px solid var(--border-color); padding-top: 40px; }
  .faq-item { background: var(--card-bg); border: 1px solid var(--border-color); margin-bottom: 10px; border-radius: 8px; }
  .faq-item summary { padding: 15px; cursor: pointer; font-weight: bold; list-style: none; display: flex; justify-content: space-between; }
  .faq-item summary::after { content: '+'; font-weight: bold; color: var(--accent-color); }
  .faq-item[open] summary::after { content: '-'; }
  .faq-item div { padding: 0 15px 15px; border-top: 1px solid var(--border-color); padding-top: 15px; opacity: 0.9; line-height: 1.6; }

  /* Utilitas Aksesibilitas */
  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
  }
</style>

<div class="container doc-container">

  <div class="intro-box">
    <span class="intro-tag">Advokasi Mandiri</span>
    <h1 style="margin-top: 15px; margin-bottom: 15px;">Bank Surat & Naskah Dinas</h1>
    <p style="font-size: 1.15em; line-height: 1.6; opacity: 0.9;">
      Perjuangkan hak "Akomodasi yang Layak" Anda dengan bahasa birokrasi yang tepat, santun, dan berdasar hukum. 
      Tools ini dirancang untuk membantu ASN Disabilitas menyusun permohonan resmi tanpa rasa ragu.
    </p>
  </div>

  <div style="background: rgba(0, 180, 216, 0.1); border-left: 5px solid var(--accent-color); padding: 20px; border-radius: 4px; margin-bottom: 40px;">
    <h3 style="margin-top: 0; font-size: 1.1em;">💡 Panduan Penggunaan</h3>
    <ol style="margin: 10px 0 0 20px; padding: 0; line-height: 1.5;">
      <li>Pilih template surat yang sesuai dengan kebutuhan Anda di bawah ini.</li>
      <li>Tekan tombol <strong>"Salin Naskah"</strong>. Pembaca layar akan mengkonfirmasi jika teks berhasil disalin.</li>
      <li>Tempel (Paste) ke aplikasi pengolah kata (MS Word/Google Docs).</li>
      <li><strong>PENTING:</strong> Ubah teks yang ada di dalam kurung siku <code>[ ... ]</code> dengan data diri Anda.</li>
    </ol>
  </div>

  {% for surat in site.data.surat %}
  <article class="letter-card" aria-labelledby="judul-{{ surat.id }}">
    
    <div class="lc-meta">
      <span class="lc-cat">📂 Kategori: {{ surat.kategori }}</span>
    </div>

    <h2 id="judul-{{ surat.id }}" class="lc-title">{{ surat.judul }}</h2>
    <p class="lc-desc">
      <strong>Kegunaan:</strong> {{ surat.deskripsi }}
    </p>

    <div class="letter-content" id="text-{{ surat.id }}" role="textbox" aria-readonly="true" tabindex="0" aria-label="Pratinjau isi surat">
{{ surat.isi }}
    </div>

    <div class="btn-action-row">
      <button class="btn-copy" onclick="copyText('text-{{ surat.id }}', '{{ surat.judul }}')">
        <span aria-hidden="true">📋</span> Salin Naskah Surat
      </button>
    </div>

  </article>
  {% endfor %}

  <section class="faq-section" aria-labelledby="faq-header">
    <h2 id="faq-header" style="text-align: center; margin-bottom: 30px;">Pertanyaan Umum (FAQ)</h2>
    
    <details class="faq-item">
      <summary>Mengapa saya harus menggunakan surat resmi?</summary>
      <div>
        Dalam birokrasi pemerintahan, "Lisan" seringkali tidak dianggap. Surat resmi menjadi <strong>bukti tertulis</strong> (arsip) bahwa Anda pernah mengajukan permintaan. Jika di kemudian hari ada sengketa atau audit, surat ini menjadi pelindung hukum Anda.
      </div>
    </details>

    <details class="faq-item">
      <summary>Apakah saya boleh mengubah isi surat ini?</summary>
      <div>
        <strong>Sangat boleh.</strong> Template ini hanyalah kerangka dasar. Silakan sesuaikan kalimatnya dengan gaya bahasa di instansi Anda, atau tambahkan dasar hukum lain yang relevan. Jangan lupa mengisi bagian [Nama], [NIP], dan [Instansi].
      </div>
    </details>

    <details class="faq-item">
      <summary>Bagaimana jika atasan menolak permohonan saya?</summary>
      <div>
        Jika ditolak secara lisan, mintalah <strong>jawaban tertulis</strong> alasan penolakannya. Jika penolakan tidak berdasar, Anda dapat meneruskan surat tersebut ke unit Advokasi Forum ASN Inklusif atau KASN (Komisi Aparatur Sipil Negara) sebagai bukti adanya hambatan akomodasi yang layak.
      </div>
    </details>

    <details class="faq-item">
      <summary>Apa dasar hukum yang dipakai di template ini?</summary>
      <div>
        Template ini merujuk pada <strong>UU No. 8 Tahun 2016</strong> tentang Penyandang Disabilitas, khususnya pasal mengenai hak pekerjaan dan aksesibilitas, serta peraturan turunan seperti PP No. 39 Tahun 2020. Mencantumkan dasar hukum membuat posisi tawar Anda lebih kuat.
      </div>
    </details>
  </section>

</div>

<div id="a11y-announcer" class="sr-only" aria-live="polite"></div>

<script>
function copyText(elementId, suratTitle) {
  // 1. Ambil teks (hapus spasi berlebih di awal/akhir)
  const textElement = document.getElementById(elementId);
  const textToCopy = textElement.innerText.trim();
  const announcer = document.getElementById('a11y-announcer');

  // 2. Salin ke Clipboard
  navigator.clipboard.writeText(textToCopy).then(() => {
    
    // 3. Notifikasi Suara (Screen Reader)
    // Teks ini akan langsung dibacakan oleh pembaca layar
    announcer.textContent = "Berhasil menyalin naskah: " + suratTitle + ". Silakan tempel di dokumen Anda.";

    // 4. Notifikasi Visual (Alert Sederhana)
    // Kita pakai alert standar agar fokus pindah dan user sadar
    // Atau bisa pakai toast custom, tapi alert paling reliable di berbagai browser
    alert("✅ Naskah berhasil disalin!\n\nSilakan 'Paste' (Tempel) di Microsoft Word/Email.");

    // Reset announcer setelah beberapa detik agar bisa dipakai lagi
    setTimeout(() => { announcer.textContent = ""; }, 3000);

  }).catch(err => {
    console.error('Gagal:', err);
    alert('Gagal menyalin otomatis. Silakan blok teks dan salin manual.');
  });
}
</script>
