const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,
    },
    showId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Show",
        required: true,
        index: true

    },
    seats:{
        type:[String],
        required:true,
    },
    totalSeats:{
        type:Number,
        require:true,
    },
    status:{
        type:String,
        enum:["booked","cancelled"],
        default:"booked",
        index:true,
    },
    bookingTime:{
        type:Date,
        default:Date.now(),
    },
},
{
    timestamps:true,
});

//Add validatiobn
bookingSchema.pre("save",function(next){
    if(this.seats.length === 0){
        return next(new Error("At least one seat must be selected"));
    }
    if(this.totalSeats!=this.seats.length){
        return next(new Error("Seat count mission"));
    }
    next();
});

//compound index 
bookingSchema.index({userId:1,showId:1});
module.exports = mongoose.model("Booking",bookingSchema);