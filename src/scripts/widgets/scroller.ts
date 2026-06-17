// Element selections: topbutton, bottombutton, and controller
const topBtn = document.getElementById("scrollTop");
const bottomBtn = document.getElementById("scrollBottom");
const controls = document.getElementById("scrollControls");

if (!topBtn || !bottomBtn || !controls)
    throw new Error("[SCROLLER] Missing elements on the DOM");

const SCROLL_THRESHOLD:number = 500;

const updateScrollerVisibility = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
        controls.classList.remove("opacity-0", "pointer-events-none");
        controls.classList.add("opacity-100");
    } else {
        controls.classList.add("opacity-0", "pointer-events-none");
        controls.classList.remove("opacity-100");
    }
}

window.addEventListener("scroll", updateScrollerVisibility);
updateScrollerVisibility();

if (topBtn) topBtn.onclick = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };
if (bottomBtn) bottomBtn.onclick = () => { window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); };