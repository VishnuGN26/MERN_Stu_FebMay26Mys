//Directory(folder) opertaions: mkdir,readdir and rmdir/rm
const fs = require("fs");
const path = require("path");

const demoDir = path.join(__dirname,"demo-folder");
fs.mkdirSync(demoDir,{recursive:true});

fs.writeFileSync(path.join(demoDir,"File1.txt"),"File1 content");
fs.writeFileSync(path.join(demoDir,"File2.txt"),"File2 content");

//To check folder cotents
const entries = fs.readdirSync(demoDir);
console.log("Directory contents:",entries);

//delete folder
fs.rmSync(demoDir,{recursive:true, force:true});
console.log("Directoru exits?",fs.existsSync(demoDir));
