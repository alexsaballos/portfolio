import type {
    TechnologiesCoreSubheadersType, TechnologiesNamesType, TechnologiesProductionSubheadersType
} from "@typing/AssetsType";
import type { LOChonorsType } from "@typing/HonorsType";
import type { CertLocaleType } from "./CertificationsType";
import type { DirectoryPageNamesType, NavigationPageNamesType } from "@typing/PagesType";

export type AdmittedLanguagesType = "de" | "en" | "es";
export type AdmittedCountriesType = "de" | "us" | "mx";
export type AdmittedLangCountriesType = "de_DE" | "en_US" | "es_MX";

export type SingleLanguageType = {
    key: AdmittedLanguagesType;
    home: string;
    icon: AdmittedCountriesType;
    picture: ImageMetadata;
    name: Record<("standard" | "localized"), string>;
    code: {
        lang: AdmittedLanguagesType;
        langcountry: AdmittedLangCountriesType;
    }
    text: Record<("hello" | "select"), string>;
}

export type LanguagesType = Record<AdmittedLanguagesType, SingleLanguageType>;

export type LocalesType = {
    intro: Record<("name_is" | "headline"), string>;
    breadcrumbs: Record<DirectoryPageNamesType, string>;
    about: Record<("greeting" | "introduction"), string>;
    resume_preview: Record<("title" | "intro" | "headline" | "fullscreen" | "download" | "optimized" | "updated"), string>;
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
    };
    categories: Record<"title", string>;
    navigation: Record<NavigationPageNamesType, string>,
    footer: Record<"copyright" | "protocol" | "hosting" | "here", string>;
    coming_soon: Record<("p1" | "p2"), string>;
    certifications: {
        texts: Record<("title" | "description" | "resources" | "active" | "completed" | "progress" | "planned" | "laude" | "honors"), string>;
    } & CertLocaleType;
    honors: LOChonorsType;
    contact: Record<("CTA" | "exclusive" | "form_invite" | "required" | "send" | "reach_on"), string> & {
        name: Record<("label" | "placeholder"), string>;
        email: Record<("label" | "placeholder"), string>;
        subject: {
            label: string;
            options: Record<("placeholder" | "recruiting" | "technical" | "business" | "interview" | "academic" | "consulting" | "webmaster" | "other"), string>;
        },
        message: Record<("label" | "placeholder"), string>;
        alerts: {
            loading: string;
            success: Record<("p1" | "p2"), string>;
            failure: string;
        }
    }
}