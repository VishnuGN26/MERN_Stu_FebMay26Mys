//Parsing JSON request bodies
const http = require("http");
const server = http.createServer(function (req, res) {
    if(req.method === "POST" && req.url === "/api/users"){
        let body = "";
        req.on("data",function(chunk){
            body+=chunk.toString();
        })
        req.on("end",function(){
            try{
                const parsed = JSON.parse(body);
                Response.writeHead(201,{"Content-Type": "application/json"});
                res.end(JSON.stringify({
                    success:true,
                    received:parsed
                }));
                
            }
            catch(error){
                res.writeHead(400,{"Content-Type": "application/json"});
                res.end(JSON.stringify({
                    success:false,
                    received:parsed
                }));
            
            }
        });
        return;
    }
    res.writeHead(404,{"content-type":"application/json"});
    res.end(JSON.stringify({success:false,Message:"Route not found"}));
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});
    
