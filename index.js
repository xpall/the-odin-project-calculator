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
    if (e['target']['textContent'] === 'Clear') {
      displayNumbers = '';
      tailNumber = '';
      headNumber = '';
      tailOperator = '';
      headOperator = '';
      display.textContent = displayNumbers;
      console.log('-clear')
    }

    // make a copy of displayNumbers
    headNumber = displayNumbers;
    // reset display values
    displayNumbers = '';

    // do the previous operation, except for the very first operation (if no tailNumber)
    // this if statement tests this
    if (tailOperator === '' && headOperator === '' && tailOperator != 'Clear') {
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
      console.log(headNumber);
      console.log(tailNumber)
      if (Number(headNumber) == '') {
        headNumber = 1
      }
      if (Number(tailNumber) == '') {
        tailNumber = 1
      }
      getProd(Number(headNumber), Number(tailNumber));
    } else if (tailOperator === '/') {
      if (Number(headNumber) == '') {
        headNumber = 1
      }
      if (Number(tailNumber) == '') {
        tailNumber = 1
      }      
      getQuotient(Number(headNumber), Number(tailNumber));
    };
  })
});

function getSum(a = 0, b = 0) {
  sum = b + a;
  tailNumber = sum;
  // headNumber = '';
  display.textContent = tailNumber;
};

function getDiff(a = 0, b = 0) {
  diff = b - a;
  tailNumber = diff;
  // headNumber = '';
  display.textContent = tailNumber;
};

function getProd(a = 1, b = 1) {
  prod = Math.round(((b * a) * 100) / 100);
  tailNumber = prod;
  console.log(prod)
  // headNumber = '';
  display.textContent = tailNumber;
};

function getQuotient(a = 1, b = 1) {
  quotient = Math.round(((b / a) * 100) / 100);
  console.log(quotient)
  tailNumber = quotient;
  // headNumber = '';
  display.textContent = tailNumber;
};
