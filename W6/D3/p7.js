//Introduction to buffers in NodeJS
//A Buffer stores raw bytes 
//here we create buffer directly from a string
const textBuffer = Buffer.from("B");

console.log("Buffer object:", textBuffer);
console.log("Buffer length in bytes:", textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);
console.log("Byte at index 0",textBuffer[1]);

//each character is stored internally as byte data
//for standard ASCII letters there will be equilavent code 
//buffer stores numeric values between 0 to 255