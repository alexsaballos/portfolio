// Reads injected url redirection from "/src/pages/[slug].astro"
let seconds = 3;
const url = document.getElementById("countdownVanityContainer")?.dataset.url;
const interval = setInterval(() => {
    seconds--;
    document.getElementById("countdownVanitySpan").textContent = seconds;
    if (seconds <= 0) {
        clearInterval(interval);
        window.location.href = url;
    }
}, 1000);