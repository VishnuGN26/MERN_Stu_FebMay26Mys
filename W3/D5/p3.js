//mouse event
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover",function(){
    hoverBox.textContent= "Mouse is over me";
    hoverBox.style.backgroundColor = "lightyellow";
});
hoverBox.addEventListener("mouseout",function(){
    hoverBox.textContent= " Hover over me";
    hoverBox.style.backgroundColor = "";
});