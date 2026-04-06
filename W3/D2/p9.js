//Immediately Invoked function expression(IIFE)
//withoutparameter
(function(){
    console.log("Basic IIFE executed Immediately");
})();
//with parameter
(function(appName,version){
    console.log("App:",appName,"Version:",version);
})("NodeJs","V22.22.0");

//with return values
const result = (function(){
    const a = 10, b = 20;
    return a+b;
})();
console.log("Sum is: ",result);