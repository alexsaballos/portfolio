import { SEO } from "@config/routing";
import { METADATA } from "@config/meta";
import { PERSONAL } from "@config/personal";
import { LANGUAGES } from "@config/languages";
import { LINKS, SYSTEM } from "@config/links";

export async function GET() {
    // Generate clean, escaped XML structural blocks
    const categories = [
        "Electrical Engineering", "Software Engineering", "Embedded Systems", 
        "PCB Design", "Industrial Automation"
    ].map(cat => `<text>${cat}</text>`).join("\n");

    const xmlData =
`<?xml version="1.0" encoding="UTF-8"?>
<vcards xmlns="urn:ietf:params:xml:ns:vcard-4.0">
    <vcard>
        <kind><text>individual</text></kind>
        <source><uri>${METADATA.url}${METADATA.vcard_vcf}</uri></source>
        <xml><uri>${METADATA.url}${METADATA.vcard_xml}</uri></xml>

        <fn><text>${PERSONAL.name}</text></fn>
        <n>
            <surname>Saballos</surname>
            <given>Alexander</given>
            <additional></additional>
            <prefix>Mr.</prefix>
            <suffix></suffix>
        </n>
        <photo><uri>${SYSTEM.pfp}</uri></photo>
        <logo><uri>${SYSTEM.logo}</uri></logo>
        <gender><sex>M</sex></gender>

        <tz><text>America/Managua</text></tz>

        <org><text>SIDIMAQSA</text></org>
        <role><text>Founder</text></role>
        <title><text>Electrical Engineer (US EI/EiT) &amp; Software Engineer</text></title>

        ${Object.values(LANGUAGES).map(entry => `<lang><text>${entry.code.lang}</text></lang>`).join("\n\t")}

        <url>
            <parameters><type><text>Portfolio</text></type></parameters>
            <uri>${METADATA.url}</uri></url>
        <url>
            <parameters><type><text>Contact</text></type></parameters>
            <uri>${SEO.canonical.page("en", "contact")}</uri>
        </url>
        <url>
            <parameters><type><text>LinkedIn</text></type></parameters>
            <uri>${LINKS.profiles.linkedin}</uri>
        </url>
        <url>
            <parameters><type><text>GitHub</text></type></parameters>
            <uri>${LINKS.profiles.github}</uri>
        </url>
        <url>
            <parameters><type><text>Handshake</text></type></parameters>
            <uri>${LINKS.profiles.handshake}</uri>
        </url>
        <url>
            <parameters><type><text>ORCID</text></type></parameters>
            <uri>${LINKS.profiles.orcid}</uri>
        </url>
        <note><text>Electrical Engineer (US EI/EiT) &amp; Software Engineer specialized in embedded systems, PCB design, industrial automation, and software infrastructure. Contact: ${SEO.canonical.page("en", "contact")}</text></note>
        <categories>${categories}</categories>
        <prodid><text>-//${PERSONAL.name}//Portfolio Astro Endpoint Engine//${METADATA.defaultLanguage}</text></prodid>
        <uid><uri>${METADATA.url}${METADATA.vcard_vcf}</uri></uid>
        <rev><timestamp>${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z</timestamp></rev>

        <unknown>
            <parameters>
                <pname><text>X-SOCIALPROFILE</text></pname>
                <pvalue><text>type=linkedin</text></pvalue>
            </parameters>
            <uri>${LINKS.profiles.linkedin}</uri>
        </unknown>
        <unknown>
            <parameters>
                <pname><text>X-SOCIALPROFILE</text></pname>
                <pvalue><text>type=github</text></pvalue>
            </parameters>
            <uri>${LINKS.profiles.github}</uri>
        </unknown>

    </vcard>
</vcards>`.trim();

    return new Response(xmlData, {
        status: 200,
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Content-Disposition": 'inline; filename="vcard.xml"'
        }
    });
}