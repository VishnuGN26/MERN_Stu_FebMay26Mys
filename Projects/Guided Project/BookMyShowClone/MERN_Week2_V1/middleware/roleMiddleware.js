//checks the permission for the req allows it or reject it
const CustomError = require("../utils/customError");
function roleMiddleware(...allowedRoles){
    return(req,res,next)=>{
        if(!req.user){
            return next(new CustomError("User info not found.",401));
        }
        if(!allowedRoles.includes(req.user.role)){
            return next(new CustomError("Forbidden: You do not have access to this resource",401));
        }
        next();

    };
}
module.exports = roleMiddleware;