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
        `SOURCE:${METADATA.url}${METADATA.vcard_vcf}`,
        `XML:${METADATA.url}${METADATA.vcard_xml}`,

        // Identification properties
        `FN:${PERSONAL.name}`,
        `N:Saballos;Alexander;;Mr.;`,
        `PHOTO:${SYSTEM.pfp}`,
        `LOGO:${SYSTEM.logo}`,
        "GENDER:M",

        // Geographical properties
        "TZ:America/Managua",

        // Organizational properties
        "ORG:SIDIMAQSA",
        "ROLE:Founder",
        "TITLE:Electrical Engineer (US EI/EiT) & Software Engineer",

        // Communication properties
        ...Object.values(LANGUAGES).map(entry => `LANG:${entry.code.lang}`),

        // Explanatory properties & Administrative Metadata
        `URL;TYPE=Portfolio:${METADATA.url}`,
        `URL;TYPE=Contact:${SEO.canonical.page("en", "contact")}`,
        `URL;TYPE=LinkedIn:${LINKS.profiles.linkedin}`,
        `URL;TYPE=GitHub:${LINKS.profiles.github}`,
        `URL;TYPE=Handshake:${LINKS.profiles.handshake}`,
        `URL;TYPE=ORCID:${LINKS.profiles.orcid}`,
        `NOTE:Electrical Engineer (US EI/EiT) & Software Engineer specialized in embedded systems, PCB design, industrial automation, and software infrastructure. Contact: ${SEO.canonical.page("en", "contact")}`,
        "CATEGORIES:Electrical Engineering,Software Engineering,Embedded Systems,PCB Design,Industrial Automation",
        `PRODID:-//${PERSONAL.name}//Portfolio Astro Endpoint Engine//${METADATA.defaultLanguage}`,
        `UID:${METADATA.url}${METADATA.vcard_vcf}`,
        `REV:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}`,

        // Extended Social Profiles for iOS / macOS
        `X-SOCIALPROFILE;type=linkedin:${LINKS.profiles.linkedin}`,
        `X-SOCIALPROFILE;type=github:${LINKS.profiles.github}`,

        "END:VCARD",
        "" // Triggers the necessary trailing \r\n
    ].join("\r\n");

    return new Response(vcard, {
        status: 200,
        headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": 'inline; filename="vcard.vcf"'
        }
    });
};