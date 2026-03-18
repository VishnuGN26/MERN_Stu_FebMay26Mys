//combine mutiple promise-based steps with async/await
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(502);
        },500);
    });
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product: "Laptop",
                quantity: 2
            });
        },700);
    });
}
async function showOrderSummary(){
    const orderId = await getOrderId();
    console.log("Order Id:",orderId);

    const orderDetails = await getOrderDetails(orderId);
    console.log("Product:",orderDetails.product);
    console.log("Quantity:",orderDetails.quantity);
}
showOrderSummary();