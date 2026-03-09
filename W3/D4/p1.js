//Array basics
console.log("Array basics");
//creating arryas
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name: "Gola"},[5,6]];
console.log(mixedArray);
console.log(numArray);
console.log(emptyArray);

//using constructor
let fruits = new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//push
fruits.push("cherry");
console.log(fruits);

//pop:remove
fruits.pop();
console.log(fruits);

//unshift : adds to beginning
fruits.unshift("orange");
console.log(fruits);

//shift :remove beginning
fruits.shift();
console.log(fruits);