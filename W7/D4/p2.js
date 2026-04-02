//setting and reading cookies
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
//cookie parser reads the cookie request header and places the parsed value into req.cookies
app.use(cookieParser());        

app.get("/set-language", function (req, res) {
    res.cookie("language", "english", {
        maxAge: 60 * 60 * 1000
    });
    res.send("language cookie set to 'english'");
});

app.get("/read-language", function (req, res) {
    const language = req.cookies.language;

    res.json({
        message: "Cookie read from request.",
        language: language || "No language cookie found"
    });
});

app.listen(4001, function () {
    console.log("Server running @ http://localhost:4001");
});