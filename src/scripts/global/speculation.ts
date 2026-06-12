import { PAGES } from "@config/routes/pages";
import { VANITY } from "@config/routes/vanity";

const matches_href = (): string[] => Object.values(PAGES).map(page => 
    (page.key === "home") ? "/*/?" : `/*/${page.key}/`);

const matches_not = (): string[] => Object.values(VANITY).map(profile =>
    `/${profile.key}/`)

export const SPECULATION = () => ({
    "prerender": [
        {
            "source": "document",
            "where": {
                "and": [
                    { "href_matches": matches_href() },
                    { "not": { "href_matches": matches_not() } }
                ]
            },
            "eagerness": "moderate"
        }
    ]
});