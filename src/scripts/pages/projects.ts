// Element selections: search bar, discipline select, status select, organization select, featured check, clear button, and project cards
const searchInput = document.getElementById("project-search") as HTMLInputElement;
const disciplineSelect = document.getElementById("project-discipline") as HTMLSelectElement;
const statusSelect = document.getElementById("project-status") as HTMLSelectElement;
const organizationSelect = document.getElementById("project-organization") as HTMLSelectElement;
const featuredCheck = document.getElementById("project-featured") as HTMLInputElement;
const clearButton = document.getElementById("project-clear") as HTMLButtonElement;
const projectCards = document.querySelectorAll<HTMLElement>(".project-card");
const electricalHero = document.getElementById("electrical-hero") as HTMLElement;
const softwareHero = document.getElementById("software-hero") as HTMLElement;

if (!searchInput || !disciplineSelect || !statusSelect || !organizationSelect || !featuredCheck || !clearButton)
    throw new Error("[PROJECTS] Missing elements on the DOM");

// Apply selected filters in real time
const applyFilters = () => {
    // Fetch input in real time
    const q = searchInput.value.toLowerCase();
    const input_discipline = disciplineSelect.value;
    const input_status = statusSelect.value;
    const input_organization = organizationSelect.value;
    const input_featured = featuredCheck.checked;

    console.log(`${q} - ${input_discipline} - ${input_status} - ${input_organization} - ${input_featured}`);
    projectCards.forEach(card => {
        // Fetch project data in real time
        const card_dataset = card.dataset;
        const project_title = (card_dataset.project_title ?? "").toLowerCase();
        const project_discipline = card_dataset.project_discipline ?? "";
        const project_status = card_dataset.project_status ?? "";
        const project_stack = card_dataset.project_stack ?? "";
        const project_organization = card_dataset.project_organization ?? "";
        const project_featured = card_dataset.project_featured ?? "";

        // Comparison
        const matchesSearch = (q === "") || project_title.includes(q);
        const matchesDiscipline = (input_discipline === "all") || (project_discipline === input_discipline);
        const matchesStatus = (input_status === "all") || (project_status === input_status);
        const matchesOrganization = (input_organization === "all") || (project_organization === input_organization);
        const matchesFeatured = !input_featured || project_featured;

        // Visibility calculation & toggling
        const visible = matchesSearch && matchesDiscipline && matchesStatus && matchesOrganization && matchesFeatured;
        card.classList.toggle("hidden", !visible);
    })
};

// Add event listener for all inputs
searchInput.addEventListener("input", applyFilters);
disciplineSelect.addEventListener("change", applyFilters);
statusSelect.addEventListener("change", applyFilters);
organizationSelect.addEventListener("change", applyFilters);
featuredCheck.addEventListener("change", applyFilters);

// Returns to default values for the searcher
clearButton.addEventListener("click", () => {
    searchInput.value = "";
    disciplineSelect.value = statusSelect.value = organizationSelect.value = "all";
    featuredCheck.checked = false;
    applyFilters();
});

// Ensure consistent Initial State
applyFilters();