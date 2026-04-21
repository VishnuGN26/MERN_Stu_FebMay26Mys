const mongoose = require("mongoose");
const seatScheman = new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true,
    },
    isBooked:{
        type:Boolean,
        default:false,

    },
},{_id:false});

const showSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.schema.Types.objectId,
        ref:"Movie",
        index:true,
    },
    date:{
        type:Date,
        required:true,
        index:true,

    },
    time:{
        type:String,
        required:true,
    },
    totalSeats:{
        type:Number,
        required:true,

    },

    availableSeats:{
        type:Number,
        required:true,
    },
    seats:{
        type:[seatSchema],
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{
    timestamps:true,
});

//compound index:
showSchema.index({movieId:1,date:1});

//Add validation
showSchema.pre("save",function(next){
    if(this.availableSeats>this.totalSeats){
        return next(new Error("Available seats cannot exceed total seats"));
    }
    next();

});
module.exports = mongoose.model("Show",showSchema);