import { SEO } from "@config/routing";
import { METADATA } from "@config/meta";
import { PERSONAL } from "@config/personal";
import { LANGUAGES } from "@config/languages";
import { LINKS, SYSTEM } from "@config/links";

export async function GET() {
    const vcard = [
        // General Properties
        "BEGIN:VCARD",
        "VERSION:4.0",
        "KIND:individual",

        // Identification properties
        `FN:${PERSONAL.name}`,
        `N:Saballos;Alexander;;Mr.;`,
        `PHOTO:${SYSTEM.pfp}`,

        // Organizational properties
        "ORG:SIDIMAQSA",
        "ROLE:Founder",
        "TITLE:Electrical Engineer (US EI/EiT) & Software Engineer",

        // Communication properties
        ...Object.values(LANGUAGES).map(entry => `LANG:${entry.code.lang}`),

        // Explanatory properties
        `URL;TYPE=Portfolio:${METADATA.url}`,
        `URL;TYPE=Contact:${SEO.canonical.page("en", "contact")}`,
        `URL;TYPE=LinkedIn:${LINKS.profiles.linkedin}`,
        `URL;TYPE=GitHub:${LINKS.profiles.github}`,
        `URL;TYPE=Handshake:${LINKS.profiles.handshake}`,
        `URL;TYPE=ORCiD:${LINKS.profiles.orcid}`,
        `NOTE:Electrical Engineer (US EI/EiT), Software Engineer, HU Walton Alumnus. Specialized in embedded systems, PCB design, industrial automation, and software infrastructure. Preferred method of communication: ${SEO.canonical.page("en", "contact")}`,
        `CATEGORIES:Electrical Engineering,Software Engineering,Embedded Systems,PCB Design,Industrial Automation`,

        `UID:${METADATA.url}/card/`,
        `REV:${new Date().toISOString()}`,

        "END:VCARD"
    ].join("\r\n");

    return new Response(vcard, {
        status: 200,
        headers: { "Content-Type": "text/vcard; charset=utf-8" }
    });
};