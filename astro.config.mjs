import { defineConfig } from 'astro/config';
import { PERSONAL } from './src/config/personal';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: PERSONAL.url,
    base: PERSONAL.base,
    outDir: 'dist',
    vite: { plugins: [tailwindcss()] },
    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
        routing: { prefixDefaultLocale: true }
    }
});