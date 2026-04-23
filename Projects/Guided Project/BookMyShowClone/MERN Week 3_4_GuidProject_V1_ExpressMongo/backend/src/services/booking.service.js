const Booking = require("../models/Booking");
const Show = require("../models/Show");

//create booking
exports.createBooking = async (userId,{showId,seats}) => { 
    //Get show 
    const show = await Show.findById(showId);

    if(!show){
        throw new Error("Show not found");
    }
    //2.validate the seats
    const selectedSeats = show.seats.filter((seat)=>
    seats.includes(seat.seatNumber));
    if(selectedSeats.length!=seats.length) {
        throw new Error("seats do not exists");

    }
    //3 check if already booked 
    for(let seat of selectedSeats){
        if(seat.isBooked){
            throw new Error(`Seat ${seat.seatNumber} is already booked`);
        }
    }
 
    //4.mark seats as booked 

    show.seats = show.seats.map((seat)=>{
        if(seats.includes(seat.seatNumber)){
            seat.isBooked = true;
        }

        return seat;
    });

    //5.update available seats 
    show.availableSeats -=seats.length;

    await show.save();

    //6.create booking 
    const booking = await Booking.create({
        userId,showId,seats,totalSeats: seats.length,
    });
    return booking;
};

//get user bookings
exports.getUserBookings = async (userId) => {
    const bookings = await Booking.find({
        userId,
        status:"booked",
    })
    .populate({
        path:"showId",
        select:"date time availableSeats movieId",
        populate:{
            path:"movieId",
            select:"title genre",
        },
    })
    .sort("-createdAt");

    //Transform response

    return bookings.map((bookings)=>({
        bookingId: booking._id,
        seats:booking.seats,
        totalSeats:booking.totalSeats,
        status:booking.status,
        bookingTime:booking.bookingTime,

        show:{
            id:booking.showId._id,
            date:booking.showId.date,
            time:booking.showId.time,
            availableSeats:booking.showId.availableSeats,
        },
        movie:{
            id:booking.showId.movieId._id,
            title:booking.showId.movieId._title,
           genre: booking.showId.movieId._id.genre,
        },

    }));

};


//cancel booking
exports.cancelBooking = async(bookingId,userId) => {

    const booking = await Booking .findById(bookingId);
    if(!booking)
        throw new Error("Booking not found");

        if(booking.userId.toString()!==userId.toString()){
            throw new Error("authorized");
        }
if(booking.status=="cancelled"){
    throw new Error("Already cancelled.");
}
        
//1.get show
const show = await Show.findById(booking.showId);
//2.release seats
show.seats = show.seats.map((seats)=>{
    if(booking.seats.includes(seat.seatNumber)){
        seat.isBooked = false;

    }
            return seat;
});
//3 update the availabilithy seats
show.availableSeats +=booking.seats.length;
await show.save();


//4.update the booking 
booking.status = "cancelled";
await booking.save();


}
    