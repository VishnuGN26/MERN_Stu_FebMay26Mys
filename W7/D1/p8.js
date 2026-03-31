//Route paramter and query parameters
//Route parameters: capture dynamic values from path
//query parameters: provide optional values 
const express = require("express");
const app = express();

app.get("/products/:id",function(req,res){
    res.json({
        routeParameter: req.params.id,
        queryParameters: req.cat
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})
