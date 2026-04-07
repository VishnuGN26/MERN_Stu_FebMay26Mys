// Handles booking related operations
const bookingEmitter = require("./events");

let currentBooking = null;

function getCurrentBooking(){
    return currentBooking;
}

function clearCurrentBooking(){
    currentBooking = null;
}

function checkDuplicateBooking(movie,showtime, seatCount){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (
                currentBooking &&
                currentBooking.movieId === movie.id &&
                currentBooking.time === showtime.time &&
                currentBooking.seatCount === seatCount
            ) {
                return reject("Duplicate booking detected. Ticket already booked");
            }
            resolve("No Duplicate booking found.");
        }, 300);
    });
}

function checkSeatsAvailability(showtime,seatCount){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (showtime.seatsAvailable < seatCount) {
                return reject(`Only ${showtime.seatsAvailable} seat(s) are available.`);
            }
            resolve("Seats are available");
        }, 300);
    });
}

function generateBookingDetails(movie,showtime,seatCount){
    return new Promise((resolve)=>{
        setTimeout(() => {
            const booking = {
                bookingId: `BOOK-${Date.now()}`,
                movieId: movie.id,
                movieTitle: movie.title,
                time:showtime.time,
                seatCount
            };
            resolve(booking);
        }, 300);
    });
}

function confirmBooking(booking,showtime){
    return new Promise((resolve)=>{
        setTimeout(() => {
            showtime.seatsAvailable-=booking.seatCount;
            currentBooking = booking;
            bookingEmitter.emit("bookingConfirmed",booking);
            resolve(booking);
        }, 300);
    });
}

//Promise chaining
function processBooking(movie,showtime,seatCount){
    bookingEmitter.emit("bookingStarted");

    return checkDuplicateBooking(movie,showtime,seatCount)
            .then(()=>{
                bookingEmitter.emit("bookingValidated");
                return checkSeatsAvailability(showtime,seatCount);
            })
            .then(()=>generateBookingDetails(movie,showtime,seatCount))
            .then((booking)=>confirmBooking(booking,showtime))
            .catch((error)=>{
                bookingEmitter.emit("bookingfailed",error);
                throw error;
            });
}

//async/await
async function processBookingAsync(movie,showtime,seatCount){
    try{
        bookingEmitter.emit("bookingStarted");

        await checkDuplicateBooking(movie,showtime,seatCount);
        bookingEmitter.emit("bookingValidated");

        await checkSeatsAvailability(showtime,seatCount);

        const booking = await generateBookingDetails(movie,showtime,seatCount);

        const confirmedBooking = await confirmBooking(booking,showtime);
        
        return confirmedBooking;
    }
    catch(error){
        bookingEmitter.emit("bookingFailed",error);
        throw error;
    }
}

module.exports = {
    getCurrentBooking,
    clearCurrentBooking,
    processBooking,
    processBookingAsync
};
