---
layout: default
title: "Generator Twibbon Kampanye ASN Inklusif"
permalink: /kampanye/
---

<div class="container" style="max-width: 800px; margin: 40px auto; font-family: sans-serif;">

  <div style="text-align: center; margin-bottom: 40px;">
    <span style="background: var(--accent-color); color: #fff; padding: 5px 15px; border-radius: 50px; font-size: 0.85em; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
      Gerakan Nasional
    </span>
    <h1 style="margin-top: 15px; font-size: 2.2em; color: var(--primary-color);">Suarakan Inklusivitas Birokrasi!</h1>
    
    <p style="font-size: 1.15em; opacity: 0.9; line-height: 1.6; max-width: 700px; margin: 0 auto;">
      Disabilitas bukan hambatan untuk mengabdi. Tunjukkan dukungan Anda terhadap terwujudnya lingkungan kerja pemerintahan yang <strong>setara, aksesibel, dan manusiawi</strong>.
    </p>

    <div style="margin-top: 20px; font-weight: bold; color: var(--highlight);" aria-label="Tagar Kampanye">
      #ASNInklusif &nbsp;•&nbsp; #BirokrasiHumanis &nbsp;•&nbsp; #BanggaMelayaniBangsa
    </div>
  </div>

  <div style="background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: 0 4px 20px rgba(0,0,0,0.05); text-align: center;">
    
    <div style="margin-bottom: 20px;">
      <label for="imageInput" class="button-cta" style="cursor: pointer; display: inline-block; padding: 15px 30px; background: #002b5c; color: white; border-radius: 8px; font-weight: bold; transition: 0.3s;" tabindex="0" onkeydown="if(event.key === 'Enter') document.getElementById('imageInput').click()">
        📸 Pilih Foto Terbaik Anda
        <input type="file" id="imageInput" accept="image/png, image/jpeg, image/jpg" style="display: none;" aria-describedby="fileName">
      </label>
      <p id="fileName" style="font-size: 0.9em; color: #666; margin-top: 10px;" aria-live="polite">Belum ada foto yang dipilih. Format: JPG/PNG.</p>
    </div>

    <div id="canvasContainer" style="display: none; margin: 30px auto; max-width: 500px; border: 2px dashed var(--border-color); padding: 5px;">
        <canvas id="twibbonCanvas" width="1080" height="1080" style="width: 100%; height: auto; display: block;" role="img" aria-label="Pratinjau foto Anda yang telah digabungkan dengan bingkai kampanye ASN Inklusif"></canvas>
    </div>
    
    <p id="loadingText" style="display:none; color: var(--accent-color); font-weight:bold; margin-top: 20px;" role="status" aria-live="polite">
      <span class="loader-icon">⚙️</span> Sedang memproses foto... Mohon tunggu.
    </p>

    <div id="actionArea" style="display: none; margin-top: 30px;">
      <button id="shareBtn" class="button-cta" style="background-color: #25d366; color: #fff; border: none; padding: 12px 25px; border-radius: 6px; cursor: pointer; font-size: 1.1rem; margin: 5px; display: none; font-weight: bold;">
        📤 Share ke WA / IG
      </button>
      <button id="downloadBtn" class="button-cta" style="background-color: var(--highlight); color: #000; border: none; padding: 12px 25px; border-radius: 6px; cursor: pointer; font-size: 1.1rem; margin: 5px; font-weight: bold;">
        ⬇️ Download Gambar
      </button>
      <p style="font-size: 0.9em; margin-top: 10px; color: #555;">Klik download lalu bagikan di media sosial Anda!</p>
    </div>

  </div>

  <div style="margin-top: 60px; text-align: left;">
    <h2 style="text-align: center; border-bottom: none; margin-bottom: 20px;">Panduan & Pertanyaan (FAQ)</h2>
    
    <div class="faq-container">
      
      <details class="faq-item">
        <summary>📱 Apakah saya bisa menggunakan HP?</summary>
        <div class="faq-content">
          <p><strong>Bisa banget!</strong> Justru fitur ini paling optimal digunakan di Smartphone (Android/iPhone). Anda bisa langsung memilih foto dari galeri dan membagikannya ke WhatsApp atau Instagram.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>🔒 Apakah foto saya aman?</summary>
        <div class="faq-content">
          <p><strong>Sangat aman.</strong> Proses penggabungan foto dengan bingkai terjadi di dalam browser HP/Laptop Anda sendiri (teknologi <em>Client-Side</em>). Foto Anda <strong>TIDAK</strong> diunggah ke server kami atau server manapun.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>🖼️ Kenapa bingkai/frame tidak muncul?</summary>
        <div class="faq-content">
          <p>Jika file bingkai belum tersedia, sistem akan membuat bingkai darurat otomatis. Pastikan koneksi internet stabil agar logo bisa dimuat.</p>
        </div>
      </details>

      <details class="faq-item">
        <summary>📤 Bagaimana cara share ke Instagram Story?</summary>
        <div class="faq-content">
          <p>Jika tombol "Share" hijau muncul, klik tombol tersebut lalu pilih Instagram. Jika tidak, silakan klik "Download", lalu buka aplikasi Instagram dan upload manual dari galeri HP Anda.</p>
        </div>
      </details>

    </div>
  </div>

</div>

<style>
.faq-container { max-width: 700px; margin: 0 auto; }
.faq-item {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
}
.faq-item summary {
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faq-item summary:focus { outline: 3px solid var(--accent-color); outline-offset: -3px; }
.faq-item summary::after { content: '+'; font-size: 1.2em; color: var(--accent-color); }
.faq-item[open] summary::after { content: '-'; }
.faq-content { padding: 0 15px 15px 15px; border-top: 1px solid var(--border-color); padding-top: 10px; }
.faq-content p { margin: 0; font-size: 0.95em; color: var(--text-color); opacity: 0.9; }

/* Focus Style */
*:focus { outline: 3px solid #ffc107; outline-offset: 2px; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const fileNameDisplay = document.getElementById('fileName');
    const canvas = document.getElementById('twibbonCanvas');
    const ctx = canvas.getContext('2d');
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');
    const canvasContainer = document.getElementById('canvasContainer');
    const actionArea = document.getElementById('actionArea');
    const loadingText = document.getElementById('loadingText');

    // URL Frame Twibbon (Update path ini sesuai file asli)
    const frameURL = '{{ "/assets/img/twibbon-frame.png" | relative_url }}?v=' + new Date().getTime();
    const logoURL = '{{ "/assets/img/logo.png" | relative_url }}'; // Untuk fallback

    let userImage = new Image();
    let frameImage = new Image();
    let isFrameLoaded = false;

    // Load Frame
    frameImage.crossOrigin = "anonymous";
    frameImage.src = frameURL;
    
    frameImage.onload = function() { 
        isFrameLoaded = true; 
        console.log("Frame loaded successfully");
    };
    
    frameImage.onerror = function() { 
        console.warn("Gagal memuat bingkai Twibbon. Menggunakan mode Fallback (Bingkai Manual).");
        isFrameLoaded = false; 
    };

    // Saat Upload Foto
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            fileNameDisplay.textContent = "Foto terpilih: " + file.name;
            canvasContainer.style.display = 'none';
            actionArea.style.display = 'none';
            loadingText.style.display = 'block';

            const reader = new FileReader();
            reader.onload = function(event) {
                userImage = new Image();
                userImage.onload = function() {
                    drawTwibbon();
                    loadingText.style.display = 'none';
                    canvasContainer.style.display = 'block';
                    actionArea.style.display = 'block';
                    
                    // Cek fitur Web Share API
                    if (navigator.canShare && navigator.share) {
                        shareBtn.style.display = 'inline-block';
                    }
                    
                    // Fokus ke tombol download agar user langsung tahu
                    downloadBtn.focus();
                };
                userImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    function drawTwibbon() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 1. Gambar Foto User (Crop Center)
        const canvasRatio = canvas.width / canvas.height;
        const imageRatio = userImage.width / userImage.height;
        let drawWidth, drawHeight, startX, startY;

        if (imageRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = userImage.width * (canvas.height / userImage.height);
            startX = (canvas.width - drawWidth) / 2;
            startY = 0;
        } else {
            drawWidth = canvas.width;
            drawHeight = userImage.height * (canvas.width / userImage.width);
            startX = 0;
            startY = (canvas.height - drawHeight) / 2;
        }
        ctx.drawImage(userImage, startX, startY, drawWidth, drawHeight);

        // 2. Gambar Frame
        if (isFrameLoaded) {
            ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
        } else {
            // FALLBACK JIKA FRAME GAGAL LOAD (Buat Bingkai Manual)
            drawFallbackFrame();
        }
    }

    function drawFallbackFrame() {
        // Bingkai bawah Gradient Biru
        const gradient = ctx.createLinearGradient(0, canvas.height - 300, 0, canvas.height);
        gradient.addColorStop(0, "rgba(0, 43, 92, 0)");
        gradient.addColorStop(1, "rgba(0, 43, 92, 0.9)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, canvas.height - 400, canvas.width, 400);

        // Border Emas
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#ffd700";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // Teks Kampanye
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 60px Arial";
        ctx.textAlign = "center";
        ctx.fillText("SAYA MENDUKUNG", canvas.width / 2, canvas.height - 180);
        
        ctx.font = "bold 80px Arial";
        ctx.fillStyle = "#ffd700";
        ctx.fillText("#ASNInklusif", canvas.width / 2, canvas.height - 80);

        // Coba gambar logo kecil di pojok
        const logoImg = new Image();
        logoImg.src = logoURL;
        logoImg.onload = function() {
            ctx.drawImage(logoImg, 40, 40, 150, 150);
        }
    }

    // Share Logic
    shareBtn.addEventListener('click', async () => {
        canvas.toBlob(async (blob) => {
            const file = new File([blob], 'twibbon-asn-inklusif.png', { type: 'image/png' });
            if (navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: 'Twibbon ASN Inklusif',
                        text: 'Saya mendukung #ASNInklusif! Buat twibbonmu di sini: ' + window.location.href
                    });
                } catch (err) { console.log('Share canceled'); }
            } else {
                alert('Gunakan tombol Download.');
            }
        });
    });

    // Download Logic
    downloadBtn.addEventListener('click', function() {
        const dataURL = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.download = 'Dukungan-ASN-Inklusif.png';
        link.href = dataURL;
        link.click();
    });
});
</script>
