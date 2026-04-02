//JWT flow with login,refresh-style logic and secure verification

const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secretKey = "Mysecretkey";
const refreshSecretKey = "MyNewsecretkey";

//in-memory storage for refresh token
const refreshTokens = [];

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });

    }
    try {
        req.user = jwt.verify(token, secretKey, {
            algorithms: ["HS256"],
            issuer: "jwt-example"
        });
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token expired"
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access token is invalid"
        });
    }
}
app.post("/login", function (req, res) {
    const { email, password } = req.body;
    if (email !== "email@email.com" || password !== "pass@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        });
    }
    const accessToken = jwt.sign({
        userId: 101,
        email: email,
        role: "member"

    }, secretKey, {
        expiresIn: "10m",
        algorithm: "HS256",
        issuer: "jwt-example"
    }
    );
    const refreshToken = jwt.sign({
        userId: 101,
        email: email,
    }, refreshSecretKey, {
        expiresIn: "10d", //d:days m:mins h:hour
        algorithm: "HS256",
        issuer: "jwt-example"
    });

    refreshTokens.push(refreshToken);
    res.json({
        success: true,
        message: " login successful",
        accessToken: accessToken,
        refreshToken: refreshToken

    });
});
app.post("/refresh", function (req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            success: false,
            message: "Refresh token is missing  or invalid"
        });
    }
    try {
        const decoded = jwt.verify(refreshToken, refreshSecretKey, {
            algorithms: ["HS256"],
            issuer: "jwt-example"
        });

        const newAcesssToken = jwt.sign(
            {
                userId: decoded.userId,
                email: decoded.email,
                role: "member"
            }, secretKey,
            {
                expiresIn: "15m",
                algorithm: "HS256",
                issuer: "jwt-example"

            });
        res.json({
            success: true,
            accessToken: newAcesssToken

        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Refresh token verification failed"
        });
    }
});
app.get("/me", authenticateAccessToken, function (req, res) {
    res.json({
        success: true,
        message: "Protected user route",
        user: req.user
    });
});


app.listen(4001, function () {
    console.log("JWT demo server running @ http://localhost:4001");
});