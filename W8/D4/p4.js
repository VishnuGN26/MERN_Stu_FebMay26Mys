//OTP generation using Crypto built-in module of NodeJS
const crypto = require('crypto');

function generateOTP(length = 6){
    return crypto.randomInt(0,10**length).toString().padStart(length,'0');
      
} //44
console.log("OTP: ",generateOTP());

