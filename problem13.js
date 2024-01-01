// Write a problem using break

for(var number = 1; number < 10; number++){
    if(number > 5){
        break;
    }
    console.log(number);
}

// Write a program using break also using for loop

for(var i = 1; i <= 20; i++){
    
    if(i > 5){
        break;
    }
    console.log(i)
}


// Write a program using break also using while

var roastGiven = 1;
while(roastGiven < 20){
    
    
    if(roastGiven > 5){
        break;
    }
    console.log('Please Give me A roast!!');
    roastGiven++;
}

// Another Problem Using Break 

var numbers = [96,52,36,86,51,188,23,96,74];


for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
  if(number > 100){
    break;
  }
    console.log(number);
}