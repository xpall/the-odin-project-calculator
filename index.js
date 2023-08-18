const operand = document.querySelectorAll('button.operand');
const operation  = document.querySelectorAll('button.operation');
const display = document.getElementById('display');

let displayNumbers = '';
let tailNumber = '';
let headNumber = '';
let tailOperator = '';
let headOperator = '';
dots = 0

// (1) for every numpress, save the digit
operand.forEach(operand => {
  operand.addEventListener('click', e => {
    numKey = e['target']['textContent'];
    console.log(numKey)
    // decimal point checker
    if (e['target']['textContent'] === '.') {
      dots += 1;
    }
    if (e['target']['textContent'] === '.' && dots > 1) {
      alert('Can\'t put multiple decimal points');
      numKey = ''
    };
    displayNumbers += numKey;
    display.textContent = displayNumbers;
  })
});

// (2) once an operator is pressed,
operation.forEach(operation => {
  operation.addEventListener('click', e => {
    // reset decimal count
    dots = 0;
    // check if 'Clear' is pressed
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
    if (tailOperator === '+' && tailNumber != '') {
      getSum(Number(headNumber), Number(tailNumber));
    } else if (tailOperator === '-' && tailNumber != '') {
      getDiff(Number(headNumber), Number(tailNumber));
    } else if (tailOperator === '*' && tailNumber != '') {
      getProd(Number(headNumber), Number(tailNumber));
    } else if (tailOperator === '/' && tailNumber != '') {
      getQuotient(Number(headNumber), Number(tailNumber));
    } else {
      tailNumber = headNumber;
    };
  })
});

function getSum(a, b = 0) {
  sum = b + a;
  tailNumber = sum;
  display.textContent = tailNumber;
};

function getDiff(a = 0, b = 0) {
  diff = b - a;
  tailNumber = diff;
  display.textContent = tailNumber;
};

function getProd(a = 1, b = 1) {
  // for decimal places if necessary
  prod = (Math.round((b * a * 100))) / 100;
  tailNumber = prod;
  display.textContent = tailNumber;
};

function getQuotient(a = 1, b = 1) {
  // restriction for zero denominator
  if (a === 0) {
    alert('Cannot divide by zero.')
    a = 1
  }
  quotient = (Math.round((b / a) * 100)) / 100;
  tailNumber = quotient;
  display.textContent = tailNumber;
};
