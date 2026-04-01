//handling asynchronous error with async/await
const express = require("express");
const app = express();

function loadUserProfile() {
    return Promise.reject(new Error("User profile can't be loaded"));
}

app.get("/async-fail",async function (req, res, next) {
    try {
        const profile = await loadUserProfile();
        res.json(profile);

    }
    catch (error) {
        next(error);
    }

});
//centralized handling middleware
app.use(function(error,req,res,next){
    res.status(404).json({
        success:false,
        message:"Async/Await error  handled centrally"
    //    originalmessage: error.message
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});