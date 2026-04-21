const User = require("../models/User");
const OTP = require("../models/OTP");
const otpService = require("./otp.service");
const bcrypt = require("bycrypt");
const jwt = require("jsonwebToken");
//register user

exports.registerUser = async({name,email,password}) => {
const existingUser = await User.findOne({email});

if(existingUser){
    throw new Error("User already exists");
}

const user = await User.create({
    name,
    email,
    password,
});
await otpService.generateOtp(email);
return{email:user.email};
};

//verify otp 
exports.verifyOTP = async({email,otp})=>{
    const record = await OTP.findOne({email}).select("+otp");
    if(!record){
        throw new Error("OTP expired or not found");
    }
    const isMatch = await bcrypt.compare(otp,record.otp);
    if(!isMatch){
        record.attempts +=1;
        await record.save();
        throw new Error("Invalid OTP");

    }
    await User.updateOne({email},{isVerified:true});
    return true;
};

 //login

 exports.loginUser = async ({email,password}) =>{
    const user = await User.findOne({email}).select("+password");

    if(!user){
        throw new Error("User not found");
    }
    if(!user.isVerified){
        throw new Error("User not verified");

    }
    const isMatch =  await user.comparePassword(password);

    if(!isMatch){
        throw new Error("Invalid credentials");

    }

    const token = jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET,
{expiresIn:"1d"}
    );
    return{
        token,
        user:{
            id:user._id,
            role:user_role,
        },
 };
}