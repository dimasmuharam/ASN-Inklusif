document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOGIKA DARK MODE ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    function updateTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if(themeToggle) themeToggle.textContent = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            if(themeToggle) themeToggle.textContent = '🌙';
        }
    }

    // Cek memori terakhir pengguna
    if (currentTheme) {
        updateTheme(currentTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let newTheme = 'light';
            if (document.documentElement.getAttribute('data-theme') !== 'dark') {
                newTheme = 'dark';
            }
            updateTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- 2. LOGIKA GANTI BAHASA (GOOGLE COOKIE TRICK) ---
    const langToggle = document.getElementById('lang-toggle');
    
    function getCookie(name) {
        const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }

    function setGoogleCookie(value) {
        const domain = window.location.hostname;
        document.cookie = "googtrans=" + value + "; path=/; domain=" + domain;
        document.cookie = "googtrans=" + value + "; path=/;";
    }

    if (langToggle) {
        // Cek status bahasa saat ini
        const currentLang = getCookie('googtrans');
        if (currentLang && currentLang.includes('/en')) {
            langToggle.textContent = 'EN';
        } else {
            langToggle.textContent = 'ID';
        }

        langToggle.addEventListener('click', () => {
            const current = getCookie('googtrans');
            if (current && current.includes('/en')) {
                setGoogleCookie('/id/id'); // Balik ke Indo
            } else {
                setGoogleCookie('/id/en'); // Ganti ke Inggris
            }
            location.reload(); // Reload halaman untuk memproses
        });
    }
});

// --- 3. GOOGLE TRANSLATE ENGINE ---
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'id',
        includedLanguages: 'en,id', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
};

(function loadGoogleScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
})();
