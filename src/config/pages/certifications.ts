import { LINKS } from "@config/routes/links";
import { PICTURES } from "@config/assets";
import type { CertListType } from "@typing/CertificationsType";

export const CERTIFICATIONS = {
    arpels: {
        key: "arpels",
        year: "2025",
        status: "active",
        honors: undefined,
        picture: PICTURES.certifications.arpels,
        verification: LINKS.certifications.credly.award,
        info: LINKS.organizations.arpels
    },
    hu: {
        key: "hu",
        year: "2025",
        status: "completed",
        honors: "laude",
        picture: PICTURES.honors.hu,
        verification: LINKS.certifications.parchment,
        info: LINKS.organizations.hu.engineering
    },
    iassc: {
        key: "iassc",
        year: "2026",
        status: "progress",
        honors: undefined,
        picture: PICTURES.certifications.iassc,
        verification: LINKS.profiles.peoplecert,
        info: LINKS.certifications.iassc.main
    },
    cs50: {
        key: "cs50",
        year: "2020",
        status: "completed",
        honors: "honors",
        picture: PICTURES.certifications.cs50,
        verification: LINKS.certifications.cs50.award,
        info: LINKS.certifications.cs50.main
    },
    coursera: {
        key: "coursera",
        year: "2020",
        status: "completed",
        honors: "honors",
        picture: PICTURES.certifications.coursera,
        verification: LINKS.certifications.coursera.award,
        info: LINKS.certifications.coursera.main
    }
} as const satisfies CertListType;