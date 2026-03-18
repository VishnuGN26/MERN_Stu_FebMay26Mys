//introduction to asyn/await
function getMessage(){
    return new Promise(function (solve) {
        setTimeout(() => {
            solve("Asyn/await makes promise based code to easier to read");
        },1000);
        
    });
}

async function showMessage(){
    console.log("Loading message...");
    const message = await getMessage();
    console.log(message);
}
showMessage();