---
layout: default
title: "Peta Sebaran & Statistik ASN Inklusif"
permalink: /peta/
---

<style>
  /* Container Dashboard */
  .dashboard-wrapper { max-width: 1000px; margin: 40px auto; }
  
  /* 1. Header Statistik */
  .stat-header { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 40px; text-align: center; }
  .stat-box { background: var(--card-bg); padding: 25px; border-radius: 12px; border: 1px solid var(--border-color); min-width: 160px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
  .stat-val { display: block; font-size: 2.8em; font-weight: 800; color: var(--primary-color); line-height: 1; }
  .stat-lbl { font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px; opacity: 0.7; margin-top: 5px; }
  body.dark-mode .stat-val { color: var(--highlight); }

  /* 2. Ragam Nasional */
  .ragam-section { background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 50px; }
  .ragam-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }
  .ragam-item { margin-bottom: 10px; }
  .ragam-info { display: flex; justify-content: space-between; margin-bottom: 5px; font-weight: bold; font-size: 0.9em; }
  .ragam-track { background: rgba(0,0,0,0.05); height: 12px; border-radius: 6px; overflow: hidden; }
  .ragam-fill { height: 100%; border-radius: 6px; transition: width 1s ease-in-out; }

  /* 3. Layout Peta & Top 5 */
  .split-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin-bottom: 50px; }
  @media (max-width: 900px) { .split-layout { grid-template-columns: 1fr; } }
  
  /* Peta Styles */
  .map-box { background: #eef2f5; border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; position: relative; text-align: center; min-height: 400px; }
  body.dark-mode .map-box { background: #1a1a1a; }
  
  /* Interaksi SVG */
  .province-shape { fill: #d1d5db; stroke: #ffffff; stroke-width: 1; cursor: pointer; transition: all 0.3s; }
  .province-shape:hover { fill: #1e3a8a !important; stroke: #ffd700; stroke-width: 2; filter: brightness(1.1); transform: scale(1.01); transform-origin: center; }
  
  /* Tooltip */
  #tooltip { position: fixed; display: none; background: rgba(0, 43, 92, 0.95); color: #fff; padding: 10px 15px; border-radius: 6px; font-size: 0.9em; pointer-events: none; z-index: 1000; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }

  /* Top List */
  .top-list { background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden; }
  .top-item { padding: 15px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; }
  .top-rank { background: var(--accent-color); color: #fff; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8em; margin-right: 10px; }

  /* Tabel */
  .data-table { width: 100%; border-collapse: collapse; background: var(--card-bg); }
  .data-table th, .data-table td { padding: 12px 15px; border-bottom: 1px solid var(--border-color); text-align: left; }
  .data-table th { background: rgba(0,0,0,0.03); }
  body.dark-mode .data-table th { background: rgba(255,255,255,0.05); }
</style>

<div class="container dashboard-wrapper">

  <div style="text-align: center; margin-bottom: 40px;">
    <h1>🗺️ Dashboard Sebaran Anggota</h1>
    <p>Visualisasi sebaran {{ site.data.sebaran.statistik.total_anggota }} ASN Inklusif di seluruh Indonesia.</p>
  </div>

  <div class="stat-header">
    <div class="stat-box"><span class="stat-val">{{ site.data.sebaran.statistik.total_anggota }}</span><span class="stat-lbl">Anggota</span></div>
    <div class="stat-box"><span class="stat-val">{{ site.data.sebaran.statistik.total_instansi }}</span><span class="stat-lbl">Instansi</span></div>
    <div class="stat-box"><span class="stat-val">{{ site.data.sebaran.statistik.total_provinsi }}</span><span class="stat-lbl">Provinsi</span></div>
  </div>

  <div class="ragam-section">
    <h3 style="margin-top: 0; padding-bottom: 15px; border-bottom: 1px solid var(--border-color); margin-bottom: 20px;">
      📊 Komposisi Berdasarkan Ragam
    </h3>
    <div class="ragam-grid">
      {% for item in site.data.sebaran.ragam_nasional %}
      <div class="ragam-item">
        <div class="ragam-info"><span>{{ item.jenis }}</span><span>{{ item.jumlah }}</span></div>
        <div class="ragam-track">
          <div class="ragam-fill" style="width: {{ item.jumlah | times: 100.0 | divided_by: site.data.sebaran.statistik.total_anggota }}%; background-color: {{ item.warna }};"></div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>

  <div class="split-layout">
    
    <div class="map-box">
      <h3 style="margin-top: 0;">Peta Kepadatan</h3>
      <p style="font-size:0.85em; opacity:0.7; margin-bottom: 10px;">Arahkan kursor untuk detail</p>
      
      <div id="tooltip">
        <strong id="tt-prov" style="font-size: 1.1em; color: var(--accent-color);">Provinsi</strong><br>
        <span style="font-size: 1.5em; font-weight: bold;" id="tt-jml">0</span> Anggota
      </div>

      <svg viewBox="0 0 800 300" class="map-svg" aria-label="Peta Interaktif Sebaran ASN Inklusif">
        
        <path id="aceh" class="province-shape" d="M30,40 L60,50 L50,70 L20,60 Z" data-name="Aceh" tabindex="0"></path>
        <path id="sumut" class="province-shape" d="M50,70 L70,80 L80,110 L40,90 Z" data-name="Sumatera Utara" tabindex="0"></path>
        <path id="sumbar" class="province-shape" d="M40,90 L80,110 L100,160 L50,140 Z" data-name="Sumatera Barat & Lainnya" tabindex="0"></path>

        <path id="kaltim" class="province-shape" d="M230,90 L270,80 L280,140 L240,140 Z" data-name="Kalimantan Timur (IKN)" tabindex="0"></path>
        <path class="province-shape" d="M180,100 L230,90 L240,140 L200,160 L170,140 Z" data-name="Kalimantan Lainnya" tabindex="0"></path>

        <path id="sulsel" class="province-shape" d="M300,150 L320,150 L330,190 L310,200 L290,190 Z" data-name="Sulawesi Selatan" tabindex="0"></path>
        <path class="province-shape" d="M300,150 L310,100 L350,110 L330,140 L360,140 L350,160 L320,150 Z" data-name="Sulawesi Utara/Tengah" tabindex="0"></path>

        <path id="banten" class="province-shape" d="M130,170 L150,170 L150,185 L130,180 Z" data-name="Banten" tabindex="0"></path>
        <path id="jakarta" class="province-shape" d="M150,170 L160,170 L160,175 L150,175 Z" data-name="DKI Jakarta" tabindex="0"></path>
        <path id="jabar" class="province-shape" d="M150,175 L180,175 L180,190 L150,185 Z" data-name="Jawa Barat" tabindex="0"></path>
        <path id="jateng" class="province-shape" d="M180,175 L210,178 L210,192 L180,190 Z" data-name="Jawa Tengah" tabindex="0"></path>
        <path id="diy" class="province-shape" d="M195,190 L210,190 L205,198 Z" data-name="DI Yogyakarta" tabindex="0"></path>
        <path id="jatim" class="province-shape" d="M210,178 L250,180 L240,200 L210,192 Z" data-name="Jawa Timur" tabindex="0"></path>

        <path id="bali" class="province-shape" d="M255,190 L270,195 L265,205 Z" data-name="Bali" tabindex="0"></path>
        <path class="province-shape" d="M275,195 L320,200 L315,210 L280,205 Z" data-name="Nusa Tenggara" tabindex="0"></path>

        <path id="papua" class="province-shape" d="M550,130 L650,130 L700,160 L680,200 L550,180 Z" data-name="Papua" tabindex="0"></path>

      </svg>
    </div>

    <div>
      <h3 style="margin-top: 0; margin-bottom: 20px;">🏆 Top 5 Instansi</h3>
      <div id="top-instansi-container" class="top-list">
        <div style="padding: 20px; text-align: center; color: #888; font-style: italic;">Memuat data...</div>
      </div>
    </div>
  </div>

  <div>
    <h2 style="margin-bottom: 20px;">📋 Rincian Per Provinsi</h2>
    <div style="overflow-x: auto; max-height: 500px; border: 1px solid var(--border-color); border-radius: 8px;">
      <table class="data-table">
        <thead style="position: sticky; top: 0; z-index: 5;">
          <tr><th>Provinsi</th><th style="text-align: center;">Jumlah Anggota</th></tr>
        </thead>
        <tbody>
          {% for prov in site.data.sebaran.provinsi %}
          <tr>
            <td>{{ prov.nama }}</td>
            <td style="text-align: center; font-weight: bold; color: var(--primary-color);">{{ prov.jumlah }}</td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. LOGIKA SORTING TOP INSTANSI ---
    const rawInstansi = [
      {% for item in site.data.sebaran.data_instansi %}
        { nama: "{{ item.nama }}", jumlah: {{ item.jumlah }} },
      {% endfor %}
    ];

    // Sort Descending & Ambil 5 Teratas
    rawInstansi.sort((a, b) => b.jumlah - a.jumlah);
    const top5 = rawInstansi.slice(0, 5);

    // Render HTML
    const container = document.getElementById('top-instansi-container');
    if(top5.length > 0) {
        let htmlContent = '';
        top5.forEach((item, index) => {
          htmlContent += `
            <div class="top-item">
              <div style="display: flex; align-items: center;">
                <span class="top-rank">${index + 1}</span>
                <strong>${item.nama}</strong>
              </div>
              <span style="background: var(--highlight); color: #000; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.9em;">
                ${item.jumlah}
              </span>
            </div>
          `;
        });
        container.innerHTML = htmlContent;
    } else {
        container.innerHTML = '<div style="padding:15px; text-align:center;">Belum ada data instansi.</div>';
    }

    // --- 2. LOGIKA MEWARNAI PETA (HEATMAP) ---
    const dataPeta = {
      {% for prov in site.data.sebaran.provinsi %}
        "{{ prov.id_peta }}": {{ prov.jumlah }},
      {% endfor %}
    };

    // Cari Angka Max untuk Skala Warna
    let maxVal = 0;
    for (let key in dataPeta) { if (dataPeta[key] > maxVal) maxVal = dataPeta[key]; }

    // Elemen Tooltip
    const tooltip = document.getElementById('tooltip');
    const ttProv = document.getElementById('tt-prov');
    const ttJml = document.getElementById('tt-jml');
    const shapes = document.querySelectorAll('.province-shape');

    shapes.forEach(shape => {
      const id = shape.id;
      const jumlah = dataPeta[id] || 0; // Kalau tidak ada data, anggap 0

      if (maxVal > 0 && jumlah > 0) {
        // Hitung Opacity (0.2 s/d 1.0)
        const opacity = (jumlah / maxVal) * 0.8 + 0.2;
        shape.style.fill = `rgba(0, 43, 92, ${opacity})`; // Warna Navy Blue
        // Force opacity lewat inline style
      } else {
        shape.style.fill = '#e0e0e0'; // Abu-abu jika 0
      }

      // Interaksi Mouse
      shape.addEventListener('mousemove', (e) => {
        tooltip.style.display = 'block';
        // Tooltip mengikuti mouse tapi agak berjarak
        tooltip.style.left = (e.clientX + 15) + 'px';
        tooltip.style.top = (e.clientY + 15) + 'px';
        
        // Isi Data Tooltip
        ttProv.innerText = shape.getAttribute('data-name');
        ttJml.innerText = jumlah;
      });

      shape.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
});
</script>
