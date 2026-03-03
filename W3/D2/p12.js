//Higher order function
//1.A Function which takes another function as parameter
//or
//2.A function returns a another function
function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}
let double = createMultiplier(2);
console.log("double(10): ",double(10));
let triple = createMultiplier(3);
console.log("triple(30): ",triple(30)); 