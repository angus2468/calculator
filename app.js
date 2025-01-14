let display = document.getElementById("displayText");

let buttonNum1 = document.getElementById("num1");
let buttonNum2 = document.getElementById("num2");
let buttonNum3 = document.getElementById("num3");
let buttonNum4 = document.getElementById("num4");
let buttonNum5 = document.getElementById("num5");
let buttonNum6 = document.getElementById("num6");
let buttonNum7 = document.getElementById("num7");
let buttonNum8 = document.getElementById("num8");
let buttonNum9 = document.getElementById("num9");
let buttonNum0 = document.getElementById("num0");
let buttonPlus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus");
let buttonDivide = document.getElementById("divide");
let buttonMultiply = document.getElementById("multiply");
let buttonEquals = document.getElementById("equals");
let operation = null;

let displayNumber = display.innerHTML;

let number1 = null;

buttonNum1.addEventListener("click", function () {
  display.innerHTML = displayNumber + "1";
  displayNumber = displayNumber + "1";
});

buttonNum2.addEventListener("click", function () {
  display.innerHTML = displayNumber + "2";
  displayNumber = displayNumber + "2";
});
buttonNum3.addEventListener("click", function () {
  display.innerHTML = displayNumber + "3";
  displayNumber = displayNumber + "3";
});
buttonNum4.addEventListener("click", function () {
  display.innerHTML = displayNumber + "4";
  displayNumber = displayNumber + "4";
});
buttonNum5.addEventListener("click", function () {
  display.innerHTML = displayNumber + "5";
  displayNumber = displayNumber + "5";
});
buttonNum6.addEventListener("click", function () {
  display.innerHTML = displayNumber + "6";
  displayNumber = displayNumber + "6";
});
buttonNum7.addEventListener("click", function () {
  display.innerHTML = displayNumber + "7";
  displayNumber = displayNumber + "7";
});
buttonNum8.addEventListener("click", function () {
  display.innerHTML = displayNumber + "8";
  displayNumber = displayNumber + "8";
});
buttonNum9.addEventListener("click", function () {
  display.innerHTML = displayNumber + "9";
  displayNumber = displayNumber + "9";
});
buttonNum0.addEventListener("click", function () {
  display.innerHTML = displayNumber + "0";
  displayNumber = displayNumber + "0";
});
buttonPlus.addEventListener("click", function () {
  number1 = displayNumber;
  display.innerText = "";
  displayNumber = display.innerHTML;
  operation = "+";
});
buttonMinus.addEventListener("click", function () {
  number1 = displayNumber;
  display.innerText = "";
  displayNumber = display.innerHTML;
  operation = "-";
});
buttonDivide.addEventListener("click", function () {
  number1 = displayNumber;
  display.innerText = "";
  displayNumber = display.innerHTML;
  operation = "/";
});
buttonMultiply.addEventListener("click", function () {
  number1 = displayNumber;
  display.innerText = "";
  displayNumber = display.innerHTML;
  operation = "*";
});
buttonEquals.addEventListener("click", function () {
  if (operation === "+") {
    display.innerHTML = +number1 + +displayNumber;
  } else if (operation === "-") {
    display.innerHTML = +number1 - +displayNumber;
  } else if (operation === "/") {
    display.innerHTML = +number1 / +displayNumber;
  } else if (operation === "*") {
    display.innerHTML = +number1 * +displayNumber;
  }
});
