// setImmediate vs setTimeout
console.log("Scheduling setTimeout and setImmediate");

//callback timer
setTimeout(() => {
    console.log("Timer callback from setTimeout");
},0);

//setImmediate callback 
setImmediate(function(){
    console.log("set immediate callback executed.");
});

console.log("Both callbacks are now waiting for the event loop");
