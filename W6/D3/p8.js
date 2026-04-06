//Allocating buffers 
const emptyBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer: ",emptyBuffer);
console.log("Allocated buffer bytes:",[...emptyBuffer]);

const textBuffer = Buffer.from([65,66,67]);
console.log("Buffer from byte array:",textBuffer);

//Buffer.write() writes text into the buffer
const buffer = Buffer.alloc(20);
const bytesWritten = buffer.write("HelloWorld");
console.log("Bytes written: ",bytesWritten);

//subarry
const firstSlice = buffer.subarray(3,6);
console.log("First slice is bytes: ",[...firstSlice]);

//decode the bytes into text: toString()
console.log("Decode firstSlice of buffer:",firstSlice.toString("utf8")); //buffer.subarray(1,4)
