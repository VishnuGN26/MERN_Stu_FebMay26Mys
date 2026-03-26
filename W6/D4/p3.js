//Inspecting request details in an http server 

const http = require("http");

const server = http.createServer(function(req1,res){
    //writeHead() sets the response status  code and headers
    res.writeHead(200,{"Content-Type1":"text/plain"});
    //end() sends the response body and closes the response 
    //req.method tells the HTTP method,such as GET & POST 
    res.end("Method:"+req1.method+"\nURL:"+req1.url);
});



server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
})