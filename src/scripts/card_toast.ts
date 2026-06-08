import { SYSTEM } from "@config/links";
import { PERSONAL } from "@config/personal";

// Element selections the success toast, copy button, and share button
const successToast = document.getElementById("card_toast_success");
const copyButton = document.getElementById("card_button_copy");
const shareButton = document.getElementById("card_button_share");

if (!successToast || !copyButton || !shareButton) throw new Error("Missing elements on the DOM");

// Toast showing function on click
copyButton.addEventListener("click", async () => {
    successToast.classList.remove("hidden");
    setTimeout(() => successToast.classList.add("hidden"), 4000);
});

shareButton.addEventListener("click", async () => {
    const url = SYSTEM.notable.card_utm;
    const title = PERSONAL.name;

    if (navigator.share) {
        try {
            await navigator.share({
                title: title,
                text: `Connect with ${title}`,
                url: url,
            });
        } catch (err)
            { if (err instanceof Error && err.name !== "AbortError") console.error("Error sharing:", err); }
    } else copyButton.click();  // Fallback - Trigger copy button
});