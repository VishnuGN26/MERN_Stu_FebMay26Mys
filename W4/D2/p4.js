const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const inspectBTn = document.getElementById("inspectBtn");
const terms = document.getElementById("terms");
const country = document.getElementById("country");

inspectBTn.addEventListener("click", function () {
    console.log("Form: ", studentForm);
    console.log("Name: ", nameInput.value);
    console.log("Email: ", emailInput.value);
    const selectedGender = document.querySelector('input[name ="gender"]:checked');
    console.log("Gender: ", selectedGender ? selectedGender.value : "Not selected");
    console.log("Accepted terms: ", terms.checked);
    console.log("Country: ",country.value);
   
});