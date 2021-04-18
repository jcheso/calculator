// Calculator operators
const divide = (a, b) => a / b;
const subtract = (a, b) => a - b;
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Calculator Function
function calculate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "divide":
      calcResult = divide(a, b);
      return calcResult;
    case "subtract":
      calcResult = subtract(a, b);
      return calcResult;
    case "sum":
      calcResult = sum(a, b);
      return calcResult;
    case "multiply":
      calcResult = multiply(a, b);
      return calcResult;
    default:
      return calcResult;
  }
}

var currentData = {
  valueA: "",
  operator: "",
};

// Add event listeners to the buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
    switch (button.id) {
      case "number": // If a number is selected run the newNumber script to update the display
        newNumber(button.value);
        break;
      case "operator": //If an operator is selected, check if a number has been entered and store both in memory
        // if - is selected and there is no current value, then add the - to the string instead of doing the operating
        if (button.value == 'subtract' && getCurrentValue() == ''){
          newNumber('-')
        }
        else{
          currentData = operateInput(button.value, currentData);

        }
        break;
      case "clear": // Wipe the display and reset any values in memory
        clearMemory();
        clearDisplay();
        break;
      case "delete": // Delete the last number input to the display
        deleteNumber();
        break;
      default:
        break;
    }
    console.log(button.value);
  });
});

// Get the current value entered into the display
function getCurrentValue() {
  const displayValue = document.querySelectorAll("#display");
  let currentValue = displayValue[0].innerText;
  return currentValue;
}

// Update the display to the value passed in
function updateDisplay(newValue) {
  document.getElementById("display").innerText = newValue;
}

// Clear the display visually, does not clear any values in memory
function clearDisplay() {
  document.getElementById("display").innerText = "";
}

// Clear the display and all objects in memory
function clearMemory() {
  currentData["valueA"] = "";
  currentData["operator"] = "";
  currentValue = "";
}

// Delete the last number entered and update the display
function deleteNumber() {
  currentValue = getCurrentValue();
  const newValue = currentValue.slice(0, -1);
  updateDisplay(newValue);
}

// Add the number selected to the current value and update the display.
// Check to see if it is a decimal and if there is already a decimal in the string - if so do not update string
function newNumber(inputValue) {
  let newValue = ''
  currentValue = getCurrentValue();
  if (inputValue == '.' && currentValue.indexOf('.') > -1){
    newValue = currentValue
  }
  else{
    newValue = currentValue + inputValue;
  }
  updateDisplay(newValue);
}

function operateInput(operator, currentData) {
  // Take the number on the display and the operator entered
  currentValue = getCurrentValue();

  // Check if there is already a number and operator in memory.
  // If there is no number and operator in memory, store the value of result + operator in the object
  if (currentData["operator"] == "") {
    currentData["valueA"] = currentValue;
    currentData["operator"] = operator;
    clearDisplay();
  }
  // Divide by zero check
  else if(currentData["operator"] == 'divide' && parseFloat(currentValue) == 0){
    updateDisplay('ERROR - Cannot divide by zero!')
    clearMemory()
  }
  // If valueA exists, perform the operation of A operate B first - then store the value of result + operator in the object.
  else if (operator != "calculate") {
    calcResult = calculate(
      currentData["operator"],
      currentData["valueA"],
      currentValue
    );
    currentData["valueA"] = calcResult;
    currentData["operator"] = operator;
    clearDisplay();

    //If the equals button is pressed calculate the equation and display the answer on the screen
  } else {
    calcResult = calculate(
      currentData["operator"],
      currentData["valueA"],
      currentValue
    );
    currentData["valueA"] = calcResult;
    currentData["operator"] = "";
    updateDisplay(calcResult.toFixed(2));
    currentValue = '';
  }
  return currentData;
}

// function storeOperation() {
//   const lastOperation;
// }

// On click store the value of the button in a temp variable
// Populate the display with variable

/* Create the functions that populate the display when you click the number buttons… 
you should be storing the ‘display value’ in a variable somewhere for use in the next step. */
