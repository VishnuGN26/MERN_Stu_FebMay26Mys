const authService = require("../services/auth.service");
//register 
exports.register = async(req,res,next)=>{
    try{
        const result = await authService.registerUser(req.body);
        res.status(201).json({
            success:true,
            message:"User registered.OTP sent.",
            data:result,
        });
    }
    catch(error){
        next(error);
    }
};

//verify otp

exports.verifyOTP = async(req,res,next)=>{
    try{
            await authService.verifyOTP(req.body);
            res.status(200).json({
                success:true,
                message:"OTP verified successfully",

            });
    }
    catch(error){
        next(error);
    }
};

//Login
exports.login = async(req,res,next) => {
    try{
        const result = await authService.loginUser(req.body);
        res.status(200).json({
            success:true,
            message:"login Successful",
            data:result,
        })

    }
    catch(error){
        next(error);
    }
};