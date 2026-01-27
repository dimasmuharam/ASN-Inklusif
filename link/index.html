---

layout: default

title: "Pustaka Short Link ASN Inklusif"

permalink: /link/

---



<div class="container" style="max-width: 1000px; margin: 40px auto; font-family: sans-serif;">



&nbsp; <div style="text-align: center; margin-bottom: 40px;">

&nbsp;   <h1>🔗 Pustaka Link \& QR Code</h1>

&nbsp;   <p>Daftar seluruh tautan pendek (short link) aktif ASN Inklusif.</p>

&nbsp; </div>



&nbsp; <div style="overflow-x: auto; background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); border: 1px solid #ddd;">

&nbsp;   <table style="width: 100%; border-collapse: collapse;">

&nbsp;     <thead style="background: #f5f5f5; border-bottom: 2px solid #ddd;">

&nbsp;       <tr>

&nbsp;         <th style="padding: 15px; text-align: left;">Short Link</th>

&nbsp;         <th style="padding: 15px; text-align: left;">Tujuan (Target)</th>

&nbsp;         <th style="padding: 15px; text-align: center; width: 150px;">Aksi</th>

&nbsp;       </tr>

&nbsp;     </thead>

&nbsp;     <tbody>

&nbsp;       {% assign links = site.pages | where: "layout", "redirect" %}

&nbsp;       

&nbsp;       {% for item in links %}

&nbsp;       <tr style="border-bottom: 1px solid #eee;">

&nbsp;         <td style="padding: 15px;">

&nbsp;           <a href="{{ item.url | absolute\_url }}" target="\_blank" style="font-weight: bold; color: #002b5c; text-decoration: none;">

&nbsp;             /link{{ item.url | remove: "/link/" | remove: "index.html" }}

&nbsp;             <small style="font-size: 0.8em; color: #888;">↗</small>

&nbsp;           </a>

&nbsp;         </td>

&nbsp;         

&nbsp;         <td style="padding: 15px; font-size: 0.9em; color: #555;">

&nbsp;           <div style="max-width: 350px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="{{ item.target }}">

&nbsp;             {{ item.target }}

&nbsp;           </div>

&nbsp;         </td>



&nbsp;         <td style="padding: 15px; text-align: center;">

&nbsp;           <button onclick="lihatQR('{{ item.url | absolute\_url }}')" 

&nbsp;                   style="background: #002b5c; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; font-size: 0.9em; display: inline-flex; align-items: center; gap: 5px;">

&nbsp;             📱 QR

&nbsp;           </button>

&nbsp;         </td>

&nbsp;       </tr>

&nbsp;       {% endfor %}



&nbsp;       {% if links.size == 0 %}

&nbsp;       <tr>

&nbsp;         <td colspan="3" style="text-align: center; padding: 30px; color: #666;">

&nbsp;           Belum ada short link yang dibuat. Silakan buat file .md baru dengan layout: redirect.

&nbsp;         </td>

&nbsp;       </tr>

&nbsp;       {% endif %}

&nbsp;     </tbody>

&nbsp;   </table>

&nbsp; </div>



&nbsp; <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 8px; font-size: 0.9em; color: #002b5c;">

&nbsp;   <strong>💡 Cara Menambah Link Baru:</strong><br>

&nbsp;   Cukup buat file baru di folder <code>link/</code> (misal: <code>presensi.md</code>), lalu isi dengan:

&nbsp;   <pre style="background: rgba(255,255,255,0.5); padding: 10px; border-radius: 4px; margin-top: 5px;">---

layout: redirect

target: https://google.com/forms/...

---</pre>

&nbsp;   Otomatis akan muncul di tabel ini.

&nbsp; </div>



</div>



<div id="qrModal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.8); backdrop-filter: blur(5px); align-items: center; justify-content: center;">

&nbsp; <div style="background-color: #fefefe; margin: auto; padding: 30px; border: 1px solid #888; width: 90%; max-width: 400px; border-radius: 15px; text-align: center; position: relative;">

&nbsp;   

&nbsp;   <button onclick="tutupQR()" style="position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 24px; cursor: pointer;">\&times;</button>

&nbsp;   

&nbsp;   <h3 style="margin-top: 0; color: #002b5c;">Scan QR Code</h3>

&nbsp;   

&nbsp;   <div style="background: #fff; padding: 10px; border: 2px dashed #ddd; display: inline-block; border-radius: 8px; margin-bottom: 15px;">

&nbsp;       <img id="qrImageDisplay" src="" alt="QR Code" style="width: 100%; max-width: 250px; height: auto; display: block;">

&nbsp;   </div>

&nbsp;   

&nbsp;   <div>

&nbsp;       <input type="text" id="qrLinkText" readonly style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; text-align: center; background: #f9f9f9; font-size: 0.9em; margin-bottom: 10px;">

&nbsp;       <button onclick="downloadQR()" style="background: #002b5c; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold; width: 100%;">⬇️ Download QR</button>

&nbsp;   </div>

&nbsp; </div>

</div>



<script>

function lihatQR(urlLengkap) {

&nbsp;   // Pastikan URL absolute

&nbsp;   if(urlLengkap.startsWith('/')) {

&nbsp;       urlLengkap = window.location.origin + urlLengkap;

&nbsp;   }



&nbsp;   const modal = document.getElementById("qrModal");

&nbsp;   const img = document.getElementById("qrImageDisplay");

&nbsp;   const textInput = document.getElementById("qrLinkText");

&nbsp;   

&nbsp;   // API Call ke QRServer (Gratis \& Stabil)

&nbsp;   img.src = "https://api.qrserver.com/v1/create-qr-code/?size=500x500\&margin=10\&data=" + encodeURIComponent(urlLengkap);

&nbsp;   textInput.value = urlLengkap;

&nbsp;   modal.style.display = "flex";

}



function tutupQR() { document.getElementById("qrModal").style.display = "none"; }

window.onclick = function(e) { if (e.target == document.getElementById("qrModal")) tutupQR(); }



async function downloadQR() {

&nbsp;   const img = document.getElementById("qrImageDisplay");

&nbsp;   try {

&nbsp;       const image = await fetch(img.src);

&nbsp;       const imageBlog = await image.blob();

&nbsp;       const imageURL = URL.createObjectURL(imageBlog);

&nbsp;       const link = document.createElement('a');

&nbsp;       link.href = imageURL;

&nbsp;       link.download = "QR\_Shortlink.png";

&nbsp;       document.body.appendChild(link);

&nbsp;       link.click();

&nbsp;       document.body.removeChild(link);

&nbsp;   } catch (e) { alert("Klik kanan pada gambar lalu pilih 'Save Image As' untuk menyimpan."); }

}

</script>

