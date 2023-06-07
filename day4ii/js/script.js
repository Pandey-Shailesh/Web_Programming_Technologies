function Add() {
  var num1 = parseInt(document.getElementById("firstNumber").value);
  var num2 = parseInt(document.getElementById("secondNumber").value);
  var sum = num1 + num2;
  document.getElementById("result").innerHTML = sum;
}
function Subtract() {
  var num1 = parseInt(document.getElementById("firstNumber").value);
  var num2 = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = num1 - num2;
}
function Multiply() {
  var num1 = parseInt(document.getElementById("firstNumber").value);
  var num2 = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = num1 * num2;
}
function Divide() {
  var num1 = parseInt(document.getElementById("firstNumber").value);
  var num2 = parseInt(document.getElementById("secondNumber").value);
  document.getElementById("result").innerHTML = num1 / num2;
}