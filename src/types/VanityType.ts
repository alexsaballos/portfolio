import type { IconsType } from "./AssetsType";

export type VanityEntryGroupType = "contact" | "social" | "ungrouped";
export type BaseVanityEntryType = {
    key: string;
    frontend: {
        name: string;
        link: string;
        icon: IconsType;
        text: {
            owner: "my" | "";
            type: "profile" | "website" | "business";
        };
    };
    metadata: {
        slug: string;
        label: string;
        groups: VanityEntryGroupType[];
    };
    SEO: Record<("title" | "description" | "canonical"), string>;
};

export type VanityNamesType = "linkedin" | "github" | "handshake" | "merit" | "credly" | "wisp" | "hu" |"coursera" | "edx" |
    "googledev" | "figma" | "gravatar" | "khanacademy" | "peoplecert" | "quizlet" | "sidimaqsa";
export type VanityListType = Record<VanityNamesType, BaseVanityEntryType>;