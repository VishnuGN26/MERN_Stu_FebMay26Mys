//connecting to MongoDb to NodeJS using mongoose and defining schema and modle
const mongoose = require("mongoose");
async function main(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MangoDB connected successfully");

        const userSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        });

        const user = mongoose.model("User",userSchema);
        console.log("mongoose schema & model created successfully");
        console.log("Model name:",user.modelName);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("Failed to connect to DB",error.message);
    }
}


main();