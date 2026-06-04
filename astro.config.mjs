import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from "@tailwindcss/vite";
import { wellKnownMover } from './src/hooks/wellKnownMover.ts';

export default defineConfig({
    site: 'https://alexsaballos.dev',
    base: '/',
    trailingSlash: 'always',
    output: 'static',
    outDir: 'dist',
    integrations: [
        icon(),
        wellKnownMover()
    ],
    devToolbar: { enabled: false },
    vite: { plugins: [tailwindcss()] },
    build: { format: 'preserve' },
    i18n: {
        locales: ['de', 'en', 'es'],
        defaultLocale: 'en'
    }
});