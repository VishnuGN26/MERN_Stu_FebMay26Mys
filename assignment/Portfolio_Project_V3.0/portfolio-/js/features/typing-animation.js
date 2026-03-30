//Typing Animation
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
