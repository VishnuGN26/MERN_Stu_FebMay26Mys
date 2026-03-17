//introduction to promises
console.log("Program created"
);
function getWelcomeMessage(){
    return  new Promise(function(reslove){
        setTimeout(() =>{
            reslove("Welcome to promises");
        },1000);
    });
}

const messagePromise=getWelcomeMessage();

console.log("Promise created.Result not ready yet.");

messagePromise.then(function(message){
    console.log(message);
});

console.log("Program contiues while the promisen is pending");