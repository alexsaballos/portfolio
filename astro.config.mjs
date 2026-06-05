import { defineConfig } from 'astro/config';
import { postBuildCleaner } from './src/hooks/postBuildCleaner.ts';

import icon from 'astro-icon';
import AstroPWA from '@vite-pwa/astro';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://alexsaballos.dev',
    base: '/',
    trailingSlash: 'always',
    output: 'static',
    outDir: 'dist',
    integrations: [
        icon(),
        postBuildCleaner(),
        AstroPWA({
            registerType: 'autoUpdate',
            strategies: 'generateSW',
            manifest: false,
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
                maximumFileSizeToCacheInBytes: 4000000
            }
        })
    ],
    devToolbar: { enabled: false },
    vite: { plugins: [tailwindcss()] },
    build: { format: 'preserve' },
    i18n: {
        locales: ['de', 'en', 'es'],
        defaultLocale: 'en'
    }
});