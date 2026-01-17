import type { IconsType } from "./AssetsType";

export type SocialLinksType = {
    whatsapp_URL: string;
    portfolio_URL: string;
    linkedin_URL: string;
    github_URL: string;
    handshake_URL: string;
    merit_URL: string;
    wisp_URL: string;
    hu_URL: string;
}

export type SingleSocialButtonType = {
    icon: IconsType;
    color: string;
    link: string;
    label: string;
}

export type SocialButtonsType = {
    linkedin: SingleSocialButtonType;
    github: SingleSocialButtonType;
    handshake: SingleSocialButtonType;
    merit: SingleSocialButtonType;
    hu: SingleSocialButtonType;
    wisp: SingleSocialButtonType;
}