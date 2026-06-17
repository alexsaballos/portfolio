import { METADATA } from "@config/meta";
import { PERSONAL } from "@config/personal";
import type { VanityNamesType } from "@src/types/routes/VanityType";
import type { AdmittedLanguagesType } from "@typing/LocalesType";
import type { DirectoryPageSlugsType, UnlocalizedPageNamesType } from "@src/types/routes/PagesType";

// SEO Metadata Generator for pages.ts SSOT & Dynamic canonical localized URL Generator
const root = METADATA.officialRoot;

export const SEO = {
    title: (pageTitle?: string): string => pageTitle ? (`${pageTitle} | ${PERSONAL.name}`) : PERSONAL.name,
    description: (desc: string): string => desc,
    canonical: {
        home: (locale: AdmittedLanguagesType):string => (`${root}/${locale}/`),
        page: (locale: AdmittedLanguagesType, slug?: DirectoryPageSlugsType): string => slug
            ? (`${root}/${locale}/${slug}/`)
            : (`${root}/${locale}/`),
        unloc: (slug: UnlocalizedPageNamesType): string => (`${root}/${slug}/`),
        vanity: (profile: VanityNamesType): string => (`${root}/${profile}/`)
    }
} as const;

// Dynamic localized URL Generator (I18N)
export const ROUTE = {
    home: (locale: AdmittedLanguagesType): string =>
        `/${locale}/`,
    page: (locale: AdmittedLanguagesType, pageSlug: DirectoryPageSlugsType): string =>
        `/${locale}/${pageSlug}/`,
    unloc: (slug: UnlocalizedPageNamesType): string =>
        `/${slug}/`,
    vanity: (profile: VanityNamesType): string =>
        `/${profile}/`
} as const;

// Dynamic UTM tag generator for GA4
export const UTM = {
    
}