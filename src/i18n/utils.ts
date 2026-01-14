import type { LocalesType } from "../types/LocalesType";

const localeLoaders = import.meta.glob<{default: LocalesType}>("../locales/*/index.json");

export async function getLocaleMessages(locale: string): Promise<LocalesType> {
    const key = `../locales/${locale}/index.json`;
    const loader = localeLoaders[key];

    if (!loader) return (await localeLoaders["./locales/en/index.json"]()).default;
    return (await loader()).default;
}