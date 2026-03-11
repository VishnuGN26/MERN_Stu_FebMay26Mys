const checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click",function(){
    console.log("Local storage check",typeof localStorage !=="undefined");
    console.log("session storage check",typeof sessionStorage !=="undefined");
    console.log("localStorage object",localStorage);
    console.log("sessionStorage object",sessionStorage);
    
});