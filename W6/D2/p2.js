//  How js handles asynchronous tasks in NodeJS
function fetchReport(callback){
    console.log("Fetching report data...");

    setTimeout(() => {
        const report = "Monthly report is ready";
        callback(report);
    },1000);
}

fetchReport(function(reportMessage){
    console.log(reportMessage);
});

console.log("Application continues to execute further");