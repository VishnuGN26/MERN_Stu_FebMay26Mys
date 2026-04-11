// Sorting, limiting and Pagination

const mongoose = require("mongoose");
const Product = require("./p3"); //importing from P3.js

async function sortPaginationDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const sortedAscending = await Product.find({category: "Electronics"}).sort({price:1});
        console.log(sortedAscending);

        const sortedDecscending = await Product.find({category: "Electronics"}).sort({price:-1});
        console.log(sortedDecscending);

        //limit() retricts result count
        const limitedResults = await Product.find({category: "Stationary"}).sort({createdOrder:1}).limit(2);
        console.log("Limited Results:",limitedResults);

        //Pagination
        const page = 2;
        const limitCount = 2;
        const skipCount = (page-1)*limitCount;

        const paginatedResults = await Product.find({category: "Stationary"}).sort({createdOrder:1})
                                .skip(skipCount).limit(limitCount);

        console.log("Pagination results: ",paginatedResults);


        await mongoose.connection.close();
        console.log("connection closed");
    }
     catch(error){
        console.log("sort_Pagination demo error:",error.message);
    }
}
sortPaginationDemo();