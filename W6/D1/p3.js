// Using a custom commonJS module
const { caluclateTax, applyDiscount, formatCurrency } = require("./p2");

const itemPrice = "Laptop";
const basePrice = 60000;

const discountedPrice = applyDiscount(basePrice, 10);
const taxAmount = caluclateTax(discountedPrice);
const finalPrice = discountedPrice + taxAmount;

console.log("Item:", itemPrice);
console.log("Base price:", formatCurrency(basePrice));
console.log("Discounted price:", formatCurrency(discountedPrice));
console.log("GST Tax @ 18%:", formatCurrency(taxAmount));
console.log("Final price:", formatCurrency(finalPrice));