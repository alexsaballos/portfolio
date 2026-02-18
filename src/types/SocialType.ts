import type { IconsType } from "./AssetsType";

export type BaseSocialButtonType = {
    icon: IconsType;
    link: string;
    label: string;
}

export type ButtonsVariantNamesType = "social" | "contact";
export type SocialButtonsNamesType = "linkedin" | "github" | "handshake" | "merit" | "credly" | "wisp" | "hu";
export type ContactButtonsNamesType = Exclude<SocialButtonsNamesType, ("merit" | "wisp" | "hu")>;
export type ButtonsListType = {
    social: Record<SocialButtonsNamesType, BaseSocialButtonType>;
    contact: Record<ContactButtonsNamesType, BaseSocialButtonType>;
}