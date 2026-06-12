// Element selections: injected url redirection from "/src/pages/[slug].astro" & countdown text
const url = document.getElementById("countdownVanityContainer")!.dataset.url as string;
const countdownText = document.getElementById("countdownVanitySpan");

if (!url || !countdownText) throw new Error("Missing elements on the DOM");

// Wait 2s for AOS to settle & start 1s counting interval
let seconds = 3;
setTimeout(() => {
    const interval = setInterval(() => {
        seconds--;
        countdownText.textContent = `${seconds}`;
        
        if (seconds <= 0) {
            clearInterval(interval);
            window.location.href = url;
        }
    }, 1000);
}, 2000);