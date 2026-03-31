//middleware usage in express
//middleware runs during request-response cycle
//middleware can inspect or change the request before 
//a route response
//next() passes control to the next step
const express = require("express");
const app = express();

//app.use registers middleware.
//this middleware runs for every incoming request.
app.use(function(req,res,next){
    console.log("Request received",req.method,req.url);
    next();
    //next() is required when this middleware does not finish 
    //the response
});
app.get("/",function(req,res){
    
  res.send("Middleware exceuted before the route");
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})
