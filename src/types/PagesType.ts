import type { IconsNamesType } from "@typing/AssetsType";

// Single-word SSOT locked keys per page
export type DirectoryPageNamesType =
"home" | "projects" | "experience" | "leadership" | "certifications" | "honors" | "contact" | "card";

// Pages classification
export type DirectoryPageSlugsType = "" | DirectoryPageNamesType;
export type LocalizedPageNamesType = Exclude<DirectoryPageNamesType, "card">;
export type UnlocalizedPageNamesType = "home" | "card";
export type NavigationPageNamesType = Exclude<DirectoryPageNamesType, ("home" | "card")>;

// Internal Base SSOT Structure per page
export type BasePageType = {
    frontend: {
        short_title: string;
        long_title: string;
        icon: IconsNamesType;
        picture?: ImageMetadata;
    },
    metadata:{
        link: string;
        slug: DirectoryPageSlugsType;
        sitemap_priority: string;
        categories: ("localized" | "unlocalized" | "navigation")[];
    },
    SEO: {
        title: string;
        description: string;
        schemaorg_position: number;
    }
};

export type DirectoryPageType = BasePageType & { key: DirectoryPageNamesType };
export type LocalizedPageType = BasePageType & { key: LocalizedPageNamesType };
export type UnlocalizedPageType = BasePageType & { key: UnlocalizedPageNamesType };
export type NavigationPageType = BasePageType & { key: NavigationPageNamesType };

// List of all pages directories based on SSOT
export type DirectoryPagesListType = Record<DirectoryPageNamesType, DirectoryPageType>;
export type LocalizedPagesListType = Record<LocalizedPageNamesType, LocalizedPageType>;
export type UnlocalizedPagesListType = Record<UnlocalizedPageNamesType, UnlocalizedPageType>;
export type NavigationPagesListType = Record<NavigationPageNamesType, NavigationPageType>;