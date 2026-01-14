import type { IconsType } from "./AssetsType";

export type SingleLanguageType = {
    home: string;
    flag: IconsType;
    alt: string;
    name: string;
    code: string;
    hello: string;
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
    }
}