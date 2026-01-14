import type { IconsType } from "./AssetsType";

export type PrimaryPageType = {
    short_title: string;
    long_title: string;
    link: string;
    slug: string;
    icon: IconsType;
    picture: ImageMetadata;
    SEO_title: string;
    SEO_description: string;
    SEO_canonical: string;
}

export type SecondaryPageType = {
    short_title: string;
    long_title: string;
    link: string;
    slug: string;
    icon: IconsType;
    SEO_title: string;
    SEO_description: string;
    SEO_canonical: string;
}

export type PagesType = {
    home: SecondaryPageType,
    projects: PrimaryPageType,
    experience: PrimaryPageType,
    leadership: PrimaryPageType,
    certifications: PrimaryPageType,
    honors: PrimaryPageType,
    contact: SecondaryPageType
}

export type PrimaryPagesListType = {
    projects: PrimaryPageType,
    experience: PrimaryPageType,
    leadership: PrimaryPageType,
    certifications: PrimaryPageType,
    honors: PrimaryPageType,
}
export type SecondaryPagesListType = {
    home: SecondaryPageType,
    contact: SecondaryPageType
}