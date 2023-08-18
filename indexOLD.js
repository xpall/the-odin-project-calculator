const operand = document.querySelectorAll('button.operand');
const operation  = document.querySelectorAll('button.operation');
const display = document.getElementById('display');

let currentOperand = '';
let pendingOperation = '';
let tempAnswerContainer = '';

operand.forEach(operand => {
  operand.addEventListener('click', e => {
    
    numKey = e['target']['textContent'];
    console.log(`${numKey} is ${(typeof numKey)}`);
      // save digit or digits
    currentOperand += numKey;
    // display digits
    display.textContent = currentOperand;
    // limit digits to 10
    if ((currentOperand.length) >= 10) {
      alert('Only put up to 10 digits')
    }
  })
});

operation.forEach(operation => {
  operation.addEventListener('click', e => {
    // detect and get the operator symbol
    operator = e.target.textContent;
    // save previous operation
    pendingOperation = operator;
    // save and reset firstOperand
    previousValue = Number(currentOperand);
    // check if no previous value
    currentOperand = '';

    // delegate operation
    if (pendingOperation === '+') {
      getSum(previousValue);
    }
  })
})

function getSum(x) {
  sum = currentOperand + x;
  console.log(sum)
}


// limit number to 10digits


// when clicked an operation, 

//   immediately evaluate previous operations

// update display value