//Basics of ExpressJs -setup
//npm init -y 
//npm install express


//import module of express
const express = require("express");
//calling express() creates the main application object
//this object is used to register routes and middleware
const app = express();
//app.get() handles GET requests for sepcific path
app.get("/",function(req,res){
    //res.send() sends a response body and ends the request automatically
  res.send("Hello from express server");
});
//listen() starts the server on a chosen port number 
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})
