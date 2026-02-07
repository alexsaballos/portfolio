import { ICONS } from "./assets";
import { LINKS } from "./links";
import type { ButtonsListType } from "../types/SocialType";

export const SOCIAL_BUTTONS: ButtonsListType["social"] = {
    linkedin: {
        icon: ICONS.linkedin,
        link: LINKS.linkedin,
        label: "My LinkedIn Profile"
    },
    github: {
        icon: ICONS.github,
        link: LINKS.github,
        label: "My GitHub Profile"
    },
    handshake: {
        icon: ICONS.handshake,
        link: LINKS.handshake,
        label: "My Handshake Profile"
    },
    merit: {
        icon: ICONS.merit,
        link: LINKS.merit_pages,
        label: "My Merit Page"
    },
    wisp: {
        icon: ICONS.wisp,
        link: LINKS.wisp,
        label: "WISP Official Website"
    },
    hu: {
        icon: ICONS.hu,
        link: LINKS.hu.main,
        label: "Harding University Official Website"
    }
} as const;

const CONTACT_BUTTONS_KEYS = Object.keys(SOCIAL_BUTTONS).filter((k) =>
    (k !== "merit" && k !== "wisp" && k !== "hu")) as Array<(keyof ButtonsListType["contact"])>;

export const CONTACT_BUTTONS: ButtonsListType["contact"] = Object.fromEntries(
    CONTACT_BUTTONS_KEYS.map((key) => [key, SOCIAL_BUTTONS[key]])
) as ButtonsListType["contact"];