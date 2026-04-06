const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");
document.getElementById("saveBtn").addEventListener("click", function () {
    localStorage.setItem("theme", themeInput.value);
    localStorage.setItem("Username", Vishnu);
    localStorage.setItem("loggedIn", True);
    console.log("Saved theme: ", themeInput.value);
    output.textContent = "successfully saved to local storage";
    output.style.color = "green";


}

);
document.getElementById("readBtn").addEventListener("click", function () {
    const theme = localStorage.getItem("theme");
    output.textContent = "theme is: "+theme;
    output.style.color = "green";


}

);
document.getElementById("removeBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    output.textContent = "Removed 'loggedIn' ";
    output.style.color = "green";


}

);
document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.clear();
    output.textContent = "Deleted storage' ";
    output.style.color = "red";


}

);