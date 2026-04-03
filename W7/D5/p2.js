//Managing sessions with express-session
const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({secret:"MYSecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*1000
    }
    }));

    app.get("/login",function(req,res){

       //get data after login
        req.session.user={
            id:201,
            username:"Vishnu",
            role:"student"
        };
        res.send("Session details stored after login.");
    });

    app.get("/profile",function(req,res){
        if(!req.session.user){
            return res.status(401).json({
                success:false,
                message:"No active login session found."

            });
        }
        res.json({
            success:true,
            sessionUser:req.session.user
        });
    });
    app.listen(4000, function () {
    console.log("Express-session demo server running @ http://localhost:4000");
});