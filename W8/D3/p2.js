// Pre-save and post-save hooks in mongo
const mongoose = require("mongoose");

async function runSaveHookDemo(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");

        const articleSchema = new mongoose.Schema({
            title:String,
            category:String,
            tag:String
        });
        articleSchema.pre("save",function(){
            this.title = this.title.trim();
            console.log("pre-save hook: title normalized before save");
        });
        articleSchema.post("save",function(doc){
            console.log("post-save hook: document save with title",doc.title);
        });
        const Article = mongoose.models.HookArticle ||
        mongoose.model("HookArticle",articleSchema);

        const article = new Article({
            title:"     Understanding Hooks in mongoose    ",
            category: "database",
            tag: "save-hook-demo"
        });

        await article.save();

        await mongoose.connection.close();
        console.log("Connnection closed");
    }catch(erro){
        console.log("Save hook demo error:",error.message);
    }
}
runSaveHookDemo();