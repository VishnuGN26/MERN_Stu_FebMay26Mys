//Indexing for performance improvement 
const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    email:{type:String,index:true},
    username:{type:String,unique:true},
    role:String,
    createdAt: Date
});

//compound index
//Query filter by role and sort by createdAt 
employeeSchema.index({role:1,createdAt: -1});

const Emplyoee = mongoose.model("IndexedEmplyoee",employeeSchema);
console.log("Compound index: ");
console.log("{role:1,createdAt:-1}");

