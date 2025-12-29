import { PERSONAL } from "./personal"

// Site-wide Metadata
export const SITE = {
    title: PERSONAL.short_name,
    description: PERSONAL.description,
    url: PERSONAL.url,
    charset: "UTF-8",

    // Social previews
    ogImage: "",
    favicon: `${PERSONAL.base}favicon.ico`,
    manifest: `${PERSONAL.base}manifest.webmanifest`
} as const;

// SEO Metadata Generator for per-page headers
export const SEO = {
    title: (pageTitle?: string) => pageTitle ? `${pageTitle} | ${PERSONAL.short_name}` : SITE.title,
    description: (desc?: string) => desc || SITE.description,
    canonical: (slug?: string) => slug ? `${SITE.url}${slug}` : SITE.url,
};