import { LINKS } from "./links";
import { PICTURES } from "./assets";
import { SOCIAL_BUTTONS } from "./social";
import type { HonorsSSOT } from "../types/HonorsType";

export const HONOR_LINKS: HonorsSSOT = {
    ncees: {
        year: "2025",
        picture: PICTURES.honors.ncees,
        link: LINKS.ncees,
        verification: LINKS.credly.award
    },
    wisp: {
        year: "2021-2025",
        picture: PICTURES.honors.wisp,
        link: SOCIAL_BUTTONS.wisp.link
    },
    hu: {
        picture: PICTURES.honors.hu,
        engineering: {
            year: "2025",
            link: LINKS.hu.engineering_dept,
            verification: LINKS.parchment
        },
        asi: {
            year: "2024",
            link: LINKS.hu.asi
        },
        honors: {
            year: "2021-2025",
            link: LINKS.hu.honors
        },
        deans_list: {
            year: "2021-2025",
            verification: SOCIAL_BUTTONS.merit.link
        }
    }
} as const;