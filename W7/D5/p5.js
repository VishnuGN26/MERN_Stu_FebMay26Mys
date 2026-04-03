//Assigning roles to users and restricting access


const express = require("express");
const app = express();

app.use(function(req,res,next){
    req.user = {
        id:101,
        username: "Vishnu",
        role:"admin" //user or admin

    };
    next();
});

function requireRole(role){
    return function(req,res,next){

    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: "Authentication required."

        });
    }
    if(req.user.role!==role){
       return res.status(403).json({
            success: false,
            message: "Insufficient permissions"

        });
    }
    next();
}
}

app.get("/profile", function (req, res) {
    res.json({
        success:true,
        message: "Profile Page",
        user: req.user
    })


})
app.get("/admin", requireRole("admin"),function(req, res) {
    res.json({
        success:true,
        message: "Admin Page",
        user: req.user
    });


});

app.listen(4000, function () {
    console.log("Express-session demo server running @ http://localhost:4000");
});
