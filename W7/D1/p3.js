//handling different HTTP methods in express 
const express = require("express");
const app = express();
app.get("/users",function(req,res){
    //To read
res.status(200).json([{message:"success"},
    {id:1,name:"Vishnu"},
    {id:2,name:"Chiru"},
    {id:3,name:"Rohit"}

  ]);
//   res.send("Returning all users");
  

});

//to create
app.post("/users",function(req,res){
    //res.status() sets the HTTP status code before 

    res.status(201).send("User created.")
})
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
})
