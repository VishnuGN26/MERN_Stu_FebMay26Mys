//Basic callback variations
// 1.a callback with no input data
// 2.a callback that receives data from main function

function runTask(callback){
    console.log("Task is running.");
    callback();
}

function runTaskWithResult(taskName,callback){
    console.log("Processing task: ",taskName);
    callback("Task"+taskName+"finished successfully.");
}
function showSimpleDoneMessage(){
    console.log("Simple callback executed");
}

function showDetailedMessage(message){
    console.log(message);
}

//runTask(showSimpleDoneMessage);
runTaskWithResult("Send monthly report",showDetailedMessage);