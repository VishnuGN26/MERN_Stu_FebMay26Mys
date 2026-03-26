//creating simple http server 
const http = require("http");

//createServer(): create http server instance
//accpets a callback to important objects
//1.req : incoming request details
//2.res : outgoing response control 

const server = http.createServer(function(req1,res){
    //writeHead() sets the response status  code and headers
    res.writeHead(200,{"Content-Type1":"text/plain"});
    //end() sends the response body and closes the response 
    res.end("Hello from NodeJS HTTP server.");
});
//listen() binds the server to a port and starts accepting
//starts accepting requests
server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
})

//port nos:
// 0-1023: system ports
//1024-49151: "Register ports"
//27017: mongoDB 3000/3001

