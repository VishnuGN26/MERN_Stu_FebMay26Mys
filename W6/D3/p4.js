//Reading &writing files asynchornously with fs/promises

const fs = require("fs/promises");
const path = require("path");

async function runPromiseBasedFileFlow(){
    const filePath = path.join(__dirname,"promsies-note.txt");
    try{
        await fs.writeFile(filePath,"written fs/promises. This works with asyn/await" );
        console.log("File written using fs/promises");
        const content = await fs.readFile(filePath,"utf-8");
        console.log(content);
        
    }
    catch(error){
        console.log("Prmoise-based fs error:",error.message);
    }
}

runPromiseBasedFileFlow(); 