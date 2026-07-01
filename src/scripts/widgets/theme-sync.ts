import type { ThemesType } from "@typing/MetaTypes";

document.addEventListener("DOMContentLoaded", () => {
    const themeToggles = document.querySelectorAll<HTMLInputElement>('.theme-controller');
    const syncToggles = () => {
        const isDark = (document.documentElement.getAttribute('data-theme') === 'dark');
        themeToggles.forEach(t => t.checked = isDark);
    };
    syncToggles();

    themeToggles.forEach(t => {
        t.addEventListener('change', () => {
            const newTheme: ThemesType = (t.checked) ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            syncToggles();
        });
    });
});