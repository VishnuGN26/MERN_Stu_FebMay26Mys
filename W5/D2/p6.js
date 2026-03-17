//callback nesting 
console.log("Starting nested callback flow");

setTimeout(function(){
    console.log("Step1: user loaded");

    setTimeout(function(){
        console.log("Step 2: orders loaded");

        setTimeout(function(){
            console.log("Step 3: Payment loaded.");

            setTimeout(function(){
                console.log("Step 4: Shipment loaded.");
                console.log("We are in callback hell!!!");
            },1000);
        },8000);
    },600);
},400);