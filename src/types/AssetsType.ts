import type { VanityNamesType } from "@typing/routes/VanityType";
import type { HonorsOrgListType } from "@typing/pages/HonorsType";
import type { AdmittedCountriesType } from "@typing/LocalesType";
import type { NavigationPageNamesType } from "@typing/routes/PagesType";
import type { CertsOrgListType } from "@typing/pages/CertificationsType";

// Icons Typing
export type IconsKitNamesType = "flags" | "gui" | "profiles" | "technologies";
export type IconsCustomNamesType = "certifications" | "devices" | "sun";
export type IconsNamesType = AdmittedCountriesType | VanityNamesType | TechnologiesNamesType | IconsCustomNamesType
    | "hourglass" | "projects" | "briefcase" | "leadership" | "award"
    | "envelope_closed" | "envelope_check" | "home" | "hamburger_open" | "hamburger_close"
    | "download" | "fullscreen" | "link" | "angles_down" | "id_card" | "at" | "list" | "message"
    | "paper_plane" | "qr_code" | "earth" | "copy" | "share" | "search" | "graduation" | "industry" | "spinner"
    | "shield" | "circle_check" | "circle_xmark" | "moon" | "globe" | "chevron_up" | "chevron_down";

export type IconsType = { name: IconsNamesType; group: IconsKitNamesType } & Record<("title" | "desc" | "size"), string>;
export type IconsListType = Record<IconsNamesType, IconsType>;
export type IconsPixelSizesType = "dxs" | "xs" | "sm" | "md" | "lg" | "xl" | "dxl" | "exl" | "ixl";

// Paths Typing
export type PathsListType = Record<("videos"), string>;

// Videos & Pictures Typing
export type VideosListType = Record<("IntroVideo"), string>;
export type PicturesListType = {
    PFP: ImageMetadata;
    categories: Record<NavigationPageNamesType, ImageMetadata>;
    projects: Record<(
        | "pcs" | "portfolio" | "sidimaqsa"
        | "domotics" | "atx" | "arctos" | "maze_robot" | "asgc" | "instrumentation"
        | "digital_clock" | "prog_engr" | "habitar"
        | "hu_generic" | "hu_remembers" | "hu_bison" | "hu_directus" | "hu_kiosk"
        | "cs50" | "duke"
    ), ImageMetadata>;
    certifications: Record<Exclude<CertsOrgListType, "hu">, ImageMetadata>;
    honors: Record<HonorsOrgListType, ImageMetadata>;
    cards: Record<("v1" | "v2"), ImageMetadata>;
}

// Technologies Typing
export type TechnologiesTiersNamesType = "core" | "production";
export type TechnologiesCoreSubheadersType = "embedded" | "software" | "cad";
export type TechnologiesProductionSubheadersType = "web" | "frameworks" | "databases" | "operations" | "api";
export type TechnologiesSubheadersNames = TechnologiesCoreSubheadersType | TechnologiesProductionSubheadersType;

export type TechnologiesNamesType =
    | "a3" | "antdesign" | "arduino" | "astro" | "autocad" | "axios" | "bluetooth" | "bootstrap"
    | "c" | "cpanel" | "cpp" | "csharp" | "css" | "daisyui" | "directus" | "electronics_analog"
    | "electronics_digital" | "embedded" | "flask" | "google_analytics" | "google_maps" | "google_wallet"
    | "html" | "java" | "javascript" | "jinja" | "kicad" | "kotlin" | "labview" | "latex" | "logicsimulator"
    | "matlab" | "multisim" | "mysql" | "nfc" | "opencv" | "opengraph" | "php" | "phpmyadmin" | "python"
    | "raspberrypi" | "react" | "resend" | "sass" | "schemaorg" | "sketchup" | "sqlite" | "tailwindcss"
    | "typescript" | "ultiboard" | "winui";

export type TechnologiesKindType =
    | "programming_language" | "framework" | "library" | "hardware"
    | "embedded_platform" | "operating_tool" | "database" | "cad_tool" | "simulation_tool";

export type TechnologiesDomainType =
    | "web" | "backend"  | "frontend" | "embedded" | "robotics" | "firmware"
    | "systems" | "desktop" | "databases" | "electronics" | "pcb" | "cad" | "operations";

export type TechnologiesType = {
    visual: {
        name: string;
        color: string;
        icon: IconsNamesType;
    };
    hierarchy: {
        tier: TechnologiesTiersNamesType;
        subheader: TechnologiesSubheadersNames;
    };
    metadata: {
        key: TechnologiesNamesType;
        kind: TechnologiesKindType;
        domains: TechnologiesDomainType[];
    }
}

export type TechnologiesListType = Record<TechnologiesNamesType, TechnologiesType>;

// Flags Typing
export type FlagsListType = Record<AdmittedCountriesType, { picture: ImageMetadata; icon: IconsNamesType; }>;

// Favicons Typing
export type FaviconsBrowserNamesType = "safari_mask" | "svg" | "ico";
export type FaviconsManifestNamesType =
    "android192" | "android512" | "apple120" | "apple152" | "apple167" | "apple180" | "mstile150" | "manifest";
export type FaviconsBrowserType = Record<FaviconsBrowserNamesType, {
    src: string; type: string; purpose: "maskable" | "non-maskable";
}>
export type FaviconsManifestType = Record<FaviconsManifestNamesType, {
    src: string; sizes: string; type: string;
}>
export type FaviconListType = {
    manifest: FaviconsManifestType;
    browser: FaviconsBrowserType;
};

// Screenshots Typing
export type ScreenshotType = Record<("src" | "sizes" | "type" | "form_factor" | "label"), string>;
export type ScreenshotsSingleType = Record<("desktop" | "mobile"), ScreenshotType>;
export type ScreenshotsPageListType = "home";
export type ScreenshotsListType = Record<ScreenshotsPageListType, ScreenshotsSingleType>