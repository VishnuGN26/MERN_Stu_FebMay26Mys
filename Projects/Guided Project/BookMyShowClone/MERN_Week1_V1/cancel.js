//cancel.js 
//to cancel the booking only if exits
const bookingEmitter = require("./events");
const {getCurrentBooking,clearCurrentBooking} = require("./booking");
function cancelBooking(movies){
    const booking = getCurrentBooking();
    if(!booking){
        bookingEmitter.emit("bookingFailed","No booking found to cancel.");
        return null;
    }
    const movie =  movies.find((m)=>m.id === booking.movieId);
    if(!movie){
        bookingEmitter.emit("bookingFailed","Movie data not found while cancelling booking.")
        return null;
    }

    const showtime =  movie.showtimes.find((show)=>show.time.toLowerCase()===booking.time.toLowerCase());
    if(!showtime){
        bookingEmitter.emit("bookingFailed","Showtime data not found");
        return null;
    }
    //restore seats
    showtime.seatsAvailable +=booking.seatCount;

    // clear Current Booking
    clearCurrentBooking();
    bookingEmitter.emit("bookingCancelled",booking);
    return booking;

} 
module.exports = {
    cancelBooking
};