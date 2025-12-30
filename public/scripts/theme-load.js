// Read saved theme from localStorage and fallback to light theme on registered exceptions
try {
    const theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', theme ?? 'light');
}
catch(e) { document.documentElement.setAttribute('data-theme', 'light'); }
finally	 { document.documentElement.style.visibility = 'visible'; }