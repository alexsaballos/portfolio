import { SEO } from "@config/routing";
import { PAGES } from "@config/pages";
import { SCHEMAORG_PERSON } from "@config/entities/person";
import { SCHEMAORG_WEBSITE } from "@config/entities/website";
import { SCHEMAORG_SIDIMAQSA } from "@config/entities/sidimaqsa";

import type { AdmittedLanguagesType } from "@typing/LocalesType";
import type { DirectoryPageNamesType } from "@typing/PagesType";

export const SCHEMAORG_GRAPH =
	(locale: AdmittedLanguagesType, page: DirectoryPageNamesType): string => {

	const graph: any[] = [SCHEMAORG_PERSON, SCHEMAORG_WEBSITE, SCHEMAORG_SIDIMAQSA];

	    // 2. Google recommends skipping BreadcrumbList on the root home page
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