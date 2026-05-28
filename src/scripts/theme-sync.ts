document.addEventListener("DOMContentLoaded", () => {
    const themeToggles = document.querySelectorAll<HTMLInputElement>('.theme-controller');

    const syncToggles = () => {
        themeToggles.forEach(toggler =>
            toggler.checked = document.documentElement.getAttribute('data-theme') === 'dark');
    };

    syncToggles();  // Sync toggles (navbar & hamburger) on load

    themeToggles.forEach(t => {
        t.addEventListener('change', () => {
            const newTheme: ('dark' | 'light') = t.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            syncToggles();
            localStorage.setItem('theme', newTheme);
        });
    });
});