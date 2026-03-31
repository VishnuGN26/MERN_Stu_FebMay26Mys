//vuilt in middleware
const express = require("express");
const app = express();

app.use(express.json());
//express.urlencoded() parse form-style data
//extended: false is a beginner friendly config
app.use(express.urlencoded({ extened: false }));

app.post("/api/users", function (req, res) {
    res.status(201).json({
        sucess:true,
        parseBody: req.body
    });
});


app.post("/form", function (req, res) {
    res.json({
        sucess:true,
        formData: req.body
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})

