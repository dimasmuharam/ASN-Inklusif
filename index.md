---
layout: default
title: "Beranda"
---

<div class="hero">
  <img src="{{ "/assets/img/logo.png" | relative_url }}" alt="Logo ASN Inklusif" style="width: 120px; height: auto; border-radius: 50%; margin-bottom: 20px; border: 4px solid #002b5c;">
  
  <h1 style="margin-top: 0; font-size: 2.5em;">Sinergi Indonesia Inklusif</h1>
  
  <p style="font-size: 1.2em; max-width: 800px; margin: 10px auto;">
    Wadah kolaborasi Aparatur Sipil Negara (ASN) penyandang disabilitas dan non-disabilitas untuk mewujudkan birokrasi yang setara, profesional, dan berdaya saing.
  </p>
  
  <div style="margin-top: 30px;">
    <a href="https://bit.ly/asninklusif" class="button-cta" aria-label="Isi formulir pendaftaran anggota">
      🚀 Gabung Anggota Sekarang
    </a>
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px;">
<div style="background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color);">
    <h2 style="margin-top: 0;">
        <a href="{{ "/advokasi/" | relative_url }}" style="text-decoration: none; color: inherit;">
            📢 Advokasi Kebijakan
        </a>
    </h2>
    <p>Kami mengawal regulasi manajemen ASN. Mengalami kendala di kantor? <a href="{{ "/advokasi/" | relative_url }}">Laporkan di sini.</a></p>
</div>
  

  <div style="background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color);">
    <h2 style="margin-top: 0;">🤝 Jejaring & Sinergi</h2>
    <p>Menghubungkan lebih dari 200 ASN dari berbagai Kementerian, Lembaga, dan Pemerintah Daerah untuk saling berbagi pengalaman dan penguatan.</p>
  </div>

  <div style="background: var(--card-bg); padding: 25px; border-radius: 8px; border: 1px solid var(--border-color);">
    <h2 style="margin-top: 0;">📚 Pengembangan Diri</h2>
    <p>Menyelenggarakan webinar, pelatihan, dan pendampingan agar ASN disabilitas dapat bekerja optimal dan berkontribusi maksimal bagi bangsa.</p>
  </div>

</div>

<div id="berita" style="margin-top: 60px; border-top: 1px solid var(--border-color); padding-top: 40px;">
  <h2>Berita & Kegiatan Terbaru</h2>

  {% if paginator.posts.size == 0 %}
    <p><em>Belum ada artikel terbaru. Nantikan update kegiatan kami segera.</em></p>
  {% else %}

  <ul style="list-style: none; padding: 0;">
    {% for post in paginator.posts %}
      <li style="margin-bottom: 30px; background: var(--card-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color);">
        
        <div style="font-size: 0.85em; margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
          
          {% if post.categories %}
          <span style="background: var(--accent-color); color: var(--button-text); padding: 2px 8px; border-radius: 4px; font-weight: bold; text-transform: uppercase; font-size: 0.8em;">
            {{ post.categories | first }}
          </span>
          {% endif %}
          
          <span style="color: var(--text-color); opacity: 0.8;">
            📅 {{ post.date | date: "%-d %B %Y" }}
          </span>
        </div>

        <h3 style="margin-top: 5px; margin-bottom: 10px;">
          <a href="{{ post.url | relative_url }}" style="text-decoration: none;">
            {{ post.title }}
          </a>
        </h3>
        
        <p>
          {{ post.excerpt | strip_html | truncatewords: 35 }}
        </p>
        
        <a href="{{ post.url | relative_url }}" aria-label="Baca selengkapnya artikel {{ post.title }}" style="font-weight: bold;">
          Baca Selengkapnya &rarr;
        </a>
      </li>
    {% endfor %}
  </ul>

  {% if paginator.total_pages > 1 %}
  <div class="pagination" style="display: flex; justify-content: center; gap: 20px; margin-top: 40px; padding-top: 20px; border-top: 1px dashed var(--border-color);">
    
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path | relative_url }}" class="button-cta" style="padding: 8px 16px; font-size: 0.9em; background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color);">
        &larr; Halaman Sebelumnya
      </a>
    {% endif %}

    <span style="align-self: center; font-weight: bold;">
      Halaman {{ paginator.page }} dari {{ paginator.total_pages }}
    </span>

    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path | relative_url }}" class="button-cta" style="padding: 8px 16px; font-size: 0.9em; background: var(--card-bg); color: var(--text-color); border: 1px solid var(--border-color);">
        Halaman Selanjutnya &rarr;
      </a>
    {% endif %}
    
  </div>
  {% endif %}

  {% endif %} </div>
