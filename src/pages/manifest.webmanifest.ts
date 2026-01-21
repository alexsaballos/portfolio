import { METADATA } from "../config/meta";
import { PAGES } from "../config/pages";
import { ROUTE } from "../config/routing";

export async function GET() {
    const manifest:string = JSON.stringify(
    {
        "id": "/",
        "name": PAGES.home.long_title,
        "short_name": PAGES.home.short_title,
        "description": PAGES.home.SEO_description,
        "lang": METADATA.defaultLanguage,
        "dir": METADATA.text_direction,

        "start_url": ROUTE.home(METADATA.defaultLanguage),
        "scope": "/",
        "display": METADATA.display,
        "orientation": METADATA.orientation,

        "background_color": METADATA.colors.background,
        "theme_color": METADATA.colors.theme,

        "categories": METADATA.manifest_categories,
        "icons": METADATA.manifest_favicons
    }, null, "\t");

    return new Response(manifest, {
        status: 200,
        headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
    });
}