//writing and readings bookings and its log
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "data");
const logsDir = path.join(dataDir, "logs");
const bookingsFile = path.join(dataDir, "bookings.json");
const logFile = path.join(logsDir, "booking.log");
const archivedLogFile = path.join(logsDir, "booking-archived.log");

function ensureDirectories() {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
}

function listDataFileSync() {
    ensureDirectories();
    return fs.readdirSync(dataDir);
}

function removeLogsDirectorySync() {
    if (fs.existsSync(logsDir)) {
        fs.rmdirSync(logsDir, { recursive: true });
    }
}

//Reading and writing of the bookings
function initializeBookingsFileSync() {
    ensureDirectories();
    if (!fs.existsSync(bookingsFile)) {
        fs.writeFileSync(bookingsFile, JSON.stringify([], null, 2), "utf-8");
    }
}

function readBookingsSync() {
    initializeBookingsFileSync();

    //Read synchronously using buffer first,then convert to string
    const bufferData = fs.readFileSync(bookingsFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");
}

function readBookingsAsync() {
    initializeBookingsFileSync();
    return new Promise((resolve, reject) => {
        fs.readFile(bookingsFile,(err, bufferData) => {
            if (err) {
                return reject(err);
            }
            try{
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[]");
                resolve(parsed);

            }
            catch(parseError){
                reject(parseError);
            }
        });
    });
}

function writeBookingsAsync(bookings){
    initializeBookingsFileSync();

    return new Promise((resolve,reject)=>{
        const jsonString = JSON.stringify(bookings,null,2);
        const buffer = Buffer.alloc(Buffer.byteLength(jsonString));
        buffer.write(jsonString);
        fs.writeFile(bookingsFile,buffer,(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Bookings file written successfully");
        });
    });
}

async function appendBookingAsync(booking){
    const bookings = await readBookingsAsync();
    bookings.push(booking);
    await writeBookingsAsync(bookings);
    return booking;
}

function appendLogAsync(message){
    ensureDirectories();
    return new Promise((resolve,reject)=>{
        const timeStamp = new Date().toISOString();
        const finalMessage = `[${timeStamp}]${message}\n`;

        fs.appendFile(logFile,finalMessage,"utf-8",(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Log appended successfully.")
        });
    });
}

function renameLogFileSync(){
    ensureDirectories();
    if(fs.existsSync(logFile)){
        fs.renameSync(logFile,archivedLogFile);
        return true;
    }
    return false;
}

function deleteArchivedLogSync(){

    if(fs.existsSync(archivedLogFile)){
        fs.unlinkSync(archivedLogFile);
        return true;
    }
    return false;
} 

module.exports = {
    dataDir,
    logsDir,
    bookingsFile,
    logFile,
    archivedLogFile,
    ensureDirectories,
    listDataFileSync,
    removeLogsDirectorySync,
    initializeBookingsFileSync,
    readBookingsAsync,
    readBookingsSync,
    writeBookingsAsync,
    writeFileSync,
    appendBookingAsync,
    renameLogFileSync,
    deleteArchivedLogSync,
    appendLogAsync
};