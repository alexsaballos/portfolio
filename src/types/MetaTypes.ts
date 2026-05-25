import type { FaviconListType } from "@typing/AssetsType";
import type { AdmittedLanguagesType } from "@typing/LocalesType";

export type MetadataType = {
    url: string;
    base: string;
    officialRoot: string;
    siteName: string;
    text_direction: string;
    defaultLanguage: AdmittedLanguagesType;
    charset: string;
    display: string;
    orientation: string;
    colors: {
        dark: Record<("background" | "primary" | "secondary" | "accent"), string>;
        light: Record<("background" | "primary" | "secondary" | "accent"), string>;
    };
    manifest_categories: string[];
    manifest_favicons: Array<FaviconListType[keyof FaviconListType]>;
    opengraph: Record<("image" | "image_width" | "image_height" | "image_type"), string>;
    favicon: string;
    manifest: string;
    robots: string;
}