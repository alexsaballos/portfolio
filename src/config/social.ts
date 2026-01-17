import { ICONS } from "./assets";
import type { SocialLinksType, SocialButtonsType } from "../types/SocialType";

const SOCIAL_LINKS: SocialLinksType = {
    whatsapp_URL: "https://wa.me/50582712533",
    portfolio_URL: "https://alexsaballos.dev",
    linkedin_URL: "https://www.linkedin.com/in/alex-saballos/",
    github_URL: "https://github.com/alexsaballos",
    handshake_URL: "https://app.joinhandshake.com/profiles/alexsaballos",
    merit_URL: "https://meritpages.com/alexsaballos",
    wisp_URL: "https://www.wispweb.org/",
    hu_URL: "https://harding.edu"

} as const;

export const SOCIAL_BUTTONS: SocialButtonsType = {
    linkedin: {
        icon: ICONS.linkedin,
        color: "#3A66B0",
        link: SOCIAL_LINKS.linkedin_URL,
        label: "My LinkedIn Profile"
    },
    github: {
        icon: ICONS.github,
        color: "#516870",
        link: SOCIAL_LINKS.github_URL,
        label: "My GitHub Profile"
    },
    handshake: {
        icon: ICONS.handshake,
        color: "#D3FB52",
        link: SOCIAL_LINKS.handshake_URL,
        label: "My Handshake Profile"
    },
    merit: {
        icon: ICONS.merit,
        color: "#126579",
        link: SOCIAL_LINKS.merit_URL,
        label: "My Merit Page"
    },
    wisp: {
        icon: ICONS.wisp,
        color: "#F2B100",
        link: SOCIAL_LINKS.wisp_URL,
        label: "WISP Official Website"
    },
    hu: {
        icon: ICONS.hu,
        color: "#F2B100",
        link: SOCIAL_LINKS.hu_URL,
        label: "Harding University Official Website"
    }
} as const;