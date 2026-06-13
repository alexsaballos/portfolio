import { SYSTEM } from "@config/routes/links";
import { PERSONAL } from "@config/personal";
import { FAVICONS, PICTURES, SCREENSHOTS } from "@config/assets";

import type { MetadataType } from "@typing/MetaTypes";

// Extract official link & base from astro.config.mjs
const astroconfig_linkSite = import.meta.env.SITE ?? "";

// Site-wide Metadata
export const METADATA = {
    url: astroconfig_linkSite,
    base: "",
    officialRoot: astroconfig_linkSite,
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
            stream_url: `${SYSTEM.API.google_analytics}/gtag/js?id=G-Z0X55Z8KWP`
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
    screenshots: Object.values(SCREENSHOTS).flatMap(type => Object.values(type)),
    manifest_categories: [
        "Portfolio", "Electrical Engineering", "Software Engineering", "Web Development", "App Development",
        "Bare-Metal Embedded", "Engineering Projects", "Engineering Experience", "Leadership",
        "Engineering Licenses", "Engineering Certifications", "Engineer Intern", "Engineering in Training", "EI", "EiT",
        "American University Graduate", "Harding University", "Cum Laude",
        "International Environments", "German Language", "English Language", "Spanish Language",
        "Walton International Scholarship Program", "WISP",
        "Searcy", "Arkansas", "Managua", "Nicaragua", "United States of America"
    ],
    manifest_favicons: Object.values(FAVICONS.manifest).flatMap(icon => icon),
    technologies_used: [
        "Visual Studio Code", "AstroJS", "Typescript", "TailwindCSS",
        "HTML5", "CSS3", "DaisyUI", "AOS", "astro-icon", "pdf.js",
        "Google Analytics 4"
    ],

    // Social Previews & Crawler Paths
    opengraph: {
        image: PICTURES.ogImage,
        image_width: "1200",
        image_height: "630",
        image_type: "image/png"
    },
    sitemap: "/sitemap.xml",
    manifest: "/manifest.webmanifest",
    humans: "/humans.txt",
    robots: "/robots.txt",
    vcard_vcf: "/card/vcard.vcf",
    vcard_xml: "/card/vcard.xml"
} as const satisfies MetadataType;