//microtasks and macrotasks in nodeJS
 console.log("1.Synchronous start.");

//  //promise.resolve(...).then(...) schedule a microtask
//  Promise.resolve().then(function(){
//     console.log("3.Promise microtask executed.");

//  });
 //setTimeout(...,0) schedules task for a later time.
 //even with 0 delay,it doesnt interrupt current sync code
 setTimeout(() =>{
    console.log("4.Timer callback executed.");
 },0);
 
 //promise.resolve(...).then(...) schedule a microtask
 Promise.resolve().then(function(){
    console.log("3.Promise microtask executed.");

 });
 console.log("2.Synchronous end.");