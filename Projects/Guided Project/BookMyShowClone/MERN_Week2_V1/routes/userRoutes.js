//Fetch the bookings based on userId
const express = require("express");
const{ authMiddleware } = require("../middleware/authMiddleware");
const { bookings } = require("../controllers/bookingController");

const router = express.Router();
//get booking for a specific user id 
router.get("/:userId/bookings",authMiddleware,(req,res)=>{
    const userId = Number(req.params.userId);

    const userBookings = bookings.filter((booking) => booking.userId === userId);
    res.status(200).json({
        success: true,
        count: userBookings.length,
        data: userBookings

    });
});

module.exports = router;
