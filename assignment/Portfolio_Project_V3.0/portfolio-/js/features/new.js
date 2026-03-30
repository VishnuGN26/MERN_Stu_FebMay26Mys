function renderProject(){
    const projectContainer = document.getElementById("projects-container");

    if(!projectContainer){
        console.log("Projects not found");
        return;
    }
    projectContainer.innerHTML = "";
    projectsData.forEach(function(project){
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2 text-blue-500";
        projectName.textContent = project.name;

        const projectCategory = document.createElement("p");
        projectCategory.className ="text-xl font-semibold";
        projectCategory.textContent = project.category;

        const projectDescription = document.createElement("p");
        projectDescription.classList ="text-sm";
        projectDescription.textContent = project.description;

        const projectTechnologies = document.createElement("p");
        projectTechnologies.classList = "text-sm font-semibold";
        projectTechnologies.textContent = project.technologies;

        const projectStatus = document.createElement("span");
        projectStatus.classList = "text-xs font-bold text-red-600 uppercase";
        projectStatus.textContent = project.status;

        const btnContainer = document.createElement("div");
        btnContainer.classList = "flex mb-3 gap-4 pt-6";

        const projectDemo = document.createElement("div");
        projectDemo.classList = "bg-gray-700 hover:bg-black text-white hover:shadow-lg rounded transition-all duration-300 px-8 py-3";
        projectDemo.textContent = "Live Demo";

        const projectGit = document.createElement("div");
        projectGit.classList = "bg-gray-700 hover:bg-black text-white hover:shadow-lg rounded transition-all duration-300 px-8 py-3";
        projectGit.textContent = "Github";

        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);

        card.appendChild(btnContainer);
        btnContainer.appendChild(projectDemo);
        btnContainer.appendChild(projectGit);

        projectContainer.appendChild(card);

    });
}
