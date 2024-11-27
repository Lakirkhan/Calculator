let currentInput = "0";  // Track the current input in the display
let operator = "";  // Store the current operator
let previousInput = "";  // Store the previous input (for operations)

const display = document.getElementById("display");

function appendNumber(number) {
  // If the current input is 0, replace it with the new number
  if (currentInput === "0") {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();  // Append the new number
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";  // Reset the input to 0
  previousInput = "";
  operator = "";
  updateDisplay();
}

function performOperation(op) {
  if (operator && previousInput) {
    calculateResult();  // Calculate if there's an existing operation
  }
  operator = op;
  previousInput = currentInput;  // Store current input for future operation
  currentInput = "0";  // Reset input for the next number
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  // Perform the calculation based on the operator
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        result = "Error";  // Prevent division by zero
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  // Update the display with the result and reset variables
  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput;
}
