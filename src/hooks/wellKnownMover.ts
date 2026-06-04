import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import type { AstroIntegration } from "astro";

export function wellKnownMover(): AstroIntegration {
    const orangeHOOK = "\x1b[38;5;208m[HOOK]\x1b[0m";
    return {
        name: "well-known-post-build-mover",
        hooks: {
            "astro:build:done": async ({ dir }) => {
                console.log(`${orangeHOOK} Initializing WellKnownMover...\n`);

                // Path generator
                const distPath = (target: string):string => path.join(fileURLToPath(dir), target);
                const assetsDir = distPath("_astro");
                const wellKnownDir = distPath(".well-known");
                const sourceSecurity = distPath("security.txt");
                const sourceWebfinger = distPath("webfinger.json");

                // Create .well-known directory (doesn't exist post-build)
                if (!fs.existsSync(wellKnownDir)) fs.mkdirSync(wellKnownDir, { recursive: true });

                // Move security.txt
                if (fs.existsSync(sourceSecurity)) {
                    fs.renameSync(sourceSecurity, path.join(wellKnownDir, "security.txt"));
                    console.log(`${orangeHOOK} Moved: /dist/.well-known/security.txt`);
                }

                // Move and strip extension from webfinger.json
                if (fs.existsSync(sourceWebfinger)) {
                    fs.renameSync(sourceWebfinger, path.join(wellKnownDir, "webfinger"));
                    console.log(`${orangeHOOK} Moved & Stripped: /dist/.well-known/webfinger (Extensionless)\n`)
                }

                // Delete unoptimized picture files from _astro
                if (fs.existsSync(assetsDir)) {
                    fs.readdirSync(assetsDir).forEach(file => {
                        const isUnoptimized = [".png", ".jpg", ".jpeg"].includes(path.extname(file).toLowerCase());

                        if (isUnoptimized) {
                            fs.unlinkSync(path.join(assetsDir, file));
                            console.log(`${orangeHOOK} Purged unoptimized source image: _astro/${file}`);
                        }
                    });
                }
                console.log(`\n${orangeHOOK} WellKnownMover Sucessful\n`)
            }
        }
    };
}