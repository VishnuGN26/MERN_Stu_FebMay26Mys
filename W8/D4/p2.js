//Timestamp and advanced queries
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/dateb');
        console.log("MongoDB connected");

        const demoSchema = new mongoose.Schema(
            {
                name: String,
            },
            { timestamps: true }
        );

        const Model = mongoose.model('LogTime', demoSchema);


        //await Model.deleteMany();


        // const docs = await Model.create([
        //     { name: "Chiru" },
        //     { name: "Vishnu" },
        //     { name: "Jeevan" }
        // ]);

        const recent = await Model.find({
            createdAt: {
                $gte: new Date(Date.now() -15000000000)
            }
        }).sort({createdAt:-1});
                    console.log("Recentdata",recent);
                     

    }


    


        // console.log("Inserted Documents:");
        // console.log(docs);

     catch (err) {
        console.error("Error:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("DB disconnected");
    }
}

main();