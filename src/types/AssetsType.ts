import type { VanityNamesType } from "./VanityType";
import type { HonorsOrgListType } from "@typing/HonorsType";
import type { AdmittedCountriesType } from "@typing/LocalesType";
import type { NavigationPageNamesType } from "@typing/PagesType";
import type { CertsOrgListType } from "@typing/CertificationsType";

// Icons Typing
export type IconsKitNamesType = "flags" | "gui" | "profiles" | "technologies";
export type IconsCustomNamesType = "certifications" | "devices" | "sun";
export type IconsNamesType = AdmittedCountriesType | VanityNamesType | TechnologiesNamesType | IconsCustomNamesType
    | "hourglass" | "microchip" | "briefcase" | "leadership" | "award"
    | "envelope_closed" | "envelope_check" | "home" | "hamburger_open" | "hamburger_close" | "download"
    | "fullscreen" | "link" | "id_card" | "at" | "list" | "message"
    | "paper_plane" | "spinner" | "circle_check" | "circle_xmark"
    | "moon" | "globe" | "chevron_up" | "chevron_down";

export type IconsType = { name: IconsNamesType; group: IconsKitNamesType } & Record<("title" | "desc" | "size"), string>;
export type IconsListType = Record<IconsNamesType, IconsType>;
export type IconsPixelSizesType = "dxs" | "xs" | "sm" | "md" | "lg" | "xl" | "dxl" | "exl" | "ixl";

// Paths Typing
export type PathsListType = Record<("docs" | "resume" | "favicons" | "pictures" | "videos"), string>;

// Videos & Pictures Typing
export type VideosListType = Record<("IntroVideo"), string>;
export type PicturesListType = {
    ogImage: string;
    PFP: ImageMetadata;
    categories: Record<NavigationPageNamesType, ImageMetadata>;
    certifications: Record<Exclude<CertsOrgListType, "hu">, ImageMetadata>;
    honors: Record<HonorsOrgListType, ImageMetadata>;
}

// Technologies Typing
export type TechnologiesTiersNamesType = "core" | "production";
export type TechnologiesCoreSubheadersType = "embedded" | "software" | "cad";
export type TechnologiesProductionSubheadersType = "web" | "frameworks" | "databases" | "operations";
export type TechnologiesSubheadersNames = TechnologiesCoreSubheadersType | TechnologiesProductionSubheadersType;

export type TechnologiesNamesType =
    | "antdesign" | "arduino" | "astro" | "autocad" | "axios"
    | "baremetal" | "bootstrap" | "c" | "cpanel" | "cpp" | "csharp" | "css"
    | "daisyui" | "directus" | "flask" | "html" | "java" | "javascript"
    | "jinja" | "kicad" | "multisim" | "mysql" | "opencv" | "php" | "phpmyadmin"
    | "python" | "raspberrypi" | "react" | "sketchup" | "sqlite"
    | "tailwindcss" | "typescript" | "ultiboard" | "winui";

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
export type FaviconsSvgListType = "safari_mask";
export type FaviconsPngListType =
    "android192" | "android512" | "apple120" | "apple152" | "apple167" | "apple180" | "mstile150";

export type FaviconListType =
    Record<FaviconsPngListType, { src: string; sizes: string; type: string; }>
    & Record<FaviconsSvgListType, { src: string; type: string; purpose: string; }>;