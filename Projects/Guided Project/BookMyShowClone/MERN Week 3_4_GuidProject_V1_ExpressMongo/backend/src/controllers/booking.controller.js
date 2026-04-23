const bookingService = require("../services/booking.service");

//create booking
exports.createBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );
        res.status(201).json({
            success: true,
            message: "Booking confirmed.",
            data: booking,
        })
    }
    catch (error) {
        next(error);
    }
};

//get bookings
exports.getMyBookings = async (req, res, nex) => {
    try {
        const bookings = await bookingService.getUserBookings(req.user._id);
        res.status(201).json({
            success: true,
            message: "Booking confirmed.",
            data: booking,
        });
    }

    catch (error) {
        next(error);
    }
};



//cancel booking
exports.getMyBookings = async (req, res, nex) => {
    try {
        await bookingService.getUserBookings(req.params.id,req.user._id);
        res.status(201).json({
            success: true,
            message: "Booking cancelled.",
            data: bookings,
        });
    }

    catch (error) {
        next(error);
    }
};