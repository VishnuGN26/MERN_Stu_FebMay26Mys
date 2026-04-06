
// Scroll Progress Indicator


function scrollProgress(){
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;

    document.getElementById("scroll-bar").style.width =
        scrollPercent + "%";
});
if (scrollPercent > 70) {
    bar.style.background = "green";
} else {
    bar.style.background = "blue";
}
} 
//scroll spy 
function scrollSpy(){
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("nav-active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("nav-active");
            }
        });

    });

});
}
//  Back to top bottom
document.addEventListener("DOMContentLoaded", () => {

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
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


const projects = [
    {
        name: "Portfolio Website",
        description: "Built using HTML, Tailwind, JS",
        category: "Frontend"
    },
    {
        name: "Chat App",
        description: "Realtime backend using Socket.io",
        category: "Backend"
    },
    {
        name: "E-commerce App",
        description: "Full MERN stack app",
        category: "Fullstack"
    }
];                      
const filtersContainer = document.getElementById("project-filters");
const projectsContainer = document.getElementById("projects-container");

let activeCategory = "All";


const categories = ["All", ...new Set(projects.map(p => p.category))];

categories.forEach(category => {
    const btn = document.createElement("button");

    btn.textContent = category;
    btn.className = "px-4 py-2 border rounded hover:bg-blue-500 hover:text-white transition";

    btn.addEventListener("click", () => {
        activeCategory = category;

    
        document.querySelectorAll("#project-filters button")
            .forEach(b => b.classList.remove("bg-blue-500", "text-white"));


        btn.classList.add("bg-blue-500", "text-white");

        filterProjects();
    });

    filtersContainer.appendChild(btn);
});


function filterProjects() {
    let filtered;

    if (activeCategory === "All") {
        filtered = projects;
    } else {
        filtered = projects.filter(p => p.category === activeCategory);
    }

    renderProjects(filtered);
}


function renderProjects(list) {
    projectsContainer.innerHTML = "";

    if (list.length === 0) {
        projectsContainer.innerHTML = `
            <p class="col-span-full text-center text-gray-500 text-lg">
                🚫 No projects found
            </p>
        `;
        return;
    }

    list.forEach(project => {
        const div = document.createElement("div");
        div.className = "p-5 border rounded shadow hover:shadow-lg";

        div.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${project.name}</h3>
            <p class="text-gray-600 mb-2">${project.description}</p>
            <span class="text-sm bg-gray-200 px-3 py-1 rounded">${project.category}</span>
        `;

        projectsContainer.appendChild(div);
    });
}

renderProjects(projects);





