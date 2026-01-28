import type { AdmittedCountriesType } from "./LocalesType";
import type { CategoryPageNamesType } from "./PagesType";

// Icons Typing
export type IconsType = {
    href: string;
    title: string;
    desc: string;
    size: string;
}

export type IconsNamesType =
    | "hourglass" | "linkedin" | "github" | "handshake" | "merit" | "wisp" | "hu"
    | "projects" | "experience" | "leadership" | "certifications" | "honors"
    | "contact" | "home" | "hamburger_open" | "hamburger_close" | "link" | "id_card"
    | "at_sign" | "rectangle_list" | "message" | "paper_plane" | "spinner"
    | "envelope_check" | "circle_check" | "circle_xmark" | "sun" | "moon"
    | "translate" | "chevron_up" | "chevron_down" | "angles_down" | "devices"

export type IconsListType = Record<IconsNamesType, IconsType>;

// Paths Typing
export type PathsListType = {
    scripts: string;
    favicons: string;
    pictures: string;
    videos: string;
}

// Videos & Pictures Typing
export type VideosListType = {
    IntroVideo: string;
}

export type PicturesListType = {
    ogImage: string;
    PFP: ImageMetadata;
    categories: Record<CategoryPageNamesType, ImageMetadata>;
    honors: Record<("ncees" | "hu" | "wisp"), ImageMetadata>;
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
        icon: IconsType;
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
export type FlagsListType = Record<AdmittedCountriesType, { picture: ImageMetadata; icon: IconsType; }>;

// Favicons Typing
export type FaviconsSvgListType = "safari_mask";
export type FaviconsPngListType =
    "android192" | "android512" | "apple120" | "apple152" | "apple167" | "apple180" | "mstile150";

export type FaviconListType =
    Record<FaviconsPngListType, { src: string; sizes: string; type: string; }>
    & Record<FaviconsSvgListType, { src: string; type: string; purpose: string; }>;