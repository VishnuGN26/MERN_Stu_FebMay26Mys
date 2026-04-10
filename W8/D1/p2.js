//CRUD operations in MongoDB using Mongoose
const mongoose = require("mongoose")

async function runCrudDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MangoDB connected successfully");

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        });
        const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
        //clearing previous demo data
        await Student.deleteMany({ role: "demo-student" });

        //create using save()

        const firstStudent = new Student({
            name: "Vishnu",
            age: 25,
            role: "demo-student"
        });
        await firstStudent.save();
        // console.log("Created new student with save()", firstStudent);
        //create using create()

        const secondStudent = await Student.create({
            name: "Chiru",
            age: 26,
            role: "demo-student"
        });
        // console.log("Created new student with create()", secondStudent);

        //read using find()
        const allDemoStudents = await Student.find({role:"demo-student"});
        console.log("Read with find():",allDemoStudents);

        //read using findOne()
        const oneDemoStudent = await Student.findOne({role:"Chiru"});
        console.log("Read with findOne():",oneDemoStudent);

        //update using findByIdAndUpdate()
        const UpdatedStudent = await Student.findByIdAndUpdate(
            secondStudent._id,
            
                {age:20},
                {new:true}
        );
        console.log("Updated with findByIdAndUpdate():",UpdatedStudent);

        //delete using findByIdAndDelete()
        const deletedStudent = await Student.findByIdAndDelete(firstStudent._id);
        console.log("Deleted with findByIdAndDelete():",deletedStudent);
        

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch (error) {
        console.log("Crud demo error:",error.message);
    }
}
runCrudDemo();