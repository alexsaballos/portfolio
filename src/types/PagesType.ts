import type { IconsType } from "./AssetsType";

// Single-word SSOT locked keys per page
export type DirectoryPageNamesType =
"home" | "projects" | "experience" | "leadership" | "certifications" | "honors" | "contact";

export type NavigationPageNamesType = Exclude<DirectoryPageNamesType, "home">;
export type CategoryPageNamesType = Exclude<DirectoryPageNamesType, ("home" | "contact")>;

// Internal Base (keyless) SSOT Structure per page
export type BasePageType = {
    short_title: string;
    long_title: string;
    link: string;
    slug: string;
    icon: IconsType;
    SEO_title: string;
    SEO_description: string;
}

// Categorized Page Types according to their own Key
export type HomePageType = BasePageType & { key: DirectoryPageNamesType; };
export type NavigationPageType = BasePageType & { key: NavigationPageNamesType; };
export type CategoryPageType = BasePageType & {
    key: CategoryPageNamesType;
    picture: ImageMetadata;
};

// List of all pages directories based on SSOT
export type CategoryPagesListType = Record<CategoryPageNamesType, CategoryPageType>;
export type NavigationPagesListType = CategoryPagesListType & { contact: NavigationPageType; };
export type DirectoryPagesType = NavigationPagesListType & { home: HomePageType; };