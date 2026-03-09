const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    // stop page reload
    event.preventDefault();

    if(username.value.trim() === ""){
        message.textContent ="Username is required";
        console.log.apply("Form blocked: no input for username");
        return;
    }

    message.textContent = "Form handled by JS for user",username.value;
    console.log("Form submitted with username",username.value);
});