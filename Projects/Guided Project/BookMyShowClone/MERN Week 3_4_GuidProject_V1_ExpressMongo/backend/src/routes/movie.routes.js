const express = require("express");

const router = express.Router();

const{protect} = require("../middleware/auth.middleware");
const{authorize} = require("../middleware/role.middleware");

//Public router
router.get("/",(req,res)=>{
    res.send("Get Movies");
});

//Admin only route
router.post("/",protect,authorize("admin"),(req,res)=>{
    res.send("Create movie");

});
module.exports = router;