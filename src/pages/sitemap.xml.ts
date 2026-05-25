import { LANGUAGES } from "@config/languages";
import { METADATA } from "@config/meta";
import { VANITY } from "@config/vanity";
import { PAGES } from "@config/pages";
import { SEO } from "@config/routing";
import type { AdmittedLanguagesType } from "@typing/LocalesType";

// Indentation needs to stay like this in order to avoid tabulation & break issues
export async function GET() {
    const currentDate: string = new Date().toISOString().split("T")[0];

    const sitemap: string =
`<?xml version="1.0" encoding="${METADATA.charset}"?>
<urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${Object.values(PAGES).flatMap(page => {

        // Localized Canonical Page per Slug
        const LocalizedCanonicalPage = (pageLang: AdmittedLanguagesType): string => SEO.canonical.page(pageLang, page.metadata.slug);
        const DefaultLangCanonicalPage = LocalizedCanonicalPage(METADATA.defaultLanguage);
        
        return (
        `<url>
            <loc>${DefaultLangCanonicalPage}</loc>
            ${Object.values(LANGUAGES).map(language =>
                `<xhtml:link rel="alternate" hreflang="${language.code.lang}" href="${LocalizedCanonicalPage(language.code.lang)}" />`
            .trim()).join("\n\t\t\t")}
            <xhtml:link rel="alternate" hreflang="x-default" href="${DefaultLangCanonicalPage}" />
            <lastmod>${currentDate}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>${page.metadata.sitemap_priority}</priority>
        </url>`
    )}).join("\n\t\t")}
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