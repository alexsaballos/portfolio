import { LINKS, SYSTEM } from "../links";

// Business Entity - SIDIMAQSA - Schema.org Structured Data Identity Linking
export const SCHEMAORG_SIDIMAQSA = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${LINKS.organizations.sidimaqsa}#organization`,
    "name": "SIDIMAQSA",
    "url": LINKS.organizations.sidimaqsa,
    "description": "Elevator and escalator installation, modernization, repair, and maintenance company.",
    "foundingDate": "2016",
    "areaServed": {
        "@type": "Country",
        "name": "Nicaragua"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Managua",
        "addressRegion": "Managua",
        "addressCountry": "NI"
    },
    "industry": [
        "Industrial Services",
        "Elevator Systems",
        "Escalator Systems"
    ],
    "founder": {
        "@id": `${SYSTEM.domain}#person`
    }
} as const;