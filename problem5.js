/**
 * You Are Given an Array: 
            var fruits = ['Apple', 'Banana', 'Orange'];

    a)Find The Index of 'Banana' and replace 'Banana' with 'Mango'.
    b)Remove 'Orange' and Add 'Watermelon'       
 */

    var fruits = ['Apple', 'Banana', 'Orange'];

    var index = fruits.indexOf('Banana');
    console.log(index);


    fruits.pop();
    fruits.pop();
    fruits.push('Mango');
    fruits.push('orange')
    fruits.pop();
    fruits.push('Watermelon');
    
    console.log(fruits)
   