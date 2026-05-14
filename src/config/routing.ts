import { METADATA } from "./meta";
import { PERSONAL } from "./personal";
import type { AdmittedLanguagesType } from "../types/LocalesType";

// SEO Metadata Generator for pages.ts SSOT & Dynamic canonical localized URL Generator
export const SEO = {
    title: (pageTitle?: string) =>
        pageTitle ? (`${pageTitle} | ${PERSONAL.name}`) : PERSONAL.name,
    description: (desc: string) =>
        desc,
    canonical_page: (locale: AdmittedLanguagesType, slug?: string) => slug
        ? (`${METADATA.officialRoot}/${locale}${slug}/`)
        : (`${METADATA.officialRoot}/${locale}/`),
    canonical_vanity: (slug: string) => `${METADATA.officialRoot}${slug}/`
} as const;

// Dynamic localized URL Generator (I18N)
export const ROUTE = {
    home: (locale: AdmittedLanguagesType): string =>
        `/${locale}/`,
    page: (locale: AdmittedLanguagesType, pageSlug: string): string =>
        `/${locale}${pageSlug}/`
}