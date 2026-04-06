function initContactValidation(){
    const contactModal = document.getElementById("contact-modal");
    const contactForm = document.getElementById("contact-form");
    const contactName = document.getElementById("contact-name");
    const contactEmail = document.getElementById("contact-email");
    const formMessage = document.getElementById("form-message");

    if(!contactModal || !contactForm || !contactName || !contactEmail || !formMessage){
        console.log("Contact form elements not found");
        return;
    }
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();

        const name = contactName.value.trim();
        const email = contactEmail.value.trim();

        formMessage.textContent = "";
        formMessage.className = "text-sm";

        //Name validation
        if(name === ""){
            formMessage.textContent = "Name is required";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;
        }
        if(name.length<5){
            formMessage.textContent = "Name must be atleast 5 chars";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;

        }
        //email validation
        if(email === ""){
            formMessage.textContent = "email is required";
            formMessage.classList.add("text-red-500");
           contactEmail.focus();
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){
            formMessage.textContent = "Enter valid email";
            formMessage.classList.add("text-red-500");
            contactEmail.focus();
            return;
        }

        formMessage.textContent = "Message submitted successfully";
        formMessage.classList.add("text-green-600");
        console.log("Valid credentials:",{name:name,email:email})
        contactForm.reset();
    });

    contactName.addEventListener("input", function(){
    formMessage.textContent = "";
});

contactEmail.addEventListener("input", function(){
    formMessage.textContent = "";
});

}



//submit disable

// Get elements
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("contact-name");
const emailInput = document.getElementById("contact-email");
const message = document.getElementById("form-message");

// Submit button
const submitBtn = form.querySelector("button[type='submit']");

// Email validation
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 🔥 Your function (place HERE)
function checkFormValidity() {
    const valid =
        nameInput.value.trim().length >= 3 &&
        validateEmail(emailInput.value);

    submitBtn.disabled = !valid;
    submitBtn.classList.toggle("opacity-50", !valid);
}

// Event listeners
nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);

// Optional: run once on load
checkFormValidity();

// Form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (submitBtn.disabled) return;

    message.classList.remove("text-red-500");
    message.classList.add("text-green-500");
    message.innerText = "✅ Form submitted successfully!";

    form.reset();
    checkFormValidity(); // reset button state
});