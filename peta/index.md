---
layout: default
title: "Peta Sebaran & Statistik ASN Inklusif"
permalink: /peta/
---

<style>
  .dashboard-wrapper { max-width: 1000px; margin: 40px auto; }
  
  /* Stat Cards */
  .stat-header { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 40px; text-align: center; }
  .stat-box { background: var(--card-bg); padding: 25px; border-radius: 12px; border: 1px solid var(--border-color); min-width: 160px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
  .stat-val { display: block; font-size: 2.8em; font-weight: 800; color: var(--primary-color); line-height: 1; }
  .stat-lbl { font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px; opacity: 0.7; margin-top: 5px; }
  body.dark-mode .stat-val { color: var(--highlight); }

  /* Ragam Chart */
  .ragam-section { background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 50px; }
  .ragam-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; }
  .ragam-item { margin-bottom: 10px; }
  .ragam-info { display: flex; justify-content: space-between; margin-bottom: 5px; font-weight: bold; font-size: 0.9em; }
  .ragam-track { background: rgba(0,0,0,0.05); height: 12px; border-radius: 6px; overflow: hidden; }
  .ragam-fill { height: 100%; border-radius: 6px; transition: width 1s ease-in-out; }

  /* Layout Peta & Top */
  .split-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin-bottom: 50px; }
  @media (max-width: 768px) { .split-layout { grid-template-columns: 1fr; } }
  
  .map-box { background: #eef2f5; border: 1px solid var(--border-color); border-radius: 12px; padding: 20px; position: relative; text-align: center; min-height: 300px; }
  body.dark-mode .map-box { background: #1a1a1a; }
  
  .province-shape { fill: #cccccc; stroke: #ffffff; stroke-width: 1; cursor: pointer; transition: 0.3s; }
  .province-shape:hover { stroke: #ffd700; stroke-width: 2; filter: brightness(1.1); }
  #tooltip { position: fixed; display: none; background: rgba(0, 43, 92, 0.95); color: #fff; padding: 8px 15px; border-radius: 6px; font-size: 0.9em; pointer-events: none; z-index: 999; }

  /* Top List Style */
  .top-list { background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden; }
  .top-item { padding: 15px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; }
  .top-rank { background: var(--accent-color); color: #fff; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8em; margin-right: 10px; }

  /* Table */
  .data-table { width: 100%; border-collapse: collapse; background: var(--card-bg); }
  .data-table th, .data-table td { padding: 12px 15px; border-bottom: 1px solid var(--border-color); text-align: left; }
  .data-table th { background: rgba(0,0,0,0.03); }
  body.dark-mode .data-table th { background: rgba(255,255,255,0.05); }
</style>

<div class="container dashboard-wrapper">

  <div style="text-align: center; margin-bottom: 40px;">
    <h1>🗺️ Dashboard Data Anggota</h1>
    <p>Pemetaan ASN Inklusif di Kementerian, Lembaga, dan Pemerintah Daerah.</p>
  </div>

  <div class="stat-header">
    <div class="stat-box"><span class="stat-val">{{ site.data.sebaran.statistik.total_anggota }}</span><span class="stat-lbl">Anggota</span></div>
    <div class="stat-box"><span class="stat-val">{{ site.data.sebaran.statistik.total_instansi }}</span><span class="stat-lbl">Instansi</span></div>
    <div class="stat-box"><span class="stat-val">{{ site.data.sebaran.statistik.total_provinsi }}</span><span class="stat-lbl">Provinsi</span></div>
  </div>

  <div class="ragam-section">
    <h3 style="margin-top: 0; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 20px;">📊 Komposisi Nasional</h3>
    <div class="ragam-grid">
      {% for item in site.data.sebaran.ragam_nasional %}
      <div class="ragam-item">
        <div class="ragam-info"><span>{{ item.jenis }}</span><span>{{ item.jumlah }}</span></div>
        <div class="ragam-track"><div class="ragam-fill" style="width: {{ item.jumlah | times: 100.0 | divided_by: site.data.sebaran.statistik.total_anggota }}%; background-color: {{ item.warna }};"></div></div>
      </div>
      {% endfor %}
    </div>
  </div>

  <div class="split-layout">
    
    <div class="map-box">
      <h3 style="margin-top: 0;">Peta Kepadatan</h3>
      <div id="tooltip"><strong id="tt-prov">Prov</strong><br>👥 <span id="tt-jml">0</span></div>
      
      <svg viewBox="0 0 800 320" style="width: 100%; height: auto;" aria-hidden="true">
        <rect id="aceh" x="20" y="20" width="30" height="40" rx="5" class="province-shape" data-name="Aceh" />
        <rect id="sumut" x="55" y="30" width="30" height="40" rx="5" class="province-shape" data-name="Sumut" />
        <rect id="riau" x="65" y="75" width="30" height="30" rx="5" class="province-shape" data-name="Riau" />
        <rect id="sumsel" x="90" y="110" width="30" height="30" rx="5" class="province-shape" data-name="Sumsel" />
        <rect id="lampung" x="110" y="145" width="25" height="25" rx="5" class="province-shape" data-name="Lampung" />
        <rect id="banten" x="150" y="180" width="25" height="20" rx="3" class="province-shape" data-name="Banten" />
        <rect id="jakarta" x="180" y="175" width="20" height="20" rx="3" class="province-shape" data-name="DKI Jakarta" />
        <rect id="jabar" x="180" y="190" width="40" height="25" rx="3" class="province-shape" data-name="Jawa Barat" />
        <rect id="jateng" x="225" y="190" width="40" height="25" rx="3" class="province-shape" data-name="Jawa Tengah" />
        <rect id="jatim" x="270" y="195" width="45" height="30" rx="3" class="province-shape" data-name="Jawa Timur" />
        <rect id="kalbar" x="230" y="80" width="40" height="40" rx="5" class="province-shape" data-name="Kalbar" />
        <rect id="kaltim" x="320" y="80" width="35" height="40" rx="5" class="province-shape" data-name="Kaltim" />
        <rect id="sulsel" x="400" y="120" width="30" height="40" rx="5" class="province-shape" data-name="Sulsel" />
        <rect id="sulut" x="430" y="70" width="30" height="20" rx="5" class="province-shape" data-name="Sulut" />
        <rect id="papua" x="550" y="100" width="60" height="40" rx="5" class="province-shape" data-name="Papua" />
        <text x="400" y="290" text-anchor="middle" fill="#999" font-size="12">*Visualisasi Representatif</text>
      </svg>
    </div>

    <div>
      <h3 style="margin-top: 0; margin-bottom: 20px;">🏆 Top 5 Instansi</h3>
      <div id="top-instansi-container" class="top-list">
        <div style="padding: 20px; text-align: center; color: #888;">Memuat data...</div>
      </div>
    </div>
  </div>

  <div>
    <h2 style="margin-bottom: 20px;">📋 Data Provinsi</h2>
    <div style="overflow-x: auto;">
      <table class="data-table">
        <thead><tr><th>Provinsi</th><th style="text-align: center;">Jumlah</th></tr></thead>
        <tbody>
          {% for prov in site.data.sebaran.provinsi %}
          <tr><td>{{ prov.nama }}</td><td style="text-align: center; font-weight: bold; color: var(--primary-color);">{{ prov.jumlah }}</td></tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>

</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    
    // --- BAGIAN 1: SORTING TOP 5 INSTANSI ---
    // Ambil data mentah dari Jekyll ke dalam Array JS
    const rawInstansi = [
      {% for item in site.data.sebaran.data_instansi %}
        { nama: "{{ item.nama }}", jumlah: {{ item.jumlah }} },
      {% endfor %}
    ];

    // Urutkan (Sort Descending)
    rawInstansi.sort((a, b) => b.jumlah - a.jumlah);

    // Ambil 5 Teratas
    const top5 = rawInstansi.slice(0, 5);

    // Render ke HTML
    const container = document.getElementById('top-instansi-container');
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


    // --- BAGIAN 2: LOGIKA PETA ---
    const dataPeta = {
      {% for prov in site.data.sebaran.provinsi %}
        "{{ prov.id_peta }}": {{ prov.jumlah }},
      {% endfor %}
    };
    let maxVal = 0;
    for (let key in dataPeta) { if (dataPeta[key] > maxVal) maxVal = dataPeta[key]; }

    const shapes = document.querySelectorAll('.province-shape');
    const tooltip = document.getElementById('tooltip');
    const ttProv = document.getElementById('tt-prov');
    const ttJml = document.getElementById('tt-jml');

    shapes.forEach(shape => {
      const id = shape.id;
      if (dataPeta[id]) {
        const opacity = (dataPeta[id] / maxVal) * 0.9 + 0.1;
        shape.style.fill = `rgba(0, 43, 92, ${opacity})`;

        shape.addEventListener('mousemove', (e) => {
          tooltip.style.display = 'block';
          tooltip.style.left = (e.clientX + 10) + 'px';
          tooltip.style.top = (e.clientY + 10) + 'px';
          ttProv.innerText = shape.getAttribute('data-name');
          ttJml.innerText = dataPeta[id];
        });
        shape.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
      }
    });

  });
</script>
