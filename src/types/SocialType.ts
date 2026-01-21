import type { IconsType } from "./AssetsType";

export type BaseSocialButtonType = {
    icon: IconsType;
    color: string;
    link: string;
    label: string;
}

export type ButtonsVariantNamesType = "social" | "contact";
export type SocialButtonsNamesType = "linkedin" | "github" | "handshake" | "merit" | "wisp" | "hu";
export type ContactButtonsNamesType = Exclude<SocialButtonsNamesType, ("merit" | "wisp" | "hu")>;
export type ButtonsListType = {
    social: Record<SocialButtonsNamesType, BaseSocialButtonType>;
    contact: Record<ContactButtonsNamesType, BaseSocialButtonType>;
}