
// //array map
// let numArray = [1,2,3,4];
// let squared = numArray.map(num => num*num);
// console.log(squared);

// let prices = [100,200,300,400];
// let priceWithGST = prices.map(price => price + price*0.18);
// console.log("Price w/o tax",prices);
// console.log("Price with tax",priceWithGST);
// let prices = [100,200,300,400];
// let priceWithGST = prices.map(price => price + price*0.18);
// console.log("Price w/o tax",prices);
// console.log("Price with tax",priceWithGST);

//using  map to extract files
let users = [
    { name:"Vishnu", age: 25},
    {name:"Chiru", age:27}
];
let names = users.map(user => user.name);
console.log("",names);

