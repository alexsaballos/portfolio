import type { AdmittedLanguagesType } from "./LocalesType";

export type MetadataType = {
    url: string;
    base: string;
    officialRoot: string;
    text_direction: string;
    defaultLanguage: AdmittedLanguagesType;
    charset: string;
    display: string;
    orientation: string;
    colors: {
        background: string;
        theme: string;
    };
    manifest_categories: string[];
    ogImage: string;
    favicon: string;
    manifest: string;
    robots: string;
}