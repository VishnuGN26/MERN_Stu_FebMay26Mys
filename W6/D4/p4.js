//Handling differernt GET routes
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Home Page / Dashboard");
        return;
    }
    if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("About Route.Welcome to About Us page.");
        return;
    }
    if(req.method === "GET" && req.url === "/products"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("prouducts Route.Welcome to products  page.");
        return;
    }
    if(req.method === "GET" && req.url === "/users"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Returning all users.");
        return;
    }
    //POST = create 
    if(req.method === "POST" && req.url === "/users"){
        res.writeHead(201,{"content-type":"text/plain"});
        res.end("New User Created");
        return;
    }
    //unknown route callback 
    res.writeHead(404,{"content-type": "text-plain"});
    res.end("Route not found.");
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
})