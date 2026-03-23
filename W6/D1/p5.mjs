// ES module exports       
// In the case of export we can have only one default export
// Named export for a shared constant
export const taxRate = 0.18;

// Named export for a reusable function
export function calculateTotal(subtotal){
    return subtotal + subtotal * taxRate;
}

// Default export
export default function createInvoiceLabel(invoiceNumber){
    return "Invoice: " + invoiceNumber;
}



