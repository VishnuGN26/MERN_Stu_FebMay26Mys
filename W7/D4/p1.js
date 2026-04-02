//Basics of cookies 
const express = require("express");
const app = express();

app.get("/set-theme",function(req,res){
    //res.cookie() tells the browser to store a cookie 
    res.cookie("theme","dark");

    res.send("Cookie named 'theme' with value 'dark' was sent to the browser");

});
app.listen(4001, function () {
    console.log("JWT demo server running @ http://localhost:4001");
});