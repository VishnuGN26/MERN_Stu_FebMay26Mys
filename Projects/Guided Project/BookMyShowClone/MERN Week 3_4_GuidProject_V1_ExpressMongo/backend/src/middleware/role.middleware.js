//role middleware: RBAC
exports.authorize = (...roles)=>{
    return(req,res,next)=>{
        if(!res.user || !roles.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                message:"Access denied: insufficient permission",
            });
        }
        next();
    };

};