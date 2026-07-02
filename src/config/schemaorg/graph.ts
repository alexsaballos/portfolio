import { SEO } from "@config/routes/routing";
import { PAGES } from "@config/routes/pages";

import { SCHEMAORG_PERSON } from "@config/schemaorg/person";
import { SCHEMAORG_PROFILEPAGE } from "@config/schemaorg/profile_page";
import { SCHEMAORG_WEBSITE } from "@config/schemaorg/website";
import { SCHEMAORG_SIDIMAQSA } from "@config/schemaorg/sidimaqsa";
import { SCHEMAORG_OCCUPATIONALEXP } from "@config/schemaorg/occupational_experience";

import type { AdmittedLanguagesType } from "@typing/LocalesType";
import type { DirectoryPageNamesType } from "@typing/routes/PagesType";

export const SCHEMAORG_GRAPH =
	(locale: AdmittedLanguagesType, page: DirectoryPageNamesType): string => {

	const graph: any[] = [
        SCHEMAORG_PROFILEPAGE,
        SCHEMAORG_PERSON,
        SCHEMAORG_WEBSITE,
        SCHEMAORG_OCCUPATIONALEXP,
        SCHEMAORG_SIDIMAQSA
    ];

    // Google recommends skipping BreadcrumbList on the root home page
    if (page !== "home") {
        const breadcrumbEntity = {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": PAGES["home"].SEO.schemaorg_position,
                    "name": PAGES["home"].frontend.short_title,
                    "item": SEO.canonical.home(locale)
                },
                {
                    "@type": "ListItem",
                    "position": PAGES[page].SEO.schemaorg_position,
                    "name": PAGES[page].frontend.short_title,
                    "item": SEO.canonical.page(locale, PAGES[page].metadata.slug)
                }
            ]
        };
		graph.push(breadcrumbEntity);
    }

    return JSON.stringify({
        "@context": "https://schema.org",
        "@graph": graph
    });
};