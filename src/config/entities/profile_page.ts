import { SYSTEM } from "@config/links";

export const SCHEMAORG_PROFILEPAGE = {
    "@type": "ProfilePage",
    "@id": `${SYSTEM.domain}#profile-page`,
    "url": SYSTEM.domain,
    "mainEntity": {
        "@id": `${SYSTEM.domain}#person`
    }
} as const;