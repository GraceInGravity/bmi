alert("What's wrong?!");

var bmi = function(weight, height) {
  return weight / (height * height) * 703;
};

var weight = parseFloat(prompt("Enter weight in pounds: "));
var height = parseFloat(prompt("Enter height in inches:"));

var result = bmi(weight, height);
alert(result);
