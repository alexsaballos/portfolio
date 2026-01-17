import { PICTURES } from "./assets";
import type { MetadataType } from "../types/MetaTypes";

// Extract official link & base from astro.config.mjs
const linkSite: string = import.meta.env.SITE ?? "";

// Site-wide Metadata
export const METADATA: MetadataType = {
    url: linkSite,
    base: "",
    officialRoot: linkSite,
    text_direction: "ltr",
    defaultLanguage: "en",
    charset: "UTF-8",
    display: "standalone",
    orientation: "any",
    colors: {
        background: "#FFFFFF",
        theme: "#004DB8"
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

    // Social Previews & Crawlers
    ogImage: PICTURES.ogImage,
    favicon: "/favicon.ico",
    manifest: "/manifest.webmanifest",
    robots: "/robots.txt"
} as const;