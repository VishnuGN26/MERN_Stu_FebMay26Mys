const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerButton =document. getElementById("innerButton");

outer.addEventListener("click",function(){
console.log("Outer div clicked");

});

inner.addEventListener("click",function(){
console.log("inner div clicked");

});

innerButton.addEventListener("click",function(event){
    console.log("Inner button clicked");
    event.stopPropogation();
    console.log("Propogation stopped at button");
});
