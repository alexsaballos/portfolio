import type { TechnologiesNamesType } from "../AssetsType";

// SSOT (Metadata) structure
export type ProjectsNamesType =
| "pcs" | "portfolio" | "sidimaqsa" | "atx" | "arctos" | "domotics"
| "maze_robot" | "asgc" | "digital_clock" | "bison_math" | "habitar"
| "hu_remembers" | "hu_bison" | "hu_directus" | "hu_kiosk"
| "cs50" | "duke";

export type ProjectsCategoriesType =
| "business" | "electrical_engineering" | "embedded_systems" | "software_engineering"
| "web_development" | "robotics";

export type ProjectType = {
    key: ProjectsNamesType;
    images: (ImageMetadata | string)[];
    stack: TechnologiesNamesType[];
    categories: ProjectsCategoriesType[];
    privacy: "public" | "private";
    client: "personal" | "academic" | "contract";
    status: "completed" | "ongoing" | "maintained";
    featured: boolean;
    startDate: string;
    endDate?: string;
    links?: {
        website?: string;
        github?: string;
        video?: string;
    };
};

export type ProjectsSSOT = Record<ProjectsNamesType, ProjectType>;

// Locale (i18n) structure
export type LOCtextsProjectsType = {
    software: Record<("title" | "description"), string>;
    electrical: Record<("title" | "description"), string>;
    categories: Record<ProjectsCategoriesType, string>;
    privacy: Record<("public" | "private"), string>;
    client: Record<("personal" | "academic" | "contract"), string>;
    status: Record<("completed" | "ongoing" | "maintained"), string>;
    featured: string;
    links: Record<("website" | "github" | "video"), string>;
};

export type LOCprojectsType = { texts: LOCtextsProjectsType } & Record<ProjectsNamesType, {
    "title": string; "summary": string;
}>;