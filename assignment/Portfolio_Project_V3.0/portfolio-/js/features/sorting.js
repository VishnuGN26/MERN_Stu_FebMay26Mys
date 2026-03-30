
const projects = [
    {
        title: "Portfolio",
        description: "My website",
        status: "Completed"
    },
    {
        title: "Ecommerce",
        description: "Shopping app",
        status: "In Progress"
    }
];
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("project-search");
    const sortSelect = document.getElementById("project-sort");
    const container = document.getElementById("projects-container");

    console.log("JS Loaded"); 

    if (!projects) {
        console.error("projects array not found!");
        return;
    }

    let filteredProjects = [...projects];

    function renderProjects(data) {
        container.innerHTML = "";

        data.forEach(project => {
            const card = document.createElement("div");
            card.className = "p-6 border rounded shadow";

            card.innerHTML = `
                <h3 class="text-xl font-bold">${project.title}</h3>
                <p>${project.description}</p>
                <span>${project.status}</span>
            `;

            container.appendChild(card);
        });
    }

    function applySortAndRender() {
        let sorted = [...filteredProjects];

        const sortValue = sortSelect.value;
        console.log("Sorting:", sortValue); 

        if (sortValue === "az") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === "za") {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortValue === "status") {
            sorted.sort((a, b) => a.status.localeCompare(b.status));
        }

        renderProjects(sorted);
    }


    searchInput.addEventListener("input", function () {
        const value = searchInput.value.toLowerCase();

        filteredProjects = projects.filter(project =>
            project.title.toLowerCase().includes(value)
        );

        applySortAndRender();
    });

    sortSelect.addEventListener("change", function () {
        applySortAndRender();
    });


    renderProjects(projects);

});
