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
  .province-shape { fill: #d1d5db; stroke: #ffffff; stroke-width: 0.5; cursor: pointer; transition: all 0.3s; }
  .province-shape:hover { stroke: #ffd700; stroke-width: 1.5; filter: brightness(1.1); transform: scale(1.005); transform-origin: center; }
  
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

      <svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; max-height: 500px;" aria-hidden="true">
        <title>Peta Indonesia</title>
        
        <path id="aceh" class="province-shape" data-name="Aceh" d="M30,50 L50,40 L60,60 L40,80 Z" />
        <path id="sumut" class="province-shape" data-name="Sumatera Utara" d="M60,60 L80,70 L90,100 L50,90 Z" />
        <path id="sumbar" class="province-shape" data-name="Sumatera Barat" d="M50,90 L70,100 L80,130 L60,120 Z" />
        <path id="riau" class="province-shape" data-name="Riau" d="M70,100 L110,90 L120,120 L80,130 Z" />
        <path id="kepri" class="province-shape" data-name="Kep. Riau" d="M120,80 L140,80 L145,90 L125,90 Z" /> <path id="jambi" class="province-shape" data-name="Jambi" d="M80,130 L120,120 L130,140 L90,150 Z" />
        <path id="bengkulu" class="province-shape" data-name="Bengkulu" d="M80,140 L90,150 L100,180 L85,170 Z" />
        <path id="sumsel" class="province-shape" data-name="Sumatera Selatan" d="M90,150 L130,140 L140,170 L100,180 Z" />
        <path id="babel" class="province-shape" data-name="Bangka Belitung" d="M150,140 L170,145 L165,165 L145,160 Z" />
        <path id="lampung" class="province-shape" data-name="Lampung" d="M100,180 L140,170 L145,195 L110,200 Z" />

        <path id="banten" class="province-shape" data-name="Banten" d="M150,210 L170,205 L175,225 L155,230 Z" />
        <path id="jakarta" class="province-shape" data-name="DKI Jakarta" d="M175,205 L185,205 L185,215 L175,215 Z" /> <path id="jabar" class="province-shape" data-name="Jawa Barat" d="M175,215 L210,210 L215,235 L175,235 Z" />
        <path id="jateng" class="province-shape" data-name="Jawa Tengah" d="M215,210 L250,210 L250,240 L220,240 Z" />
        <path id="diy" class="province-shape" data-name="DI Yogyakarta" d="M235,240 L250,240 L245,250 L235,245 Z" />
        <path id="jatim" class="province-shape" data-name="Jawa Timur" d="M250,215 L290,215 L300,245 L255,245 Z" />

        <path id="bali" class="province-shape" data-name="Bali" d="M305,235 L320,230 L315,245 L305,240 Z" />
        <path id="ntb" class="province-shape" data-name="Nusa Tenggara Barat" d="M325,235 L360,235 L355,250 L325,250 Z" />
        <path id="ntt" class="province-shape" data-name="Nusa Tenggara Timur" d="M370,245 L420,240 L415,260 L365,260 Z" />

        <path id="kalbar" class="province-shape" data-name="Kalimantan Barat" d="M190,100 L230,80 L250,130 L200,150 Z" />
        <path id="kalteng" class="province-shape" data-name="Kalimantan Tengah" d="M230,130 L280,120 L280,160 L220,160 Z" />
        <path id="kalsel" class="province-shape" data-name="Kalimantan Selatan" d="M280,140 L300,140 L295,165 L275,160 Z" />
        <path id="kaltim" class="province-shape" data-name="Kalimantan Timur (IKN)" d="M260,80 L300,70 L300,130 L260,120 Z" />
        <path id="kaltara" class="province-shape" data-name="Kalimantan Utara" d="M260,60 L300,60 L290,80 L250,80 Z" />

        <path id="sulut" class="province-shape" data-name="Sulawesi Utara" d="M420,60 L460,55 L450,70 L410,75 Z" />
        <path id="gorontalo" class="province-shape" data-name="Gorontalo" d="M400,75 L420,70 L420,85 L400,85 Z" />
        <path id="sulteng" class="province-shape" data-name="Sulawesi Tengah" d="M380,85 L440,80 L430,120 L390,120 Z" />
        <path id="sulbar" class="province-shape" data-name="Sulawesi Barat" d="M380,120 L400,120 L400,145 L385,140 Z" />
        <path id="sulsel" class="province-shape" data-name="Sulawesi Selatan" d="M400,130 L430,125 L430,165 L405,165 Z" />
        <path id="sultra" class="province-shape" data-name="Sulawesi Tenggara" d="M430,125 L460,130 L455,155 L435,145 Z" />

        <path id="malut" class="province-shape" data-name="Maluku Utara" d="M480,70 L520,70 L510,100 L490,95 Z" />
        <path id="maluku" class="province-shape" data-name="Maluku" d="M480,110 L520,110 L510,140 L470,130 Z" />

        <path id="pabd" class="province-shape" data-name="Papua Barat Daya" d="M530,90 L560,80 L560,100 L530,100 Z" /> <path id="pabar" class="province-shape" data-name="Papua Barat" d="M530,100 L560,100 L560,125 L540,120 Z" /> <path id="pateng" class="province-shape" data-name="Papua Tengah" d="M560,95 L610,95 L610,120 L560,125 Z" />
        <path id="papua" class="province-shape" data-name="Papua (Induk)" d="M610,85 L660,85 L660,110 L610,110 Z" />
        <path id="papeg" class="province-shape" data-name="Papua Pegunungan" d="M610,110 L660,110 L660,130 L610,120 Z" />
        <path id="pasel" class="province-shape" data-name="Papua Selatan" d="M610,120 L660,130 L650,155 L600,145 Z" />
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
