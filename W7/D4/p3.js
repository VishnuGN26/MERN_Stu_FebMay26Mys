//Secure cookies with httponly and secure flags
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());       
app.get("/set-session",function(req,res){
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie ("sessionId","demo-session-123",{
        httpOnly: true,
        secure: isProduction,
        maxAge: 30*60*1000
    });
    res.send("Session cookie set with httpOnly & environment secure flag")
});

app.get("/read-session",function(req,res){
    res.json({
        message: "Server can read the cookie value from the request",sessionId:req.cookies.sessionId ||
        "No session cookie found"
    });
});
app.listen(4001, function () {
    console.log("Server running @ http://localhost:4001");
});