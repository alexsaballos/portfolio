import type { FaviconListType, FaviconsBrowserType, ScreenshotType } from "@typing/AssetsType";
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
    api_keys: {
        google_analytics: Record<("stream_id" | "measurement_id" | "stream_url"), string>;
    };
    screenshots: ScreenshotType[];
    colors: {
        dark: Record<("background" | "primary" | "secondary" | "accent"), string>;
        light: Record<("background" | "primary" | "secondary" | "accent"), string>;
    };
    manifest_categories: string[];
    manifest_favicons: Record<("src" | "sizes" | "type"), string>[];
    technologies_used: string[];
    opengraph: Record<("image" | "image_width" | "image_height" | "image_type"), string>;
    manifest: string;
    humans: string;
    robots: string;
}