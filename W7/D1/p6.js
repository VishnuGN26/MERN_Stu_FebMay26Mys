//sending JSON response to express
const express = require("express");
const app = express();
app.get("/api/status",function(req,res){
    //res.JSON() automatically serailizes the object and sets the JSON content
    res.json({
        success:true,
        message:"Express API  is working"
    });
});
app.get("/api/error",function(req,res){
    //res.JSON() automatically serrailizes the object and sets the JSON content
    res.status(404).json({
        success:false,
        message:"request resource is not found"
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})
