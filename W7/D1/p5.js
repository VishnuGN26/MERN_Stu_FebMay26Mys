

const express = require("express");
const app = express();
//golbal middleware runs for every request

app.use(function(req,res,next){
    console.log("Golbal middleware",req.method,req.url);
    next();
    
});
app.get("/",function(req,res){
    
  res.send("Home route");
});
app.get("/admin",function(req,res,next){
    console.log("Route specific middleware for /admin");
    next();
},function(req,res){
    res.send("Admin route reached");
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})
