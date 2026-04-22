//Role:middleware:RABC
exports.authorize = (...roles) => (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({
            success: false,
            message: "Access denied: insufficient permission",
        });
    }
    next();
};