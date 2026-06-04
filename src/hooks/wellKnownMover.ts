import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import type { AstroIntegration } from "astro";

export function wellKnownMover(): AstroIntegration {

    // Console-compatible text formatter
    const orangeHOOK = "\x1b[38;5;208m[HOOK]\x1b[0m";
    const darkOrangeText = '\x1b[38;5;94m';
    const lightOrangeBg = '\x1b[48;5;215m';
    const reset = '\x1b[0m';

    return {
        name: "well-known-post-build-mover",
        hooks: {
            "astro:build:done": async ({ dir }) => {
                // Hook starting notice
                console.log(`${darkOrangeText}${lightOrangeBg} Running custom Astro Hooks ${reset}`)
                console.log(`${orangeHOOK} ${darkOrangeText}Initializing WellKnownMover...${reset}\n`);

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
                    console.log(`${orangeHOOK} ${darkOrangeText}✓${reset} Moved: /dist/.well-known/security.txt`);
                }

                // Move and strip extension from webfinger.json
                if (fs.existsSync(sourceWebfinger)) {
                    fs.renameSync(sourceWebfinger, path.join(wellKnownDir, "webfinger"));
                    console.log(`${orangeHOOK} ${darkOrangeText}✓${reset} Moved & Stripped: /dist/.well-known/webfinger (Extensionless)\n`)
                }

                // Delete unoptimized picture files from _astro
                if (fs.existsSync(assetsDir)) {
                    console.log(`${orangeHOOK} Purging unoptimized source image:`);
                    let index = 1;
                    
                    fs.readdirSync(assetsDir).forEach(file => {
                        const isUnoptimized = [".png", ".jpg", ".jpeg"].includes(path.extname(file).toLowerCase());

                        if (isUnoptimized) {
                            fs.unlinkSync(path.join(assetsDir, file));
                            console.log(`${orangeHOOK} ${darkOrangeText}▶${reset} (${index++}): _astro/${file}`);
                        }
                    });
                }
                console.log(`\n${orangeHOOK} ${darkOrangeText}✓ WellKnownMover Sucessful${reset}\n`)
            }
        }
    };
}