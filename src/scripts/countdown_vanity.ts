// Reads injected url redirection from "/src/pages/[slug].astro"
let seconds: number = 3;
const url = document.getElementById("countdownVanityContainer")!.dataset.url as string;
if (!url) throw new Error("Missing redirect URL for countdown vanity.");

const interval = setInterval(() => {
    seconds--;
    document.getElementById("countdownVanitySpan")!.textContent = `${seconds}`;
    if (seconds <= 0) {
        clearInterval(interval);
        window.location.href = url;
    }
}, 1000);