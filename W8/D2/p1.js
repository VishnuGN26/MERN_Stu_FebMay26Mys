//virtual fileds in mongoose

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
},
{
    //this allows virtuals to appear when coverting documents 
    //to JSON or objects
    toJSON: {virtuals:true},
    toObject:{virtuals:true}
}
);
//A virtual field is not stored on MOngoDB
//It is computed dynamically from existing stored fields
userSchema.virtual("fullname").get(function(){
    return this.firstName + " " +this.lastName;
});

const User = mongoose.model("VirtualUser",userSchema);

const user = new User (
    {
    firstName: "Vishnu",
    lastName: "GN",
    email: "v@v.com"
});

console.log("Hello,",user.fullname);
console.log("Object output include virtual,",user.fullname);
