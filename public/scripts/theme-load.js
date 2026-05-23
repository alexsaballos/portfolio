// Read saved theme from localStorage and fallback to light theme
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const darkColor = document.querySelector('meta[name="theme-color-dark"]')?.getAttribute('content');
const lightColor = document.querySelector('meta[name="theme-color-light"]')?.getAttribute('content');

const setThemeColor = (color) => {
    if (themeColorMeta) themeColorMeta.setAttribute('content', color);
};

try {
    const theme = localStorage.getItem('theme') ?? 'light';
    document.documentElement.setAttribute('data-theme', theme);
    setThemeColor((theme === 'dark') ? (darkColor ?? '#000000') : (lightColor ?? '#FFFFFF'));
}
catch(e) {
    document.documentElement.setAttribute('data-theme', 'light');
    setThemeColor(lightColor ?? '#FFFFFF');
}
finally	 { document.documentElement.style.visibility = 'visible'; }