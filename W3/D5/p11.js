const btn = document.getElementById("compareBtn");
btn.addEventListener("click",function(e){
    console.log("regular function");
    console.log("this === btn",this ===btn);
    console.log("current target === btn",e.currentTarget==btn);
    console.log("e.target == btn",e.target ===btn);
}); 

btn.addEventListener("click",(e) =>{
    console.log("arrow function");

    console.log("this === btn",this===btn);
     console.log("current target === btn",e.currentTarget==btn);
    console.log("e.target == btn",e.target ===btn);
});