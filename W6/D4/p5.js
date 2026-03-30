//Read POST request body data
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.url === "/submit" && req.method ==="POST"){
        let body = "";
        //req here is a readable stream 
        req.on("data",function(chunck){
            body+=chunck.toString();
        });
        //end executes when the full request body has been received 
req.on("end",function(){

    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Received req body data: "+body);
});
return;
    }
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Route not found.");
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});

