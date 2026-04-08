
//Generic error handler is created
function errorMiddleware(err,req,res,next){
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success:false,
        message: err.message || "Internal server error"
    });

}
module.exports = errorMiddleware;