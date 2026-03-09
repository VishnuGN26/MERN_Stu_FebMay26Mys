const clickBtn = document.getElementById("clickBtn");
const demoInput =document.getElementById("demoInput");
const runClick =document.getElementById("runClick");
const runMouseover =document.getElementById("runMouseover");
const runkeydown =document.getElementById("runkeydown");
const runDuplicate=document.getElementById("runDuplicate");
const hoverBox = document.getElementById("hoverBox");
clickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event",e instanceof MouseEvent);
});

demoInput.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
        console.log("Enter key down");
    }
});

runClick.addEventListener("click",function(){
    clickBtn.click();
});

runMouseover.addEventListener("click",function(){
    hoverBox.dispatchEvent(new MouseEvent("mouseover"));
    console.log("Dispatching mouseEvent");
});
hoverBox.addEventListener("mouseover",function(){
    console.log("Programmatically triggered mouseover");

});
runkeydown.addEventListener("click",function(){
    demoInput.dispatchEvent(new KeyboardEvent("keydown",{key: "Enter"}

    ));
});

runDuplicate.addEventListener("click",function(){
    const temp = document.createElement("button");
    document.body.appendChild(temp);
    temp.innerHTML = "chiru";
});