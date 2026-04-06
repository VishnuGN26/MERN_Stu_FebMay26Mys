// Understanding path module and json module

const path = require("path");
// JSON is loaded as a normal JS object in commonJS
const appConfig = require("./support/appConfig.json");

console.log("__dirname: ",__dirname);
console.log("__filename: ",__filename);

console.log("Application name:",appConfig.appName);
console.log("environment name:",appConfig.environment);
console.log("features:",appConfig.features.join(", "));// if i use join the brackets will just vanish away