document.addEventListener("DOMContentLoaded", () => {
    const themeToggles = document.querySelectorAll('.theme-controller');

    const syncToggles = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        themeToggles.forEach(t => t.checked = isDark);
    };

    syncToggles();  // Sync toggles (navbar & hamburger) on load

    themeToggles.forEach(t => {
        t.addEventListener('change', () => {
            const newTheme = t.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            syncToggles();
            localStorage.setItem('theme', newTheme);
        });
    });
});