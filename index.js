const operand = document.querySelectorAll('button.operand');
const operation  = document.querySelectorAll('button.operation');
const display = document.getElementById('display');

let currentOperand = '';
let tempAnswerContainer = '';

operand.forEach(operand => {
  operand.addEventListener('click', e => {
    // detect and get digit
    numKey = e['target']['textContent'];
    console.log(`${numKey} is ${(typeof numKey)}`);
    // save digit or digits
    currentOperand += numKey;
    // display digit or digits
    display.textContent = currentOperand;
  })
});

operation.forEach(operation => {
  operation.addEventListener('click', e => {
    // detect and get the operator symbol
    operator = e.target.textContent;
    // save and reset firstOperand
    previousValue = Number(currentOperand);
    currentOperand = '';
    
    // delegate operation
    if (operator === '+') {
      getSum(previousValue);
    }
  })
})

function getSum(x) {
  console.log(x + Number(currentOperand))
}


// limit number to 10digits


// when clicked an operation, 

//   immediately evaluate previous operations

// update display value