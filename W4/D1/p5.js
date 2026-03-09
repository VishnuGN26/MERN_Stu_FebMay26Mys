// BreakPoint
// Inspect variable values
// View the call stack
// Step through code line by line
// Evaluate expression in the console
// Watch how variables change during the execution
// To fight logical errors
// Browser
function calculateTotal(prices){
    let total = 0;
    for(let i=0;i<prices.length;i++)
    {
        let price=prices[i];
        debugger;
        total += price;
    }
    return total;
}
let cart = [100,250,150,1000,220];
console.log("Total:",calculateTotal(cart));