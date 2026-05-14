import { LANGUAGES } from "../config/languages";
import { VANITY } from "../config/vanity";
import { PAGES } from "../config/pages";
import { SEO } from "../config/routing";

// Indentation needs to stay like this in order to avoid tabulation & break issues
export async function GET() {
    const currentDate = new Date().toISOString().split("T")[0];

    const sitemap: string =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${Object.values(PAGES).flatMap(page =>
        `<url>
            <loc>${page.slug === "/" ? SEO.canonical_page("en", "") : SEO.canonical_page("en", page.slug)}</loc>
            ${Object.values(LANGUAGES).map(language => `
                <xhtml:link rel="alternate" hreflang="${language.code.lang}" href="${page.slug === "/" ? SEO.canonical_page(language.code.lang, "") : SEO.canonical_page(language.code.lang, page.slug)}" />`
            .trim()).join("\n\t\t\t")}
            <xhtml:link rel="alternate" hreflang="x-default" href="${page.slug === "/" ? SEO.canonical_page("en", "") : SEO.canonical_page("en", page.slug)}" />
            <lastmod>${currentDate}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>${page.slug === "/" ? "1.0" : "0.8"}</priority>
        </url>`
    ).join("\n\t\t")}
    ${Object.values(VANITY).flatMap(profile =>
        `<url>
            <loc>${profile.SEO.canonical}</loc>
            <lastmod>${currentDate}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.3</priority>
        </url>`
    ).join("\n\t\t")}
</urlset>`;

    return new Response(sitemap, {
        status: 200,
        headers: { "Content-Type": "application/xml; charset=utf-8" }
    });
}