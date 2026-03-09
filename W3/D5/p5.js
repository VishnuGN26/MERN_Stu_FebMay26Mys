const startBtn = document.getElementById("startBtn");
const removeBtn = document.getElementById("removeBtn");

function handleClick(){
    console.log("startBtn clicked");
}

startBtn.addEventListener("click",handleClick);

removeBtn.addEventListener("click",function(){
    startBtn.removeEventListener("click",handleClick);
    console.log("click listener removed from startBtn");
});