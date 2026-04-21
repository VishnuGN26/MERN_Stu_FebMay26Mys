const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");

//generate otp
exports.generateOTP = async(email) => {
    const otp = Math.floor(100000+Math.random()*900000).toString();

    const hashedOTP = await bcrypt.hash(otp,10);

    const expiresAt = new Date(Date.now() + 5*60*1000);
    await OTP.create({
        email,
        otp:hashedOTP,
        expiresAt,
    });
    console.log("Generated OTP: ",otp);//testing only
    return otp;
}