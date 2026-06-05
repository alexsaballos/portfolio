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
                directoryIndex: 'index.html',
                maximumFileSizeToCacheInBytes: 6000000,
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,webm,woff,woff2}'],
                globIgnores: [
                    '**/screenshots/**/*',
                    '**/profiles/**/*',
                    '**/errors/**/*'
                ],
                navigateFallbackDenylist: [
                    /^\/.well-known\//,
                    /^\/errors\//,
                    /^\/profiles\//,
                    /^\/manifest\.webmanifest$/,
                    /^\/sitemap\.xml$/,
                    /^\/robots\.txt$/,
                    /^\/humans\.txt$/
                ]
            },
            runtimeCaching: [
                {
                    urlPattern: ({ request }) => request.mode === 'navigate',
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'html-pages-cache',
                        expiration: {
                            maxEntries: 50,
                            maxAgeSeconds: 60 * 60 * 24 * 7
                        }
                    }
                }
            ]
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