const signupForm = document.getElementById("signupForm");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = signupEmail.value.trim();

    if (!email) {
        message.textContent = "Email is required";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        message.textContent = "Please enter valid email id";
        message.style.color = "red";
        signupEmail.focus();
        return;
    }
    //Password validation
    const password = signupPassword.value;
    console.log(signupForm.nextElementSibling,signupPassword.value);//another way
    if (!password) {
        message.textContent = "Password is required";

        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //check length of the password
    if (password.length < 8) {
        message.textContent = "Password must be atleast 8 character long.";
        message.style.color = "red";
        signupPassword.focus();
        return;

    }
    //check UPPERCASE characters
    if (/![A-Z]/.test(password)) {
        message.textContent = "Password must be atleast 1 UPPERCASE character.";
        message.style.color = "red";
        signupPassword.focus();
        return;


    }
    if (/![a-z]/.test(password)) {
        message.textContent = "Password must be atleast 1 LOWERCASE character.";
        message.style.color = "red";
        signupPassword.focus();
        return;


    }
    //check number
    if (!/\d/.test(password)) {
        message.textContent = "Password must be atleast 1 digit in it.";
        message.style.color = "red";
        signupPassword.focus();
        return;


    }
    //check special character
    if (!/[@#$%&!]/.test(password)) {
        message.textContent = "Password must have atleast 1 special character";
        message.style.color = "red";
        signupPassword.focus();

        return;
    }
    message.textContent = "valid email and password entered";
    message.style.color = "green";
    console.log("Success!", { email, password: "***Hidden***" });
});
//clear message on input
signupEmail.addEventListener("input", () => message.textContent = "");
signupPassword.addEventListener("input", () => message.textContent = "");

