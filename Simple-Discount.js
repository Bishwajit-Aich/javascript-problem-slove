const price = 6000;

if(price >= 10000){
    // 10% Discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if ( price >= 5000){
    // 5% Discount
    const discount = price * 5/100;
    const payAmount = price - discount; 
    console.log(payAmount);
}

else{
    console.log(price);
}