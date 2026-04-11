// Applied filters to the query using comparison operators

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,
            status: String
        }); 

const Product = mongoose.models.Product || mongoose.model("Product",productSchema);

async function runFilterDemo(){
    try{
        
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        await Product.create([
            {name: "nike shoes",
            price: 4000,
            category: "shoes",
            status: "active"},
            {name: "puma shirts",
            price: 4000,
            category: "clothes",
            status: "inactive"},
            {name: "Laptop",
            price: 60000,
            category: "Electronics",
            status: "active"},
            {name: "CD",
            price: 50,
            category: "Electronics",
            status: "inactive"}
        ]);

        // const productSchema = new mongoose.Schema({
        //     name: String,
        //     price: Number,
        //     category: String,
        //     status: String
        // }); 

        // const Product = mongoose.models.Product || mongoose.model("Product",productSchema);

        const equalQuery = await Product.find({status:{$eq:"active"}});
        // console.log("Products which are active:",equalQuery);

        const greaterQuery = await Product.find({price:{$gt:5000}});
        console.log("Products which are priced more than 5k:",greaterQuery);

        const lesserQuery = await Product.find({price:{$lt:5000}});
        console.log("Products which are priced less than 5k:",lesserQuery);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch(error){
        console.log("Filter demo error:",error.message);
    }
}
// runFilterDemo();

module.exports = Product;