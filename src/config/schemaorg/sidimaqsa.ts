import { LINKS, SYSTEM } from "@config/routes/links";

// Business Entity - SIDIMAQSA - Schema.org Structured Data Identity Linking
export const SCHEMAORG_SIDIMAQSA = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${LINKS.organizations.sidimaqsa}#organization`,
    "name": "SIDIMAQSA",
    "url": LINKS.organizations.sidimaqsa,
    "description": "Elevator and escalator installation, modernization, repair, and maintenance company.",
    "foundingDate": "2016",
    "priceRange": "$$$",
    "areaServed": {
        "@type": "Country",
        "name": "Nicaragua"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Managua",
        "addressRegion": "Managua",
        "addressCountry": "NI",
        "streetAddress": "Ciudad el Doral, Km 18 Carretera Nueva a León",
        "postalCode": "15500"
    },
    "founder": {
        "@id": `${SYSTEM.domain}#person`
    }
} as const;