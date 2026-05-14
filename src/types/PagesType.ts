import type { IconsType } from "./AssetsType";

// Single-word SSOT locked keys per page
export type DirectoryPageNamesType =
"home" | "projects" | "experience" | "leadership" | "certifications" | "honors" | "contact";

export type NavigationPageNamesType = Exclude<DirectoryPageNamesType, "home">;

// Internal Base (keyless) SSOT Structure per page
export type BasePageType = {
    short_title: string;
    long_title: string;
    link: string;
    slug: string;
    key: DirectoryPageNamesType;
    icon: IconsType;
    SEO_title: string;
    SEO_description: string;
}

// Categorized Page Types according to their own Key
export type HomePageType = BasePageType & { key: "home"; };
export type NavigationPageType = BasePageType & {
    key: NavigationPageNamesType;
    picture: ImageMetadata;
};

// List of all pages directories based on SSOT
export type NavigationPagesListType = Record<NavigationPageNamesType, NavigationPageType>;
export type DirectoryPagesType = NavigationPagesListType & { home: HomePageType; };