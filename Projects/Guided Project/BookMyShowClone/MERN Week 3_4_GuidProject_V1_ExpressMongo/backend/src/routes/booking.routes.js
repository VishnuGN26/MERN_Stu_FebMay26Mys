const express = require("express");

const router = express.Router();

const{protect} = require("../middleware/auth.middleware");
//user booking route
router.post("/".protect,(req,res)=>{
    res.send("create booking");
});