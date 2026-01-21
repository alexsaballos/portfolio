import type { LocalesType } from "../types/LocalesType";

const localeLoaders = import.meta.glob<{default: LocalesType}>("../locales/*/index.json");

export async function getLocaleMessages(locale: string): Promise<LocalesType> {
    const loader = localeLoaders[`../locales/${locale}/index.json`];

    if (!loader) return (await localeLoaders["./locales/en/index.json"]()).default;
    return (await loader()).default;
}