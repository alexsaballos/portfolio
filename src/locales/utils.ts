import { METADATA } from "@config/meta";
import type { LocalesType } from "@typing/LocalesType";

const localeLoaders = import.meta.glob<{default: LocalesType}>("./*/index.json");

export async function getLocaleMessages(locale: string): Promise<LocalesType> {
    const loader = localeLoaders[`./${locale}/index.json`];
    return (!loader)
        ? (await localeLoaders[`./${METADATA.defaultLanguage}/index.json`]()).default
        : (await loader()).default;
}