import { PICTURES } from "./assets";
import { SOCIAL_BUTTONS } from "./social";
import type { HonorsSSOT } from "../types/HonorsType";

export const HONOR_LINKS: HonorsSSOT = {
    wisp: {
        picture: PICTURES.honors.wisp,
        link: SOCIAL_BUTTONS.wisp.link
    },
    ncees: {
        picture: PICTURES.honors.ncees,
        link: "https://ncees.org/outreach/ncees-graduation-honor-cords/",
        verification: "https://www.credly.com/badges/b45ec691-e8b4-438d-8f49-df1e603622a5/public_url"
    },
    hu: {
        picture: PICTURES.honors.hu,
        asi: {
            link: "https://www.harding.edu/about/offices-departments/american-studies-institute/programs-training/"
        },
        honors: {
            link: "https://www.harding.edu/honors/"
        },
        engineering: {
            link: "https://www.harding.edu/arts-sciences/engineering-physics/academic-programs/",
            verification: "https://www.parchment.com/u/award/e6ff0291d43e184f3aa6a25b1191a13b"
        },
        deans_list: {
            verification: SOCIAL_BUTTONS.merit.link
        }
    }
}