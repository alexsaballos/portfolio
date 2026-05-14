import { PERSONAL } from "./personal";
import { LINKS, SYSTEM } from "./links";
import { FAVICONS, PICTURES } from "./assets";
import type { MetadataType } from "../types/MetaTypes";
import type { FaviconsPngListType, FaviconsSvgListType } from "../types/AssetsType";

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
    manifest_favicons: (Object.keys(FAVICONS) as (FaviconsPngListType | FaviconsSvgListType)[])
        .map(key => ({ ...FAVICONS[key] })),

    // Social Previews & Crawler Paths
    ogImage: PICTURES.ogImage,
    favicon: "/favicon.ico",
    manifest: "/manifest.webmanifest",
    robots: "/robots.txt"
} as const;

// Schema.org Structured Data Identity Linking
const sameAsLinks = Object.values(LINKS.profiles)
export const SCHEMAORG = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alexander Saballos",
  "url": "https://alexsaballos.dev",
  "image": "https://alexsaballos.dev/images/profile.jpg",
  "jobTitle": "Electrical Engineer",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Harding University"
  },
  "knowsLanguage": [
    "English", "Spanish", "German"
  ],
  "knowsAbout": [
    "Electrical Engineering", "Embedded Systems", "Software Engineering", "Automation", "PCB Design"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "professional",
    "url": "https://alexsaballos.dev/en/contact/"
  },
  "sameAs": [
    "https://github.com/alexsaballos",
    "https://linkedin.com/in/alexsaballosr",
    "https://meritpages.com/alexsaballos",
    "https://gravatar.com/alexsaballos"
  ]
} as const;