import { SYSTEM } from "@config/links";
import { PERSONAL } from "@config/personal";
import { FAVICONS, PICTURES } from "@config/assets";

import type { MetadataType } from "@typing/MetaTypes";
import type { FaviconsPngListType, FaviconsSvgListType } from "@typing/AssetsType";

// Extract official link & base from astro.config.mjs
const linkSite: string = import.meta.env.SITE ?? "";

// Site-wide Metadata
export const METADATA = {
    url: linkSite,
    base: "",
    officialRoot: linkSite,
    siteName: `${PERSONAL.name} Professional Portfolio`,
    text_direction: "ltr",
    defaultLanguage: "en",
    charset: "UTF-8",
    display: "standalone",
    orientation: "any",
    api_keys: {
        google_analytics: {
            stream_id: "14957967801",
            measurement_id: "G-Z0X55Z8KWP",
            stream_url: `${SYSTEM.API.google_analytics}G-Z0X55Z8KWP`
        }
    },
    colors: {
        dark: {
            background: "#1D232A",    // Equivalent to bg-base-100 on dark mode
            primary: "#3168B5",
            secondary: "#B57E31",
            accent: "#68B531"
        },
        light: {
            background: "#FFFFFF",    // Equivalent to bg-base-100 on light mode
            primary: "#004DB8",
            secondary: "#B86B00",
            accent: "#68B531"
        }
    },
    manifest_categories: [
        "Portfolio", "Electrical Engineering", "Software Engineering", "Web Development", "App Development",
        "Bare-Metal Embedded", "Engineering Projects", "Engineering Experience", "Leadership",
        "Engineering Licenses", "Engineering Certifications", "Engineer Intern", "Engineering in Training", "EI", "EiT",
        "American University Graduate", "Harding University", "Cum Laude",
        "International Environments", "German Language", "English Language", "Spanish Language",
        "Walton International Scholarship Program", "WISP",
        "Searcy", "Arkansas", "Managua", "Nicaragua", "United States of America"
    ],
    manifest_favicons: (Object.keys(FAVICONS) as (FaviconsPngListType | FaviconsSvgListType)[])
        .map(key => ({ ...FAVICONS[key] })),

    // Social Previews & Crawler Paths
    opengraph: {
        image: PICTURES.ogImage,
        image_width: "1200",
        image_height: "630",
        image_type: "image/png"
    },
    favicon: "/favicon.ico",
    manifest: "/manifest.webmanifest",
    robots: "/robots.txt"
} as const satisfies MetadataType;