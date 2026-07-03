import fs from "fs";
import path from "path";
import { WKD } from "@src/config/personal";
import type { APIRoute } from "astro";

export const getStaticPaths = () => Object.values(WKD).map(
    hash => ({ params: { hash }}));

// Autogenerates hashes for each public-facing PGP-enabled email
export const GET: APIRoute = async () => {
    const keyPath = path.join(process.cwd(), "public", "pgp-key.asc");
    const keyBuffer = fs.readFileSync(keyPath);

    return new Response(keyBuffer, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/octet-stream"
        },
    });
};