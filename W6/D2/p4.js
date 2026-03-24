//using EventEmitter class
const EventEmitter = require("events");

// create a new event emitter instance
//This object can publish event and allow listener to subscribe
const orderEmitter = new EventEmitter();

// register a listener for the "orderPlaced" event.
//whenever the event is emitted,the function will execute
//once register a listener that automatically removes itself after running for the first time
orderEmitter.once("OrderPlaced", // EXECUTE ONLY ONCE
    function(orderId,customerName,orderValue){

        console.log("Hello",customerName)
        console.log("Bill amount",orderValue);
        console.log("Hello,Vishnu Waiting for restaurant to accept order",orderId);

    }
 );
 orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Restaurant accepted order",orderId);

    }
 );
 
 orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        
        console.log("Hello",customerName);
        console.log("Assigning delivery partner",orderId);

    }
 );
 orderEmitter.on("OrderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Chiru is delivering your order.",orderId);

    }
 );

 //emit the event with extra data
 //the listener receives the orderId value.
orderEmitter.emit("OrderPlaced","ORD-2403001","Vishnu",10000);
orderEmitter.emit("OrderPlaced","ORD-2403001","Vishnu",10000);  


