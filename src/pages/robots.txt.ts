import { METADATA } from "../config/meta";

if (!METADATA.url) throw new Error("SITE is required to generate robots.txt");

// Indentation needs to stay like this in order to avoid tabulation issues
export async function GET() {
    const body = 
`User-agent: *
Allow: /
Sitemap: ${METADATA.url}/sitemap.xml`;

    return new Response(body, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
}