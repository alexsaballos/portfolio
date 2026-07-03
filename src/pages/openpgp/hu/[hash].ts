import fs from "fs";
import path from "path";
import { WKD } from "@src/config/personal";
import type { APIRoute } from "astro";

export const getStaticPaths = () => Object.values(WKD).map(
    hash => ({ params: { hash }}));

export const GET: APIRoute = async () => {
    const keyPath = path.join(process.cwd(), "public", "pgp-key.asc");
    const armoredKeyText = fs.readFileSync(keyPath, "utf8");

    // 1. Strip out the header, footer, and any whitespace/newlines
    const base64Payload = armoredKeyText
        .replace(/-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]*?\r?\n\r?\n/, "") // Removes the armor header and metadata block
        .replace(/-----END PGP PUBLIC KEY BLOCK-----/, "")                     // Removes the armor footer
        .replace(/\s/g, "");                                                   // Strips out all remaining line breaks/spaces

    // 2. Convert the clean base64 string payload back into a raw binary buffer
    const binaryKeyBuffer = Buffer.from(base64Payload, "base64");

    return new Response(binaryKeyBuffer, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/octet-stream",
            "Cache-Control": "public, max-age=86400"
        },
    });
};