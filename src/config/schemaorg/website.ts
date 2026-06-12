import { SYSTEM } from "@config/links";
import { METADATA } from "@config/meta";
import { PERSONAL } from "@config/personal";
import { LANGUAGES } from "@config/languages";

// Website Entity - Alexander Saballos' Portfolio - Schema.org Structured Data Identity Linking
export const SCHEMAORG_WEBSITE = {
    "@type": "WebSite",
    "@id": `${SYSTEM.domain}#website`,
    "url": SYSTEM.domain,
    "name": METADATA.siteName,
    "alternateName": [
        `${PERSONAL.name} Portfolio`,
        `Engineering Portfolio of ${PERSONAL.name}`,
        `Professional Portfolio of ${PERSONAL.name}`,
        `${PERSONAL.name} Website`,
        `${PERSONAL.name} Engineering Website`,
        PERSONAL.name
    ],
    "description": `Portfolio and professional website of ${PERSONAL.name}.`,
    "inLanguage": Object.values(LANGUAGES).map(lang => ({
		"@type": "Language",
		"name": lang.name.standard,
		"alternateName": lang.code.lang
	})),
    "about": {
        "@id": `${SYSTEM.domain}#person`
    },
    "author": {
        "@id": `${SYSTEM.domain}#person`
    },
    "creator": {
        "@id": `${SYSTEM.domain}#person`
    },
    "publisher": {
        "@id": `${SYSTEM.domain}#person`
    },
    "copyrightHolder": {
        "@id": `${SYSTEM.domain}#person`
    },
    "isAccessibleForFree": true,
    "keywords": [
        "Electrical Engineering",
        "Embedded Systems",
        "Industrial Automation",
        "Software Engineering"
    ]
} as const;