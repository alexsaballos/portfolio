import { METADATA } from "@config/meta";
import { PAGES } from "@config/pages";
import { ROUTE } from "@config/routing";

export async function GET() {
    const manifest:string = JSON.stringify(
    {
        "id": ROUTE.home(METADATA.defaultLanguage),
        "name": PAGES.home.frontend.long_title,
        "short_name": PAGES.home.frontend.short_title,
        "description": PAGES.home.SEO.description,
        "lang": METADATA.defaultLanguage,
        "dir": METADATA.text_direction,

        "start_url": ROUTE.home(METADATA.defaultLanguage),
        "scope": ROUTE.home(METADATA.defaultLanguage),
        "display": METADATA.display,
        "orientation": METADATA.orientation,
        "shortcuts" : Object.values(PAGES).map(entry => ({
            "name": entry.frontend.long_title,
            "short_name": entry.frontend.short_title,
            "url": (entry.key === "home") ? ROUTE.home(METADATA.defaultLanguage) : ROUTE.page(METADATA.defaultLanguage, entry.metadata.slug),
            "description": entry.SEO.description
        })),

        "background_color": METADATA.colors.dark.background,
        "theme_color": METADATA.colors.dark.primary,

        "categories": METADATA.manifest_categories,
        "icons": METADATA.manifest_favicons,

        "handle_links": "preferred",
        "prefer_related_applications": false,
        "launch_handler": {
            "client_mode": "focus-existing"
        },
        "display_override": [
            "window-controls-overlay",
            "standalone"
        ]
    }, null, "\t");

    return new Response(manifest, {
        status: 200,
        headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
    });
}