//Renaming deleting and checking the file existence 

const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname,"draft-report.txt");
const renamedPath = path.join(__dirname,"final-report.txt");

fs.writeFileSync(originalPath,"Draft report content");
console.log("Does draft-report.txt exists?",fs.existsSync(originalPath));

//Rename a file
fs.renameSync(originalPath,renamedPath);
console.log("Does draft-report.txt exists?",fs.existsSync(originalPath));

//delete a file 
fs.unlinkSync(renamedPath);
console.log("Does final-report.txt exits?",fs.existsSync(renamedPath));

