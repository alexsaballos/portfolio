import { LANGUAGES } from "@config/languages";
import { SYSTEM } from "@config/links";
import { SEO } from "@config/routing";

export async function GET() {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    const expiresISO = expiryDate.toISOString();

    const body = `
# My security contact form for all languages. Select "Webmaster-Anfragen"/"Webmaster Inquiries"/"Consultas de Webmaster" on the form's subject
${Object.values(LANGUAGES).map(lang => 
    `Contact: ${SEO.canonical.page(lang.code.lang, "contact")}?utm_source=securitytxt&utm_medium=file&utm_campaign=portfolio`
).join("\n")}

# My security.txt expiration date
Expires: ${expiresISO}

# Languages I speak
Preferred-Languages: ${Object.values(LANGUAGES).map(lang => lang.code.lang).join(", ")}

# Canonical placement of security.txt
Canonical: ${SYSTEM.domain}/.well-known/security.txt`.trim();

    return new Response(body, {
        status: 200,
        headers: { 'Content-Type': '/text/plain; charset=utf-8' }
    });
};