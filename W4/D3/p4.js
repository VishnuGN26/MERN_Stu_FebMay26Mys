const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",
    function () {
        const user = {
            id: 101,
            name: "vishnu",
            role: "Full stack developer",
            skills: ["HTML", "CSS", "JS"]
        };
        localStorage.setItem("userProfile", JSON.stringify(user));
        jsonOutput.textContent = "user object saved as string to localStorage";
    }
); 
document.getElementById("readBtn").addEventListener("click", function () {
    const up = localStorage.getItem("userProfile");
    console.log(JSON.parse(up));
    console.log(up);
    jsonOutput.textContent = "userProfile" +up;
   });