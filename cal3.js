// Calculator variables
let displayValue = '';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// Display the value on the calculator screen
function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}

// Handle button clicks
function inputDigit(digit) {
  if (waitingForSecondOperand === true) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

// Handle decimal point input
function inputDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
  }
}

// Handle operator input
function handleOperator(nextOperator) {
  const inputValue = parseFloat(displayValue);

  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }

  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = performCalculation(operator, inputValue);
    displayValue = String(result);
    firstOperand = result;
  }

  waitingForSecondOperand = true;
  operator = nextOperator;
}

// Perform the calculation
function performCalculation(operator, secondOperand) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

// Reset the calculator
function resetCalculator() {
  displayValue = '';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}

// Add event listeners to buttons
document.getElementById('seven').addEventListener('click', () => {
  inputDigit(7);
  updateDisplay();
});

document.getElementById('eight').addEventListener('click', () => {
  inputDigit(8);
  updateDisplay();
});

document.getElementById('nine').addEventListener('click', () => {
  inputDigit(9);
  updateDisplay();
});

document.getElementById('four').addEventListener('click', () => {
  inputDigit(4);
  updateDisplay();
});

document.getElementById('five').addEventListener('click', () => {
  inputDigit(5);
  updateDisplay();
});

document.getElementById('six').addEventListener('click', () => {
  inputDigit(6);
  updateDisplay();
});

document.getElementById('one').addEventListener('click', () => {
  inputDigit(1);
  updateDisplay();
});

document.getElementById('two').addEventListener('click', () => {
  inputDigit(2);
  updateDisplay();
});

document.getElementById('three').addEventListener('click', () => {
  inputDigit(3);
  updateDisplay();
});

document.getElementById('zero').addEventListener('click', () => {
  inputDigit(0);
  updateDisplay();
});

document.getElementById('decimal').addEventListener('click', () => {
  inputDecimal();
  updateDisplay();
});

document.getElementById('add').addEventListener('click', () => {
  handleOperator('+');
  updateDisplay();
});

document.getElementById('subtract').addEventListener('click', () => {
  handleOperator('-');
  updateDisplay();
});

document.getElementById('multiply').addEventListener('click', () => {
  handleOperator('*');
  updateDisplay();
});

document.getElementById('divide').addEventListener('click', () => {
  handleOperator('/');
  updateDisplay();
});

document.getElementById('equals').addEventListener('click', () => {
  handleOperator('=');
  updateDisplay();
});

document.getElementById('clear').addEventListener('click', () => {
  resetCalculator();
  updateDisplay();
});
