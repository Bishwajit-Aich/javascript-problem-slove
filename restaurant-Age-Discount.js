const age = 47;
const price = 500;

if(age <= 12){
    console.log("You Can Eat For Free!!");
}

else if (age >= 60){
    // 50% Discount
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if(age >=50){
    // 25% Discount
    const discount = price * 25/100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else if (age >= 40){
    // 10% Discount 
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else{
    console.log("You Are A Strong Man! Your Price is :",price);
}