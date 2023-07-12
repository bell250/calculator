function add(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}
function substract(a,b){
    return a-b;
}
function operate(num1,operator,num2){
    let result;
    if (operator === '+'){
      result= add(num1,num2)
    }
    else if (operator === '/' ){
        result= divide(num1,num2)
      }
      else if (operator === '*' ){
        result= multiply(num1,num2)
      }
      else if (operator === '-'){
        result= substract(num1,num2)
      }
      else{
        result ='error';
      }
      return result;
}
let screen = document.querySelector('#input');
const button = document.querySelectorAll('button:not(.operator):not(.clear):not(.delete):not(.point):not(.equal)');
const clear=document.querySelector('#clear');
const deletes=document.querySelector('#delete');
const point=document.querySelector('#point');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal')
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Add event listeners to digit buttons
button.forEach(button => {
  button.addEventListener('click', () => {
    if(screen.textContent ==='o'){
      screen.textContent='';
    }
    screen.textContent += button.textContent;
  });
});

  // Add event listener to clear button
clear.addEventListener('click', () => {
    screen.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
  });
  deletes.addEventListener('click',()=>{
    screen.textContent = screen.textContent.slice(0, -1);
  })
  point.addEventListener('click', () => {
    if (!screen.textContent.includes('.')) {
      if(screen.textContent ==='o'){
        screen.textContent='';
      }
      screen.textContent += '.';
    }
  });
  operators.forEach(button => {
    button.addEventListener('click', () => {
      operator = button.textContent;
      firstNumber = screen.textContent;
      screen.textContent = '';
    });
  });
  equal.addEventListener('click', () => {
    if (firstNumber && operator && screen.textContent) {
      secondNumber = screen.textContent;
      const result = operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
      if (result === "Error") {
        screen.textContent = "Cannot divide by zero";
      } else {
        screen.textContent = roundResult(result);
      }
      // Reset variables
      firstNumber = '';
      operator = '';
      secondNumber = '';
    }
  });
  function roundResult(result) {
    return parseFloat(result.toFixed(4));
  }
 