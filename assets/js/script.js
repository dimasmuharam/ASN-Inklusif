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

    // --- 2. LOGIKA TEXT RESIZER (A+ / A-) ---
    const btnUp = document.getElementById('font-up');
    const btnDown = document.getElementById('font-down');
    let currentSize = parseFloat(localStorage.getItem('fontSize')) || 100; // Default 100%

    function setFontSize(size) {
        document.body.style.fontSize = size + '%';
        localStorage.setItem('fontSize', size);
    }

    // Set ukuran awal dari memori
    setFontSize(currentSize);

    if (btnUp && btnDown) {
        btnUp.addEventListener('click', () => {
            if (currentSize < 150) { // Maksimal 150%
                currentSize += 10;
                setFontSize(currentSize);
            }
        });

        btnDown.addEventListener('click', () => {
            if (currentSize > 80) { // Minimal 80%
                currentSize -= 10;
                setFontSize(currentSize);
            }
        });
    }

    // --- 3. LOGIKA BAHASA ---
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
        const currentLang = getCookie('googtrans');
        if (currentLang && currentLang.includes('/en')) {
            langToggle.textContent = 'EN';
        } else {
            langToggle.textContent = 'ID';
        }

        langToggle.addEventListener('click', () => {
            const current = getCookie('googtrans');
            if (current && current.includes('/en')) {
                setGoogleCookie('/id/id'); 
            } else {
                setGoogleCookie('/id/en'); 
            }
            location.reload(); 
        });
    }
});

// --- 4. GOOGLE TRANSLATE ENGINE ---
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
