//reduced method //avearge
let nums = [5, 10, 15];
let average = nums.reduce((intermediateSum, current) => intermediateSum + current, 0) / nums.length;
console.log(average);

// let sumofaverage = total/num.length;
// console.log(sumofaverage);

//reduce to object count by category
let items = ["pen", "pencil", "pen", "eraser"];
let count = items.reduce((intermediateValue,item) => {
       intermediateValue[item] = (intermediateValue[item] || 0) + 1;
    return intermediateValue;
}, {});
console.log("Item count: ", count);
