// A simple Problem Using Continue

var numbers = [96,52,36,86,51,188,23,96,74];


for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
  if(number > 50){
    continue;
  }
    console.log(number);
}