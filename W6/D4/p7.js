//Parsing query parameters 
const http = require("http");
const {URL} = require("url");

const server = http.createServer(function (req, res) {
    const fullUrl = new URL(req.url, "http://localhost:3001");
    if (req.method == "GET" && fullUrl.pathname === "/search") {
        const term = fullUrl.searchParams.get("term");
        const page = fullUrl.searchParams.get("page");
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({
            route:"/search",
            term:term,
            page:page

        }))
        return;
        
    }
    res.writeHead(404,{"content-type":"application/json"});
    res.end(JSON.stringify({success:false,Message:"Route not found"}));
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});