//callback handling with name function
function loadUser(next){
    setTimeout(function () {
        console.log("Step 1: User loaded.");
        next();
        
    },400);
}
    function loadOrders(next){
        setTimeout(function(){
            console.log("Step 2: Orders loaded");
            next();
        },400);
    }
    function loadPayments(next){
        setTimeout(function(){
            console.log("Step 3: payments loaded.");
            next();
        },400);
    }
       function loadShipment(){
        setTimeout(function(){
            console.log("Step 4: shipment loaded.");
            console.log("Same flow but easier to read");
        },400);
       } 
       loadUser(function(){
        loadOrders(function(){
            loadPayments(function(){
                loadShipment();
            });
        });
       });
    

