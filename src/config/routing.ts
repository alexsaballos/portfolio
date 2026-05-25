import { METADATA } from "@config/meta";
import { PERSONAL } from "@config/personal";
import type { VanityNamesType } from "@typing/VanityType";
import type { AdmittedLanguagesType } from "@typing/LocalesType";
import type { DirectoryPageSlugsType } from "@typing/PagesType";

// SEO Metadata Generator for pages.ts SSOT & Dynamic canonical localized URL Generator
export const SEO = {
    title: (pageTitle?: string): string => pageTitle ? (`${pageTitle} | ${PERSONAL.name}`) : PERSONAL.name,
    description: (desc: string): string => desc,
    canonical: {
        home: (locale: AdmittedLanguagesType):string =>
              (`${METADATA.officialRoot}/${locale}/`),
        page: (locale: AdmittedLanguagesType, slug?: DirectoryPageSlugsType): string => slug
            ? (`${METADATA.officialRoot}/${locale}/${slug}/`)
            : (`${METADATA.officialRoot}/${locale}/`),
        vanity: (profile: VanityNamesType): string =>
              `${METADATA.officialRoot}/${profile}/`
    }
} as const;

// Dynamic localized URL Generator (I18N)
export const ROUTE = {
    home: (locale: AdmittedLanguagesType): string =>
        `/${locale}/`,
    page: (locale: AdmittedLanguagesType, pageSlug: DirectoryPageSlugsType): string =>
        `/${locale}/${pageSlug}/`,
    vanity: (profile: VanityNamesType): string =>
        `/${profile}/`
} as const;