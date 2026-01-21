import { ICONS } from "./assets";
import type { ButtonsListType } from "../types/SocialType";

export const SOCIAL_BUTTONS: ButtonsListType["social"] = {
    linkedin: {
        icon: ICONS.linkedin,
        color: "#3A66B0",
        link: "https://www.linkedin.com/in/alex-saballos/",
        label: "My LinkedIn Profile"
    },
    github: {
        icon: ICONS.github,
        color: "#516870",
        link: "https://github.com/alexsaballos",
        label: "My GitHub Profile"
    },
    handshake: {
        icon: ICONS.handshake,
        color: "#D3FB52",
        link: "https://app.joinhandshake.com/profiles/alexsaballos",
        label: "My Handshake Profile"
    },
    merit: {
        icon: ICONS.merit,
        color: "#126579",
        link: "https://meritpages.com/alexsaballos",
        label: "My Merit Page"
    },
    wisp: {
        icon: ICONS.wisp,
        color: "#F2B100",
        link: "https://www.wispweb.org/",
        label: "WISP Official Website"
    },
    hu: {
        icon: ICONS.hu,
        color: "#F2B100",
        link: "https://harding.edu",
        label: "Harding University Official Website"
    }
} as const;

const CONTACT_BUTTONS_KEYS = Object.keys(SOCIAL_BUTTONS).filter((k) =>
    (k !== "merit" && k !== "wisp" && k !== "hu")) as Array<(keyof ButtonsListType["contact"])>;

export const CONTACT_BUTTONS: ButtonsListType["contact"] = Object.fromEntries(
    CONTACT_BUTTONS_KEYS.map((key) => [key, SOCIAL_BUTTONS[key]])
) as ButtonsListType["contact"];