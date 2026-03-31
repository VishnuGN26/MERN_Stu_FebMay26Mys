//routing : nested route
// "/" base url
// "api/users" 
const express = require("express");
const app = express();

//"api/users"/create /delete/update /:id 

// Router objects help organize route Groups 
const apiRouter = express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route: "/api/users",
        message: "Users route inside api router"
    });
})
apiRouter.get("/orders",function(req,res){
    res.json({
        route: "/api/orders",
        message: "orders route inside api router"
    });
});

//mount the router under the /api base path
app.use("/api",apiRouter);



//NEW ROUTER
//product router(handles/api/products/..)
const productsRouter = express.Router();

///api/products -> create product
productsRouter.post("/",(req,res) => {
    res.json({
        route: "/api/products",
        message: "Create products"
    });
});

// /api/products/:id  -> delete product
productsRouter.delete("/:id",(req,res) => {
    res.json({
        route: `/api/products/${req.params.id}`,
        message: "Delete product",
    });
});

apiRouter.use("/products",productsRouter);
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
