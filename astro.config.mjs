import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://alexsaballos.dev",
    base: "/",
    outDir: 'dist',
    vite: { plugins: [tailwindcss()] },
    i18n: {
        locales: ["de", "en", "es"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true
        }
    }
});