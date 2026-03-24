//handling the error event in EventEmitter
const EventEmitter = require("events");
const fileEmitter = new EventEmitter();

//register an error listener
fileEmitter.on("error",function(errorMessage){
    console.log("Emitter handler error",errorMessage);

});
//normal event listener: happy scenario
fileEmitter.off("fileProcessed",function(fileName){
    console.log("File processed successfully",fileName);

});
fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","File processing failed.");
