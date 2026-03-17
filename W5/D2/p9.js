//promise states: pending,fullfilled,rejected
const fulfilledPromise = new Promise(function(resolve){
    console.log("fulfilledPromise is pending");

    setTimeout(function(){
        resolve("fulfilledPromise is fulfilled.");
    },1000);
});

const rejectedPromise = new Promise(function(resolve,rejected){
    console.log("rejectedPromise is pending");
    setTimeout(function(){
        rejected("rejectedPromise is rejected.");
    },1500);
});
fulfilledPromise.then(function(message){
    console.log(message);
});

rejectedPromise.catch(function(message){
    console.log(message);
});