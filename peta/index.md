---
layout: default
title: "Peta Sebaran & Statistik ASN Inklusif"
permalink: /peta/
---

<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>

<style>
  /* Container Dashboard */
  .dashboard-wrapper { max-width: 1200px; margin: 40px auto; font-family: sans-serif; }
  
  /* 1. Header Statistik */
  .stat-header { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 40px; text-align: center; }
  .stat-box { background: var(--card-bg); padding: 25px; border-radius: 12px; border: 1px solid var(--border-color); min-width: 160px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
  .stat-val { display: block; font-size: 2.8em; font-weight: 800; color: var(--primary-color); line-height: 1; }
  .stat-lbl { font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px; opacity: 0.7; margin-top: 5px; }

  /* 2. Ragam Nasional */
  .ragam-section { background: var(--card-bg); padding: 30px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 40px; }
  .ragam-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
  .ragam-item { margin-bottom: 10px; }
  .ragam-info { display: flex; justify-content: space-between; margin-bottom: 5px; font-weight: bold; font-size: 0.9em; }
  .ragam-track { background: rgba(0,0,0,0.05); height: 10px; border-radius: 6px; overflow: hidden; }
  .ragam-fill { height: 100%; border-radius: 6px; }

  /* 3. PETA & LIST (Layout Baru) */
  .map-container { 
    background: #fff; 
    border: 1px solid #ddd; 
    border-radius: 12px; 
    padding: 10px; 
    height: 600px; /* Tinggi Peta */
    position: relative;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
  
  .split-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; margin-bottom: 50px; }
  @media (max-width: 900px) { .split-layout { grid-template-columns: 1fr; } }

  /* Top List */
  .top-list { background: var(--card-bg); border-radius: 12px; border: 1px solid var(--border-color); }
  .top-item { padding: 15px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; }
  .top-rank { background: #002b5c; color: #fff; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8em; margin-right: 10px; }
  
  /* Loading Spinner untuk Peta */
  #loading-map { 
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
    font-weight: bold; color: #002b5c; background: rgba(255,255,255,0.9); 
    padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
    z-index: 10; text-align: center;
  }
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
    <h3 style="margin-top: 0; border-bottom: 1px solid #eee; padding-bottom: 10px;">📊 Komposisi Ragam Disabilitas</h3>
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
    <div>
      <h3 style="margin-top: 0;">Peta Kepadatan (Interaktif)</h3>
      <p style="font-size: 0.9em; color: #666; margin-bottom: 15px;">Peta menggunakan data geografis presisi. Warna lebih gelap menandakan jumlah anggota lebih banyak.</p>
      
      <div class="map-container" aria-label="Peta Interaktif Indonesia. Gunakan tabel di bawah untuk data aksesibel.">
        <div id="loading-map" role="status" aria-live="polite">⏳ Sedang mengambil data peta...</div>
        <div id="chart-map" style="width: 100%; height: 100%;" aria-hidden="true"></div>
      </div>
    </div>

    <div>
      <h3 style="margin-top: 0;">🏆 Top 5 Instansi</h3>
      <div id="top-instansi-container" class="top-list">
        </div>
    </div>
  </div>

  <div>
    <h2 style="margin-bottom: 20px;">📋 Rincian Data Per Provinsi</h2>
    <div style="overflow-x: auto; max-height: 400px; border: 1px solid var(--border-color); border-radius: 8px;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead style="background: #f5f5f5; position: sticky; top: 0;">
          <tr>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Provinsi</th>
            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {% for prov in site.data.sebaran.provinsi %}
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">{{ prov.nama }}</td>
            <td style="padding: 10px; text-align: center; border-bottom: 1px solid #eee; font-weight: bold;">{{ prov.jumlah }}</td>
          </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. DATA DARI JEKYLL
    const mapData = [
      {% for prov in site.data.sebaran.provinsi %}
      { name: "{{ prov.nama }}", value: {{ prov.jumlah }} },
      {% endfor %}
    ];

    // Top Instansi Logic
    const rawInstansi = [
      {% for item in site.data.sebaran.data_instansi %}
        { nama: "{{ item.nama }}", jumlah: {{ item.jumlah }} },
      {% endfor %}
    ];
    rawInstansi.sort((a, b) => b.jumlah - a.jumlah);
    const top5 = rawInstansi.slice(0, 5);
    const topContainer = document.getElementById('top-instansi-container');
    
    if(top5.length > 0) {
        let htmlContent = '';
        top5.forEach((item, index) => {
          htmlContent += `
            <div class="top-item">
              <div style="display: flex; align-items: center;">
                <span class="top-rank">${index + 1}</span>
                <strong>${item.nama}</strong>
              </div>
              <span style="background: #e3f2fd; color: #002b5c; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 0.9em;">${item.jumlah}</span>
            </div>`;
        });
        topContainer.innerHTML = htmlContent;
    }

    // 2. LOGIKA PETA ECHARTS
    const chartDom = document.getElementById('chart-map');
    const myChart = echarts.init(chartDom);
    
    // UPDATE: Gunakan CDN JSDelivr agar lebih stabil dan cepat
    const indoGeoJSON = 'https://cdn.jsdelivr.net/gh/superpikar/indonesia-geojson@master/indonesia-province-simple-json.json';

    fetch(indoGeoJSON)
        .then(response => {
            if (!response.ok) throw new Error("Gagal mengambil data peta");
            return response.json();
        })
        .then(geoJson => {
            // Sembunyikan loading
            document.getElementById('loading-map').style.display = 'none';

            // Registrasi Peta
            echarts.registerMap('indonesia', geoJson);

            // Setting Opsi Grafik
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/><b>{c} Anggota</b>' 
                },
                visualMap: {
                    min: 0,
                    max: 200, // Skala warna maksimal
                    left: 'left',
                    bottom: 'bottom',
                    text: ['Banyak', 'Sedikit'],
                    calculable: true,
                    inRange: { color: ['#e3f2fd', '#2196f3', '#0d47a1'] }
                },
                series: [
                    {
                        name: 'Anggota ASN Inklusif',
                        type: 'map',
                        map: 'indonesia',
                        roam: true,
                        emphasis: {
                            label: { show: true },
                            itemStyle: { areaColor: '#ffd700' }
                        },
                        data: mapData,
                        // Kamus Nama Provinsi (Mapping)
                        nameMap: {
                            'Daerah Istimewa Yogyakarta': 'DI Yogyakarta',
                            'DKI Jakarta': 'DKI Jakarta',
                            'Kepulauan Bangka Belitung': 'Bangka Belitung'
                        }
                    }
                ]
            };

            myChart.setOption(option);
        })
        .catch(err => {
            document.getElementById('loading-map').innerHTML = "⚠️ Gagal memuat visual peta.<br><small>Silakan cek Tabel Rincian Data di bawah.</small>";
            document.getElementById('loading-map').style.color = "red";
            console.error(err);
        });

    window.addEventListener('resize', function() {
        myChart.resize();
    });
});
</script>
