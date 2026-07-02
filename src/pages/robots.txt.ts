import { METADATA } from "@config/meta";
import { SYSTEM } from "@src/config/routes/links";

if (!METADATA.url) throw new Error("SITE is required to generate robots.txt");

// Indentation needs to stay like this in order to avoid tabulation issues
export async function GET() {
    const body = 
`User-agent: *
Allow: /
Sitemap: ${METADATA.url}${SYSTEM.notable.internal.files.sitemap}`;

    return new Response(body, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
}