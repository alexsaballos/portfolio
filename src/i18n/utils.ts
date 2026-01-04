import type { Translations } from "../types/locales";

const localeLoaders = import.meta.glob<{default: Translations}>("../locales/*/index.json");

export async function getLocaleMessages(locale: string): Promise<Translations> {
    const key = `../locales/${locale}/index.json`;
    const loader = localeLoaders[key];

    if (!loader) return (await localeLoaders["./locales/en/index.json"]()).default;
    return (await loader()).default;
}