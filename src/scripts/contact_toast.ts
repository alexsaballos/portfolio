import { SYSTEM } from "@config/links";

// Element selections for the form itself, the toastRoot, and status toasts
const form = document.querySelector("form");
const contactForm = document.getElementById("contact_form");
const successScreen = document.getElementById("success_screen");
const toastRoot = document.getElementById("toast_contact");
const loadingToast = document.getElementById("toast_loading");
const errorToast = document.getElementById("toast_error");

if (!form || !contactForm || !successScreen || !toastRoot || !loadingToast || !errorToast)
    throw new Error("Missing elements on the DOM");

// Toast showing function
const showErrorStatus = () => {
    hideLoadingToast();
    errorToast.classList.remove("hidden");
    setTimeout(() => errorToast.classList.add("hidden"), 4000);
};

const showSuccessScreen = () => {
    hideLoadingToast();
    contactForm.classList.add("hidden");
    successScreen.classList.remove("hidden");
};

// Show & Hide LoadingToast operators
const showLoadingToast = () => loadingToast.classList.remove("hidden");
const hideLoadingToast = () => loadingToast.classList.add("hidden");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        showLoadingToast();    // Show the loading toast right at the start
        const res = await fetch(SYSTEM.API.resend, {
            method: "POST",
            body: new FormData(form),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data?.error);
        showSuccessScreen(); form.reset();
    }
    catch { showErrorStatus(); }
});