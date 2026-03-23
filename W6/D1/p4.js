// Usage of built-in third-party modules
// path is a built-in module, so it works without installation
const path = require("path");

const invoicePath = path.join("invoice","2026","invoice_001.txt");
console.log("Built-in module result: ",invoicePath);

// To use third-party package/module
try{
    const _ = require("lodash");
    console.log("Third-party module example");
}
catch(error){
    console.log("Third party module 'lodash' is not installed.")
}