import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from "@tailwindcss/vite";
import { postBuildCleaner } from './src/hooks/postBuildCleaner.ts';

export default defineConfig({
    site: 'https://alexsaballos.dev',
    base: '/',
    trailingSlash: 'always',
    output: 'static',
    outDir: 'dist',
    integrations: [
        icon(),
        postBuildCleaner()
    ],
    devToolbar: { enabled: false },
    vite: { plugins: [tailwindcss()] },
    build: { format: 'preserve' },
    i18n: {
        locales: ['de', 'en', 'es'],
        defaultLocale: 'en'
    }
});