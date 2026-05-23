import type { LocalesType } from "../types/LocalesType";

const localeLoaders = import.meta.glob<{default: LocalesType}>("./*/index.json");

export async function getLocaleMessages(locale: string): Promise<LocalesType> {
    const loader = localeLoaders[`./${locale}/index.json`];
    return (!loader)
        ? (await localeLoaders["./en/index.json"]()).default
        : (await loader()).default;
}