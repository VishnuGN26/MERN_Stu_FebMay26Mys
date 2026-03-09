//try catch basics
//reference error
// const error = document.getElementById("error");
// try{
//     console.log("Trying to access undefined variable");
//     console.log(notDefined);
// }
// catch(err){
//     console.log("Error caught",err.name,"-",err.message);
//     error.textContent = "Trying to access undefind variable";
// }
// console.log("Program execution continues");

//JSON Parsing error
let jsonText = "{json}"
try{
    let data = JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log("JSON parse error",err.message);
}

try{
    let num = 10;
    num();
}
catch(err){
    console.log("Caught error:",err.message);
}
