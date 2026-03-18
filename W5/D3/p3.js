//handling  errors using try and catch block

function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;
        if(isServiceAvailable){
            resolve("Success! Customer profile loaded.");
        }
      else{
            reject("Unsuccessfull!! Customer profile unavailable.");
        }
    });
}
async function showCustomerProfile(){
    try{
    const message = await loadCustomerProfile();
    console.log(message);
    }
    catch(error){
        console.error("Error:",error);
    }
}
 showCustomerProfile();
