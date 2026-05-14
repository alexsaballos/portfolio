import { LINKS } from "./links";
import { PICTURES } from "./assets";
import type { HonorsOrgListType, HonorsSSOT } from "../types/HonorsType";

export const HONOR_LINKS: HonorsSSOT = {
    ncees: {
        year: "2025",
        picture: PICTURES.honors.ncees,
        link: LINKS.organizations.ncees,
        verification: LINKS.certifications.credly.award
    },
    wisp: {
        year: "2021-2025",
        picture: PICTURES.honors.wisp,
        link: LINKS.organizations.wisp
    },
    hu: {
        picture: PICTURES.honors.hu,
        engineering: {
            year: "2025",
            link: LINKS.organizations.hu.engineering,
            verification: LINKS.certifications.parchment
        },
        asi: {
            year: "2024",
            link: LINKS.organizations.hu.asi
        },
        honors: {
            year: "2021-2025",
            link: LINKS.organizations.hu.honors
        },
        deans_list: {
            year: "2021-2025",
            verification: LINKS.profiles.merit
        }
    }
} as const satisfies HonorsSSOT;

export const HONORS_KEYS = Object.keys(HONOR_LINKS) as HonorsOrgListType[];