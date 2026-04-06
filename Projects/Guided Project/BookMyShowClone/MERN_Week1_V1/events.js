//This file creats and exports a custom
//EventEmitter instance 
const EventEmitter = require("events");


//custom EventEmitter object
const bookingEmitter = new EventEmitter();

module.exports = bookingEmitter;
