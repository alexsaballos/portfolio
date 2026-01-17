import { FAVICONS } from "../config/assets";
import { METADATA } from "../config/meta";
import { PAGES } from "../config/pages";
import { ROUTE } from "../config/routing";

export async function GET() {
    const manifest = JSON.stringify(
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
        "icons": [
            { "src": FAVICONS.android192.src, "sizes": FAVICONS.android192.sizes, "type": FAVICONS.android192.type },
            { "src": FAVICONS.android512.src, "sizes": FAVICONS.android512.sizes, "type": FAVICONS.android512.type },
            { "src": FAVICONS.apple120.src, "sizes": FAVICONS.apple120.sizes, "type": FAVICONS.apple120.type },
            { "src": FAVICONS.apple152.src, "sizes": FAVICONS.apple152.sizes, "type": FAVICONS.apple152.type },
            { "src": FAVICONS.apple167.src, "sizes": FAVICONS.apple167.sizes, "type": FAVICONS.apple167.type },
            { "src": FAVICONS.apple180.src, "sizes": FAVICONS.apple180.sizes, "type": FAVICONS.apple180.type },
            { "src": FAVICONS.mstile150.src, "sizes": FAVICONS.mstile150.sizes, "type": FAVICONS.mstile150.type },
            { "src": FAVICONS.safari_mask.src, "type": FAVICONS.safari_mask.type, "purpose": FAVICONS.safari_mask.purpose }
        ]
    }, null, "\t");

    return new Response(manifest, {
        status: 200,
        headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
    });
}