import type { IconsType } from "./AssetsType";

// Short name SSOT locked types per page
export type DirectoryPageNamesType = "home" | "projects" | "experience" | "leadership" | "certifications" | "honors" | "contact";
export type NavigationPageNamesType = "projects" | "experience" | "leadership" | "certifications" | "honors" | "contact";
export type CategoryPageNamesType = "projects" | "experience" | "leadership" | "certifications" | "honors";

// Internal SSOT Structure per page
export type HomePageType = {
    short_title: string;
    long_title: string;
    link: string;
    slug: string;
    key: DirectoryPageNamesType;
    icon: IconsType;
    SEO_title: string;
    SEO_description: string;
}

export type NavigationPageType = {
    short_title: string;
    long_title: string;
    link: string;
    slug: string;
    key: NavigationPageNamesType;
    icon: IconsType;
    SEO_title: string;
    SEO_description: string;
}

export type CategoryPageType = {
    short_title: string;
    long_title: string;
    link: string;
    slug: string;
    key: CategoryPageNamesType;
    icon: IconsType;
    picture: ImageMetadata;
    SEO_title: string;
    SEO_description: string;
}

// List of different pages categories based on SSOT
export type DirectoryPagesType = {
    home: HomePageType,
    projects: CategoryPageType,
    experience: CategoryPageType,
    leadership: CategoryPageType,
    certifications: CategoryPageType,
    honors: CategoryPageType,
    contact: NavigationPageType
}

export type NavigationPagesListType = {
    projects: CategoryPageType,
    experience: CategoryPageType,
    leadership: CategoryPageType,
    certifications: CategoryPageType,
    honors: CategoryPageType,
    contact: NavigationPageType
}

export type CategoryPagesListType = {
    projects: CategoryPageType,
    experience: CategoryPageType,
    leadership: CategoryPageType,
    certifications: CategoryPageType,
    honors: CategoryPageType
}