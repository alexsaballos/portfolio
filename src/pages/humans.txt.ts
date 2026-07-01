import { LINKS } from "@config/routes/links";
import { METADATA } from "@config/meta";
import { PERSONAL } from "@config/personal";
import { LANGUAGES } from "@config/languages";

export async function GET() {
    const today = new Date();
    const body =
`/* DEVELOPER */
    ${PERSONAL.name}
    Contact: ${METADATA.url}/${METADATA.defaultLanguage}/contact/
    Email: mailto:${PERSONAL.emails.contact}
    LinkedIn: ${LINKS.profiles.linkedin}
    GitHub: ${LINKS.profiles.github}
    Handshake: ${LINKS.profiles.handshake}
    From: The Americas
    
/* SITE */
    Last update: ${today.toISOString().split("T")[0]}
    Language: ${Object.values(LANGUAGES).map(l => `${l.name.standard}`).join(" / ")}
    Default Language: ${LANGUAGES[METADATA.defaultLanguage].name.standard}
    Doctype: HTML5
    Technologies Used: ${Object.values(METADATA.technologies_used).map(t => `${t}`).join(" / ")}
    
/* COPYRIGHT */
    \u00A9 ${today.getFullYear()} ${PERSONAL.name} - All rights reserved`;

    return new Response(body, {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400"
        }
    });
}