// Does the ticket booking
const movies = require("../data/movies");
const CustomError = require("../utils/customError");

const bookings = [];

function bookingValidationHandler(req,res,next){
    const {movieId,showtimeId,seatCount} = req.body;

    if(!movieId || !showtimeId || !seatCount){
        return next(new CustomError("movieId,showtimeId,seatCount are required",404));
    }
    next();
}

function createBooking(req,res,next){
    try{
        const {movieId,showtimeId,seatCount} = req.body;

        const movie = movies.find((m)=>m.id === Number(movieId));
        if(!movie){
            return next(new CustomError("Movie not found",404));
        }

        const showtime = movie.showtimes.find((s)=>s.id === Number(showtimeId));
        if(!showtime){
            return next(new CustomError("Showtime not found",404));
        }

        if(showtime.seatsAvailable<Number(seatCount)){
            return next(new CustomError("Not enough seats available",404));
        }

        showtime.seatsAvailable-=Number(seatCount);

        const booking = {
            id: bookings.length+1,
            userId: req.user.id,
            userName: req.user.name,
            movieId: movie.id,
            movieTitle: movie.title,
            showtimeId: showtime.id,
            showtime: showtime.time,
            seatCount: Number(seatCount)
        };
        bookings.push(booking);

        res.status(201).json({
            success: true,
            message: "Booking created successfully.",
            data: booking
        });
    }
    catch(error){
        next(error);
    }
}

function getAllBookings(req,res,next){
    try{
        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    }
    catch(error){
        next(error);
    }
}

function getMyBookings(req,res,next){
    try{
        const userBookings = bookings.filter((booking)=>booking.userId === req.user.id);
        res.status(200).json({
            success: true,
            count: userBookings.length,
            data: userBookings
        });
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    bookingValidationHandler,
    createBooking,
    getAllBookings,
    getMyBookings
};