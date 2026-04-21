const express = require("express");
const rounter = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyOTP } = require("../services/auth.service");

//Routes
router.post("/register",authController.register);
router.post("/verify-otp",authController,verifyOTP);
router.post("/login",authController.login);

module.exports = router;
