import type { IconsType } from "@typing/AssetsType";

// Single-word SSOT locked keys per page
export type DirectoryPageNamesType =
"home" | "projects" | "experience" | "leadership" | "certifications" | "honors" | "contact";

export type DirectoryPageSlugsType = "" | DirectoryPageNamesType;

export type NavigationPageNamesType = Exclude<DirectoryPageNamesType, "home">;

// Internal Base SSOT Structure per page
export type BasePageType = {
    frontend: {
        short_title: string;
        long_title: string;
        icon: IconsType;
        picture?: ImageMetadata;
    },
    metadata:{
        link: string;
        slug: DirectoryPageSlugsType;
        sitemap_priority: string;
    },
    SEO: {
        title: string;
        description: string;
    }
};

export type DirectoryPageType = BasePageType & { key: DirectoryPageNamesType };
export type NavigationPageType = BasePageType & { key: NavigationPageNamesType };

// List of all pages directories based on SSOT
export type DirectoryPagesListType = Record<DirectoryPageNamesType, DirectoryPageType>;
export type NavigationPagesListType = Record<NavigationPageNamesType, NavigationPageType>;