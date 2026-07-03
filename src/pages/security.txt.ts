import { SEO } from "@config/routes/routing";
import { SYSTEM } from "@config/routes/links";
import { PERSONAL } from "@config/personal";
import { LANGUAGES } from "@config/languages";

export async function GET() {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    const expiresISO = expiryDate.toISOString();

    const body = `
# Security contact form for all languages. Select "Webmaster Inquiries" on the form's subject
${Object.values(LANGUAGES).map(lang => 
    `Contact: ${SEO.canonical.page(lang.code.lang, "contact")}?utm_source=securitytxt&utm_medium=file&utm_campaign=portfolio`
).join("\n")}

# Email for security-related inquiries
Contact: mailto:${PERSONAL.emails.security}

# OpenPGP Key
Encryption: ${SYSTEM.domain}${SYSTEM.notable.internal.files.pgp_key}

# Expiry date
Expires: ${expiresISO}

# Languages I speak
Preferred-Languages: ${Object.values(LANGUAGES).map(lang => lang.code.lang).join(", ")}

# Canonical placement of security.txt
Canonical: ${SYSTEM.domain}/.well-known/security.txt`.trim();

    return new Response(body, {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
};