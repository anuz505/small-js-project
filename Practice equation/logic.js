function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var firstNumber = getRandomInt(1,10);
  var secondNumber = getRandomInt(1,20);
  var thirdNumber  = getRandomInt(1,10)

function getRandomOperator(){
    var Operators = ['+','-','*','/'];

    var randomIndex = Math.floor(Math.random()*Operators.length)
    return Operators[randomIndex]
}
var randomOperator = getRandomOperator();
document.querySelector('.equation').innerHTML = `${firstNumber}x ${randomOperator} ${secondNumber} = ${thirdNumber} `;

var result = firstNumber + randomOperator + secondNumber
switch(randomOperator) {
  case '+':
      result = thirdNumber - secondNumber / firstNumber;
      break;
  case '-':
      result = thirdNumber + secondNumber / firstNumber;
      break;
  case '*':
      result = thirdNumber / secondNumber / firstNumber;
      break;
  case '/':
      result = thirdNumber * secondNumber / firstNumber;
      break;
  default:
      result = NaN; // Invalid operator
}
var integerResult = Math.floor(result);
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the user input from the input field
  var userInput = parseInt(document.getElementById('answer').value);

  // Compare the user's input with the calculated result
  if (userInput === integerResult) {
      alert("Correct!"); // Provide feedback about the correctness of the user's answer
  } else {
      alert("Incorrect. The correct answer is:" + result); // Provide feedback about the correctness of the user's answer along with the correct result
  }
});


  