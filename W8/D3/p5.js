//Relationship patterns
const mongoose = require('mongoose');
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        //one-to-many
        const blogSchema = new mongoose.Schema({
            title: String,
            comments: [
                {
                    text: String
                }
            ]
        })
        const Blog = mongoose.model('Blog', blogSchema);
        await Blog.deleteMany();

        const blog = await Blog.create({
            title: "Mongoose basics",
            comments: [
                { text: "Great article" },
                { text: "Helpful article" },

            ]
        });
        // console.log("embedding:");
        // console.log(await Blog.find());

        //one to many relationship(referencing)
        const postSchema = new mongoose.Schema({
            title: String
        });

        //one to many 
        const commentSchema = new mongoose.Schema({
            text: String,
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        });
        const Post = mongoose.model('Post', postSchema);
        const Comment = mongoose.model('Comment', commentSchema);

        await Post.deleteMany();
        await Comment.deleteMany();

        const post = await Post.create({ title: "NodeJS Basics" });
        await Comment.create([
            { text: "Nice post!", post: post._id },
            { text: "Good", post: post._id },

        ]);
        //  console.log("Referencing:");
        //   console.log(await Comment.find().populate('post'));
        //many to many 
        const studentSchema = new mongoose.Schema({
            name: String,
            courses: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
            ]
        })
        // Course Schema
        const courseSchema = new mongoose.Schema({
            name: String,
            students: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            }
            ]
        })


        const Student = mongoose.model("Student", studentSchema);
        const Course = mongoose.model("Course", courseSchema);

        const course1 = await Course.create({ title: "MongoDB" });
        const course2 = await Course.create({ title: "node.js" });
        const student1 = await Student.create({
            name: "Chiru",
            courses: [course1._id, course2._id]
        });
        const student2 = await Student.create({
            name: "Rohit",
            courses: [course1._id]
        });
        //update courses with students 
 course1.students.push(student1._id,student2._id);
 course2.students.push(student2._id);
 await course1.save();
 await course2.save();
 
console.log("Many-to-many:");
console.log(await Student.find().populate('courses'));
console.log(await Course.find().populate('students'));


    }
    catch (err) {
        console.error("Error:", err.message);

    }
    finally {
        await mongoose.disconnect();
        console.log("Db disconnected");
    }
}
main();