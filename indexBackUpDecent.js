const operand = document.querySelectorAll('button.operand');
const operation  = document.querySelectorAll('button.operation');
const display = document.getElementById('display');

let displayNumbers = '';
let tailNumber = '';
let headNumber = '';
let tailOperator = '';
let headOperator = '';

// (1) for every numpress, save the digit
operand.forEach(operand => {
  operand.addEventListener('click', e => {
    numKey = e['target']['textContent'];
    displayNumbers += numKey;
    display.textContent = displayNumbers;
  })
});

// (2) once an operator is pressed,
operation.forEach(operation => {
  operation.addEventListener('click', e => {
    // make a copy of displayNumbers
    headNumber = displayNumbers;
    // reset display values
    displayNumbers = '';
    // do the previous operation, except for the very first operation (if no tailNumber)
    // this if statement tests this
    if (tailOperator === '' && headOperator === '') {
      tailOperator = e['target']['textContent'];
    } else if (tailOperator != '' && headOperator === '') {
      headOperator = e['target']['textContent'];
    } else {
      tailOperator = headOperator;
      headOperator = e['target']['textContent'];
    };
    // throw values to correct functions
    if (tailOperator === '+') {
      getSum(Number(headNumber), Number(tailNumber));
    } else if (tailOperator === '-') {
      getDiff(Number(headNumber), Number(tailNumber));
    } else if (tailOperator === '*') {
      getProd(Number(headNumber), Number(tailNumber));
    };
  })
});

function getSum(a, b = 0) {
  sum = b + a;
  tailNumber = sum;
  display.textContent = tailNumber;
};

function getDiff(a, b = 0) {
  diff = b - a;
  tailNumber = diff;
  display.textContent = tailNumber;
};

function getProd(a, b = 1) {
  prod = b * a;
  tailNumber = prod;
  display.textContent = tailNumber;
};
