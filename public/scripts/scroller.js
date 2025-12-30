const topBtn = document.getElementById("scrollTop");
const bottomBtn = document.getElementById("scrollBottom");

if (topBtn) topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); };
if (bottomBtn) bottomBtn.onclick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); };