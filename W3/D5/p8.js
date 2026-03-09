//Event delegation 
const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTask");

let taskCount = 3;

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        console.log("Deleten button clicked for: ", event.target.parentElement.textContent.trim());
        event.target.parentElement.remove();
    }
});

addTask.addEventListener("click", function () {
    taskCount++;
    const li = document.createElement("li");
    li.innerHTML = "Task" + taskCount +
        '<button class="deleteBtn"> Delete</button>';

    taskList.appendChild(li);

    console.log("New task created");


});