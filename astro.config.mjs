import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://alexsaballos.dev',
    base: '/',
    trailingSlash: 'always',
    output: 'static',
    outDir: 'dist',
    vite: { plugins: [tailwindcss()] },
    build: { format: 'preserve' },
    i18n: {
        locales: ['de', 'en', 'es'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: true
        }
    }
});