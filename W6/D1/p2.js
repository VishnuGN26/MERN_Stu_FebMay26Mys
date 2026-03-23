// commonJS export and import
function caluclateTax(amount){
    return amount*0.18;
}

function applyDiscount(amount,percent){
    return amount - amount * (percent/100);
}

function formatCurrency(amount){
    return "INR "+amount.toFixed(2);
}
// module.exports makes these functions available to require()
module.exports = {caluclateTax,applyDiscount,formatCurrency};