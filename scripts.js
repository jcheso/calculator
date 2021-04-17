// Calculator operators
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Calculator Function
function calculate(operator, a, b) {
  switch (operator) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "sum":
      result = sum(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    default:
      break;
  }
}

// Add event listeners to the buttons
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
    switch (button.id) {
      case "number":
        newNumber(button.value);
        break;
      case "operator":
        const currentValue = getCurrentValue();
        valueA = calculateResult(operator, currentValue);
        clearDisplay();
        return valueA;
      case "clear":
        clearDisplay();
        break;
      case "delete":
        removeNumber();
        break;
      default:
        break;
    }
    console.log(button.value);
  });
});

function getCurrentValue() {
  const displayValue = document.querySelectorAll("#display");
  const currentValue = displayValue[0].innerText;
  return currentValue;
}

function updateDisplay(newValue) {
  document.getElementById("display").innerText = newValue;
}

function clearDisplay() {
  document.getElementById("display").innerText = "";
}

function removeNumber() {
  const currentValue = getCurrentValue();
  const newValue = currentValue.slice(0, -1);
  updateDisplay(newValue);
}

function newNumber(inputValue) {
  const currentValue = getCurrentValue();
  const newValue = currentValue + inputValue;
  updateDisplay(newValue);
}

// function storeOperation(operator) {
//   const lastOperation = operator;
// }

// function storeNumber() {
//   const lastNumber = getCurrentValue();
// }

let valueA = null;

function calculateResult(operator, currentValue) {
  if (valueA != null) {
    currentValue = parseInt(currentValue);
    valueA = calculate(operator, currentValue);
  } else {
    valueA = parseInt(currentValue);
  }
  return valueA;
}

// function storeOperation() {
//   const lastOperation;
// }

// On click store the value of the button in a temp variable
// Populate the display with variable

/* Create the functions that populate the display when you click the number buttons… 
you should be storing the ‘display value’ in a variable somewhere for use in the next step. */
