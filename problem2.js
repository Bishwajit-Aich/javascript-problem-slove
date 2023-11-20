/**
2. Write a program to calculate the average marks of Mathematics,Biology,Chemistry,Physics and Bangla Of A Student
 */

var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;
var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
var averageMarks = totalMarks/5;
var averageMarksFixedNumber = averageMarks.toFixed(2);
console.log("The Average Marks Is: ",averageMarksFixedNumber);