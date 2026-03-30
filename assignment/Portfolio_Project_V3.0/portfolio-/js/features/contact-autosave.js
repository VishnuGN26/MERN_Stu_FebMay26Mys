
document.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");


    const savedData = localStorage.getItem("contactForm");

    if (savedData) {
        const parsedData = JSON.parse(savedData);

        nameInput.value = parsedData.name || "";
emailInput.value = parsedData.email || "";
    }

    function saveData() {
        const formData = {
            name: nameInput.value,
            email: emailInput.value
        };

        localStorage.setItem("contactForm", JSON.stringify(formData));
    }

    nameInput.addEventListener("input", saveData);
    emailInput.addEventListener("input", saveData);

});
