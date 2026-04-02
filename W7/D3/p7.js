// Protecting routes with JWT middleware and role based access
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const secretKey = "vishnu123";

const userToken = jwt.sign({ userId: 1, role: "user", email: "vishnu@email.com" }, secretKey, { expiresIn: "1h" });
console.log("Usertoken:",userToken);
const adminToken = jwt.sign({ userId: 2, role: "admin", email: "chiru@email.com" }, secretKey, { expiresIn: "1h" });
console.log("Admintoken:",adminToken);
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "authorization header is missing"
        });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });

    }
    try {
        //verify the token and attach trusted user data to the request
        req.user = jwt.verify(token, secretKey);
        next();

    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token is expired."
            });
        }
        return res.status(403).json({
            success: false,
            message: "Token is invalid."
        });
    }
}
function requireRole(role) {
    return function (req, res, next) {
        if (req.user.role != role) {
            return res.status(403).json({
                success: false,
                message: "Insufficient permission."
            });
        }
        next();
    };
}

app.get("/me",authenticateToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route accessed.",
        user:req.user
    });
});

app.get("/admin",authenticateToken,requireRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"Protected user route accessed.",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT protected route server running @ http://localhost:4000");
});