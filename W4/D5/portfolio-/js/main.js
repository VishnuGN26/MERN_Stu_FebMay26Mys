document.addEventListener("DOMContentLoaded",function(){
    //render skills 
    renderSkills();
    initModal();
    initContactValidation();
initThemeToggle();
     renderProject(); 
     
})




// top to bottom 
const btn = document.getElementById("backToTop");

window.onscroll = () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
nameInput.addEventListener("keypress", (e) => {
    if (!/[a-zA-Z\s]/.test(e.key)) {
        e.preventDefault();
    }
});





//Typing Animation (Hero Section)
const text = "Full-Stack developer | MERN enthusiast | Competitive Programmer";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

typeEffect();