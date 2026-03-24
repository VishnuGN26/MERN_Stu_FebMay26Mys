//process.nextTick,promise microtask and timer
console.log("1.Start of Script");

//process.nextTick schedules a callback to run soon after
//the current synchronous code completes.
process.nextTick(function(){
    console.log("3.process.nextTick callback executed.");
});

//promise microtask runs after nextTick in NodeJS
Promise.resolve().then(function(){
    console.log("4.Promise microtask executed.");
});

//callback timer runs later
setTimeout(() =>{
    console.log("5. Timer callback executed.");
},0);
console.log("2.End of script");