const input = document.getElementById("nameInput");
const display = document.getElementById("display");

input.addEventListener("keydown",function(event){
    console.log("key pressed:",event.key);
    display.textContent ="Last key pressed: "+event.key;
});

