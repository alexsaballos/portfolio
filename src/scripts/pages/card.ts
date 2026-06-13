import { SYSTEM } from "@config/routes/links";
import { PERSONAL } from "@config/personal";

// Element selections: success toast, copy button, and share button
const successToast = document.getElementById("card_toast_success");
const copyButton = document.getElementById("card_button_copy");
const shareButton = document.getElementById("card_button_share");
const gwButton = document.getElementById("gw_button");

if (!successToast || !copyButton || !shareButton || !gwButton)
    throw new Error("Missing elements on the DOM");

// Toast showing function on click
copyButton.addEventListener("click", async () => {
    successToast.classList.remove("hidden");
    setTimeout(() => successToast.classList.add("hidden"), 4000);
});

// Browser native share feature (Fallback - Trigger copy button)
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
        } catch (e) { console.error("Error sharing:", e); }
    } else copyButton.click();
});

// Add to Google Wallet Button
gwButton.addEventListener("click", async () => {
    try {
        const response = await fetch(SYSTEM.API.wallet_google,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            }
        );

        const data = await response.json();
        if (!data.success) throw new Error(data.body);
        window.location.href = data.body;
    }
    catch (e) {
        console.error(e);
        alert("Unable to create Google Wallet pass");
    }
});