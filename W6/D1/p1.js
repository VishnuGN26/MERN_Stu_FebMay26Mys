// Basics of NodeJS modules
const moduleTitle = "NodeJS module basics";
function describeModule(){
    console.log("This file is its own module");
    console.log("TItle: ",moduleTitle);
    console.log("Local values stay inside this file unless exported");
}
describeModule();//invoking the function node