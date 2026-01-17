import type { IconsType } from "./AssetsType";

export type AdmittedLanguagesType = "de" | "en" | "es";
export type AdmittedLangCountriesType = "de-de" | "en-us" | "es-mx";

export type SingleLanguageType = {
    home: string;
    icon: IconsType;
    picture: ImageMetadata;
    name: string;
    code: {
        lang: AdmittedLanguagesType;
        langcountry: AdmittedLangCountriesType;
    }
    text: {
        hello: string;
        select: string;
    }
}

export type LanguagesType = {
    de: SingleLanguageType;
    en: SingleLanguageType;
    es: SingleLanguageType;
}

export type LocalesType = {
    intro: {
        name_is: string;
        name: string;
        headline: string;
        scroll: string;
    },
    breadcrumbs: {
        home: string;
        projects: string;
        experience: string;
        leadership: string;
        certifications: string;
        honors: string;
        contact: string;
    },
    about: {
        greeting: string;
        introduction: string;
    },
    categories: {
        projects: string;
        experience: string;
        leadership: string;
        certifications: string;
        honors: string;
    },
    navbar: {
        projects: string;
        experience: string;
        leadership: string;
        certifications: string;
        honors: string;
        contact: string;
    },
    footer: {
        copyright: string;
    },
    coming_soon: {
        p1: string;
        p2: string;
    }
}