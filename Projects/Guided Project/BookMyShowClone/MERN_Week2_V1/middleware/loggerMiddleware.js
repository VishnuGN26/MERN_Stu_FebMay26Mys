//Middleware for req log 
function loggerMiddleware(req,res,next){
        console.log(`${req.method} ${req.originalUrl}`);
        next();
} 
module.exports = loggerMiddleware;
//Task: write the log  to a file along with timestamp with both req &res 