const searchInput = document.getElementById("project-search") as HTMLInputElement;
const disciplineSelect = document.getElementById("project-discipline") as HTMLSelectElement;
const statusSelect = document.getElementById("project-status") as HTMLSelectElement;
const organizationSelect = document.getElementById("project-organization") as HTMLSelectElement;
const featuredCheck = document.getElementById("project-featured") as HTMLInputElement;
const clearButton = document.getElementById("project-clear") as HTMLButtonElement;
const projectCards = document.querySelectorAll<HTMLInputElement>(".project-card");

if (!searchInput || !disciplineSelect || !statusSelect || !organizationSelect || !featuredCheck || !clearButton)
    throw new Error("[PROJECTS] Missing elements on the DOM");

searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    console.log(q);
    projectCards.forEach(card => {
        const project_title = card.dataset.project_title!;
        const project_discipline = card.dataset.project_discipline!;
        const project_status = card.dataset.project_status!;
        const project_stack = card.dataset.project_stack!;
        const project_organization = card.dataset.project_organization!;
        const project_featured = card.dataset.project_featured!;

        card.classList.toggle("hidden", project_title.includes(q));
    })
})

// Returns to default values for the searcher
clearButton.addEventListener("click", () => {
    searchInput.value = "";
    disciplineSelect.value = statusSelect.value = organizationSelect.value = "all";
    featuredCheck.checked = false;
    projectCards.forEach(card => {
        card.classList.toggle("hidden", false);
    })
});