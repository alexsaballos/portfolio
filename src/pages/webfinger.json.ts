import { LINKS, SYSTEM } from "@config/routes/links"

export async function GET() {
    const body = {
        subject: "acct:alex@alexsaballos.dev",
        aliases: [SYSTEM.domain],
        links: Object.values(LINKS.profiles).map(profile => ({
            rel: SYSTEM.API.webfinger,
            type: "text/html",
            href: profile
        }))
    };

    return new Response(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-Type': 'application/jrd+json; charset=utf-8' }
    });
};