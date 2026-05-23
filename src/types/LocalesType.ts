import type {
    IconsType, TechnologiesCoreSubheadersType, TechnologiesNamesType, TechnologiesProductionSubheadersType
} from "./AssetsType";
import type { CertLocaleType } from "./CertificationsType";
import type { HonorsType } from "./HonorsType";
import type { DirectoryPageNamesType, NavigationPageNamesType } from "./PagesType";

export type AdmittedLanguagesType = "de" | "en" | "es";
export type AdmittedCountriesType = "de" | "us" | "mx";
export type AdmittedLangCountriesType = "de-de" | "en-us" | "es-mx";

export type SingleLanguageType = {
    key: AdmittedLanguagesType;
    home: string;
    icon: IconsType;
    picture: ImageMetadata;
    name: {
        standard: string;
        localized: string;
    };
    code: {
        lang: AdmittedLanguagesType;
        langcountry: AdmittedLangCountriesType;
    }
    text: {
        hello: string;
        select: string;
    }
}

export type LanguagesType = Record<AdmittedLanguagesType, SingleLanguageType>;

export type LocalesType = {
    intro: {
        name_is: string;
        name: string;
        headline: string;
        scroll: string;
    },
    breadcrumbs: Record<DirectoryPageNamesType, string>,
    about: {
        greeting: string;
        introduction: string;
    },
    stack: {
        title: string;
        core: {
            header: string;
            subheaders: Record<TechnologiesCoreSubheadersType, string>;
        },
        production: {
            header: string;
            subheaders: Record<TechnologiesProductionSubheadersType, string>;
        },
        technologies: Record<TechnologiesNamesType, string>;
    }
    categories: { title: string; },
    navigation: Record<NavigationPageNamesType, string>,
    footer: { copyright: string; },
    coming_soon: {
        p1: string;
        p2: string;
    },
    certifications: {
        texts: {
            title: string;
            description: string;
            resources: string;
            planned: string;
        }
    } & CertLocaleType;
    honors: {
        texts: {
            title: string;
            description: string;
            resources: string;
        }
    } & HonorsType;
    contact: {
        CTA: string;
        form_invite: string;
        required: string;
        name: {
            label: string;
            placeholder: string;
        },
        email: {
            label: string;
            placeholder: string;
        },
        subject: {
            label: string;
            options: {
                placeholder: string;
                recruiting: string;
                technical: string;
                business: string;
                interview: string;
                academic: string;
                consulting: string;
                other: string;
            }
        },
        message: {
            label: string;
            placeholder: string;
        },
        send: string;
        reach_on: string;
        alerts: {
            loading: string;
            success: {
                p1: string;
                p2: string;
            };
            failure: string;
        }
    }
}