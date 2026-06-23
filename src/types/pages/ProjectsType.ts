import type { TechnologiesNamesType } from "../AssetsType";

// SSOT (Metadata) structure
export type ProjectsNamesType =
| "pcs" | "portfolio" | "sidimaqsa" | "atx" | "arctos" | "domotics"
| "maze_robot" | "asgc" | "instrumentation" | "digital_clock" | "prog_engr" | "bison_math" | "habitar"
| "hu_remembers" | "hu_bison" | "hu_directus" | "hu_kiosk"
| "cs50" | "duke";

export type ProjectsCategoriesType =
| "business" | "windows_app" | "web_development" | "backend" | "frontend"
| "pic32" | "pic18" | "pickit5" | "raspberrypi_4b" | "arduino_mega_2560_r3" | "arduino_uno_r3" | "ni_elvis"
| "embedded_systems" | "robotics" | "automation" | "measurement_systems" | "digital_logic_design"
| "cad" | "calculus";

export type ProjectsOrgsType =
| "personal" | "sidimaqsa" | "nasa" | "harding" | "harvard" | "duke" | "habitar";

export type ProjectType = {
    key: ProjectsNamesType;
    images: {
        cover: ImageMetadata;
        album: undefined | (ImageMetadata | string)[]
    };
    discipline: "electrical_engineering" | "software_engineering";
    stack: TechnologiesNamesType[];
    categories: ProjectsCategoriesType[];
    privacy: "public" | "private";
    client: "personal" | "academic" | "contract";
    organization: ProjectsOrgsType;
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
    organization: Record<ProjectsOrgsType, string>;
    status: Record<("completed" | "ongoing" | "maintained"), string>;
    featured: string;
    links: Record<("website" | "github" | "video"), string>;
};

export type LOCprojectsType = { texts: LOCtextsProjectsType } & Record<ProjectsNamesType, {
    "title": string; "summary": string;
}>;